"use strict";
/**
 * 提现金额，可选0.1 0.5 1 2 10
 * export CFD_CASHOUT_MONEY=0.1
 *
 * 解锁提现方式二选一：1.升级1个建筑（优先） 2.完成日常任务
 * 自动模拟提现token，不需要抓包
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var date_fns_1 = require("date-fns");
var axios_1 = require("axios");
var ts_md5_1 = require("ts-md5");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var dotenv = require("dotenv");
var CryptoJS = require('crypto-js');
var notify = require('./sendNotify');
dotenv.config();
var appId = 10028, fingerprint, token = '', enCryptMethodJD;
var cookie = '', res = '', UserName, index;
var money = process.env.CFD_CASHOUT_MONEY ? parseFloat(process.env.CFD_CASHOUT_MONEY) * 100 : 10;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, _a, isLogin, nickName, finish, _i, _b, b, j, _c, _d, b, strDT, strMyShareId, _e, _f, e, employ, tasks, _g, _h, t, token_1;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0: return [4 /*yield*/, requestAlgo()];
            case 1:
                _j.sent();
                return [4 /*yield*/, TS_USER_AGENTS_1.requireConfig()];
            case 2:
                cookiesArr = _j.sent();
                i = 0;
                _j.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 44];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                return [4 /*yield*/, TS_USER_AGENTS_1.TotalBean(cookie)];
            case 4:
                _a = _j.sent(), isLogin = _a.isLogin, nickName = _a.nickName;
                if (!isLogin) {
                    notify.sendNotify(__filename.split('/').pop(), "cookie\u5DF2\u5931\u6548\n\u4EAC\u4E1C\u8D26\u53F7" + index + "\uFF1A" + (nickName || UserName));
                    return [3 /*break*/, 43];
                }
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + (nickName || UserName) + "\n");
                finish = false;
                _i = 0, _b = ['food', 'fun', 'shop', 'sea'];
                _j.label = 5;
            case 5:
                if (!(_i < _b.length)) return [3 /*break*/, 9];
                b = _b[_i];
                return [4 /*yield*/, api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b })];
            case 6:
                res = _j.sent();
                if (!(res.dwCanLvlUp === 1)) return [3 /*break*/, 8];
                return [4 /*yield*/, api('user/BuildLvlUp', '_cfd_t,bizCode,ddwCostCoin,dwEnv,ptag,source,strBuildIndex,strZone', { ddwCostCoin: res.ddwNextLvlCostCoin, strBuildIndex: b })];
            case 7:
                res = _j.sent();
                if (res.iRet === 0) {
                    console.log("\u5347\u7EA7\u6210\u529F:", res); // ddwSendRichValue
                    finish = true;
                    return [3 /*break*/, 9];
                }
                _j.label = 8;
            case 8:
                _i++;
                return [3 /*break*/, 5];
            case 9:
                if (!!finish) return [3 /*break*/, 38];
                j = 0;
                _j.label = 10;
            case 10:
                if (!(j < 2)) return [3 /*break*/, 16];
                _c = 0, _d = ['food', 'fun', 'shop', 'sea'];
                _j.label = 11;
            case 11:
                if (!(_c < _d.length)) return [3 /*break*/, 15];
                b = _d[_c];
                return [4 /*yield*/, api('user/CollectCoin', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b, dwType: '1' })];
            case 12:
                res = _j.sent();
                console.log(b + "\u6536\u91D1\u5E01:", res.ddwCoin);
                return [4 /*yield*/, TS_USER_AGENTS_1.wait(500)];
            case 13:
                _j.sent();
                _j.label = 14;
            case 14:
                _c++;
                return [3 /*break*/, 11];
            case 15:
                j++;
                return [3 /*break*/, 10];
            case 16:
                if (!1) return [3 /*break*/, 19];
                return [4 /*yield*/, speedUp('_cfd_t,bizCode,dwEnv,ptag,source,strBuildIndex,strZone')];
            case 17:
                res = _j.sent();
                console.log('今日热气球:', res.dwTodaySpeedPeople);
                if (res.dwTodaySpeedPeople >= 20)
                    return [3 /*break*/, 19];
                return [4 /*yield*/, TS_USER_AGENTS_1.wait(300)];
            case 18:
                _j.sent();
                return [3 /*break*/, 16];
            case 19: return [4 /*yield*/, api('user/ComposeGameState', '', { dwFirst: 1 })];
            case 20:
                res = _j.sent();
                strDT = res.strDT, strMyShareId = res.strMyShareId;
                return [4 /*yield*/, api('user/RealTmReport', '', { dwIdentityType: 0, strBussKey: 'composegame', strMyShareId: strMyShareId, ddwCount: 5 })];
            case 21:
                res = _j.sent();
                return [4 /*yield*/, TS_USER_AGENTS_1.wait(1000)];
            case 22:
                _j.sent();
                return [4 /*yield*/, api('user/ComposeGameAddProcess', '__t,strBT,strZone', { __t: Date.now(), strBT: strDT })];
            case 23:
                res = _j.sent();
                return [4 /*yield*/, api('user/EmployTourGuideInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 24:
                res = _j.sent();
                if (!!res.TourGuideList) return [3 /*break*/, 25];
                console.log('手动雇佣4个试用导游');
                return [3 /*break*/, 30];
            case 25:
                _e = 0, _f = res.TourGuideList;
                _j.label = 26;
            case 26:
                if (!(_e < _f.length)) return [3 /*break*/, 30];
                e = _f[_e];
                if (!(e.strBuildIndex !== 'food' && e.ddwRemainTm === 0)) return [3 /*break*/, 29];
                return [4 /*yield*/, api('user/EmployTourGuide', '_cfd_t,bizCode,ddwConsumeCoin,dwEnv,dwIsFree,ptag,source,strBuildIndex,strZone', { ddwConsumeCoin: e.ddwCostCoin, dwIsFree: 0, strBuildIndex: e.strBuildIndex })];
            case 27:
                employ = _j.sent();
                if (employ.iRet === 0)
                    console.log("\u96C7\u4F63" + e.strBuildIndex + "\u5BFC\u6E38\u6210\u529F");
                return [4 /*yield*/, TS_USER_AGENTS_1.wait(300)];
            case 28:
                _j.sent();
                _j.label = 29;
            case 29:
                _e++;
                return [3 /*break*/, 26];
            case 30:
                tasks = void 0;
                return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 31:
                tasks = _j.sent();
                _g = 0, _h = tasks.Data.TaskList;
                _j.label = 32;
            case 32:
                if (!(_g < _h.length)) return [3 /*break*/, 36];
                t = _h[_g];
                if (!(t.dwCompleteNum === t.dwTargetNum && t.dwAwardStatus === 2)) return [3 /*break*/, 35];
                return [4 /*yield*/, api('Award', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', { taskId: t.ddwTaskId })];
            case 33:
                res = _j.sent();
                if (res.ret === 0) {
                    console.log(t.strTaskName + "\u9886\u5956\u6210\u529F:", res.data.prizeInfo);
                }
                return [4 /*yield*/, TS_USER_AGENTS_1.wait(300)];
            case 34:
                _j.sent();
                _j.label = 35;
            case 35:
                _g++;
                return [3 /*break*/, 32];
            case 36: return [4 /*yield*/, api('story/ActTaskAward', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 37:
                res = _j.sent();
                console.log('100财富任务完成：', res);
                _j.label = 38;
            case 38:
                // 提现
                console.log('开始提现：', date_fns_1.format(new Date(), 'hh:mm:ss:SSS'));
                return [4 /*yield*/, getJxToken(cookie)];
            case 39:
                token_1 = _j.sent();
                console.log(token_1);
                return [4 /*yield*/, api('user/CashOutQuali', '_cfd_t,bizCode,dwEnv,ptag,source,strPgUUNum,strPgtimestamp,strPhoneID,strZone', { strPgUUNum: token_1.strPgUUNum, strPgtimestamp: token_1.strPgtimestamp, strPhoneID: token_1.strPhoneID })];
            case 40:
                res = _j.sent();
                console.log('资格:', res);
                return [4 /*yield*/, TS_USER_AGENTS_1.wait(2000)];
            case 41:
                _j.sent();
                return [4 /*yield*/, api('user/CashOut', '_cfd_t,bizCode,ddwMoney,ddwPaperMoney,dwEnv,ptag,source,strPgUUNum,strPgtimestamp,strPhoneID,strZone', { ddwMoney: money, ddwPaperMoney: money * 10, strPgUUNum: token_1.strPgUUNum, strPgtimestamp: token_1.strPgtimestamp, strPhoneID: token_1.strPhoneID })];
            case 42:
                res = _j.sent();
                console.log('提现:', res);
                _j.label = 43;
            case 43:
                i++;
                return [3 /*break*/, 3];
            case 44: return [2 /*return*/];
        }
    });
}); })();
function getJxToken(cookie) {
    function generateStr(input) {
        var src = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var res = '';
        for (var i = 0; i < input; i++) {
            res += src[Math.floor(src.length * Math.random())];
        }
        return res;
    }
    return new Promise(function (resolve) {
        var phoneId = generateStr(40);
        var timestamp = Date.now().toString();
        if (!cookie['match'](/pt_pin=([^; ]+)(?=;?)/)) {
            console.log('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\n');
            resolve({});
        }
        var nickname = cookie.match(/pt_pin=([^;]*)/)[1];
        var jstoken = ts_md5_1.Md5.hashStr('' + decodeURIComponent(nickname) + timestamp + phoneId + 'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy');
        resolve({
            'strPgtimestamp': timestamp,
            'strPhoneID': phoneId,
            'strPgUUNum': jstoken
        });
    });
}
function api(fn, stk, params) {
    var _this = this;
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var url, key, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/jxbfd/" + fn + "?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=138631.26.55&_ste=1&_=" + Date.now() + "&sceneval=2&_stk=" + encodeURIComponent(stk);
                    if (['GetUserTaskStatusList', 'Award', 'DoTask'].includes(fn)) {
                        console.log('api2');
                        url = "https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?strZone=jxbfd&bizCode=jxbfddch&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=138631.26.55&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2";
                    }
                    if (Object.keys(params).length !== 0) {
                        key = void 0;
                        for (key in params) {
                            if (params.hasOwnProperty(key))
                                url += "&" + key + "=" + params[key];
                        }
                    }
                    url += '&h5st=' + decrypt(stk, url);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                Cookie: cookie,
                                Referer: "https://st.jingxi.com/fortune_island/index.html?ptag=138631.26.55",
                                Host: "m.jingxi.com",
                                "User-Agent": "jdpingou"
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    resolve(data);
                    return [2 /*return*/];
            }
        });
    }); });
}
function speedUp(stk) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var url, data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/jxbfd/user/SpeedUp?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&strBuildIndex=food&_ste=1&_=" + Date.now() + "&sceneval=2&_stk=" + encodeURIComponent(stk);
                    url += '&h5st=' + decrypt(stk, url);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'Referer': 'https://st.jingxi.com/',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'Cookie': cookie
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    resolve(data);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    reject(502);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
function requestAlgo() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, generateFp()];
                case 1:
                    fingerprint = _a.sent();
                    return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var data, enCryptMethodJDString;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, axios_1["default"].post('https://cactus.jd.com/request_algo?g_ty=ajax', {
                                            "version": "1.0",
                                            "fp": fingerprint,
                                            "appId": appId,
                                            "timestamp": Date.now(),
                                            "platform": "web",
                                            "expandParams": ""
                                        }, {
                                            "headers": {
                                                'Authority': 'cactus.jd.com',
                                                'Pragma': 'no-cache',
                                                'Cache-Control': 'no-cache',
                                                'Accept': 'application/json',
                                                'User-Agent': TS_USER_AGENTS_1["default"],
                                                'Content-Type': 'application/json',
                                                'Origin': 'https://st.jingxi.com',
                                                'Sec-Fetch-Site': 'cross-site',
                                                'Sec-Fetch-Mode': 'cors',
                                                'Sec-Fetch-Dest': 'empty',
                                                'Referer': 'https://st.jingxi.com/',
                                                'Accept-Language': 'zh-CN,zh;q=0.9,zh-TW;q=0.8,en;q=0.7'
                                            }
                                        })];
                                    case 1:
                                        data = (_a.sent()).data;
                                        if (data['status'] === 200) {
                                            token = data.data.result.tk;
                                            console.log('token:', token);
                                            enCryptMethodJDString = data.data.result.algo;
                                            if (enCryptMethodJDString)
                                                enCryptMethodJD = new Function("return " + enCryptMethodJDString)();
                                        }
                                        else {
                                            console.log("fp: " + fingerprint);
                                            console.log('request_algo 签名参数API请求失败:');
                                        }
                                        resolve();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
            }
        });
    });
}
function decrypt(stk, url) {
    var timestamp = (date_fns_1.format(new Date(), 'yyyyMMddhhmmssSSS'));
    var hash1;
    if (fingerprint && token && enCryptMethodJD) {
        hash1 = enCryptMethodJD(token, fingerprint.toString(), timestamp.toString(), appId.toString(), CryptoJS).toString(CryptoJS.enc.Hex);
    }
    else {
        var random = '5gkjB6SpmC9s';
        token = "tk01wcdf61cb3a8nYUtHcmhSUFFCfddDPRvKvYaMjHkxo6Aj7dhzO+GXGFa9nPXfcgT+mULoF1b1YIS1ghvSlbwhE0Xc";
        fingerprint = 9686767825751161;
        // $.fingerprint = 7811850938414161;
        var str = "" + token + fingerprint + timestamp + appId + random;
        hash1 = CryptoJS.SHA512(str, token).toString(CryptoJS.enc.Hex);
    }
    var st = '';
    stk.split(',').map(function (item, index) {
        st += item + ":" + getQueryString(url, item) + (index === stk.split(',').length - 1 ? '' : '&');
    });
    var hash2 = CryptoJS.HmacSHA256(st, hash1.toString()).toString(CryptoJS.enc.Hex);
    return encodeURIComponent(["".concat(timestamp.toString()), "".concat(fingerprint.toString()), "".concat(appId.toString()), "".concat(token), "".concat(hash2)].join(";"));
}
function generateFp() {
    var e = "0123456789";
    var a = 13;
    var i = '';
    for (; a--;)
        i += e[Math.random() * e.length | 0];
    return (i + Date.now()).slice(0, 16);
}
function getQueryString(url, name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = url.split('?')[1].match(reg);
    if (r != null)
        return unescape(r[2]);
    return '';
}
