"use strict";
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
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var Jd_necklace = /** @class */ (function (_super) {
    __extends(Jd_necklace, _super);
    function Jd_necklace() {
        var _this = _super.call(this) || this;
        _this.random = '';
        _this.log = '';
        return _this;
    }
    Jd_necklace.prototype.init = function () {
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
    Jd_necklace.prototype.getLog = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get("http://127.0.0.1/?key=".concat(key))];
                    case 1:
                        data = _a.sent();
                        this.random = data.match(/"random":"(\d+)"/)[1];
                        this.log = data.match(/"log":"(.*)"/)[1];
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_necklace.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.post("https://api.m.jd.com/api?appid=coupon-necklace&functionId=".concat(fn, "&loginType=2&t=").concat(Date.now()), new URLSearchParams({
                        'body': JSON.stringify(__assign({ "extraData": {
                                "log": this.log,
                                "sceneid": "DDhomePageh5"
                            }, "random": this.random }, body))
                    }), {
                        'Host': 'api.m.jd.com',
                        'Origin': 'https://h5.m.jd.com',
                        'User-Agent': "jdapp;android;10.5.4;;;appBuild/96906;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A1654346742272%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22CJO%3D%22%2C%22ad%22%3A%22ZWDuCwU2DQYzYWCyZWO4Yq%3D%3D%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22CzK%3D%22%2C%22ud%22%3A%22ZWDuCwU2DQYzYWCyZWO4Yq%3D%3D%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 11; sdk_gphone_arm64 Build/RSR1.201216.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36",
                        'Referer': 'https://h5.m.jd.com/',
                        'Cookie': this.cookie
                    })];
            });
        });
    };
    Jd_necklace.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, _i, _a, t;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.cookie = user.cookie;
                        return [4 /*yield*/, this.api('necklace_taskHomePage', {})];
                    case 1:
                        res = _b.sent();
                        this.o2s(res);
                        _i = 0, _a = res.data.result.taskConfigVos;
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 7];
                        t = _a[_i];
                        if (!([416, 417, 418, 420].includes(t.id) && t.taskStage === 0)) return [3 /*break*/, 6];
                        console.log(t.taskName);
                        return [4 /*yield*/, this.getLog("necklace_startTask_".concat(t.id))];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.api('necklace_startTask', { "taskId": t.id })];
                    case 4:
                        data = _b.sent();
                        if (data.rtn_code !== 403) {
                            console.log('任务领取成功');
                        }
                        else {
                            console.log(data.rtn_msg);
                            return [3 /*break*/, 7];
                        }
                        return [4 /*yield*/, this.wait(2000)];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 2];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_necklace;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_necklace().init().then();
