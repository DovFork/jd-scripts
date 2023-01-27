"use strict";
/**
 * 京东-种树
 * 不带水滴助力
 * cron: 35 7,13,20 * * *
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var h5st_1 = require("./utils/h5st");
var date_fns_1 = require("date-fns");
var Jd_fruit = /** @class */ (function (_super) {
    __extends(Jd_fruit, _super);
    function Jd_fruit() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        _this.fp = undefined;
        return _this;
    }
    Jd_fruit.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        this.fp = process.env.FP_8A2AF || process.env.FP_0C010;
                        if (!!this.fp) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.getFp()];
                    case 1:
                        _a.fp = _b.sent();
                        _b.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        console.log(e_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [4 /*yield*/, this.run(this)];
                    case 5:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_fruit.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now().toString();
                        h5st = this.h5stTool.__genH5st({
                            'appid': 'signed_wh5',
                            'body': JSON.stringify(body),
                            'client': 'iOS',
                            'clientVersion': '11.3.0',
                            'functionId': fn
                        });
                        return [4 /*yield*/, this.get("https://api.m.jd.com/client.action?functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&appid=signed_wh5&timestamp=").concat(timestamp, "&client=iOS&clientVersion=11.3.0&h5st=").concat(h5st), {
                                'Host': 'api.m.jd.com',
                                'Origin': 'https://carry.m.jd.com',
                                'User-Agent': this.user.UserAgent,
                                'Referer': 'https://carry.m.jd.com/',
                                'Cookie': this.user.cookie
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_fruit.prototype.friendListInitForFarm = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get("https://api.m.jd.com/client.action?functionId=friendListInitForFarm&body=%7B%22lastId%22%3Anull%2C%22version%22%3A18%2C%22channel%22%3A1%2C%22babelChannel%22%3A%2210%22%7D&appid=wh5&timestamp=".concat(Date.now(), "&client=iOS&clientVersion=11.3.0"), {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://carry.m.jd.com',
                            'User-Agent': this.user.UserAgent,
                            'Referer': 'https://carry.m.jd.com/',
                            'Cookie': this.user.cookie
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_fruit.prototype.main = function (user) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var res, data, totalEnergy, _i, _b, t, i, i, _c, _d, t, friendList, finishCount, _e, _f, t, _g, _h, t, _j, _k, t, i, e_2;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        _l.trys.push([0, 99, , 100]);
                        this.user = user;
                        this.user.UserAgent = "jdapp;iPhone;11.3.0;;;M/5.0;appBuild/168341;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;");
                        res = void 0, data = void 0;
                        this.h5stTool = new h5st_1.H5ST('8a2af', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _l.sent();
                        return [4 /*yield*/, this.api('initForFarm', { "babelChannel": "10", "sid": "", "un_area": "", "version": 18, "channel": 1 })];
                    case 2:
                        res = _l.sent();
                        if (res.code === '0') {
                            console.log('助力码', res.farmUserPro.shareCode);
                            this.shareCodeSelf.push(res.farmUserPro.shareCode);
                        }
                        else if (res.code === '3') {
                            console.log('Cookie过期');
                            return [2 /*return*/, { msg: "\u8D26\u53F7".concat(this.user.index + 1, " ").concat(this.user.UserName, "\nCookie\u8FC7\u671F\n") }];
                        }
                        else {
                            this.o2s(res, '初始化失败');
                            process.exit(0);
                        }
                        totalEnergy = res.farmUserPro.totalEnergy;
                        console.log('🌲', res.farmUserPro.treeEnergy);
                        if (res.farmUserPro.treeEnergy === res.farmUserPro.treeTotalEnergy) {
                            return [2 /*return*/, { msg: "\u8D26\u53F7".concat(this.user.index + 1, " ").concat(this.user.UserName, "\n\u79CD\u6811\u6210\u719F\n") }];
                        }
                        if (!res.todayGotWaterGoalTask.canPop) return [3 /*break*/, 5];
                        this.h5stTool = new h5st_1.H5ST('c901b', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 3:
                        _l.sent();
                        return [4 /*yield*/, this.api('gotWaterGoalTaskForFarm', { "type": 3, "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 4:
                        data = _l.sent();
                        console.log('弹窗水滴💧', data.addEnergy);
                        _l.label = 5;
                    case 5:
                        // 背包
                        this.h5stTool = new h5st_1.H5ST('157b6', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 6:
                        _l.sent();
                        return [4 /*yield*/, this.api('myCardInfoForFarm', { "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 7:
                        res = _l.sent();
                        if (!(res.doubleCard && totalEnergy >= 100)) return [3 /*break*/, 13];
                        console.log('水滴翻倍卡数量', res.doubleCard);
                        this.h5stTool = new h5st_1.H5ST('86ba5', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 8:
                        _l.sent();
                        _l.label = 9;
                    case 9:
                        if (!(res.doubleCard > 0)) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.api('userMyCardForFarm', { "cardType": "doubleCard", "type": "", "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 10:
                        data = _l.sent();
                        data.code === '0' && console.log('使用水滴翻倍卡', data.addWater);
                        return [4 /*yield*/, this.wait(1000)];
                    case 11:
                        _l.sent();
                        _l.label = 12;
                    case 12:
                        --res.doubleCard;
                        return [3 /*break*/, 9];
                    case 13: return [4 /*yield*/, this.api('initForTurntableFarm', { "version": 4, "channel": 1 })];
                    case 14:
                        res = _l.sent();
                        _i = 0, _b = res.turntableBrowserAds;
                        _l.label = 15;
                    case 15:
                        if (!(_i < _b.length)) return [3 /*break*/, 20];
                        t = _b[_i];
                        if (!!t.status) return [3 /*break*/, 19];
                        console.log(t.main);
                        return [4 /*yield*/, this.api('browserForTurntableFarm', { "type": 1, "adId": t.adId, "version": 4, "channel": 1 })];
                    case 16:
                        _l.sent();
                        return [4 /*yield*/, this.wait(t.browserTimes * 1000 || 1000)];
                    case 17:
                        _l.sent();
                        return [4 /*yield*/, this.api('browserForTurntableFarm', { "type": 2, "adId": t.adId, "version": 4, "channel": 1 })];
                    case 18:
                        data = _l.sent();
                        data.code === '0' && console.log('抽奖次数', data.totalTimes);
                        _l.label = 19;
                    case 19:
                        _i++;
                        return [3 /*break*/, 15];
                    case 20: return [4 /*yield*/, this.api('initForTurntableFarm', { "version": 4, "channel": 1 })];
                    case 21:
                        res = _l.sent();
                        if (!(!res.timingGotStatus && Date.now() > (0, date_fns_1.getTime)((0, date_fns_1.addHours)(res.timingLastSysTime, 4)))) return [3 /*break*/, 23];
                        return [4 /*yield*/, this.api('timingAwardForTurntableFarm', { "version": 4, "channel": 1 })];
                    case 22:
                        data = _l.sent();
                        data.code === '0' && console.log('抽奖次数+', data.addTimes);
                        _l.label = 23;
                    case 23:
                        i = 0;
                        _l.label = 24;
                    case 24:
                        if (!(i < res.remainLotteryTimes)) return [3 /*break*/, 28];
                        return [4 /*yield*/, this.api('lotteryForTurntableFarm', { "type": 1, "version": 4, "channel": 1 })];
                    case 25:
                        data = _l.sent();
                        console.log('抽奖结果', data.type);
                        return [4 /*yield*/, this.wait(3000)];
                    case 26:
                        _l.sent();
                        _l.label = 27;
                    case 27:
                        i++;
                        return [3 /*break*/, 24];
                    case 28:
                        // 任务列表
                        this.h5stTool = new h5st_1.H5ST('fcb5a', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 29:
                        _l.sent();
                        return [4 /*yield*/, this.api('taskInitForFarm', { "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 30:
                        res = _l.sent();
                        if (!((_a = res['treasureBoxInit-getBean']) === null || _a === void 0 ? void 0 : _a.f)) {
                        }
                        if (!!res.totalWaterTaskInit.f) return [3 /*break*/, 39];
                        this.h5stTool = new h5st_1.H5ST('0c010', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 31:
                        _l.sent();
                        i = 0;
                        _l.label = 32;
                    case 32:
                        if (!(i < 10 - res.totalWaterTaskTimes)) return [3 /*break*/, 36];
                        return [4 /*yield*/, this.api('waterGoodForFarm', { "type": "", "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 33:
                        data = _l.sent();
                        if (data.code === '0') {
                            console.log('💧', data.totalEnergy);
                            console.log('🌲', data.treeEnergy);
                        }
                        else {
                            console.log('浇水失败', data);
                            return [3 /*break*/, 36];
                        }
                        return [4 /*yield*/, this.wait(5000)];
                    case 34:
                        _l.sent();
                        _l.label = 35;
                    case 35:
                        i++;
                        return [3 /*break*/, 32];
                    case 36:
                        this.h5stTool = new h5st_1.H5ST('102f5', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 37:
                        _l.sent();
                        return [4 /*yield*/, this.api('totalWaterTaskForFarm', { "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 38:
                        data = _l.sent();
                        data.code === '0' && console.log('十次奖励💧', data.totalWaterTaskEnergy);
                        _l.label = 39;
                    case 39:
                        if (!(!res.firstWaterInit.f && res.firstWaterInit.totalWaterTimes)) return [3 /*break*/, 42];
                        this.h5stTool = new h5st_1.H5ST('0cf1e', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 40:
                        _l.sent();
                        return [4 /*yield*/, this.api('firstWaterTaskForFarm', { "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 41:
                        data = _l.sent();
                        data.code === '0' && console.log('首次奖励💧', data.amount);
                        _l.label = 42;
                    case 42:
                        if (!!res.gotThreeMealInit.f) return [3 /*break*/, 45];
                        if (!![10, 15, 16, 22, 23].includes(new Date().getHours())) return [3 /*break*/, 45];
                        return [4 /*yield*/, this.api('gotThreeMealForFarm', { "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 43:
                        data = _l.sent();
                        data.code === '0' && console.log('定时奖励💧', data.amount);
                        return [4 /*yield*/, this.wait(1000)];
                    case 44:
                        _l.sent();
                        _l.label = 45;
                    case 45:
                        if (!!res.gotBrowseTaskAdInit.f) return [3 /*break*/, 53];
                        this.h5stTool = new h5st_1.H5ST('53f09', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 46:
                        _l.sent();
                        _c = 0, _d = res.gotBrowseTaskAdInit.userBrowseTaskAds;
                        _l.label = 47;
                    case 47:
                        if (!(_c < _d.length)) return [3 /*break*/, 53];
                        t = _d[_c];
                        if (!(t.hadFinishedTimes !== t.limit)) return [3 /*break*/, 52];
                        console.log(t.mainTitle);
                        return [4 /*yield*/, this.api('browseAdTaskForFarm', { "advertId": t.advertId, "type": 0, "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 48:
                        data = _l.sent();
                        data.code === '0' && console.log('任务完成');
                        return [4 /*yield*/, this.wait(t.time * 1000 || 2000)];
                    case 49:
                        _l.sent();
                        return [4 /*yield*/, this.api('browseAdTaskForFarm', { "advertId": t.advertId, "type": 1, "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 50:
                        data = _l.sent();
                        data.code === '0' && console.log('领奖成功💧', data.amount);
                        return [4 /*yield*/, this.wait(1000)];
                    case 51:
                        _l.sent();
                        _l.label = 52;
                    case 52:
                        _c++;
                        return [3 /*break*/, 47];
                    case 53:
                        if (!(!res.waterRainInit.f && Date.now() > (0, date_fns_1.getTime)((0, date_fns_1.addHours)(res.lastTime || 1669906397000, 4)))) return [3 /*break*/, 57];
                        this.h5stTool = new h5st_1.H5ST('9983a', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 54:
                        _l.sent();
                        return [4 /*yield*/, this.api('waterRainForFarm', { "type": 1, "hongBaoTimes": 99, "version": 14, "channel": 1 })];
                    case 55:
                        data = _l.sent();
                        data.code === '0' ? console.log('红包雨💧', data.addEnergy) : this.o2s(data, '红包雨error');
                        return [4 /*yield*/, this.wait(1000)];
                    case 56:
                        _l.sent();
                        _l.label = 57;
                    case 57:
                        if (!!res.waterFriendTaskInit.f) return [3 /*break*/, 69];
                        return [4 /*yield*/, this.friendListInitForFarm()];
                    case 58:
                        friendList = _l.sent();
                        finishCount = 0;
                        _e = 0, _f = friendList.friends;
                        _l.label = 59;
                    case 59:
                        if (!(_e < _f.length)) return [3 /*break*/, 66];
                        t = _f[_e];
                        if (!(t.friendState === 1)) return [3 /*break*/, 65];
                        console.log("\u5E2E\u597D\u53CB ".concat(t.nickName, " ").concat(t.shareCode, " \u6D47\u6C34"));
                        this.h5stTool = new h5st_1.H5ST('a5a9c', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 60:
                        _l.sent();
                        return [4 /*yield*/, this.api('friendInitForFarm', { "shareCode": t.shareCode, "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 61:
                        _l.sent();
                        this.h5stTool = new h5st_1.H5ST('673a0', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 62:
                        _l.sent();
                        return [4 /*yield*/, this.api('waterFriendForFarm', { "shareCode": t.shareCode, "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 63:
                        data = _l.sent();
                        if (data.code === '0') {
                            console.log('帮助成功');
                            finishCount++;
                        }
                        else {
                            this.o2s(data, '帮助失败');
                            return [3 /*break*/, 66];
                        }
                        return [4 /*yield*/, this.wait(2000)];
                    case 64:
                        _l.sent();
                        if (finishCount === 2)
                            return [3 /*break*/, 66];
                        _l.label = 65;
                    case 65:
                        _e++;
                        return [3 /*break*/, 59];
                    case 66:
                        this.h5stTool = new h5st_1.H5ST('d08ff', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 67:
                        _l.sent();
                        return [4 /*yield*/, this.api('waterFriendGotAwardForFarm', { "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 68:
                        data = _l.sent();
                        console.log('帮好友浇水奖励💧', data.addWater);
                        _l.label = 69;
                    case 69:
                        // 签到页面
                        this.h5stTool = new h5st_1.H5ST('08dc3', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 70:
                        _l.sent();
                        return [4 /*yield*/, this.api('clockInInitForFarm', { "timestamp": Date.now(), "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 71:
                        res = _l.sent();
                        this.h5stTool = new h5st_1.H5ST('4a0b4', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 72:
                        _l.sent();
                        _g = 0, _h = res.themes || [];
                        _l.label = 73;
                    case 73:
                        if (!(_g < _h.length)) return [3 /*break*/, 78];
                        t = _h[_g];
                        if (!!t.hadGot) return [3 /*break*/, 77];
                        console.log(t.name);
                        return [4 /*yield*/, this.api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 1, "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 74:
                        _l.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 75:
                        _l.sent();
                        return [4 /*yield*/, this.api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 2, "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 76:
                        data = _l.sent();
                        data.code === '0' && console.log('关注成功💧', data.amount);
                        _l.label = 77;
                    case 77:
                        _g++;
                        return [3 /*break*/, 73];
                    case 78:
                        if (!!res.todaySigned) return [3 /*break*/, 82];
                        this.h5stTool = new h5st_1.H5ST('32b94', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 79:
                        _l.sent();
                        return [4 /*yield*/, this.api('clockInForFarm', { "type": 1, "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 80:
                        data = _l.sent();
                        data.code === '0' ? console.log('签到成功', data.amount) : this.o2s(data, '签到失败');
                        return [4 /*yield*/, this.wait(2000)];
                    case 81:
                        _l.sent();
                        return [3 /*break*/, 83];
                    case 82:
                        console.log('已签到');
                        _l.label = 83;
                    case 83:
                        if (!(res.totalSigned === 7 && !res.gotClockInGift)) return [3 /*break*/, 85];
                        return [4 /*yield*/, this.api('clockInForFarm', { "type": 2, "version": 19, "channel": 1, "babelChannel": "10", "lat": "0", "lng": "0" })];
                    case 84:
                        data = _l.sent();
                        console.log('签到7天奖励', data.amount);
                        _l.label = 85;
                    case 85:
                        // 删除好友
                        this.h5stTool = new h5st_1.H5ST('eaf91', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 86:
                        _l.sent();
                        return [4 /*yield*/, this.friendListInitForFarm()];
                    case 87:
                        res = _l.sent();
                        _j = 0, _k = res.friends;
                        _l.label = 88;
                    case 88:
                        if (!(_j < _k.length)) return [3 /*break*/, 92];
                        t = _k[_j];
                        return [4 /*yield*/, this.api('deleteFriendForFarm', { "shareCode": t.shareCode, "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 89:
                        data = _l.sent();
                        if (data.code === '0') {
                            console.log("\u5220\u9664\u597D\u53CB ".concat(t.nickName, " \u6210\u529F"));
                        }
                        else {
                            console.log("\u5220\u9664\u5931\u8D25 ".concat(t.nickName, " \u5931\u8D25"), data);
                            return [3 /*break*/, 92];
                        }
                        return [4 /*yield*/, this.wait(2000)];
                    case 90:
                        _l.sent();
                        _l.label = 91;
                    case 91:
                        _j++;
                        return [3 /*break*/, 88];
                    case 92:
                        // 点鸭子
                        this.h5stTool = new h5st_1.H5ST('5c767', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 93:
                        _l.sent();
                        i = 0;
                        _l.label = 94;
                    case 94:
                        if (!(i < 10)) return [3 /*break*/, 98];
                        return [4 /*yield*/, this.api('getFullCollectionReward', { "type": 2, "version": 18, "channel": 1, "babelChannel": "10" })];
                    case 95:
                        data = _l.sent();
                        if (data.code === '0') {
                            data.title === '小鸭子为你带回了水滴' ? console.log(data.title, data.addWater) : console.log(data.title);
                        }
                        else if (data.code === '10' || data.hasLimit) {
                            console.log('鸭子上限');
                            return [3 /*break*/, 98];
                        }
                        return [4 /*yield*/, this.wait(5000)];
                    case 96:
                        _l.sent();
                        _l.label = 97;
                    case 97:
                        i++;
                        return [3 /*break*/, 94];
                    case 98: return [3 /*break*/, 100];
                    case 99:
                        e_2 = _l.sent();
                        console.log('error', e_2.message);
                        return [3 /*break*/, 100];
                    case 100: return [4 /*yield*/, this.wait(30000)];
                    case 101:
                        _l.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_fruit.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var res, _i, users_1, user, shareCodePool, shareCode, _a, shareCode_1, code, e_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (new Date().getHours() > 12)
                            return [2 /*return*/];
                        _i = 0, users_1 = users;
                        _b.label = 1;
                    case 1:
                        if (!(_i < users_1.length)) return [3 /*break*/, 11];
                        user = users_1[_i];
                        this.user = user;
                        this.user.UserAgent = "jdapp;iPhone;10.2.4;;;M/5.0;appBuild/167874;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;");
                        this.h5stTool = new h5st_1.H5ST('8a2af', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.getShareCodePool('farm', 50)];
                    case 3:
                        shareCodePool = _b.sent();
                        shareCode = __spreadArray(__spreadArray([], this.shareCodeSelf, true), shareCodePool, true);
                        _a = 0, shareCode_1 = shareCode;
                        _b.label = 4;
                    case 4:
                        if (!(_a < shareCode_1.length)) return [3 /*break*/, 10];
                        code = shareCode_1[_a];
                        _b.label = 5;
                    case 5:
                        _b.trys.push([5, 8, , 9]);
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code, " ").concat(this.shareCodeSelf.includes(code) ? '*内部*' : ''));
                        return [4 /*yield*/, this.api('initForFarm', { "shareCode": "".concat(code, "-3"), "sid": "", "un_area": "", "version": 18, "channel": 1, "babelChannel": 0 })];
                    case 6:
                        res = _b.sent();
                        if (res.code === '0') {
                            console.log('红包助力成功');
                        }
                        else if (res.code === '11') {
                            console.log('红包已助力过');
                        }
                        else if (res.code === '13') {
                            console.log('红包助力上限');
                            return [3 /*break*/, 10];
                        }
                        return [4 /*yield*/, this.wait(2000)];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        e_3 = _b.sent();
                        console.log(e_3.message);
                        return [3 /*break*/, 10];
                    case 9:
                        _a++;
                        return [3 /*break*/, 4];
                    case 10:
                        _i++;
                        return [3 /*break*/, 1];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_fruit;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_fruit().init().then();
