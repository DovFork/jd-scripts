"use strict";
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.__esModule = true;
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var h5st_pro_1 = require("./utils/h5st_pro");
var JDJRValidator = require("./utils/validate_single");
var date_fns_1 = require("date-fns");
var Cww = /** @class */ (function (_super) {
    __extends(Cww, _super);
    function Cww() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        _this.fp = undefined;
        return _this;
    }
    Cww.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        _b = process.env.FP_D7BFE;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getFp()];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        _a.fp = _b;
                        return [4 /*yield*/, this.run(this)];
                    case 3:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Cww.prototype.beforeApi = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st, params, _i, _a, key, beforeApiRes, validate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        timestamp = Date.now().toString();
                        return [4 /*yield*/, this.h5stTool.__genH5st({
                                'appid': 'jdchoujiang_h5',
                                'body': JSON.stringify(body),
                                'client': 'iOS',
                                'clientVersion': '11.3.0',
                                'functionId': fn,
                                't': timestamp.toString()
                            })];
                    case 1:
                        h5st = _b.sent();
                        params = '';
                        for (_i = 0, _a = Object.keys(body); _i < _a.length; _i++) {
                            key = _a[_i];
                            params += '&' + key + '=' + body[key];
                        }
                        return [4 /*yield*/, this.get("https://api.m.jd.com/api?client=iOS&clientVersion=11.3.0&appid=jdchoujiang_h5&t=".concat(timestamp, "&functionId=").concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&h5st=").concat(h5st).concat(params), {
                                'Host': 'api.m.jd.com',
                                'Content-Type': 'application/json',
                                'Origin': 'https://h5.m.jd.com',
                                'Cookie': this.user.cookie,
                                'User-Agent': this.user.UserAgent,
                                'Referer': 'https://h5.m.jd.com/'
                            })];
                    case 2:
                        beforeApiRes = _b.sent();
                        if (!JSON.stringify(beforeApiRes).includes("请进行验证")) return [3 /*break*/, 5];
                        return [4 /*yield*/, new JDJRValidator.JDJRValidator().run()];
                    case 3:
                        validate = (_b.sent()).validate;
                        console.log('validate', validate);
                        return [4 /*yield*/, this.beforeApi(fn, __assign(__assign({}, body), { validate: validate }))];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: return [2 /*return*/, beforeApiRes];
                }
            });
        });
    };
    Cww.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st, url, res, validate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now().toString();
                        return [4 /*yield*/, this.h5stTool.__genH5st({
                                'appid': 'jdchoujiang_h5',
                                'body': JSON.stringify(body),
                                'client': '',
                                'clientVersion': '',
                                'functionId': fn,
                                't': timestamp.toString()
                            })];
                    case 1:
                        h5st = _a.sent();
                        url = "https://api.m.jd.com/api?client=&clientVersion=&appid=jdchoujiang_h5&t=".concat(timestamp, "&functionId=").concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&h5st=").concat(h5st);
                        return [4 /*yield*/, this.post(url, body, {
                                'Host': 'api.m.jd.com',
                                'Content-Type': 'application/json',
                                'Origin': 'https://h5.m.jd.com',
                                'Cookie': this.user.cookie,
                                'User-Agent': this.user.UserAgent,
                                'Referer': 'https://h5.m.jd.com/'
                            })];
                    case 2:
                        res = _a.sent();
                        if (!JSON.stringify(res).includes("请进行验证")) return [3 /*break*/, 5];
                        return [4 /*yield*/, new JDJRValidator.JDJRValidator().run()];
                    case 3:
                        validate = (_a.sent()).validate;
                        console.log('validate', validate);
                        return [4 /*yield*/, this.api(fn, __assign(__assign({}, body), { validate: validate }))];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [2 /*return*/, res];
                }
            });
        });
    };
    Cww.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, petFood, lastFeedTime, feedCount, _i, _a, t, _b, _c, raceUser, winCoin, _d, _e, t, _f, _g, followShops, _h, _j, followChannelList, _k, _l, scanMarketList, e_1;
            return __generator(this, function (_m) {
                switch (_m.label) {
                    case 0:
                        _m.trys.push([0, 66, , 67]);
                        this.user = user;
                        this.user.UserAgent = "jdapp;iPhone;11.3.0;;;M/5.0;appBuild/167874;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;");
                        res = void 0, data = void 0;
                        this.h5stTool = new h5st_pro_1.H5ST('2bba1', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _m.sent();
                        return [4 /*yield*/, this.api('petEnterRoom', { "invitePin": "", "reqSource": "h5" })];
                    case 2:
                        res = _m.sent();
                        this.o2s(res, 'petEnterRoom');
                        petFood = res.data.petFood;
                        lastFeedTime = res.data.lastFeedTime;
                        console.log('狗粮', petFood);
                        console.log('lastFeedTime', (0, date_fns_1.format)(lastFeedTime, "yyyy-MM-dd HH:mm:ss"));
                        feedCount = 0;
                        for (_i = 0, _a = [10, 20, 40, 80]; _i < _a.length; _i++) {
                            t = _a[_i];
                            if (petFood < t) {
                                break;
                            }
                            else {
                                feedCount = t;
                            }
                        }
                        if (!((0, date_fns_1.differenceInMinutes)(Date.now(), lastFeedTime) > 180 && feedCount)) return [3 /*break*/, 6];
                        this.h5stTool = new h5st_pro_1.H5ST('15dc2', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 3:
                        _m.sent();
                        return [4 /*yield*/, this.beforeApi('feed', { "feedCount": feedCount, "reqSource": "h5" })];
                    case 4:
                        res = _m.sent();
                        console.log(res.errorCode);
                        return [4 /*yield*/, this.wait(3000)];
                    case 5:
                        _m.sent();
                        _m.label = 6;
                    case 6: return [4 /*yield*/, this.beforeApi('combatDetail', { "help": false, "reqSource": "h5" })];
                    case 7:
                        res = _m.sent();
                        this.o2s(res, 'combatDetail');
                        if (!(res.data.petRaceResult === 'participate')) return [3 /*break*/, 8];
                        console.log('比赛中');
                        for (_b = 0, _c = res.data.raceUsers; _b < _c.length; _b++) {
                            raceUser = _c[_b];
                            raceUser.myself
                                ? console.log(raceUser.nickName, raceUser.distance)
                                : console.log('对手', raceUser.distance);
                        }
                        return [3 /*break*/, 18];
                    case 8:
                        if (!(res.data.petRaceResult === 'not_participate')) return [3 /*break*/, 15];
                        console.log('开始匹配');
                        this.h5stTool = new h5st_pro_1.H5ST('79b06', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 9:
                        _m.sent();
                        return [4 /*yield*/, this.beforeApi('clickIcon', { "code": "1624363341529274068136", "iconCode": "race_match", "reqSource": "h5" })];
                    case 10:
                        data = _m.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('d91e0', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 11:
                        _m.sent();
                        return [4 /*yield*/, this.beforeApi('clickIconNew', { "iconCode": "race_match", "reqSource": "h5" })];
                    case 12:
                        data = _m.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('6f192', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 13:
                        _m.sent();
                        return [4 /*yield*/, this.beforeApi('combatMatch', { "teamLevel": "2", "reqSource": "h5" })];
                    case 14:
                        data = _m.sent();
                        this.o2s(data, 'combatMatch');
                        return [3 /*break*/, 18];
                    case 15:
                        if (!(res.data.petRaceResult === 'unreceive')) return [3 /*break*/, 18];
                        winCoin = res.data.winCoin;
                        this.h5stTool = new h5st_pro_1.H5ST('04889', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 16:
                        _m.sent();
                        return [4 /*yield*/, this.beforeApi('combatReceive', { "reqSource": "h5" })];
                    case 17:
                        data = _m.sent();
                        console.log('赛跑获胜', winCoin);
                        _m.label = 18;
                    case 18:
                        this.h5stTool = new h5st_pro_1.H5ST('922a5', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 19:
                        _m.sent();
                        return [4 /*yield*/, this.api('petGetPetTaskConfig', { "reqSource": "h5" })];
                    case 20:
                        res = _m.sent();
                        this.o2s(res, 'petGetPetTaskConfig');
                        return [4 /*yield*/, this.wait(2000)];
                    case 21:
                        _m.sent();
                        _d = 0, _e = res.datas;
                        _m.label = 22;
                    case 22:
                        if (!(_d < _e.length)) return [3 /*break*/, 65];
                        t = _e[_d];
                        if (!t.followShops) return [3 /*break*/, 35];
                        this.h5stTool = new h5st_pro_1.H5ST('79b06', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 23:
                        _m.sent();
                        return [4 /*yield*/, this.beforeApi('clickIcon', { "code": "1624363341529274068136", "iconCode": "follow_shop", "reqSource": "h5" })];
                    case 24:
                        data = _m.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('d91e0', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 25:
                        _m.sent();
                        return [4 /*yield*/, this.beforeApi('clickIconNew', { "iconCode": "follow_shop", "reqSource": "h5" })];
                    case 26:
                        data = _m.sent();
                        _f = 0, _g = t.followShops;
                        _m.label = 27;
                    case 27:
                        if (!(_f < _g.length)) return [3 /*break*/, 35];
                        followShops = _g[_f];
                        if (followShops.status)
                            return [3 /*break*/, 34];
                        console.log(t.taskName, followShops.name);
                        this.h5stTool = new h5st_pro_1.H5ST('79b06', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 28:
                        _m.sent();
                        return [4 /*yield*/, this.beforeApi('clickIcon', { "code": "1624363341529274068136", "iconCode": "follow_shop", "linkAddr": followShops.shopId.toString(), "reqSource": "h5" })];
                    case 29:
                        data = _m.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('d91e0', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 30:
                        _m.sent();
                        return [4 /*yield*/, this.beforeApi('clickIconNew', { "iconCode": "follow_shop", "linkAddr": followShops.shopId.toString(), "reqSource": "h5" })];
                    case 31:
                        data = _m.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('30717', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 32:
                        _m.sent();
                        return [4 /*yield*/, this.api('followShopColor', { 'shopId': followShops.shopId.toString(), 'reqSource': 'h5' })];
                    case 33:
                        data = _m.sent();
                        console.log('followShopColor', data.errorCode);
                        _m.label = 34;
                    case 34:
                        _f++;
                        return [3 /*break*/, 27];
                    case 35:
                        if (!t.followChannelList) return [3 /*break*/, 50];
                        this.h5stTool = new h5st_pro_1.H5ST('d91e0', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 36:
                        _m.sent();
                        return [4 /*yield*/, this.beforeApi('clickIconNew', { "iconCode": "follow_channel", "reqSource": "h5" })];
                    case 37:
                        data = _m.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('5f8cb', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 38:
                        _m.sent();
                        return [4 /*yield*/, this.api('getFollowChannels', { "reqSource": "h5" })];
                    case 39:
                        data = _m.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 40:
                        _m.sent();
                        _h = 0, _j = t.followChannelList;
                        _m.label = 41;
                    case 41:
                        if (!(_h < _j.length)) return [3 /*break*/, 50];
                        followChannelList = _j[_h];
                        if (followChannelList.status)
                            return [3 /*break*/, 49];
                        console.log(t.taskName, followChannelList.channelName);
                        this.h5stTool = new h5st_pro_1.H5ST('79b06', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 42:
                        _m.sent();
                        return [4 /*yield*/, this.beforeApi('clickIcon', { "code": "1624363341529274068136", "iconCode": "follow_channel", "linkAddr": followChannelList.channelId, "reqSource": "h5" })];
                    case 43:
                        data = _m.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('d91e0', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 44:
                        _m.sent();
                        return [4 /*yield*/, this.beforeApi('clickIconNew', { "code": "1624363341529274068136", "iconCode": "follow_channel", "linkAddr": followChannelList.channelId, "reqSource": "h5" })];
                    case 45:
                        data = _m.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('30717', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 46:
                        _m.sent();
                        return [4 /*yield*/, this.api('scan', { 'channelId': followChannelList.channelId, 'taskType': 'FollowChannel', 'sid': '66594924', 'reqSource': 'h5' })];
                    case 47:
                        data = _m.sent();
                        console.log('scan', data.errorCode);
                        return [4 /*yield*/, this.wait(5000)];
                    case 48:
                        _m.sent();
                        _m.label = 49;
                    case 49:
                        _h++;
                        return [3 /*break*/, 41];
                    case 50:
                        if (!t.scanMarketList) return [3 /*break*/, 60];
                        _k = 0, _l = t.scanMarketList;
                        _m.label = 51;
                    case 51:
                        if (!(_k < _l.length)) return [3 /*break*/, 60];
                        scanMarketList = _l[_k];
                        if (scanMarketList.status)
                            return [3 /*break*/, 59];
                        console.log(t.taskName, scanMarketList.marketName);
                        this.h5stTool = new h5st_pro_1.H5ST('79b06', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 52:
                        _m.sent();
                        return [4 /*yield*/, this.beforeApi('clickIcon', { "code": "1624363341529274068136", "iconCode": "scan_market", "linkAddr": scanMarketList.marketLinkH5, "reqSource": "h5" })];
                    case 53:
                        data = _m.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('d91e0', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 54:
                        _m.sent();
                        return [4 /*yield*/, this.beforeApi('clickIconNew', { "iconCode": "scan_market", "linkAddr": scanMarketList.marketLinkH5, "reqSource": "h5" })];
                    case 55:
                        data = _m.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('30717', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 56:
                        _m.sent();
                        return [4 /*yield*/, this.api('scan', { "marketLink": scanMarketList.marketLinkH5, "marketId": scanMarketList.marketLinkH5, "taskType": "ScanMarket", "sid": "66594924", "reqSource": "h5" })];
                    case 57:
                        data = _m.sent();
                        console.log('scanMarketList', data.errorCode);
                        return [4 /*yield*/, this.wait(5000)];
                    case 58:
                        _m.sent();
                        _m.label = 59;
                    case 59:
                        _k++;
                        return [3 /*break*/, 51];
                    case 60:
                        if (!(t.receiveStatus === 'unreceive')) return [3 /*break*/, 64];
                        this.h5stTool = new h5st_pro_1.H5ST('6917d', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 61:
                        _m.sent();
                        return [4 /*yield*/, this.api('getFood', { "taskType": t.taskType, "reqSource": "h5" })];
                    case 62:
                        data = _m.sent();
                        this.o2s(data, '领取奖励');
                        console.log('领取奖励', t.taskName, data.data);
                        return [4 /*yield*/, this.wait(1000)];
                    case 63:
                        _m.sent();
                        _m.label = 64;
                    case 64:
                        _d++;
                        return [3 /*break*/, 22];
                    case 65: return [3 /*break*/, 67];
                    case 66:
                        e_1 = _m.sent();
                        console.log(e_1.message);
                        return [3 /*break*/, 67];
                    case 67: return [2 /*return*/];
                }
            });
        });
    };
    return Cww;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Cww().init().then();
