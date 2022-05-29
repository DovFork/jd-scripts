"use strict";
/**
 * 小程序-领现金-1.5
 * cron: 15 7,18 * * *
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
var Jd_cash_wechat = /** @class */ (function (_super) {
    __extends(Jd_cash_wechat, _super);
    function Jd_cash_wechat() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        return _this;
    }
    Jd_cash_wechat.prototype.init = function () {
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
    Jd_cash_wechat.prototype.doSign = function () {
        return __awaiter(this, void 0, void 0, function () {
            var body, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cashDoSign()];
                    case 1:
                        body = _a.sent();
                        return [4 /*yield*/, this.post('https://api.m.jd.com/client.action?functionId=cash_sign', body, {
                                'Host': 'api.m.jd.com',
                                'Cookie': this.user.cookie,
                                'user-agent': this.user.UserAgent
                            })];
                    case 2:
                        data = _a.sent();
                        console.log(data.data.bizMsg);
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_cash_wechat.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wait(1000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.post('https://api.m.jd.com/client.action', new URLSearchParams({
                                'functionId': fn,
                                'body': JSON.stringify(body),
                                'appid': 'CashRewardMiniH5Env',
                                'loginType': '2',
                                'loginWQBiz': 'interact'
                            }), {
                                'Host': 'api.m.jd.com',
                                "Referer": "https://servicewechat.com/wx91d27dbf599dff74/621/page-frame.html",
                                'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac",
                                'Cookie': this.user.cookie
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_cash_wechat.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, _i, _a, t, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.user = user;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 13, , 14]);
                        return [4 /*yield*/, this.api('cash_mob_home', { "isLTRedPacket": "1" })];
                    case 2:
                        res = _b.sent();
                        if (!(res.data.result.signedStatus !== 1)) return [3 /*break*/, 4];
                        console.log('开始签到');
                        return [4 /*yield*/, this.doSign()];
                    case 3:
                        _b.sent();
                        console.log('签到成功');
                        _b.label = 4;
                    case 4:
                        _i = 0, _a = res.data.result.taskInfos;
                        _b.label = 5;
                    case 5:
                        if (!(_i < _a.length)) return [3 /*break*/, 9];
                        t = _a[_i];
                        if (!(t.doTimes !== t.times)) return [3 /*break*/, 8];
                        console.log(t.name);
                        return [4 /*yield*/, this.api('cash_doTask', { "type": t.type, "taskInfo": t.desc })];
                    case 6:
                        res = _b.sent();
                        console.log(res.data.result.totalMoney);
                        return [4 /*yield*/, this.api('cash_mob_home', { "isLTRedPacket": "1" })];
                    case 7:
                        res = _b.sent();
                        _b.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 5];
                    case 9:
                        if (!(res.data.result.limitTimeRedPacket.receiveStatus === '0')) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.api('cash_join_limited_redpacket', { "id": 5, "level": 3 })];
                    case 10:
                        res = _b.sent();
                        if (res.data.bizCode === 0) {
                            console.log('开启成功');
                        }
                        else {
                            console.log(res.data.bizMsg);
                        }
                        _b.label = 11;
                    case 11: return [4 /*yield*/, this.api('cash_mob_home', { "isLTRedPacket": "1" })];
                    case 12:
                        res = _b.sent();
                        if (res.data.result.inviteCode && res.data.result.shareDate) {
                            this.shareCodeSelf.push({
                                inviteCode: res.data.result.inviteCode,
                                shareDate: res.data.result.shareDate
                            });
                            console.log('助力码', res.data.result.inviteCode);
                        }
                        return [3 /*break*/, 14];
                    case 13:
                        e_1 = _b.sent();
                        console.log('error', e_1.message);
                        return [3 /*break*/, 14];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    Jd_cash_wechat.prototype.help = function (users) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function () {
            var shareCodeHW, shareCode, res, _i, users_1, user, _g, shareCode_1, code, e_2, _h, users_2, user, i, e_3;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        shareCodeHW = [], shareCode = [];
                        this.o2s(this.shareCodeSelf, '内部助力');
                        _i = 0, users_1 = users;
                        _j.label = 1;
                    case 1:
                        if (!(_i < users_1.length)) return [3 /*break*/, 9];
                        user = users_1[_i];
                        _j.label = 2;
                    case 2:
                        _j.trys.push([2, 7, , 8]);
                        this.user = user;
                        if (shareCodeHW.length === 0) {
                            shareCodeHW = this.getshareCodeHW('cash');
                        }
                        if (user.index === 0) {
                            shareCode = __spreadArray(__spreadArray([], shareCodeHW, true), this.shareCodeSelf, true);
                        }
                        else {
                            shareCode = __spreadArray(__spreadArray([], this.shareCodeSelf, true), shareCodeHW, true);
                        }
                        _g = 0, shareCode_1 = shareCode;
                        _j.label = 3;
                    case 3:
                        if (!(_g < shareCode_1.length)) return [3 /*break*/, 6];
                        code = shareCode_1[_g];
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code.inviteCode));
                        return [4 /*yield*/, this.api('redpack_limited_assist', { "inviteCode": code.inviteCode, "shareDate": code.shareDate })];
                    case 4:
                        res = _j.sent();
                        console.log((_c = (_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.limitTimeAssist) === null || _c === void 0 ? void 0 : _c.tips);
                        if (((_f = (_e = (_d = res.data) === null || _d === void 0 ? void 0 : _d.result) === null || _e === void 0 ? void 0 : _e.limitTimeAssist) === null || _f === void 0 ? void 0 : _f.assistCode) === '207') {
                            return [3 /*break*/, 6];
                        }
                        _j.label = 5;
                    case 5:
                        _g++;
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        e_2 = _j.sent();
                        console.log('error', e_2.message);
                        return [3 /*break*/, 8];
                    case 8:
                        _i++;
                        return [3 /*break*/, 1];
                    case 9:
                        _h = 0, users_2 = users;
                        _j.label = 10;
                    case 10:
                        if (!(_h < users_2.length)) return [3 /*break*/, 18];
                        user = users_2[_h];
                        _j.label = 11;
                    case 11:
                        _j.trys.push([11, 16, , 17]);
                        this.user = user;
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName));
                        i = 1;
                        _j.label = 12;
                    case 12:
                        if (!(i < 5)) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.api('cash_open_limited_redpacket', { "node": i })];
                    case 13:
                        res = _j.sent();
                        console.log(res.data);
                        _j.label = 14;
                    case 14:
                        i++;
                        return [3 /*break*/, 12];
                    case 15: return [3 /*break*/, 17];
                    case 16:
                        e_3 = _j.sent();
                        console.log('error', e_3.message);
                        return [3 /*break*/, 17];
                    case 17:
                        _h++;
                        return [3 /*break*/, 10];
                    case 18: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_cash_wechat;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_cash_wechat().init().then();
