"use strict";
/**
 * cron: 30 * * * *
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
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var city_log_1 = require("./utils/city_log");
var Jd_cash_signin = /** @class */ (function (_super) {
    __extends(Jd_cash_signin, _super);
    function Jd_cash_signin() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        return _this;
    }
    Jd_cash_signin.prototype.init = function () {
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
    Jd_cash_signin.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post("https://api.m.jd.com/client.action", "functionId=".concat(fn, "&appid=signed_wh5&body=").concat(JSON.stringify(body), "&timestamp=").concat(Date.now(), "&client=iOS&clientVersion=11.3.6"), {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://bunearth.m.jd.com',
                            'Referer': 'https://bunearth.m.jd.com/',
                            'Cookie': this.user.cookie,
                            'user-agent': this.user.UserAgent
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_cash_signin.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, inviteId, _i, _a, t, i, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.user = user;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 14, , 15]);
                        return [4 /*yield*/, this.api('city_getHomeDatav1', { "lbsCity": "", "realLbsCity": "", "inviteId": "", "headImg": "", "userName": "", "taskChannel": "1", "location": "", "safeStr": "" })];
                    case 2:
                        res = _b.sent();
                        inviteId = res.data.result.userActBaseInfo.inviteId;
                        console.log('助力码', inviteId);
                        this.shareCodeSelf.push(inviteId);
                        _i = 0, _a = res.data.result.mainInfos || [];
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 7];
                        t = _a[_i];
                        if (!(t.remaingAssistNum === 0 && t.status === '1')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.api('city_receiveCash', { "cashType": 1, "roundNum": t.roundNum })];
                    case 4:
                        data = _b.sent();
                        console.log('领取', parseFloat(data.data.result.currentTimeCash));
                        console.log('合计', parseFloat(data.data.result.totalCash));
                        return [4 /*yield*/, this.wait(2000)];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 3];
                    case 7: return [4 /*yield*/, this.api('city_getLotteryInfo', {})];
                    case 8:
                        res = _b.sent();
                        console.log('可抽奖', res.data.result.lotteryNum);
                        i = 0;
                        _b.label = 9;
                    case 9:
                        if (!(i < res.data.result.lotteryNum)) return [3 /*break*/, 13];
                        return [4 /*yield*/, this.api('city_lotteryAward', {})];
                    case 10:
                        data = _b.sent();
                        try {
                            console.log('抽奖', parseFloat(data.data.result.hongbao.value));
                        }
                        catch (e) {
                            console.log(e.message);
                            console.log(data.data.result.hongbao);
                        }
                        return [4 /*yield*/, this.wait(2000)];
                    case 11:
                        _b.sent();
                        _b.label = 12;
                    case 12:
                        i++;
                        return [3 /*break*/, 9];
                    case 13: return [3 /*break*/, 15];
                    case 14:
                        e_1 = _b.sent();
                        console.log(e_1.message);
                        return [3 /*break*/, 15];
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    Jd_cash_signin.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var res, shareCodeHW, _i, users_1, user, shareCode, _a, shareCode_1, code, log, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        shareCodeHW = [];
                        _i = 0, users_1 = users;
                        _b.label = 1;
                    case 1:
                        if (!(_i < users_1.length)) return [3 /*break*/, 13];
                        user = users_1[_i];
                        this.user = user;
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 11, , 12]);
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('city')];
                    case 3:
                        shareCodeHW = _b.sent();
                        _b.label = 4;
                    case 4:
                        shareCode = [];
                        if (user.index === 0) {
                            shareCode = Array.from(new Set(__spreadArray(__spreadArray([], shareCodeHW, true), this.shareCodeSelf, true)));
                        }
                        else {
                            shareCode = Array.from(new Set(__spreadArray(__spreadArray([], this.shareCodeSelf, true), shareCodeHW, true)));
                        }
                        _a = 0, shareCode_1 = shareCode;
                        _b.label = 5;
                    case 5:
                        if (!(_a < shareCode_1.length)) return [3 /*break*/, 10];
                        code = shareCode_1[_a];
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code));
                        return [4 /*yield*/, (0, city_log_1.h)()];
                    case 6:
                        log = _b.sent();
                        return [4 /*yield*/, this.api('city_getHomeDatav1', {
                                "lbsCity": "",
                                "realLbsCity": "",
                                "inviteId": code,
                                "headImg": "",
                                "userName": "",
                                "taskChannel": "1",
                                "location": "",
                                "safeStr": "{\"log\":\"".concat(log.log, "\",\"sceneid\":\"CHFhPageh5\",\"random\":\"").concat(log.random, "\"}")
                            })];
                    case 7:
                        res = _b.sent();
                        return [4 /*yield*/, this.wait(3000)];
                    case 8:
                        _b.sent();
                        if (res.data.result.toasts) {
                            console.log(res.data.result.toasts[0]);
                            if (res.data.result.toasts[0].status === '3')
                                return [3 /*break*/, 10];
                        }
                        _b.label = 9;
                    case 9:
                        _a++;
                        return [3 /*break*/, 5];
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        e_2 = _b.sent();
                        console.log(e_2.message);
                        return [3 /*break*/, 12];
                    case 12:
                        _i++;
                        return [3 /*break*/, 1];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_cash_signin;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_cash_signin().init().then();
