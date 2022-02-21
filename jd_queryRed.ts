import axios from 'axios';
import {getDate} from "date-fns";
import {pushplus} from './utils/pushplus';
import {requireConfig, wait, randomWord, o2s} from "./TS_USER_AGENTS";

let cookie: string = '', res: any = '', UserName: string
let message: string = '', allMessage: string = '';

let date: number = getDate(new Date())

!(async () => {
  if (Object.keys(process.env).includes("QL_DIR"))
    return
  let cookiesArr: string[] = await requireConfig();
  for (let [index, value] of cookiesArr.entries()) {
    cookie = value;
    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
    console.log(`\n开始【京东账号${index + 1}】${UserName}\n`);
    let jdRed: number = 0, jdRedExp: number = 0

    res = await api()
    for (let red of res.data.useRedInfo.redList) {
      if (red.orgLimitStr.includes("京喜")) {

      } else if (red.activityName.includes('极速版')) {

      } else if (red.orgLimitStr.includes('京东健康')) {

      } else {
        jdRed += parseFloat(red.balance);
        getDate(red.endTime * 1000) === date ? jdRedExp += parseFloat(red.balance) : '';
      }
    }
    console.log(parseFloat(jdRed.toFixed(2)), parseFloat(jdRedExp.toFixed(2)))
    message = `【京东账号${index + 1}】 ${UserName}\n京东红包  ${jdRed.toFixed(2)}\n今日过期  ${jdRedExp.toFixed(2)}\n\n`
    allMessage += message

    await pushplus('京东红包', message)
    await wait(1000)
  }
})()

async function api() {
  let {data} = await axios.get(`https://wq.jd.com/user/info/QueryUserRedEnvelopesV2?type=1&orgFlag=JD_PinGou_New&page=1&cashRedType=1&redBalanceFlag=1&channel=3&_=${Date.now()}&sceneval=2&g_login_type=1&callback=jsonpCBK${randomWord()}&g_ty=ls`, {
    headers: {
      'authority': 'wq.jd.com',
      'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
      'referer': 'https://wqs.jd.com/',
      'cookie': cookie
    }
  })
  return JSON.parse(data.match(/jsonpCBK.?\(([\w\W]*)\);/)[1])
}