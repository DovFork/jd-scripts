"use strict";
/**
 * 领京豆-任务
 * cron: 0 9,12 * * *
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
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, times, j, j, _i, _a, t, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _b.sent();
                i = 0;
                _b.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 26];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                return [4 /*yield*/, initForTurntableFarm()];
            case 3:
                res = _b.sent();
                times = res.remainLotteryTimes;
                console.log('剩余抽奖机会:', times);
                j = 0;
                _b.label = 4;
            case 4:
                if (!(j < times)) return [3 /*break*/, 8];
                console.log('开始抽奖...');
                return [4 /*yield*/, initForTurntableFarm(1)];
            case 5:
                res = _b.sent();
                if (res.code === '0') {
                    if (res.type === 'thanks') {
                        console.log('抽奖成功，获得：狗屁');
                    }
                    else {
                        console.log('抽奖成功，获得:', res.type);
                    }
                }
                else {
                    console.log('抽奖失败', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 6:
                _b.sent();
                _b.label = 7;
            case 7:
                j++;
                return [3 /*break*/, 4];
            case 8:
                j = 0;
                _b.label = 9;
            case 9:
                if (!(j < 4)) return [3 /*break*/, 25];
                console.log("Round:" + (j + 1));
                return [4 /*yield*/, api('beanTaskList', { "viewChannel": "AppHome" })];
            case 10:
                res = _b.sent();
                _b.label = 11;
            case 11:
                _b.trys.push([11, 21, , 22]);
                _i = 0, _a = res.data.taskInfos;
                _b.label = 12;
            case 12:
                if (!(_i < _a.length)) return [3 /*break*/, 20];
                t = _a[_i];
                if (!(t.status === 1)) return [3 /*break*/, 19];
                console.log(t.taskName);
                return [4 /*yield*/, api('beanDoTask', {
                        "actionType": t.taskType === 3 ? 0 : 1,
                        "taskToken": t.subTaskVOS[0].taskToken
                    })];
            case 13:
                res = _b.sent();
                if (res.data.bizMsg)
                    console.log(res.data.bizMsg);
                else {
                    console.log(res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 14:
                _b.sent();
                if (!(t.taskType !== 3)) return [3 /*break*/, 17];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1500)];
            case 15:
                _b.sent();
                return [4 /*yield*/, api('beanDoTask', { "actionType": 0, "taskToken": t.subTaskVOS[0].taskToken })];
            case 16:
                res = _b.sent();
                if (res.data.bizMsg)
                    console.log(res.data.bizMsg);
                _b.label = 17;
            case 17: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 18:
                _b.sent();
                _b.label = 19;
            case 19:
                _i++;
                return [3 /*break*/, 12];
            case 20: return [3 /*break*/, 22];
            case 21:
                e_1 = _b.sent();
                console.log('Error!');
                return [3 /*break*/, 22];
            case 22: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 23:
                _b.sent();
                _b.label = 24;
            case 24:
                j++;
                return [3 /*break*/, 9];
            case 25:
                i++;
                return [3 /*break*/, 2];
            case 26: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var sign, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getSign(fn, body)];
                case 1:
                    sign = _a.sent();
                    return [4 /*yield*/, axios_1["default"].get("https://api.m.jd.com/client.action?functionId=" + fn + "&" + sign.data.sign, {
                            headers: {
                                'Host': 'api.m.jd.com',
                                'content-type': 'application/x-www-form-urlencoded',
                                'j-e-c': '',
                                'accept': '*/*',
                                'j-e-h': '',
                                'accept-language': 'zh-Hans-CN;q=1',
                                'referer': '',
                                'user-agent': 'JD4iPhone/167841 (iPhone; iOS; Scale/3.00)',
                                'Cookie': cookie
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
function getSign(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post('https://api.jds.codes/sign', {
                        "fn": fn, "body": body
                    })];
                case 1:
                    data = (_a.sent()).data;
                    if (data.code === 200)
                        return [2 /*return*/, data];
                    else
                        return [2 /*return*/, { code: 500, data: { sign: '' } }];
                    return [2 /*return*/];
            }
        });
    });
}
function initForTurntableFarm(type) {
    if (type === void 0) { type = 0; }
    return __awaiter(this, void 0, void 0, function () {
        var url, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = type === 0
                        ? 'https://api.m.jd.com/client.action?functionId=initForTurntableFarm&body=%7B%22version%22%3A4%2C%22channel%22%3A1%7D&appid=wh5'
                        : 'https://api.m.jd.com/client.action?functionId=lotteryForTurntableFarm&body=%7B%22type%22%3A1%2C%22version%22%3A4%2C%22channel%22%3A1%7D&appid=wh5';
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'api.m.jd.com',
                                'Origin': 'https://h5.m.jd.com',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'Referer': 'https://h5.m.jd.com/',
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
