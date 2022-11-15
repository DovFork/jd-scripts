"use strict";
/**
 * 京东-领现金
 * cron: 30 7,10 * * *
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
exports.__esModule = true;
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var Jd_cash_signin = /** @class */ (function (_super) {
    __extends(Jd_cash_signin, _super);
    function Jd_cash_signin() {
        return _super.call(this) || this;
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
            var sign;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSign(fn, body)];
                    case 1:
                        sign = _a.sent();
                        return [4 /*yield*/, this.post("https://api.m.jd.com/client.action?functionId=".concat(fn), sign, {
                                'Host': 'api.m.jd.com',
                                'Cookie': this.user.cookie,
                                'user-agent': this.user.UserAgent
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_cash_signin.prototype.main = function (user) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var res, type, data, otherTaskNum, taskNum, i, _i, _d, t;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this.user = user;
                        return [4 /*yield*/, this.api('cash_homePage', {})];
                    case 1:
                        res = _e.sent();
                        if (!(res.data.result.signedStatus !== 1)) return [3 /*break*/, 4];
                        console.log('今日未签到');
                        return [4 /*yield*/, this.api('cash_sign', { "remind": 0, "inviteCode": "", "type": 0, "breakReward": 0 })];
                    case 2:
                        _e.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 3:
                        _e.sent();
                        console.log('签到成功');
                        return [3 /*break*/, 5];
                    case 4:
                        console.log('今日已签到');
                        _e.label = 5;
                    case 5: return [4 /*yield*/, this.api('cash_homePage', {})];
                    case 6:
                        res = _e.sent();
                        type = [2, 4, 31, 16, 3, 5, 17, 21];
                        otherTaskNum = res.data.result.taskInfos.filter(function (item) { return !type.includes(item.type); }).length;
                        taskNum = res.data.result.taskInfos.filter(function (item) { return type.includes(item.type); }).length;
                        console.log(taskNum, otherTaskNum);
                        i = 0;
                        _e.label = 7;
                    case 7:
                        if (!(i < 10)) return [3 /*break*/, 16];
                        return [4 /*yield*/, this.api('cash_homePage', {})];
                    case 8:
                        res = _e.sent();
                        if (res.data.result.taskInfos.filter(function (item) { return type.includes(item.type) && item.doTimes === item.times; }).length === taskNum) {
                            console.log('任务全部完成');
                            return [3 /*break*/, 16];
                        }
                        _i = 0, _d = ((_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.taskInfos) || [];
                        _e.label = 9;
                    case 9:
                        if (!(_i < _d.length)) return [3 /*break*/, 13];
                        t = _d[_i];
                        if (!(t.doTimes < t.times && t.type !== 7)) return [3 /*break*/, 12];
                        console.log(t.name);
                        return [4 /*yield*/, this.api('cash_doTask', { "type": t.type, "taskInfo": t.desc })];
                    case 10:
                        data = _e.sent();
                        return [4 /*yield*/, this.wait(t.duration * 1000 || 1000)];
                    case 11:
                        _e.sent();
                        if (data.data.bizCode === 0) {
                            console.log('任务完成', (_c = data.data.result.totalMoney) !== null && _c !== void 0 ? _c : '');
                            return [3 /*break*/, 13];
                        }
                        else {
                            console.log('任务失败', JSON.stringify(data));
                            return [3 /*break*/, 13];
                        }
                        _e.label = 12;
                    case 12:
                        _i++;
                        return [3 /*break*/, 9];
                    case 13: return [4 /*yield*/, this.wait(2000)];
                    case 14:
                        _e.sent();
                        _e.label = 15;
                    case 15:
                        i++;
                        return [3 /*break*/, 7];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_cash_signin;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_cash_signin().init().then();
