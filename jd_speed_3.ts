/**
 * 极速版
 * cron: 35 10 * * *
 */

import {H5ST} from "./utils/h5st_pro"
import {JDHelloWorld, User} from "./TS_JDHelloWorld";

class Speed_Sign extends JDHelloWorld {
  user: User
  h5stTool: H5ST
  fp: string

  constructor() {
    super();
  }

  async init() {
    this.fp = await this.getFp()
    await this.run(this)
  }

  async api(fn: string, body: object) {
    let timestamp: number = Date.now()
    let h5st: string = await this.h5stTool.__genH5st({
      appid: 'activities_platform',
      body: JSON.stringify({}),
      client: 'ios',
      clientVersion: '4.3.0',
      functionId: fn,
      t: timestamp.toString()
    })
    return await this.get(`https://api.m.jd.com/?functionId=${fn}&body=${encodeURIComponent(JSON.stringify(body))}&t=${timestamp}&appid=activities_platform&client=ios&clientVersion=4.3.0&h5st=${h5st}`,
      {
        'Host': 'api.m.jd.com',
        'Origin': 'https://prodev.m.jd.com',
        'User-Agent': this.user.UserAgent,
        'Referer': 'https://prodev.m.jd.com/jdlite/active/31U4T6S4PbcK83HyLPioeCWrD63j/index.html',
        'Cookie': this.user.cookie
      })
  }

  async main(user: User) {
    this.user = user
    this.user.UserAgent = `jdltapp;iPhone;4.3.0;Mozilla/5.0 (iPhone; CPU iPhone OS ${this.getIosVer()} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;`
    this.h5stTool = new H5ST("07244", this.user.UserAgent, this.fp, 'https://prodev.m.jd.com/jdlite/active/31U4T6S4PbcK83HyLPioeCWrD63j/index.html', 'https://prodev.m.jd.com', this.user.UserName);
    await this.h5stTool.__genAlgo()
    for (let i = 0; i < 3; i++) {
      let res: any = await this.api('spring_reward_receive', {"inviter": "", "linkId": "Eu7-E0CUzqYyhZJo9d3YkQ"})
      try {
        console.log(res.data.received.prizeDesc, res.data.received.amount)
      } catch (e) {
        break
      }
      await this.wait(5000)
    }
  }
}

new Speed_Sign().init().then()