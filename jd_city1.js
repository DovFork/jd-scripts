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
exports.__esModule = true;
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', shareCodes = [], UserName = '', shareCodesSelf = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, _c, _d, _e, index, value, _f, _g, _h, index_1, t, lotterySum, lotteryNum, i;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _k.sent();
                _i = 0, _a = cookiesArr.entries();
                _k.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 10];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('city_getHomeDatav1', { "lbsCity": "", "realLbsCity": "", "inviteId": "", "headImg": "", "userName": "", "taskChannel": "1", "location": "", "safeStr": "" })];
            case 3:
                res = _k.sent();
                console.log('助力码：', res.data.result.userActBaseInfo.inviteId);
                shareCodesSelf.push(res.data.result.userActBaseInfo.inviteId);
                console.log('待提现：', res.data.result.userActBaseInfo.poolMoney * 1);
                console.log('已完成：', res.data.result.userActBaseInfo.withdrawBarNum, '/ 100');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)
                    // 赏金
                ];
            case 4:
                _k.sent();
                return [4 /*yield*/, api('city_masterMainData', {})];
            case 5:
                // 赏金
                res = _k.sent();
                if (!(res.data.result.masterData.actStatus === 2)) return [3 /*break*/, 7];
                return [4 /*yield*/, api('city_receiveCash', { "cashType": "4" })];
            case 6:
                res = _k.sent();
                res.data.bizMsg === 'success'
                    ? console.log('领取赏金成功：', res.data.result.masterInfo.cash * 1)
                    : console.log('领取赏金失败：', (0, TS_USER_AGENTS_1.stringify)(res));
                _k.label = 7;
            case 7: 
            // break
            return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 8:
                // break
                _k.sent();
                _k.label = 9;
            case 9:
                _i++;
                return [3 /*break*/, 2];
            case 10:
                _c = 0, _d = cookiesArr.entries();
                _k.label = 11;
            case 11:
                if (!(_c < _d.length)) return [3 /*break*/, 28];
                _e = _d[_c], index = _e[0], value = _e[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('city_getHomeDatav1', { "lbsCity": "", "realLbsCity": "", "inviteId": "", "headImg": "", "userName": "", "taskChannel": "1", "location": "", "safeStr": "" })];
            case 12:
                // 打开红包
                res = _k.sent();
                console.log('可打开：', res.data.result.mainInfos.length, '个红包');
                _f = 0, _g = res.data.result.mainInfos.entries();
                _k.label = 13;
            case 13:
                if (!(_f < _g.length)) return [3 /*break*/, 17];
                _h = _g[_f], index_1 = _h[0], t = _h[1];
                if (!(t.remaingAssistNum === 0 && t.status === '1')) return [3 /*break*/, 16];
                return [4 /*yield*/, api("city_receiveCash", { "cashType": 1, "roundNum": t.roundNum })];
            case 14:
                res = _k.sent();
                console.log("\u6253\u5F00\u7EA2\u5305(".concat(index_1 + 1, "-").concat(t.roundNum + '', ") \u83B7\u5F97\uFF1A"), res.data.result.currentTimeCash * 1, '累计：', res.data.result.totalCash * 1);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 15:
                _k.sent();
                _k.label = 16;
            case 16:
                _f++;
                return [3 /*break*/, 13];
            case 17:
                lotterySum = 0;
                return [4 /*yield*/, api("city_getLotteryInfo", {})];
            case 18:
                res = _k.sent();
                lotteryNum = res.data.result.lotteryNum;
                console.log('可以抽奖', lotteryNum, '次');
                i = 0;
                _k.label = 19;
            case 19:
                if (!(i < lotteryNum)) return [3 /*break*/, 25];
                return [4 /*yield*/, api("city_lotteryAward", {})];
            case 20:
                res = _k.sent();
                if (!(res.code === 0 && res.data.bizCode === 0)) return [3 /*break*/, 22];
                console.log('抽奖成功：', res.data.result.prizeId === '0' ? '空气' : "辣鸡优惠券");
                if ((_j = res.data.result) === null || _j === void 0 ? void 0 : _j.hongbao) {
                    lotterySum = accAdd(lotterySum, res.data.result.hongbao.value * 1);
                    console.log('获得红包：', res.data.result.hongbao.value * 1, '累计：', lotterySum);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 21:
                _k.sent();
                return [3 /*break*/, 23];
            case 22:
                console.log('抽奖出错', JSON.stringify(res));
                return [3 /*break*/, 25];
            case 23:
                if (res.data.result.lotteryNum === 0)
                    return [3 /*break*/, 25];
                _k.label = 24;
            case 24:
                i++;
                return [3 /*break*/, 19];
            case 25: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 26:
                _k.sent();
                _k.label = 27;
            case 27:
                _c++;
                return [3 /*break*/, 11];
            case 28: return [2 /*return*/];
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
