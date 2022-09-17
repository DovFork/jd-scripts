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
    Jd_fruit.prototype.api = function (fn, body, flag) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now().toString();
                        url = "https://api.m.jd.com/client.action?functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&appid=wh5&timestamp=").concat(timestamp, "&client=iOS&clientVersion=10.2.4");
                        if (flag) {
                            h5st = this.h5stTool.__genH5st({
                                'appid': 'signed_wh5',
                                'body': JSON.stringify(body),
                                'client': 'iOS',
                                'clientVersion': '10.2.4',
                                'functionId': fn
                            });
                            url = "https://api.m.jd.com/client.action?functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&appid=signed_wh5&timestamp=").concat(timestamp, "&client=iOS&clientVersion=10.2.4&h5st=").concat(h5st);
                        }
                        return [4 /*yield*/, this.get(url, {
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
        return __awaiter(this, void 0, void 0, function () {
            var res, data, _i, _a, t, _b, _c, t, _d, _e, t, _f, _g, t, e_2;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        _h.trys.push([0, 41, , 42]);
                        console.log(this.fp);
                        this.user = user;
                        this.user.UserAgent = "jdapp;iPhone;10.2.4;;;M/5.0;appBuild/167874;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;");
                        res = void 0, data = void 0;
                        // 天天红包
                        this.h5stTool = new h5st_1.H5ST('8a2af', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _h.sent();
                        return [4 /*yield*/, this.api('initForFarm', { "version": 18, "channel": 1, "babelChannel": "120" }, true)];
                    case 2:
                        res = _h.sent();
                        if (res.code === '0') {
                            console.log('助力码', res.farmUserPro.shareCode);
                            this.shareCodeSelf.push(res.farmUserPro.shareCode);
                        }
                        else {
                            this.o2s(res, '初始化失败');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.api('initForTurntableFarm', { "version": 4, "channel": 1 }, false)];
                    case 3:
                        res = _h.sent();
                        _i = 0, _a = res.turntableBrowserAds;
                        _h.label = 4;
                    case 4:
                        if (!(_i < _a.length)) return [3 /*break*/, 9];
                        t = _a[_i];
                        if (!!t.status) return [3 /*break*/, 8];
                        console.log(t.main);
                        return [4 /*yield*/, this.api('browserForTurntableFarm', { "type": 1, "adId": t.adId, "version": 4, "channel": 1 }, false)];
                    case 5:
                        _h.sent();
                        return [4 /*yield*/, this.wait(t.browserTimes * 1000 || 1000)];
                    case 6:
                        _h.sent();
                        return [4 /*yield*/, this.api('browserForTurntableFarm', { "type": 2, "adId": t.adId, "version": 4, "channel": 1 }, false)];
                    case 7:
                        data = _h.sent();
                        data.code === '0' && console.log('抽奖次数', data.totalTimes);
                        _h.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 4];
                    case 9: return [4 /*yield*/, this.api('initForTurntableFarm', { "version": 4, "channel": 1 }, false)];
                    case 10:
                        res = _h.sent();
                        if (!res.timingGotStatus && Date.now() > (0, date_fns_1.getTime)((0, date_fns_1.addHours)(new Date(res.timingLastSysTime), 4))) {
                            // data = await this.api('timingAwardForTurntableFarm', {"version": 4, "channel": 1})
                            // o2s(data, 'timingAwardForTurntableFarm')
                        }
                        _h.label = 11;
                    case 11:
                        if (!(res.remainLotteryTimes > 0)) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.api('lotteryForTurntableFarm', { "type": 1, "version": 4, "channel": 1 }, false)];
                    case 12:
                        data = _h.sent();
                        console.log('抽奖结果', data.type);
                        return [4 /*yield*/, this.wait(3000)];
                    case 13:
                        _h.sent();
                        _h.label = 14;
                    case 14:
                        --res.remainLotteryTimes;
                        return [3 /*break*/, 11];
                    case 15:
                        // 任务列表
                        this.h5stTool = new h5st_1.H5ST('fcb5a', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 16:
                        _h.sent();
                        return [4 /*yield*/, this.api('taskInitForFarm', { "version": 18, "channel": 1, "babelChannel": "120" }, true)];
                    case 17:
                        res = _h.sent();
                        this.h5stTool = new h5st_1.H5ST('53f09', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 18:
                        _h.sent();
                        if (!!res.gotBrowseTaskAdInit.f) return [3 /*break*/, 24];
                        _b = 0, _c = res.gotBrowseTaskAdInit.userBrowseTaskAds;
                        _h.label = 19;
                    case 19:
                        if (!(_b < _c.length)) return [3 /*break*/, 24];
                        t = _c[_b];
                        if (!(t.hadFinishedTimes !== t.limit)) return [3 /*break*/, 23];
                        console.log(t.mainTitle);
                        return [4 /*yield*/, this.api('browseAdTaskForFarm', { "advertId": t.advertId, "type": 0, "version": 18, "channel": 1, "babelChannel": "120" }, true)];
                    case 20:
                        data = _h.sent();
                        data.code === '0' && console.log('任务完成');
                        return [4 /*yield*/, this.wait(t.time * 1000 || 2000)];
                    case 21:
                        _h.sent();
                        return [4 /*yield*/, this.api('browseAdTaskForFarm', { "advertId": t.advertId, "type": 1, "version": 18, "channel": 1, "babelChannel": "120" }, true)];
                    case 22:
                        data = _h.sent();
                        data.code === '0' && console.log('领奖成功💧', data.amount);
                        _h.label = 23;
                    case 23:
                        _b++;
                        return [3 /*break*/, 19];
                    case 24:
                        // 签到页面
                        this.h5stTool = new h5st_1.H5ST('08dc3', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 25:
                        _h.sent();
                        return [4 /*yield*/, this.api('clockInInitForFarm', { "timestamp": Date.now(), "version": 18, "channel": 1, "babelChannel": "120" }, true)];
                    case 26:
                        res = _h.sent();
                        this.h5stTool = new h5st_1.H5ST('4a0b4', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 27:
                        _h.sent();
                        _d = 0, _e = res.themes || [];
                        _h.label = 28;
                    case 28:
                        if (!(_d < _e.length)) return [3 /*break*/, 33];
                        t = _e[_d];
                        if (!!t.hadGot) return [3 /*break*/, 32];
                        console.log(t.name);
                        return [4 /*yield*/, this.api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 1, "version": 18, "channel": 1, "babelChannel": "120" }, true)];
                    case 29:
                        _h.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 30:
                        _h.sent();
                        return [4 /*yield*/, this.api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 2, "version": 18, "channel": 1, "babelChannel": "120" }, true)];
                    case 31:
                        data = _h.sent();
                        data.code === '0' && console.log('关注成功💧', data.amount);
                        _h.label = 32;
                    case 32:
                        _d++;
                        return [3 /*break*/, 28];
                    case 33: return [4 /*yield*/, this.api('friendListInitForFarm', { "lastId": null, "version": 18, "channel": 1, "babelChannel": "120" }, false)];
                    case 34:
                        // 删除好友
                        res = _h.sent();
                        this.h5stTool = new h5st_1.H5ST('eaf91', this.user.UserAgent, this.fp);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 35:
                        _h.sent();
                        _f = 0, _g = res.friends;
                        _h.label = 36;
                    case 36:
                        if (!(_f < _g.length)) return [3 /*break*/, 40];
                        t = _g[_f];
                        return [4 /*yield*/, this.api('deleteFriendForFarm', { "shareCode": t.shareCode, "version": 18, "channel": 1, "babelChannel": "120" }, true)];
                    case 37:
                        data = _h.sent();
                        if (data.code === '0') {
                            console.log("\u5220\u9664\u597D\u53CB ".concat(t.nickName, " \u6210\u529F"));
                        }
                        else {
                            console.log("\u5220\u9664\u5931\u8D25 ".concat(t.nickName, " \u5931\u8D25"), data);
                            return [3 /*break*/, 40];
                        }
                        return [4 /*yield*/, this.wait(2000)];
                    case 38:
                        _h.sent();
                        _h.label = 39;
                    case 39:
                        _f++;
                        return [3 /*break*/, 36];
                    case 40: return [3 /*break*/, 42];
                    case 41:
                        e_2 = _h.sent();
                        console.log('error', e_2.message);
                        return [3 /*break*/, 42];
                    case 42: return [2 /*return*/];
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
                        return [4 /*yield*/, this.api('initForFarm', { "shareCode": "".concat(code, "-3"), "sid": "", "un_area": "", "version": 18, "channel": 1, "babelChannel": 0 }, true)];
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
