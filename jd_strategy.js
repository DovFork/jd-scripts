"use strict";
/**
 * https://appliances-activity.jd.com/
 * export FP_F093B=""
 * cron: 0 20 * * *
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
var h5st_1 = require("./utils/h5st");
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var Jd_strategy = /** @class */ (function (_super) {
    __extends(Jd_strategy, _super);
    function Jd_strategy() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        return _this;
    }
    Jd_strategy.prototype.init = function () {
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
    Jd_strategy.prototype.api = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now();
                        h5st = this.h5stTool.__genH5st({
                            appid: 'reinforceints',
                            body: JSON.stringify(body),
                            functionId: 'strategy_vote_prod',
                            t: timestamp.toString()
                        });
                        return [4 /*yield*/, this.post('https://api.m.jd.com/api', "appid=reinforceints&functionId=strategy_vote_prod&body=".concat(JSON.stringify(body), "&t=").concat(timestamp, "&h5st=").concat(h5st, "&loginType=2"), {
                                'Host': 'api.m.jd.com',
                                'Origin': 'https://appliances-activity.jd.com',
                                'User-Agent': 'jdapp;',
                                'Referer': 'https://appliances-activity.jd.com/',
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Cookie': this.cookie
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_strategy.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, gg, _i, _a, t, i, _b, _c, tp, e_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.cookie = user.cookie;
                        this.h5stTool = new h5st_1.H5ST("f093b", user.UserAgent, process.env.FP_F093B || "7063407705917609");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _d.sent();
                        gg = false;
                        return [4 /*yield*/, this.api({ "apiMapping": "/api/index/indexInfo" })];
                    case 2:
                        res = _d.sent();
                        _i = 0, _a = res.data.track;
                        _d.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 16];
                        t = _a[_i];
                        _d.label = 4;
                    case 4:
                        _d.trys.push([4, 14, , 15]);
                        if (!(!t.jbeanSuccess && new Date().getHours() > 19)) return [3 /*break*/, 11];
                        console.log('type', t.type);
                        i = 1;
                        _b = 0, _c = t.skuList;
                        _d.label = 5;
                    case 5:
                        if (!(_b < _c.length)) return [3 /*break*/, 8];
                        tp = _c[_b];
                        return [4 /*yield*/, this.api({ "type": t.type, "like": 1, "skuId": tp.skuId, "index": i, "apiMapping": "/api/index/vote" })];
                    case 6:
                        data = _d.sent();
                        console.log('投票', data.msg, data.data);
                        if (data.msg.includes('火爆')) {
                            gg = true;
                            return [3 /*break*/, 8];
                        }
                        i++;
                        _d.label = 7;
                    case 7:
                        _b++;
                        return [3 /*break*/, 5];
                    case 8:
                        if (!!gg) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.api({ "type": t.type, "apiMapping": "/api/lottery/lottery" })];
                    case 9:
                        data = _d.sent();
                        console.log('抽奖', data.msg, data.data);
                        _d.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        console.log("type ".concat(t.type, " \u5DF2\u5B8C\u6210"));
                        _d.label = 12;
                    case 12: return [4 /*yield*/, this.api({ "type": t.type, "apiMapping": "/api/supportTask/getShareId" })];
                    case 13:
                        data = _d.sent();
                        console.log("type ".concat(t.type, " \u52A9\u529B\u7801"), data.data);
                        this.shareCodeSelf.push({ type: t.type, code: data.data });
                        return [3 /*break*/, 15];
                    case 14:
                        e_1 = _d.sent();
                        console.log('error', e_1);
                        return [3 /*break*/, 15];
                    case 15:
                        _i++;
                        return [3 /*break*/, 3];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    Jd_strategy.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, shareCode, shareCodeHW, _i, users_1, user, _a, shareCode_1, code, e_2, _b, users_2, user, _c, _d, t, e_3;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this.o2s(this.shareCodeSelf, '内部助力');
                        shareCode = [], shareCodeHW = [];
                        _i = 0, users_1 = users;
                        _e.label = 1;
                    case 1:
                        if (!(_i < users_1.length)) return [3 /*break*/, 11];
                        user = users_1[_i];
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 9, , 10]);
                        this.cookie = user.cookie;
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getshareCodeHW('strategy')];
                    case 3:
                        shareCodeHW = _e.sent();
                        _e.label = 4;
                    case 4:
                        shareCode = __spreadArray(__spreadArray([], this.shareCodeSelf, true), shareCodeHW, true);
                        _a = 0, shareCode_1 = shareCode;
                        _e.label = 5;
                    case 5:
                        if (!(_a < shareCode_1.length)) return [3 /*break*/, 8];
                        code = shareCode_1[_a];
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code.code));
                        return [4 /*yield*/, this.api({ "shareId": code.code, "type": code.type, "apiMapping": "/api/supportTask/doSupport" })];
                    case 6:
                        data = _e.sent();
                        console.log(data.msg, data.data.status);
                        _e.label = 7;
                    case 7:
                        _a++;
                        return [3 /*break*/, 5];
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        e_2 = _e.sent();
                        console.log('error', e_2);
                        return [3 /*break*/, 10];
                    case 10:
                        _i++;
                        return [3 /*break*/, 1];
                    case 11:
                        _b = 0, users_2 = users;
                        _e.label = 12;
                    case 12:
                        if (!(_b < users_2.length)) return [3 /*break*/, 21];
                        user = users_2[_b];
                        _e.label = 13;
                    case 13:
                        _e.trys.push([13, 19, , 20]);
                        this.cookie = user.cookie;
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName));
                        return [4 /*yield*/, this.api({ "apiMapping": "/api/index/indexInfo" })];
                    case 14:
                        res = _e.sent();
                        _c = 0, _d = res.data.track;
                        _e.label = 15;
                    case 15:
                        if (!(_c < _d.length)) return [3 /*break*/, 18];
                        t = _d[_c];
                        return [4 /*yield*/, this.api({ "type": t.type, "apiMapping": "/api/lottery/lottery" })];
                    case 16:
                        data = _e.sent();
                        console.log('抽奖', data.msg, data.data);
                        _e.label = 17;
                    case 17:
                        _c++;
                        return [3 /*break*/, 15];
                    case 18: return [3 /*break*/, 20];
                    case 19:
                        e_3 = _e.sent();
                        console.log('error', e_3);
                        return [3 /*break*/, 20];
                    case 20:
                        _b++;
                        return [3 /*break*/, 12];
                    case 21: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_strategy;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_strategy().init().then();
