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
var sendNotify_1 = require("./sendNotify");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', shareCodes = [], UserName = '', shareCodesSelf = [], shareCodesHW = [];
var cards = {};
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, flag, _c, _d, c, cardId, cardCount, uuid, _e, _f, _g, index, value, myCards, _h, _j, _k, key, cardId, cardCount, _l, _m, _o, key_1, haoxinren, e_1, _p, _q, _r, index, value, pageNum, _s, _t, t, _u, _v, tab, taskGroupId, _w, _x, t, i, sleep, e_2, _y, _z, _0, index, value, temp, _1, shareCodes_1, code, e_3, _2, _3, _4, index, value, lotteryNum, i, e_4;
    var _5, _6, _7, _8, _9, _10, _11, _12, _13, _14;
    return __generator(this, function (_15) {
        switch (_15.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _15.sent();
                if (process.argv[2]) {
                    cookiesArr = [decodeURIComponent(process.argv[2])];
                    console.log("\u6536\u5230Cookie\uFF1A".concat(decodeURIComponent(cookiesArr[0])));
                }
                _i = 0, _a = cookiesArr.entries();
                _15.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 10];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api({ "apiMapping": "/api/card/list" })];
            case 3:
                res = _15.sent();
                cards[decodeURIComponent(UserName)] = {};
                flag = true;
                _c = 0, _d = res.data.cardList;
                _15.label = 4;
            case 4:
                if (!(_c < _d.length)) return [3 /*break*/, 9];
                c = _d[_c];
                cardId = c.cardId, cardCount = c.count;
                console.log(c.cardName, cardId, cardCount);
                uuid = '';
                if (!(cardCount > 1 && flag)) return [3 /*break*/, 7];
                return [4 /*yield*/, api({ "cardId": cardId, "apiMapping": "/api/card/share" })];
            case 5:
                res = _15.sent();
                if (res.msg === '您今天赠送卡片次数已用完') {
                    console.log('您今天赠送卡片次数已用完');
                    flag = false;
                }
                else {
                    uuid = res.data;
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 6:
                _15.sent();
                _15.label = 7;
            case 7:
                cards[decodeURIComponent(UserName)][cardId] = { cardCount: cardCount, uuid: uuid };
                _15.label = 8;
            case 8:
                _c++;
                return [3 /*break*/, 4];
            case 9:
                _i++;
                return [3 /*break*/, 2];
            case 10:
                // 内部互赠
                console.log(cards);
                _e = 0, _f = cookiesArr.entries();
                _15.label = 11;
            case 11:
                if (!(_e < _f.length)) return [3 /*break*/, 22];
                _g = _f[_e], index = _g[0], value = _g[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                _15.label = 12;
            case 12:
                _15.trys.push([12, 20, , 21]);
                myCards = cards[decodeURIComponent(UserName)];
                _h = [];
                for (_j in myCards)
                    _h.push(_j);
                _k = 0;
                _15.label = 13;
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
                _15.label = 14;
            case 14:
                if (!(_o < _l.length)) return [3 /*break*/, 18];
                key_1 = _l[_o];
                if (!(decodeURIComponent(key_1) !== UserName && cards[key_1][cardId]["cardCount"] > 1 && cards[key_1][cardId]["uuid"])) return [3 /*break*/, 17];
                haoxinren = decodeURIComponent(key_1);
                console.log('好心人', haoxinren, cardId);
                return [4 /*yield*/, api({ "uuid": cards[haoxinren][cardId]["uuid"], "apiMapping": "/api/card/receiveCard" })];
            case 15:
                res = _15.sent();
                try {
                    console.log("\u8D26\u53F7".concat(index + 1, " \u6536\u5230\u597D\u5FC3\u4EBA ").concat(haoxinren, " \u5361\u7247 ").concat(res.data.cardName, " 1\u5F20"));
                }
                catch (e) {
                    console.log('赠送卡片出错', (0, TS_USER_AGENTS_1.obj2str)(res));
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 16:
                _15.sent();
                cards[encodeURIComponent(UserName)][cardId]["cardCount"]++;
                cards[key_1][cardId]["cardCount"]--;
                _15.label = 17;
            case 17:
                _o++;
                return [3 /*break*/, 14];
            case 18:
                _k++;
                return [3 /*break*/, 13];
            case 19: return [3 /*break*/, 21];
            case 20:
                e_1 = _15.sent();
                console.log('黑号？', e_1);
                return [3 /*break*/, 21];
            case 21:
                _e++;
                return [3 /*break*/, 11];
            case 22:
                console.log(cards);
                _p = 0, _q = cookiesArr.entries();
                _15.label = 23;
            case 23:
                if (!(_p < _q.length)) return [3 /*break*/, 55];
                _r = _q[_p], index = _r[0], value = _r[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                _15.label = 24;
            case 24:
                _15.trys.push([24, 53, , 54]);
                pageNum = 1;
                _15.label = 25;
            case 25:
                if (!1) return [3 /*break*/, 32];
                return [4 /*yield*/, api({ pageNum: pageNum, apiMapping: "/api/record/prizeRecord" })];
            case 26:
                res = _15.sent();
                console.log('正在加载第', pageNum, '页中奖记录', res.data.list.length);
                _s = 0, _t = res.data.list;
                _15.label = 27;
            case 27:
                if (!(_s < _t.length)) return [3 /*break*/, 30];
                t = _t[_s];
                if (!(t.prizeType === 1)) return [3 /*break*/, 29];
                console.log('获得实物：', t.content);
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)("萌虎", "\u8D26\u53F7".concat(index + 1, " ").concat(UserName, "\n\u83B7\u5F97\u5B9E\u7269\uFF1A").concat(t.content))];
            case 28:
                _15.sent();
                _15.label = 29;
            case 29:
                _s++;
                return [3 /*break*/, 27];
            case 30:
                pageNum++;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 31:
                _15.sent();
                if (res.data.list.length < 10)
                    return [3 /*break*/, 32];
                return [3 /*break*/, 25];
            case 32: return [4 /*yield*/, api({ "apiMapping": "/api/task/support/getShareId" })];
            case 33:
                // 任务
                res = _15.sent();
                console.log('助力码：', res.data);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 34:
                _15.sent();
                shareCodesSelf.push(res.data);
                return [4 /*yield*/, api({ "apiMapping": "/api/task/support/list" })];
            case 35:
                res = _15.sent();
                console.log('收到助力：', res.data.supportedNum);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 36:
                _15.sent();
                return [4 /*yield*/, api({ "apiMapping": "/api/task/brand/tabs" })];
            case 37:
                res = _15.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 38:
                _15.sent();
                _u = 0, _v = res.data;
                _15.label = 39;
            case 39:
                if (!(_u < _v.length)) return [3 /*break*/, 52];
                tab = _v[_u];
                taskGroupId = tab.taskGroupId;
                return [4 /*yield*/, api({ "taskGroupId": taskGroupId, "apiMapping": "/api/task/brand/getTaskList" })];
            case 40:
                res = _15.sent();
                _w = 0, _x = res.data;
                _15.label = 41;
            case 41:
                if (!(_w < _x.length)) return [3 /*break*/, 51];
                t = _x[_w];
                i = t.finishNum;
                _15.label = 42;
            case 42:
                if (!(i < t.totalNum)) return [3 /*break*/, 50];
                return [4 /*yield*/, getTaskDetail(taskGroupId)];
            case 43:
                res = _15.sent();
                if (!res) return [3 /*break*/, 49];
                console.log(taskGroupId, res.taskId, res.taskItemId, res.taskType, res.taskItemName);
                sleep = res.browseTime ? res.browseTime * 1000 : 1000;
                return [4 /*yield*/, api({ "taskGroupId": taskGroupId, "taskId": res.taskId, "taskItemId": res.taskItemId, "apiMapping": "/api/task/brand/doTask" })];
            case 44:
                res = _15.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(sleep)];
            case 45:
                _15.sent();
                if (!(res.data.taskType === 'BROWSE_TASK')) return [3 /*break*/, 48];
                return [4 /*yield*/, api({ "taskGroupId": taskGroupId, "taskId": res.data.taskId, "taskItemId": res.data.taskItemId, "timestamp": res.data.timeStamp, "apiMapping": "/api/task/brand/getReward" })];
            case 46:
                res = _15.sent();
                console.log('任务完成，积分：', res.data.integral, '，京豆：', res.data.jbean);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 47:
                _15.sent();
                return [3 /*break*/, 49];
            case 48:
                if (res.data.taskType === 'FOLLOW_SHOP_TASK') {
                    if (((_6 = (_5 = res.data) === null || _5 === void 0 ? void 0 : _5.rewardInfoVo) === null || _6 === void 0 ? void 0 : _6.integral) && ((_8 = (_7 = res.data) === null || _7 === void 0 ? void 0 : _7.rewardInfoVo) === null || _8 === void 0 ? void 0 : _8.jbean))
                        console.log('任务完成，积分：', (_10 = (_9 = res.data) === null || _9 === void 0 ? void 0 : _9.rewardInfoVo) === null || _10 === void 0 ? void 0 : _10.integral, '，京豆：', (_12 = (_11 = res.data) === null || _11 === void 0 ? void 0 : _11.rewardInfoVo) === null || _12 === void 0 ? void 0 : _12.jbean);
                    else
                        console.log('任务完成，空气');
                }
                _15.label = 49;
            case 49:
                i++;
                return [3 /*break*/, 42];
            case 50:
                _w++;
                return [3 /*break*/, 41];
            case 51:
                _u++;
                return [3 /*break*/, 39];
            case 52: return [3 /*break*/, 54];
            case 53:
                e_2 = _15.sent();
                console.log('黑号？', e_2);
                return [3 /*break*/, 54];
            case 54:
                _p++;
                return [3 /*break*/, 23];
            case 55:
                _y = 0, _z = cookiesArr.entries();
                _15.label = 56;
            case 56:
                if (!(_y < _z.length)) return [3 /*break*/, 68];
                _0 = _z[_y], index = _0[0], value = _0[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                _15.label = 57;
            case 57:
                _15.trys.push([57, 66, , 67]);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('tiger', 30)];
            case 58:
                temp = _15.sent();
                if (!(shareCodesHW.length === 0)) return [3 /*break*/, 60];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('tiger')];
            case 59:
                shareCodesHW = _15.sent();
                _15.label = 60;
            case 60:
                index === 0
                    ? shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodesHW, true), shareCodesSelf, true), temp, true)))
                    : shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true), temp, true)));
                _1 = 0, shareCodes_1 = shareCodes;
                _15.label = 61;
            case 61:
                if (!(_1 < shareCodes_1.length)) return [3 /*break*/, 65];
                code = shareCodes_1[_1];
                console.log("\u8D26\u53F7".concat(index + 1, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodesSelf.includes(code) ? '(内部)' : ''));
                return [4 /*yield*/, api({ "shareId": code, "apiMapping": "/api/task/support/doSupport" })];
            case 62:
                res = _15.sent();
                if (res.data.status === 1) {
                    !res.data.supporterPrize
                        ? console.log('不助力自己')
                        : console.log('助力成功，京豆：', (_13 = res.data.supporterPrize) === null || _13 === void 0 ? void 0 : _13.beans, '，积分：', (_14 = res.data.supporterPrize) === null || _14 === void 0 ? void 0 : _14.score);
                }
                else if (res.data.status === 7) {
                    console.log('上限');
                    return [3 /*break*/, 65];
                }
                else if (res.data.status === 3) {
                    console.log('已助力过');
                }
                else {
                    console.log('其他情况', res.data.status);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 63:
                _15.sent();
                _15.label = 64;
            case 64:
                _1++;
                return [3 /*break*/, 61];
            case 65: return [3 /*break*/, 67];
            case 66:
                e_3 = _15.sent();
                console.log('黑号？', e_3);
                return [3 /*break*/, 67];
            case 67:
                _y++;
                return [3 /*break*/, 56];
            case 68:
                _2 = 0, _3 = cookiesArr.entries();
                _15.label = 69;
            case 69:
                if (!(_2 < _3.length)) return [3 /*break*/, 79];
                _4 = _3[_2], index = _4[0], value = _4[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                _15.label = 70;
            case 70:
                _15.trys.push([70, 77, , 78]);
                return [4 /*yield*/, api({ "apiMapping": "/api/index/indexInfo" })];
            case 71:
                res = _15.sent();
                lotteryNum = res.data.lotteryNum;
                console.log('抽奖次数：', lotteryNum);
                i = 0;
                _15.label = 72;
            case 72:
                if (!(i < lotteryNum)) return [3 /*break*/, 76];
                return [4 /*yield*/, api({ "apiMapping": "/api/lottery/lottery" })];
            case 73:
                res = _15.sent();
                console.log('抽奖', i + 1, '/', lotteryNum, res.data.prizeName);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 74:
                _15.sent();
                _15.label = 75;
            case 75:
                i++;
                return [3 /*break*/, 72];
            case 76: return [3 /*break*/, 78];
            case 77:
                e_4 = _15.sent();
                console.log('黑号？', e_4);
                return [3 /*break*/, 78];
            case 78:
                _2++;
                return [3 /*break*/, 69];
            case 79: return [2 /*return*/];
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
