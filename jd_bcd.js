"use strict";
/**
 * cron: 15 8 * * *
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
var Zd = /** @class */ (function (_super) {
    __extends(Zd, _super);
    function Zd() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        return _this;
    }
    Zd.prototype.init = function () {
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
    Zd.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.body(body)];
                    case 1:
                        body = _a.sent();
                        return [4 /*yield*/, this.post("https://api.m.jd.com/client.action?functionId=".concat(fn), "functionId=".concat(fn, "&client=m&clientVersion=-1&appid=signed_wh5&body=").concat(JSON.stringify(body)), {
                                'Host': 'api.m.jd.com',
                                'Origin': 'https://wbbny.m.jd.com',
                                'User-Agent': this.user.UserAgent,
                                'Referer': 'https://wbbny.m.jd.com/',
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Cookie': this.user.cookie
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Zd.prototype.qryViewkitCallbackResult = function (fn, body) {
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
    Zd.prototype.main = function (user) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var res, memberNum, groupJoinInviteId, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.user = user;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 2:
                        res = _b.sent();
                        if (!((_a = res.data.result.groupInfo) === null || _a === void 0 ? void 0 : _a.memberList)) return [3 /*break*/, 4];
                        memberNum = res.data.result.groupInfo.memberList.length;
                        console.log('当前队伍成员', memberNum);
                        if (!(memberNum !== 30)) return [3 /*break*/, 4];
                        groupJoinInviteId = res.data.result.groupInfo.groupJoinInviteId;
                        return [4 /*yield*/, this.qryViewkitCallbackResult('getEncryptedPinColor', 'functionId=getEncryptedPinColor&client=wh5&clientVersion=1.0.0&body={}')];
                    case 3:
                        res = _b.sent();
                        console.log('队伍未满', groupJoinInviteId);
                        this.shareCodeSelf.push({ mpin: res.result, inviteId: groupJoinInviteId });
                        _b.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_1 = _b.sent();
                        console.log(e_1.message);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Zd.prototype.help = function (users) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var shareCodeHW, shareCode, res, _i, users_1, user, memberNum, _b, shareCode_1, code, e_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        shareCodeHW = [], shareCode = [];
                        this.o2s(this.shareCodeSelf);
                        _i = 0, users_1 = users;
                        _c.label = 1;
                    case 1:
                        if (!(_i < users_1.length)) return [3 /*break*/, 18];
                        user = users_1[_i];
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 16, , 17]);
                        this.user = user;
                        return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 3:
                        res = _c.sent();
                        if (!((_a = res.data.result) === null || _a === void 0 ? void 0 : _a.groupInfo.memberList)) return [3 /*break*/, 5];
                        memberNum = res.data.result.groupInfo.memberList.length;
                        console.log('当前队伍成员', memberNum);
                        if (!(memberNum !== 1)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.wait(3000)];
                    case 4:
                        _c.sent();
                        return [3 /*break*/, 17];
                    case 5:
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.getshareCodeHW('ssyzd')];
                    case 6:
                        shareCodeHW = _c.sent();
                        _c.label = 7;
                    case 7:
                        if (user.index === 0) {
                            shareCode = __spreadArray(__spreadArray([], shareCodeHW, true), this.shareCodeSelf, true);
                        }
                        else {
                            shareCode = __spreadArray(__spreadArray([], this.shareCodeSelf, true), shareCodeHW, true);
                        }
                        _b = 0, shareCode_1 = shareCode;
                        _c.label = 8;
                    case 8:
                        if (!(_b < shareCode_1.length)) return [3 /*break*/, 15];
                        code = shareCode_1[_b];
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A0\u5165 ").concat(code.inviteId));
                        return [4 /*yield*/, this.api('promote_getHomeData', { "inviteId": code.inviteId })];
                    case 9:
                        res = _c.sent();
                        return [4 /*yield*/, this.qryViewkitCallbackResult('collectFriendRecordColor', "functionId=collectFriendRecordColor&client=wh5&clientVersion=1.0.0&body={\"mpin\":\"".concat(code.mpin, "\",\"businessCode\":\"20136\",\"assistType\":\"1\",\"shareSource\":1}"))];
                    case 10:
                        _c.sent();
                        return [4 /*yield*/, this.api('promote_pk_joinGroup', { "inviteId": code.inviteId, "confirmFlag": "1" })];
                    case 11:
                        res = _c.sent();
                        return [4 /*yield*/, this.qryViewkitCallbackResult('collectFriendRecordColor', "functionId=collectFriendRecordColor&client=wh5&clientVersion=1.0.0&body={\"mpin\":\"".concat(code.mpin, "\",\"businessCode\":\"20136\",\"assistType\":\"2\",\"shareSource\":1}"))];
                    case 12:
                        _c.sent();
                        if (res.data.bizCode === 0) {
                            console.log('加入成功');
                            return [3 /*break*/, 15];
                        }
                        else {
                            console.log(res.data.bizMsg);
                        }
                        return [4 /*yield*/, this.wait(3000)];
                    case 13:
                        _c.sent();
                        _c.label = 14;
                    case 14:
                        _b++;
                        return [3 /*break*/, 8];
                    case 15: return [3 /*break*/, 17];
                    case 16:
                        e_2 = _c.sent();
                        console.log('error', e_2.message);
                        return [3 /*break*/, 17];
                    case 17:
                        _i++;
                        return [3 /*break*/, 1];
                    case 18: return [2 /*return*/];
                }
            });
        });
    };
    return Zd;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Zd().init().then();
