"use strict";
/**
 * 京东-东东农场-助力
 * 所有CK助力顺序
 * 内部 -> 助力池
 * 和jd_fruit.js同方法自己设置内部码
 * 如果没有添加内部码，直接助力助力池
 * cron: 35 0,3,5 * * *
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
var sendNotify_1 = require("./sendNotify");
var Jd_fruit_help = /** @class */ (function (_super) {
    __extends(Jd_fruit_help, _super);
    function Jd_fruit_help() {
        var _this = _super.call(this, "农场助力") || this;
        _this.shareCodeSelf = [];
        _this.code2user = {};
        return _this;
    }
    Jd_fruit_help.prototype.init = function () {
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
    Jd_fruit_help.prototype.randPhoneId = function () {
        return Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10);
    };
    Jd_fruit_help.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.user = user;
                        this.user.UserAgent = "jdapp;iPhone;10.2.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat(this.randPhoneId(), ";network/4g;model/iPhone11,8;addressid/1188016812;appBuild/167724;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS ").concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        return [4 /*yield*/, this.get("https://api.m.jd.com/api?functionId=initForFarm&body=".concat(encodeURIComponent(JSON.stringify({ version: 4 })), "&appid=wh5&clientVersion=9.1.0"), {
                                "accept": "*/*",
                                "accept-encoding": "gzip, deflate, br",
                                "accept-language": "zh-CN,zh;q=0.9",
                                "cache-control": "no-cache",
                                "cookie": this.user.cookie,
                                "origin": "https://home.m.jd.com",
                                "pragma": "no-cache",
                                "referer": "https://home.m.jd.com/myJd/newhome.action",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-site",
                                "User-Agent": this.user.UserAgent,
                                "Content-Type": "application/x-www-form-urlencoded"
                            })];
                    case 2:
                        res = _a.sent();
                        if (res.code === '0') {
                            console.log('助力码', res.farmUserPro.shareCode);
                            this.shareCodeSelf.push(res.farmUserPro.shareCode);
                            this.code2user[this.user.UserName] = res.farmUserPro.shareCode;
                        }
                        else {
                            this.o2s(res, 'initForFarm error');
                            return [2 /*return*/, { msg: "\u8D26\u53F7".concat(this.user.index + 1, " ").concat(this.user.UserName, "\n\u521D\u59CB\u5316\u5931\u8D25\n").concat(JSON.stringify(res)) }];
                        }
                        return [3 /*break*/, 5];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1.message);
                        return [4 /*yield*/, this.wait(5000)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, { msg: "\u8D26\u53F7".concat(this.user.index + 1, " ").concat(this.user.UserName, "\n\u8FD0\u884C\u51FA\u9519\n").concat(e_1.message) }];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Jd_fruit_help.prototype.help = function (users) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var res, full, message, _i, users_1, user, myCode, shareCodePool, shareCode, _b, shareCode_1, code, i, runTimes, e_2, e_3, _c, users_2, user, assistFriendList, farmAssistInit_waterEnergy, _d, _e, t, e_4, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        this.o2s(this.shareCodeSelf, '内部助力');
                        full = [], message = '';
                        _i = 0, users_1 = users;
                        _g.label = 1;
                    case 1:
                        if (!(_i < users_1.length)) return [3 /*break*/, 26];
                        user = users_1[_i];
                        _g.label = 2;
                    case 2:
                        _g.trys.push([2, 21, , 23]);
                        this.user = user;
                        this.user.UserAgent = "jdapp;iPhone;10.2.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat(this.randPhoneId(), ";network/4g;model/iPhone11,8;addressid/1188016812;appBuild/167724;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS ").concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1");
                        myCode = (_a = this.code2user[this.user.UserName]) !== null && _a !== void 0 ? _a : "";
                        return [4 /*yield*/, this.getShareCodePool('farm', 50)];
                    case 3:
                        shareCodePool = _g.sent();
                        shareCode = __spreadArray(__spreadArray([], this.shareCodeSelf, true), shareCodePool, true);
                        this.o2s(shareCode, '助力顺序');
                        _b = 0, shareCode_1 = shareCode;
                        _g.label = 4;
                    case 4:
                        if (!(_b < shareCode_1.length)) return [3 /*break*/, 20];
                        code = shareCode_1[_b];
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code));
                        if (full.includes(code)) {
                            console.log('full contains');
                            return [3 /*break*/, 19];
                        }
                        return [4 /*yield*/, this.get("https://api.m.jd.com/api?functionId=initForFarm&body=".concat(encodeURIComponent(JSON.stringify({ imageUrl: "", nickName: "", "shareCode": code, babelChannel: "3", version: 2, channel: 1 })), "&appid=wh5"), {
                                "Host": "api.m.jd.com",
                                "Accept": "*/*",
                                "Origin": "https://carry.m.jd.com",
                                "Accept-Encoding": "gzip, deflate, br",
                                "User-Agent": this.user.UserAgent,
                                "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                                "Referer": "https://carry.m.jd.com/",
                                "Cookie": this.user.cookie
                            })];
                    case 5:
                        res = _g.sent();
                        if (!!(res.helpResult && res.helpResult.code)) return [3 /*break*/, 6];
                        this.o2s(res, '助力出错');
                        return [3 /*break*/, 15];
                    case 6:
                        if (!(res.helpResult.code === '0')) return [3 /*break*/, 14];
                        console.log('助力成功,获得', res.helpResult.salveHelpAddWater);
                        i = 0;
                        _g.label = 7;
                    case 7:
                        if (!(i < 5)) return [3 /*break*/, 13];
                        _g.label = 8;
                    case 8:
                        _g.trys.push([8, 10, , 12]);
                        return [4 /*yield*/, this.get("https://sharecodepool.cnmb.win/api/runTimes0917?activityId=farm&sharecode=".concat(myCode, "&today=").concat(Date.now().toString()))];
                    case 9:
                        runTimes = _g.sent();
                        console.log(runTimes);
                        return [3 /*break*/, 13];
                    case 10:
                        e_2 = _g.sent();
                        console.log(e_2.message);
                        return [4 /*yield*/, this.wait(this.getRandomNumberByRange(10000, 20000))];
                    case 11:
                        _g.sent();
                        return [3 /*break*/, 12];
                    case 12:
                        i++;
                        return [3 /*break*/, 7];
                    case 13: return [3 /*break*/, 15];
                    case 14:
                        if (res.helpResult.code === '7') {
                            console.log('不给自己助力');
                            this.user['code'] = code;
                        }
                        else if (res.helpResult.code === '9') {
                            console.log('已助力');
                        }
                        else if (res.helpResult.code === '10') {
                            console.log('已满');
                            full.push(code);
                        }
                        _g.label = 15;
                    case 15:
                        if (!(res.helpResult.remainTimes === 0)) return [3 /*break*/, 17];
                        console.log('上限');
                        return [4 /*yield*/, this.wait(10000)];
                    case 16:
                        _g.sent();
                        return [3 /*break*/, 20];
                    case 17: return [4 /*yield*/, this.wait(10000)];
                    case 18:
                        _g.sent();
                        _g.label = 19;
                    case 19:
                        _b++;
                        return [3 /*break*/, 4];
                    case 20: return [3 /*break*/, 23];
                    case 21:
                        e_3 = _g.sent();
                        console.log(e_3.message);
                        return [4 /*yield*/, this.wait(10000)];
                    case 22:
                        _g.sent();
                        return [3 /*break*/, 23];
                    case 23: return [4 /*yield*/, this.wait(5000)];
                    case 24:
                        _g.sent();
                        _g.label = 25;
                    case 25:
                        _i++;
                        return [3 /*break*/, 1];
                    case 26:
                        _c = 0, users_2 = users;
                        _g.label = 27;
                    case 27:
                        if (!(_c < users_2.length)) return [3 /*break*/, 43];
                        user = users_2[_c];
                        _g.label = 28;
                    case 28:
                        _g.trys.push([28, 38, , 40]);
                        this.user = user;
                        this.user.UserAgent = "jdapp;iPhone;10.2.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat(this.randPhoneId(), ";network/4g;model/iPhone11,8;addressid/1188016812;appBuild/167724;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS ").concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1");
                        return [4 /*yield*/, this.get("https://api.m.jd.com/api?functionId=farmAssistInit&body=".concat(encodeURIComponent(JSON.stringify({ "version": 14, "channel": 1, "babelChannel": "120" })), "&appid=wh5&clientVersion=9.1.0"), {
                                "accept": "*/*",
                                "accept-encoding": "gzip, deflate, br",
                                "accept-language": "zh-CN,zh;q=0.9",
                                "cache-control": "no-cache",
                                "cookie": this.user.cookie,
                                "origin": "https://home.m.jd.com",
                                "pragma": "no-cache",
                                "referer": "https://home.m.jd.com/myJd/newhome.action",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-site",
                                "User-Agent": this.user.UserAgent,
                                "Content-Type": "application/x-www-form-urlencoded"
                            })];
                    case 29:
                        res = _g.sent();
                        if (!(res.code === '0')) return [3 /*break*/, 36];
                        this.o2s(res);
                        assistFriendList = res.assistFriendList.length;
                        farmAssistInit_waterEnergy = 0;
                        _d = 0, _e = res.assistStageList;
                        _g.label = 30;
                    case 30:
                        if (!(_d < _e.length)) return [3 /*break*/, 35];
                        t = _e[_d];
                        if (!(t.stageStaus === 2)) return [3 /*break*/, 33];
                        return [4 /*yield*/, this.get("https://api.m.jd.com/api?functionId=receiveStageEnergy&body=".concat(encodeURIComponent(JSON.stringify({ "version": 14, "channel": 1, "babelChannel": "120" })), "&appid=wh5"), {
                                "Host": "api.m.jd.com",
                                "Accept": "*/*",
                                "Origin": "https://carry.m.jd.com",
                                "Accept-Encoding": "gzip, deflate, br",
                                "User-Agent": this.user.UserAgent,
                                "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                                "Referer": "https://carry.m.jd.com/",
                                "Cookie": this.user.cookie
                            })];
                    case 31:
                        _g.sent();
                        console.log('收获助力💧', t.waterEnergy);
                        return [4 /*yield*/, this.wait(3000)];
                    case 32:
                        _g.sent();
                        farmAssistInit_waterEnergy += t.waterEnergy;
                        return [3 /*break*/, 34];
                    case 33:
                        if (t.stageStaus === 3) {
                            farmAssistInit_waterEnergy += t.waterEnergy;
                        }
                        _g.label = 34;
                    case 34:
                        _d++;
                        return [3 /*break*/, 30];
                    case 35:
                        console.log('收到助力', assistFriendList);
                        console.log('助力已领取', farmAssistInit_waterEnergy);
                        message += "\u8D26\u53F7".concat(this.user.index + 1, " ").concat(this.user.UserName, "\n\u6536\u5230\u52A9\u529B").concat(assistFriendList, "\n\u52A9\u529B\u5DF2\u9886\u53D6").concat(farmAssistInit_waterEnergy, "\n\n");
                        return [3 /*break*/, 37];
                    case 36:
                        this.o2s(res, 'initForFarm error');
                        _g.label = 37;
                    case 37: return [3 /*break*/, 40];
                    case 38:
                        e_4 = _g.sent();
                        console.log(e_4.message);
                        return [4 /*yield*/, this.wait(5000)];
                    case 39:
                        _g.sent();
                        return [3 /*break*/, 40];
                    case 40: return [4 /*yield*/, this.wait(5000)];
                    case 41:
                        _g.sent();
                        _g.label = 42;
                    case 42:
                        _c++;
                        return [3 /*break*/, 27];
                    case 43:
                        _f = message;
                        if (!_f) return [3 /*break*/, 45];
                        return [4 /*yield*/, (0, sendNotify_1.sendNotify)("农场助力", message)];
                    case 44:
                        _f = (_g.sent());
                        _g.label = 45;
                    case 45:
                        _f;
                        return [2 /*return*/];
                }
            });
        });
    };
    return Jd_fruit_help;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_fruit_help().init().then();
