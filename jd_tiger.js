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
    var cookiesArr, _i, _a, _b, index, value, _c, _d, tab, taskGroupId, _e, _f, t, i, sleep, e_1, _g, _h, _j, index, value, temp, _k, shareCodes_1, code, e_2, _l, _m, _o, index, value, lotteryNum, i, e_3;
    var _p, _q;
    return __generator(this, function (_r) {
        switch (_r.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _r.sent();
                if (process.argv[2]) {
                    cookiesArr = [decodeURIComponent(process.argv[2])];
                    console.log("\u6536\u5230Cookie\uFF1A".concat(decodeURIComponent(cookiesArr[0])));
                }
                _i = 0, _a = cookiesArr.entries();
                _r.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 26];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                _r.label = 3;
            case 3:
                _r.trys.push([3, 24, , 25]);
                return [4 /*yield*/, api({ "apiMapping": "/api/task/support/getShareId" })];
            case 4:
                res = _r.sent();
                console.log('助力码：', res.data);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 5:
                _r.sent();
                shareCodesSelf.push(res.data);
                return [4 /*yield*/, api({ "apiMapping": "/api/task/support/list" })];
            case 6:
                res = _r.sent();
                console.log('收到助力：', res.data.supportedNum);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 7:
                _r.sent();
                return [4 /*yield*/, api({ "apiMapping": "/api/task/brand/tabs" })];
            case 8:
                res = _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 9:
                _r.sent();
                _c = 0, _d = res.data;
                _r.label = 10;
            case 10:
                if (!(_c < _d.length)) return [3 /*break*/, 23];
                tab = _d[_c];
                taskGroupId = tab.taskGroupId;
                return [4 /*yield*/, api({ "taskGroupId": taskGroupId, "apiMapping": "/api/task/brand/getTaskList" })];
            case 11:
                res = _r.sent();
                _e = 0, _f = res.data;
                _r.label = 12;
            case 12:
                if (!(_e < _f.length)) return [3 /*break*/, 22];
                t = _f[_e];
                i = t.finishNum;
                _r.label = 13;
            case 13:
                if (!(i < t.totalNum)) return [3 /*break*/, 21];
                return [4 /*yield*/, getTaskDetail(taskGroupId)];
            case 14:
                res = _r.sent();
                if (!res) return [3 /*break*/, 20];
                console.log(taskGroupId, res.taskId, res.taskItemId, res.taskType, res.taskItemName);
                sleep = res.browseTime ? res.browseTime * 1000 : 1000;
                return [4 /*yield*/, api({ "taskGroupId": taskGroupId, "taskId": res.taskId, "taskItemId": res.taskItemId, "apiMapping": "/api/task/brand/doTask" })];
            case 15:
                res = _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(sleep)];
            case 16:
                _r.sent();
                if (!(res.data.taskType === 'BROWSE_TASK')) return [3 /*break*/, 19];
                return [4 /*yield*/, api({ "taskGroupId": taskGroupId, "taskId": res.data.taskId, "taskItemId": res.data.taskItemId, "timestamp": res.data.timeStamp, "apiMapping": "/api/task/brand/getReward" })];
            case 17:
                res = _r.sent();
                console.log('任务完成，积分：', res.data.integral, '，京豆：', res.data.jbean);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 18:
                _r.sent();
                return [3 /*break*/, 20];
            case 19:
                if (res.data.taskType === 'FOLLOW_SHOP_TASK') {
                    // console.log('任务完成，获得：', res.data.rewardInfoVo?.integral, res.data.rewardInfoVo?.jbean)
                    console.log(res.data.rewardInfoVo);
                }
                _r.label = 20;
            case 20:
                i++;
                return [3 /*break*/, 13];
            case 21:
                _e++;
                return [3 /*break*/, 12];
            case 22:
                _c++;
                return [3 /*break*/, 10];
            case 23: return [3 /*break*/, 25];
            case 24:
                e_1 = _r.sent();
                console.log('黑号？', e_1);
                return [3 /*break*/, 25];
            case 25:
                _i++;
                return [3 /*break*/, 2];
            case 26:
                _g = 0, _h = cookiesArr.entries();
                _r.label = 27;
            case 27:
                if (!(_g < _h.length)) return [3 /*break*/, 39];
                _j = _h[_g], index = _j[0], value = _j[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                _r.label = 28;
            case 28:
                _r.trys.push([28, 37, , 38]);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('tiger', 30)];
            case 29:
                temp = _r.sent();
                if (!(shareCodesHW.length === 0)) return [3 /*break*/, 31];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('tiger')];
            case 30:
                shareCodesHW = _r.sent();
                _r.label = 31;
            case 31:
                index === 0
                    ? shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodesHW, true), shareCodesSelf, true), temp, true)))
                    : shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true), temp, true)));
                _k = 0, shareCodes_1 = shareCodes;
                _r.label = 32;
            case 32:
                if (!(_k < shareCodes_1.length)) return [3 /*break*/, 36];
                code = shareCodes_1[_k];
                console.log("\u8D26\u53F7".concat(index + 1, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodesSelf.includes(code) ? '(内部)' : ''));
                return [4 /*yield*/, api({ "shareId": code, "apiMapping": "/api/task/support/doSupport" })];
            case 33:
                res = _r.sent();
                if (res.data.status === 1) {
                    !res.data.supporterPrize
                        ? console.log('不助力自己')
                        : console.log('助力成功，京豆：', (_p = res.data.supporterPrize) === null || _p === void 0 ? void 0 : _p.beans, '，积分：', (_q = res.data.supporterPrize) === null || _q === void 0 ? void 0 : _q.score);
                }
                else if (res.data.status === 7) {
                    console.log('上限');
                    return [3 /*break*/, 36];
                }
                else if (res.data.status === 3) {
                    console.log('已助力过');
                }
                else {
                    console.log('其他情况', res.data.status);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 34:
                _r.sent();
                _r.label = 35;
            case 35:
                _k++;
                return [3 /*break*/, 32];
            case 36: return [3 /*break*/, 38];
            case 37:
                e_2 = _r.sent();
                console.log('黑号？', e_2);
                return [3 /*break*/, 38];
            case 38:
                _g++;
                return [3 /*break*/, 27];
            case 39:
                _l = 0, _m = cookiesArr.entries();
                _r.label = 40;
            case 40:
                if (!(_l < _m.length)) return [3 /*break*/, 50];
                _o = _m[_l], index = _o[0], value = _o[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                _r.label = 41;
            case 41:
                _r.trys.push([41, 48, , 49]);
                return [4 /*yield*/, api({ "apiMapping": "/api/index/indexInfo" })];
            case 42:
                res = _r.sent();
                lotteryNum = res.data.lotteryNum;
                console.log('抽奖次数：', lotteryNum);
                i = 0;
                _r.label = 43;
            case 43:
                if (!(i < lotteryNum)) return [3 /*break*/, 47];
                return [4 /*yield*/, api({ "apiMapping": "/api/lottery/lottery" })];
            case 44:
                res = _r.sent();
                console.log('抽奖', i + 1, '/', lotteryNum, res.data.prizeName);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 45:
                _r.sent();
                _r.label = 46;
            case 46:
                i++;
                return [3 /*break*/, 43];
            case 47: return [3 /*break*/, 49];
            case 48:
                e_3 = _r.sent();
                console.log('黑号？', e_3);
                return [3 /*break*/, 49];
            case 49:
                _l++;
                return [3 /*break*/, 40];
            case 50: return [2 /*return*/];
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
