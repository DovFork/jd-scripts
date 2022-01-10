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
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', shareCodes = [], UserName = '', shareCodesSelf = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, _c, _d, t, _e, _f, _g, index, value, temp, _h, shareCodes_1, code, toasts;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _k.sent();
                _i = 0, _a = cookiesArr.entries();
                _k.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 11];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('city_getHomeDatav1', { "lbsCity": "", "realLbsCity": "", "inviteId": "", "headImg": "", "userName": "", "taskChannel": "1", "location": "", "safeStr": "" })];
            case 3:
                res = _k.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                console.log('助力码：', res.data.result.userActBaseInfo.inviteId);
                shareCodesSelf.push(res.data.result.userActBaseInfo.inviteId);
                _c = 0, _d = res.data.result.mainInfos;
                _k.label = 4;
            case 4:
                if (!(_c < _d.length)) return [3 /*break*/, 8];
                t = _d[_c];
                if (!(t.remaingAssistNum === 0 && t.status === '1')) return [3 /*break*/, 7];
                console.log();
                return [4 /*yield*/, api("city_receiveCash", { "cashType": 1, "roundNum": t.roundNum })];
            case 5:
                res = _k.sent();
                console.log("\u6253\u5F00\u7EA2\u5305<".concat(t.roundNum + '', "> \u83B7\u5F97\uFF1A"), res.data.result.currentTimeCash * 1, '累计：', res.data.result.totalCash * 1);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 6:
                _k.sent();
                _k.label = 7;
            case 7:
                _c++;
                return [3 /*break*/, 4];
            case 8: 
            // 抽奖
            // res = await api("city_getLotteryInfo", {})
            // let lotteryNum = res.data.result.lotteryNum
            // console.log(`可以抽奖${lotteryNum}次`)
            // for (let i = 0; i < lotteryNum; i++) {
            //   res = await api("city_lotteryAward", {})
            //   if (res.code === 0 && res.data.bizCode === 0) {
            //     console.log('抽奖成功：', res.data.result.prizeId)
            //     await wait(5000)
            //   } else {
            //     console.log('抽奖出错', JSON.stringify(res))
            //     break
            //   }
            // }
            // break
            return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 9:
                // 抽奖
                // res = await api("city_getLotteryInfo", {})
                // let lotteryNum = res.data.result.lotteryNum
                // console.log(`可以抽奖${lotteryNum}次`)
                // for (let i = 0; i < lotteryNum; i++) {
                //   res = await api("city_lotteryAward", {})
                //   if (res.code === 0 && res.data.bizCode === 0) {
                //     console.log('抽奖成功：', res.data.result.prizeId)
                //     await wait(5000)
                //   } else {
                //     console.log('抽奖出错', JSON.stringify(res))
                //     break
                //   }
                // }
                // break
                _k.sent();
                _k.label = 10;
            case 10:
                _i++;
                return [3 /*break*/, 2];
            case 11:
                // 助力
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true)));
                _e = 0, _f = cookiesArr.entries();
                _k.label = 12;
            case 12:
                if (!(_e < _f.length)) return [3 /*break*/, 21];
                _g = _f[_e], index = _g[0], value = _g[1];
                if (!(shareCodesHW.length === 0)) return [3 /*break*/, 14];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)("city")];
            case 13:
                shareCodesHW = _k.sent();
                _k.label = 14;
            case 14: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)("city", 30)];
            case 15:
                temp = _k.sent();
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true), temp, true)));
                _h = 0, shareCodes_1 = shareCodes;
                _k.label = 16;
            case 16:
                if (!(_h < shareCodes_1.length)) return [3 /*break*/, 20];
                code = shareCodes_1[_h];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\u8D26\u53F7".concat(index + 1, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodesSelf.includes(code) ? '(内部)' : ''));
                return [4 /*yield*/, api('city_getHomeDatav1', { "lbsCity": "", "realLbsCity": "", "inviteId": code, "headImg": "", "userName": "", "taskChannel": "1", "location": "", "safeStr": "" })];
            case 17:
                res = _k.sent();
                toasts = (_j = res.data.result) === null || _j === void 0 ? void 0 : _j.toasts;
                if (toasts) {
                    if (toasts[0].status === '3') {
                        console.log('上限');
                        return [3 /*break*/, 20];
                    }
                    else {
                        console.log('status:', toasts[0].status, toasts[0].msg);
                    }
                }
                else {
                    console.log('不助力自己？');
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 18:
                _k.sent();
                _k.label = 19;
            case 19:
                _h++;
                return [3 /*break*/, 16];
            case 20:
                _e++;
                return [3 /*break*/, 12];
            case 21: return [2 /*return*/];
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
