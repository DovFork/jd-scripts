/**
 * 东东世界
 * https://ddsj-dz.isvjcloud.com/
 * cron: 5 0,8,20 * * *
 */

import axios from 'axios'
import USER_AGENT, {getshareCodeHW, o2s, requireConfig, wait} from './TS_USER_AGENTS'

let cookie: string = '', res: any = '', shareCodesInternal: any[] = [], UserName: string
let tokenKey: string = '', token: string = '', bearer: string = ''
let HW_Priority: boolean = true, shareCodeHW: any[] = [], shareCode: any[] = []
/**
 * CK1助力顺序
 * HW_Priority: boolean
 * true  HW.ts -> 内部
 * false 内部   -> HW.ts
 */
process.env.HW_Priority === 'false' ? HW_Priority = false : ''

!(async () => {
  let cookiesArr: any = await requireConfig()
  for (let [index, value] of cookiesArr.entries()) {
    cookie = value
    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
    console.log(`\n开始【京东账号${index + 1}】${UserName}\n`)
    await getIsvToken()
    await getIsvToken2()
    await getToken()

    res = await api('get_task')
    for (let t of res.result.taskVos) {
      if (t.status === 1) {
        if (t.simpleRecordInfoVo) {
          // 签到
          res = await api('do_task', `taskToken=${t.simpleRecordInfoVo.taskToken}&task_id=${t.taskId}&task_type=${t.taskType}`)
          console.log('签到成功：', res.score)
          await wait(1000)
        } else {
          let items: any = t.browseShopVo || t.shoppingActivityVos || t.productInfoVos || []
          for (let item of items) {
            if (item.status === 1) {
              let name = item.shopName || item.title || item.skuName
              res = await api('do_task', `taskToken=${item.taskToken}&task_id=${t.taskId}&task_type=${t.taskType}&task_name=${encodeURIComponent(name)}`)
              await wait(5000)
              console.log('任务完成：', res.score)
            }
          }
        }
        if (t.taskName === '邀请好友助力') {
          res = await api('get_user_info')
          console.log('助力码：', t.assistTaskDetailVo.taskToken, res.openid)
          shareCodesInternal.push({
            taskToken: t.assistTaskDetailVo.taskToken,
            inviter_id: res.openid
          })
        }
      }
    }

    if (new Date().getHours() === 20) {
      res = await api('get_exchange')
      console.log(res)
      for (let t of res) {
        if (t.times_limit !== t.exchange_total) {
          console.log('兑换', t.coins)
          res = await api('do_exchange', `id=${t.id}`)
          o2s(res)
          await wait(5000)
        }
      }
    }
  }

  console.log('内部助力码：', shareCodesInternal)

  for (let [index, value] of cookiesArr.entries()) {
    cookie = value
    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
    await getIsvToken()
    await getIsvToken2()
    await getToken()

    if (shareCodeHW.length === 0) {
      shareCodeHW = await getshareCodeHW('ddWorld')
    }
    if (index === 0 && HW_Priority) {
      shareCode = [...shareCodeHW, ...shareCodesInternal]
    } else {
      shareCode = [...shareCodesInternal, ...shareCodeHW]
    }
    for (let code of shareCodesInternal) {
      console.log(`${UserName} 去助力 ${code.taskToken}`)
      res = await api('do_assist_task', `taskToken=${code.taskToken}&inviter_id=${code.inviter_id}`)
      o2s(res)
      // console.log('助力结果：', res)
      await wait(4000)
      if (res.status_code === 422)
        break
    }
  }
})()

async function api(fn: string, body: string = '') {
  let headers = {
    'Host': 'ddsj-dz.isvjcloud.com',
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': USER_AGENT,
    'Authorization': `Bearer ${bearer}`,
    'Referer': 'https://ddsj-dz.isvjcloud.com/dd-world/',
  }
  if (body) {
    try {
      let {data} = await axios.post(`https://ddsj-dz.isvjcloud.com/dd-api/${fn}`, body, {headers})
      return data
    } catch (e) {
      return e.response.data
    }
  } else {
    try {
      let {data} = await axios.get(`https://ddsj-dz.isvjcloud.com/dd-api/${fn}`, {headers})
      return data
    } catch (e) {
      return
    }
  }
}

async function getIsvToken() {
  let {data}: any = await axios.post(`https://api.m.jd.com/client.action?functionId=genToken`,
    `body=%7B%22to%22%3A%22https%3A%2F%2Fddsj-dz.isvjcloud.com%2Fdd-world%2Fload_app%2Fload_app.html%22%2C%22action%22%3A%22to%22%7D&uuid=4ccb375c539fd92bade&client=apple&clientVersion=10.0.10&st=1631884082694&sv=111&sign=1a49fd69e7d3c18cad91cc00ed40d327`, {
      headers: {
        'Host': 'api.m.jd.com',
        'accept': '*/*',
        'content-type': 'application/x-www-form-urlencoded',
        'referer': '',
        'user-agent': 'JD4iPhone/167814 (iPhone; iOS 12.4.1; Scale/3.00)',
        'accept-language': 'zh-Hans-CN;q=1',
        'Cookie': cookie
      }
    })
  tokenKey = data.tokenKey
  return
}

async function getIsvToken2() {
  let {data}: any = await axios.post("https://api.m.jd.com/client.action?functionId=isvObfuscator",
    `body=%7B%22id%22%3A%22%22%2C%22url%22%3A%22https%3A%2F%2Fddsj-dz.isvjcloud.com%22%7D&uuid=5162ca82aed35fc52e8&client=apple&clientVersion=10.0.10&st=1631884203742&sv=112&sign=fd40dc1c65d20881d92afe96c4aec3d0`, {
      headers: {
        'Host': 'api.m.jd.com',
        'accept': '*/*',
        'content-type': 'application/x-www-form-urlencoded',
        'referer': '',
        'user-agent': 'JD4iPhone/167814 (iPhone; iOS 12.4.1; Scale/3.00)',
        'accept-language': 'zh-Hans-CN;q=1',
        'Cookie': cookie
      }
    })
  token = data.token
  return
}

async function getToken() {
  let {data}: any = await axios.post('https://ddsj-dz.isvjcloud.com/dd-api/jd-user-info',
    `token=${token}&source=01`, {
      headers: {
        'Host': 'ddsj-dz.isvjcloud.com',
        'Origin': 'https://ddsj-dz.isvjcloud.com',
        'Authorization': 'Bearer undefined',
        'User-Agent': USER_AGENT,
        'Referer': 'https://ddsj-dz.isvjcloud.com',
        'Cookie': `IsvToken=${tokenKey};`
      }
    })
  bearer = data.access_token
  return
}
