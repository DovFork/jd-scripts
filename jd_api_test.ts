/**
 * jd_api_test
 * cron: * * * * *
 */

import axios from "axios";

let cookie: string = '', UserName: string, index: number;
let USER_AGENT = "jdapp;android;10.0.2;10;network/wifi;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045230 Mobile Safari/537.36"

!(async () => {
  let cookiesArr: string[] = await requireConfig();
  for (let i = 0; i < cookiesArr.length; i++) {
    cookie = cookiesArr[i];
    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
    index = i + 1;
    console.log(`\n开始【京东账号${index}】${UserName}\n`);

    axios.get('https://plogin.m.jd.com/cgi-bin/ml/mlogout?appid=300&returnurl=https%3A%2F%2Fm.jd.com%2F', {
      headers: {
        'authority': 'plogin.m.jd.com',
        "User-Agent": USER_AGENT,
        'cookie': cookie
      }
    }).then((res: any) => {
      console.log(1)
    }).catch((e: any) => {
      console.log(0)
    })
  }
})()

async function requireConfig(index: number = -1) {
  let cookiesArr: string[] = []
  const jdCookieNode = require('./jdCookie.js')
  Object.keys(jdCookieNode).forEach((item) => {
    if (jdCookieNode[item]) {
      cookiesArr.push(jdCookieNode[item])
    }
  })
  console.log(`共${cookiesArr.length}个京东账号\n`)
  if (index != -1) {
    return [cookiesArr[index]]
  } else {
    return cookiesArr
  }
}