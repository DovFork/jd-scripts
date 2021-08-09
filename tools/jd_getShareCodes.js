"use strict";
/**
 * cron: 0 23 * * *
 * 查看助力码和助力次数
 */
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
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("../TS_USER_AGENTS");
var notify = require('../sendNotify');
var cookie = '', res = '', UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, _a, isLogin, nickName;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, TS_USER_AGENTS_1.requireConfig()];
            case 1:
                cookiesArr = _b.sent();
                i = 0;
                _b.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 6];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                return [4 /*yield*/, TS_USER_AGENTS_1.TotalBean(cookie)];
            case 3:
                _a = _b.sent(), isLogin = _a.isLogin, nickName = _a.nickName;
                if (!isLogin) {
                    notify.sendNotify(__filename.split('/').pop(), "cookie\u5DF2\u5931\u6548\n\u4EAC\u4E1C\u8D26\u53F7" + index + "\uFF1A" + (nickName || UserName));
                    return [3 /*break*/, 5];
                }
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + (nickName || UserName) + "\n");
                return [4 /*yield*/, carnivalcity()];
            case 4:
                _b.sent();
                _b.label = 5;
            case 5:
                i++;
                return [3 /*break*/, 2];
            case 6: return [2 /*return*/];
        }
    });
}); })();
function carnivalcity() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post('https://api.m.jd.com/api', "appid=guardian-starjd&functionId=carnivalcity_jd_prod&body=" + escape(JSON.stringify({ apiMapping: "/khc/task/getSupport" })) + "&t=" + Date.now() + "&loginType=2", {
                        headers: {
                            "Accept": "application/json, text/plain, */*",
                            "Accept-Encoding": "gzip, deflate, br",
                            "Accept-Language": "zh-cn",
                            "Connection": "keep-alive",
                            "Content-Type": "application/x-www-form-urlencoded",
                            "Origin": "https://carnivalcity.m.jd.com",
                            "Referer": "https://carnivalcity.m.jd.com/",
                            "Cookie": cookie,
                            "User-Agent": TS_USER_AGENTS_1["default"]
                        }
                    })];
                case 1:
                    res = _a.sent();
                    console.log('carnivalcity:', res.data.data.shareId);
                    return [4 /*yield*/, axios_1["default"].post('https://api.m.jd.com/api', "appid=guardian-starjd&functionId=carnivalcity_jd_prod&body=" + escape(JSON.stringify({ apiMapping: "/khc/index/supportList" })) + "&t=" + Date.now() + "&loginType=2", {
                            headers: {
                                "Accept": "application/json, text/plain, */*",
                                "Accept-Encoding": "gzip, deflate, br",
                                "Accept-Language": "zh-cn",
                                "Connection": "keep-alive",
                                "Content-Type": "application/x-www-form-urlencoded",
                                "Origin": "https://carnivalcity.m.jd.com",
                                "Referer": "https://carnivalcity.m.jd.com/",
                                "Cookie": cookie,
                                "User-Agent": TS_USER_AGENTS_1["default"]
                            }
                        })];
                case 2:
                    res = _a.sent();
                    console.log('被助力：', res.data.data.supportedNums, '/', res.data.data.supportNeedNums);
                    return [2 /*return*/];
            }
        });
    });
}
