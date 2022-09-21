/**
 * 京东-领现金
 * cron: 30 7,10 * * *
 */

import {User, JDHelloWorld} from "./TS_JDHelloWorld";

class Jd_cash_signin extends JDHelloWorld {
  user: User

  constructor() {
    super();
  }

  async init() {
    await this.run(this)
  }

  async api(fn: string, body: object) {
    let sign = await this.getSign(fn, body)
    return await this.post(`https://api.m.jd.com/client.action?functionId=${fn}`, sign, {
      'Host': 'api.m.jd.com',
      'Cookie': this.user.cookie,
      'user-agent': this.user.UserAgent,
    })
  }

  async main(user: User) {
    this.user = user
    let res: any = await this.api('cash_homePage', {})
    if (res.data.result.signedStatus !== 1) {
      console.log('今日未签到')
      await this.api('cash_sign', {"remind": 0, "inviteCode": "", "type": 0, "breakReward": 0})
      await this.wait(1000)
      console.log('签到成功')
    } else {
      console.log('今日已签到')
    }

    res = await this.api('cash_homePage', {})
    let type: number[] = [2, 4, 31, 16, 3, 5, 17, 21], data: any
    let otherTaskNum = res.data.result.taskInfos.filter(item => !type.includes(item.type)).length
    let taskNum = res.data.result.taskInfos.filter(item => type.includes(item.type)).length
    console.log(taskNum, otherTaskNum)

    for (let i = 0; i < 10; i++) {
      res = await this.api('cash_homePage', {})
      if (res.data.result.taskInfos.filter(item => type.includes(item.type) && item.doTimes === item.times).length === taskNum) {
        console.log('任务全部完成')
        break
      }

      for (let t of res?.data?.result?.taskInfos || []) {
        if (t.doTimes < t.times && t.type !== 7) {
          console.log(t.name)
          data = await this.api('cash_doTask', {"type": t.type, "taskInfo": t.desc})
          await this.wait(t.duration * 1000 || 1000)
          if (data.data.bizCode === 0) {
            console.log('任务完成', data.data.result.totalMoney ?? '')
            break
          } else {
            console.log('任务失败', JSON.stringify(data))
            break
          }
        }
      }
      await this.wait(2000)
    }
  }
}

new Jd_cash_signin().init().then()