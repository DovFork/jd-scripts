"use strict";
/**
 * 微信小程序签到红包
 * FP_9A38A
 * cron: 8 0 * * *
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
var JDHelloWorld_1 = require("./JDHelloWorld");
var Wechat_sign = /** @class */ (function (_super) {
    __extends(Wechat_sign, _super);
    function Wechat_sign() {
        return _super.call(this, "微信小程序签到红包") || this;
    }
    Wechat_sign.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(new Wechat_sign())];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Wechat_sign.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var h5stTool, timestamp, h5st, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        h5stTool = new h5st_1.H5ST("9a38a", 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15F79 MicroMessenger/8.0.15(0x18000f2e) NetType/WIFI Language/zh_CN', process.env.FP_9A38A || "");
                        return [4 /*yield*/, h5stTool.__genAlgo()];
                    case 1:
                        _a.sent();
                        timestamp = Date.now();
                        h5st = h5stTool.__genH5st({
                            appid: 'hot_channel',
                            body: JSON.stringify({ "activityId": "10002" }),
                            client: 'android',
                            clientVersion: '7.16.250',
                            functionId: 'SignComponent_doSignTask',
                            t: timestamp.toString()
                        });
                        return [4 /*yield*/, this.post("https://api.m.jd.com/signTask/doSignTask?functionId=SignComponent_doSignTask&appid=hot_channel&body={\"activityId\":\"10002\"}&client=android&clientVersion=7.16.250&t=".concat(timestamp, "&h5st=").concat(h5st), '', {
                                'content-type': 'application/json',
                                'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15F79 MicroMessenger/8.0.15(0x18000f2e) NetType/WIFI Language/zh_CN',
                                'referer': 'https://servicewechat.com/wx91d27dbf599dff74/581/page-frame.html',
                                'cookie': user.cookie
                            })];
                    case 2:
                        res = _a.sent();
                        if (res.data) {
                            console.log('已签到', res.data.signDays, '天，奖励', res.data.rewardValue, '元');
                            return [2 /*return*/, { msg: "\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(user.i + 1, "\u3011  ").concat(user.UserName, "\n\u5DF2\u7B7E\u5230  ").concat(res.data.signDays, "\u5929\n\u5956\u52B1  ").concat(res.data.rewardValue, "\u5143\n\n") }];
                        }
                        else {
                            console.log(res.message);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Wechat_sign;
}(JDHelloWorld_1.JDHelloWorld));
new Wechat_sign().init().then();
