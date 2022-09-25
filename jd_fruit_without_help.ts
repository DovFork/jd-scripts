/**
 * 京东-种树
 * 不带水滴助力
 * cron: 35 7,13,20 * * *
 */

import {User, JDHelloWorld} from "./TS_JDHelloWorld"
import {H5ST} from "./utils/h5st";
import {addHours, getTime} from "date-fns";

class Jd_fruit extends JDHelloWorld {
  user: User
  h5stTool: H5ST
  shareCodeSelf: string[] = []
  fp: any = undefined

  constructor() {
    super();
  }

  async init() {
    try {
      this.fp = process.env.FP_8A2AF || process.env.FP_0C010
      if (!this.fp) this.fp = await this.getFp()
    } catch (e) {
      console.log(e.message)
    }
    await this.run(this)
  }

  async api(fn: string, body: object, flag: boolean) {
    let timestamp: string = Date.now().toString();
    let h5st: string
    let url: string = `https://api.m.jd.com/client.action?functionId=${fn}&body=${encodeURIComponent(JSON.stringify(body))}&appid=wh5&timestamp=${timestamp}&client=iOS&clientVersion=10.2.4`
    if (flag) {
      h5st = this.h5stTool.__genH5st({
        'appid': 'signed_wh5',
        'body': JSON.stringify(body),
        'client': 'iOS',
        'clientVersion': '10.2.4',
        'functionId': fn,
      })
      url = `https://api.m.jd.com/client.action?functionId=${fn}&body=${encodeURIComponent(JSON.stringify(body))}&appid=signed_wh5&timestamp=${timestamp}&client=iOS&clientVersion=10.2.4&h5st=${h5st}`
    }

    return await this.get(url, {
      'Host': 'api.m.jd.com',
      'Origin': 'https://carry.m.jd.com',
      'User-Agent': this.user.UserAgent,
      'Referer': 'https://carry.m.jd.com/',
      'Cookie': this.user.cookie
    })
  }

  async main(user: User) {
    try {
      this.user = user
      this.user.UserAgent = `jdapp;iPhone;10.2.4;;;M/5.0;appBuild/167874;Mozilla/5.0 (iPhone; CPU iPhone OS ${this.getIosVer()} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;`
      let res: any, data: any

      // 天天红包
      this.h5stTool = new H5ST('8a2af', this.user.UserAgent, this.fp)
      await this.h5stTool.__genAlgo()
      res = await this.api('initForFarm', {"version": 18, "channel": 1, "babelChannel": "120"}, true)
      if (res.code === '0') {
        console.log('助力码', res.farmUserPro.shareCode)
        this.shareCodeSelf.push(res.farmUserPro.shareCode)
      } else {
        this.o2s(res, '初始化失败')
        return
      }
      let totalEnergy: number = res.farmUserPro.totalEnergy

      // 背包
      this.h5stTool = new H5ST('157b6', this.user.UserAgent, this.fp)
      await this.h5stTool.__genAlgo()
      res = await this.api('myCardInfoForFarm', {"version": 18, "channel": 1, "babelChannel": "120"}, true)
      if (res.doubleCard && totalEnergy >= 100) {
        console.log('水滴翻倍卡数量', res.doubleCard)
        this.h5stTool = new H5ST('86ba5', this.user.UserAgent, this.fp)
        await this.h5stTool.__genAlgo()
        for (; res.doubleCard > 0; --res.doubleCard) {
          data = await this.api('userMyCardForFarm', {"cardType": "doubleCard", "type": "", "version": 18, "channel": 1, "babelChannel": "120"}, true)
          data.code === '0' && console.log('使用水滴翻倍卡', data.addWater)
          await this.wait(1000)
        }
      }

      res = await this.api('initForTurntableFarm', {"version": 4, "channel": 1}, false)
      for (let t of res.turntableBrowserAds) {
        if (!t.status) {
          console.log(t.main)
          await this.api('browserForTurntableFarm', {"type": 1, "adId": t.adId, "version": 4, "channel": 1}, false)
          await this.wait(t.browserTimes * 1000 || 1000)
          data = await this.api('browserForTurntableFarm', {"type": 2, "adId": t.adId, "version": 4, "channel": 1}, false)
          data.code === '0' && console.log('抽奖次数', data.totalTimes)
        }
      }
      res = await this.api('initForTurntableFarm', {"version": 4, "channel": 1}, false)
      if (!res.timingGotStatus && Date.now() > getTime(addHours(res.timingLastSysTime, 4))) {
        data = await this.api('timingAwardForTurntableFarm', {"version": 4, "channel": 1}, false)
        data.code === '0' && console.log('抽奖次数+', data.addTimes)
      }
      for (; res.remainLotteryTimes > 0; --res.remainLotteryTimes) {
        data = await this.api('lotteryForTurntableFarm', {"type": 1, "version": 4, "channel": 1}, false)
        console.log('抽奖结果', data.type)
        await this.wait(3000)
      }

      // 任务列表
      this.h5stTool = new H5ST('fcb5a', this.user.UserAgent, this.fp)
      await this.h5stTool.__genAlgo()
      res = await this.api('taskInitForFarm', {"version": 18, "channel": 1, "babelChannel": "120"}, true)

      // if (!res['treasureBoxInit-getBean'].f) {
      //   this.h5stTool = new H5ST('67dfc', this.user.UserAgent, this.fp)
      //   await this.h5stTool.__genAlgo()
      //   data = await this.api('ddnc_getTreasureBoxAward', {"type": 1, "babelChannel": "120", "line": "getBean", "version": 18, "channel": 1}, true)
      //   await this.wait(2000)
      //   data = await this.api('farmMarkStatus', {"version": 18, "channel": 1, "babelChannel": "98"}, false)
      //   data = await this.api('ddnc_getTreasureBoxAward', {"type": 2, "babelChannel": "98", "line": "getBean", "version": 18, "channel": 1}, true)
      //   this.o2s(data)
      //   data.code === '0' && console.log('ddnc_getTreasureBoxAward 💧', data.waterGram)
      // }

      if (!res.totalWaterTaskInit.f) {
        this.h5stTool = new H5ST('0c010', this.user.UserAgent, this.fp)
        await this.h5stTool.__genAlgo()
        for (let i = 0; i < 10 - res.totalWaterTaskTimes; i++) {
          data = await this.api('waterGoodForFarm', {"version": 18, "channel": 1, "babelChannel": "120"}, true)
          if (data.code === '0') {
            console.log('💧', data.totalEnergy)
            console.log('🌲', data.treeEnergy)
          }
          await this.wait(4000)
        }
        this.h5stTool = new H5ST('102f5', this.user.UserAgent, this.fp)
        await this.h5stTool.__genAlgo()
        data = await this.api('totalWaterTaskForFarm', {"version": 18, "channel": 1, "babelChannel": "120"}, true)
        data.code === '0' && console.log('十次奖励💧', data.totalWaterTaskEnergy)
      }

      if (!res.firstWaterInit.f && res.firstWaterInit.totalWaterTimes) {
        this.h5stTool = new H5ST('0cf1e', this.user.UserAgent, this.fp)
        await this.h5stTool.__genAlgo()
        data = await this.api('firstWaterTaskForFarm', {"version": 18, "channel": 1, "babelChannel": "120"}, true)
        data.code === '0' && console.log('首次奖励💧', data.amount)
      }

      if (!res.gotThreeMealInit.f) {
        if (![10, 15, 16, 22, 23].includes(new Date().getHours())) {
          data = await this.api('gotThreeMealForFarm', {"version": 14, "channel": 1, "babelChannel": "120"}, true)
          data.code === '0' && console.log('定时奖励💧', data.amount)
          await this.wait(1000)
        }
      }

      if (!res.gotBrowseTaskAdInit.f) {
        this.h5stTool = new H5ST('53f09', this.user.UserAgent, this.fp)
        await this.h5stTool.__genAlgo()
        for (let t of res.gotBrowseTaskAdInit.userBrowseTaskAds) {
          if (t.hadFinishedTimes !== t.limit) {
            console.log(t.mainTitle)
            data = await this.api('browseAdTaskForFarm', {"advertId": t.advertId, "type": 0, "version": 18, "channel": 1, "babelChannel": "120"}, true)
            data.code === '0' && console.log('任务完成')
            await this.wait(t.time * 1000 || 2000)
            data = await this.api('browseAdTaskForFarm', {"advertId": t.advertId, "type": 1, "version": 18, "channel": 1, "babelChannel": "120"}, true)
            data.code === '0' && console.log('领奖成功💧', data.amount)
            await this.wait(1000)
          }
        }
      }

      if (!res.waterRainInit.f) {
        if (!res.waterRainInit.lastTime || Date.now() > getTime(addHours(res.lastTime, 4))) {
          this.h5stTool = new H5ST('9983a', this.user.UserAgent, this.fp)
          await this.h5stTool.__genAlgo()
          data = await this.api('waterRainForFarm', {"type": 1, "hongBaoTimes": 99, "version": 14, "channel": 1}, true)
          data.code === '0' && console.log('红包雨💧', data.addEnergy)
          await this.wait(1000)
        }
      }

      // 签到页面
      this.h5stTool = new H5ST('08dc3', this.user.UserAgent, this.fp)
      await this.h5stTool.__genAlgo()
      res = await this.api('clockInInitForFarm', {"timestamp": Date.now(), "version": 18, "channel": 1, "babelChannel": "120"}, true)
      this.h5stTool = new H5ST('4a0b4', this.user.UserAgent, this.fp)
      await this.h5stTool.__genAlgo()
      for (let t of res.themes || []) {
        if (!t.hadGot) {
          console.log(t.name)
          await this.api('clockInFollowForFarm', {"id": t.id, "type": "theme", "step": 1, "version": 18, "channel": 1, "babelChannel": "120"}, true)
          await this.wait(1000)
          data = await this.api('clockInFollowForFarm', {"id": t.id, "type": "theme", "step": 2, "version": 18, "channel": 1, "babelChannel": "120"}, true)
          data.code === '0' && console.log('关注成功💧', data.amount)
        }
      }

      // 删除好友
      res = await this.api('friendListInitForFarm', {"lastId": null, "version": 18, "channel": 1, "babelChannel": "120"}, false)
      this.h5stTool = new H5ST('eaf91', this.user.UserAgent, this.fp)
      await this.h5stTool.__genAlgo()
      for (let t of res.friends) {
        data = await this.api('deleteFriendForFarm', {"shareCode": t.shareCode, "version": 18, "channel": 1, "babelChannel": "120"}, true)
        if (data.code === '0') {
          console.log(`删除好友 ${t.nickName} 成功`)
        } else {
          console.log(`删除失败 ${t.nickName} 失败`, data)
          break
        }
        await this.wait(2000)
      }

      // 点鸭子
      this.h5stTool = new H5ST('5c767', this.user.UserAgent, this.fp)
      await this.h5stTool.__genAlgo()
      for (let i = 0; i < 10; i++) {
        data = await this.api('getFullCollectionReward', {"type": 2, "version": 18, "channel": 1, "babelChannel": "120"}, true)
        if (data.code === '0') {
          data.title === '小鸭子为你带回了水滴' ? console.log(data.title, data.addWater) : console.log(data.title)
        } else if (data.code === '10' || data.hasLimit) {
          console.log('鸭子上限')
          break
        }
        await this.wait(5000)
      }
    } catch (e) {
      console.log('error', e.message)
    }
    await this.wait(30000)
  }

  async help(users: User[]) {
    if (new Date().getHours() > 12) return
    let res: any
    for (let user of users) {
      this.user = user
      this.user.UserAgent = `jdapp;iPhone;10.2.4;;;M/5.0;appBuild/167874;Mozilla/5.0 (iPhone; CPU iPhone OS ${this.getIosVer()} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;`
      this.h5stTool = new H5ST('8a2af', this.user.UserAgent, this.fp)
      await this.h5stTool.__genAlgo()

      let shareCodePool: string[] = await this.getShareCodePool('farm', 50)
      let shareCode: string[] = [...this.shareCodeSelf, ...shareCodePool]

      for (let code of shareCode) {
        try {
          console.log(`账号${user.index + 1} ${user.UserName} 去助力 ${code} ${this.shareCodeSelf.includes(code) ? '*内部*' : ''}`)
          res = await this.api('initForFarm', {"shareCode": `${code}-3`, "sid": "", "un_area": "", "version": 18, "channel": 1, "babelChannel": 0}, true)
          if (res.code === '0') {
            console.log('红包助力成功')
          } else if (res.code === '11') {
            console.log('红包已助力过')
          } else if (res.code === '13') {
            console.log('红包助力上限')
            break
          }
          await this.wait(2000)
        } catch (e) {
          console.log(e.message)
          break
        }
      }
    }
  }
}

new Jd_fruit().init().then()