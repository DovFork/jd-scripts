"use strict";
/**
 * 京喜->领88元红包
 * CK1    HW.ts -> 内部
 * CK2-n  内部   -> HW.ts
 * cron: 5 0,6,16 * * *
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
var axios_1 = require("axios");
var V3_1 = require("./utils/V3");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var token = require('./utils/jd_jxmc.js').token;
var cookie = '', res = '', UserName, UA = '';
var shareCodesSelf = [], shareCodes = [], shareCodesHW = [], jxToken, data;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, strUserPin, dwHelpedTimes, _c, _d, _e, index, value, strUserPin, _f, shareCodes_1, code, _g, _h, _j, index, value, dwHelpedTimes, _k, _l, t;
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
                return [4 /*yield*/, (0, V3_1.requestAlgo)('e395f')];
            case 4:
                _o.sent();
                return [4 /*yield*/, api('GetUserInfo', 'activeId', { activeId: '529439' })];
            case 5:
                res = _o.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 6:
                _o.sent();
                strUserPin = res.Data.strUserPin, dwHelpedTimes = res.Data.dwHelpedTimes;
                console.log('收到助力:', dwHelpedTimes);
                console.log('助力码：', strUserPin);
                shareCodesSelf.push(strUserPin);
                return [4 /*yield*/, api('JoinActive', 'phoneid,stepreward_jstoken,strPin,timestamp', { phoneid: jxToken.phoneid, stepreward_jstoken: jxToken.farm_jstoken, strPin: '', timestamp: jxToken.timestamp })];
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
                console.log('内部助力码：', shareCodesSelf);
                _c = 0, _d = cookiesArr.entries();
                _o.label = 11;
            case 11:
                if (!(_c < _d.length)) return [3 /*break*/, 23];
                _e = _d[_c], index = _e[0], value = _e[1];
                return [4 /*yield*/, (0, V3_1.requestAlgo)('e395f')];
            case 12:
                _o.sent();
                cookie = value;
                return [4 /*yield*/, token(cookie)];
            case 13:
                jxToken = _o.sent();
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                return [4 /*yield*/, api('GetUserInfo', 'activeId', { activeId: '529439' })];
            case 14:
                res = _o.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 15:
                _o.sent();
                strUserPin = res.Data.strUserPin;
                if (!(shareCodesHW.length === 0)) return [3 /*break*/, 17];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('88hb')];
            case 16:
                shareCodesHW = _o.sent();
                _o.label = 17;
            case 17:
                if (index === 0) {
                    shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesHW, true), shareCodesSelf, true)));
                }
                else {
                    shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true)));
                }
                _f = 0, shareCodes_1 = shareCodes;
                _o.label = 18;
            case 18:
                if (!(_f < shareCodes_1.length)) return [3 /*break*/, 22];
                code = shareCodes_1[_f];
                if (!(code !== strUserPin)) return [3 /*break*/, 21];
                console.log("\u8D26\u53F7 ".concat(UserName, " \u53BB\u52A9\u529B ").concat(code));
                return [4 /*yield*/, api('EnrollFriend', 'phoneid,stepreward_jstoken,strPin,timestamp', {
                        phoneid: jxToken.phoneid,
                        stepreward_jstoken: jxToken.farm_jstoken,
                        strPin: code,
                        timestamp: jxToken.timestamp
                    })];
            case 19:
                res = _o.sent();
                if (res.iRet === 0) {
                    console.log('成功');
                }
                else if (res.iRet === 2015) {
                    console.log('上限');
                    return [3 /*break*/, 22];
                }
                else if (res.iRet === 2016) {
                    console.log('火爆');
                    return [3 /*break*/, 22];
                }
                else {
                    console.log('其他错误:', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 20:
                _o.sent();
                _o.label = 21;
            case 21:
                _f++;
                return [3 /*break*/, 18];
            case 22:
                _c++;
                return [3 /*break*/, 11];
            case 23:
                _g = 0, _h = cookiesArr.entries();
                _o.label = 24;
            case 24:
                if (!(_g < _h.length)) return [3 /*break*/, 35];
                _j = _h[_g], index = _j[0], value = _j[1];
                return [4 /*yield*/, (0, V3_1.requestAlgo)('e395f')];
            case 25:
                _o.sent();
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                return [4 /*yield*/, token(cookie)];
            case 26:
                jxToken = _o.sent();
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, " \u62C6\u7EA2\u5305\n"));
                return [4 /*yield*/, api('GetUserInfo', 'activeId', { activeId: '529439' })];
            case 27:
                res = _o.sent();
                dwHelpedTimes = res.Data.dwHelpedTimes;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 28:
                _o.sent();
                _k = 0, _l = res.Data.gradeConfig;
                _o.label = 29;
            case 29:
                if (!(_k < _l.length)) return [3 /*break*/, 34];
                t = _l[_k];
                if (!(dwHelpedTimes >= t.dwHelpTimes && t.dwIsHasDraw === 1)) return [3 /*break*/, 32];
                return [4 /*yield*/, api('DoGradeDraw', 'grade', { grade: t.dwGrade })];
            case 30:
                res = _o.sent();
                if (res.iRet === 0)
                    console.log("\u7B49\u7EA7".concat(t.dwGrade, "\u7EA2\u5305\u6253\u5F00\u6210\u529F"));
                else {
                    console.log('其他错误', (_m = res.sErrMsg) !== null && _m !== void 0 ? _m : JSON.stringify(res));
                    return [3 /*break*/, 34];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(15000)];
            case 31:
                _o.sent();
                return [3 /*break*/, 33];
            case 32:
                console.log("\u7B49\u7EA7".concat(t.dwGrade, "\u7EA2\u5305\u5DF2\u6253\u5F00"));
                _o.label = 33;
            case 33:
                _k++;
                return [3 /*break*/, 29];
            case 34:
                _g++;
                return [3 /*break*/, 24];
            case 35: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    return __awaiter(this, void 0, void 0, function () {
        var timestamp, url, t, _i, _a, _b, key, value, h5st, data_1, e_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    timestamp = Date.now();
                    url = "https://m.jingxi.com/cubeactive/steprewardv3/".concat(fn, "?activeId=529439&_stk=").concat(stk, "&_ste=1&userDraw=0&publishFlag=1&channel=7&_t=").concat(timestamp, "&_=").concat(timestamp, "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls");
                    UA = "jdpingou;iPhone;4.13.0;14.4.2;".concat((0, TS_USER_AGENTS_1.randomString)(40), ";network/wifi;model/iPhone10,2;appBuild/100609;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/1;hasOCPay/0;supportBestPay/0;session/").concat(Math.random() * 98 + 1, ";pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148");
                    t = [];
                    for (_i = 0, _a = Object.entries(params); _i < _a.length; _i++) {
                        _b = _a[_i], key = _b[0], value = _b[1];
                        t.push({ key: key, value: value });
                        url += "&".concat(key, "=").concat(value);
                    }
                    h5st = (0, V3_1.geth5st)(t, 'e395f');
                    url += "&h5st=".concat(encodeURIComponent(h5st));
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'User-Agent': UA,
                                'Referer': 'https://st.jingxi.com/sns/202106/29/signinhb_new/index.html',
                                'Cookie': cookie
                            }
                        })];
                case 2:
                    data_1 = (_c.sent()).data;
                    return [2 /*return*/, JSON.parse(data_1.match(/jsonpCBK.?\((.*)/)[1])];
                case 3:
                    e_1 = _c.sent();
                    return [2 /*return*/, {}];
                case 4: return [2 /*return*/];
            }
        });
    });
}
