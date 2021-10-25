"use strict";
/**
 * 极速版-发财大赢家
 * cron : 1 0,8,18 * * *
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
var cookie, res, UserName, index;
var shareCodesSelf = [], shareCodes = [], shareCodesHW;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, i, _i, shareCodes_1, boss;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)('c8bce')];
            case 1:
                _b.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _b.sent();
                i = 0;
                _b.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 12];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                return [4 /*yield*/, api('openRedEnvelopeInteract', { "linkId": "PFbUR7wtwUcQ860Sn8WRfw" })];
            case 4:
                res = _b.sent();
                if (!(res.code === 0)) return [3 /*break*/, 8];
                console.log('当前进度:', res.data.amount * 1, ' 还需要:', (_a = res.data.needAmount * 1) !== null && _a !== void 0 ? _a : (10 - res.data.needAmount * 1).toFixed(2));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 5:
                _b.sent();
                return [4 /*yield*/, api('redEnvelopeInteractHome', { "linkId": "PFbUR7wtwUcQ860Sn8WRfw", "redEnvelopeId": "", "inviter": "", "helpType": "" })];
            case 6:
                res = _b.sent();
                shareCodesSelf.push({
                    redEnvelopeId: res.data.redEnvelopeId,
                    inviter: res.data.markedPin
                });
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 7:
                _b.sent();
                return [3 /*break*/, 9];
            case 8:
                console.log(res);
                console.log('火爆？');
                _b.label = 9;
            case 9: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 10:
                _b.sent();
                _b.label = 11;
            case 11:
                i++;
                return [3 /*break*/, 3];
            case 12:
                console.log('内部助力码:', shareCodesSelf);
                i = 0;
                _b.label = 13;
            case 13:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 20];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                return [4 /*yield*/, getCodesHW()];
            case 14:
                _b.sent();
                if (i === 0)
                    shareCodes = __spreadArray(__spreadArray([], shareCodesHW, true), shareCodesSelf, true);
                else
                    shareCodes = __spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true);
                _i = 0, shareCodes_1 = shareCodes;
                _b.label = 15;
            case 15:
                if (!(_i < shareCodes_1.length)) return [3 /*break*/, 19];
                boss = shareCodes_1[_i];
                console.log("\u8D26\u53F7" + (i + 1) + " " + UserName + " \u53BB\u52A9\u529B ", boss.redEnvelopeId);
                return [4 /*yield*/, api('openRedEnvelopeInteract', { "linkId": "PFbUR7wtwUcQ860Sn8WRfw", "redEnvelopeId": boss.redEnvelopeId, "inviter": boss.inviter, "helpType": "1" })];
            case 16:
                res = _b.sent();
                if (res.code === 16020)
                    return [3 /*break*/, 18];
                res = res.data.helpResult;
                if (res.code === 16013) {
                    console.log('上限');
                    return [3 /*break*/, 19];
                }
                else if (res.code === 16012) {
                    console.log('已助力过');
                }
                else if (res.code === 0) {
                    console.log('成功', res.data.amount);
                }
                else if (res.code === 16004) {
                    console.log('不助力自己');
                }
                else {
                    console.log('其他错误', res.errMsg);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 17:
                _b.sent();
                _b.label = 18;
            case 18:
                _i++;
                return [3 /*break*/, 15];
            case 19:
                i++;
                return [3 /*break*/, 13];
            case 20: return [2 /*return*/];
        }
    });
}); })();
function api(fn, params) {
    return __awaiter(this, void 0, void 0, function () {
        var t, url, data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    t = Date.now();
                    url = "https://api.m.jd.com/?functionId=" + fn + "&t=" + t + "&appid=activities_platform&client=H5&clientVersion=1.0.0&body=" + encodeURIComponent(JSON.stringify(params));
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'api.m.jd.com',
                                'Origin': 'https://618redpacket.jd.com',
                                'Accept': 'application/json, text/plain, */*',
                                'User-Agent': 'jdltapp;',
                                'Referer': 'https://618redpacket.jd.com/?activityId=PFbUR7wtwUcQ860Sn8WRfw',
                                'Cookie': cookie
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, { code: -1 }];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getCodesHW() {
    return __awaiter(this, void 0, void 0, function () {
        var data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/HW_CODES", { timeout: 10000 })];
                case 1:
                    data = (_a.sent()).data;
                    console.log('获取HW_CODES成功(api)');
                    shareCodesHW = data['fcdyj'] || [];
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    console.log('获取HW_CODES失败(api)');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
