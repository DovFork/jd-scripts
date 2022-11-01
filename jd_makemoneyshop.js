"use strict";
/**
 * 极速-赚钱
 * cron: 35 9,18,23 * * *
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
var h5st_pro_1 = require("./utils/h5st_pro");
var Jd_makemoneyshop = /** @class */ (function (_super) {
    __extends(Jd_makemoneyshop, _super);
    function Jd_makemoneyshop() {
        var _this = _super.call(this) || this;
        _this.fp = undefined;
        _this.shareCodeSelf = [];
        _this.black = [];
        return _this;
    }
    Jd_makemoneyshop.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        this.fp = process.env.FP_D06F1 || "";
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
    Jd_makemoneyshop.prototype.task = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get("https://wq.jd.com/newtasksys/newtasksys_front/".concat(fn), {
                            'Host': 'wq.jd.com',
                            'user-agent': this.user.UserAgent,
                            'referer': 'https://wqs.jd.com/',
                            'Cookie': this.user.cookie
                        }, __assign({ 'g_ty': 'h5', 'g_tk': '', 'appCode': 'msc588d6d5', '__t': Date.now(), 'source': 'makemoneyshop', 'bizCode': 'makemoneyshop', 'sceneval': '2', 'callback': '' }, body))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_makemoneyshop.prototype.api = function (fn, _stk, body) {
        return __awaiter(this, void 0, void 0, function () {
            var h5st, text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.h5stTool.__genH5st(body)];
                    case 1:
                        h5st = _a.sent();
                        return [4 /*yield*/, this.get("https://wq.jd.com/makemoneyshop/".concat(fn), {
                                'Host': 'wq.jd.com',
                                'Cookie': this.user.cookie,
                                'user-agent': this.user.UserAgent,
                                'referer': 'https://wqs.jd.com/'
                            }, __assign(__assign({ 'g_ty': 'h5', 'g_tk': '', 'appCode': 'msc588d6d5', '_ste': '1', 'h5st': h5st, 'sceneval': '2', 'callback': '' }, body), { '_stk': _stk }))];
                    case 2:
                        text = _a.sent();
                        return [2 /*return*/, JSON.parse(text.match(/\((.*)\)/)[1])];
                }
            });
        });
    };
    Jd_makemoneyshop.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, _i, _a, t, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 12, , 13]);
                        this.user = user;
                        this.user.UserAgent = "jdltapp;iPhone;4.2.2;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)");
                        res = void 0, data = void 0;
                        this.h5stTool = new h5st_pro_1.H5ST('d06f1', this.user.UserAgent, this.fp, 'https://wqs.jd.com/sns/202210/20/make-money-shop/index.html', 'https://wqs.jd.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.api('home', 'activeId', { 'activeId': '63526d8f5fe613a6adb48f03' })];
                    case 2:
                        res = _b.sent();
                        if (res.code !== 0) {
                            console.log('黑号');
                            this.black.push(this.user.UserName);
                            return [2 /*return*/];
                        }
                        console.log('助力码', res.data.shareId);
                        this.shareCodeSelf.push(res.data.shareId);
                        return [4 /*yield*/, this.task('GetUserTaskStatusList', {})];
                    case 3:
                        res = _b.sent();
                        this.o2s(res);
                        _i = 0, _a = res.data.userTaskStatusList;
                        _b.label = 4;
                    case 4:
                        if (!(_i < _a.length)) return [3 /*break*/, 11];
                        t = _a[_i];
                        if (!([3538, 3539].includes(t.taskId) && t.awardStatus === 2)) return [3 /*break*/, 10];
                        if (!(t.completedTimes !== t.configTargetTimes)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.task('DoTask', { 'isSecurity': 'true', 'taskId': t.taskId, 'configExtra': '' })];
                    case 5:
                        data = _b.sent();
                        this.o2s(data, 'DoTask');
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.task('Award', { 'taskId': t.taskId })];
                    case 7:
                        data = _b.sent();
                        this.o2s(data, 'Award');
                        _b.label = 8;
                    case 8: return [4 /*yield*/, this.wait(3000)];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10:
                        _i++;
                        return [3 /*break*/, 4];
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        e_2 = _b.sent();
                        console.log('error', e_2.message);
                        return [3 /*break*/, 13];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    Jd_makemoneyshop.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, users_1, user, res, shareCode, shareCodeHW, _a, shareCode_1, code, e_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, users_1 = users;
                        _b.label = 1;
                    case 1:
                        if (!(_i < users_1.length)) return [3 /*break*/, 12];
                        user = users_1[_i];
                        this.user = user;
                        if (this.black.includes(this.user.UserName)) {
                            console.log('黑号');
                            return [3 /*break*/, 11];
                        }
                        this.user.UserAgent = "jdltapp;iPhone;4.2.2;Mozilla/5.0 (iPhone; CPU iPhone OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)";
                        res = void 0, shareCode = [], shareCodeHW = [];
                        this.o2s(this.shareCodeSelf, '内部助力');
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getshareCodeHW('zqdyj')];
                    case 2:
                        shareCodeHW = _b.sent();
                        _b.label = 3;
                    case 3:
                        if (user.index === 0) {
                            shareCode = Array.from(new Set(__spreadArray(__spreadArray([], shareCodeHW, true), this.shareCodeSelf, true)));
                        }
                        else {
                            shareCode = Array.from(new Set(__spreadArray(__spreadArray([], this.shareCodeSelf, true), shareCodeHW, true)));
                        }
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 10, , 11]);
                        _a = 0, shareCode_1 = shareCode;
                        _b.label = 5;
                    case 5:
                        if (!(_a < shareCode_1.length)) return [3 /*break*/, 9];
                        code = shareCode_1[_a];
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code));
                        return [4 /*yield*/, this.api('querysharevenderinfo', 'activeId,shareId', { activeId: '63526d8f5fe613a6adb48f03', shareId: code })];
                    case 6:
                        res = _b.sent();
                        console.log('助力结果', res.data.guestInfo.guestErrMsg);
                        return [4 /*yield*/, this.wait(2000)];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8:
                        _a++;
                        return [3 /*break*/, 5];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        e_3 = _b.sent();
                        console.log('error', e_3.message);
                        return [3 /*break*/, 11];
                    case 11:
                        _i++;
                        return [3 /*break*/, 1];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_makemoneyshop;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_makemoneyshop().init().then();
