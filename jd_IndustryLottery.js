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
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var dotenv = require("dotenv");
var notify = require('./sendNotify');
var USER_AGENT = 'jdpingou';
dotenv.config();
var cookie = '', res = '';
var UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, _a, isLogin, nickName, k, _i, _b, t, body, j;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _c.sent();
                i = 0;
                _c.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 22];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.TotalBean)(cookie)];
            case 3:
                _a = _c.sent(), isLogin = _a.isLogin, nickName = _a.nickName;
                if (!isLogin) {
                    notify.sendNotify(__filename.split('/').pop(), "cookie\u5DF2\u5931\u6548\n\u4EAC\u4E1C\u8D26\u53F7" + index + "\uFF1A" + (nickName || UserName));
                    return [3 /*break*/, 21];
                }
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + (nickName || UserName) + "\n");
                k = 0;
                _c.label = 4;
            case 4:
                if (!(k < 10)) return [3 /*break*/, 15];
                return [4 /*yield*/, getTask()];
            case 5:
                res = _c.sent();
                _i = 0, _b = res.data.taskConfig;
                _c.label = 6;
            case 6:
                if (!(_i < _b.length)) return [3 /*break*/, 12];
                t = _b[_i];
                if (!(t.itemCount !== t.finishCount)) return [3 /*break*/, 11];
                body = {
                    "configCode": "e1a458713a854e2abb1db2772e540532",
                    "taskType": t.taskType,
                    "itemId": t.taskItem.itemId
                };
                return [4 /*yield*/, api('doTask', body)];
            case 7:
                res = _c.sent();
                console.log(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 8:
                _c.sent();
                return [4 /*yield*/, api("getReward", body)];
            case 9:
                res = _c.sent();
                console.log(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.viewTime * 1000)];
            case 10:
                _c.sent();
                return [3 /*break*/, 12];
            case 11:
                _i++;
                return [3 /*break*/, 6];
            case 12: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 13:
                _c.sent();
                _c.label = 14;
            case 14:
                k++;
                return [3 /*break*/, 4];
            case 15: return [4 /*yield*/, getTask()];
            case 16:
                res = _c.sent();
                console.log("\u6709" + res.data.chanceLeft + "\u6B21\u62BD\u5956\u673A\u4F1A");
                j = 0;
                _c.label = 17;
            case 17:
                if (!(j < res.data.chanceLeft)) return [3 /*break*/, 21];
                return [4 /*yield*/, join()];
            case 18:
                _c.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 19:
                _c.sent();
                _c.label = 20;
            case 20:
                j++;
                return [3 /*break*/, 17];
            case 21:
                i++;
                return [3 /*break*/, 2];
            case 22: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://jdjoy.jd.com/module/task/draw/" + fn, body, {
                        headers: {
                            'Host': 'jdjoy.jd.com',
                            'Referer': 'https://prodev.m.jd.com/mall/active/ebLz35DwiVumB6pcrGkqmnhCgmC/index.html',
                            'User-Agent': USER_AGENT,
                            'Origin': 'https://prodev.m.jd.com',
                            'Content-Type': 'application/json',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
function getTask() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://jdjoy.jd.com/module/task/draw/get?configCode=e1a458713a854e2abb1db2772e540532&unionCardCode=", {
                        headers: { 'user-agent': USER_AGENT, 'cookie': cookie }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
function join() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://jdjoy.jd.com/module/task/draw/join?configCode=e1a458713a854e2abb1db2772e540532&fp=&eid=", {
                        headers: { 'user-agent': USER_AGENT, 'cookie': cookie }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    console.log("\u62BD\u4E2D\uFF1A" + data.data.rewardName);
                    return [2 /*return*/];
            }
        });
    });
}
