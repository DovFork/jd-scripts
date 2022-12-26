"use strict";
/**
 * 京东-种豆-助力
 * 所有CK助力顺序
 * 内部 -> 助力池
 * cron: 15 7-21/2 * * *
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
var h5st_pro_1 = require("./utils/h5st_pro");
var Jd_plantBean__help = /** @class */ (function (_super) {
    __extends(Jd_plantBean__help, _super);
    function Jd_plantBean__help() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        _this.fp = undefined;
        return _this;
    }
    Jd_plantBean__help.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        _a = this;
                        _b = process.env.FP_6B93E;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getFp()];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        _a.fp = _b;
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _c.sent();
                        console.log(e_1.message);
                        this.exit();
                        return [3 /*break*/, 4];
                    case 4: return [4 /*yield*/, this.run(this)];
                    case 5:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_plantBean__help.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var h5st, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.h5stTool.__genH5st({
                            'appid': 'signed_wh5',
                            'body': JSON.stringify(body),
                            'client': 'apple',
                            'clientVersion': '11.3.6',
                            'functionId': fn
                        })];
                    case 1:
                        h5st = _a.sent();
                        return [4 /*yield*/, this.get("https://api.m.jd.com/client.action?functionId=".concat(fn, "&appid=signed_wh5&body=").concat(encodeURIComponent(JSON.stringify(body)), "&client=apple&clientVersion=11.3.6&h5st=").concat(h5st, "&jsonp=jsonp_").concat(Date.now(), "_").concat(this.getRandomNumberByRange(12345, 56789)), {
                                'Host': 'api.m.jd.com',
                                'User-Agent': this.user.UserAgent,
                                'Referer': 'https://plantearth.m.jd.com/',
                                'Cookie': this.user.cookie
                            })];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, JSON.parse(data.match(/jsonp_.*\((.*)\)/)[1])];
                }
            });
        });
    };
    Jd_plantBean__help.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, code, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        this.user = user;
                        this.user.UserAgent = "jdapp;iPhone;11.3.6;;;M/5.0;appBuild/168392;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;");
                        this.h5stTool = new h5st_pro_1.H5ST('6b93e', this.user.UserAgent, this.fp, 'https://plantearth.m.jd.com/plantBean/index?source=lingjingdoushouye', 'https://plantearth.m.jd.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.api('plantBeanIndex', { "monitor_source": "plant_m_plant_index", "monitor_refer": "", "version": "9.2.4.2" })];
                    case 2:
                        res = _a.sent();
                        code = res.data.jwordShareInfo.shareUrl.match(/plantUuid=(\w+)/)[1];
                        console.log('助力码', code);
                        return [4 /*yield*/, this.api('plantShareSupportList', { "roundId": "" })];
                    case 3:
                        res = _a.sent();
                        console.log('收到助力', res.data.length);
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        console.log(e_2.message);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Jd_plantBean__help.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var res, full, _i, users_1, user, shareCodePool, shareCode, _a, shareCode_1, code, e_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.o2s(this.shareCodeSelf, '内部助力');
                        full = [];
                        _i = 0, users_1 = users;
                        _b.label = 1;
                    case 1:
                        if (!(_i < users_1.length)) return [3 /*break*/, 13];
                        user = users_1[_i];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 10, , 12]);
                        this.user = user;
                        this.user.UserAgent = "jdapp;iPhone;11.3.6;;;M/5.0;appBuild/168392;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;");
                        this.h5stTool = new h5st_pro_1.H5ST('6b93e', this.user.UserAgent, this.fp, 'https://plantearth.m.jd.com/plantBean/index?source=lingjingdoushouye', 'https://plantearth.m.jd.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.getShareCodePool('bean', 50)];
                    case 4:
                        shareCodePool = _b.sent();
                        shareCode = Array.from(new Set(__spreadArray(__spreadArray([], this.shareCodeSelf, true), shareCodePool, true)));
                        _a = 0, shareCode_1 = shareCode;
                        _b.label = 5;
                    case 5:
                        if (!(_a < shareCode_1.length)) return [3 /*break*/, 9];
                        code = shareCode_1[_a];
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code, " ").concat(this.shareCodeSelf.includes(code) ? '*内部*' : ''));
                        if (full.includes(code)) {
                            console.log('full contains');
                            return [3 /*break*/, 8];
                        }
                        return [4 /*yield*/, this.api('plantBeanIndex', { "plantUuid": code, "monitor_source": "plant_m_plant_index", "monitor_refer": "", "version": "9.2.4.2" })];
                    case 6:
                        res = _b.sent();
                        console.log(res.data.helpShareRes.promptText);
                        if (res.data.helpShareRes.state === '2') {
                            console.log('上限');
                            return [3 /*break*/, 9];
                        }
                        else if (res.data.helpShareRes.state === '3') {
                            full.push(code);
                        }
                        return [4 /*yield*/, this.wait(3000)];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8:
                        _a++;
                        return [3 /*break*/, 5];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        e_3 = _b.sent();
                        console.log(e_3.message);
                        return [4 /*yield*/, this.wait(5000)];
                    case 11:
                        _b.sent();
                        return [3 /*break*/, 12];
                    case 12:
                        _i++;
                        return [3 /*break*/, 1];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_plantBean__help;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_plantBean__help().init().then();
