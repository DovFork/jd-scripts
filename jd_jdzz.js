"use strict";
/**
 * 小程序-赚赚
 * cron: 30 9 * * *
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var Jdzz = /** @class */ (function (_super) {
    __extends(Jdzz, _super);
    function Jdzz() {
        return _super.call(this) || this;
    }
    Jdzz.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(new Jdzz())];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jdzz.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, res, _i, _a, t, taskItem;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        headers = {
                            'Host': 'api.m.jd.com',
                            'wqreferer': 'https://wq.jd.com/wxapp/pages/hd-interaction/task/index',
                            'User-Agent': 'MQQBrowser/26 Mozilla/5.0 (Linux; U; Android 2.3.7; zh-cn; MB200 Build/GRJ22; CyanogenMod-7) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
                            'Referer': 'https://servicewechat.com/wx8830763b00c18ac3/115/page-frame.html',
                            'Content-Type': 'application/json',
                            'Cookie': user.cookie
                        };
                        return [4 /*yield*/, this.get("https://api.m.jd.com/client.action?functionId=interactTaskIndex&body=%7B%22mpVersion%22%3A%223.4.0%22%7D&appid=wh5&loginWQBiz=interact&g_ty=ls&g_tk=".concat(this.getRandomNumString(9)), headers)];
                    case 1:
                        res = _b.sent();
                        console.log(res.data.cashExpected);
                        _i = 0, _a = res.data.taskDetailResList;
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        t = _a[_i];
                        if (!(t.status === 1)) return [3 /*break*/, 5];
                        console.log(t.taskName);
                        taskItem = __assign(__assign({}, t), { "fullTaskName": "".concat(t.taskName, " (0/1)"), "btnText": "去完成" });
                        return [4 /*yield*/, this.get("https://api.m.jd.com/client.action?functionId=doInteractTask&body=".concat(encodeURIComponent(JSON.stringify({ "taskId": t.taskId, "taskItem": taskItem, "actionType": 0, "taskToken": t.taskToken, "mpVersion": "3.4.0" })), "&appid=wh5&loginWQBiz=interact&g_ty=ls&g_tk=").concat(this.getRandomNumString(9)), headers)];
                    case 3:
                        res = _b.sent();
                        console.log(res.message);
                        return [4 /*yield*/, this.wait(2000)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 2];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return Jdzz;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jdzz().init().then();
