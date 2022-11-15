"use strict";
/**
 * 宠汪汪-助力
 * cron: 15 8,12 * * *
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
var h5st_pro_1 = require("./utils/h5st_pro");
var Jd_cww_help = /** @class */ (function (_super) {
    __extends(Jd_cww_help, _super);
    function Jd_cww_help() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        _this.fp = undefined;
        return _this;
    }
    Jd_cww_help.prototype.init = function () {
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
    Jd_cww_help.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now().toString();
                        return [4 /*yield*/, this.h5stTool.__genH5st({
                                'appid': 'choujiangyingyong',
                                'body': JSON.stringify(body),
                                'client': 'macOS 12.6.0',
                                'clientVersion': '3.5.5',
                                'functionId': fn,
                                't': timestamp.toString()
                            })];
                    case 1:
                        h5st = _a.sent();
                        url = "https://api.m.jd.com/api?client=macOS%2012.6.0&clientVersion=3.5.5&appid=choujiangyingyong&t=".concat(timestamp, "&functionId=").concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&h5st=").concat(h5st);
                        return [4 /*yield*/, this.get(url, {
                                'Host': 'api.m.jd.com',
                                'User-Agent': this.user.UserAgent,
                                'Referer': 'https://servicewechat.com/wxccb5c536b0ecd1bf/854/page-frame.html',
                                'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                                'Content-Type': 'application/json',
                                'Cookie': this.user.cookie
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_cww_help.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(user.index);
                return [2 /*return*/];
            });
        });
    };
    Jd_cww_help.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var full, _a, _i, users_1, user, res, _b, users_2, code;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        full = [];
                        _a = this;
                        return [4 /*yield*/, this.getFp()];
                    case 1:
                        _a.fp = _c.sent();
                        _i = 0, users_1 = users;
                        _c.label = 2;
                    case 2:
                        if (!(_i < users_1.length)) return [3 /*break*/, 9];
                        user = users_1[_i];
                        this.user = user;
                        this.user.UserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac");
                        res = void 0;
                        this.h5stTool = new h5st_pro_1.H5ST('538b4', this.user.UserAgent, this.fp, "https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html", "https://h5.m.jd.com/");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 3:
                        _c.sent();
                        _b = 0, users_2 = users;
                        _c.label = 4;
                    case 4:
                        if (!(_b < users_2.length)) return [3 /*break*/, 8];
                        code = users_2[_b];
                        if (user.UserName === code.UserName || full.includes(code.UserName))
                            return [3 /*break*/, 7];
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code.UserName));
                        return [4 /*yield*/, this.api('helpFriend', { "friendPin": code.UserName, "reqSource": "weapp" })];
                    case 5:
                        res = _c.sent();
                        return [4 /*yield*/, this.wait(2000)];
                    case 6:
                        _c.sent();
                        console.log(res.errorCode);
                        if (res.errorCode === 'invite_full')
                            full.push(code.UserName);
                        if (res.errorCode === 'help_full')
                            return [3 /*break*/, 8];
                        _c.label = 7;
                    case 7:
                        _b++;
                        return [3 /*break*/, 4];
                    case 8:
                        _i++;
                        return [3 /*break*/, 2];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_cww_help;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_cww_help().init().then();
