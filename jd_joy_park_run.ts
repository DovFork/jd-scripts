/**
 * 汪汪乐园-跑步
 * 默认翻倍到0.04红包结束
 * export JD_JOY_PARK_RUN_ASSETS="0.04"
 * cron: 20 * * * *
 */

import {get, post, o2s, requireConfig, wait} from './TS_USER_AGENTS'
import {H5ST} from "./h5st"

let cookie: string = '', res: any = '', data: any, UserName: string
let assets: number = parseFloat(process.env.JD_JOY_PARK_RUN_ASSETS || '0.04')

!(async () => {
  let cookiesArr: string[] = await requireConfig()
  for (let [index, value] of cookiesArr.entries()) {
    cookie = value
    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
    console.log(`\n开始【京东账号${index + 1}】${UserName}\n`)

    res = await runningPageHome()
    o2s(res)

    console.log('能量恢复中', secondsToMinutes(res.data.runningHomeInfo.nextRunningTime / 1000), '能量棒', res.data.runningHomeInfo.energy)

    if (res.data.runningHomeInfo.nextRunningTime && res.data.runningHomeInfo.nextRunningTime / 1000 < 300) {
      await wait(res.data.runningHomeInfo.nextRunningTime)
      res = await runningPageHome()
      console.log('能量恢复中', secondsToMinutes(res.data.runningHomeInfo.nextRunningTime / 1000), '能量棒', res.data.runningHomeInfo.energy)
      await wait(1000)
    }

    if (!res.data.runningHomeInfo.nextRunningTime) {
      console.log('终点目标', assets)
      for (let i = 0; i < 10; i++) {
        res = await api('runningOpenBox', {"linkId": "L-sOanK_5RJCz7I314FpnQ"})
        o2s(res)

        if (parseFloat(res.data.assets) >= assets) {
          res = await api('runningPreserveAssets', {"linkId": "L-sOanK_5RJCz7I314FpnQ"})
          console.log('领取成功', res.data.prizeValue)
          break
        } else {
          if (res.data.doubleSuccess) {
            console.log('翻倍成功', parseFloat(res.data.assets))
            await wait(5000)
          } else if (!res.data.doubleSuccess && !res.data.runningHomeInfo.runningFinish) {
            console.log('开始跑步', parseFloat(res.data.assets))
            await wait(5000)
          } else {
            console.log('翻倍失败')
            break
          }
        }
        await wait(5000)
      }
    }

    res = await runningPageHome()
    console.log('🧧', res.data.runningHomeInfo.prizeValue)
    await wait(2000)
  }
})()

async function api(fn: string, body: object) {
  let timestamp: number = Date.now(), h5st: string = ''
  if (fn === 'runningOpenBox') {
    let t: { key: string, value: string }[] = [
      {key: "appid", value: "activities_platform"},
      {key: "body", value: JSON.stringify(body)},
      {key: "client", value: "ios"},
      {key: "clientVersion", value: "3.1.0"},
      {key: "functionId", value: "runningOpenBox"},
      {key: "t", value: timestamp.toString()}
    ]
    h5st = await new H5ST(t, 'b6ac3', 'jdltapp;', '1804945295425750').__run()
  }
  return await post('https://api.m.jd.com/', `functionId=${fn}&body=${JSON.stringify(body)}&t=${timestamp}&appid=activities_platform&client=ios&clientVersion=3.1.0&h5st=${h5st}&cthr=1`, {
    'authority': 'api.m.jd.com',
    'content-type': 'application/x-www-form-urlencoded',
    'cookie': cookie,
    'origin': 'https://h5platform.jd.com',
    'referer': 'https://h5platform.jd.com/',
    'user-agent': 'jdltapp;'
  })
}

async function runningPageHome() {
  return get(`https://api.m.jd.com/?functionId=runningPageHome&body=%7B%22linkId%22:%22L-sOanK_5RJCz7I314FpnQ%22,%22isFromJoyPark%22:true,%22joyLinkId%22:%22LsQNxL7iWDlXUs6cFl-AAg%22%7D&t=${Date.now()}&appid=activities_platform&client=ios&clientVersion=3.1.0`, {
    'Host': 'api.m.jd.com',
    'Origin': 'https://h5platform.jd.com',
    'User-Agent': 'jdltapp;',
    'Referer': 'https://h5platform.jd.com/',
    'Cookie': cookie
  })
}

// 秒转时分秒
function secondsToMinutes(seconds: number) {
  let minutes: number = Math.floor(seconds / 60)
  let second: number = Math.floor(seconds % 60)
  return `${minutes}分${second}秒`
}