"use strict";
/**
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
                        this.o2s(data);
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
        return __awaiter(this, void 0, void 0, function () {
            var res, data, log, secretp, totalScore, nextLevelScore, i, scenceId, e_1, qryList, _i, qryList_1, t, ActivityId, appId, taskVos, _a, taskVos_1, tp, i, vos, userLightChance, fragmentList, lotteryTimes, i, loop, inviteId, _b, _c, t, _d, _e, t, _f, _g, tp, _h, _j, tp, _k, _l, tp, _m, _o, tp, e_2;
            return __generator(this, function (_p) {
                switch (_p.label) {
                    case 0:
                        this.user = user;
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 1:
                        res = _p.sent();
                        secretp = res.data.result.homeMainInfo.secretp;
                        totalScore = parseInt(res.data.result.homeMainInfo.raiseInfo.totalScore), nextLevelScore = parseInt(res.data.result.homeMainInfo.raiseInfo.scenceMap.sceneInfo[0].redNum.nextLevelScore);
                        console.log('当前金币', totalScore);
                        console.log('签到', res.data.result.homeMainInfo.todaySignStatus);
                        i = 0;
                        _p.label = 2;
                    case 2:
                        if (!(i < 20)) return [3 /*break*/, 10];
                        if (!(nextLevelScore <= totalScore)) return [3 /*break*/, 9];
                        console.log(nextLevelScore, totalScore);
                        _p.label = 3;
                    case 3:
                        _p.trys.push([3, 8, , 9]);
                        return [4 /*yield*/, this.logTool.main()];
                    case 4:
                        log = _p.sent();
                        scenceId = this.getRandomNumberByRange(1, 5);
                        if (i === 0)
                            scenceId = 1;
                        console.log(scenceId);
                        return [4 /*yield*/, this.api('promote_raise', { "scenceId": scenceId, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 5:
                        res = _p.sent();
                        if (res.data.result.levelUpAward.redNum) {
                            console.log('转盘分红', res.data.result.levelUpAward.redNum);
                        }
                        else {
                            console.log('转盘其他奖励');
                        }
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 6:
                        res = _p.sent();
                        totalScore = parseInt(res.data.result.homeMainInfo.raiseInfo.totalScore);
                        nextLevelScore = parseInt(res.data.result.homeMainInfo.raiseInfo.scenceMap.sceneInfo[0].redNum.nextLevelScore);
                        return [4 /*yield*/, this.wait(3000)];
                    case 7:
                        _p.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        e_1 = _p.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        i++;
                        return [3 /*break*/, 2];
                    case 10: return [4 /*yield*/, this.api('qryCompositeMaterials', { "qryParam": "[{\"type\":\"advertGroup\",\"mapTo\":\"brand\",\"id\":\"06306976\"}]", "activityId": "2fUope8TDN3dUJfNzQswkBLc7uE8", "pageId": "", "reqSrc": "", "applyKey": "jd_star" })];
                    case 11:
                        res = _p.sent();
                        this.o2s(res);
                        qryList = res.data.brand.list;
                        _i = 0, qryList_1 = qryList;
                        _p.label = 12;
                    case 12:
                        if (!(_i < qryList_1.length)) return [3 /*break*/, 36];
                        t = qryList_1[_i];
                        ActivityId = t.extension.venderLink1.match(/Zeus\/(\w*)/)[1];
                        console.log('ActivityId', ActivityId);
                        return [4 /*yield*/, this.api('factory_getStaticConfig', { "encryptActivityId": ActivityId, "channelId": 1 })];
                    case 13:
                        data = _p.sent();
                        appId = data.data.result.appId;
                        return [4 /*yield*/, this.api('template_mongo_getHomeData', { "taskToken": "", "appId": appId, "actId": ActivityId, "channelId": 1 })];
                    case 14:
                        res = _p.sent();
                        taskVos = res.data.result.taskVos;
                        _a = 0, taskVos_1 = taskVos;
                        _p.label = 15;
                    case 15:
                        if (!(_a < taskVos_1.length)) return [3 /*break*/, 29];
                        tp = taskVos_1[_a];
                        if (!(tp.times === 0)) return [3 /*break*/, 28];
                        if (!(tp.taskName === '每日签到')) return [3 /*break*/, 19];
                        return [4 /*yield*/, this.getLog()];
                    case 16:
                        log = _p.sent();
                        return [4 /*yield*/, this.api('template_mongo_collectScore', {
                                "taskToken": tp.simpleRecordInfoVo.taskToken,
                                "taskId": tp.taskId,
                                "actionType": 0,
                                "appId": appId,
                                "safeStr": "{\"random\":\"".concat(log.random, "\",\"sceneid\":\"RAGJSYh5\",\"log\":\"").concat(log.log, "\"}")
                            })];
                    case 17:
                        data = _p.sent();
                        console.log('签到成功', parseInt(data.data.result.acquiredScore));
                        return [4 /*yield*/, this.wait(3000)];
                    case 18:
                        _p.sent();
                        return [3 /*break*/, 26];
                    case 19:
                        if (!(tp.followShopVo || tp.productInfoVos || tp.shoppingActivityVos)) return [3 /*break*/, 25];
                        i = tp.times;
                        _p.label = 20;
                    case 20:
                        if (!(i < tp.maxTimes)) return [3 /*break*/, 24];
                        vos = tp.followShopVo || tp.productInfoVos || tp.shoppingActivityVos;
                        console.log(tp.taskName);
                        return [4 /*yield*/, this.api('template_mongo_collectScore', { "taskToken": vos[i].taskToken, "taskId": tp.taskId, "actionType": 0, "appId": appId, "safeStr": "{\"random\":\"".concat(log.random, "\",\"sceneid\":\"RAGJSYh5\",\"log\":\"").concat(log.log, "\"}") })];
                    case 21:
                        data = _p.sent();
                        console.log(parseInt(data.data.result.acquiredScore));
                        return [4 /*yield*/, this.wait(1000)];
                    case 22:
                        _p.sent();
                        _p.label = 23;
                    case 23:
                        i++;
                        return [3 /*break*/, 20];
                    case 24: return [3 /*break*/, 26];
                    case 25:
                        if (tp.taskName.includes('会员') || tp.taskName.includes('下单')) {
                            console.log(tp.taskName, 'pass');
                        }
                        else {
                            console.log(tp);
                        }
                        _p.label = 26;
                    case 26: return [4 /*yield*/, this.wait(3000)];
                    case 27:
                        _p.sent();
                        _p.label = 28;
                    case 28:
                        _a++;
                        return [3 /*break*/, 15];
                    case 29: return [4 /*yield*/, this.api('template_mongo_getHomeData', { "taskToken": "", "appId": appId, "actId": ActivityId, "channelId": 1 })];
                    case 30:
                        res = _p.sent();
                        userLightChance = res.data.result.userInfo.userLightChance, fragmentList = res.data.result.userInfo.fragmentList;
                        console.log('可抽奖', userLightChance);
                        lotteryTimes = 0;
                        i = 1;
                        _p.label = 31;
                    case 31:
                        if (!(i < 7)) return [3 /*break*/, 35];
                        if (lotteryTimes === userLightChance)
                            return [3 /*break*/, 35];
                        if (!!fragmentList.includes(i)) return [3 /*break*/, 34];
                        return [4 /*yield*/, this.api('template_mongo_lottery', { "appId": appId, "fragmentId": i })];
                    case 32:
                        data = _p.sent();
                        if (data.data.result.userAwardDto.couponVo)
                            console.log(data.data.result.userAwardDto.couponVo.prizeName);
                        else if (data.data.result.userAwardDto.scoreVo)
                            console.log(parseInt(data.data.result.userAwardDto.scoreVo.quantity), '金币');
                        else
                            console.log(data.data.result.userAwardDto);
                        return [4 /*yield*/, this.wait(2000)];
                    case 33:
                        _p.sent();
                        lotteryTimes++;
                        _p.label = 34;
                    case 34:
                        i++;
                        return [3 /*break*/, 31];
                    case 35:
                        _i++;
                        return [3 /*break*/, 12];
                    case 36: return [4 /*yield*/, this.getLog()];
                    case 37:
                        log = _p.sent();
                        return [4 /*yield*/, this.api('promote_collectAutoScore', { ss: JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 38:
                        res = _p.sent();
                        console.log('收金币', parseInt(res.data.result.produceScore));
                        return [4 /*yield*/, this.wait(3000)];
                    case 39:
                        _p.sent();
                        loop = 0;
                        _p.label = 40;
                    case 40:
                        if (!(loop < 1)) return [3 /*break*/, 91];
                        _p.label = 41;
                    case 41:
                        _p.trys.push([41, 87, , 88]);
                        console.log('loop', loop);
                        return [4 /*yield*/, this.api('promote_getTaskDetail', {})];
                    case 42:
                        res = _p.sent();
                        this.o2s(res);
                        if (loop === 0) {
                            inviteId = res.data.result.inviteId;
                            console.log('助力码', inviteId);
                            this.shareCodeSelf.push(inviteId);
                        }
                        _b = 0, _c = res.data.result.lotteryTaskVos[0].badgeAwardVos;
                        _p.label = 43;
                    case 43:
                        if (!(_b < _c.length)) return [3 /*break*/, 47];
                        t = _c[_b];
                        if (!(t.status === 3)) return [3 /*break*/, 46];
                        return [4 /*yield*/, this.api('promote_getBadgeAward', { "awardToken": t.awardToken })];
                    case 44:
                        data = _p.sent();
                        console.log(t.awardName, parseInt(data.data.result.myAwardVos[0].pointVo.score));
                        return [4 /*yield*/, this.wait(3000)];
                    case 45:
                        _p.sent();
                        _p.label = 46;
                    case 46:
                        _b++;
                        return [3 /*break*/, 43];
                    case 47:
                        _d = 0, _e = res.data.result.taskVos;
                        _p.label = 48;
                    case 48:
                        if (!(_d < _e.length)) return [3 /*break*/, 86];
                        t = _e[_d];
                        if (t.taskName.includes('下单')) {
                            console.log('pass', t);
                            return [3 /*break*/, 85];
                        }
                        if (!t.taskName.includes('小程序')) return [3 /*break*/, 54];
                        _f = 0, _g = t.shoppingActivityVos;
                        _p.label = 49;
                    case 49:
                        if (!(_f < _g.length)) return [3 /*break*/, 54];
                        tp = _g[_f];
                        if (!(tp.status === 1)) return [3 /*break*/, 53];
                        return [4 /*yield*/, this.getLog()];
                    case 50:
                        log = _p.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId, "taskToken": tp.taskToken, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 51:
                        data = _p.sent();
                        console.log(parseInt(data.data.result.acquiredScore));
                        return [4 /*yield*/, this.wait(2000)];
                    case 52:
                        _p.sent();
                        _p.label = 53;
                    case 53:
                        _f++;
                        return [3 /*break*/, 49];
                    case 54:
                        if (!t.browseShopVo) return [3 /*break*/, 64];
                        _h = 0, _j = t.browseShopVo;
                        _p.label = 55;
                    case 55:
                        if (!(_h < _j.length)) return [3 /*break*/, 64];
                        tp = _j[_h];
                        if (!(tp.status === 1)) return [3 /*break*/, 63];
                        console.log(tp.shopName);
                        return [4 /*yield*/, this.getLog()];
                    case 56:
                        log = _p.sent();
                        return [4 /*yield*/, this.api('followShop', { "shopId": tp.shopId, "follow": true, "type": "0" })];
                    case 57:
                        data = _p.sent();
                        console.log('followShop', data.msg);
                        return [4 /*yield*/, this.wait(1000)];
                    case 58:
                        _p.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId.toString(), "taskToken": tp.taskToken, "actionType": 1, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 59:
                        data = _p.sent();
                        console.log(data.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000 || 3000)];
                    case 60:
                        _p.sent();
                        return [4 /*yield*/, this.qryViewkitCallbackResult(tp.taskToken)];
                    case 61:
                        data = _p.sent();
                        console.log(data.toast.subTitle);
                        return [4 /*yield*/, this.wait(8000)];
                    case 62:
                        _p.sent();
                        _p.label = 63;
                    case 63:
                        _h++;
                        return [3 /*break*/, 55];
                    case 64:
                        if (!t.shoppingActivityVos) return [3 /*break*/, 74];
                        _k = 0, _l = t.shoppingActivityVos;
                        _p.label = 65;
                    case 65:
                        if (!(_k < _l.length)) return [3 /*break*/, 74];
                        tp = _l[_k];
                        if (!(tp.status === 1)) return [3 /*break*/, 71];
                        return [4 /*yield*/, this.getLog()];
                    case 66:
                        log = _p.sent();
                        console.log(tp.title);
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId, "taskToken": tp.taskToken, "actionType": 1, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 67:
                        data = _p.sent();
                        console.log(data.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000 || 3000)];
                    case 68:
                        _p.sent();
                        return [4 /*yield*/, this.qryViewkitCallbackResult(tp.taskToken)];
                    case 69:
                        data = _p.sent();
                        console.log(data.toast.subTitle);
                        return [4 /*yield*/, this.wait(5000)];
                    case 70:
                        _p.sent();
                        _p.label = 71;
                    case 71: return [4 /*yield*/, this.wait(5000)];
                    case 72:
                        _p.sent();
                        _p.label = 73;
                    case 73:
                        _k++;
                        return [3 /*break*/, 65];
                    case 74:
                        if (!t.taskName.includes('加购')) return [3 /*break*/, 77];
                        console.log(t.taskName);
                        return [4 /*yield*/, this.api('promote_getTaskDetail', { taskId: t.taskId })];
                    case 75:
                        data = _p.sent();
                        return [4 /*yield*/, this.feed(t.taskId, secretp)];
                    case 76:
                        _p.sent();
                        _p.label = 77;
                    case 77:
                        if (!(t.taskType === 5)) return [3 /*break*/, 85];
                        console.log(t.taskName);
                        return [4 /*yield*/, this.api('promote_getFeedDetail', { taskId: t.taskId })];
                    case 78:
                        res = _p.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 79:
                        _p.sent();
                        _m = 0, _o = res.data.result.taskVos[0].browseShopVo.slice(0, 4);
                        _p.label = 80;
                    case 80:
                        if (!(_m < _o.length)) return [3 /*break*/, 85];
                        tp = _o[_m];
                        if (!(tp.status === 1)) return [3 /*break*/, 84];
                        return [4 /*yield*/, this.getLog()];
                    case 81:
                        log = _p.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', { "taskId": t.taskId, "taskToken": tp.taskToken, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 82:
                        data = _p.sent();
                        console.log(data.data.result.successToast);
                        return [4 /*yield*/, this.wait(2000)];
                    case 83:
                        _p.sent();
                        _p.label = 84;
                    case 84:
                        _m++;
                        return [3 /*break*/, 80];
                    case 85:
                        _d++;
                        return [3 /*break*/, 48];
                    case 86: return [3 /*break*/, 88];
                    case 87:
                        e_2 = _p.sent();
                        console.log('Error', e_2);
                        return [3 /*break*/, 91];
                    case 88: return [4 /*yield*/, this.wait(6000)];
                    case 89:
                        _p.sent();
                        _p.label = 90;
                    case 90:
                        loop++;
                        return [3 /*break*/, 40];
                    case 91: return [2 /*return*/];
                }
            });
        });
    };
    Jd_618.prototype.help = function (users) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var shareCodeHW_group, shareCodeHW, shareCode, full, _i, users_1, user, res, log, secretp, _e, shareCode_1, code, memberCount, groupJoinInviteId, e_3;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        shareCodeHW_group = [], shareCodeHW = [], shareCode = [], full = [];
                        _i = 0, users_1 = users;
                        _f.label = 1;
                    case 1:
                        if (!(_i < users_1.length)) return [3 /*break*/, 24];
                        user = users_1[_i];
                        _f.label = 2;
                    case 2:
                        _f.trys.push([2, 22, , 23]);
                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(user.index + 1, "\u3011").concat(user.UserName, "\n"));
                        this.user = user;
                        res = void 0, log = void 0;
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 3:
                        res = _f.sent();
                        secretp = res.data.result.homeMainInfo.secretp;
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getshareCodeHW('lyb')];
                    case 4:
                        shareCodeHW = _f.sent();
                        _f.label = 5;
                    case 5:
                        if (user.index === 0) {
                            shareCode = Array.from(new Set(__spreadArray(__spreadArray([], shareCodeHW, true), this.shareCodeSelf, true)));
                        }
                        else {
                            shareCode = Array.from(new Set(__spreadArray(__spreadArray([], this.shareCodeSelf, true), shareCodeHW, true)));
                        }
                        this.o2s(this.shareCodeSelf, '内部助力');
                        _e = 0, shareCode_1 = shareCode;
                        _f.label = 6;
                    case 6:
                        if (!(_e < shareCode_1.length)) return [3 /*break*/, 11];
                        code = shareCode_1[_e];
                        if (!!full.includes(code)) return [3 /*break*/, 10];
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code));
                        return [4 /*yield*/, this.getLog()];
                    case 7:
                        log = _f.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', {
                                "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }),
                                "actionType": "0",
                                "inviteId": code
                            })];
                    case 8:
                        res = _f.sent();
                        if (res.data.bizCode === 0) {
                            console.log('助力成功', parseFloat(res.data.result.acquiredScore));
                            if ((_b = (_a = res.data.result) === null || _a === void 0 ? void 0 : _a.redpacket) === null || _b === void 0 ? void 0 : _b.value)
                                console.log('🧧', parseFloat((_d = (_c = res.data.result) === null || _c === void 0 ? void 0 : _c.redpacket) === null || _d === void 0 ? void 0 : _d.value));
                        }
                        else if (res.data.bizMsg === '助力次数用完啦~') {
                            console.log(res.data.bizMsg);
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
                        _f.sent();
                        _f.label = 10;
                    case 10:
                        _e++;
                        return [3 /*break*/, 6];
                    case 11: return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 12:
                        res = _f.sent();
                        if (!res.data.result.groupInfo.memberList) return [3 /*break*/, 21];
                        memberCount = res.data.result.groupInfo.memberList.length;
                        console.log('当前队伍有', memberCount, '人');
                        groupJoinInviteId = "";
                        if (!groupJoinInviteId && memberCount < 20) {
                            groupJoinInviteId = res.data.result.groupInfo.groupJoinInviteId;
                            console.log('队伍未满', groupJoinInviteId);
                        }
                        if (!(shareCodeHW_group.length === 0)) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.getshareCodeHW('lyb_group')];
                    case 13:
                        shareCodeHW_group = _f.sent();
                        _f.label = 14;
                    case 14:
                        if (user.index === users.length - 1) {
                            groupJoinInviteId = shareCodeHW[0];
                        }
                        if (!(memberCount === 1)) return [3 /*break*/, 19];
                        return [4 /*yield*/, this.getLog()];
                    case 15:
                        log = _f.sent();
                        return [4 /*yield*/, this.api('promote_pk_joinGroup', { "inviteId": groupJoinInviteId, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }), "confirmFlag": 1 })];
                    case 16:
                        res = _f.sent();
                        return [4 /*yield*/, this.wait(3000)];
                    case 17:
                        _f.sent();
                        if (res.data.bizCode === 0) {
                            console.log('加入队伍成功');
                        }
                        else {
                            console.log(res.data.bizMsg);
                        }
                        return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 18:
                        res = _f.sent();
                        this.o2s(res, 'promote_pk_getHomeData');
                        _f.label = 19;
                    case 19: return [4 /*yield*/, this.wait(3000)];
                    case 20:
                        _f.sent();
                        _f.label = 21;
                    case 21: return [3 /*break*/, 23];
                    case 22:
                        e_3 = _f.sent();
                        console.log('e');
                        return [3 /*break*/, 23];
                    case 23:
                        _i++;
                        return [3 /*break*/, 1];
                    case 24: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_618;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_618().init().then();
