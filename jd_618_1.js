"use strict";
/**
 * 京东骑驴
 * cron: 10 8,15,20 * * *
 * CK1   优先助力HW.ts
 * CK倒1 优先组队HW.ts
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var log_618_1 = require("./utils/log_618");
var Jd_618 = /** @class */ (function (_super) {
    __extends(Jd_618, _super);
    function Jd_618() {
        var _this = _super.call(this) || this;
        _this.logTool = new log_618_1.Log_618();
        _this.shareCodeSelf = [];
        console.log('version: 1300');
        return _this;
    }
    Jd_618.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(this)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_618.prototype.getLog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.logTool.main()];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, this.wait(4000)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Jd_618.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var appid;
            return __generator(this, function (_a) {
                appid = fn.includes('promote_') ? 'signed_wh5' : 'wh5';
                return [2 /*return*/, this.post("https://api.m.jd.com/client.action?functionId=".concat(fn), "functionId=".concat(fn, "&client=m&clientVersion=1.0.0&appid=").concat(appid, "&body=").concat(JSON.stringify(body)), {
                        'Host': 'api.m.jd.com',
                        'Origin': 'https://wbbny.m.jd.com',
                        'Accept': 'application/json, text/plain, */*',
                        'User-Agent': this.user.UserAgent,
                        'Referer': 'https://wbbny.m.jd.com/',
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Cookie': this.user.cookie
                    })];
            });
        });
    };
    Jd_618.prototype.qryViewkitCallbackResult = function (taskToken) {
        return __awaiter(this, void 0, void 0, function () {
            var body, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = { "dataSource": "newshortAward", "method": "getTaskAward", "reqParams": "{\"taskToken\":\"".concat(taskToken, "\"}") };
                        return [4 /*yield*/, this.logTool.qry('qryViewkitCallbackResult', body)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, this.post('https://api.m.jd.com/client.action?functionId=qryViewkitCallbackResult', data, {
                                'Host': 'api.m.jd.com',
                                'Cookie': this.user.cookie,
                                'content-type': 'application/x-www-form-urlencoded',
                                'User-Agent': this.user.UserAgent
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_618.prototype.feed = function (taskId, secretp) {
        return __awaiter(this, void 0, void 0, function () {
            var res, times, maxTimes, _i, _a, tp, log, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.api('promote_getFeedDetail', { "taskId": taskId })];
                    case 1:
                        res = _b.sent();
                        times = res.data.result.addProductVos[0].times, maxTimes = res.data.result.addProductVos[0].maxTimes;
                        _i = 0, _a = res.data.result.addProductVos[0].productInfoVos;
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 7];
                        tp = _a[_i];
                        if (times === maxTimes)
                            return [3 /*break*/, 7];
                        return [4 /*yield*/, this.getLog()];
                    case 3:
                        log = _b.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', {
                                "taskId": taskId,
                                "taskToken": tp.taskToken,
                                "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random })
                            })];
                    case 4:
                        data = _b.sent();
                        this.o2s(data, 'async feed');
                        times++;
                        return [4 /*yield*/, this.wait(3000)];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 2];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Jd_618.prototype.main = function (user) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function () {
            var res, data, log, secretp, totalScore, i, sceneInfo, e_1, qryList, _i, qryList_1, t, ActivityId, appId, taskVos, _f, taskVos_1, tp, i, vos, userLightChance, fragmentList, lotteryTimes, i, loop, inviteId, _g, _h, t, _j, _k, t, _l, _m, tp, _o, _p, tp, _q, _r, tp, times, maxTimes, _s, _t, tp, _u, _v, tp, e_2;
            return __generator(this, function (_w) {
                switch (_w.label) {
                    case 0:
                        this.user = user;
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 1:
                        res = _w.sent();
                        secretp = res.data.result.homeMainInfo.secretp;
                        totalScore = parseInt(res.data.result.homeMainInfo.raiseInfo.totalScore);
                        console.log('当前金币', totalScore);
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 2:
                        res = _w.sent();
                        if (!(res.data.result.homeMainInfo.todaySignStatus === 0)) return [3 /*break*/, 6];
                        console.log('开始签到');
                        return [4 /*yield*/, this.getLog()];
                    case 3:
                        log = _w.sent();
                        return [4 /*yield*/, this.api('promote_sign', { "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 4:
                        data = _w.sent();
                        if ((_c = (_b = (_a = data.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.awardResult) === null || _c === void 0 ? void 0 : _c.redPacketResult) {
                            console.log('🧧', parseFloat(data.data.result.awardResult.redPacketResult.value));
                        }
                        else if ((_e = (_d = data === null || data === void 0 ? void 0 : data.data) === null || _d === void 0 ? void 0 : _d.result) === null || _e === void 0 ? void 0 : _e.scoreResult) {
                            console.log('金币', parseInt(data.data.result.scoreResult.todaySignScore));
                        }
                        else {
                            this.o2s(data, 'promote_sign');
                        }
                        return [4 /*yield*/, this.wait(3000)];
                    case 5:
                        _w.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        console.log('已签到');
                        _w.label = 7;
                    case 7:
                        i = 0;
                        _w.label = 8;
                    case 8:
                        if (!(i < 20)) return [3 /*break*/, 21];
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 9:
                        res = _w.sent();
                        if (i === 0)
                            console.log('当前分红', parseInt(res.data.result.homeMainInfo.raiseInfo.redInfo.red));
                        sceneInfo = res.data.result.homeMainInfo.raiseInfo.scenceMap.sceneInfo;
                        sceneInfo.sort(function (a, b) { return parseInt(a.redNum.nextLevelScore) - parseInt(b.redNum.nextLevelScore); });
                        sceneInfo = sceneInfo[0];
                        if (!(sceneInfo.redNum.nextLevelScore <= totalScore)) return [3 /*break*/, 17];
                        _w.label = 10;
                    case 10:
                        _w.trys.push([10, 15, , 16]);
                        console.log('转盘场景', sceneInfo.scenceId);
                        return [4 /*yield*/, this.getLog()];
                    case 11:
                        log = _w.sent();
                        return [4 /*yield*/, this.api('promote_raise', { "scenceId": sceneInfo.scenceId, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 12:
                        res = _w.sent();
                        if (res.data.result.levelUpAward.redNum) {
                            console.log('转盘分红', res.data.result.levelUpAward.redNum);
                        }
                        else {
                            console.log('转盘其他奖励');
                        }
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 13:
                        res = _w.sent();
                        totalScore = parseInt(res.data.result.homeMainInfo.raiseInfo.totalScore);
                        return [4 /*yield*/, this.wait(3000)];
                    case 14:
                        _w.sent();
                        return [3 /*break*/, 16];
                    case 15:
                        e_1 = _w.sent();
                        return [3 /*break*/, 21];
                    case 16: return [3 /*break*/, 18];
                    case 17: return [3 /*break*/, 21];
                    case 18: return [4 /*yield*/, this.wait(2000)];
                    case 19:
                        _w.sent();
                        _w.label = 20;
                    case 20:
                        i++;
                        return [3 /*break*/, 8];
                    case 21: return [4 /*yield*/, this.api('qryCompositeMaterials', { "qryParam": "[{\"type\":\"advertGroup\",\"mapTo\":\"brand\",\"id\":\"06306976\"}]", "activityId": "2fUope8TDN3dUJfNzQswkBLc7uE8", "pageId": "", "reqSrc": "", "applyKey": "jd_star" })];
                    case 22:
                        res = _w.sent();
                        qryList = res.data.brand.list;
                        _i = 0, qryList_1 = qryList;
                        _w.label = 23;
                    case 23:
                        if (!(_i < qryList_1.length)) return [3 /*break*/, 47];
                        t = qryList_1[_i];
                        ActivityId = t.extension.venderLink1.match(/Zeus\/(\w*)/)[1];
                        console.log('ActivityId', ActivityId);
                        return [4 /*yield*/, this.api('factory_getStaticConfig', { "encryptActivityId": ActivityId, "channelId": 1 })];
                    case 24:
                        data = _w.sent();
                        appId = data.data.result.appId;
                        return [4 /*yield*/, this.api('template_mongo_getHomeData', { "taskToken": "", "appId": appId, "actId": ActivityId, "channelId": 1 })];
                    case 25:
                        res = _w.sent();
                        taskVos = res.data.result.taskVos;
                        _f = 0, taskVos_1 = taskVos;
                        _w.label = 26;
                    case 26:
                        if (!(_f < taskVos_1.length)) return [3 /*break*/, 38];
                        tp = taskVos_1[_f];
                        if (!(tp.times === 0)) return [3 /*break*/, 37];
                        if (!(tp.taskName === '每日签到')) return [3 /*break*/, 30];
                        return [4 /*yield*/, this.getLog()];
                    case 27:
                        log = _w.sent();
                        return [4 /*yield*/, this.api('template_mongo_collectScore', { "taskToken": tp.simpleRecordInfoVo.taskToken, "taskId": tp.taskId, "actionType": 0, "appId": appId, "safeStr": "{\"random\":\"".concat(log.random, "\",\"sceneid\":\"RAGJSYh5\",\"log\":\"").concat(log.log, "\"}") })];
                    case 28:
                        data = _w.sent();
                        console.log('签到成功', parseInt(data.data.result.acquiredScore));
                        return [4 /*yield*/, this.wait(3000)];
                    case 29:
                        _w.sent();
                        return [3 /*break*/, 37];
                    case 30:
                        if (!(tp.followShopVo || tp.productInfoVos || tp.shoppingActivityVos || t.brandMemberVos)) return [3 /*break*/, 36];
                        i = tp.times;
                        _w.label = 31;
                    case 31:
                        if (!(i < tp.maxTimes)) return [3 /*break*/, 35];
                        vos = tp.followShopVo || tp.productInfoVos || tp.shoppingActivityVos || t.brandMemberVos;
                        console.log(tp.taskName);
                        return [4 /*yield*/, this.api('template_mongo_collectScore', { "taskToken": vos[i].taskToken, "taskId": tp.taskId, "actionType": 0, "appId": appId, "safeStr": "{\"random\":\"".concat(log.random, "\",\"sceneid\":\"RAGJSYh5\",\"log\":\"").concat(log.log, "\"}") })];
                    case 32:
                        data = _w.sent();
                        console.log(parseInt(data.data.result.acquiredScore));
                        return [4 /*yield*/, this.wait(1000)];
                    case 33:
                        _w.sent();
                        _w.label = 34;
                    case 34:
                        i++;
                        return [3 /*break*/, 31];
                    case 35: return [3 /*break*/, 37];
                    case 36:
                        if (tp.taskName.includes('会员') || tp.taskName.includes('下单')) {
                            console.log(tp.taskName, 'pass');
                        }
                        else {
                            console.log(tp);
                        }
                        _w.label = 37;
                    case 37:
                        _f++;
                        return [3 /*break*/, 26];
                    case 38: return [4 /*yield*/, this.api('template_mongo_getHomeData', { "taskToken": "", "appId": appId, "actId": ActivityId, "channelId": 1 })];
                    case 39:
                        res = _w.sent();
                        userLightChance = res.data.result.userInfo.userLightChance, fragmentList = res.data.result.userInfo.fragmentList;
                        console.log('可抽奖', userLightChance);
                        lotteryTimes = 0;
                        i = 1;
                        _w.label = 40;
                    case 40:
                        if (!(i < 7)) return [3 /*break*/, 44];
                        if (lotteryTimes === userLightChance)
                            return [3 /*break*/, 44];
                        if (!!fragmentList.includes(i)) return [3 /*break*/, 43];
                        return [4 /*yield*/, this.api('template_mongo_lottery', { "appId": appId, "fragmentId": i })];
                    case 41:
                        data = _w.sent();
                        if (data.data.result.userAwardDto.couponVo)
                            console.log(data.data.result.userAwardDto.couponVo.prizeName);
                        else if (data.data.result.userAwardDto.scoreVo)
                            console.log(parseInt(data.data.result.userAwardDto.scoreVo.quantity), '金币');
                        else
                            console.log(data.data.result.userAwardDto);
                        return [4 /*yield*/, this.wait(2000)];
                    case 42:
                        _w.sent();
                        lotteryTimes++;
                        _w.label = 43;
                    case 43:
                        i++;
                        return [3 /*break*/, 40];
                    case 44: return [4 /*yield*/, this.wait(1000)];
                    case 45:
                        _w.sent();
                        _w.label = 46;
                    case 46:
                        _i++;
                        return [3 /*break*/, 23];
                    case 47:
                        loop = 0;
                        _w.label = 48;
                    case 48:
                        if (!(loop < 3)) return [3 /*break*/, 110];
                        _w.label = 49;
                    case 49:
                        _w.trys.push([49, 106, , 107]);
                        console.log('loop', loop);
                        return [4 /*yield*/, this.api('promote_getTaskDetail', {})];
                    case 50:
                        res = _w.sent();
                        if (loop === 0) {
                            inviteId = res.data.result.inviteId;
                            console.log('助力码', inviteId);
                            this.shareCodeSelf.push(inviteId);
                        }
                        _g = 0, _h = res.data.result.lotteryTaskVos[0].badgeAwardVos;
                        _w.label = 51;
                    case 51:
                        if (!(_g < _h.length)) return [3 /*break*/, 55];
                        t = _h[_g];
                        if (!(t.status === 3)) return [3 /*break*/, 54];
                        return [4 /*yield*/, this.api('promote_getBadgeAward', { "awardToken": t.awardToken })];
                    case 52:
                        data = _w.sent();
                        console.log(t.awardName, parseInt(data.data.result.myAwardVos[0].pointVo.score));
                        return [4 /*yield*/, this.wait(3000)];
                    case 53:
                        _w.sent();
                        _w.label = 54;
                    case 54:
                        _g++;
                        return [3 /*break*/, 51];
                    case 55:
                        _j = 0, _k = res.data.result.taskVos;
                        _w.label = 56;
                    case 56:
                        if (!(_j < _k.length)) return [3 /*break*/, 105];
                        t = _k[_j];
                        if (!t.taskName.includes('小程序')) return [3 /*break*/, 62];
                        _l = 0, _m = t.shoppingActivityVos;
                        _w.label = 57;
                    case 57:
                        if (!(_l < _m.length)) return [3 /*break*/, 62];
                        tp = _m[_l];
                        if (!(tp.status === 1)) return [3 /*break*/, 61];
                        return [4 /*yield*/, this.getLog()];
                    case 58:
                        log = _w.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId, "taskToken": tp.taskToken, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 59:
                        data = _w.sent();
                        console.log(parseInt(data.data.result.acquiredScore));
                        return [4 /*yield*/, this.wait(2000)];
                    case 60:
                        _w.sent();
                        _w.label = 61;
                    case 61:
                        _l++;
                        return [3 /*break*/, 57];
                    case 62:
                        if (!t.browseShopVo) return [3 /*break*/, 72];
                        _o = 0, _p = t.browseShopVo;
                        _w.label = 63;
                    case 63:
                        if (!(_o < _p.length)) return [3 /*break*/, 72];
                        tp = _p[_o];
                        if (!(tp.status === 1)) return [3 /*break*/, 71];
                        console.log(tp.shopName);
                        return [4 /*yield*/, this.getLog()];
                    case 64:
                        log = _w.sent();
                        return [4 /*yield*/, this.api('followShop', { "shopId": tp.shopId, "follow": true, "type": "0" })];
                    case 65:
                        data = _w.sent();
                        console.log('followShop', data.msg);
                        return [4 /*yield*/, this.wait(1000)];
                    case 66:
                        _w.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId.toString(), "taskToken": tp.taskToken, "actionType": 1, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 67:
                        data = _w.sent();
                        console.log(data.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000 || 3000)];
                    case 68:
                        _w.sent();
                        return [4 /*yield*/, this.qryViewkitCallbackResult(tp.taskToken)];
                    case 69:
                        data = _w.sent();
                        console.log(data.toast.subTitle);
                        return [4 /*yield*/, this.wait(8000)];
                    case 70:
                        _w.sent();
                        _w.label = 71;
                    case 71:
                        _o++;
                        return [3 /*break*/, 63];
                    case 72:
                        if (!t.shoppingActivityVos) return [3 /*break*/, 82];
                        _q = 0, _r = t.shoppingActivityVos;
                        _w.label = 73;
                    case 73:
                        if (!(_q < _r.length)) return [3 /*break*/, 82];
                        tp = _r[_q];
                        if (!(tp.status === 1)) return [3 /*break*/, 79];
                        return [4 /*yield*/, this.getLog()];
                    case 74:
                        log = _w.sent();
                        console.log(tp.title);
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId, "taskToken": tp.taskToken, "actionType": 1, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 75:
                        data = _w.sent();
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000 || 3000)];
                    case 76:
                        _w.sent();
                        if (!![3, 26].includes(t.taskType)) return [3 /*break*/, 79];
                        return [4 /*yield*/, this.qryViewkitCallbackResult(tp.taskToken)];
                    case 77:
                        data = _w.sent();
                        console.log(data.toast.subTitle);
                        return [4 /*yield*/, this.wait(5000)];
                    case 78:
                        _w.sent();
                        _w.label = 79;
                    case 79: return [4 /*yield*/, this.wait(5000)];
                    case 80:
                        _w.sent();
                        _w.label = 81;
                    case 81:
                        _q++;
                        return [3 /*break*/, 73];
                    case 82:
                        if (!t.taskName.includes('加购')) return [3 /*break*/, 85];
                        console.log(t.taskName);
                        return [4 /*yield*/, this.api('promote_getTaskDetail', { taskId: t.taskId })];
                    case 83:
                        data = _w.sent();
                        return [4 /*yield*/, this.feed(t.taskId, secretp)];
                    case 84:
                        _w.sent();
                        _w.label = 85;
                    case 85:
                        if (!(t.taskType === 0)) return [3 /*break*/, 88];
                        console.log(t.taskName);
                        return [4 /*yield*/, this.getLog()];
                    case 86:
                        log = _w.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId, "taskToken": t.simpleRecordInfoVo.taskToken, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 87:
                        data = _w.sent();
                        console.log(parseInt(data.data.result.acquiredScore));
                        _w.label = 88;
                    case 88:
                        if (!(t.taskType === 2)) return [3 /*break*/, 96];
                        return [4 /*yield*/, this.api('promote_getFeedDetail', { taskId: t.taskId })];
                    case 89:
                        data = _w.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 90:
                        _w.sent();
                        times = data.data.result.addProductVos[0].times, maxTimes = data.data.result.addProductVos[0].maxTimes;
                        _s = 0, _t = data.data.result.addProductVos[0].productInfoVos;
                        _w.label = 91;
                    case 91:
                        if (!(_s < _t.length)) return [3 /*break*/, 96];
                        tp = _t[_s];
                        if (times === maxTimes)
                            return [3 /*break*/, 96];
                        console.log(tp.skuName);
                        return [4 /*yield*/, this.getLog()];
                    case 92:
                        log = _w.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId, "taskToken": tp.taskToken, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 93:
                        data = _w.sent();
                        times++;
                        console.log(parseInt(data.data.result.acquiredScore));
                        return [4 /*yield*/, this.wait(1000)];
                    case 94:
                        _w.sent();
                        _w.label = 95;
                    case 95:
                        _s++;
                        return [3 /*break*/, 91];
                    case 96:
                        if (!(t.taskType === 5)) return [3 /*break*/, 104];
                        console.log(t.taskName);
                        return [4 /*yield*/, this.api('promote_getFeedDetail', { taskId: t.taskId })];
                    case 97:
                        res = _w.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 98:
                        _w.sent();
                        _u = 0, _v = res.data.result.taskVos[0].browseShopVo.slice(0, 4);
                        _w.label = 99;
                    case 99:
                        if (!(_u < _v.length)) return [3 /*break*/, 104];
                        tp = _v[_u];
                        if (!(tp.status === 1)) return [3 /*break*/, 103];
                        return [4 /*yield*/, this.getLog()];
                    case 100:
                        log = _w.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId, "taskToken": tp.taskToken, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 101:
                        data = _w.sent();
                        console.log(data.data.result.successToast);
                        return [4 /*yield*/, this.wait(2000)];
                    case 102:
                        _w.sent();
                        _w.label = 103;
                    case 103:
                        _u++;
                        return [3 /*break*/, 99];
                    case 104:
                        _j++;
                        return [3 /*break*/, 56];
                    case 105: return [3 /*break*/, 107];
                    case 106:
                        e_2 = _w.sent();
                        console.log('Error', e_2);
                        return [3 /*break*/, 110];
                    case 107: return [4 /*yield*/, this.wait(6000)];
                    case 108:
                        _w.sent();
                        _w.label = 109;
                    case 109:
                        loop++;
                        return [3 /*break*/, 48];
                    case 110: return [2 /*return*/];
                }
            });
        });
    };
    Jd_618.prototype.help = function (users) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var shareCodeHW_group, shareCodeHW, shareCode, full, groups, _i, users_1, user, res, log, secretp, _e, shareCode_1, code, memberCount, _f, groups_1, group, e_3;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0: return [2 /*return*/];
                    case 1:
                        if (!(_i < users_1.length)) return [3 /*break*/, 27];
                        user = users_1[_i];
                        _g.label = 2;
                    case 2:
                        _g.trys.push([2, 25, , 26]);
                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(user.index + 1, "\u3011").concat(user.UserName, "\n"));
                        this.user = user;
                        res = void 0, log = void 0;
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 3:
                        res = _g.sent();
                        secretp = res.data.result.homeMainInfo.secretp;
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getshareCodeHW('lyb')];
                    case 4:
                        shareCodeHW = _g.sent();
                        _g.label = 5;
                    case 5:
                        if (user.index === 0) {
                            shareCode = Array.from(new Set(__spreadArray(__spreadArray([], shareCodeHW, true), this.shareCodeSelf, true)));
                        }
                        else {
                            shareCode = Array.from(new Set(__spreadArray(__spreadArray([], this.shareCodeSelf, true), shareCodeHW, true)));
                        }
                        this.o2s(this.shareCodeSelf, '内部助力');
                        _e = 0, shareCode_1 = shareCode;
                        _g.label = 6;
                    case 6:
                        if (!(_e < shareCode_1.length)) return [3 /*break*/, 11];
                        code = shareCode_1[_e];
                        if (!!full.includes(code)) return [3 /*break*/, 10];
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code));
                        return [4 /*yield*/, this.getLog()];
                    case 7:
                        log = _g.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', {
                                "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }),
                                "actionType": "0",
                                "inviteId": code
                            })];
                    case 8:
                        res = _g.sent();
                        if (res.data.bizCode === 0) {
                            console.log('助力成功', parseFloat(res.data.result.acquiredScore));
                            if ((_b = (_a = res.data.result) === null || _a === void 0 ? void 0 : _a.redpacket) === null || _b === void 0 ? void 0 : _b.value)
                                console.log('🧧', parseFloat((_d = (_c = res.data.result) === null || _c === void 0 ? void 0 : _c.redpacket) === null || _d === void 0 ? void 0 : _d.value));
                        }
                        else if (res.data.bizMsg === '助力次数用完啦~') {
                            console.log('上限');
                            return [3 /*break*/, 11];
                        }
                        else if (res.data.bizMsg === '好友人气爆棚，不需要助力啦~') {
                            console.log(res.data.bizMsg);
                            full.push(code);
                        }
                        else {
                            console.log(res.data.bizMsg);
                        }
                        return [4 /*yield*/, this.wait(4000)];
                    case 9:
                        _g.sent();
                        _g.label = 10;
                    case 10:
                        _e++;
                        return [3 /*break*/, 6];
                    case 11: return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 12:
                        res = _g.sent();
                        if (!res.data.result.groupInfo.memberList) return [3 /*break*/, 24];
                        if (!(shareCodeHW_group.length === 0)) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.getshareCodeHW('lyb_group')];
                    case 13:
                        shareCodeHW_group = _g.sent();
                        _g.label = 14;
                    case 14:
                        if (user.index === users.length - 1) {
                            groups = __spreadArray(__spreadArray([], shareCodeHW_group, true), groups, true);
                        }
                        memberCount = res.data.result.groupInfo.memberList.length;
                        if (!(memberCount === 1)) return [3 /*break*/, 22];
                        _f = 0, groups_1 = groups;
                        _g.label = 15;
                    case 15:
                        if (!(_f < groups_1.length)) return [3 /*break*/, 22];
                        group = groups_1[_f];
                        return [4 /*yield*/, this.getLog()];
                    case 16:
                        log = _g.sent();
                        return [4 /*yield*/, this.api('collectFriendRecordColor', { "mpin": group.mpin, "businessCode": "20136", "assistType": "2", "shareSource": 1 })];
                    case 17:
                        res = _g.sent();
                        return [4 /*yield*/, this.api('promote_pk_joinGroup', { "inviteId": group.groupJoinInviteId, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }), "confirmFlag": 1 })];
                    case 18:
                        res = _g.sent();
                        return [4 /*yield*/, this.wait(3000)];
                    case 19:
                        _g.sent();
                        if (res.data.bizCode === 0) {
                            console.log('加入队伍成功');
                            return [3 /*break*/, 22];
                        }
                        else {
                            console.log(res.data.bizMsg);
                        }
                        return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 20:
                        res = _g.sent();
                        _g.label = 21;
                    case 21:
                        _f++;
                        return [3 /*break*/, 15];
                    case 22: return [4 /*yield*/, this.wait(3000)];
                    case 23:
                        _g.sent();
                        _g.label = 24;
                    case 24: return [3 /*break*/, 26];
                    case 25:
                        e_3 = _g.sent();
                        console.log(e_3);
                        return [3 /*break*/, 26];
                    case 26:
                        _i++;
                        return [3 /*break*/, 1];
                    case 27: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_618;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_618().init().then();
