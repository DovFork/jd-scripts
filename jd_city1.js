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
    var cookiesArr, _i, _a, _b, index, value, _c, _d, _e, index, value, _f, _g, _h, index_1, t;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _j.sent();
                _i = 0, _a = cookiesArr.entries();
                _j.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 6];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('city_getHomeDatav1', { "lbsCity": "", "realLbsCity": "", "inviteId": "", "headImg": "", "userName": "", "taskChannel": "1", "location": "", "safeStr": "" })
                    // o2s(res)
                ];
            case 3:
                res = _j.sent();
                // o2s(res)
                console.log('助力码：', res.data.result.userActBaseInfo.inviteId);
                shareCodesSelf.push(res.data.result.userActBaseInfo.inviteId);
                // break
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 4:
                // break
                _j.sent();
                _j.label = 5;
            case 5:
                _i++;
                return [3 /*break*/, 2];
            case 6:
                _c = 0, _d = cookiesArr.entries();
                _j.label = 7;
            case 7:
                if (!(_c < _d.length)) return [3 /*break*/, 16];
                _e = _d[_c], index = _e[0], value = _e[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('city_getHomeDatav1', { "lbsCity": "", "realLbsCity": "", "inviteId": "", "headImg": "", "userName": "", "taskChannel": "1", "location": "", "safeStr": "" })];
            case 8:
                // 打开红包
                res = _j.sent();
                console.log('可打开：', res.data.result.mainInfos.length, '个红包');
                _f = 0, _g = res.data.result.mainInfos.entries();
                _j.label = 9;
            case 9:
                if (!(_f < _g.length)) return [3 /*break*/, 13];
                _h = _g[_f], index_1 = _h[0], t = _h[1];
                if (!(t.remaingAssistNum === 0 && t.status === '1')) return [3 /*break*/, 12];
                return [4 /*yield*/, api("city_receiveCash", { "cashType": 1, "roundNum": t.roundNum })];
            case 10:
                res = _j.sent();
                console.log("\u6253\u5F00\u7EA2\u5305(".concat(index_1 + 1, "-").concat(t.roundNum + '', ") \u83B7\u5F97\uFF1A"), res.data.result.currentTimeCash * 1, '累计：', res.data.result.totalCash * 1);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 11:
                _j.sent();
                _j.label = 12;
            case 12:
                _f++;
                return [3 /*break*/, 9];
            case 13: 
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
            return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 14:
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
                _j.sent();
                _j.label = 15;
            case 15:
                _c++;
                return [3 /*break*/, 7];
            case 16: return [2 /*return*/];
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
