"use strict";
/**
 * 京喜->领88元红包
 * 先内部，后助力HW.ts
 * cron: 5 0,6,14 * * *
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var axios_1 = require("axios");
var ts_md5_1 = require("ts-md5");
var date_fns_1 = require("date-fns");
var token = require('./utils/jd_jxmc.js').token;
var cookie = '', res = '', UserName, UA = '';
var shareCodeSelf = [], shareCode = [], shareCodeHW = [], shareCodePool = [], jxToken;
var HW_Priority = true;
/**
 * CK1助力顺序
 * HW_Priority: boolean
 * true  HW.ts -> 内部
 * false 内部   -> HW.ts
 */
process.env.HW_Priority === 'false' ? HW_Priority = false : '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, strUserPin, dwHelpedTimes, _c, _d, _e, index, value, _f, shareCode_1, code, _g, _h, _j, index, value, strUserPin, dwHelpedTimes, _k, _l, t;
    var _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _o.sent();
                _i = 0, _a = cookiesArr.entries();
                _o.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 10];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, token(cookie)];
            case 3:
                jxToken = _o.sent();
                return [4 /*yield*/, api('GetUserInfo', 'activeId,channel,phoneid,publishFlag,stepreward_jstoken,timestamp,userDraw', {})];
            case 4:
                res = _o.sent();
                strUserPin = res.Data.strUserPin, dwHelpedTimes = res.Data.dwHelpedTimes;
                console.log('收到助力:', dwHelpedTimes);
                console.log('助力码：', strUserPin);
                shareCodeSelf.push(strUserPin);
                return [4 /*yield*/, makeShareCodes(strUserPin)];
            case 5:
                _o.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 6:
                _o.sent();
                return [4 /*yield*/, api('JoinActive', 'activeId,channel,phoneid,publishFlag,stepreward_jstoken,timestamp')];
            case 7:
                res = _o.sent();
                res.iRet === 0 ? console.log('JoinActive: 成功') : console.log('JoinActive:', res.sErrMsg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 8:
                _o.sent();
                _o.label = 9;
            case 9:
                _i++;
                return [3 /*break*/, 2];
            case 10:
                console.log('内部助力码：', shareCodeSelf);
                _c = 0, _d = cookiesArr.entries();
                _o.label = 11;
            case 11:
                if (!(_c < _d.length)) return [3 /*break*/, 21];
                _e = _d[_c], index = _e[0], value = _e[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                return [4 /*yield*/, token(cookie)];
            case 12:
                jxToken = _o.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('hb88', 30)];
            case 13:
                shareCodePool = _o.sent();
                if (!(shareCodeHW.length === 0)) return [3 /*break*/, 15];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('88hb')];
            case 14:
                shareCodeHW = _o.sent();
                _o.label = 15;
            case 15:
                if (index === 0 && HW_Priority) {
                    shareCode = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodeHW, true), shareCodeSelf, true), shareCodePool, true)));
                }
                else {
                    shareCode = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodeSelf, true), shareCodePool, true), shareCodeHW, true)));
                }
                _f = 0, shareCode_1 = shareCode;
                _o.label = 16;
            case 16:
                if (!(_f < shareCode_1.length)) return [3 /*break*/, 20];
                code = shareCode_1[_f];
                console.log("\u8D26\u53F7 ".concat(UserName, " \u53BB\u52A9\u529B ").concat(code));
                return [4 /*yield*/, api('EnrollFriend', 'activeId,channel,joinDate,phoneid,publishFlag,strPin,timestamp', { joinDate: (0, date_fns_1.format)(Date.now(), 'yyyyMMdd'), strPin: code })];
            case 17:
                res = _o.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 18:
                _o.sent();
                if (res.iRet === 0) {
                    console.log('成功');
                }
                else if (res.iRet === 2015) {
                    console.log('上限');
                    return [3 /*break*/, 20];
                }
                else if (res.iRet === 2016) {
                    console.log('火爆');
                    return [3 /*break*/, 20];
                }
                else {
                    console.log('其他错误:', res);
                }
                _o.label = 19;
            case 19:
                _f++;
                return [3 /*break*/, 16];
            case 20:
                _c++;
                return [3 /*break*/, 11];
            case 21:
                _g = 0, _h = cookiesArr.entries();
                _o.label = 22;
            case 22:
                if (!(_g < _h.length)) return [3 /*break*/, 31];
                _j = _h[_g], index = _j[0], value = _j[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                return [4 /*yield*/, token(cookie)];
            case 23:
                jxToken = _o.sent();
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, " \u62C6\u7EA2\u5305\n"));
                return [4 /*yield*/, api('GetUserInfo', 'activeId,channel,phoneid,publishFlag,stepreward_jstoken,timestamp,userDraw', { userDraw: 1 })];
            case 24:
                res = _o.sent();
                strUserPin = res.Data.strUserPin, dwHelpedTimes = res.Data.dwHelpedTimes;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 25:
                _o.sent();
                _k = 0, _l = res.Data.gradeConfig;
                _o.label = 26;
            case 26:
                if (!(_k < _l.length)) return [3 /*break*/, 30];
                t = _l[_k];
                if (!(dwHelpedTimes >= t.dwHelpTimes && t.dwIsHasDraw !== 2)) return [3 /*break*/, 29];
                return [4 /*yield*/, api('DoGradeDraw', 'activeId,channel,grade,phoneid,publishFlag,stepreward_jstoken,strPin,timestamp', { grade: t.dwGrade, strPin: strUserPin })];
            case 27:
                res = _o.sent();
                if (res.iRet === 0) {
                    console.log("\u7B49\u7EA7".concat(t.dwGrade, "\u7EA2\u5305\u6253\u5F00\u6210\u529F"));
                }
                else {
                    console.log('其他错误', (_m = res.sErrMsg) !== null && _m !== void 0 ? _m : JSON.stringify(res));
                    return [3 /*break*/, 30];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(15000)];
            case 28:
                _o.sent();
                _o.label = 29;
            case 29:
                _k++;
                return [3 /*break*/, 26];
            case 30:
                _g++;
                return [3 /*break*/, 22];
            case 31: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    if (params === void 0) { params = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var url, data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/cubeactive/steprewardv3/".concat(fn, "?activeId=525597&publishFlag=1&channel=7&_stk=").concat(encodeURIComponent(stk), "&_ste=1&_=").concat(Date.now(), "&sceneval=2&stepreward_jstoken=").concat(jxToken['farm_jstoken'], "&timestamp=").concat(jxToken['timestamp'], "&phoneid=").concat(jxToken['phoneid']);
                    UA = "jdpingou;iPhone;4.13.0;14.4.2;".concat((0, TS_USER_AGENTS_1.randomString)(40), ";network/wifi;model/iPhone10,2;appBuild/100609;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/1;hasOCPay/0;supportBestPay/0;session/").concat(Math.random() * 98 + 1, ";pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148");
                    url = (0, TS_USER_AGENTS_1.h5st)(url, stk, params, 10010);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'User-Agent': UA,
                                'Referer': 'https://st.jingxi.com/pingou/jxmc/index.html',
                                'Host': 'm.jingxi.com',
                                'Cookie': cookie
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    if (typeof data === 'string')
                        return [2 /*return*/, JSON.parse(data.replace(/jsonpCBK.?\(/, '').split('\n')[0])];
                    return [2 /*return*/, data];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, {}];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function makeShareCodes(code) {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 1:
                    bean = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 2:
                    farm = _a.sent();
                    pin = ts_md5_1.Md5.hashStr(cookie.match(/pt_pin=([^;]*)/)[1]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/hb88?sharecode=".concat(code, "&bean=").concat(bean, "&farm=").concat(farm, "&pin=").concat(pin))];
                case 3:
                    data = (_a.sent()).data;
                    console.log(data.message);
                    return [3 /*break*/, 5];
                case 4:
                    e_2 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
