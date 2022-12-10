import {JDHelloWorld, User} from "./TS_JDHelloWorld";

class Jd_hby extends JDHelloWorld {
  user: User

  constructor() {
    super();
  }

  async init() {
    await this.run(this)
  }

  async main(user: User) {
    this.user = user
    let res: any
    try {
      res = await this.post('https://api.m.jd.com/client.action',
        `functionId=hby_lottery&appid=publicUseApi&body={"babelProjectId":"01388451","babelPageId":"4094450","latitude":"","longitude":"","activityNo":"e1ix3hVmZ892ONEUhkLsG","click":"1"}&client=wh5&clientVersion=1.0.0&t=${Date.now()}`, {
          'Host': 'api.m.jd.com',
          'Origin': 'https://pro.m.jd.com',
          'User-Agent': this.user.UserAgent,
          'Referer': 'https://pro.m.jd.com/mall/active/3qHFEYDE7puGzrQLSbaCxdyzUs56/index.html',
          'Cookie': this.user.cookie
        })

      console.log(parseFloat(res.data.result.hbInfo.discount))
      await this.wait(1000)

      await this.post('https://api.m.jd.com/client.action',
        `functionId=hby_share&appid=publicUseApi&body={"sceneId":"${res.data.result.sceneId}","activityNo":"e1ix3hVmZ892ONEUhkLsG"}&client=wh5&clientVersion=1.0.0&t=${Date.now()}`, {
          'Host': 'api.m.jd.com',
          'Origin': 'https://pro.m.jd.com',
          'User-Agent': this.user.UserAgent,
          'Referer': 'https://pro.m.jd.com/mall/active/3qHFEYDE7puGzrQLSbaCxdyzUs56/index.html',
          'Cookie': this.user.cookie
        })
      await this.wait(1000)

      res = await this.post('https://api.m.jd.com/client.action',
        `functionId=hby_lottery&appid=publicUseApi&body={"babelProjectId":"01388451","babelPageId":"4094450","latitude":"","longitude":"","activityNo":"e1ix3hVmZ892ONEUhkLsG","click":"1"}&client=wh5&clientVersion=1.0.0&t=${Date.now()}`, {
          'Host': 'api.m.jd.com',
          'Origin': 'https://pro.m.jd.com',
          'User-Agent': this.user.UserAgent,
          'Referer': 'https://pro.m.jd.com/mall/active/3qHFEYDE7puGzrQLSbaCxdyzUs56/index.html',
          'Cookie': this.user.cookie
        })
      console.log(parseFloat(res.data.result.hbInfo.discount))
    } catch (e) {
      console.log(e.message)
    }
  }
}

new Jd_hby().init().then()