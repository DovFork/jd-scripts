"use strict";
/**
 * 0～30秒开始执行，31～59秒死循环等待
 * 提现金额：0.1、0.5、1
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
dotenv.config();
var appId = 10028, fingerprint, token = '', enCryptMethodJD;
var cookie = '', res = '', UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, _i, _a, b, token_1, money, h;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, requestAlgo()];
            case 1:
                _b.sent();
                return [4 /*yield*/, TS_USER_AGENTS_1.requireConfig()];
            case 2:
                cookiesArr = _b.sent();
                i = 0;
                _b.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 19];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                _b.label = 4;
            case 4:
                if (!1) return [3 /*break*/, 8];
                if (!(new Date().getSeconds() < 30)) return [3 /*break*/, 5];
                return [3 /*break*/, 8];
            case 5: return [4 /*yield*/, TS_USER_AGENTS_1.wait(100)];
            case 6:
                _b.sent();
                _b.label = 7;
            case 7: return [3 /*break*/, 4];
            case 8:
                if (!((new Date().getHours() === 0 || new Date().getHours() === 12) && new Date().getMinutes() === 0)) return [3 /*break*/, 13];
                _i = 0, _a = ['food', 'fun', 'shop', 'sea'];
                _b.label = 9;
            case 9:
                if (!(_i < _a.length)) return [3 /*break*/, 13];
                b = _a[_i];
                return [4 /*yield*/, api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b })];
            case 10:
                res = _b.sent();
                if (!(res.dwCanLvlUp === 1)) return [3 /*break*/, 12];
                return [4 /*yield*/, api('user/BuildLvlUp', '_cfd_t,bizCode,ddwCostCoin,dwEnv,ptag,source,strBuildIndex,strZone', { ddwCostCoin: res.ddwNextLvlCostCoin, strBuildIndex: b })];
            case 11:
                res = _b.sent();
                if (res.iRet === 0) {
                    console.log(b + "\u5347\u7EA7\u6210\u529F");
                    return [3 /*break*/, 13];
                }
                _b.label = 12;
            case 12:
                _i++;
                return [3 /*break*/, 9];
            case 13:
                // 提现
                console.log('解锁：', date_fns_1.format(new Date(), 'hh:mm:ss:SSS'));
                return [4 /*yield*/, getJxToken(cookie)];
            case 14:
                token_1 = _b.sent();
                return [4 /*yield*/, api('user/CashOutQuali', '_cfd_t,bizCode,dwEnv,ptag,source,strPgUUNum,strPgtimestamp,strPhoneID,strZone', { strPgUUNum: token_1.strPgUUNum, strPgtimestamp: token_1.strPgtimestamp, strPhoneID: token_1.strPhoneID })];
            case 15:
                res = _b.sent();
                console.log('资格:', res);
                if (res.iRet === 2036)
                    return [3 /*break*/, 19];
                return [4 /*yield*/, TS_USER_AGENTS_1.wait(4000)];
            case 16:
                _b.sent();
                console.log('提现：', date_fns_1.format(new Date(), 'hh:mm:ss:SSS'));
                money = void 0, h = new Date().getHours();
                if (h === 0)
                    money = 100;
                else if (h === 12)
                    money = 50;
                else
                    money = 10;
                money = process.env.CFD_CASHOUT_MONEY ? parseFloat(process.env.CFD_CASHOUT_MONEY) * 100 : money;
                console.log('本次计划提现：', money / 100);
                return [4 /*yield*/, api('user/CashOut', '_cfd_t,bizCode,ddwMoney,ddwPaperMoney,dwEnv,ptag,source,strPgUUNum,strPgtimestamp,strPhoneID,strZone', { ddwMoney: money, ddwPaperMoney: money * 10, strPgUUNum: token_1.strPgUUNum, strPgtimestamp: token_1.strPgtimestamp, strPhoneID: token_1.strPhoneID })];
            case 17:
                res = _b.sent();
                console.log('提现:', res);
                _b.label = 18;
            case 18:
                i++;
                return [3 /*break*/, 3];
            case 19: return [2 /*return*/];
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
    var phoneId = generateStr(40);
    var timestamp = Date.now().toString();
    var nickname = cookie.match(/pt_pin=([^;]*)/)[1];
    var jstoken = ts_md5_1.Md5.hashStr('' + decodeURIComponent(nickname) + timestamp + phoneId + 'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy');
    return {
        'strPgtimestamp': timestamp,
        'strPhoneID': phoneId,
        'strPgUUNum': jstoken
    };
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
