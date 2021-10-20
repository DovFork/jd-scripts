"use strict";
/**
 * 京喜app->领88元红包
 * 先内部，后助力HW.ts
 * cron: 5 0,6,18 * * *
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
var cookie = '', res = '', UserName, index, UA = '';
var shareCodesSelf = [], shareCodes = [], shareCodesHW = [], jxToken;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, strUserPin, dwHelpedTimes, i, j, i, strUserPin, dwHelpedTimes, _i, _a, t;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _c.sent();
                i = 0;
                _c.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 10];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                return [4 /*yield*/, token(cookie)];
            case 3:
                jxToken = _c.sent();
                return [4 /*yield*/, api('GetUserInfo', 'activeId,channel,phoneid,publishFlag,stepreward_jstoken,timestamp,userDraw', {})];
            case 4:
                res = _c.sent();
                strUserPin = res.Data.strUserPin, dwHelpedTimes = res.Data.dwHelpedTimes;
                console.log('收到助力:', dwHelpedTimes);
                console.log('助力码：', strUserPin);
                shareCodesSelf.push(strUserPin);
                return [4 /*yield*/, makeShareCodes(strUserPin)];
            case 5:
                _c.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 6:
                _c.sent();
                return [4 /*yield*/, api('JoinActive', 'activeId,channel,phoneid,publishFlag,stepreward_jstoken,timestamp')];
            case 7:
                res = _c.sent();
                res.iRet === 0 ? console.log('JoinActive: 成功') : console.log('JoinActive:', res.sErrMsg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 8:
                _c.sent();
                _c.label = 9;
            case 9:
                i++;
                return [3 /*break*/, 2];
            case 10:
                console.log('内部助力码：', shareCodesSelf);
                i = 0;
                _c.label = 11;
            case 11:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 20];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                return [4 /*yield*/, getCodesHW()];
            case 12:
                _c.sent();
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true)));
                if (!(shareCodesHW.length !== 0)) return [3 /*break*/, 14];
                console.log('获取随机助力码');
                return [4 /*yield*/, getCodesPool()];
            case 13:
                res = _c.sent();
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodes, true), res, true)));
                _c.label = 14;
            case 14:
                console.log('助力排队:', shareCodes);
                j = 0;
                _c.label = 15;
            case 15:
                if (!(j < shareCodes.length)) return [3 /*break*/, 19];
                console.log("\u8D26\u53F7" + (i + 1) + " " + UserName + " \u53BB\u52A9\u529B " + shareCodes[j]);
                return [4 /*yield*/, api('EnrollFriend', 'activeId,channel,joinDate,phoneid,publishFlag,strPin,timestamp', { joinDate: (0, date_fns_1.format)(Date.now(), 'yyyyMMdd'), strPin: shareCodes[j] })];
            case 16:
                res = _c.sent();
                if (res.iRet === 0) {
                    console.log('成功');
                }
                else if (res.iRet === 2015) {
                    console.log('上限');
                    return [3 /*break*/, 19];
                }
                else if (res.iRet === 2016) {
                    console.log('火爆');
                    return [3 /*break*/, 19];
                }
                else {
                    console.log('其他错误:', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 17:
                _c.sent();
                _c.label = 18;
            case 18:
                j++;
                return [3 /*break*/, 15];
            case 19:
                i++;
                return [3 /*break*/, 11];
            case 20:
                i = 0;
                _c.label = 21;
            case 21:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 30];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + " \u62C6\u7EA2\u5305\n");
                return [4 /*yield*/, api('GetUserInfo', 'activeId,channel,phoneid,publishFlag,stepreward_jstoken,timestamp,userDraw', { userDraw: 1 })];
            case 22:
                res = _c.sent();
                strUserPin = res.Data.strUserPin, dwHelpedTimes = res.Data.dwHelpedTimes;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 23:
                _c.sent();
                _i = 0, _a = res.Data.gradeConfig;
                _c.label = 24;
            case 24:
                if (!(_i < _a.length)) return [3 /*break*/, 29];
                t = _a[_i];
                if (!(dwHelpedTimes >= t.dwHelpTimes)) return [3 /*break*/, 27];
                return [4 /*yield*/, api('DoGradeDraw', 'activeId,channel,grade,phoneid,publishFlag,stepreward_jstoken,strPin,timestamp', { grade: t.dwGrade, strPin: strUserPin })];
            case 25:
                res = _c.sent();
                if (res.iRet === 2018)
                    console.log("\u7B49\u7EA7" + t.dwGrade + "\u7EA2\u5305\u5DF2\u6253\u5F00\u8FC7");
                else if (res.iRet === 0)
                    console.log("\u7B49\u7EA7" + t.dwGrade + "\u7EA2\u5305\u6253\u5F00\u6210\u529F");
                else {
                    console.log('其他错误', (_b = res.sErrMsg) !== null && _b !== void 0 ? _b : JSON.stringify(res));
                    return [3 /*break*/, 29];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(15000)];
            case 26:
                _c.sent();
                return [3 /*break*/, 28];
            case 27: return [3 /*break*/, 29];
            case 28:
                _i++;
                return [3 /*break*/, 24];
            case 29:
                i++;
                return [3 /*break*/, 21];
            case 30: return [2 /*return*/];
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
                    url = "https://m.jingxi.com/cubeactive/steprewardv3/" + fn + "?activeId=489177&publishFlag=1&channel=7&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2&stepreward_jstoken=" + jxToken['farm_jstoken'] + "&timestamp=" + jxToken['timestamp'] + "&phoneid=" + jxToken['phoneid'];
                    UA = "jdpingou;";
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
function getCodesHW() {
    return __awaiter(this, void 0, void 0, function () {
        var data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/HW_CODES", { timeout: 10000 })];
                case 1:
                    data = (_a.sent()).data;
                    console.log('获取HW_CODES成功(api)');
                    shareCodesHW = data['88hb'];
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    console.log('获取HW_CODES失败(api)');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getCodesPool() {
    return __awaiter(this, void 0, void 0, function () {
        var data, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/hb88/30", { timeout: 10000 })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data.data];
                case 2:
                    e_3 = _a.sent();
                    console.log('获取助力池出错');
                    return [2 /*return*/, []];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function makeShareCodes(code) {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 1:
                    bean = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 2:
                    farm = _a.sent();
                    pin = cookie.match(/pt_pin=([^;]*)/)[1];
                    pin = ts_md5_1.Md5.hashStr(pin);
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/hb88?sharecode=" + code + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin, { timeout: 10000 })];
                case 4:
                    data = (_a.sent()).data;
                    if (data.code === 200)
                        console.log('自动提交助力码成功');
                    else
                        console.log('自动提交助力码失败！已提交farm的cookie才可提交88hb');
                    return [3 /*break*/, 6];
                case 5:
                    e_4 = _a.sent();
                    console.log('自动提交助力码出错');
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function randomString(e) {
    e = e || 32;
    var t = "0123456789abcdef", a = t.length, n = "";
    for (var i = 0; i < e; i++)
        n += t.charAt(Math.floor(Math.random() * a));
    return n;
}
