/**
 * 京喜牧场
 * 买、喂、收蛋、锄草、挑逗
 * // TODO
 * 领奖、任务
 */

import {format} from 'date-fns';
import {writeFileSync} from 'fs'
import axios from 'axios';
import USER_AGENT from './TS_USER_AGENTS';

const CryptoJS = require('crypto-js')

// console.log('时间戳：', format(new Date(), 'yyyyMMddHHmmssSSS'));

let appId: number = 10028, fingerprint: string | number, token: string, enCryptMethodJD: any;
let cookie: string = '', cookiesArr: Array<string> = [], res: any = '', shareCodes: Array<string>;
let homePageInfo: any;

let UserName: string, index: number, isLogin: boolean, nickName: string
!(async () => {
  await requestAlgo();
  await requireConfig();

  for (let i = 0; i < cookiesArr.length; i++) {
    cookie = cookiesArr[i];
    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
    index = i + 1;
    isLogin = true;
    nickName = '';
    await TotalBean();
    console.log(`\n开始【京东账号${index}】${nickName || UserName}\n`);

    homePageInfo = await api('queryservice/GetHomePageInfo', 'channel,isgift,sceneid', {isgift: 0})
    let food: number = homePageInfo.data.materialinfo[0].value;
    let petid: number = homePageInfo.data.petinfo[0].petid
    let coins = homePageInfo.data.coins;

    console.log('pet id:', petid)
    console.log('现有草:', food);
    console.log('金币:', coins);

    let taskRetCode: number = 0;
    while (taskRetCode === 0) {
      taskRetCode = await getTask();
      console.log('taskRetCode:', taskRetCode)
      if (taskRetCode === 0) {
        await wait(4000);
      } else {
        break
      }
    }
    while (coins >= 5000 && food <= 500) {
      res = await api('operservice/Buy', 'channel,sceneid,type', {type: '1'})
      if (res.ret === 0) {
        console.log('买草成功:', res.data.newnum)
        coins -= 5000
        food += 100
      } else {
        console.log(res)
        break
      }
      await wait(1500)
    }
    await wait(2000)
    while (food >= 10) {
      res = await api('operservice/Feed', 'channel,sceneid')
      if (res.ret === 0) {
        food -= 10
        console.log('剩余草:', res.data.newnum)
      } else if (res.ret === 2020) {
        if (res.data.maintaskId === 'pause') {
          console.log('收🥚')
          res = await api('operservice/GetSelfResult', 'channel,itemid,sceneid,type', {petid: petid, type: '11'})
          if (res.ret === 0) {
            console.log('收🥚成功:', res.data.newnum)
          }
        }
      } else {
        console.log(res)
        break
      }
      await wait(4000)
    }
    await wait(2000)

    while (1) {
      try {
        res = await api('operservice/Action', 'channel,sceneid,type', {type: '2'})
        console.log(res)
        if (res.data.addcoins === 0) break
        console.log('锄草:', res.data.addcoins)
        await wait(1500)
      } catch (e) {
        console.log('Error:', e)
        break
      }
    }
    await wait(2000)

    while (1) {
      try {
        res = await api('operservice/Action', 'channel,sceneid,type', {type: '1', petid: petid})
        if (res.data.addcoins === 0) break
        console.log('挑逗:', res.data.addcoins)
        await wait(1500)
      } catch (e) {
        console.log('Error:', e)
        break
      }
    }
  }
})()

interface Params {
  isgift?: number,
  petid?: number,
  type?: string,
  taskId?: number
  configExtra?: string
}

function api(fn: string, stk: string, params: Params = {}) {
  return new Promise(async (resolve, reject) => {
    let url = `https://m.jingxi.com/jxmc/${fn}?channel=7&sceneid=1001&_stk=${encodeURIComponent(stk)}&_ste=1&sceneval=2`
    if (Object.keys(params).length !== 0) {
      let key: (keyof Params)
      for (key in params) {
        if (params.hasOwnProperty(key))
          url += `&${key}=${params[key]}`
      }
    }
    url += '&h5st=' + decrypt(stk, url)
    try {
      let {data} = await axios.get(url, {
        headers: {
          'Cookie': cookie,
          'Host': 'm.jingxi.com',
          'User-Agent': 'jdpingou;iPhone;4.11.0;12.4.1;52cf225f0c463b69e1e36b11783074f9a7d9cbf0;network/wifi;model/iPhone11,6;appBuild/100591;ADID/C51FD279-5C69-4F94-B1C5-890BC8EB501F;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/503;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
          'Referer': 'https://st.jingxi.com/',
        }
      })
      resolve(data)
    } catch (e) {
      reject(401)
    }
  })
}

function getTask() {
  return new Promise<number>(async resolve => {
    let tasks: any = await taskAPI('GetUserTaskStatusList', 'bizCode,dateType,source')
    let doTaskRes: any = {ret: 1}, code: number = 1
    for (let t of tasks.data.userTaskStatusList) {
      if ((t.dateType === 1 || t.dateType === 2) && t.completedTimes == t.targetTimes && t.awardStatus === 2) {
        // 成就任务
        t.dateType === 1
          ?
          console.log('成就任务可领取:', t.taskName, t.completedTimes, t.targetTimes)
          :
          console.log('每日任务可领取:', t.taskName, t.completedTimes, t.targetTimes)

        doTaskRes = await taskAPI('Award', 'bizCode,source,taskId', {taskId: t.taskId})
        await wait(4000)
        if (doTaskRes.ret === 0) {
          let awardCoin = doTaskRes['data']['prizeInfo'].match(/:(.*)}/)![1] * 1
          console.log('领奖成功:', awardCoin)
        }
      }
      if (t.dateType === 2 && t.completedTimes < t.targetTimes && t.awardStatus === 2 && t.taskType === 2) {
        console.log('可做每日任务:', t.taskName, t.taskId)
        doTaskRes = await taskAPI('DoTask', 'bizCode,configExtra,source,taskId', {taskId: t.taskId, configExtra: ''})
        console.log(doTaskRes)
        if (doTaskRes.ret === 0) {
          console.log('任务完成')
          await wait(5000)
        }
      }
    }
    resolve(doTaskRes.ret)
  })
}

function taskAPI(fn: string, stk: string, params: Params = {}) {
  return new Promise(async resolve => {
    let url = `https://m.jingxi.com/newtasksys/newtasksys_front/${fn}?_=${Date.now()}&source=jxmc&bizCode=jxmc&_ste=1&sceneval=2&_stk=${encodeURIComponent(stk)}&g_login_type=1&g_ty=ajax`
    if (Object.keys(params).length !== 0) {
      let key: (keyof Params)
      for (key in params) {
        if (params.hasOwnProperty(key))
          url += `&${key}=${params[key]}`
      }
    }
    url += '&h5st=' + decrypt(stk, url)
    let {data} = await axios.get(url, {
      headers: {
        'Origin': 'https://st.jingxi.com',
        'Accept-Language': 'zh-cn',
        'Connection': 'keep-alive',
        'Host': 'm.jingxi.com',
        'Referer': 'https://st.jingxi.com/pingou/jxmc/index.html?nativeConfig=%7B%22immersion%22%3A1%2C%22toColor%22%3A%22%23e62e0f%22%7D&__mcwvt=sjcp&PTAG=139279.13.31&jxsid=16257474246337594063',
        'Accept': 'application/json',
        'User-Agent': 'jdpingou;iPhone;4.11.0;12.4.1;52cf225f0c463b69e1e36b11783074f9a7d9cbf0;network/wifi;model/iPhone11,6;appBuild/100591;ADID/C51FD279-5C69-4F94-B1C5-890BC8EB501F;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/503;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
        'Cookie': cookie
      }
    })
    resolve(data)
  })
}

async function requestAlgo() {
  fingerprint = await generateFp();
  return new Promise(async resolve => {
    let {data} = await axios.post('https://cactus.jd.com/request_algo?g_ty=ajax', {
      "version": "1.0",
      "fp": fingerprint,
      "appId": appId,
      "timestamp": Date.now(),
      "platform": "web",
      "expandParams": ""
    }, {
      "headers": {
        'Authority': 'cactus.jd.com',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'Accept': 'application/json',
        'User-Agent': USER_AGENT,
        'Content-Type': 'application/json',
        'Origin': 'https://st.jingxi.com',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://st.jingxi.com/',
        'Accept-Language': 'zh-CN,zh;q=0.9,zh-TW;q=0.8,en;q=0.7'
      },
    })
    if (data['status'] === 200) {
      token = data.data.result.tk;
      let enCryptMethodJDString = data.data.result.algo;
      if (enCryptMethodJDString) enCryptMethodJD = new Function(`return ${enCryptMethodJDString}`)();
    } else {
      console.log(`fp: ${fingerprint}`)
      console.log('request_algo 签名参数API请求失败:')
    }
    resolve(200)
  })
}

function decrypt(stk: string, url: string) {
  const timestamp = (format(new Date(), 'yyyyMMddhhmmssSSS'))
  let hash1: string;
  if (fingerprint && token && enCryptMethodJD) {
    hash1 = enCryptMethodJD(token, fingerprint.toString(), timestamp.toString(), appId.toString(), CryptoJS).toString(CryptoJS.enc.Hex);
  } else {
    const random = '5gkjB6SpmC9s';
    token = `tk01wcdf61cb3a8nYUtHcmhSUFFCfddDPRvKvYaMjHkxo6Aj7dhzO+GXGFa9nPXfcgT+mULoF1b1YIS1ghvSlbwhE0Xc`;
    fingerprint = 9686767825751161;
    // $.fingerprint = 7811850938414161;
    const str = `${token}${fingerprint}${timestamp}${appId}${random}`;
    hash1 = CryptoJS.SHA512(str, token).toString(CryptoJS.enc.Hex);
  }
  let st: string = '';
  stk.split(',').map((item, index) => {
    st += `${item}:${getQueryString(url, item)}${index === stk.split(',').length - 1 ? '' : '&'}`;
  })
  const hash2 = CryptoJS.HmacSHA256(st, hash1.toString()).toString(CryptoJS.enc.Hex);
  return encodeURIComponent(["".concat(timestamp.toString()), "".concat(fingerprint.toString()), "".concat(appId.toString()), "".concat(token), "".concat(hash2)].join(";"))
}

function requireConfig() {
  return new Promise<void>(resolve => {
    console.log('开始获取配置文件\n')
    const jdCookieNode = require('./jdCookie.js');
    Object.keys(jdCookieNode).forEach((item) => {
      if (jdCookieNode[item]) {
        cookiesArr.push(jdCookieNode[item])
      }
    })
    console.log(`共${cookiesArr.length}个京东账号\n`)
    resolve()
  })
}

function TotalBean() {
  return new Promise<void>(async resolve => {
    axios.get('https://me-api.jd.com/user_new/info/GetJDUserInfoUnion', {
      headers: {
        Host: "me-api.jd.com",
        Connection: "keep-alive",
        Cookie: cookie,
        "User-Agent": USER_AGENT,
        "Accept-Language": "zh-cn",
        "Referer": "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
        "Accept-Encoding": "gzip, deflate, br"
      }
    }).then(res => {
      if (res.data) {
        let data = res.data
        if (data['retcode'] === "1001") {
          isLogin = false; //cookie过期
          return;
        }
        if (data['retcode'] === "0" && data['data'] && data.data.hasOwnProperty("userInfo")) {
          nickName = data.data.userInfo.baseInfo.nickname;
        }
      } else {
        console.log('京东服务器返回空数据');
      }
    }).catch(e => {
      console.log('Error:', e)
    })
    resolve();
  })
}

function generateFp() {
  let e = "0123456789";
  let a = 13;
  let i = '';
  for (; a--;)
    i += e[Math.random() * e.length | 0];
  return (i + Date.now()).slice(0, 16)
}

function getQueryString(url: string, name: string) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = url.split('?')[1].match(reg);
  if (r != null) return unescape(r[2]);
  return '';
}

function wait(t: number) {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, t)
  })
}