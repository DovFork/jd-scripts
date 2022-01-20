"use strict";
/**
 * 京东-萌虎摇摇乐
 * https://yearfestival.jd.com
 * cron: 0 0,9,16 * * *
 * 助力顺序
 * CK1    HW.ts -> 内部   -> 助力池
 * CK2~n  内部   -> HW.ts -> 助力池
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
var cards = {};
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, flag, _c, _d, c, cardId, cardCount, uuid, _e, _f, _g, index, value, myCards, _h, _j, _k, key, cardId, cardCount, _l, _m, _o, key_1, haoxinren, e_1, _p, _q, _r, index, value, _s, _t, tab, taskGroupId, _u, _v, t, i, sleep, e_2, _w, _x, _y, index, value, temp, _z, shareCodes_1, code, e_3, _0, _1, _2, index, value, lotteryNum, i, e_4;
    var _3, _4;
    return __generator(this, function (_5) {
        switch (_5.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _5.sent();
                if (process.argv[2]) {
                    cookiesArr = [decodeURIComponent(process.argv[2])];
                    console.log("\u6536\u5230Cookie\uFF1A".concat(decodeURIComponent(cookiesArr[0])));
                }
                _i = 0, _a = cookiesArr.entries();
                _5.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 10];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api({ "apiMapping": "/api/card/list" })];
            case 3:
                res = _5.sent();
                cards[decodeURIComponent(UserName)] = {};
                flag = true;
                _c = 0, _d = res.data.cardList;
                _5.label = 4;
            case 4:
                if (!(_c < _d.length)) return [3 /*break*/, 9];
                c = _d[_c];
                cardId = c.cardId, cardCount = c.count;
                console.log(c.cardName, cardId, cardCount);
                uuid = '';
                if (!(cardCount > 1 && flag)) return [3 /*break*/, 7];
                return [4 /*yield*/, api({ "cardId": cardId, "apiMapping": "/api/card/share" })];
            case 5:
                res = _5.sent();
                if (res.msg === '您今天赠送卡片次数已用完') {
                    console.log('您今天赠送卡片次数已用完');
                    flag = false;
                }
                else {
                    uuid = res.data;
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 6:
                _5.sent();
                _5.label = 7;
            case 7:
                cards[decodeURIComponent(UserName)][cardId] = { cardCount: cardCount, uuid: uuid };
                _5.label = 8;
            case 8:
                _c++;
                return [3 /*break*/, 4];
            case 9:
                _i++;
                return [3 /*break*/, 2];
            case 10:
                console.log(cards);
                _e = 0, _f = cookiesArr.entries();
                _5.label = 11;
            case 11:
                if (!(_e < _f.length)) return [3 /*break*/, 22];
                _g = _f[_e], index = _g[0], value = _g[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                _5.label = 12;
            case 12:
                _5.trys.push([12, 20, , 21]);
                myCards = cards[decodeURIComponent(UserName)];
                _h = [];
                for (_j in myCards)
                    _h.push(_j);
                _k = 0;
                _5.label = 13;
            case 13:
                if (!(_k < _h.length)) return [3 /*break*/, 19];
                key = _h[_k];
                cardId = key, cardCount = myCards[key]["cardCount"];
                console.log(cardId, cardCount);
                if (!(cardCount === 0)) return [3 /*break*/, 18];
                console.log('卡片不足');
                _l = [];
                for (_m in cards)
                    _l.push(_m);
                _o = 0;
                _5.label = 14;
            case 14:
                if (!(_o < _l.length)) return [3 /*break*/, 18];
                key_1 = _l[_o];
                if (!(decodeURIComponent(key_1) !== UserName && cards[key_1][cardId]["cardCount"] > 1 && cards[key_1][cardId]["uuid"])) return [3 /*break*/, 17];
                haoxinren = decodeURIComponent(key_1);
                console.log('好心人', haoxinren, cardId);
                return [4 /*yield*/, api({ "uuid": cards[haoxinren][cardId]["uuid"], "apiMapping": "/api/card/receiveCard" })];
            case 15:
                res = _5.sent();
                try {
                    console.log("\u8D26\u53F7".concat(index + 1, " \u6536\u5230\u597D\u5FC3\u4EBA ").concat(haoxinren, " \u5361\u7247 ").concat(res.data.cardName, " 1\u5F20"));
                }
                catch (e) {
                    console.log('赠送卡片出错', (0, TS_USER_AGENTS_1.obj2str)(res));
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 16:
                _5.sent();
                cards[encodeURIComponent(UserName)][cardId]["cardCount"]++;
                cards[key_1][cardId]["cardCount"]--;
                _5.label = 17;
            case 17:
                _o++;
                return [3 /*break*/, 14];
            case 18:
                _k++;
                return [3 /*break*/, 13];
            case 19: return [3 /*break*/, 21];
            case 20:
                e_1 = _5.sent();
                console.log('黑号？', e_1);
                return [3 /*break*/, 21];
            case 21:
                _e++;
                return [3 /*break*/, 11];
            case 22:
                console.log(cards);
                _p = 0, _q = cookiesArr.entries();
                _5.label = 23;
            case 23:
                if (!(_p < _q.length)) return [3 /*break*/, 47];
                _r = _q[_p], index = _r[0], value = _r[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                _5.label = 24;
            case 24:
                _5.trys.push([24, 45, , 46]);
                return [4 /*yield*/, api({ "apiMapping": "/api/task/support/getShareId" })];
            case 25:
                res = _5.sent();
                console.log('助力码：', res.data);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 26:
                _5.sent();
                shareCodesSelf.push(res.data);
                return [4 /*yield*/, api({ "apiMapping": "/api/task/support/list" })];
            case 27:
                res = _5.sent();
                console.log('收到助力：', res.data.supportedNum);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 28:
                _5.sent();
                return [4 /*yield*/, api({ "apiMapping": "/api/task/brand/tabs" })];
            case 29:
                res = _5.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 30:
                _5.sent();
                _s = 0, _t = res.data;
                _5.label = 31;
            case 31:
                if (!(_s < _t.length)) return [3 /*break*/, 44];
                tab = _t[_s];
                taskGroupId = tab.taskGroupId;
                return [4 /*yield*/, api({ "taskGroupId": taskGroupId, "apiMapping": "/api/task/brand/getTaskList" })];
            case 32:
                res = _5.sent();
                _u = 0, _v = res.data;
                _5.label = 33;
            case 33:
                if (!(_u < _v.length)) return [3 /*break*/, 43];
                t = _v[_u];
                i = t.finishNum;
                _5.label = 34;
            case 34:
                if (!(i < t.totalNum)) return [3 /*break*/, 42];
                return [4 /*yield*/, getTaskDetail(taskGroupId)];
            case 35:
                res = _5.sent();
                if (!res) return [3 /*break*/, 41];
                console.log(taskGroupId, res.taskId, res.taskItemId, res.taskType, res.taskItemName);
                sleep = res.browseTime ? res.browseTime * 1000 : 1000;
                return [4 /*yield*/, api({ "taskGroupId": taskGroupId, "taskId": res.taskId, "taskItemId": res.taskItemId, "apiMapping": "/api/task/brand/doTask" })];
            case 36:
                res = _5.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(sleep)];
            case 37:
                _5.sent();
                if (!(res.data.taskType === 'BROWSE_TASK')) return [3 /*break*/, 40];
                return [4 /*yield*/, api({ "taskGroupId": taskGroupId, "taskId": res.data.taskId, "taskItemId": res.data.taskItemId, "timestamp": res.data.timeStamp, "apiMapping": "/api/task/brand/getReward" })];
            case 38:
                res = _5.sent();
                console.log('任务完成，积分：', res.data.integral, '，京豆：', res.data.jbean);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 39:
                _5.sent();
                return [3 /*break*/, 41];
            case 40:
                if (res.data.taskType === 'FOLLOW_SHOP_TASK') {
                    // console.log('任务完成，获得：', res.data.rewardInfoVo?.integral, res.data.rewardInfoVo?.jbean)
                    console.log(res.data.rewardInfoVo);
                }
                _5.label = 41;
            case 41:
                i++;
                return [3 /*break*/, 34];
            case 42:
                _u++;
                return [3 /*break*/, 33];
            case 43:
                _s++;
                return [3 /*break*/, 31];
            case 44: return [3 /*break*/, 46];
            case 45:
                e_2 = _5.sent();
                console.log('黑号？', e_2);
                return [3 /*break*/, 46];
            case 46:
                _p++;
                return [3 /*break*/, 23];
            case 47:
                _w = 0, _x = cookiesArr.entries();
                _5.label = 48;
            case 48:
                if (!(_w < _x.length)) return [3 /*break*/, 60];
                _y = _x[_w], index = _y[0], value = _y[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                _5.label = 49;
            case 49:
                _5.trys.push([49, 58, , 59]);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('tiger', 30)];
            case 50:
                temp = _5.sent();
                if (!(shareCodesHW.length === 0)) return [3 /*break*/, 52];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('tiger')];
            case 51:
                shareCodesHW = _5.sent();
                _5.label = 52;
            case 52:
                index === 0
                    ? shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodesHW, true), shareCodesSelf, true), temp, true)))
                    : shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true), temp, true)));
                _z = 0, shareCodes_1 = shareCodes;
                _5.label = 53;
            case 53:
                if (!(_z < shareCodes_1.length)) return [3 /*break*/, 57];
                code = shareCodes_1[_z];
                console.log("\u8D26\u53F7".concat(index + 1, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodesSelf.includes(code) ? '(内部)' : ''));
                return [4 /*yield*/, api({ "shareId": code, "apiMapping": "/api/task/support/doSupport" })];
            case 54:
                res = _5.sent();
                if (res.data.status === 1) {
                    !res.data.supporterPrize
                        ? console.log('不助力自己')
                        : console.log('助力成功，京豆：', (_3 = res.data.supporterPrize) === null || _3 === void 0 ? void 0 : _3.beans, '，积分：', (_4 = res.data.supporterPrize) === null || _4 === void 0 ? void 0 : _4.score);
                }
                else if (res.data.status === 7) {
                    console.log('上限');
                    return [3 /*break*/, 57];
                }
                else if (res.data.status === 3) {
                    console.log('已助力过');
                }
                else {
                    console.log('其他情况', res.data.status);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 55:
                _5.sent();
                _5.label = 56;
            case 56:
                _z++;
                return [3 /*break*/, 53];
            case 57: return [3 /*break*/, 59];
            case 58:
                e_3 = _5.sent();
                console.log('黑号？', e_3);
                return [3 /*break*/, 59];
            case 59:
                _w++;
                return [3 /*break*/, 48];
            case 60:
                _0 = 0, _1 = cookiesArr.entries();
                _5.label = 61;
            case 61:
                if (!(_0 < _1.length)) return [3 /*break*/, 71];
                _2 = _1[_0], index = _2[0], value = _2[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                _5.label = 62;
            case 62:
                _5.trys.push([62, 69, , 70]);
                return [4 /*yield*/, api({ "apiMapping": "/api/index/indexInfo" })];
            case 63:
                res = _5.sent();
                lotteryNum = res.data.lotteryNum;
                console.log('抽奖次数：', lotteryNum);
                i = 0;
                _5.label = 64;
            case 64:
                if (!(i < lotteryNum)) return [3 /*break*/, 68];
                return [4 /*yield*/, api({ "apiMapping": "/api/lottery/lottery" })];
            case 65:
                res = _5.sent();
                console.log('抽奖', i + 1, '/', lotteryNum, res.data.prizeName);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 66:
                _5.sent();
                _5.label = 67;
            case 67:
                i++;
                return [3 /*break*/, 64];
            case 68: return [3 /*break*/, 70];
            case 69:
                e_4 = _5.sent();
                console.log('黑号？', e_4);
                return [3 /*break*/, 70];
            case 70:
                _0++;
                return [3 /*break*/, 61];
            case 71: return [2 /*return*/];
        }
    });
}); })();
function api(body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post('https://api.m.jd.com/api', "appid=china-joy&functionId=collect_bliss_cards_prod&body=".concat(JSON.stringify(body), "&t=").concat(Date.now(), "&loginType=2"), {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://yearfestival.jd.com',
                            'Accept': 'application/json, text/plain, */*',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://yearfestival.jd.com/',
                            'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
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
function getTaskDetail(taskGroupId) {
    return __awaiter(this, void 0, void 0, function () {
        var res, _i, _a, t;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, api({ "taskGroupId": taskGroupId, "apiMapping": "/api/task/brand/getTaskList" })];
                case 1:
                    res = _b.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 2:
                    _b.sent();
                    for (_i = 0, _a = res.data; _i < _a.length; _i++) {
                        t = _a[_i];
                        if (t.finishNum !== t.totalNum) {
                            return [2 /*return*/, t];
                        }
                    }
                    return [2 /*return*/, ''];
            }
        });
    });
}
