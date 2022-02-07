"use strict";
/**
 * 城城.ts
 * cron 0 0-23/1 * * *
 * 优先内部助力
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
var TS_USER_AGENTS_1 = require("../TS_USER_AGENTS");
var cookie = '', res = '', shareCodes = [], UserName = '', shareCodesSelf = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, _c, _d, _e, index, value, temp, _f, shareCodes_1, code, toasts, _g, _h, _j, index, value, _k, _l, _m, index_1, t, lotterySum, lotteryNum, i;
    var _o, _p;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _q.sent();
                _i = 0, _a = cookiesArr.entries();
                _q.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 10];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('city_getHomeDatav1', { "lbsCity": "", "realLbsCity": "", "inviteId": "", "headImg": "", "userName": "", "taskChannel": "1", "location": "", "safeStr": "" })];
            case 3:
                res = _q.sent();
                console.log('助力码：', res.data.result.userActBaseInfo.inviteId);
                shareCodesSelf.push(res.data.result.userActBaseInfo.inviteId);
                console.log('待提现：', res.data.result.userActBaseInfo.poolMoney * 1);
                console.log('已完成：', res.data.result.userActBaseInfo.withdrawBarNum, '/ 100');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)
                    // 赏金
                ];
            case 4:
                _q.sent();
                return [4 /*yield*/, api('city_masterMainData', {})];
            case 5:
                // 赏金
                res = _q.sent();
                if (!(res.data.result.masterData.actStatus === 2)) return [3 /*break*/, 7];
                return [4 /*yield*/, api('city_receiveCash', { "cashType": "4" })];
            case 6:
                res = _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                _q.label = 7;
            case 7: 
            // break
            return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 8:
                // break
                _q.sent();
                _q.label = 9;
            case 9:
                _i++;
                return [3 /*break*/, 2];
            case 10:
                // 助力
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true)));
                _c = 0, _d = cookiesArr.entries();
                _q.label = 11;
            case 11:
                if (!(_c < _d.length)) return [3 /*break*/, 20];
                _e = _d[_c], index = _e[0], value = _e[1];
                if (!(shareCodesHW.length === 0)) return [3 /*break*/, 13];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)("city")];
            case 12:
                shareCodesHW = _q.sent();
                _q.label = 13;
            case 13: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)("city", 30)];
            case 14:
                temp = _q.sent();
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true), temp, true)));
                _f = 0, shareCodes_1 = shareCodes;
                _q.label = 15;
            case 15:
                if (!(_f < shareCodes_1.length)) return [3 /*break*/, 19];
                code = shareCodes_1[_f];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\u8D26\u53F7".concat(index + 1, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodesSelf.includes(code) ? '(内部)' : ''));
                return [4 /*yield*/, api('city_getHomeDatav1', { "lbsCity": "", "realLbsCity": "", "inviteId": code, "headImg": "", "userName": "", "taskChannel": "1", "location": "", "safeStr": "" })];
            case 16:
                res = _q.sent();
                toasts = (_o = res.data.result) === null || _o === void 0 ? void 0 : _o.toasts;
                if (toasts) {
                    if (toasts[0].status === '3') {
                        console.log('上限');
                        return [3 /*break*/, 19];
                    }
                    else {
                        console.log('status:', toasts[0].status, toasts[0].msg);
                    }
                }
                else {
                    console.log('不助力自己？');
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 17:
                _q.sent();
                _q.label = 18;
            case 18:
                _f++;
                return [3 /*break*/, 15];
            case 19:
                _c++;
                return [3 /*break*/, 11];
            case 20:
                _g = 0, _h = cookiesArr.entries();
                _q.label = 21;
            case 21:
                if (!(_g < _h.length)) return [3 /*break*/, 38];
                _j = _h[_g], index = _j[0], value = _j[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('city_getHomeDatav1', { "lbsCity": "", "realLbsCity": "", "inviteId": "", "headImg": "", "userName": "", "taskChannel": "1", "location": "", "safeStr": "" })];
            case 22:
                // 打开红包
                res = _q.sent();
                console.log('可打开：', res.data.result.mainInfos.length, '个红包');
                _k = 0, _l = res.data.result.mainInfos.entries();
                _q.label = 23;
            case 23:
                if (!(_k < _l.length)) return [3 /*break*/, 27];
                _m = _l[_k], index_1 = _m[0], t = _m[1];
                if (!(t.remaingAssistNum === 0 && t.status === '1')) return [3 /*break*/, 26];
                return [4 /*yield*/, api("city_receiveCash", { "cashType": 1, "roundNum": t.roundNum })];
            case 24:
                res = _q.sent();
                console.log("\u6253\u5F00\u7EA2\u5305(".concat(index_1 + 1, "-").concat(t.roundNum + '', ") \u83B7\u5F97\uFF1A"), res.data.result.currentTimeCash * 1, '累计：', res.data.result.totalCash * 1);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 25:
                _q.sent();
                _q.label = 26;
            case 26:
                _k++;
                return [3 /*break*/, 23];
            case 27:
                lotterySum = 0;
                return [4 /*yield*/, api("city_getLotteryInfo", {})];
            case 28:
                res = _q.sent();
                lotteryNum = res.data.result.lotteryNum;
                console.log('可以抽奖', lotteryNum, '次');
                i = 0;
                _q.label = 29;
            case 29:
                if (!(i < lotteryNum)) return [3 /*break*/, 35];
                return [4 /*yield*/, api("city_lotteryAward", {})];
            case 30:
                res = _q.sent();
                if (!(res.code === 0 && res.data.bizCode === 0)) return [3 /*break*/, 32];
                console.log('抽奖成功：', res.data.result.prizeId === '0' ? '空气' : "辣鸡优惠券");
                if ((_p = res.data.result) === null || _p === void 0 ? void 0 : _p.hongbao) {
                    lotterySum = accAdd(lotterySum, res.data.result.hongbao.value * 1);
                    console.log('获得红包：', res.data.result.hongbao.value * 1, '累计：', lotterySum);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 31:
                _q.sent();
                return [3 /*break*/, 33];
            case 32:
                console.log('抽奖出错', JSON.stringify(res));
                return [3 /*break*/, 35];
            case 33:
                if (res.data.result.lotteryNum === 0)
                    return [3 /*break*/, 35];
                _q.label = 34;
            case 34:
                i++;
                return [3 /*break*/, 29];
            case 35: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 36:
                _q.sent();
                _q.label = 37;
            case 37:
                _g++;
                return [3 /*break*/, 21];
            case 38: return [2 /*return*/];
        }
    });
}); })();
function api(fn, params) {
    return __awaiter(this, void 0, void 0, function () {
        var body, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = "functionId=".concat(fn, "&body=").concat(JSON.stringify(params), "&client=wh5&clientVersion=1.0.0&uuid=");
                    return [4 /*yield*/, axios_1["default"].post('https://api.m.jd.com/client.action', body, {
                            headers: {
                                'Host': 'api.m.jd.com',
                                'Accept': 'application/json, text/plain, */*',
                                'Accept-Language': 'zh-cn',
                                'Origin': 'https://bunearth.m.jd.com',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'Connection': 'keep-alive',
                                'Referer': 'https://bunearth.m.jd.com/',
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
function accAdd(arg1, arg2) {
    var r1, r2, m;
    try {
        r1 = arg1.toString().split('.')[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split('.')[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return parseFloat(((arg1 * m + arg2 * m) / m).toFixed(2));
}
