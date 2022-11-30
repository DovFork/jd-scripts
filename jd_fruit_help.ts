/**
 * 京东-东东农场-助力
 * 所有CK助力顺序
 * 内部 -> 助力池
 * 和jd_fruit.js同方法自己设置内部码
 * 如果没有添加内部码，直接助力助力池
 * cron: 35 0,3,5 * * *
 */

import {User, JDHelloWorld} from "./TS_JDHelloWorld"
import {sendNotify} from "./sendNotify";

class Jd_fruit_help extends JDHelloWorld {
  user: User
  shareCodeSelf: string[] = []
  code2user: {} = {}

  constructor() {
    super("农场助力");
  }

  async init() {
    await this.run(this)
  }

  randPhoneId() {
    return Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10);
  }

  async api(fn: string, body: object) {
    return await this.get(`https://api.m.jd.com/api?functionId=${fn}&body=${encodeURIComponent(JSON.stringify(body))}&appid=wh5`, {
      "Host": "api.m.jd.com",
      "Accept": "*/*",
      "Origin": "https://carry.m.jd.com",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": this.user.UserAgent,
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Referer": "https://carry.m.jd.com/",
      "Cookie": this.user.cookie
    })
  }

  async main(user: User) {
    this.user = user
    let res: any
    try {
      res = await this.api('initForFarm', {"babelChannel": "121", "sid": "3c52b5f17ab2a42398939a27887eaf8w", "version": 18, "channel": 1})
      if (res.code === '0') {
        console.log('助力码', res.farmUserPro.shareCode)
        this.shareCodeSelf.push(res.farmUserPro.shareCode)
        this.code2user[this.user.UserName] = res.farmUserPro.shareCode
      } else {
        this.o2s(res, 'initForFarm error')
        return {msg: `账号${this.user.index + 1} ${this.user.UserName}\n初始化失败\n${JSON.stringify(res)}`}
      }
    } catch (e) {
      console.log(e.message)
      await this.wait(5000)
      return {msg: `账号${this.user.index + 1} ${this.user.UserName}\n运行出错\n${e.message}`}
    }
  }

  async help(users: User[]) {
    this.o2s(this.shareCodeSelf, '内部助力')
    let res: any, full: string [] = [], message: string = ''
    for (let user of users) {
      try {
        this.user = user
        let myCode: string = this.code2user[this.user.UserName] ?? ""
        let shareCodePool: string[] = await this.getShareCodePool('farm', 50)
        let shareCode: string[] = [...this.shareCodeSelf, ...shareCodePool]
        for (let code of shareCode) {
          console.log(`账号${user.index + 1} ${user.UserName} 去助力 ${code}`)
          if (code === myCode) {
            console.log('self pass')
            continue
          }
          if (full.includes(code)) {
            console.log('full contains')
            continue
          }
          res = await this.api('initForFarm', {
            "imageUrl": "",
            "nickName": "",
            "shareCode": code,
            "babelChannel": "3",
            "version": 2,
            "channel": 1
          })
          if (!(res.helpResult && res.helpResult.code)) {
            this.o2s(res, '助力出错')
          } else if (res.helpResult.code === '0') {
            console.log('助力成功,获得', res.helpResult.salveHelpAddWater)
            for (let i = 0; i < 5; i++) {
              try {
                let runTimes: string = await this.get(`https://sharecodepool.cnmb.win/api/runTimes0917?activityId=farm&sharecode=${myCode}&today=${Date.now().toString()}`)
                console.log(runTimes)
                break
              } catch (e) {
                console.log(e.message)
                await this.wait(this.getRandomNumberByRange(10000, 20000))
              }
            }
          } else if (res.helpResult.code === '7') {
            console.log('不给自己助力')
            this.user['code'] = code
          } else if (res.helpResult.code === '9') {
            console.log('已助力')
          } else if (res.helpResult.code === '10') {
            console.log('已满')
            full.push(code)
          }
          if (res.helpResult.remainTimes === 0) {
            console.log('上限')
            await this.wait(10000)
            break
          }
          await this.wait(10000)
        }
      } catch (e) {
        console.log(e.message)
        await this.wait(10000)
      }
      await this.wait(5000)
    }

    for (let user of users) {
      try {
        this.user = user
        this.user.UserAgent = `jdapp;iPhone;10.2.0;${Math.ceil(Math.random() * 4 + 10)}.${Math.ceil(Math.random() * 4)};${this.randPhoneId()};network/4g;model/iPhone11,8;addressid/1188016812;appBuild/167724;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS ${this.getIosVer()} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1`
        res = await this.api('farmAssistInit', {"version": 14, "channel": 1, "babelChannel": "120"})
        if (res.code === '0') {
          let assistFriendList: number = res.assistFriendList.length
          let farmAssistInit_waterEnergy: number = 0
          for (let t of res.assistStageList) {
            if (t.stageStaus === 2) {
              res = await this.api('receiveStageEnergy', {"version": 14, "channel": 1, "babelChannel": "120"})
              console.log('收获助力💧', t.waterEnergy)
              await this.wait(3000)
              farmAssistInit_waterEnergy += t.waterEnergy
            } else if (t.stageStaus === 3) {
              farmAssistInit_waterEnergy += t.waterEnergy
            }
          }
          console.log('收到助力', assistFriendList)
          console.log('助力已领取', farmAssistInit_waterEnergy)
          message += `账号${this.user.index + 1} ${this.user.UserName}\n收到助力${assistFriendList}\n助力已领取${farmAssistInit_waterEnergy}\n\n`
        } else {
          this.o2s(res, 'initForFarm error')
        }
      } catch (e) {
        console.log(e.message)
        await this.wait(5000)
      }
      await this.wait(5000)
    }
    message && await sendNotify("农场助力", message)
  }
}

new Jd_fruit_help().init().then()