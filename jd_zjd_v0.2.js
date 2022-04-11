"use strict";
/**
 * v0.2
 * cron: 15,30,45 0 * * *
 * CK1 优先助力HW.ts
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
var jd_zjd_tool_js_1 = require("./utils/jd_zjd_tool.js");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var crypto_js_1 = require("crypto-js");
var cookie = '', res = '', UserName;
var shareCodeSelf = [], shareCode = [], shareCodeHW = [], full = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, e_1, _c, _d, _e, index, value, _f, shareCode_1, code, e_2;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _g.sent();
                _i = 0, _a = cookiesArr.entries();
                _g.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 25];
                _b = _a[_i], index = _b[0], value = _b[1];
                _g.label = 3;
            case 3:
                _g.trys.push([3, 21, , 22]);
                return [4 /*yield*/, (0, jd_zjd_tool_js_1.zjdInit)()];
            case 4:
                _g.sent();
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('distributeBeanActivityInfo', { "paramData": { "channel": "FISSION_BEAN" } })
                    // o2s(res)
                ];
            case 5:
                res = _g.sent();
                // o2s(res)
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 6:
                // o2s(res)
                _g.sent();
                if (!(res.data.assistStatus === 1)) return [3 /*break*/, 7];
                // 已开，没满
                console.log('已开团，', res.data.assistedRecords.length, '/', res.data.assistNum, '，剩余', Math.round(res.data.assistValidMilliseconds / 1000 / 60), '分钟');
                shareCodeSelf.push({
                    activityIdEncrypted: res.data.id,
                    assistStartRecordId: res.data.assistStartRecordId,
                    assistedPinEncrypted: res.data.encPin
                });
                return [3 /*break*/, 20];
            case 7:
                if (!(res.data.assistStatus === 2 && res.data.canStartNewAssist)) return [3 /*break*/, 13];
                return [4 /*yield*/, api('vvipclub_distributeBean_startAssist', { "activityIdEncrypted": res.data.id, "channel": "FISSION_BEAN" })
                    // o2s(res)
                ];
            case 8:
                // 没开团
                res = _g.sent();
                // o2s(res)
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 9:
                // o2s(res)
                _g.sent();
                if (!res.success) return [3 /*break*/, 12];
                console.log("\u5F00\u56E2\u6210\u529F\uFF0C\u7ED3\u675F\u65F6\u95F4\uFF1A".concat(res.data.endTime));
                return [4 /*yield*/, api('distributeBeanActivityInfo', { "paramData": { "channel": "FISSION_BEAN" } })];
            case 10:
                res = _g.sent();
                shareCodeSelf.push({
                    activityIdEncrypted: res.data.id,
                    assistStartRecordId: res.data.assistStartRecordId,
                    assistedPinEncrypted: res.data.encPin
                });
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 11:
                _g.sent();
                _g.label = 12;
            case 12: return [3 /*break*/, 20];
            case 13:
                if (!(res.data.assistedRecords.length === res.data.assistNum)) return [3 /*break*/, 19];
                console.log('已成团');
                if (!res.data.canStartNewAssist) return [3 /*break*/, 18];
                return [4 /*yield*/, api('vvipclub_distributeBean_startAssist', { "activityIdEncrypted": res.data.id, "channel": "FISSION_BEAN" })];
            case 14:
                res = _g.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 15:
                _g.sent();
                if (!res.success) return [3 /*break*/, 18];
                console.log("\u5F00\u56E2\u6210\u529F\uFF0C\u7ED3\u675F\u65F6\u95F4\uFF1A".concat(res.data.endTime));
                return [4 /*yield*/, api('distributeBeanActivityInfo', { "paramData": { "channel": "FISSION_BEAN" } })];
            case 16:
                res = _g.sent();
                shareCodeSelf.push({
                    activityIdEncrypted: res.data.id,
                    assistStartRecordId: res.data.assistStartRecordId,
                    assistedPinEncrypted: res.data.encPin
                });
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 17:
                _g.sent();
                _g.label = 18;
            case 18: return [3 /*break*/, 20];
            case 19:
                if (!res.data.canStartNewAssist) {
                    console.log('不可开团');
                }
                _g.label = 20;
            case 20: return [3 /*break*/, 22];
            case 21:
                e_1 = _g.sent();
                return [3 /*break*/, 24];
            case 22: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 23:
                _g.sent();
                _g.label = 24;
            case 24:
                _i++;
                return [3 /*break*/, 2];
            case 25:
                (0, TS_USER_AGENTS_1.o2s)(shareCodeSelf);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 26:
                _g.sent();
                _c = 0, _d = cookiesArr.entries();
                _g.label = 27;
            case 27:
                if (!(_c < _d.length)) return [3 /*break*/, 41];
                _e = _d[_c], index = _e[0], value = _e[1];
                if (!(shareCodeHW.length === 0)) return [3 /*break*/, 29];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('zjd')];
            case 28:
                shareCodeHW = _g.sent();
                _g.label = 29;
            case 29:
                shareCode = index === 0
                    ? Array.from(new Set(__spreadArray(__spreadArray([], shareCodeHW, true), shareCodeSelf, true)))
                    : Array.from(new Set(__spreadArray(__spreadArray([], shareCodeSelf, true), shareCodeHW, true)));
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, (0, jd_zjd_tool_js_1.zjdInit)()];
            case 30:
                _g.sent();
                _f = 0, shareCode_1 = shareCode;
                _g.label = 31;
            case 31:
                if (!(_f < shareCode_1.length)) return [3 /*break*/, 38];
                code = shareCode_1[_f];
                if (!!full.includes(code.assistedPinEncrypted)) return [3 /*break*/, 37];
                _g.label = 32;
            case 32:
                _g.trys.push([32, 34, , 35]);
                console.log("\u8D26\u53F7".concat(index + 1, " ").concat(UserName, " \u53BB\u52A9\u529B ").concat(code.assistedPinEncrypted.replace('\n', '')));
                return [4 /*yield*/, api('vvipclub_distributeBean_assist', { "activityIdEncrypted": code.activityIdEncrypted, "assistStartRecordId": code.assistStartRecordId, "assistedPinEncrypted": code.assistedPinEncrypted, "channel": "FISSION_BEAN", "launchChannel": "undefined" })];
            case 33:
                res = _g.sent();
                if (res.resultCode === '9200008') {
                    console.log('不能助力自己');
                }
                else if (res.resultCode === '2400203') {
                    console.log('上限');
                    return [3 /*break*/, 38];
                }
                else if (res.resultCode === '2400205') {
                    console.log('对方已成团');
                    full.push(code.assistedPinEncrypted);
                }
                else if (res.resultCode === '9200011') {
                    console.log('已助力过');
                }
                else if (res.success) {
                    console.log('助力成功');
                }
                else {
                    console.log('error', JSON.stringify(res));
                }
                return [3 /*break*/, 35];
            case 34:
                e_2 = _g.sent();
                console.log(e_2);
                return [3 /*break*/, 38];
            case 35: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 36:
                _g.sent();
                _g.label = 37;
            case 37:
                _f++;
                return [3 /*break*/, 31];
            case 38: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 39:
                _g.sent();
                _g.label = 40;
            case 40:
                _c++;
                return [3 /*break*/, 27];
            case 41: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var h5st, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    h5st = (0, jd_zjd_tool_js_1.zjdH5st)({
                        'fromType': 'wxapp',
                        'timestamp': Date.now(),
                        'body0': JSON.stringify(body),
                        'appid': 'swat_miniprogram',
                        'body': (0, crypto_js_1.SHA256)(JSON.stringify(body)).toString(),
                        'functionId': fn
                    });
                    return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/api?functionId=".concat(fn, "&fromType=wxapp&timestamp=").concat(Date.now()), "functionId=distributeBeanActivityInfo&body=".concat(encodeURIComponent(JSON.stringify(body)), "&appid=swat_miniprogram&h5st=").concat(encodeURIComponent(h5st)), {
                            headers: {
                                'content-type': 'application/x-www-form-urlencoded',
                                'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac',
                                'referer': 'https://servicewechat.com/wxa5bf5ee667d91626/173/page-frame.html',
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
