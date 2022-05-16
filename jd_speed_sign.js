"use strict";
/**
 * 极速版-签到+提现
 * cron: 45 0 * * *
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
exports.__esModule = true;
var h5st_1 = require("./utils/h5st");
var JDHelloWorld2_1 = require("./JDHelloWorld2");
var Speed_Sign = /** @class */ (function (_super) {
    __extends(Speed_Sign, _super);
    function Speed_Sign() {
        return _super.call(this) || this;
    }
    Speed_Sign.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(new Speed_Sign())];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Speed_Sign.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now();
                        h5st = this.h5stTool.__genH5st({
                            appid: 'activities_platform',
                            body: JSON.stringify(body),
                            client: 'H5',
                            clientVersion: '1.0.0',
                            functionId: fn,
                            t: timestamp.toString()
                        });
                        return [4 /*yield*/, this.post('https://api.m.jd.com/', "functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&t=").concat(timestamp, "&appid=activities_platform&client=H5&clientVersion=1.0.0&h5st=").concat(h5st), {
                                'Host': 'api.m.jd.com',
                                'User-Agent': 'jdltapp;android;3.8.16;',
                                'Origin': 'https://daily-redpacket.jd.com',
                                'Referer': 'https://daily-redpacket.jd.com/',
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Cookie': this.cookie
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Speed_Sign.prototype.main = function (user) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var res, _i, _b, t, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.cookie = user.cookie;
                        this.h5stTool = new h5st_1.H5ST("15097", "jdltapp;", (_a = process.env.FP_15097) !== null && _a !== void 0 ? _a : "");
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, this.api('apSignIn_day', { "linkId": "9WA12jYGulArzWS7vcrwhw", "serviceName": "dayDaySignGetRedEnvelopeSignService", "business": 1 })];
                    case 2:
                        res = _c.sent();
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 11, , 12]);
                        if (res.data.retCode === 0) {
                            console.log('签到成功');
                        }
                        else {
                            console.log(res.data.retMessage);
                        }
                        return [4 /*yield*/, this.wait(2000)];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, this.api('signPrizeDetailList', { "linkId": "9WA12jYGulArzWS7vcrwhw", "serviceName": "dayDaySignGetRedEnvelopeSignService", "business": 1, "pageSize": 20, "page": 1 })];
                    case 5:
                        res = _c.sent();
                        _i = 0, _b = res.data.prizeDrawBaseVoPageBean.items;
                        _c.label = 6;
                    case 6:
                        if (!(_i < _b.length)) return [3 /*break*/, 10];
                        t = _b[_i];
                        if (!(t.prizeType === 4 && t.prizeStatus === 0)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.api('apCashWithDraw', { "linkId": "9WA12jYGulArzWS7vcrwhw", "businessSource": "DAY_DAY_RED_PACKET_SIGN", "base": { "prizeType": t.prizeType, "business": t.business, "id": t.id, "poolBaseId": t.poolBaseId, "prizeGroupId": t.prizeGroupId, "prizeBaseId": t.prizeBaseId } })];
                    case 7:
                        res = _c.sent();
                        console.log(parseFloat(t.prizeValue), res.data.message);
                        return [4 /*yield*/, this.wait(2000)];
                    case 8:
                        _c.sent();
                        _c.label = 9;
                    case 9:
                        _i++;
                        return [3 /*break*/, 6];
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        e_1 = _c.sent();
                        console.log('error', e_1);
                        return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    return Speed_Sign;
}(JDHelloWorld2_1.JDHelloWorld));
new Speed_Sign().init().then();
