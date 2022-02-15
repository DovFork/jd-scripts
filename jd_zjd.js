"use strict";
/**
 * jd_zjd
 * Cookie >= 4 内部
 * Cookie <  4 HW.ts -> 内部
 * cron: 15 0,1,23 * * *
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
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var V3_1 = require("./utils/V3");
var zjd_1 = require("./utils/zjd");
var cookie = '', res = '', UserName;
var USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat';
var shareCodeSelf = [], shareCode = [], shareCodeHW = [], encPin = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, _c, fp, tk, genKey, e_1, temp, _d, temp_1, item, _e, _f, _g, index, value, _h, fp, tk, genKey, _j, shareCode_1, code, e_2;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _k.sent();
                _i = 0, _a = cookiesArr.entries();
                _k.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 19];
                _b = _a[_i], index = _b[0], value = _b[1];
                _k.label = 3;
            case 3:
                _k.trys.push([3, 15, , 16]);
                return [4 /*yield*/, (0, V3_1.requestAlgo)('d8ac0', USER_AGENT)];
            case 4:
                _c = _k.sent(), fp = _c.fp, tk = _c.tk, genKey = _c.genKey;
                (0, zjd_1.init)(fp, tk, genKey);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('distributeBeanActivityInfo', { "paramData": { "channel": "FISSION_BEAN" } })];
            case 5:
                res = _k.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 6:
                _k.sent();
                if (!(res.data.assistStatus === 1)) return [3 /*break*/, 7];
                // 已开，没满
                console.log('已开团，未满，剩余', Math.round(res.data.assistValidMilliseconds / 1000 / 60), '分钟');
                shareCodeSelf.push({
                    activityIdEncrypted: res.data.id,
                    assistStartRecordId: res.data.assistStartRecordId,
                    assistedPinEncrypted: res.data.encPin
                });
                return [3 /*break*/, 14];
            case 7:
                if (!(res.data.assistStatus === 2 && res.data.canStartNewAssist)) return [3 /*break*/, 13];
                return [4 /*yield*/, api('vvipclub_distributeBean_startAssist', { "activityIdEncrypted": res.data.id, "channel": "FISSION_BEAN" })];
            case 8:
                // 没开团
                res = _k.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 9:
                _k.sent();
                if (!res.success) return [3 /*break*/, 12];
                console.log("\u5F00\u56E2\u6210\u529F\uFF0C\u7ED3\u675F\u65F6\u95F4\uFF1A".concat(res.data.endTime));
                return [4 /*yield*/, api('distributeBeanActivityInfo', { "paramData": { "channel": "FISSION_BEAN" } })];
            case 10:
                res = _k.sent();
                shareCodeSelf.push({
                    activityIdEncrypted: res.data.id,
                    assistStartRecordId: res.data.assistStartRecordId,
                    assistedPinEncrypted: res.data.encPin
                });
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 11:
                _k.sent();
                _k.label = 12;
            case 12: return [3 /*break*/, 14];
            case 13:
                if (!res.data.canStartNewAssist) {
                    console.log('不可开团');
                }
                _k.label = 14;
            case 14: return [3 /*break*/, 16];
            case 15:
                e_1 = _k.sent();
                console.log(e_1);
                return [3 /*break*/, 16];
            case 16: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 17:
                _k.sent();
                _k.label = 18;
            case 18:
                _i++;
                return [3 /*break*/, 2];
            case 19:
                console.log(shareCodeSelf);
                shareCodeHW = (0, TS_USER_AGENTS_1.getshareCodeHW)('zjd');
                if (cookiesArr.length < 4) {
                    temp = Array.from(__spreadArray(__spreadArray([], shareCodeHW, true), shareCodeSelf, true));
                }
                else {
                    temp = shareCodeSelf;
                }
                for (_d = 0, temp_1 = temp; _d < temp_1.length; _d++) {
                    item = temp_1[_d];
                    if (!encPin.includes(item.assistedPinEncrypted)) {
                        encPin.push(item.assistedPinEncrypted);
                        shareCode.push(item);
                    }
                }
                _e = 0, _f = cookiesArr.entries();
                _k.label = 20;
            case 20:
                if (!(_e < _f.length)) return [3 /*break*/, 32];
                _g = _f[_e], index = _g[0], value = _g[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                return [4 /*yield*/, (0, V3_1.requestAlgo)('d8ac0', USER_AGENT)];
            case 21:
                _h = _k.sent(), fp = _h.fp, tk = _h.tk, genKey = _h.genKey;
                (0, zjd_1.init)(fp, tk, genKey);
                _j = 0, shareCode_1 = shareCode;
                _k.label = 22;
            case 22:
                if (!(_j < shareCode_1.length)) return [3 /*break*/, 29];
                code = shareCode_1[_j];
                _k.label = 23;
            case 23:
                _k.trys.push([23, 25, , 26]);
                console.log("\u8D26\u53F7".concat(index + 1, " ").concat(UserName, " \u53BB\u52A9\u529B ").concat(code.assistedPinEncrypted.replace('\n', '')));
                return [4 /*yield*/, api('vvipclub_distributeBean_assist', { "activityIdEncrypted": code.activityIdEncrypted, "assistStartRecordId": code.assistStartRecordId, "assistedPinEncrypted": code.assistedPinEncrypted, "channel": "FISSION_BEAN", "launchChannel": "undefined" })];
            case 24:
                res = _k.sent();
                if (res.resultCode === '9200008') {
                    console.log('不能助力自己');
                }
                else if (res.resultCode === '2400203') {
                    console.log('上限');
                    return [3 /*break*/, 29];
                }
                else if (res.success) {
                    console.log('助力成功');
                    return [3 /*break*/, 29];
                }
                else {
                    (0, TS_USER_AGENTS_1.o2s)(res);
                }
                return [3 /*break*/, 26];
            case 25:
                e_2 = _k.sent();
                console.log(e_2);
                return [3 /*break*/, 29];
            case 26: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 27:
                _k.sent();
                _k.label = 28;
            case 28:
                _j++;
                return [3 /*break*/, 22];
            case 29:
                console.log();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 30:
                _k.sent();
                _k.label = 31;
            case 31:
                _e++;
                return [3 /*break*/, 20];
            case 32: return [2 /*return*/];
        }
    });
}); })();
function api(fn, params) {
    return __awaiter(this, void 0, void 0, function () {
        var h5st, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (fn === 'vvipclub_distributeBean_assist') {
                        h5st = (0, zjd_1.zjdTool)({ "activityIdEncrypted": params.activityIdEncrypted, "channel": "FISSION_BEAN" });
                    }
                    else {
                        h5st = (0, zjd_1.zjdTool)(params);
                    }
                    return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/api?functionId=".concat(fn, "&fromType=wxapp&timestamp=").concat(Date.now()), "body=".concat(decodeURIComponent(JSON.stringify(params)), "&appid=swat_miniprogram&h5st=").concat(h5st, "&client=tjj_m&clientVersion=3.1.3"), {
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded; Charset=UTF-8",
                                "Host": "api.m.jd.com",
                                "Referer": "https://servicewechat.com/wxa5bf5ee667d91626/182/page-frame.html",
                                "Cookie": cookie,
                                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat'
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
