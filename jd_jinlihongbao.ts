/**
 * 京东-锦鲤红包
 * 做任务、助力、开红包
 * cron: 2 0,6,18 * * *
 * 固定log，不知道什么时候会gg
 * CK1助力顺序
 * HW_Priority: boolean
 * true  HW.ts -> 内部
 * false 内部   -> HW.ts
 */

import axios from 'axios';
import USER_AGENT, {requireConfig, wait, getRandomNumberByRange, getshareCodeHW} from "./TS_USER_AGENTS";

let cookie: string = '', res: any = '', UserName: string, index: number;
let shareCodesSelf: string[] = [], shareCodes: string[] = [], shareCodesHW: string[] = [], HW_Priority: boolean = true
process.env.HW_Priority === 'false' ? HW_Priority = false : ''

!(async () => {
  let cookiesArr: any = await requireConfig();
  for (let [index, value] of cookiesArr.entries()) {
    try {
      cookie = value;
      UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
      console.log(`\n开始【京东账号${index + 1}】${UserName}\n`);

      res = await api('h5launch', {"followShop": 0, "random": getRandomNumberByRange(36135846, 74613584), "log": `${Date.now()}~0iuxyee`, "sceneid": "JLHBhPageh5"})
      console.log('活动初始化：', res.data.result.statusDesc)
      await wait(1000)

      res = await api('h5activityIndex', {"isjdapp": 1})
      console.log('红包ID：', res.data.result.redpacketInfo.id)
      shareCodesSelf.push(res.data.result.redpacketInfo.id)
    } catch (e) {
      console.log(e)
    }
  }

  console.log('内部助力：', shareCodesSelf)
  for (let [index, value] of cookiesArr.entries()) {
    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
    cookie = value;
    if (shareCodesHW.length === 0) {
      shareCodesHW = await getshareCodeHW('jlhb')
    }
    if (index === 0 && HW_Priority) {
      shareCodes = Array.from(new Set([...shareCodesHW, ...shareCodesSelf]))
    } else {
      shareCodes = Array.from(new Set([...shareCodesSelf, ...shareCodesHW]))
    }
    for (let code of shareCodes) {
      console.log(`账号${index + 1} ${UserName} 去助力 ${code}`)
      res = await api('jinli_h5assist', {"redPacketId": code, "followShop": 0, "random": getRandomNumberByRange(36135846, 74613584), "log": `${Date.now()}~0gga2ik`, "sceneid": "JLHBhPageh5"})
      if (res.data.result.status === 0) {
        console.log('助力成功：', parseFloat(res.data.result.assistReward.discount))
      } else if (res.data.result.status === 3) {
        console.log('今日助力次数已满')
        break
      } else {
        console.log('助力结果：', res.data.result.statusDesc)
      }
      await wait(1000)
    }
  }

  for (let [index, value] of cookiesArr.entries()) {
    try {
      cookie = value
      UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
      console.log(`\n开始【京东账号${index + 1}】${UserName}\n`);

      let j: number = 1
      res = await api('h5activityIndex', {"isjdapp": 1})
      for (let t of res.data.result.redpacketConfigFillRewardInfo) {
        if (t.packetStatus === 2) {
          console.log(`红包${j}已拆过，获得`, t.packetAmount)
        } else if (t.packetStatus === 1) {
          console.log(`红包${j}可拆`)
          res = await api('h5receiveRedpacketAll', {"random": getRandomNumberByRange(36135846, 74613584), "log": `${Date.now()}~0suodw0`, "sceneid": "JLHBhPageh5"})
          console.log(res.data.biz_msg, parseFloat(res.data.result.discount))
          await wait(2000)
        }
        j++
      }

      res = await api('taskHomePage', {})
      await wait(2000)
      for (let t of res.data.result.taskInfos) {
        if (!t.alreadyReceivedCount || t.alreadyReceivedCount < t.requireCount) {
          if ([2, 3, 4, 5, 8].includes(t.taskType)) {
            res = await api('startTask', {"taskType": t.taskType, "random": getRandomNumberByRange(36135846, 74613584), "log": `${Date.now()}~1orj8k3`, "sceneid": "JLHBhPageh5"})
            console.log(t.title, res.data.biz_msg)
            await wait(2000)
            res = await api('getTaskDetailForColor', {taskType: t.taskType})
            await wait(2000)
            for (let tp of res.data.result.advertDetails) {
              if (tp.status === 0) {
                res = await api('taskReportForColor', {"taskType": t.taskType, "detailId": tp.id})
                console.log(t.title, tp.name, res.data.biz_msg)
                await wait(2000)
              }
            }
          }
        }
        if (t.innerStatus === 3) {
          res = await api('h5receiveRedpacketAll', {"taskType": t.taskType, "random": getRandomNumberByRange(36135846, 74613584), "log": `${Date.now()}~138q6w6`, "sceneid": "JLHBhPageh5"})
          console.log(`${t.title} 打开成功，获得`, parseFloat(res.data.result.discount))
          await wait(2000)
        }
      }
    } catch (e) {
      console.log(e)
    }
  }
})()

async function api(fn: string, body: object) {
  let {data} = await axios.post(`https://api.m.jd.com/api?appid=jinlihongbao&functionId=${fn}&loginType=2&client=jinlihongbao&t=${Date.now()}&clientVersion=10.2.4&osVersion=-1`, `body=${encodeURIComponent(JSON.stringify(body))}`, {
    headers: {
      'Host': 'api.m.jd.com',
      'Origin': 'https://happy.m.jd.com',
      'Connection': 'keep-alive',
      'Accept': 'application/json, text/plain, */*',
      'User-Agent': USER_AGENT,
      'Referer': 'https://happy.m.jd.com/',
      'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': cookie
    }
  })
  return data
}
