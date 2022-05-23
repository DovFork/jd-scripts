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
    Jd_618.prototype.xcx = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.post('https://api.m.jd.com/', "appid=signed_mp&client=xcx&clientVersion=-1&functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&loginType=1&loginWQBiz="), {
                        'Host': 'api.m.jd.com',
                        'Accept': '*/*',
                        'Connection': 'keep-alive',
                        'User-Agent': 'MiniProgramEnv/Windows',
                        'Referer': 'https://servicewechat.com/wx91d27dbf599dff74/621/page-frame.html',
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
            var res, data, log, secretp, totalScore, nextLevelScore, i, scenceId, e_1, qryList, _i, qryList_1, t, ActivityId, appId, taskVos, _a, taskVos_1, tp, i, vos, userLightChance, i, loop, inviteId, _b, _c, t, _d, _e, t, _f, _g, tp, _h, _j, tp, _k, _l, tp, e_2;
            return __generator(this, function (_m) {
                switch (_m.label) {
                    case 0:
                        this.user = user;
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 1:
                        res = _m.sent();
                        secretp = res.data.result.homeMainInfo.secretp;
                        totalScore = parseInt(res.data.result.homeMainInfo.raiseInfo.totalScore), nextLevelScore = parseInt(res.data.result.homeMainInfo.raiseInfo.scenceMap.sceneInfo[0].redNum.nextLevelScore);
                        console.log('当前金币', totalScore);
                        console.log('签到', res.data.result.homeMainInfo.todaySignStatus);
                        i = 0;
                        _m.label = 2;
                    case 2:
                        if (!(i < 20)) return [3 /*break*/, 10];
                        if (!(nextLevelScore <= totalScore)) return [3 /*break*/, 9];
                        console.log(nextLevelScore, totalScore);
                        _m.label = 3;
                    case 3:
                        _m.trys.push([3, 8, , 9]);
                        return [4 /*yield*/, this.logTool.main()];
                    case 4:
                        log = _m.sent();
                        scenceId = this.getRandomNumberByRange(1, 5);
                        if (i === 0)
                            scenceId = 1;
                        console.log(scenceId);
                        return [4 /*yield*/, this.api('promote_raise', { "scenceId": scenceId, "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 5:
                        res = _m.sent();
                        if (res.data.result.levelUpAward.redNum) {
                            console.log('转盘分红', res.data.result.levelUpAward.redNum);
                        }
                        else {
                            console.log('转盘其他奖励');
                        }
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 6:
                        res = _m.sent();
                        totalScore = parseInt(res.data.result.homeMainInfo.raiseInfo.totalScore);
                        nextLevelScore = parseInt(res.data.result.homeMainInfo.raiseInfo.scenceMap.sceneInfo[0].redNum.nextLevelScore);
                        return [4 /*yield*/, this.wait(3000)];
                    case 7:
                        _m.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        e_1 = _m.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        i++;
                        return [3 /*break*/, 2];
                    case 10: return [4 /*yield*/, this.api('qryCompositeMaterials', { "qryParam": "[{\"type\":\"advertGroup\",\"mapTo\":\"brand\",\"id\":\"06306976\"}]", "activityId": "2fUope8TDN3dUJfNzQswkBLc7uE8", "pageId": "", "reqSrc": "", "applyKey": "jd_star" })];
                    case 11:
                        res = _m.sent();
                        this.o2s(res);
                        qryList = res.data.brand.list;
                        _i = 0, qryList_1 = qryList;
                        _m.label = 12;
                    case 12:
                        if (!(_i < qryList_1.length)) return [3 /*break*/, 36];
                        t = qryList_1[_i];
                        ActivityId = t.extension.venderLink1.match(/Zeus\/(\w*)/)[1];
                        console.log('ActivityId', ActivityId);
                        return [4 /*yield*/, this.api('factory_getStaticConfig', { "encryptActivityId": ActivityId, "channelId": 1 })];
                    case 13:
                        data = _m.sent();
                        appId = data.data.result.appId;
                        return [4 /*yield*/, this.api('template_mongo_getHomeData', { "taskToken": "", "appId": appId, "actId": ActivityId, "channelId": 1 })];
                    case 14:
                        res = _m.sent();
                        taskVos = res.data.result.taskVos;
                        _a = 0, taskVos_1 = taskVos;
                        _m.label = 15;
                    case 15:
                        if (!(_a < taskVos_1.length)) return [3 /*break*/, 29];
                        tp = taskVos_1[_a];
                        if (!(tp.times === 0)) return [3 /*break*/, 28];
                        if (!(tp.taskName === '每日签到')) return [3 /*break*/, 19];
                        return [4 /*yield*/, this.getLog()];
                    case 16:
                        log = _m.sent();
                        return [4 /*yield*/, this.api('template_mongo_collectScore', {
                                "taskToken": tp.simpleRecordInfoVo.taskToken,
                                "taskId": tp.taskId,
                                "actionType": 0,
                                "appId": appId,
                                "safeStr": "{\"random\":\"".concat(log.random, "\",\"sceneid\":\"RAGJSYh5\",\"log\":\"").concat(log.log, "\"}")
                            })];
                    case 17:
                        data = _m.sent();
                        console.log('签到成功', parseInt(data.data.result.acquiredScore));
                        return [4 /*yield*/, this.wait(3000)];
                    case 18:
                        _m.sent();
                        return [3 /*break*/, 26];
                    case 19:
                        if (!(tp.followShopVo || tp.productInfoVos || tp.shoppingActivityVos)) return [3 /*break*/, 25];
                        i = tp.times;
                        _m.label = 20;
                    case 20:
                        if (!(i < tp.maxTimes)) return [3 /*break*/, 24];
                        vos = tp.followShopVo || tp.productInfoVos || tp.shoppingActivityVos;
                        console.log(tp.taskName);
                        return [4 /*yield*/, this.api('template_mongo_collectScore', { "taskToken": vos[i].taskToken, "taskId": tp.taskId, "actionType": 0, "appId": appId, "safeStr": "{\"random\":\"".concat(log.random, "\",\"sceneid\":\"RAGJSYh5\",\"log\":\"").concat(log.log, "\"}") })];
                    case 21:
                        data = _m.sent();
                        console.log(parseInt(data.data.result.acquiredScore));
                        return [4 /*yield*/, this.wait(1000)];
                    case 22:
                        _m.sent();
                        _m.label = 23;
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
                        _m.label = 26;
                    case 26: return [4 /*yield*/, this.wait(3000)];
                    case 27:
                        _m.sent();
                        _m.label = 28;
                    case 28:
                        _a++;
                        return [3 /*break*/, 15];
                    case 29: return [4 /*yield*/, this.api('template_mongo_getHomeData', { "taskToken": "", "appId": appId, "actId": ActivityId, "channelId": 1 })];
                    case 30:
                        res = _m.sent();
                        userLightChance = res.data.result.userInfo.userLightChance;
                        console.log('可抽奖', userLightChance);
                        i = 0;
                        _m.label = 31;
                    case 31:
                        if (!(i < userLightChance)) return [3 /*break*/, 35];
                        return [4 /*yield*/, this.api('template_mongo_lottery', { "appId": appId, "fragmentId": i + 1 })];
                    case 32:
                        data = _m.sent();
                        this.o2s(data);
                        console.log(data.data.result.userAwardDto);
                        return [4 /*yield*/, this.wait(1000)];
                    case 33:
                        _m.sent();
                        _m.label = 34;
                    case 34:
                        i++;
                        return [3 /*break*/, 31];
                    case 35:
                        _i++;
                        return [3 /*break*/, 12];
                    case 36: return [4 /*yield*/, this.getLog()];
                    case 37:
                        log = _m.sent();
                        return [4 /*yield*/, this.api('promote_collectAutoScore', { ss: JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }) })];
                    case 38:
                        res = _m.sent();
                        console.log('收金币', parseInt(res.data.result.produceScore));
                        return [4 /*yield*/, this.wait(3000)];
                    case 39:
                        _m.sent();
                        loop = 0;
                        _m.label = 40;
                    case 40:
                        if (!(loop < 3)) return [3 /*break*/, 84];
                        _m.label = 41;
                    case 41:
                        _m.trys.push([41, 80, , 81]);
                        console.log('loop', loop);
                        return [4 /*yield*/, this.api('promote_getTaskDetail', {})];
                    case 42:
                        res = _m.sent();
                        this.o2s(res);
                        if (loop === 0) {
                            inviteId = res.data.result.inviteId;
                            console.log('助力码', inviteId);
                            this.shareCodeSelf.push(inviteId);
                        }
                        _b = 0, _c = res.data.result.lotteryTaskVos[0].badgeAwardVos;
                        _m.label = 43;
                    case 43:
                        if (!(_b < _c.length)) return [3 /*break*/, 47];
                        t = _c[_b];
                        if (!(t.status === 3)) return [3 /*break*/, 46];
                        return [4 /*yield*/, this.api('promote_getBadgeAward', { "awardToken": t.awardToken })];
                    case 44:
                        data = _m.sent();
                        console.log(t.awardName, parseInt(data.data.result.myAwardVos[0].pointVo.score));
                        return [4 /*yield*/, this.wait(3000)];
                    case 45:
                        _m.sent();
                        _m.label = 46;
                    case 46:
                        _b++;
                        return [3 /*break*/, 43];
                    case 47:
                        _d = 0, _e = res.data.result.taskVos;
                        _m.label = 48;
                    case 48:
                        if (!(_d < _e.length)) return [3 /*break*/, 79];
                        t = _e[_d];
                        if (t.taskName.includes('下单') || t.taskName.includes('小程序')) {
                            console.log('pass', t);
                            return [3 /*break*/, 78];
                        }
                        if (!t.browseShopVo) return [3 /*break*/, 57];
                        _f = 0, _g = t.browseShopVo;
                        _m.label = 49;
                    case 49:
                        if (!(_f < _g.length)) return [3 /*break*/, 57];
                        tp = _g[_f];
                        if (!(tp.status === 1)) return [3 /*break*/, 56];
                        console.log(tp.shopName);
                        return [4 /*yield*/, this.getLog()];
                    case 50:
                        log = _m.sent();
                        return [4 /*yield*/, this.api('followShop', { "shopId": tp.shopId, "follow": true, "type": "0" })];
                    case 51:
                        data = _m.sent();
                        console.log('followShop', data.msg);
                        return [4 /*yield*/, this.api('promote_collectScore', {
                                "taskId": t.taskId.toString(),
                                "taskToken": tp.taskToken,
                                "actionType": 1,
                                "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random })
                            })];
                    case 52:
                        data = _m.sent();
                        console.log(data.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000 || 3000)];
                    case 53:
                        _m.sent();
                        return [4 /*yield*/, this.qryViewkitCallbackResult(tp.taskToken)];
                    case 54:
                        data = _m.sent();
                        console.log(data.toast.subTitle);
                        return [4 /*yield*/, this.wait(5000)];
                    case 55:
                        _m.sent();
                        _m.label = 56;
                    case 56:
                        _f++;
                        return [3 /*break*/, 49];
                    case 57:
                        if (!t.shoppingActivityVos) return [3 /*break*/, 67];
                        _h = 0, _j = t.shoppingActivityVos;
                        _m.label = 58;
                    case 58:
                        if (!(_h < _j.length)) return [3 /*break*/, 67];
                        tp = _j[_h];
                        if (!(tp.status === 1)) return [3 /*break*/, 64];
                        return [4 /*yield*/, this.getLog()];
                    case 59:
                        log = _m.sent();
                        console.log(tp.title);
                        return [4 /*yield*/, this.api('promote_collectScore', {
                                "taskId": t.taskId,
                                "taskToken": tp.taskToken,
                                "actionType": 1,
                                "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random })
                            })];
                    case 60:
                        data = _m.sent();
                        console.log(data.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000 || 3000)];
                    case 61:
                        _m.sent();
                        return [4 /*yield*/, this.qryViewkitCallbackResult(tp.taskToken)];
                    case 62:
                        data = _m.sent();
                        console.log(data.toast.subTitle);
                        return [4 /*yield*/, this.wait(5000)];
                    case 63:
                        _m.sent();
                        _m.label = 64;
                    case 64: return [4 /*yield*/, this.wait(5000)];
                    case 65:
                        _m.sent();
                        _m.label = 66;
                    case 66:
                        _h++;
                        return [3 /*break*/, 58];
                    case 67:
                        if (!t.taskName.includes('加购')) return [3 /*break*/, 70];
                        console.log(t.taskName);
                        return [4 /*yield*/, this.api('promote_getTaskDetail', { taskId: t.taskId })];
                    case 68:
                        data = _m.sent();
                        return [4 /*yield*/, this.feed(t.taskId, secretp)];
                    case 69:
                        _m.sent();
                        _m.label = 70;
                    case 70:
                        if (!(t.taskType === 5)) return [3 /*break*/, 78];
                        console.log(t.taskName);
                        return [4 /*yield*/, this.api('promote_getFeedDetail', { taskId: t.taskId })];
                    case 71:
                        res = _m.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 72:
                        _m.sent();
                        _k = 0, _l = res.data.result.taskVos[0].browseShopVo.slice(0, 4);
                        _m.label = 73;
                    case 73:
                        if (!(_k < _l.length)) return [3 /*break*/, 78];
                        tp = _l[_k];
                        if (!(tp.status === 1)) return [3 /*break*/, 77];
                        return [4 /*yield*/, this.getLog()];
                    case 74:
                        log = _m.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', {
                                "taskId": t.taskId,
                                "taskToken": tp.taskToken,
                                "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random })
                            })];
                    case 75:
                        data = _m.sent();
                        console.log(data.data.result.successToast);
                        return [4 /*yield*/, this.wait(2000)];
                    case 76:
                        _m.sent();
                        _m.label = 77;
                    case 77:
                        _k++;
                        return [3 /*break*/, 73];
                    case 78:
                        _d++;
                        return [3 /*break*/, 48];
                    case 79: return [3 /*break*/, 81];
                    case 80:
                        e_2 = _m.sent();
                        console.log('Error', e_2);
                        return [3 /*break*/, 84];
                    case 81: return [4 /*yield*/, this.wait(6000)];
                    case 82:
                        _m.sent();
                        _m.label = 83;
                    case 83:
                        loop++;
                        return [3 /*break*/, 40];
                    case 84: return [2 /*return*/];
                }
            });
        });
    };
    Jd_618.prototype.help = function (users) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var shareCodeHW_group, shareCodeHW, shareCode, full, _i, users_1, user, res, log, secretp, _e, shareCode_1, code, memberCount, groupJoinInviteId;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        shareCodeHW_group = [], shareCodeHW = [], shareCode = [], full = [];
                        _i = 0, users_1 = users;
                        _f.label = 1;
                    case 1:
                        if (!(_i < users_1.length)) return [3 /*break*/, 21];
                        user = users_1[_i];
                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(user.index + 1, "\u3011").concat(user.UserName, "\n"));
                        this.user = user;
                        res = void 0, log = void 0;
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 2:
                        res = _f.sent();
                        secretp = res.data.result.homeMainInfo.secretp;
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getshareCodeHW('lyb')];
                    case 3:
                        shareCodeHW = _f.sent();
                        _f.label = 4;
                    case 4:
                        if (user.index === 0) {
                            shareCode = Array.from(new Set(__spreadArray(__spreadArray([], shareCodeHW, true), this.shareCodeSelf, true)));
                        }
                        else {
                            shareCode = Array.from(new Set(__spreadArray(__spreadArray([], this.shareCodeSelf, true), shareCodeHW, true)));
                        }
                        this.o2s(this.shareCodeSelf, '内部助力');
                        _e = 0, shareCode_1 = shareCode;
                        _f.label = 5;
                    case 5:
                        if (!(_e < shareCode_1.length)) return [3 /*break*/, 10];
                        code = shareCode_1[_e];
                        if (!!full.includes(code)) return [3 /*break*/, 9];
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code));
                        return [4 /*yield*/, this.getLog()];
                    case 6:
                        log = _f.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', {
                                "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }),
                                "actionType": "0",
                                "inviteId": code
                            })];
                    case 7:
                        res = _f.sent();
                        if (res.data.bizCode === 0) {
                            console.log('助力成功', parseFloat(res.data.result.acquiredScore));
                            if ((_b = (_a = res.data.result) === null || _a === void 0 ? void 0 : _a.redpacket) === null || _b === void 0 ? void 0 : _b.value)
                                console.log('🧧', parseFloat((_d = (_c = res.data.result) === null || _c === void 0 ? void 0 : _c.redpacket) === null || _d === void 0 ? void 0 : _d.value));
                        }
                        else if (res.data.bizMsg === '助力次数用完啦~') {
                            console.log(res.data.bizMsg);
                            return [3 /*break*/, 10];
                        }
                        else if (res.data.bizMsg === '好友人气爆棚，不需要助力啦~') {
                            console.log(res.data.bizMsg);
                            full.push(code);
                        }
                        else {
                            console.log(res.data.bizMsg);
                        }
                        return [4 /*yield*/, this.wait(4000)];
                    case 8:
                        _f.sent();
                        _f.label = 9;
                    case 9:
                        _e++;
                        return [3 /*break*/, 5];
                    case 10: return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 11:
                        res = _f.sent();
                        memberCount = res.data.result.groupInfo.memberList.length;
                        console.log('当前队伍有', memberCount, '人');
                        groupJoinInviteId = "";
                        if (memberCount < 20) {
                            groupJoinInviteId = res.data.result.groupInfo.groupJoinInviteId;
                            console.log('队伍未满', groupJoinInviteId);
                        }
                        if (!(shareCodeHW_group.length === 0)) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.getshareCodeHW('lyb_group')];
                    case 12:
                        shareCodeHW_group = _f.sent();
                        _f.label = 13;
                    case 13:
                        if (user.index === users.length - 1) {
                            groupJoinInviteId = shareCodeHW[0];
                        }
                        if (!(memberCount === 1)) return [3 /*break*/, 18];
                        return [4 /*yield*/, this.getLog()];
                    case 14:
                        log = _f.sent();
                        return [4 /*yield*/, this.api('promote_pk_joinGroup', {
                                "inviteId": groupJoinInviteId,
                                "ss": JSON.stringify({ extraData: { log: encodeURIComponent(log.log), sceneid: 'RAhomePageh5' }, secretp: secretp, random: log.random }),
                                "confirmFlag": 1
                            })];
                    case 15:
                        res = _f.sent();
                        return [4 /*yield*/, this.wait(3000)];
                    case 16:
                        _f.sent();
                        if (res.data.bizCode === 0) {
                            console.log('加入队伍成功');
                        }
                        else {
                            console.log(res.data.bizMsg);
                        }
                        return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 17:
                        res = _f.sent();
                        this.o2s(res, 'promote_pk_getHomeData');
                        _f.label = 18;
                    case 18: return [4 /*yield*/, this.wait(5000)];
                    case 19:
                        _f.sent();
                        _f.label = 20;
                    case 20:
                        _i++;
                        return [3 /*break*/, 1];
                    case 21: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_618;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_618().init().then();
