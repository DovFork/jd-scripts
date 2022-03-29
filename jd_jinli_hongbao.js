"use strict";
/**
 * 京东-锦鲤红包
 * 只获取前9CK，再多403
 * 只有助力，红包手动开
 * cron: 1 0,6,18 * * *
 * CK1     HW.ts -> 内部
 * CK2～9  内部   -> HW.ts
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var axios_1 = require("axios");
var sendNotify_1 = require("./sendNotify");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var ts_md5_1 = require("ts-md5");
var cookie = '', cookiesArr = [], res = '', UserName, UA = '';
var shareCodesSelf = [], shareCodes = [], shareCodesHW = [], fullCode = [];
var min = [0.02, 0.12, 0.3, 0.4, 0.6, 0.7, 0.8, 1, 1.2, 2, 3.6];
var log = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)(false)];
            case 1:
                cookiesArr = _a.sent();
                cookiesArr = cookiesArr.slice(0, 9);
                return [4 /*yield*/, join()];
            case 2:
                _a.sent();
                return [4 /*yield*/, getShareCodeSelf()];
            case 3:
                _a.sent();
                return [4 /*yield*/, help()
                    // await open(true)
                ];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
function getShareCodeSelf() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, _a, _b, index, value, e_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _i = 0, _a = cookiesArr.entries();
                    _c.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 7];
                    _b = _a[_i], index = _b[0], value = _b[1];
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 5, , 6]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                    UA = "jdltapp;iPhone;3.1.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat((0, TS_USER_AGENTS_1.randomString)(40));
                    return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
                case 3:
                    res = _c.sent();
                    console.log('红包ID：', res.data.result.redpacketInfo.id);
                    shareCodesSelf.push(res.data.result.redpacketInfo.id);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 4:
                    _c.sent();
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _c.sent();
                    console.log(e_1);
                    return [3 /*break*/, 6];
                case 6:
                    _i++;
                    return [3 /*break*/, 1];
                case 7:
                    (0, TS_USER_AGENTS_1.o2s)(shareCodesSelf);
                    return [2 /*return*/];
            }
        });
    });
}
function join() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, _a, _b, index, value, random, log1, e_2;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _i = 0, _a = cookiesArr.entries();
                    _c.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 8];
                    _b = _a[_i], index = _b[0], value = _b[1];
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 6, , 7]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                    UA = "jdltapp;iPhone;3.1.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat((0, TS_USER_AGENTS_1.randomString)(40));
                    return [4 /*yield*/, getLog()];
                case 3:
                    log = _c.sent();
                    random = log.match(/"random":"(\d+)"/)[1], log1 = log.match(/"log":"(.*)"/)[1];
                    return [4 /*yield*/, api('h5launch', { "followShop": 0, "random": random, "log": log1, "sceneid": "JLHBhPageh5" })];
                case 4:
                    res = _c.sent();
                    console.log('活动初始化：', res.data.result.statusDesc);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 5:
                    _c.sent();
                    return [3 /*break*/, 7];
                case 6:
                    e_2 = _c.sent();
                    console.log(e_2);
                    return [3 /*break*/, 7];
                case 7:
                    _i++;
                    return [3 /*break*/, 1];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function open(autoOpen) {
    if (autoOpen === void 0) { autoOpen = false; }
    return __awaiter(this, void 0, void 0, function () {
        var exitOpen, _i, _a, _b, index, value, j, _c, _d, t, random, log1, e_3;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    exitOpen = false;
                    _i = 0, _a = cookiesArr.entries();
                    _e.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 22];
                    _b = _a[_i], index = _b[0], value = _b[1];
                    if (exitOpen)
                        return [3 /*break*/, 22];
                    _e.label = 2;
                case 2:
                    _e.trys.push([2, 18, , 19]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                    j = 1;
                    return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
                case 3:
                    res = _e.sent();
                    _c = 0, _d = res.data.result.redpacketConfigFillRewardInfo;
                    _e.label = 4;
                case 4:
                    if (!(_c < _d.length)) return [3 /*break*/, 17];
                    t = _d[_c];
                    if (!(t.packetStatus === 2)) return [3 /*break*/, 7];
                    console.log("\u7EA2\u5305".concat(j, "\u5DF2\u62C6\u8FC7\uFF0C\u83B7\u5F97"), t.packetAmount);
                    if (!!min.includes(t.packetAmount)) return [3 /*break*/, 6];
                    return [4 /*yield*/, (0, sendNotify_1.sendNotify)('锦鲤红包', "\u8D26\u53F7".concat(index + 1, " ").concat(UserName, "\n").concat(t.packetAmount))];
                case 5:
                    _e.sent();
                    _e.label = 6;
                case 6: return [3 /*break*/, 15];
                case 7:
                    if (!(t.packetStatus === 1)) return [3 /*break*/, 14];
                    console.log("\u7EA2\u5305".concat(j, "\u53EF\u62C6"));
                    if (!autoOpen) return [3 /*break*/, 13];
                    UA = "jdltapp;iPhone;3.1.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat((0, TS_USER_AGENTS_1.randomString)(40));
                    return [4 /*yield*/, getLog()];
                case 8:
                    log = _e.sent();
                    random = log.match(/"random":"(\d+)"/)[1], log1 = log.match(/"log":"(.*)"/)[1];
                    return [4 /*yield*/, api('h5receiveRedpacketAll', { "random": random, "log": log1, "sceneid": "JLHBhPageh5" })];
                case 9:
                    res = _e.sent();
                    console.log('打开成功', parseFloat(res.data.result.discount));
                    if (!!min.includes(parseFloat(res.data.result.discount))) return [3 /*break*/, 11];
                    return [4 /*yield*/, (0, sendNotify_1.sendNotify)('锦鲤红包', "\u8D26\u53F7".concat(index + 1, " ").concat(UserName, "\n").concat(t.packetAmount))];
                case 10:
                    _e.sent();
                    _e.label = 11;
                case 11: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(10000)];
                case 12:
                    _e.sent();
                    _e.label = 13;
                case 13: return [3 /*break*/, 15];
                case 14:
                    console.log("".concat(j), t.hasAssistNum, '/', t.requireAssistNum);
                    _e.label = 15;
                case 15:
                    j++;
                    _e.label = 16;
                case 16:
                    _c++;
                    return [3 /*break*/, 4];
                case 17: return [3 /*break*/, 19];
                case 18:
                    e_3 = _e.sent();
                    console.log(e_3);
                    return [3 /*break*/, 19];
                case 19: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
                case 20:
                    _e.sent();
                    _e.label = 21;
                case 21:
                    _i++;
                    return [3 /*break*/, 1];
                case 22: return [2 /*return*/];
            }
        });
    });
}
function help() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, _a, _b, index, value, _c, shareCodes_1, code, random, log1, e_4;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _i = 0, _a = cookiesArr.entries();
                    _d.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 16];
                    _b = _a[_i], index = _b[0], value = _b[1];
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 14, , 15]);
                    cookie = value;
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    if (!(shareCodesHW.length === 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('jlhb')];
                case 3:
                    shareCodesHW = _d.sent();
                    _d.label = 4;
                case 4:
                    // 1 3 5 5 9 15
                    if (index === 0) {
                        shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesHW, true), shareCodesSelf, true)));
                    }
                    else {
                        shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true)));
                    }
                    _c = 0, shareCodes_1 = shareCodes;
                    _d.label = 5;
                case 5:
                    if (!(_c < shareCodes_1.length)) return [3 /*break*/, 13];
                    code = shareCodes_1[_c];
                    if (!!fullCode.includes(code)) return [3 /*break*/, 12];
                    UA = "jdltapp;iPhone;3.1.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat((0, TS_USER_AGENTS_1.randomString)(40));
                    return [4 /*yield*/, getLog()];
                case 6:
                    log = _d.sent();
                    random = log.match(/"random":"(\d+)"/)[1], log1 = log.match(/"log":"(.*)"/)[1];
                    console.log("\u8D26\u53F7".concat(index + 1, " ").concat(UserName, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodesSelf.includes(code) ? '*内部*' : ''));
                    return [4 /*yield*/, api('jinli_h5assist', { "redPacketId": code, "followShop": 0, "random": random, "log": log1, "sceneid": "JLHBhPageh5" })];
                case 7:
                    res = _d.sent();
                    (0, TS_USER_AGENTS_1.o2s)(res, 'jinli_h5assist');
                    if (!(res.data.result.status === 0)) return [3 /*break*/, 9];
                    console.log('助力成功：', parseFloat(res.data.result.assistReward.discount));
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(20000)];
                case 8:
                    _d.sent();
                    return [3 /*break*/, 13];
                case 9:
                    if (res.data.result.status === 3) {
                        console.log('今日助力次数已满');
                        return [3 /*break*/, 13];
                    }
                    else {
                        console.log('助力结果：', res.data.result.statusDesc);
                        if (res.data.result.statusDesc === '啊偶，TA的助力已满，开启自己的红包活动吧~') {
                            fullCode.push(code);
                        }
                    }
                    _d.label = 10;
                case 10: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(20000)];
                case 11:
                    _d.sent();
                    _d.label = 12;
                case 12:
                    _c++;
                    return [3 /*break*/, 5];
                case 13: return [3 /*break*/, 15];
                case 14:
                    e_4 = _d.sent();
                    console.log(e_4);
                    return [3 /*break*/, 15];
                case 15:
                    _i++;
                    return [3 /*break*/, 1];
                case 16: return [2 /*return*/];
            }
        });
    });
}
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/api?appid=jinlihongbao&functionId=".concat(fn, "&loginType=2&client=jinlihongbao&clientVersion=10.2.4&osVersion=AndroidOS&d_brand=Xiaomi&d_model=Xiaomi"), "body=".concat(encodeURIComponent(JSON.stringify(body))), {
                        headers: {
                            "Cookie": cookie,
                            "origin": "https://h5.m.jd.com",
                            "referer": "https://h5.m.jd.com/babelDiy/Zeus/2NUvze9e1uWf4amBhe1AV6ynmSuH/index.html",
                            'Content-Type': 'application/x-www-form-urlencoded',
                            "X-Requested-With": "com.jingdong.app.mall",
                            "User-Agent": UA
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
function getLog() {
    return __awaiter(this, void 0, void 0, function () {
        var farm, bean, pt_pin;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 1:
                    farm = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 3:
                    bean = _a.sent();
                    pt_pin = encodeURIComponent(UserName);
                    if (!(farm.length > 0 && bean.length > 0)) return [3 /*break*/, 5];
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://api.jdsharecode.xyz/api/jlhb_log?farm=".concat(farm, "&bean=").concat(bean, "&pin=").concat(ts_md5_1.Md5.hashStr(pt_pin)))];
                case 4:
                    res = _a.sent();
                    if (res === 1) {
                        console.log('一致性验证失败，脚本退出');
                        process.exit(0);
                    }
                    else {
                        return [2 /*return*/, res];
                    }
                    return [3 /*break*/, 6];
                case 5:
                    console.log('获取账号助力码失败，脚本退出');
                    process.exit(0);
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
