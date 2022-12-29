import {User, JDHelloWorld} from "./TS_JDHelloWorld";

class Jd_hby extends JDHelloWorld {
    user: User

    constructor() {
        super();
    }

    async init() {
        await this.run(this)
    }

    async api(fn: string, body: object) {
        return await this.post(`https://api.m.jd.com/client.action`,
            `functionId=${fn}&appid=publicUseApi&body=${JSON.stringify(body)}&client=wh5&clientVersion=1.0.0&t=${Date.now()}`, {
                'Host': 'api.m.jd.com',
                'Origin': 'https://prodev.m.jd.com',
                'User-Agent': this.user.UserAgent,
                'Referer': 'https://prodev.m.jd.com/mall/active/Z3vEHkfuXaJaooFypUoajSruJ8b/index.html',
                'Cookie': this.user.cookie
            })
    }

    async main(user: User) {
        this.user = user
        let res: any
        res = await this.api('hby_lottery', {
            "babelProjectId": "01393628",
            "babelPageId": "4138116",
            "latitude": "0.000000",
            "longitude": "0.000000",
            "activityNo": "pT6Lw6fcTxnsJDGXiJnvD",
            "click": "1"
        })
        await this.wait(1000)
        console.log(res.data.result.hbInfo.discount * 1)
        res = await this.api('hby_share', {"sceneId": res.data.result.sceneId, "activityNo": "pT6Lw6fcTxnsJDGXiJnvD"})
        console.log(res.data.bizMsg)
        await this.wait(1000)
        res = await this.api('hby_lottery', {
            "babelProjectId": "01393628",
            "babelPageId": "4138116",
            "latitude": "0.000000",
            "longitude": "0.000000",
            "activityNo": "pT6Lw6fcTxnsJDGXiJnvD",
            "click": "1"
        })
        console.log(res.data.result.hbInfo.discount * 1)

    }
}

new Jd_hby().init().then()