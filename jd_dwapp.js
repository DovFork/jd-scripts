"use strict";
/**
 * 京东-生活积分
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
var Jd_dwapp = /** @class */ (function (_super) {
    __extends(Jd_dwapp, _super);
    function Jd_dwapp() {
        return _super.call(this) || this;
    }
    Jd_dwapp.prototype.init = function () {
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
    Jd_dwapp.prototype.api = function (fn, body) {
        if (body === void 0) { body = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (['dwList', 'dwRecord', 'dwReceive'].includes(fn))
                            fn = "task/".concat(fn);
                        body = this.getEncStr(fn, body);
                        return [4 /*yield*/, this.wait(2000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.post("https://dwapp.jd.com/user/".concat(fn), JSON.stringify(body), {
                                'Host': 'dwapp.jd.com',
                                'Cookie': this.cookie,
                                'content-type': 'application/json',
                                'origin': 'https://prodev.m.jd.com',
                                'user-agent': 'jdapp;',
                                'referer': 'https://prodev.m.jd.com/'
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_dwapp.prototype.main = function (user) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var res, _i, _c, t, _d, _e, t;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        this.cookie = user.cookie;
                        return [4 /*yield*/, this.api('dwSignInfo')];
                    case 1:
                        res = _f.sent();
                        if (!(res.data.signInfo.signStatus === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.api('dwSign')];
                    case 2:
                        res = _f.sent();
                        console.log('签到成功', res.data.signInfo.signNum);
                        return [3 /*break*/, 4];
                    case 3:
                        console.log('已签到');
                        _f.label = 4;
                    case 4: return [4 /*yield*/, this.api('dwList')];
                    case 5:
                        res = _f.sent();
                        _i = 0, _c = res.data;
                        _f.label = 6;
                    case 6:
                        if (!(_i < _c.length)) return [3 /*break*/, 10];
                        t = _c[_i];
                        if (!(t.viewStatus === 0)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.api('dwRecord', { id: t.id, "taskType": t.taskType, "agentNum": "m", "followChannelStatus": "" })];
                    case 7:
                        res = _f.sent();
                        console.log(res.msg);
                        return [4 /*yield*/, this.api('dwReceive', { id: t.id })];
                    case 8:
                        res = _f.sent();
                        console.log((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.giveScoreNum);
                        _f.label = 9;
                    case 9:
                        _i++;
                        return [3 /*break*/, 6];
                    case 10: return [4 /*yield*/, this.api('dwList')];
                    case 11:
                        res = _f.sent();
                        _d = 0, _e = res.data;
                        _f.label = 12;
                    case 12:
                        if (!(_d < _e.length)) return [3 /*break*/, 15];
                        t = _e[_d];
                        if (!(t.viewStatus === 2)) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.api('dwReceive', { id: t.id })];
                    case 13:
                        res = _f.sent();
                        console.log((_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.giveScoreNum);
                        _f.label = 14;
                    case 14:
                        _d++;
                        return [3 /*break*/, 12];
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_dwapp;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_dwapp().init().then();
