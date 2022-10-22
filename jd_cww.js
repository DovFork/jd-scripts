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
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        try {
                            this.fp = process.env.FP_D7BFE;
                            if (!this.fp) {
                                console.log('FP_D7BFE undefined');
                                process.exit(0);
                            }
                        }
                        catch (e) {
                            console.log(e.message);
                        }
                        return [4 /*yield*/, this.run(this)];
                    case 1:
                        _a.sent();
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
                        return [4 /*yield*/, new JDJRValidator.JDJRValidator().start()];
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
                        return [4 /*yield*/, new JDJRValidator.JDJRValidator().start()];
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
            var res, data, lastFeedTime, _i, _a, t, _b, _c, followShops, _d, _e, followChannelList, _f, _g, scanMarketList, e_1;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        _h.trys.push([0, 51, , 52]);
                        this.user = user;
                        this.user.UserAgent = "jdapp;iPhone;11.3.0;;;M/5.0;appBuild/167874;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;");
                        res = void 0, data = void 0;
                        this.h5stTool = new h5st_pro_1.H5ST('2bba1', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _h.sent();
                        return [4 /*yield*/, this.api('petEnterRoom', { "invitePin": "", "reqSource": "h5" })];
                    case 2:
                        res = _h.sent();
                        this.o2s(res, 'petEnterRoom');
                        lastFeedTime = res.data.lastFeedTime;
                        if (!((0, date_fns_1.differenceInHours)(Date.now(), lastFeedTime) > 3)) return [3 /*break*/, 6];
                        this.h5stTool = new h5st_pro_1.H5ST('15dc2', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 3:
                        _h.sent();
                        return [4 /*yield*/, this.beforeApi('feed', { "feedCount": "10", "reqSource": "h5" })];
                    case 4:
                        res = _h.sent();
                        console.log(res.errorCode);
                        return [4 /*yield*/, this.wait(3000)];
                    case 5:
                        _h.sent();
                        _h.label = 6;
                    case 6:
                        this.h5stTool = new h5st_pro_1.H5ST('922a5', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 7:
                        _h.sent();
                        return [4 /*yield*/, this.api('petGetPetTaskConfig', { "reqSource": "h5" })];
                    case 8:
                        res = _h.sent();
                        this.o2s(res, 'petGetPetTaskConfig');
                        return [4 /*yield*/, this.wait(2000)];
                    case 9:
                        _h.sent();
                        _i = 0, _a = res.datas;
                        _h.label = 10;
                    case 10:
                        if (!(_i < _a.length)) return [3 /*break*/, 49];
                        t = _a[_i];
                        if (!t.followShops) return [3 /*break*/, 23];
                        this.h5stTool = new h5st_pro_1.H5ST('79b06', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 11:
                        _h.sent();
                        return [4 /*yield*/, this.beforeApi('clickIcon', { "code": "1624363341529274068136", "iconCode": "follow_shop", "reqSource": "h5" })];
                    case 12:
                        data = _h.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('d91e0', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 13:
                        _h.sent();
                        return [4 /*yield*/, this.beforeApi('clickIconNew', { "iconCode": "follow_shop", "reqSource": "h5" })];
                    case 14:
                        data = _h.sent();
                        _b = 0, _c = t.followShops;
                        _h.label = 15;
                    case 15:
                        if (!(_b < _c.length)) return [3 /*break*/, 23];
                        followShops = _c[_b];
                        if (followShops.status)
                            return [3 /*break*/, 22];
                        console.log(t.taskName, followShops.name);
                        this.h5stTool = new h5st_pro_1.H5ST('79b06', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 16:
                        _h.sent();
                        return [4 /*yield*/, this.beforeApi('clickIcon', { "code": "1624363341529274068136", "iconCode": "follow_shop", "linkAddr": followShops.shopId.toString(), "reqSource": "h5" })];
                    case 17:
                        data = _h.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('d91e0', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 18:
                        _h.sent();
                        return [4 /*yield*/, this.beforeApi('clickIconNew', { "iconCode": "follow_shop", "linkAddr": followShops.shopId.toString(), "reqSource": "h5" })];
                    case 19:
                        data = _h.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('30717', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 20:
                        _h.sent();
                        return [4 /*yield*/, this.api('followShopColor', { 'shopId': followShops.shopId.toString(), 'reqSource': 'h5' })];
                    case 21:
                        data = _h.sent();
                        console.log('followShopColor', data.errorCode);
                        _h.label = 22;
                    case 22:
                        _b++;
                        return [3 /*break*/, 15];
                    case 23:
                        if (!t.followChannelList) return [3 /*break*/, 38];
                        this.h5stTool = new h5st_pro_1.H5ST('d91e0', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 24:
                        _h.sent();
                        return [4 /*yield*/, this.beforeApi('clickIconNew', { "iconCode": "follow_channel", "reqSource": "h5" })];
                    case 25:
                        data = _h.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('5f8cb', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 26:
                        _h.sent();
                        return [4 /*yield*/, this.api('getFollowChannels', { "reqSource": "h5" })];
                    case 27:
                        data = _h.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 28:
                        _h.sent();
                        _d = 0, _e = t.followChannelList;
                        _h.label = 29;
                    case 29:
                        if (!(_d < _e.length)) return [3 /*break*/, 38];
                        followChannelList = _e[_d];
                        if (followChannelList.status)
                            return [3 /*break*/, 37];
                        console.log(t.taskName, followChannelList.channelName);
                        this.h5stTool = new h5st_pro_1.H5ST('79b06', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 30:
                        _h.sent();
                        return [4 /*yield*/, this.beforeApi('clickIcon', { "code": "1624363341529274068136", "iconCode": "follow_channel", "linkAddr": followChannelList.channelId, "reqSource": "h5" })];
                    case 31:
                        data = _h.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('d91e0', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 32:
                        _h.sent();
                        return [4 /*yield*/, this.beforeApi('clickIconNew', { "code": "1624363341529274068136", "iconCode": "follow_channel", "linkAddr": followChannelList.channelId, "reqSource": "h5" })];
                    case 33:
                        data = _h.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('30717', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 34:
                        _h.sent();
                        return [4 /*yield*/, this.api('scan', { 'channelId': followChannelList.channelId, 'taskType': 'FollowChannel', 'sid': '66594924', 'reqSource': 'h5' })];
                    case 35:
                        data = _h.sent();
                        console.log('scan', data.errorCode);
                        return [4 /*yield*/, this.wait(5000)];
                    case 36:
                        _h.sent();
                        _h.label = 37;
                    case 37:
                        _d++;
                        return [3 /*break*/, 29];
                    case 38:
                        if (!t.scanMarketList) return [3 /*break*/, 48];
                        _f = 0, _g = t.scanMarketList;
                        _h.label = 39;
                    case 39:
                        if (!(_f < _g.length)) return [3 /*break*/, 48];
                        scanMarketList = _g[_f];
                        if (scanMarketList.status)
                            return [3 /*break*/, 47];
                        console.log(t.taskName, scanMarketList.marketName);
                        this.h5stTool = new h5st_pro_1.H5ST('79b06', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 40:
                        _h.sent();
                        return [4 /*yield*/, this.beforeApi('clickIcon', { "code": "1624363341529274068136", "iconCode": "scan_market", "linkAddr": scanMarketList.marketLinkH5, "reqSource": "h5" })];
                    case 41:
                        data = _h.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('d91e0', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 42:
                        _h.sent();
                        return [4 /*yield*/, this.beforeApi('clickIconNew', { "iconCode": "scan_market", "linkAddr": scanMarketList.marketLinkH5, "reqSource": "h5" })];
                    case 43:
                        data = _h.sent();
                        this.h5stTool = new h5st_pro_1.H5ST('30717', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 44:
                        _h.sent();
                        return [4 /*yield*/, this.api('scan', { "marketLink": scanMarketList.marketLinkH5, "marketId": scanMarketList.marketLinkH5, "taskType": "ScanMarket", "sid": "66594924", "reqSource": "h5" })];
                    case 45:
                        data = _h.sent();
                        console.log('scanMarketList', data.errorCode);
                        return [4 /*yield*/, this.wait(5000)];
                    case 46:
                        _h.sent();
                        _h.label = 47;
                    case 47:
                        _f++;
                        return [3 /*break*/, 39];
                    case 48:
                        _i++;
                        return [3 /*break*/, 10];
                    case 49: return [4 /*yield*/, this.wait(5000)];
                    case 50:
                        _h.sent();
                        return [3 /*break*/, 52];
                    case 51:
                        e_1 = _h.sent();
                        console.log(e_1.message);
                        return [3 /*break*/, 52];
                    case 52: return [2 /*return*/];
                }
            });
        });
    };
    return Cww;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Cww().init().then();
