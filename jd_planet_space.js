"use strict";
/**
 * 515券民空间站
 * CK1 -> 优先HW.ts
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
var JDHelloWorld2_1 = require("./JDHelloWorld2");
var Planet_Space = /** @class */ (function (_super) {
    __extends(Planet_Space, _super);
    function Planet_Space() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        return _this;
    }
    Planet_Space.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(new Planet_Space(), this.help)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Planet_Space.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post("https://api.m.jd.com/api?functionId=".concat(fn, "&appid=coupon-space&client=wh5&t=").concat(Date.now()), "body=".concat(encodeURIComponent(JSON.stringify(body))), {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://h5.m.jd.com',
                            'User-Agent': 'jdapp;',
                            'Referer': 'https://h5.m.jd.com/',
                            'Cookie': this.user.cookie
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Planet_Space.prototype.main = function (user) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var res, i, encryptProjectId, specialComponentTaskPid, specialComponentTaskInfo, componentTaskInfo, remain, _i, specialComponentTaskInfo_1, t, _c, componentTaskInfo_1, t, drawCardChance, i, code;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.user = user;
                        i = 0;
                        _d.label = 1;
                    case 1:
                        if (!(i < 4)) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.api('explorePlanet_taskList', { "activityId": 1 })];
                    case 2:
                        res = _d.sent();
                        encryptProjectId = res.data.result.componentTaskPid;
                        specialComponentTaskPid = res.data.result.specialComponentTaskPid;
                        specialComponentTaskInfo = res.data.result.specialComponentTaskInfo;
                        componentTaskInfo = res.data.result.componentTaskInfo;
                        remain = res.data.result.componentTaskInfo.some(function (item) { return !item.taskDesc.includes('加入品牌') && item.completedItemCount !== item.groupItemCount; });
                        _i = 0, specialComponentTaskInfo_1 = specialComponentTaskInfo;
                        _d.label = 3;
                    case 3:
                        if (!(_i < specialComponentTaskInfo_1.length)) return [3 /*break*/, 6];
                        t = specialComponentTaskInfo_1[_i];
                        console.log('特殊任务', t.taskDesc);
                        return [4 /*yield*/, this.api('explorePlanet_taskReport', { "activityId": 1, "encryptTaskId": t.encryptTaskId, "encryptProjectId": specialComponentTaskPid, "itemId": t.itemId })];
                    case 4:
                        res = _d.sent();
                        console.log(res.data.biz_msg);
                        _d.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        console.log(remain);
                        if (!remain) return [3 /*break*/, 13];
                        _c = 0, componentTaskInfo_1 = componentTaskInfo;
                        _d.label = 7;
                    case 7:
                        if (!(_c < componentTaskInfo_1.length)) return [3 /*break*/, 11];
                        t = componentTaskInfo_1[_c];
                        if (!(t.completedItemCount !== t.groupItemCount && !t.taskDesc.includes('加入品牌'))) return [3 /*break*/, 10];
                        console.log(t.taskDesc);
                        return [4 /*yield*/, this.api('explorePlanet_taskReport', { "activityId": 1, "encryptTaskId": t.encryptTaskId, "encryptProjectId": encryptProjectId, "itemId": t.itemId })];
                    case 8:
                        res = _d.sent();
                        return [4 /*yield*/, this.wait(t.waitDuration || 1000)];
                    case 9:
                        _d.sent();
                        this.o2s(res);
                        _d.label = 10;
                    case 10:
                        _c++;
                        return [3 /*break*/, 7];
                    case 11: return [4 /*yield*/, this.wait(3000)];
                    case 12:
                        _d.sent();
                        return [3 /*break*/, 14];
                    case 13: return [3 /*break*/, 15];
                    case 14:
                        i++;
                        return [3 /*break*/, 1];
                    case 15: return [4 /*yield*/, this.api('explorePlanet_homePage', { "channel": "1" })];
                    case 16:
                        res = _d.sent();
                        drawCardChance = res.data.result.drawCardChance || 0;
                        console.log('抽奖次数', drawCardChance);
                        i = 0;
                        _d.label = 17;
                    case 17:
                        if (!(i < drawCardChance)) return [3 /*break*/, 21];
                        return [4 /*yield*/, this.api('explorePlanet_explore', { "activityId": 1 })];
                    case 18:
                        res = _d.sent();
                        this.o2s(res);
                        if (res.data.result.cardInfo) {
                            console.log('抽到卡片');
                        }
                        else if (res.data.result.couponInfo) {
                            console.log('抽到券');
                        }
                        return [4 /*yield*/, this.wait(2000)];
                    case 19:
                        _d.sent();
                        _d.label = 20;
                    case 20:
                        i++;
                        return [3 /*break*/, 17];
                    case 21: return [4 /*yield*/, this.api('explorePlanet_taskList', { "activityId": 1 })];
                    case 22:
                        res = _d.sent();
                        if (!!((_b = (_a = res.data.result) === null || _a === void 0 ? void 0 : _a.assistTaskInfo) === null || _b === void 0 ? void 0 : _b.groupId)) return [3 /*break*/, 24];
                        return [4 /*yield*/, this.api('explorePlanet_openGroup', { "activityId": 1 })];
                    case 23:
                        res = _d.sent();
                        code = res.data.result.assistTaskInfo.groupId;
                        return [3 /*break*/, 25];
                    case 24:
                        code = res.data.result.assistTaskInfo.groupId;
                        _d.label = 25;
                    case 25:
                        console.log('助力码', code);
                        this.shareCodeSelf.push(code);
                        return [2 /*return*/];
                }
            });
        });
    };
    Planet_Space.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var full, shareCodeHW, _i, users_1, user, shareCode, _a, shareCode_1, code, res, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.o2s(this.shareCodeSelf, '内部助力码');
                        full = ['b'], shareCodeHW = [];
                        _i = 0, users_1 = users;
                        _b.label = 1;
                    case 1:
                        if (!(_i < users_1.length)) return [3 /*break*/, 14];
                        user = users_1[_i];
                        this.user = user;
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getshareCodeHW('space')];
                    case 2:
                        shareCodeHW = _b.sent();
                        _b.label = 3;
                    case 3:
                        shareCode = user.index === 0
                            ? Array.from(new Set(__spreadArray(__spreadArray([], shareCodeHW, true), this.shareCodeSelf, true)))
                            : Array.from(new Set(__spreadArray(__spreadArray([], this.shareCodeSelf, true), shareCodeHW, true)));
                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(user.index + 1, "\u3011").concat(user.UserName, "\n"));
                        _a = 0, shareCode_1 = shareCode;
                        _b.label = 4;
                    case 4:
                        if (!(_a < shareCode_1.length)) return [3 /*break*/, 11];
                        code = shareCode_1[_a];
                        if (full.includes(code))
                            return [3 /*break*/, 10];
                        _b.label = 5;
                    case 5:
                        _b.trys.push([5, 7, , 8]);
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code));
                        return [4 /*yield*/, this.api('explorePlanet_assist', { "activityId": "1", "groupId": code })];
                    case 6:
                        res = _b.sent();
                        console.log(res.data.biz_msg);
                        if (res.data.biz_msg === '今日助力机会已用完，去完成自己的活动吧') {
                            console.log('上限');
                            return [3 /*break*/, 11];
                        }
                        return [3 /*break*/, 8];
                    case 7:
                        e_1 = _b.sent();
                        console.log(e_1);
                        return [3 /*break*/, 11];
                    case 8: return [4 /*yield*/, this.wait(2000)];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10:
                        _a++;
                        return [3 /*break*/, 4];
                    case 11: return [4 /*yield*/, this.wait(2000)];
                    case 12:
                        _b.sent();
                        _b.label = 13;
                    case 13:
                        _i++;
                        return [3 /*break*/, 1];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    return Planet_Space;
}(JDHelloWorld2_1.JDHelloWorld));
new Planet_Space().init().then();
