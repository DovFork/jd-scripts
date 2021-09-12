/**
* TODO
* 团
* 
* cron: 30 * * * *
*/

import {format} from 'date-fns';
import axios from "axios";
import {h5st, requireConfig, requestAlgo, wait} from "./TS_USER_AGENTS";

let cookie: string = '', res: any = '', UserName: string, index: number;


interface Params {
  name?: string,
  pin?: string,
  sharePin?: string,
  shareType?: string,
  materialTuanPin?: string,
  materialTuanId?: string,
  needPickSiteInfo?: number,
  source?: string,
  productionId?: number,
  date?: string,
  taskId?: number,
  configExtra?: string,
  factoryid?: number,
  querytype?: number,
  apptoken?: string,
  pgtimestamp?: string,
  phoneID?: string,
  doubleflag?: number,
  timeStamp?: string,

}

!(async () => {
  await requestAlgo(10001)
  let cookiesArr: any = await requireConfig();
  for (let i = 0; i < cookiesArr.length; i++) {
    cookie = cookiesArr[i];
    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
    index = i + 1;
    console.log(`\n开始【京东账号${index}】${UserName}\n`);

    res = await api('userinfo/GetUserInfo', '_time,materialTuanId,materialTuanPin,needPickSiteInfo,pin,sharePin,shareType,source,zone', {
      pin: '',
      sharePin: '',
      shareType: '',
      materialTuanPin: '',
      materialTuanId: '',
      needPickSiteInfo: 0,
      source: ''
    })
    let productionId: number = 0
    await wait(1000)
    try {
      productionId = res.data.productionList[0].productionId
    } catch (e) {
      console.log('当前没有产品在生产')
      continue
    }

    // 收发电机
    let factoryId: number = res.data.factoryList[0].factoryId
    res = await api('generator/QueryCurrentElectricityQuantity', '_time,factoryid,querytype,zone', {factoryid: factoryId, querytype: 1})
    await wait(1000)
    let flag: number = -1
    if (res.data.nextCollectDoubleFlag === 1) {
      // 下次双倍
      if (res.data.currentElectricityQuantity === res.data.maxElectricityQuantity) {
        // 发电机满
        flag = 1
      } else {
        console.log('发电机可收取双倍，但没满')
      }
    } else {
      // 没有双倍，直接收
      flag = 0
    }
    if (flag !== -1) {
      res = await api('generator/CollectCurrentElectricity',
        '_time,apptoken,doubleflag,factoryid,pgtimestamp,phoneID,zone',
        {apptoken: '', pgtimestamp: '', phoneID: '', factoryid: factoryId, doubleflag: flag, timeStamp: 'undefined'})
      res.ret === 0
        ? console.log('发电机收取成功：', res.data.CollectElectricity)
        : console.log('发电机收取失败：', res)
    }
    await wait(2000)

    // 投入电力
    for (let j = 0; j < 3; j++) {
      res = await api('userinfo/InvestElectric', '_time,productionId,zone', {productionId: productionId})
      if (res.ret === 0) {
        console.log('投入电力：', res.data.investElectric)
      } else {
        console.log(res.msg)
        break
      }
      await wait(3000)
    }

    res = await api('friend/QueryHireReward', '_time,zone')
    await wait(1000)
    for (let t of res.data.hireReward) {
      if (t.date !== format(Date.now(), "yyyyMMdd")) {
        res = await api('friend/HireAward', '_time,date,type,zone', {date: t.date})
        await wait(1000)
        if (res.ret === 0)
          console.log('收取气泡成功：', t.electricityQuantity)
      }
    }

    console.log('任务列表开始')
    for (let j = 0; j < 30; j++) {
      if (await task() === 0) {
        break
      }
      await wait(4000)
    }
    console.log('任务列表结束')
  }
})()

async function task() {
  res = await api('GetUserTaskStatusList', '_time,bizCode,source')
  console.log('GetUserTaskStatusList: 刷新任务列表')
  await wait(2000)
  for (let t of res.data.userTaskStatusList) {
    if (t.awardStatus === 2) {
      if (t.completedTimes >= t.targetTimes) {
        console.log('可领奖:', t.taskName)
        res = await api('Award', '_time,bizCode,source,taskId', {taskId: t.taskId})
        if (res.ret === 0) {
          console.log('领奖成功:', res.data.prizeInfo.trim() * 1)
          await wait(4000)
          return 1
        } else {
          console.log('领奖出错')
          return 0
        }
      }

      if (t.dateType === 2 && t.completedTimes < t.targetTimes && [2, 6, 9].indexOf(t.taskType) > -1) {
        console.log('任务开始:', t.taskName)
        res = await api('DoTask', '_time,bizCode,configExtra,source,taskId', {configExtra: '', taskId: t.taskId})
        await wait(5000)
        if (res.ret === 0) {
          console.log('任务完成');
          await wait(3000)
          return 1
        } else {
          console.log('任务失败:')
          return 0
        }
      }
    }
  }
  return 0
}

function api(fn: string, stk: string, params: Params = {}) {
  return new Promise((resolve, reject) => {
    let url: string = ''
    if (['GetUserTaskStatusList', 'DoTask', 'Award'].indexOf(fn) > -1)
      url = `https://m.jingxi.com/newtasksys/newtasksys_front/${fn}?source=dreamfactory&bizCode=dream_factory&_time=${Date.now()}&_stk=${encodeURIComponent(stk)}&_ste=1&_=${Date.now()}&sceneval=2`
    else
      url = `https://m.jingxi.com/dreamfactory/${fn}?zone=dream_factory&_time=${Date.now()}&_stk=${encodeURIComponent(stk)}&_ste=1&_=${Date.now()}&sceneval=2`
    url = h5st(url, stk, params, 10001)
    axios.get(url, {
      headers: {
        'Cookie': cookie,
        'Host': 'm.jingxi.com',
        'User-Agent': 'jdpingou;',
        'Referer': 'https://st.jingxi.com/pingou/dream_factory/index.html',
      }
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      console.log('err:', err)
      reject(err)
    })
  })
}
