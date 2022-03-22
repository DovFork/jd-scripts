"use strict";
/**
 * 京东-锦鲤红包
 * 做任务、助力、开红包
 * cron: 1 0,6,18 * * *
 * CK1     HW.ts -> 内部
 * CK2～n  内部   -> HW.ts
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
var jinli_log_1 = require("./utils/jinli_log");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', UserName, UA = '';
var shareCodesSelf = [], shareCodes = [], shareCodesHW = [], fullCode = [];
var min = [0.02, 0.12, 0.3, 0.6, 0.7, 0.8, 1, 2], log = '', logIndex = 10;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, random, log1, e_1, _c, _d, _e, index, value, _f, shareCodes_1, code, random, log1, e_2, _g, _h, _j, index, value, random, log1, j, _k, _l, t, e_3;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)(false)];
            case 1:
                cookiesArr = _m.sent();
                _i = 0, _a = cookiesArr.entries();
                _m.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 10];
                _b = _a[_i], index = _b[0], value = _b[1];
                _m.label = 3;
            case 3:
                _m.trys.push([3, 8, , 9]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                UA = "jdltapp;iPhone;3.1.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat((0, TS_USER_AGENTS_1.randomString)(40));
                log = jinli_log_1.logs[(0, TS_USER_AGENTS_1.getRandomNumberByRange)(0, jinli_log_1.logs.length - 1)];
                random = log.match(/"random":"(\d+)"/)[1], log1 = log.match(/"log":"(.*)"/)[1];
                return [4 /*yield*/, api('h5launch', { "followShop": 0, "random": random, "log": log1, "sceneid": "JLHBhPageh5" })];
            case 4:
                res = _m.sent();
                console.log('活动初始化：', res.data.result.statusDesc);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 5:
                _m.sent();
                return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
            case 6:
                res = _m.sent();
                console.log('红包ID：', res.data.result.redpacketInfo.id);
                shareCodesSelf.push(res.data.result.redpacketInfo.id);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 7:
                _m.sent();
                return [3 /*break*/, 9];
            case 8:
                e_1 = _m.sent();
                console.log(e_1);
                return [3 /*break*/, 9];
            case 9:
                _i++;
                return [3 /*break*/, 2];
            case 10: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 11:
                _m.sent();
                console.log('内部助力：', shareCodesSelf);
                _c = 0, _d = cookiesArr.entries();
                _m.label = 12;
            case 12:
                if (!(_c < _d.length)) return [3 /*break*/, 27];
                _e = _d[_c], index = _e[0], value = _e[1];
                _m.label = 13;
            case 13:
                _m.trys.push([13, 25, , 26]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                if (!(shareCodesHW.length === 0)) return [3 /*break*/, 15];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('jlhb')];
            case 14:
                shareCodesHW = _m.sent();
                _m.label = 15;
            case 15:
                // 2 4 9 12
                if (index === 0 || cookiesArr.length === 2) { // 红包1需2个助力
                    shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesHW, true), shareCodesSelf, true)));
                }
                else {
                    shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true)));
                }
                if (cookiesArr.length > 5 && cookiesArr.length < 8 && index > 4) { // 红包3需要7个助力
                    shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesHW, true), shareCodesSelf, true)));
                }
                _f = 0, shareCodes_1 = shareCodes;
                _m.label = 16;
            case 16:
                if (!(_f < shareCodes_1.length)) return [3 /*break*/, 24];
                code = shareCodes_1[_f];
                if (!!fullCode.includes(code)) return [3 /*break*/, 22];
                UA = "jdltapp;iPhone;3.1.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat((0, TS_USER_AGENTS_1.randomString)(40));
                log = jinli_log_1.logs[(0, TS_USER_AGENTS_1.getRandomNumberByRange)(0, jinli_log_1.logs.length - 1)];
                random = log.match(/"random":"(\d+)"/)[1], log1 = log.match(/"log":"(.*)"/)[1];
                console.log("\u8D26\u53F7".concat(index + 1, " ").concat(UserName, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodesSelf.includes(code) ? '*内部*' : ''));
                return [4 /*yield*/, api('jinli_h5assist', { "redPacketId": code, "followShop": 0, "random": random, "log": log1, "sceneid": "JLHBhPageh5" })];
            case 17:
                res = _m.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'jinli_h5assist');
                if (!(res.data.result.status === 0)) return [3 /*break*/, 19];
                console.log('助力成功：', parseFloat(res.data.result.assistReward.discount));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 18:
                _m.sent();
                return [3 /*break*/, 24];
            case 19:
                if (res.data.result.status === 3) {
                    console.log('今日助力次数已满');
                    return [3 /*break*/, 24];
                }
                else {
                    console.log('助力结果：', res.data.result.statusDesc);
                    if (res.data.result.statusDesc === '啊偶，TA的助力已满，开启自己的红包活动吧~') {
                        fullCode.push(code);
                    }
                }
                _m.label = 20;
            case 20: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 21:
                _m.sent();
                return [3 /*break*/, 23];
            case 22:
                console.log("Code ".concat(code, " \u5DF2\u88AB\u52A9\u6EE1"));
                _m.label = 23;
            case 23:
                _f++;
                return [3 /*break*/, 16];
            case 24: return [3 /*break*/, 26];
            case 25:
                e_2 = _m.sent();
                console.log(e_2);
                return [3 /*break*/, 26];
            case 26:
                _c++;
                return [3 /*break*/, 12];
            case 27:
                _g = 0, _h = cookiesArr.entries();
                _m.label = 28;
            case 28:
                if (!(_g < _h.length)) return [3 /*break*/, 43];
                _j = _h[_g], index = _j[0], value = _j[1];
                _m.label = 29;
            case 29:
                _m.trys.push([29, 39, , 40]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                UA = "jdltapp;iPhone;3.1.0;".concat(Math.ceil(Math.random() * 4 + 10), ".").concat(Math.ceil(Math.random() * 4), ";").concat((0, TS_USER_AGENTS_1.randomString)(40));
                log = jinli_log_1.logs[(0, TS_USER_AGENTS_1.getRandomNumberByRange)(0, jinli_log_1.logs.length - 1)];
                random = log.match(/"random":"(\d+)"/)[1], log1 = log.match(/"log":"(.*)"/)[1];
                j = 1;
                return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
            case 30:
                res = _m.sent();
                _k = 0, _l = res.data.result.redpacketConfigFillRewardInfo;
                _m.label = 31;
            case 31:
                if (!(_k < _l.length)) return [3 /*break*/, 38];
                t = _l[_k];
                if (!(t.packetStatus === 2)) return [3 /*break*/, 32];
                console.log("\u7EA2\u5305".concat(j, "\u5DF2\u62C6\u8FC7\uFF0C\u83B7\u5F97"), t.packetAmount);
                return [3 /*break*/, 36];
            case 32:
                if (!(t.packetStatus === 1)) return [3 /*break*/, 35];
                console.log("\u7EA2\u5305".concat(j, "\u53EF\u62C6"));
                return [4 /*yield*/, api('h5receiveRedpacketAll', { "random": random, "log": log1, "sceneid": "JLHBhPageh5" })];
            case 33:
                res = _m.sent();
                console.log(res.data.biz_msg, parseFloat(res.data.result.discount));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 34:
                _m.sent();
                return [3 /*break*/, 36];
            case 35:
                console.log("".concat(j), t.hasAssistNum, '/', t.requireAssistNum);
                _m.label = 36;
            case 36:
                j++;
                _m.label = 37;
            case 37:
                _k++;
                return [3 /*break*/, 31];
            case 38: return [3 /*break*/, 40];
            case 39:
                e_3 = _m.sent();
                console.log(e_3);
                return [3 /*break*/, 40];
            case 40: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 41:
                _m.sent();
                _m.label = 42;
            case 42:
                _g++;
                return [3 /*break*/, 28];
            case 43: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body, retry) {
    if (retry === void 0) { retry = 0; }
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
                    if (!(data.rtn_code === 403 && retry < 3)) return [3 /*break*/, 4];
                    console.log('retry...');
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 2:
                    _a.sent();
                    log = jinli_log_1.logs[(0, TS_USER_AGENTS_1.getRandomNumberByRange)(0, jinli_log_1.logs.length - 1)];
                    body['random'] = log.match(/"random":"(\d+)"/)[1];
                    body['log'] = log.match(/"log":"(.*)"/)[1];
                    return [4 /*yield*/, api(fn, body, ++retry)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/, data];
            }
        });
    });
}
