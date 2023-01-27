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
var Health = /** @class */ (function (_super) {
    __extends(Health, _super);
    function Health() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        _this.shareCodePool = [];
        return _this;
    }
    Health.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(new Health, this.help)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Health.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('https://api.m.jd.com/', "functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&client=wh5&clientVersion=1.0.0&uuid="), {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://h5.m.jd.com',
                            'User-Agent': this.user.UserAgent,
                            'Referer': 'https://h5.m.jd.com/',
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Cookie': this.user.cookie
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Health.prototype.runTimes = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.get("https://sharecodepool.cnmb.win/api/runTimes0917?activityId=health&sharecode=".concat(code))];
                    case 1:
                        data = _a.sent();
                        console.log(data);
                        return [3 /*break*/, 4];
                    case 2:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.wait(5000)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Health.prototype.main = function (user) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var res, i, _i, _b, t, data, _c, _d, tp, e_2;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this.user = user;
                        return [4 /*yield*/, this.api('jdhealth_getHomeData', {})];
                    case 1:
                        res = _e.sent();
                        if (!((_a = res.data) === null || _a === void 0 ? void 0 : _a.result)) {
                            return [2 /*return*/];
                        }
                        if (!res.data.result.popupInfo.continuousSignInfo) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.api('jdhealth_collectScore', { "taskToken": res.data.result.popupInfo.continuousSignInfo.signInTaskToken, "taskId": res.data.result.continuousSignTaskId, "actionType": "0" })];
                    case 2:
                        res = _e.sent();
                        if (res.data.bizCode === 0) {
                            console.log('签到成功', res.data.result.acquiredScore);
                        }
                        _e.label = 3;
                    case 3:
                        i = 0;
                        _e.label = 4;
                    case 4:
                        if (!(i < 3)) return [3 /*break*/, 27];
                        return [4 /*yield*/, this.api('jdhealth_getTaskDetail', { "buildingId": "", "taskId": "", "channelId": 1 })];
                    case 5:
                        res = _e.sent();
                        _e.label = 6;
                    case 6:
                        _e.trys.push([6, 23, , 24]);
                        _i = 0, _b = res.data.result.taskVos;
                        _e.label = 7;
                    case 7:
                        if (!(_i < _b.length)) return [3 /*break*/, 22];
                        t = _b[_i];
                        if (!(t.status === 1 || t.status === 3)) return [3 /*break*/, 21];
                        console.log(t.taskName);
                        if (!(t.taskName.includes('打卡') && t.threeMealInfoVos[0].status === 1)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.api('jdhealth_collectScore', { "taskToken": t.threeMealInfoVos[0].taskToken, "taskId": t.taskId, "actionType": 0 })];
                    case 8:
                        data = _e.sent();
                        if (res.data.bizCode === 0)
                            console.log('打卡成功', parseInt(data.data.result.score));
                        else
                            console.log('打卡失败', data.data.bizMsg);
                        return [4 /*yield*/, this.wait(3000)];
                    case 9:
                        _e.sent();
                        _e.label = 10;
                    case 10:
                        _c = 0, _d = t.productInfoVos || t.followShopVo || t.shoppingActivityVos || [];
                        _e.label = 11;
                    case 11:
                        if (!(_c < _d.length)) return [3 /*break*/, 19];
                        tp = _d[_c];
                        if (!(tp.status === 1)) return [3 /*break*/, 18];
                        console.log('\t', tp.skuName || tp.shopName || tp.title);
                        if (!t.waitDuration) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.api('jdhealth_collectScore', { "taskToken": tp.taskToken, "taskId": t.taskId, "actionType": 1 })];
                    case 12:
                        res = _e.sent();
                        console.log('\t', res.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000 + 1000)];
                    case 13:
                        _e.sent();
                        _e.label = 14;
                    case 14: return [4 /*yield*/, this.api('jdhealth_collectScore', { "taskToken": tp.taskToken, "taskId": t.taskId, "actionType": 0 })];
                    case 15:
                        res = _e.sent();
                        if (!res.data.bizMsg.includes('做完')) return [3 /*break*/, 16];
                        console.log(res.data.bizMsg);
                        return [3 /*break*/, 19];
                    case 16:
                        console.log(res.data.bizMsg, parseInt(res.data.result.score));
                        return [4 /*yield*/, this.wait(3000)];
                    case 17:
                        _e.sent();
                        _e.label = 18;
                    case 18:
                        _c++;
                        return [3 /*break*/, 11];
                    case 19: return [4 /*yield*/, this.wait(3000)];
                    case 20:
                        _e.sent();
                        _e.label = 21;
                    case 21:
                        _i++;
                        return [3 /*break*/, 7];
                    case 22: return [3 /*break*/, 24];
                    case 23:
                        e_2 = _e.sent();
                        console.log('Error', e_2);
                        return [3 /*break*/, 24];
                    case 24: return [4 /*yield*/, this.wait(10000)];
                    case 25:
                        _e.sent();
                        _e.label = 26;
                    case 26:
                        i++;
                        return [3 /*break*/, 4];
                    case 27: return [2 /*return*/];
                }
            });
        });
    };
    Health.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var res, _i, users_1, user, code, e_3, _a, users_2, user, _b, shareCode, full, _c, shareCode_1, code, e_4;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _i = 0, users_1 = users;
                        _d.label = 1;
                    case 1:
                        if (!(_i < users_1.length)) return [3 /*break*/, 7];
                        user = users_1[_i];
                        this.user = user;
                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(user.index + 1, "\u3011").concat(user.UserName, "\n"));
                        return [4 /*yield*/, this.api('jdhealth_getTaskDetail', { "buildingId": "", "taskId": 6, "channelId": 1 })];
                    case 2:
                        res = _d.sent();
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 5, , 6]);
                        code = res.data.result.taskVos[0].assistTaskDetailVo.taskToken;
                        console.log('助力码', code);
                        this.shareCodeSelf.push(code);
                        return [4 /*yield*/, this.runTimes(code)];
                    case 4:
                        _d.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_3 = _d.sent();
                        return [3 /*break*/, 6];
                    case 6:
                        _i++;
                        return [3 /*break*/, 1];
                    case 7:
                        this.o2s(this.shareCodeSelf, '内部助力码');
                        _a = 0, users_2 = users;
                        _d.label = 8;
                    case 8:
                        if (!(_a < users_2.length)) return [3 /*break*/, 18];
                        user = users_2[_a];
                        this.user = user;
                        _b = this;
                        return [4 /*yield*/, this.getShareCodePool('health', 1)];
                    case 9:
                        _b.shareCodePool = _d.sent();
                        shareCode = Array.from(new Set(__spreadArray(__spreadArray([], this.shareCodeSelf, true), this.shareCodePool, true))), full = [];
                        _c = 0, shareCode_1 = shareCode;
                        _d.label = 10;
                    case 10:
                        if (!(_c < shareCode_1.length)) return [3 /*break*/, 17];
                        code = shareCode_1[_c];
                        if (full.includes(code))
                            return [3 /*break*/, 16];
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code));
                        return [4 /*yield*/, this.api('jdhealth_collectScore', { "taskToken": code, "taskId": "6", "actionType": 0 })];
                    case 11:
                        res = _d.sent();
                        _d.label = 12;
                    case 12:
                        _d.trys.push([12, 13, 14, 16]);
                        if (res.data.bizMsg === '助力失败丨啊哦您今日的爱心值已爆棚，明天继续吧') {
                            return [3 /*break*/, 17];
                        }
                        else if (res.data.bizMsg === '助力失败丨助力已满员！谢谢你哦~') {
                            full.push(code);
                        }
                        else {
                            console.log(res.data.bizMsg);
                        }
                        return [3 /*break*/, 16];
                    case 13:
                        e_4 = _d.sent();
                        this.o2s(res, 'jdhealth_collectScore catch');
                        return [3 /*break*/, 16];
                    case 14: return [4 /*yield*/, this.wait(3000)];
                    case 15:
                        _d.sent();
                        return [7 /*endfinally*/];
                    case 16:
                        _c++;
                        return [3 /*break*/, 10];
                    case 17:
                        _a++;
                        return [3 /*break*/, 8];
                    case 18: return [2 /*return*/];
                }
            });
        });
    };
    return Health;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Health().init().then();
