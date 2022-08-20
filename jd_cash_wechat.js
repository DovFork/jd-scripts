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
    // async doSign() {
    //   let body = await this.cashDoSign()
    //   let data: any = await this.post('https://api.m.jd.com/client.action?functionId=cash_sign', body, {
    //     'Host': 'api.m.jd.com',
    //     'Cookie': this.user.cookie,
    //     'user-agent': this.user.UserAgent,
    //   })
    //   console.log(data.data.bizMsg)
    // }
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
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var res, _i, _c, t, e_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.user = user;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 12, , 13]);
                        return [4 /*yield*/, this.api('cash_mob_home', { "isLTRedPacket": "1" })
                            // if (res.data.result.signedStatus !== 1) {
                            //   console.log('开始签到')
                            //   await this.doSign()
                            //   console.log('签到成功')
                            // }
                        ];
                    case 2:
                        res = _d.sent();
                        _i = 0, _c = res.data.result.taskInfos;
                        _d.label = 3;
                    case 3:
                        if (!(_i < _c.length)) return [3 /*break*/, 7];
                        t = _c[_i];
                        if (!(t.doTimes !== t.times)) return [3 /*break*/, 6];
                        console.log(t.name);
                        return [4 /*yield*/, this.api('cash_doTask', { "type": t.type, "taskInfo": t.desc })];
                    case 4:
                        res = _d.sent();
                        console.log(res.data.result.totalMoney);
                        return [4 /*yield*/, this.api('cash_mob_home', { "isLTRedPacket": "1" })];
                    case 5:
                        res = _d.sent();
                        _d.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 3];
                    case 7:
                        if (!(new Date().getHours() >= 7 && new Date().getHours() <= 19 && ((_b = (_a = res.data.result) === null || _a === void 0 ? void 0 : _a.limitTimeRedPacket) === null || _b === void 0 ? void 0 : _b.receiveStatus) === '0')) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.api('cash_join_limited_redpacket', { "id": 5, "level": 3 })];
                    case 8:
                        res = _d.sent();
                        if (res.data.bizCode === 0) {
                            console.log('开启成功');
                        }
                        else {
                            console.log(res.data.bizMsg);
                        }
                        return [4 /*yield*/, this.api('cash_mob_home', { "isLTRedPacket": "1" })];
                    case 9:
                        res = _d.sent();
                        if (res.data.result.inviteCode && res.data.result.shareDate) {
                            this.shareCodeSelf.push({
                                inviteCode: res.data.result.inviteCode,
                                shareDate: res.data.result.shareDate
                            });
                            console.log('助力码', res.data.result.inviteCode);
                        }
                        return [3 /*break*/, 11];
                    case 10:
                        console.log('不在时间范围内');
                        _d.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        e_1 = _d.sent();
                        console.log('error', e_1.message);
                        return [3 /*break*/, 13];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_cash_wechat;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_cash_wechat().init().then();
