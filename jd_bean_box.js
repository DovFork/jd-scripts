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
 * cron: 0 9,12 * * *
 */
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var dotenv = require("dotenv");
var notify = require('./sendNotify');
dotenv.config();
var cookie = '', res = '', UserName, index, id = randomString(40);
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, _a, isLogin, nickName, j, homeRes, homeRes, _i, _b, t, e_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _c.sent();
                i = 0;
                _c.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 25];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.TotalBean)(cookie)];
            case 3:
                _a = _c.sent(), isLogin = _a.isLogin, nickName = _a.nickName;
                if (!isLogin) {
                    notify.sendNotify(__filename.split('/').pop(), "cookie\u5DF2\u5931\u6548\n\u4EAC\u4E1C\u8D26\u53F7" + index + "\uFF1A" + (nickName || UserName));
                    return [3 /*break*/, 24];
                }
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + (nickName || UserName) + "\n");
                j = 0;
                _c.label = 4;
            case 4:
                if (!(j < 3)) return [3 /*break*/, 24];
                console.log("Round:" + (j + 1));
                return [4 /*yield*/, api('beanTaskList', { "viewChannel": "AppHome" })];
            case 5:
                res = _c.sent();
                _c.label = 6;
            case 6:
                _c.trys.push([6, 20, 21, 23]);
                if (!!res.data.viewAppHome.takenTask) return [3 /*break*/, 8];
                return [4 /*yield*/, api('beanHomeIconDoTask', { "flag": "0", "viewChannel": "AppHome" })];
            case 7:
                homeRes = _c.sent();
                console.log(homeRes.data.remindMsg);
                _c.label = 8;
            case 8:
                if (!!res.data.viewAppHome.doneTask) return [3 /*break*/, 10];
                return [4 /*yield*/, api('beanHomeIconDoTask', { "flag": "1", "viewChannel": "AppHome" })];
            case 9:
                homeRes = _c.sent();
                console.log(homeRes.data.remindMsg);
                _c.label = 10;
            case 10:
                _i = 0, _b = res.data.taskInfos;
                _c.label = 11;
            case 11:
                if (!(_i < _b.length)) return [3 /*break*/, 19];
                t = _b[_i];
                if (!(t.status === 1)) return [3 /*break*/, 18];
                console.log(t.taskName);
                return [4 /*yield*/, api('beanDoTask', {
                        "actionType": t.taskType === 3 ? 0 : 1,
                        "taskToken": t.subTaskVOS[0].taskToken
                    })];
            case 12:
                res = _c.sent();
                if (res.data.bizMsg)
                    console.log(res.data.bizMsg);
                else {
                    console.log(res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 13:
                _c.sent();
                if (!(t.taskType !== 3)) return [3 /*break*/, 16];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1500)];
            case 14:
                _c.sent();
                return [4 /*yield*/, api('beanDoTask', { "actionType": 0, "taskToken": t.subTaskVOS[0].taskToken })];
            case 15:
                res = _c.sent();
                if (res.data.bizMsg)
                    console.log(res.data.bizMsg);
                _c.label = 16;
            case 16: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 17:
                _c.sent();
                _c.label = 18;
            case 18:
                _i++;
                return [3 /*break*/, 11];
            case 19: return [3 /*break*/, 23];
            case 20:
                e_1 = _c.sent();
                return [3 /*break*/, 23];
            case 21: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 22:
                _c.sent();
                return [7 /*endfinally*/];
            case 23:
                j++;
                return [3 /*break*/, 4];
            case 24:
                i++;
                return [3 /*break*/, 2];
            case 25: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://api.m.jd.com/client.action?functionId=" + fn + "&body=" + encodeURIComponent(JSON.stringify(body)) + "&appid=ld&client=m&uuid=" + id + "&openudid=" + id, {
                        headers: {
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Host': 'api.m.jd.com',
                            'Connection': 'keep-alive',
                            'Accept-Language': 'zh-cn',
                            'Referer': 'https://h5.m.jd.com/rn/42yjy8na6pFsq1cx9MJQ5aTgu3kX/index.html',
                            'Cookie': cookie
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
function randomString(e) {
    e = e || 32;
    var t = "abcdefhijkmnprstwxyz123456789", a = t.length, n = "";
    for (var i = 0; i < e; i++)
        n += t.charAt(Math.floor(Math.random() * a));
    return n;
}
