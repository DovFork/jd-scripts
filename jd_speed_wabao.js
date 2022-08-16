"use strict";
/**
 * 极速版-挖宝
 * cron: 2 0,1,6 * * *
 * export FP_8DD95=""
 * CK1 优先助力 HW.ts
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
var h5st_pro_1 = require("./utils/h5st_pro");
var Jd_speed_wabao = /** @class */ (function (_super) {
    __extends(Jd_speed_wabao, _super);
    function Jd_speed_wabao() {
        var _this = _super.call(this) || this;
        _this.sharecode = [];
        _this.shareCodesSelf = [];
        return _this;
    }
    Jd_speed_wabao.prototype.init = function () {
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
    Jd_speed_wabao.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now();
                        h5st = this.h5stTool.__genH5st({
                            appid: 'activities_platform',
                            body: JSON.stringify(body),
                            client: 'ios',
                            clientVersion: '3.9.2',
                            functionId: fn,
                            t: timestamp.toString()
                        });
                        return [4 /*yield*/, this.get("https://api.m.jd.com/?functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&t=").concat(timestamp, "&appid=activities_platform&client=ios&clientVersion=3.9.2&h5st=").concat(h5st), {
                                'authority': 'api.m.jd.com',
                                'origin': 'https://bnzf.jd.com',
                                'referer': 'https://bnzf.jd.com/',
                                'user-agent': this.user.UserAgent,
                                'cookie': this.user.cookie
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_speed_wabao.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, _i, _a, t, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.user = user;
                        this.user.UserAgent = "jdltapp;iPhone;3.9.2;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;");
                        this.h5stTool = new h5st_pro_1.H5ST("8dd95", this.user.UserAgent, process.env.FP_8DD95 || '', 'https://bnzf.jd.com/?activityId=pTTvJeSTrpthgk9ASBVGsw', 'https://bnzf.jd.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 11, , 12]);
                        return [4 /*yield*/, this.api('happyDigHome', { "linkId": "pTTvJeSTrpthgk9ASBVGsw" })];
                    case 3:
                        res = _b.sent();
                        console.log('助力码', res.data.markedPin, res.data.inviteCode);
                        this.shareCodesSelf.push({ inviter: res.data.markedPin, inviteCode: res.data.inviteCode });
                        return [4 /*yield*/, this.api('apTaskList', { "linkId": "pTTvJeSTrpthgk9ASBVGsw" })];
                    case 4:
                        res = _b.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 5:
                        _b.sent();
                        _i = 0, _a = res.data;
                        _b.label = 6;
                    case 6:
                        if (!(_i < _a.length)) return [3 /*break*/, 10];
                        t = _a[_i];
                        if (!(t.taskType === 'BROWSE_CHANNEL' && t.taskDoTimes === 0 && t.taskLimitTimes === 1)) return [3 /*break*/, 9];
                        console.log(t.taskShowTitle);
                        return [4 /*yield*/, this.api('apDoTask', { "linkId": "pTTvJeSTrpthgk9ASBVGsw", "taskType": "BROWSE_CHANNEL", "taskId": t.id, "channel": 4, "itemId": encodeURIComponent(t.taskSourceUrl), "checkVersion": false })];
                    case 7:
                        data = _b.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 8:
                        _b.sent();
                        if (data.success) {
                            console.log('任务完成');
                        }
                        else {
                            this.o2s(data, '任务失败');
                        }
                        _b.label = 9;
                    case 9:
                        _i++;
                        return [3 /*break*/, 6];
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        e_1 = _b.sent();
                        console.log('error', e_1);
                        return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    Jd_speed_wabao.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var res, shareCodesHW, shareCodes, _i, users_1, user, _a, shareCodes_1, code, e_2, _b, users_2, user, blood, gameOver, round, i, j, e_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log('内部助力');
                        this.o2s(this.shareCodesSelf);
                        shareCodesHW = [];
                        _i = 0, users_1 = users;
                        _c.label = 1;
                    case 1:
                        if (!(_i < users_1.length)) return [3 /*break*/, 18];
                        user = users_1[_i];
                        this.user.cookie = user.cookie;
                        this.user.UserAgent = "jdltapp;iPhone;3.9.2;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;");
                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(user.index + 1, "\u3011").concat(user.UserName, "\n"));
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 16, , 17]);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 3:
                        _c.sent();
                        if (!(shareCodesHW.length === 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getshareCodeHW('fcwb')];
                    case 4:
                        shareCodesHW = _c.sent();
                        _c.label = 5;
                    case 5:
                        if (user.index === 0) {
                            shareCodes = __spreadArray(__spreadArray([], shareCodesHW, true), this.shareCodesSelf, true);
                        }
                        else {
                            shareCodes = __spreadArray(__spreadArray([], this.shareCodesSelf, true), shareCodesHW, true);
                        }
                        shareCodes = [{ "inviter": "IReO3ad-dyrjil-pq4FZeg", "inviteCode": "0ba9527b9ad24555af6e5db7ba9c6bac65791660644915062" }, { "inviter": "JJ4liT2gNT4b_syynalMQuz7mATs6v030333kI9K9fw", "inviteCode": "e6688787bdba4b9fbd457a3e81ce37bf54461660645189599" }, { "inviter": "H3GVctNZoCwosfA0Gv_0BA", "inviteCode": "9186425e24a04e298599bd23b7d912df81181660645195069" }, { "inviter": "BXuxzLhNISFc5jhjMhjaEw", "inviteCode": "a410aa62d8b64d818a8dc85af8be9e5d42161660645200560" }];
                        _a = 0, shareCodes_1 = shareCodes;
                        _c.label = 6;
                    case 6:
                        if (!(_a < shareCodes_1.length)) return [3 /*break*/, 15];
                        code = shareCodes_1[_a];
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code.inviteCode));
                        this.h5stTool = new h5st_pro_1.H5ST("8dd95", this.user.UserAgent, process.env.FP_8DD95 || '', "https://bnzf.jd.com/?activityId=pTTvJeSTrpthgk9ASBVGsw&inviterId=".concat(code.inviter, "&inviterCode=").concat(code.inviteCode, "&utm_source=iosapp&utm_medium=liteshare&utm_campaign=&utm_term=Qqfriends&ad_od=share"), 'https://bnzf.jd.com', user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 7:
                        _c.sent();
                        return [4 /*yield*/, this.api('happyDigHelp', { "linkId": "pTTvJeSTrpthgk9ASBVGsw", "inviter": code.inviter, "inviteCode": code.inviteCode })];
                    case 8:
                        res = _c.sent();
                        if (!(res.code === 0)) return [3 /*break*/, 10];
                        console.log('助力成功');
                        return [4 /*yield*/, this.wait(2000)];
                    case 9:
                        _c.sent();
                        return [3 /*break*/, 15];
                    case 10:
                        if (!(res.code === 16144)) return [3 /*break*/, 12];
                        console.log('上限');
                        return [4 /*yield*/, this.wait(2000)];
                    case 11:
                        _c.sent();
                        return [3 /*break*/, 15];
                    case 12:
                        console.log(res.code, res.errMsg);
                        return [4 /*yield*/, this.wait(2000)];
                    case 13:
                        _c.sent();
                        _c.label = 14;
                    case 14:
                        _a++;
                        return [3 /*break*/, 6];
                    case 15: return [3 /*break*/, 17];
                    case 16:
                        e_2 = _c.sent();
                        console.log('error', e_2);
                        return [3 /*break*/, 17];
                    case 17:
                        _i++;
                        return [3 /*break*/, 1];
                    case 18:
                        _b = 0, users_2 = users;
                        _c.label = 19;
                    case 19:
                        if (!(_b < users_2.length)) return [3 /*break*/, 36];
                        user = users_2[_b];
                        this.user.cookie = user.cookie;
                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(user.index + 1, "\u3011").concat(user.UserName, "\n"));
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 20:
                        _c.sent();
                        return [4 /*yield*/, this.api('happyDigHome', { "linkId": "pTTvJeSTrpthgk9ASBVGsw" })];
                    case 21:
                        res = _c.sent();
                        blood = res.data.blood, gameOver = false;
                        if (blood <= 1)
                            gameOver = true;
                        console.log('❤️', blood);
                        round = 1;
                        _c.label = 22;
                    case 22:
                        if (!(round < 4)) return [3 /*break*/, 35];
                        if (gameOver)
                            return [3 /*break*/, 35];
                        i = 0;
                        _c.label = 23;
                    case 23:
                        if (!(i < 4)) return [3 /*break*/, 34];
                        _c.label = 24;
                    case 24:
                        _c.trys.push([24, 32, , 33]);
                        if (gameOver) {
                            console.log('能量剩余1，跳过 A');
                            return [3 /*break*/, 34];
                        }
                        j = 0;
                        _c.label = 25;
                    case 25:
                        if (!(j < 4)) return [3 /*break*/, 31];
                        if (gameOver) {
                            console.log('能量剩余1，跳过 B');
                            return [3 /*break*/, 31];
                        }
                        return [4 /*yield*/, this.api('happyDigDo', { "round": round, "rowIdx": i, "colIdx": j, "linkId": "pTTvJeSTrpthgk9ASBVGsw" })];
                    case 26:
                        res = _c.sent();
                        if (res.data.chunk.type === 1) {
                            console.log('👎');
                        }
                        else if (res.data.chunk.type === 2) {
                            console.log('🧧', parseFloat(res.data.chunk.value));
                        }
                        else if (res.data.chunk.type === 3) {
                            console.log('💰', parseFloat(res.data.chunk.value));
                        }
                        else if (res.data.chunk.type === 4) {
                            console.log('💣');
                        }
                        else {
                            this.o2s(res, '🤔️');
                        }
                        return [4 /*yield*/, this.wait(3000)];
                    case 27:
                        _c.sent();
                        return [4 /*yield*/, this.api('happyDigHome', { "linkId": "pTTvJeSTrpthgk9ASBVGsw" })];
                    case 28:
                        res = _c.sent();
                        console.log('❤️', res.data.blood);
                        if (res.data.blood === 1) {
                            gameOver = true;
                            console.log('能量剩余1，退出');
                            return [3 /*break*/, 31];
                        }
                        return [4 /*yield*/, this.wait(2000)];
                    case 29:
                        _c.sent();
                        _c.label = 30;
                    case 30:
                        j++;
                        return [3 /*break*/, 25];
                    case 31: return [3 /*break*/, 33];
                    case 32:
                        e_3 = _c.sent();
                        console.log('error', e_3);
                        gameOver = true;
                        return [3 /*break*/, 33];
                    case 33:
                        i++;
                        return [3 /*break*/, 23];
                    case 34:
                        round++;
                        return [3 /*break*/, 22];
                    case 35:
                        _b++;
                        return [3 /*break*/, 19];
                    case 36: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_speed_wabao;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_speed_wabao().init().then();
