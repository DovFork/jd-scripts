/**
 * cron: 30 * * * *
 */

import {User, JDHelloWorld} from "./TS_JDHelloWorld";
import {smashUtils} from "./utils/log";
import {getshareCodeHW} from "./TS_USER_AGENTS";

class Jd_cash_signin extends JDHelloWorld {
  user: User
  shareCodeSelf: string[] = []

  constructor() {
    super();
  }

  async init() {
    await this.run(this)
  }

  async api(fn: string, body: object) {
    return await this.post(`https://api.m.jd.com/client.action`,
      `functionId=${fn}&appid=signed_wh5&body=${JSON.stringify(body)}&timestamp=${Date.now()}&client=iOS&clientVersion=11.3.6`, {
        'Host': 'api.m.jd.com',
        'Origin': 'https://bunearth.m.jd.com',
        'Referer': 'https://bunearth.m.jd.com/',
        'Cookie': this.user.cookie,
        'user-agent': this.user.UserAgent,
      })
  }

  async main(user: User) {
    this.user = user
    let res: any, data: any
    try {
      res = await this.api('city_getHomeDatav1', {"lbsCity": "", "realLbsCity": "", "inviteId": "", "headImg": "", "userName": "", "taskChannel": "1", "location": "", "safeStr": ""})
      let inviteId: string = res.data.result.userActBaseInfo.inviteId
      console.log('助力码', inviteId)
      this.shareCodeSelf.push(inviteId)

      for (let t of res.data.result.mainInfos || []) {
        if (t.remaingAssistNum === 0 && t.status === '1') {
          data = await this.api('city_receiveCash', {"cashType": 1, "roundNum": t.roundNum})
          console.log('领取', parseFloat(data.data.result.currentTimeCash))
          console.log('合计', parseFloat(data.data.result.totalCash))
          await this.wait(2000)
        }
      }

      res = await this.api('city_getLotteryInfo', {})
      console.log('可抽奖', res.data.result.lotteryNum)
      for (let i = 0; i < res.data.result.lotteryNum; i++) {
        data = await this.api('city_lotteryAward', {})
        try {
          console.log('抽奖', parseFloat(data.data.result.hongbao.value))
        } catch (e) {
          console.log(e.message)
          console.log(data.data.result.hongbao)
        }
        await this.wait(2000)
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  async help(users: User[]) {
    let res: any
    let shareCodeHW: string[] = []
    for (let user of users) {
      this.user = user
      try {
        if (shareCodeHW.length === 0) shareCodeHW = await getshareCodeHW('city')
        let shareCode: string[] = []
        if (user.index === 0) {
          shareCode = Array.from(new Set([...shareCodeHW, ...this.shareCodeSelf]))
        } else {
          shareCode = Array.from(new Set([...this.shareCodeSelf, ...shareCodeHW]))
        }
        for (let code of shareCode) {
          console.log(`账号${user.index + 1} ${user.UserName} 去助力 ${code}`)
          res = await this.api('city_getHomeDatav1', {"lbsCity": "", "realLbsCity": "", "inviteId": code, "headImg": "", "userName": "", "taskChannel": "1", "location": "", "safeStr": "{\"log\":\"\",\"sceneid\":\"CHFhPageh5\",\"random\":\"\"}"})
          await this.wait(3000)
          if (res.data.result.toasts) {
            console.log(res.data.result.toasts[0])
            if (res.data.result.toasts[0].status === '3') break
          }
        }
      } catch (e) {
        console.log(e.message)
      }
    }
  }
}

new Jd_cash_signin().init().then()