"use strict";
/**
 * 微信小程序签到红包
 * FP_9A38A
 * cron: 8 10 * * *
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
var h5st_pro_1 = require("./utils/h5st_pro");
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var Jd_wechat_sign = /** @class */ (function (_super) {
    __extends(Jd_wechat_sign, _super);
    function Jd_wechat_sign() {
        return _super.call(this, "微信签到") || this;
    }
    Jd_wechat_sign.prototype.init = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, _c, e_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 4, , 5]);
                        _b = this;
                        if (!((_a = process.env.FP_9A38A) !== null && _a !== void 0)) return [3 /*break*/, 1];
                        _c = _a;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.getFp()];
                    case 2:
                        _c = _d.sent();
                        _d.label = 3;
                    case 3:
                        _b.fp = _c;
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _d.sent();
                        console.log('FP Error: ', e_1.message);
                        process.exit(0);
                        return [3 /*break*/, 5];
                    case 5: return [4 /*yield*/, this.run(this)];
                    case 6:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_wechat_sign.prototype.task = function (fn, body, signComponent) {
        return __awaiter(this, void 0, void 0, function () {
            var h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.h5stTool.__genH5st({
                            appid: "hot_channel",
                            body: JSON.stringify(body),
                            client: "android",
                            clientVersion: "7.22.240",
                            functionId: signComponent
                        })];
                    case 1:
                        h5st = _a.sent();
                        return [4 /*yield*/, this.post("https://api.m.jd.com/scanTask/".concat(fn), "client=android&clientVersion=7.22.240&functionId=".concat(signComponent, "&appid=hot_channel&body=").concat(encodeURIComponent(JSON.stringify(body)), "&h5st=").concat(h5st), {
                                'Host': 'api.m.jd.com',
                                'wqreferer': 'http://wq.jd.com/wxapp/pages/market/market2/index',
                                'User-Agent': this.user.UserAgent,
                                'Referer': 'https://servicewechat.com/wx91d27dbf599dff74/664/page-frame.html',
                                'Cookie': this.user.cookie
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_wechat_sign.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        this.user = user;
                        this.user.UserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c2b) NetType/WIFI Language/zh_CN");
                        res = void 0, data = void 0;
                        this.h5stTool = new h5st_pro_1.H5ST("9a38a", this.user.UserAgent, this.fp, 'http://wq.jd.com/wxapp/pages/market/market2/index', 'http://wq.jd.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.task('doSignTask', { "activityId": "10004", "version": 1 }, 'SignComponent_doSignTask')];
                    case 2:
                        res = _a.sent();
                        res.success ? console.log('签到奖励', res.data.rewardList[0].discount) : console.log(res.message);
                        this.h5stTool = new h5st_pro_1.H5ST("2b5bc", this.user.UserAgent, this.fp, 'http://wq.jd.com/wxapp/pages/market/market2/index', 'http://wq.jd.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.task('querySignList', { "activityId": "10004", "version": 1 }, 'SignComponent_querySignList')];
                    case 4:
                        res = _a.sent();
                        if (!!res.data.scanTaskInfo.completionFlag) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.task('startScanTask', { "itemId": res.data.scanTaskInfo.itemId, "activityId": "10004", "scanAssignmentId": res.data.scanTaskInfo.scanAssignmentId, "actionType": 1, "version": 1 }, 'SignComponent_doScanTask')];
                    case 5:
                        data = _a.sent();
                        console.log('开始任务', data.message || res.success);
                        return [4 /*yield*/, this.wait(8000)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.task('startScanTask', { "activityId": "10004", "actionType": 0, "scanAssignmentId": res.data.scanTaskInfo.scanAssignmentId, "itemId": res.data.scanTaskInfo.itemId, "version": 1 }, 'SignComponent_doScanTask')];
                    case 7:
                        data = _a.sent();
                        console.log('领取奖励', data.data.rewardList[0].discount);
                        _a.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        e_2 = _a.sent();
                        console.log(e_2.message);
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_wechat_sign;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_wechat_sign().init().then();
