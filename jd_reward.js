"use strict";
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
/**
 *
 * Running time limit:
 * s >= 58 or s <= 30  => exchange()
 * s > 30 and s < 58  =>  wait...
 *
 */
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var fs = require("fs");
var notify = require('./sendNotify');
var $ = {};
var cookie = '', validate = '', UserName, index;
var target = process.env.JD_JOY_REWARD_NAME ? parseInt(process.env.JD_JOY_REWARD_NAME) : 500;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var validate_arr, cookiesArr, i, _a, isLogin, nickName, tasks, h, config, _i, config_1, bean;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                validate_arr = fs.readFileSync('./validate.txt', 'utf-8');
                if (validate_arr.indexOf('\n')) {
                    validate_arr = validate_arr.split('\n');
                    validate_arr.pop();
                }
                return [4 /*yield*/, TS_USER_AGENTS_1.requireConfig()];
            case 1:
                cookiesArr = _b.sent();
                i = 0;
                _b.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 9];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                return [4 /*yield*/, TS_USER_AGENTS_1.TotalBean(cookie)];
            case 3:
                _a = _b.sent(), isLogin = _a.isLogin, nickName = _a.nickName;
                if (!isLogin) {
                    notify.sendNotify(__filename.split('/').pop(), "cookie\u5DF2\u5931\u6548\n\u4EAC\u4E1C\u8D26\u53F7" + index + "\uFF1A" + (nickName || UserName));
                    return [3 /*break*/, 8];
                }
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + $.index + "\u3011" + ($.nickName || $.UserName) + "\n");
                if (i < validate_arr.length)
                    validate = validate_arr[i];
                else {
                    console.log('预存验证码不够用，退出！');
                    return [3 /*break*/, 9];
                }
                return [4 /*yield*/, init()];
            case 4:
                tasks = _b.sent();
                h = new Date().getHours();
                config = void 0;
                if (h >= 0 && h < 8)
                    config = tasks.data['beanConfigs0'];
                if (h >= 8 && h < 16)
                    config = tasks.data['beanConfigs8'];
                if (h >= 16 && h < 24)
                    config = tasks.data['beanConfigs16'];
                _i = 0, config_1 = config;
                _b.label = 5;
            case 5:
                if (!(_i < config_1.length)) return [3 /*break*/, 8];
                bean = config_1[_i];
                console.log(bean.id, bean.giftName, bean.leftStock);
                if (!(bean.giftValue === target)) return [3 /*break*/, 7];
                return [4 /*yield*/, exchange(bean.id)];
            case 6:
                _b.sent();
                _b.label = 7;
            case 7:
                _i++;
                return [3 /*break*/, 5];
            case 8:
                i++;
                return [3 /*break*/, 2];
            case 9: return [2 /*return*/];
        }
    });
}); })();
function init() {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://jdjoy.jd.com/common/gift/getBeanConfigs?reqSource=h5&invokeKey=qRKHmL4sna8ZOP9F&validate=" + validate, {
                        headers: {
                            'Host': 'jdjoy.jd.com',
                            'content-type': 'application/json',
                            'origin': 'https://h5.m.jd.com',
                            "User-Agent": TS_USER_AGENTS_1["default"],
                            'referer': 'https://jdjoy.jd.com/',
                            'cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    resolve(data);
                    return [2 /*return*/];
            }
        });
    }); });
}
function exchange(beanId) {
    var _this = this;
    console.log('exchange()');
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var s, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!1) return [3 /*break*/, 4];
                    s = new Date().getSeconds();
                    if (!(s >= 58 || s <= 30)) return [3 /*break*/, 1];
                    return [3 /*break*/, 4];
                case 1: return [4 /*yield*/, TS_USER_AGENTS_1.wait(500)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [3 /*break*/, 0];
                case 4: return [4 /*yield*/, axios_1["default"].post("https://jdjoy.jd.com/common/gift/new/exchange?reqSource=h5&invokeKey=qRKHmL4sna8ZOP9F&validate=" + validate, JSON.stringify({ "buyParam": { "orderSource": 'pet', "saleInfoId": beanId }, "deviceInfo": {} }), {
                        headers: {
                            "Host": "jdjoy.jd.com",
                            "Accept-Language": "zh-cn",
                            "Content-Type": "application/json",
                            "Origin": "https://jdjoy.jd.com",
                            "User-Agent": TS_USER_AGENTS_1["default"],
                            "Referer": "https://jdjoy.jd.com/pet/index",
                            "Cookie": cookie
                        }
                    })];
                case 5:
                    data = (_a.sent()).data;
                    console.log(data);
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
}
