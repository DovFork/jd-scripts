/*
 * @Author: whyour
 * @Github: https://github.com/whyour
 * @Date: 2020-12-10 12:30:44
 * @LastEditors: whyour
 * @LastEditTime: 2021-02-04 18:50:24
 * api参考 https://github.com/zZPiglet/Task/blob/master/DiDi/DiDi.js
 * 目前支持签到和福利金抽奖

  hostname = as.xiaojukeji.com, bosp-api.xiaojukeji.com

  quanx:
  [task_local]
  0 9 * * * https://raw.githubusercontent.com/whyour/hundun/master/quanx/didi.js, tag=滴滴出行, img-url=https://raw.githubusercontent.com/Orz-3/task/master/didi.png, enabled=true
  [rewrite_local]
  ^https:\/\/as\.xiaojukeji\.com\/ep\/as\/toggles\?.*city=(\d*)&.*ticket=(.*)& url script-request-header https://raw.githubusercontent.com/whyour/hundun/master/quanx/didi.cookie.js
  ^https?:\/\/bosp-api\.xiaojukeji\.com\/bosp-api\/lottery\/info?.*lid=([^&]*) url script-request-header https://raw.githubusercontent.com/whyour/hundun/master/quanx/didi.cookie.js

  loon:
  [Script]
  http-request ^https:\/\/as\.xiaojukeji\.com\/ep\/as\/toggles\?.*city=(\d*)&.*ticket=(.*)& script-path=https://raw.githubusercontent.com/whyour/hundun/master/quanx/didi.cookie.js, requires-body=false, timeout=10, tag=滴滴出行cookie
  http-request ^https?:\/\/bosp-api\.xiaojukeji\.com\/bosp-api\/lottery\/info?.*lid=([^&]*) script-path=https://raw.githubusercontent.com/whyour/hundun/master/quanx/didi.cookie.js, requires-body=false, timeout=10, tag=滴滴出行cookie
  cron "0 9 * * *" script-path=https://raw.githubusercontent.com/whyour/hundun/master/quanx/didi.js, tag=滴滴出行

  surge:
  [Script]
  滴滴出行 = type=cron,cronexp=0 9 * * *,timeout=60,script-path=https://raw.githubusercontent.com/whyour/hundun/master/quanx/didi.js
  滴滴出行cookie = type=http-request,pattern=^https:\/\/as\.xiaojukeji\.com\/ep\/as\/toggles\?.*city=(\d*)&.*ticket=(.*)&,requires-body=0,max-size=0,script-path=https://raw.githubusercontent.com/whyour/hundun/master/quanx/didi.cookie.js
  滴滴出行cookie = type=http-request,pattern=^https?:\/\/bosp-api\.xiaojukeji\.com\/bosp-api\/lottery\/info?.*lid=([^&]*),requires-body=0,max-size=0,script-path=https://raw.githubusercontent.com/whyour/hundun/master/quanx/didi.cookie.js
 *
 **/

const $ = new Env('🚕滴滴出行');
const API_HOST = 'https://bosp-api.xiaojukeji.com/';
const REWARD_API_HOST = 'https://rewards.xiaojukeji.com/loyalty_credit/bonus/';
$.showLog = $.getdata('didi_showLog') ? $.getdata('didi_showLog') === 'true' : false;
$.didiLottery = $.getdata('didi_lottery') ? $.getdata('didi_lottery') === 'true' : false;
$.token = $.getdata('didi_token') || '';
$.cityId = $.getdata('didi_city_id') || '';
$.lid = $.getdata('didi_lid');
$.clientId = 1;
$.result = [];

!(async () => {
  if (!getCookies()) return;
  const resultError = await checkIn();
  if (resultError) {
    return;
  }
  // await goldLottery();
  await bonusInfo();
  await showMsg();
})()
  .catch(e => $.logErr(e))
  .finally(() => $.done());

function getCookies() {
  if (!$.token || !$.cityId) {
    $.msg($.name, '【提示】请先获取滴滴Token');
    return false;
  }
  return true;
}

function bonusInfo() {
  return new Promise(resolve => {
    $.get(
      rewardTaskUrl('getWelfareUsage4Wallet', `city_id=${$.cityId}`),
      (err, resp, data) => {
        try {
          let { errmsg, data: { balance, recent_expire_time, recent_expire_amount } = {} } = JSON.parse(data);
          errmsg = errmsg ? errmsg : '成功';
          $.log(`\n账户信息：${errmsg}\n${$.showLog ? data : ''}`);
          const notification = `您有${recent_expire_amount}个福利金将在${
            recent_expire_time.split(' ')[0].replace(/\-/g, '.')
          }过期，请尽快使用哦`;
          $.result.push(`【账户剩余】${balance}福利金`, `【通知】${notification}`);
        } catch (err) {
          $.logErr(e, resp);
        } finally {
          resolve();
        }
      },
    );
  });
}

function submitInviteId(share_source_id = '', new_share_source_id = '', trace_id = '') {
  return new Promise(resolve => {
    if (!share_source_id || !new_share_source_id) {
      resolve();
      return;
    }
    $.post(
      {
        url: `https://api.ninesix.cc/api/didi/${share_source_id}/${new_share_source_id}?trace_id=${trace_id}`,
      },
      (err, resp, _data) => {
        try {
          const { code, data = {} } = JSON.parse(_data);
          $.log(`\n邀请码提交：${code}\n${$.showLog ? _data : ''}`);
          if (data.value) {
            $.result.push('【邀请码】提交成功！');
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve();
        }
      },
    );
  });
}

function createAssistUser() {
  return new Promise(resolve => {
    $.get({ url: `https://api.ninesix.cc/api/didi` }, async (err, resp, _data) => {
      try {
        const { code, data: { value, name, extra = {} } = {} } = JSON.parse(_data);
        $.log(`\n获取随机助力码${code}\n${$.showLog ? _data : ''}`);
        const resultError = await checkIn(value || '', name || '', extra.trace_id || '');
        resolve(resultError);
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function checkIn(share_source_id = '', new_share_source_id = '', share_trace_id = '') {
  let shareStr;
  if (share_source_id && new_share_source_id) {
    shareStr = `share_source_id=${share_source_id}&new_share_source_id=${new_share_source_id}&share_trace_id=${share_trace_id}&share_date=${$.time('yyyy-MM-dd')}&&share_type=invite_sign&source_from=source_from_wechat`
  } else {
    shareStr = `new_share_source_id=&share_source_id=&share_trace_id=&share_date=&&share_type=&source_from=source_from_app&app_version=6.1.2`
  }
  return new Promise(resolve => {
    $.get(
      taskUrl('wechat/benefit/public/v2/index', `city_id=${$.cityId}&${shareStr}`),
      async (err, resp, data) => {
        try {
          let { errno, errmsg, data: { share = {}, sign = {} } = {} } = JSON.parse(data);
          errmsg = errmsg ? errmsg : '成功';
          $.log(`\n签到：${errmsg}\n${$.showLog ? data : ''}`);
          if (errno === 106 && errmsg.indexOf('登录错误') !== -1) {
            $.msg($.name, '【提示】token失效，请先获取滴滴Token');
            resolve(true);
            return;
          }
          if (!share.source_id ||!share.new_source_id) {
            await checkIn();
          } else {
            $.log(`您的source_id：${share.source_id}`);
            if (sign.sign) {
              let str = `签到成功！获得${Number(sign.sign.subsidy_state.subsidy_amount + sign.sign.subsidy_state.extra_subsidy_amount)}福利金！`
              $.result.push(`【签到】${str}`);
            }
          }
          if (share.source_id && share.new_source_id) {
            await submitInviteId(share.source_id, share.new_source_id, share.trace_id);
          }
        } catch (err) {
          $.logErr(e, resp);
        } finally {
          resolve();
        }
      },
    );
  });
}

function goldLottery() {
  return new Promise(async resolve => {
    if ($.lid && $.didiLottery) {
      const drawCount = await getDrawAmount();
      if (drawCount === 0) {
        resolve();
        return;
      }
      for (let i = 0; i < drawCount; i++) {
        await $.wait(5000);
        await lotteryDraw(i);
      }
    }
    resolve();
  });
}

function getDrawAmount() {
  return new Promise(resolve => {
    $.get(taskUrl('bosp-api/lottery/info', `lid=${$.lid}&token=${$.token}&lucky_users=0`), (err, resp, data) => {
      try {
        let { message, data: { eliminate_info: { base_share_amount } = {} } = {} } = JSON.parse(data);
        message = message ? message : '成功';
        $.log(`\n福利金次数：${message}, 共${base_share_amount || 0}次 \n${$.showLog ? data : ''}`);
        resolve(base_share_amount || 0);
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function lotteryDraw(index) {
  return new Promise(resolve => {
    $.get(taskUrl('bosp-api/lottery/draw', `lid=${$.lid}&token=${$.token}`), (err, resp, data) => {
      try {
        let { code, message, data: { prize } = {} } = JSON.parse(data);
        message = message ? message : '成功';
        $.log(`\n福利金抽奖：${message} \n${$.showLog ? data : ''}`);
        if (code === 0) {
          $.result.push(`【福利金抽奖】第${index + 1}次：获得${prize.name}`);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function showMsg() {
  return new Promise(resolve => {
    $.msg($.name, '', $.result.join('\n'));
    resolve();
  });
}

function rewardTaskUrl(function_path, body = '') {
  return {
    url: `${REWARD_API_HOST}${function_path}?${body}&token=${$.token}`,
    headers: {
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'zh-cn',
      'Didi-Ticket': $.token,
      Host: 'rewards.xiaojukeji.com',
      Origin: 'https://page.udache.com',
      Referer: 'https://page.udache.com/',
      Accept: 'application/json, text/plain, */*',
      'User-Agent':
        'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 didi.passenger/6.0.12 FusionKit/1.2.14',
    },
  };
}

function taskUrl(function_path, body = '') {
  return {
    url: `${API_HOST}${function_path}?${body}`,
    headers: {
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'zh-cn',
      'Didi-Ticket': $.token,
      Host: 'bosp-api.xiaojukeji.com',
      Origin: 'https://page.udache.com',
      Referer: 'https://page.udache.com/',
      Accept: 'application/json, text/plain, */*',
      'User-Agent':
        'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 didi.passenger/6.0.12 FusionKit/1.2.14',
    },
  };
}

// prettier-ignore
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
