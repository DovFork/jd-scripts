"use strict";
/**
 * cron: 15,35 21 * * *
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
var Cfd = /** @class */ (function (_super) {
    __extends(Cfd, _super);
    function Cfd() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        return _this;
    }
    Cfd.prototype.init = function () {
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
    Cfd.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!['promote_pk_divideScores', 'promote_pk_getExpandDetail', 'promote_pk_collectPkExpandScore'].includes(fn)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.body(body)];
                    case 1:
                        body = _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.post("https://api.m.jd.com/client.action?functionId=".concat(fn), "functionId=".concat(fn, "&client=m&clientVersion=-1&appid=signed_wh5&body=").concat(JSON.stringify(body)), {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://wbbny.m.jd.com',
                            'User-Agent': this.user.UserAgent,
                            'Referer': 'https://wbbny.m.jd.com/',
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Cookie': this.user.cookie
                        })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Cfd.prototype.qryViewkitCallbackResult = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post("https://api.m.jd.com/client.action?functionId=".concat(fn, "&client=wh5"), typeof body === 'string' ? body : new URLSearchParams({ 'body': JSON.stringify(body) }), {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://wbbny.m.jd.com',
                            'Referer': 'https://wbbny.m.jd.com/',
                            'Cookie': this.user.cookie,
                            'content-type': 'application/x-www-form-urlencoded',
                            'User-Agent': this.user.UserAgent
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Cfd.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, mpin, inviteId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.user = user;
                        return [4 /*yield*/, this.qryViewkitCallbackResult('getEncryptedPinColor', 'functionId=getEncryptedPinColor&client=wh5&clientVersion=1.0.0&body={}')];
                    case 1:
                        res = _a.sent();
                        mpin = res.result;
                        return [4 /*yield*/, this.wait(1000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 3:
                        res = _a.sent();
                        console.log('inflateMaxAward', res.data.result.inflateMaxAward);
                        return [4 /*yield*/, this.api('promote_pk_getMsgPopup', {})];
                    case 4:
                        res = _a.sent();
                        this.o2s(res);
                        if (!(res.data.result.length > 0 && res.data.result[0].divideResultVO)) return [3 /*break*/, 6];
                        console.log('红包', res.data.result[0].divideResultVO.divideValue * 1);
                        console.log('金币', res.data.result[0].divideResultVO.scores);
                        return [4 /*yield*/, this.api('promote_pk_divideScores', { "appSign": "3" })];
                    case 5:
                        res = _a.sent();
                        console.log('领取组队金币', res.data.result.produceScore * 1);
                        _a.label = 6;
                    case 6: return [4 /*yield*/, this.api('promote_pk_getExpandDetail', {})];
                    case 7:
                        res = _a.sent();
                        if (res.data.bizCode === 0) {
                            inviteId = res.data.result.inviteId;
                            console.log('助力码', inviteId, mpin);
                            console.log('还有', Math.floor(res.data.result.pkExpandDetailResult.remainTime / 60000), '分钟');
                            this.shareCodeSelf.push({ inviteId: inviteId, mpin: mpin });
                        }
                        else {
                            console.log(res.data.bizMsg);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Cfd.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var shareCodeHW, shareCode, res, _i, users_1, user, _a, shareCode_1, code, e_1, _b, users_2, user, e_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        shareCodeHW = [], shareCode = [];
                        this.o2s(this.shareCodeSelf, '内部助力');
                        _i = 0, users_1 = users;
                        _c.label = 1;
                    case 1:
                        if (!(_i < users_1.length)) return [3 /*break*/, 15];
                        user = users_1[_i];
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 13, , 14]);
                        this.user = user;
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getshareCodeHW('ssypz')];
                    case 3:
                        shareCodeHW = _c.sent();
                        _c.label = 4;
                    case 4:
                        if (user.index === 0) {
                            shareCode = __spreadArray(__spreadArray([], shareCodeHW, true), this.shareCodeSelf, true);
                        }
                        else {
                            shareCode = __spreadArray(__spreadArray([], this.shareCodeSelf, true), shareCodeHW, true);
                        }
                        _a = 0, shareCode_1 = shareCode;
                        _c.label = 5;
                    case 5:
                        if (!(_a < shareCode_1.length)) return [3 /*break*/, 12];
                        code = shareCode_1[_a];
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code.inviteId));
                        return [4 /*yield*/, this.api('promote_pk_getHomeData', { "inviteId": code.inviteId })];
                    case 6:
                        res = _c.sent();
                        return [4 /*yield*/, this.qryViewkitCallbackResult('collectFriendRecordColor', "functionId=collectFriendRecordColor&client=wh5&clientVersion=1.0.0&body={\"mpin\":\"".concat(code.mpin, "\",\"businessCode\":\"20136\",\"assistType\":\"1\",\"shareSource\":1}"))];
                    case 7:
                        res = _c.sent();
                        return [4 /*yield*/, this.api('promote_pk_collectPkExpandScore', { "actionType": "0", "inviteId": code.inviteId })];
                    case 8:
                        res = _c.sent();
                        return [4 /*yield*/, this.qryViewkitCallbackResult('collectFriendRecordColor', "functionId=collectFriendRecordColor&client=wh5&clientVersion=1.0.0&body={\"mpin\":\"".concat(code.mpin, "\",\"businessCode\":\"20136\",\"assistType\":\"2\",\"shareSource\":1}"))];
                    case 9:
                        _c.sent();
                        if (res.data.bizCode === 0) {
                            console.log('助力成功');
                            if (res.data.result.times === 8) {
                                console.log('上限');
                                return [3 /*break*/, 12];
                            }
                        }
                        else {
                            console.log('助力失败', res.data.bizMsg);
                        }
                        return [4 /*yield*/, this.wait(3000)];
                    case 10:
                        _c.sent();
                        _c.label = 11;
                    case 11:
                        _a++;
                        return [3 /*break*/, 5];
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        e_1 = _c.sent();
                        console.log('error', e_1.message);
                        return [3 /*break*/, 14];
                    case 14:
                        _i++;
                        return [3 /*break*/, 1];
                    case 15:
                        _b = 0, users_2 = users;
                        _c.label = 16;
                    case 16:
                        if (!(_b < users_2.length)) return [3 /*break*/, 21];
                        user = users_2[_b];
                        _c.label = 17;
                    case 17:
                        _c.trys.push([17, 19, , 20]);
                        this.user = user;
                        return [4 /*yield*/, this.api('promote_pk_receiveAward', {})];
                    case 18:
                        res = _c.sent();
                        this.o2s(res, 'promote_pk_receiveAward');
                        return [3 /*break*/, 20];
                    case 19:
                        e_2 = _c.sent();
                        console.log('error', e_2.message);
                        return [3 /*break*/, 20];
                    case 20:
                        _b++;
                        return [3 /*break*/, 16];
                    case 21: return [2 /*return*/];
                }
            });
        });
    };
    return Cfd;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Cfd().init().then();
