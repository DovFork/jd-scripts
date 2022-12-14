/**
 * 种豆得豆 脚本更新地址：jd_plantBean.js
 * 更新时间：2021-04-9
 * 活动入口：京东APP我的-更多工具-种豆得豆
 * 已支持IOS京东多账号,云端多京东账号
 * 脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
 * 注：会自动关注任务中的店铺跟商品，介意者勿使用。
 * 互助码shareCode请先手动运行脚本查看打印可看到
 * 每个京东账号每天只能帮助3个人。多出的助力码将会助力失败。
 * =====================================Quantumult X=================================
 * [task_local]
 * 1 7-21/2 * * * jd_plantBean.js, tag=种豆得豆, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdzd.png, enabled=true
 * =====================================Loon================================
 * [Script]
 * cron "1 7-21/2 * * *" script-path=jd_plantBean.js,tag=京东种豆得豆
 * ======================================Surge==========================
 * 京东种豆得豆 = type=cron,cronexp="1 7-21/2 * * *",wake-system=1,timeout=3600,script-path=jd_plantBean.js
 * ====================================小火箭=============================
 * 京东种豆得豆 = type=cron,script-path=jd_plantBean.js, cronexpr="1 7-21/2 * * *", timeout=3600, enable=true
 * 搬的https://github.com/uniqueque/QuantumultX/blob/4c1572d93d4d4f883f483f907120a75d925a693e/Script/jd_plantBean.js
 */

const $ = new Env('京东种豆得豆');
let jdNotify = true;//是否开启静默运行。默认true开启
let cookiesArr = [], cookie = '', jdPlantBeanShareArr = [], notify, newShareCodes, message, subTitle;
const JD_API_HOST = 'https://api.m.jd.com/client.action';

let shareCodes = ['']
let allMessage = ``;
let currentRoundId = null;//本期活动id
let lastRoundId = null;//上期id
let roundList = [];
let awardState = '';//上期活动的京豆是否收取
let num;

!(async () => {
  await requireConfig();
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
    return;
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
      $.index = i + 1;
      $.isLogin = true;
      $.nickName = '';
      console.log(`开始【京东账号${$.index}】${$.nickName || $.UserName}\n`);
      message = '';
      subTitle = '';
      option = {};
      await jdPlantBean();
      await showMsg();
    }
  }
  if ($.isNode() && allMessage) {
    await notify.sendNotify(`${$.name}`, `${allMessage}`)
  }
})().catch((e) => {
  $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
}).finally(() => {
  $.done();
})

async function jdPlantBean() {
  try {
    console.log(`获取任务及基本信息`)
    await plantBeanIndex();
    if ($.plantBeanIndexResult.errorCode === 'PB101') {
      console.log(`\n活动太火爆了，还是去买买买吧！\n`)
      return
    }
    for (let i = 0; i < $.plantBeanIndexResult.data?.roundList?.length; i++) {
      if ($.plantBeanIndexResult.data.roundList[i].roundState === "2") {
        num = i
        break
      }
    }
    if ($.plantBeanIndexResult && $.plantBeanIndexResult.code === '0' && $.plantBeanIndexResult.data) {
      const shareUrl = $.plantBeanIndexResult.data.jwordShareInfo.shareUrl
      $.myPlantUuid = getParam(shareUrl, 'plantUuid')
      console.log(`\n【京东账号${$.index}（${$.UserName}）的${$.name}好友互助码】${$.myPlantUuid}\n`);
      jdPlantBeanShareArr.push($.myPlantUuid)

      roundList = $.plantBeanIndexResult.data.roundList;
      currentRoundId = roundList[num].roundId;//本期的roundId
      lastRoundId = roundList[num - 1].roundId;//上期的roundId
      awardState = roundList[num - 1].awardState;
      $.taskList = $.plantBeanIndexResult.data.taskList;
      subTitle = `【京东昵称】${$.plantBeanIndexResult.data.plantUserInfo.plantNickName}`;
      message += `【上期时间】${roundList[num - 1].dateDesc.replace('上期 ', '')}\n`;
      message += `【上期成长值】${roundList[num - 1].growth}\n`;
      await receiveNutrients();//定时领取营养液
      await doTask();//做日常任务
      await stealFriendWater();
      await doCultureBean();
      await doGetReward();
      await showTaskProcess();
      await plantShareSupportList();
    } else {
      console.log(`种豆得豆-初始失败:  ${JSON.stringify($.plantBeanIndexResult)}`);
    }
  } catch (e) {
    $.logErr(e);
    const errMsg = `京东账号${$.index} ${$.nickName || $.UserName}\n任务执行异常，请检查执行日志 ‼️‼️`;
    $.msg($.name, '', `${errMsg}`)
  }
}

async function doGetReward() {
  console.log(`【上轮京豆】${awardState === '4' ? '采摘中' : awardState === '5' ? '可收获了' : '已领取'}`);
  if (awardState === '4') {
    message += `【上期状态】${roundList[num - 1].tipBeanEndTitle}\n`;
  } else if (awardState === '5') {
    await getReward();
    console.log('开始领取京豆');
    if ($.getReward && $.getReward.code === '0') {
      console.log('京豆领取成功');
      message += `【上期兑换京豆】${$.getReward.data.awardBean}个\n`;
      $.msg($.name, subTitle, message);
      allMessage += `京东账号${$.index}🆔 ${$.nickName}\n${message}${$.index !== cookiesArr.length ? '\n\n' : ''}`
    } else {
      console.log(`$.getReward 异常：${JSON.stringify($.getReward)}`)
    }
  } else if (awardState === '6') {
    message += `【上期兑换京豆】${roundList[num - 1].awardBeans}个\n`;
  }
  if (roundList[num].dateDesc.indexOf('本期 ') > -1) {
    roundList[num].dateDesc = roundList[num].dateDesc.substr(roundList[num].dateDesc.indexOf('本期 ') + 3, roundList[num].dateDesc.length);
  }
  message += `【本期时间】${roundList[num].dateDesc}\n`;
  message += `【本期成长值】${roundList[num].growth}\n`;
}

async function doCultureBean() {
  await plantBeanIndex();
  if ($.plantBeanIndexResult && $.plantBeanIndexResult.code === '0') {
    const plantBeanRound = $.plantBeanIndexResult.data?.roundList[num]
    if (plantBeanRound?.roundState === '2') {
      //收取营养液
      if (plantBeanRound.bubbleInfos && plantBeanRound.bubbleInfos.length) console.log(`开始收取营养液`)
      for (let bubbleInfo of plantBeanRound.bubbleInfos) {
        console.log(`收取-${bubbleInfo.name}-的营养液`)
        await cultureBean(plantBeanRound.roundId, bubbleInfo.nutrientsType)
        console.log(`收取营养液结果:${JSON.stringify($.cultureBeanRes)}`)
      }
    }
  } else {
    console.log(`plantBeanIndexResult:${JSON.stringify($.plantBeanIndexResult)}`)
  }
}

async function stealFriendWater() {
  await stealFriendList();
  if ($.stealFriendList && $.stealFriendList.code === '0') {
    if ($.stealFriendList.data && $.stealFriendList.data.tips) {
      console.log('\n\n今日偷取好友营养液已达上限\n\n');
      return
    }
    if ($.stealFriendList.data && $.stealFriendList.data.friendInfoList && $.stealFriendList.data.friendInfoList.length > 0) {
      let nowTimes = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
      for (let item of $.stealFriendList.data.friendInfoList) {
        if (new Date(nowTimes).getHours() === 20) {
          if (item.nutrCount >= 2) {
            // console.log(`可以偷的好友的信息::${JSON.stringify(item)}`);
            console.log(`可以偷的好友的信息paradiseUuid::${JSON.stringify(item.paradiseUuid)}`);
            await collectUserNutr(item.paradiseUuid);
            console.log(`偷取好友营养液情况:${JSON.stringify($.stealFriendRes)}`)
            if ($.stealFriendRes && $.stealFriendRes.code === '0') {
              console.log(`偷取好友营养液成功`)
            }
          }
        } else {
          if (item.nutrCount >= 3) {
            // console.log(`可以偷的好友的信息::${JSON.stringify(item)}`);
            console.log(`可以偷的好友的信息paradiseUuid::${JSON.stringify(item.paradiseUuid)}`);
            await collectUserNutr(item.paradiseUuid);
            console.log(`偷取好友营养液情况:${JSON.stringify($.stealFriendRes)}`)
            if ($.stealFriendRes && $.stealFriendRes.code === '0') {
              console.log(`偷取好友营养液成功`)
            }
          }
        }
        await $.wait(1000)
      }
    }
  } else {
    console.log(`$.stealFriendList 异常： ${JSON.stringify($.stealFriendList)}`)
  }
}

async function doTask() {
  if ($.taskList && $.taskList.length > 0) {
    for (let item of $.taskList) {
      if (item.isFinished === 1) {
        console.log(`${item.taskName} 任务已完成\n`);
        continue;
      } else {
        switch (item.taskType) {
          case 92:
            await farmtask();
            continue;
          case 57:
            await jxdoublesign1('https://m.jingxi.com/jxbfd/user/DoubleSignDeal?g_ty=h5&g_tk=&appCode=msd1188198&__t=1657108409440&dwEnv=7&strDeviceId=a3b4e844090b28d5c38e7529af8115172079be4d&strZone=jxbfd&bizCode=jxbfd&source=jxbfd&_cfd_t=1657108409190&_stk=__t%2C_cfd_t%2CbizCode%2CdwEnv%2Csource%2CstrDeviceId%2CstrZone&_ste=1&h5st=20220706195330228%3B1980457211661562%3B10032%3Btk02w78551ad830nuMcGB4Qsv9QxapLP7gZdOCYE5PVV%2Bna%2Bb4KU21drJq64oP82965Vdc1tGqVU%2Flp7ydcZ5XgH0Feh%3B241b6f1d21bf8e41f380a5dd29a7bac2a6f1f65a0c7ef1b1f751eaea4c40dd9c%3B3.0%3B1657108410228&sceneval=2');
            await $.wait(2000);
            await jxdoublesign1('https://wq.jd.com/jxjdsignin/SignedInfo?channel=jx_zdddsq&_t=1658021925021&h5st=20220717093845024%3B5548444396555217%3B0f6ed%3Btk02w9b851b9c18nin7CZjR7vNSlwRexAOGWbYAbl85d9DiQJ1SufW8ZQEQ%2FSygreq626CVRO2gT8DwUUTLBXGyK6wam%3B7eb86560860f8f60ad3b679c34f89aacf891b5a85580efd0a30c355537bfec54%3B3.0%3B1658021925024&_stk=_t%2Cchannel&_=1658021925027&sceneval=2&g_login_type=1&g_ty=ajax&appCode=msc588d6d5');
            await $.wait(1000);
            await jxdoublesign1('https://wq.jd.com/jxjdsignin/IssueReward?channel=jx_zdddsq&_t=1658021926276&h5st=20220717093846279%3B5548444396555217%3B0f6ed%3Btk02w9b851b9c18nin7CZjR7vNSlwRexAOGWbYAbl85d9DiQJ1SufW8ZQEQ%2FSygreq626CVRO2gT8DwUUTLBXGyK6wam%3Be2d7b6810b3bd1b9d9692d354ecbb582e69afc64df19bd8d6c14632b1a65660c%3B3.0%3B1658021926279&_stk=_t%2Cchannel&sceneval=2&g_login_type=1&g_ty=ajax&appCode=msc588d6d5');
            await $.wait(1000);
            continue;
          case 96:
            await tjdoublesign('https://wq.jd.com/tjjdsignin/SignedInfo?channel=jx_zdddsq&_t=1665408290789&h5st=20221010212450810%3B6918147264530298%3B0f6ed%3Btk02wc5421cb218nIrUUKibebHSO9xcuoGghWvuYMwC0SFXJaDjbIH5j0m1wTODJ7fc1RtfXsa5cpPVqYaFcfWpgnN63%3Badb2b487bdc5153c21cdb5904f6341286fda615ab4ebcf9a3e88e2d6b82ae05e%3B3.1%3B1665408290810%3B62f4d401ae05799f14989d31956d3c5f0a269d1342e4ecb6ab00268fc69555cdc3295f00e681fd72cd76a48b9fb3faf3579d80b37c85b023e9e8ba94d8d2b852b9cbef42726bbe41ffd8c74540f4a1ced584468ba9e46bfbef62144b678f5532e02456edc95e6131cb12c2dd5fa5c6c0496017f4d3b47ccd5533601d6637bade7c708817b3649de05cdc0f31e890c46e&_stk=_t%2Cchannel&_=1665408290814&sceneval=2&g_login_type=1&g_ty=ajax&appCode=msc588d6d5');
            await $.wait(2000);
            await tjdoublesign('https://wq.jd.com/tjjdsignin/IssueReward?channel=jx_zdddsq&_t=1665408290397&h5st=20221010212450410%3B6918147264530298%3B0f6ed%3Btk02wc5421cb218nIrUUKibebHSO9xcuoGghWvuYMwC0SFXJaDjbIH5j0m1wTODJ7fc1RtfXsa5cpPVqYaFcfWpgnN63%3Bbe06e2e3ebb5fde9e89c2126456346c7c8b75462d1d0e60c41f9e46c11838a6e%3B3.1%3B1665408290410%3B62f4d401ae05799f14989d31956d3c5f0a269d1342e4ecb6ab00268fc69555cdc3295f00e681fd72cd76a48b9fb3faf3579d80b37c85b023e9e8ba94d8d2b852b9cbef42726bbe41ffd8c74540f4a1ced584468ba9e46bfbef62144b678f5532e02456edc95e6131cb12c2dd5fa5c6c0496017f4d3b47ccd5533601d6637bade7c708817b3649de05cdc0f31e890c46e&_stk=_t%2Cchannel&sceneval=2&g_login_type=1&g_ty=ajax&appCode=msc588d6d5');
            await $.wait(1000);
            await tjdoublesign('https://wq.jd.com/tjjdsignin/SignedInfo?channel=jx_zdddsq&_t=1665408290789&h5st=20221010212450810%3B6918147264530298%3B0f6ed%3Btk02wc5421cb218nIrUUKibebHSO9xcuoGghWvuYMwC0SFXJaDjbIH5j0m1wTODJ7fc1RtfXsa5cpPVqYaFcfWpgnN63%3Badb2b487bdc5153c21cdb5904f6341286fda615ab4ebcf9a3e88e2d6b82ae05e%3B3.1%3B1665408290810%3B62f4d401ae05799f14989d31956d3c5f0a269d1342e4ecb6ab00268fc69555cdc3295f00e681fd72cd76a48b9fb3faf3579d80b37c85b023e9e8ba94d8d2b852b9cbef42726bbe41ffd8c74540f4a1ced584468ba9e46bfbef62144b678f5532e02456edc95e6131cb12c2dd5fa5c6c0496017f4d3b47ccd5533601d6637bade7c708817b3649de05cdc0f31e890c46e&_stk=_t%2Cchannel&_=1665408290814&sceneval=2&g_login_type=1&g_ty=ajax&appCode=msc588d6d5');
            await $.wait(1000);
            continue;
          case 3:
            console.log(`开始做 ${item.taskName}任务`);
            let unFinishedShopNum = item.totalNum - item.gainedNum;
            if (unFinishedShopNum === 0) {
              continue
            }
            await shopTaskList();
            const {data} = $.shopTaskListRes;
            let goodShopListARR = [], moreShopListARR = [], shopList = [];
            const {goodShopList, moreShopList} = data;
            if (goodShopList) {
              for (let i of goodShopList) {
                if (i.taskState === '2') {
                  goodShopListARR.push(i);
                }
              }
            }
            if (moreShopList) {
              for (let j of moreShopList) {
                if (j.taskState === '2') {
                  moreShopListARR.push(j);
                }
              }
            }

            shopList = goodShopListARR.concat(moreShopListARR);
            for (let shop of shopList) {
              const {shopId, shopTaskId} = shop;
              const body = {
                "monitor_refer": "plant_shopNutrientsTask",
                "shopId": shopId,
                "shopTaskId": shopTaskId
              }
              const shopRes = await requestGet('shopNutrientsTask', body);
              console.log(`shopRes结果:${JSON.stringify(shopRes)}`);
              if (shopRes && shopRes.code === '0') {
                if (shopRes.data && shopRes.data.nutrState && shopRes.data.nutrState === '1') {
                  unFinishedShopNum--;
                }
              }
              if (unFinishedShopNum <= 0) {
                console.log(`${item.taskName}任务已做完\n`)
                break;
              }
            }
            continue;
          case 5:
            //挑选商品
            console.log(`开始做 ${item.taskName}任务`);
            let unFinishedProductNum = item.totalNum - item.gainedNum;
            if (unFinishedProductNum === 0) {
              continue
            }
            await productTaskList();
            // console.log('productTaskList', $.productTaskList);
            //const { data1 } = $.productTaskList;
            let productListARR = [], productList = [];
            const {productInfoList} = $.productTaskList.data;
            for (let i = 0; i < productInfoList.length; i++) {
              for (let j = 0; j < productInfoList[i].length; j++) {
                productListARR.push(productInfoList[i][j]);
              }
            }
            for (let i of productListARR) {
              if (i.taskState === '2') {
                productList.push(i);
              }
            }
            for (let product of productList) {
              const {skuId, productTaskId} = product;
              const body = {
                "monitor_refer": "plant_productNutrientsTask",
                "productTaskId": productTaskId,
                "skuId": skuId
              }
              const productRes = await requestGet('productNutrientsTask', body);
              if (productRes && productRes.code === '0') {
                // console.log('nutrState', productRes)
                //这里添加多重判断,有时候会出现活动太火爆的问题,导致nutrState没有
                if (productRes.data && productRes.data.nutrState && productRes.data.nutrState === '1') {
                  unFinishedProductNum--;
                }
              }
              if (unFinishedProductNum <= 0) {
                console.log(`${item.taskName}任务已做完\n`)
                break;
              }
            }
            continue;
          case 10:
            //关注频道
            console.log(`开始做 ${item.taskName}任务`);
            let unFinishedChannelNum = item.totalNum - item.gainedNum;
            if (unFinishedChannelNum === 0) {
              continue
            }
            await plantChannelTaskList();
            //const { data2 } = $.plantChannelTaskList;
            // console.log('goodShopList', data.goodShopList);
            // console.log('moreShopList', data.moreShopList);
            let goodChannelListARR = [], normalChannelListARR = [], channelList = [];
            const {goodChannelList, normalChannelList} = $.plantChannelTaskList.data;
            for (let i of goodChannelList) {
              if (i.taskState === '2') {
                goodChannelListARR.push(i);
              }
            }
            for (let j of normalChannelList) {
              if (j.taskState === '2') {
                normalChannelListARR.push(j);
              }
            }
            channelList = goodChannelListARR.concat(normalChannelListARR);
            for (let channelItem of channelList) {
              const {channelId, channelTaskId} = channelItem;
              const body = {
                "channelId": channelId,
                "channelTaskId": channelTaskId
              }
              const channelRes = await requestGet('plantChannelNutrientsTask', body);
              console.log(`channelRes结果:${JSON.stringify(channelRes)}`);
              if (channelRes && channelRes.code === '0') {
                if (channelRes.data && channelRes.data.nutrState && channelRes.data.nutrState === '1') {
                  unFinishedChannelNum--;
                }
              }
              if (unFinishedChannelNum <= 0) {
                console.log(`${item.taskName}任务已做完\n`)
                break;
              }
            }
            continue;
          default:
            console.log(`\n开始做 ${item.taskName}任务`);
            // $.receiveNutrientsTaskRes = await receiveNutrientsTask(item.taskType);
            await receiveNutrientsTask(item.taskType);
            console.log(`做 ${item.taskName}任务结果:${JSON.stringify($.receiveNutrientsTaskRes)}\n`);
            continue;
        }
      }
    }
  }
}

function showTaskProcess() {
  return new Promise(async resolve => {
    await plantBeanIndex();
    $.taskList = $.plantBeanIndexResult.data?.taskList;
    if ($.taskList && $.taskList.length > 0) {
      console.log("     任务   进度");
      for (let item of $.taskList) {
        console.log(`[${item["taskName"]}]  ${item["gainedNum"]}/${item["totalNum"]}   ${item["isFinished"]}`);
      }
    }
    resolve()
  })
}

function showMsg() {
  $.log(`\n${message}\n`);
  jdNotify = $.getdata('jdPlantBeanNotify') ? $.getdata('jdPlantBeanNotify') : jdNotify;
  if (!jdNotify || jdNotify === 'false') {
    $.msg($.name, subTitle, message);
  }
}

async function farmtask() {
  await receivefruit();
  await $.wait(500);
  await dofarm('gotConfigDataForBrand');
  await $.wait(500);
  await dofarm('initForFarm');
  await $.wait(500);
  await dofarm('taskInitForFarm');
  await $.wait(500);
  await dofarm('farmMarkStatus');
  await $.wait(500);
  await dofarm('initForFarm');
  await $.wait(500);
}

async function receivefruit() {
  const body = {
    "monitor_refer": "plant_receiveNutrientsTask",
    "monitor_source": "plant_app_plant_index",
    "awardType": "92",
    "version": "9.2.4.2"
  }
  await request('receiveNutrientsTask', body)
}

async function dofarm(function_id) {
  let body = {
    "version": 17,
    "channel": 1,
    "babelChannel": "45"
  }
  if (function_id == 'gotConfigDataForBrand') {
    body["type"] = "json";
    body["k"] = "farmShareConfig";
  }
  return new Promise(async resolve => {
    const option = {
      url: `${JD_API_HOST}?functionId=${function_id}&body=${encodeURIComponent(JSON.stringify(body))}&appid=wh5`,
      headers: {
        'Cookie': cookie,
        'Host': 'api.m.jd.com',
        'Accept': '*/*',
        'Connection': 'keep-alive',
        'User-Agent': 'JD4iPhone/167283 (iPhone;iOS 13.6.1;Scale/3.00)',
        'Accept-Encoding': 'gzip, deflate, br',
        'Referer': 'https://h5.m.jd.com'
      },
      timeout: 20000,
    };
    $.get(option, (err, resp, data) => {
      try {
        if (err) {
          console.log('\n API查询请求失败 ‼️‼️')
          $.logErr(err);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    })
  })

}

function jxdoublesign1(url) {
  let opt = {
    url,
    headers: {
      //'Host': 'wq.jd.com',
      'accept': 'application/json',
      'referer': 'https://st.jingxi.com/',
      'User-Agent': 'jdpingou;iPhone;4.13.0;14.4.2;${randomString(40)};network/wifi;model/iPhone10,2;appBuild/100609;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/1;hasOCPay/0;supportBestPay/0;session/${Math.random * 98 + 1};pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
      'Cookie': 'cid=4;' + cookie
    }
  }
  return new Promise(async resolve => {
    $.get(opt, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
            //data = JSON.parse(data);
            //console.log(data)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
    resolve()
  })
}

function tjdoublesign(url) {
  let opt = {
    url,
    headers: {
      'Accept': 'application/json',
      'Referer': 'https://wqs.jd.com/',
      'User-Agent': $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
      'Cookie': cookie
    }
  }
  return new Promise(async resolve => {
    $.get(opt, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`tjdoublesign 请求失败，请检查网路重试`)
        } else {
          if (data) {
            //data = JSON.parse(data);
            //console.log(data)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}

async function getReward() {
  const body = {
    "roundId": lastRoundId
  }
  $.getReward = await request('receivedBean', body);
}

//收取营养液
async function cultureBean(currentRoundId, nutrientsType) {
  let functionId = arguments.callee.name.toString();
  let body = {
    "roundId": currentRoundId,
    "nutrientsType": nutrientsType,
  }
  $.cultureBeanRes = await request(functionId, body);
}

//偷营养液大于等于3瓶的好友
//①查询好友列表
async function stealFriendList() {
  const body = {
    pageNum: '1'
  }
  $.stealFriendList = await request('plantFriendList', body);
}

//②执行偷好友营养液的动作
async function collectUserNutr(paradiseUuid) {
  console.log('开始偷好友');
  // console.log(paradiseUuid);
  let functionId = arguments.callee.name.toString();
  const body = {
    "paradiseUuid": paradiseUuid,
    "roundId": currentRoundId
  }
  $.stealFriendRes = await request(functionId, body);
}

async function receiveNutrients() {
  $.receiveNutrientsRes = await request('receiveNutrients', {"roundId": currentRoundId, "monitor_refer": "plant_receiveNutrients"})
  // console.log(`定时领取营养液结果:${JSON.stringify($.receiveNutrientsRes)}`)
}

//查询天天扭蛋的机会
async function egg() {
  $.plantEggLotteryRes = await requestGet('plantEggLotteryIndex');
}

async function productTaskList() {
  let functionId = arguments.callee.name.toString();
  $.productTaskList = await requestGet(functionId, {"monitor_refer": "plant_productTaskList"});
}

async function plantChannelTaskList() {
  let functionId = arguments.callee.name.toString();
  $.plantChannelTaskList = await requestGet(functionId);
  // console.log('$.plantChannelTaskList', $.plantChannelTaskList)
}

async function shopTaskList() {
  let functionId = arguments.callee.name.toString();
  $.shopTaskListRes = await requestGet(functionId, {"monitor_refer": "plant_receiveNutrients"});
  // console.log('$.shopTaskListRes', $.shopTaskListRes)
}

async function receiveNutrientsTask(awardType) {
  const functionId = arguments.callee.name.toString();
  const body = {
    "monitor_refer": "receiveNutrientsTask",
    "awardType": `${awardType}`,
  }
  $.receiveNutrientsTaskRes = await requestGet(functionId, body);
}

async function plantShareSupportList() {
  $.shareSupportList = await requestGet('plantShareSupportList', {"roundId": ""});
  if ($.shareSupportList && $.shareSupportList.code === '0') {
    const {data} = $.shareSupportList;
    //当日北京时间0点时间戳
    const UTC8_Zero_Time = parseInt((Date.now() + 28800000) / 86400000) * 86400000 - 28800000;
    //次日北京时间0点时间戳
    const UTC8_End_Time = parseInt((Date.now() + 28800000) / 86400000) * 86400000 - 28800000 + (24 * 60 * 60 * 1000);
    let friendList = [];
    data.map(item => {
      if (UTC8_Zero_Time <= item['createTime'] && item['createTime'] < UTC8_End_Time) {
        friendList.push(item);
      }
    })
    message += `【助力您的好友】共${friendList.length}人`;
  } else {
    console.log(`异常情况：${JSON.stringify($.shareSupportList)}`)
  }
}

//助力好友的api
async function plantBeanIndex() {
  $.plantBeanIndexResult = await request('plantBeanIndex');//plantBeanIndexBody
}

//格式化助力码
function requireConfig() {
  return new Promise(resolve => {
    console.log('开始获取种豆得豆配置文件\n')
    notify = $.isNode() ? require('./sendNotify') : '';
    const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
    const jdPlantBeanShareCodes = $.isNode() ? require('./jdPlantBeanShareCodes.js') : '';
    if ($.isNode()) {
      Object.keys(jdCookieNode).forEach((item) => {
        if (jdCookieNode[item]) {
          cookiesArr.push(jdCookieNode[item])
        }
      })
      if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
      };
    } else {
      cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
    }
    console.log(`共${cookiesArr.length}个京东账号\n`)
    $.shareCodesArr = [];
    if ($.isNode()) {
      Object.keys(jdPlantBeanShareCodes).forEach((item) => {
        if (jdPlantBeanShareCodes[item]) {
          $.shareCodesArr.push(jdPlantBeanShareCodes[item])
        }
      })
    } else {
      if ($.getdata('jd_plantbean_inviter')) $.shareCodesArr = $.getdata('jd_plantbean_inviter').split('\n').filter(item => !!item);
      console.log(`\nBoxJs设置的${$.name}好友邀请码:${$.getdata('jd_plantbean_inviter') ? $.getdata('jd_plantbean_inviter') : '暂无'}\n`);
    }
    // console.log(`\n种豆得豆助力码::${JSON.stringify($.shareCodesArr)}`);
    console.log(`您提供了${$.shareCodesArr.length}个账号的种豆得豆助力码\n`);
    resolve()
  })
}

function requestGet(function_id, body = {}) {
  if (!body.version) {
    body["version"] = "9.2.4.2";
  }
  body["monitor_source"] = "plant_app_plant_index";
  body["monitor_refer"] = "";
  return new Promise(async resolve => {
    await $.wait(2000);
    const option = {
      url: `${JD_API_HOST}?functionId=${function_id}&body=${escape(JSON.stringify(body))}&appid=ld`,
      headers: {
        'Cookie': cookie,
        'Host': 'api.m.jd.com',
        'Accept': '*/*',
        'Connection': 'keep-alive',
        'User-Agent': 'JD4iPhone/167283 (iPhone;iOS 13.6.1;Scale/3.00)',
        'Accept-Language': 'zh-Hans-CN;q=1,en-CN;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': "application/x-www-form-urlencoded"
      },
      timeout: 20000,
    };
    $.get(option, (err, resp, data) => {
      try {
        if (err) {
          console.log('\n种豆得豆: API查询请求失败 ‼️‼️')
          $.logErr(err);
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}

function request(function_id, body = {}) {
  return new Promise(async resolve => {
    await $.wait(2000);
    $.post(taskUrl(function_id, body), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n种豆得豆: API查询请求失败 ‼️‼️')
          console.log(`function_id:${function_id}`)
          $.logErr(err);
        } else if (data.indexOf('data') > -1) {
          data = JSON.parse(data);
        } else {
          data = JSON.parse(data);
          console.log(data.errorMessage)
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}

function taskUrl(function_id, body) {
  body["version"] = "9.2.4.2";
  body["monitor_source"] = "plant_app_plant_index";
  if (!body["monitor_refer"]) {
    body["monitor_refer"] = "";
  }
  return {
    url: JD_API_HOST,
    body: `functionId=${function_id}&body=${encodeURIComponent(JSON.stringify(body))}&appid=ld&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2`,
    headers: {
      "Cookie": cookie,
      //"Host": "api.m.jd.com",
      "Accept": "*/*",
      //"Connection": "keep-alive",
      "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
      "Accept-Language": "zh-Hans-CN;q=1,en-CN;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    timeout: 20000,
  }
}

function getParam(url, name) {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
  const r = url.match(reg)
  if (r != null) return unescape(r[2]);
  return null;
}

function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}

// prettier-ignore
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

  class s {
    constructor(t) {
      this.env = t
    }

    send(t, e = "GET") {
      t = "string" == typeof t ? {url: t} : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }

    get(t) {
      return this.send.call(this.env, t)
    }

    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }

  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
    }

    isNode() {
      return "undefined" != typeof module && !!module.exports
    }

    isQuanX() {
      return "undefined" != typeof $task
    }

    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }

    isLoon() {
      return "undefined" != typeof $loon
    }

    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }

    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }

    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {
      }
      return s
    }

    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }

    getScript(t) {
      return new Promise(e => {
        this.get({url: t}, (t, s, i) => e(i))
      })
    }

    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), n = {url: `http://${h}/v1/scripting/evaluate`, body: {script_text: t, mock_type: "cron", timeout: r}, headers: {"X-Key": o, Accept: "*/*"}};
        this.post(n, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }

    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }

    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }

    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
      return r
    }

    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }

    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }

    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }

    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }

    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }

    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }

    get(t, e = (() => {
    })) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
        const {statusCode: s, statusCode: i, headers: r, body: o} = t;
        e(null, {status: s, statusCode: i, headers: r, body: o}, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {statusCode: s, statusCode: i, headers: r, body: o} = t;
        e(null, {status: s, statusCode: i, headers: r, body: o}, o)
      }, t => {
        const {message: s, response: i} = t;
        e(s, i, i && i.body)
      }))
    }

    post(t, e = (() => {
    })) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
        const {statusCode: s, statusCode: i, headers: r, body: o} = t;
        e(null, {status: s, statusCode: i, headers: r, body: o}, o)
      }, t => e(t)); else if (this.isNode()) {
        this.initGotEnv(t);
        const {url: s, ...i} = t;
        this.got.post(s, i).then(t => {
          const {statusCode: s, statusCode: i, headers: r, body: o} = t;
          e(null, {status: s, statusCode: i, headers: r, body: o}, o)
        }, t => {
          const {message: s, response: i} = t;
          e(s, i, i && i.body)
        })
      }
    }

    time(t, e = null) {
      const s = e ? new Date(e) : new Date;
      let i = {"M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds()};
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t
    }

    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
            return {openUrl: e, mediaUrl: s}
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
            return {"open-url": e, "media-url": s}
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {url: e}
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
      }
    }

    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }

    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
    }

    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }

    done(t = {}) {
      const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
