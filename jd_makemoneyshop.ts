/**
 * 特价版-赚钱大赢家
 * cron: 1 0,1,23 * * *
 * CK1优先助力HW.ts
 */

import {User, JDHelloWorld} from "./TS_JDHelloWorld"
import {H5ST} from "./utils/h5st_pro";

class Jd_makemoneyshop extends JDHelloWorld {
  user: User
  h5stTool: H5ST
  fp: any = undefined
  shareCodeSelf: string[] = []
  black: string[] = []

  constructor() {
    super();
  }

  async init() {
    try {
      this.fp = process.env.FP_D06F1 || ""
      if (!this.fp) this.fp = await this.getFp()
    } catch (e) {
      console.log(e.message)
    }
    await this.run(this)
  }

  async task(fn: string, body: object) {
    return await this.get(`https://wq.jd.com/newtasksys/newtasksys_front/${fn}`, {
      'Host': 'wq.jd.com',
      'user-agent': this.user.UserAgent,
      'referer': 'https://wqs.jd.com/',
      'Cookie': this.user.cookie
    }, {
      'g_ty': 'h5',
      'g_tk': '',
      'appCode': 'msc588d6d5',
      '__t': Date.now(),
      'source': 'makemoneyshop',
      'bizCode': 'makemoneyshop',
      'sceneval': '2',
      'callback': '',
      ...body
    })
  }

  async api(fn: string, body: object) {
    let h5st: string = await this.h5stTool.__genH5st({
      'appid': 'jdlt_h5',
      'body': JSON.stringify(body),
      'client': 'jxh5',
      'clientVersion': '1.2.5',
      'functionId': fn,
    })
    return await this.get(`https://api.m.jd.com/api?g_ty=h5&g_tk=&appCode=msc588d6d5&body=${encodeURIComponent(JSON.stringify(body))}&appid=jdlt_h5&client=jxh5&functionId=${fn}&clientVersion=1.2.5&h5st=${h5st}&loginType=2&sceneval=2`, {
      'Host': 'api.m.jd.com',
      'Origin': 'https://wqs.jd.com',
      'User-Agent': this.user.UserAgent,
      'Referer': 'https://wqs.jd.com/',
      'Cookie': this.user.cookie
    })
  }

  async main(user: User) {
    try {
      this.user = user
      this.user.UserAgent = `jdltapp;iPhone;4.5.0;M/5.0;Mozilla/5.0 (iPhone; CPU iPhone OS ${this.getIosVer()} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;`
      let res: any, data: any
      this.h5stTool = new H5ST('d06f1', this.user.UserAgent, this.fp, 'https://wqs.jd.com/sns/202210/20/make-money-shop/index.html', 'https://wqs.jd.com', this.user.UserName)
      await this.h5stTool.__genAlgo()

      res = await this.api('makemoneyshop_home', {"activeId": "63526d8f5fe613a6adb48f03", "isFirst": 1, "operType": 1})
      if (res.code !== 0) {
        this.o2s(res)
        console.log('黑号')
        this.black.push(this.user.UserName)
        return
      }
      console.log('助力码', res.data.shareId)
      this.shareCodeSelf.push(res.data.shareId)
      console.log('可提现', res.data.canUseCoinAmount * 1)

      for (let i = 0; i < 3; i++) {
        res = await this.task('GetUserTaskStatusList', {})
        for (let t of res.data.userTaskStatusList) {
          if (t.taskType === 2 && t.awardStatus === 2) {
            if (t.completedTimes !== t.configTargetTimes) {
              data = await this.task('DoTask', {'isSecurity': 'true', 'taskId': t.taskId, 'configExtra': ''})
              data.ret === 0 && console.log("✅")
            } else {
              data = await this.task('Award', {'taskId': t.taskId})
              data.ret === 0 && console.log("✅")
            }
            await this.wait(3000)
          } else if (t.taskId === 3532 && t.awardStatus === 2) {
            data = await this.task('Award', {taskId: 3532})
            if (data.ret === 0) {
              console.log('打扫店铺', data.data.prizeInfo * 1 / 100)
              await this.wait(1000)
            } else {
              console.log(data.msg)
            }
          }
        }
        await this.wait(5000)
      }

      res = await this.task('GetUserTaskStatusList', {})
      for (let t of res.data.userTaskStatusList) {
        if (t.taskId === 3533) {
          console.log('收到助力', t.realCompletedTimes)
          for (let i = t.completedTimes; i <= t.realCompletedTimes; i++) {
            if (t.awardStatus === 1 || t.completedTimes === t.realCompletedTimes) break
            data = await this.task('Award', {taskId: 3533})
            if (data.ret === 0) {
              console.log('领取助力奖励', data.data.prizeInfo * 1 / 100)
              await this.wait(1000)
            } else {
              this.o2s(data, '领取助力奖励 error')
              break
            }
          }
        }
      }
    } catch (e) {
      console.log('error', e.message)
    }
  }

  async help(users: User[]) {
    let res: any, shareCode: string[] = [], shareCodeHW: string[] = []
    this.o2s(this.shareCodeSelf, '内部助力')
    for (let user of users) {
      this.user = user
      if (this.black.includes(this.user.UserName)) {
        console.log('黑号')
        continue
      }
      this.user.UserAgent = `jdltapp;iPhone;4.5.0;M/5.0;Mozilla/5.0 (iPhone; CPU iPhone OS ${this.getIosVer()} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;`
      this.h5stTool = new H5ST('d06f1', this.user.UserAgent, this.fp, 'https://wqs.jd.com/sns/202210/20/make-money-shop/index.html', 'https://wqs.jd.com', this.user.UserName)
      await this.h5stTool.__genAlgo()

      if (shareCodeHW.length === 0) {
        shareCodeHW = await this.getshareCodeHW('zqdyj')
      }
      shareCode = Array.from(new Set([...shareCodeHW, ...this.shareCodeSelf]))
      try {
        for (let code of shareCode) {
          console.log(`账号${user.index + 1} ${user.UserName} 去助力 ${code}`)
          res = await this.api('makemoneyshop_guesthelp', {"activeId": "63526d8f5fe613a6adb48f03", "shareId": code, "operType": 1})
          this.o2s(res)
          await this.wait(2000)
          if (res.code === 147)
            break
        }
      } catch (e) {
        console.log('error', e.message)
      } finally {
        await this.wait(2000)
      }
    }
  }
}

new Jd_makemoneyshop().init().then()