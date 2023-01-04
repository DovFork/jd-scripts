"use strict";
/**
 * 闪购盲盒
 * cron: 20 8 * * *
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var axios_1 = require("axios");
var cookie = '', UserName, res;
var shareCodeSelf = [], shareCode = [], shareCodePool = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, _c, _d, t, i, tp, full, _e, _f, _g, index, value, _h, shareCode_1, code, _j, _k, _l, index, value, lotteryNum, i;
    var _m, _o, _p, _q, _r, _s;
    return __generator(this, function (_t) {
        switch (_t.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getCookie)()];
            case 1:
                cookiesArr = _t.sent();
                _i = 0, _a = cookiesArr.entries();
                _t.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 14];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('healthyDay_getHomeData', { "appId": "1ElZXwKuP", "taskToken": "", "channelId": 1 })];
            case 3:
                res = _t.sent();
                _c = 0, _d = res.data.result.taskVos;
                _t.label = 4;
            case 4:
                if (!(_c < _d.length)) return [3 /*break*/, 13];
                t = _d[_c];
                if (t.taskType === 14) {
                    console.log('助力码', (_m = t.assistTaskDetailVo) === null || _m === void 0 ? void 0 : _m.taskToken);
                    shareCodeSelf.push((_o = t.assistTaskDetailVo) === null || _o === void 0 ? void 0 : _o.taskToken);
                }
                if (!((t.browseShopVo || t.productInfoVos || t.shoppingActivityVos) && t.times < t.maxTimes)) return [3 /*break*/, 12];
                i = 0;
                _t.label = 5;
            case 5:
                if (!(i < t.maxTimes - t.times)) return [3 /*break*/, 12];
                tp = [];
                if (t.productInfoVos)
                    tp = t.productInfoVos;
                else if (t.browseShopVo)
                    tp = t.browseShopVo;
                else if (t.shoppingActivityVos)
                    tp = t.shoppingActivityVos;
                console.log(((_p = tp[i]) === null || _p === void 0 ? void 0 : _p.shopName) || ((_q = tp[i]) === null || _q === void 0 ? void 0 : _q.skuName) || ((_r = tp[i]) === null || _r === void 0 ? void 0 : _r.title));
                if (!!t.shoppingActivityVos) return [3 /*break*/, 8];
                return [4 /*yield*/, api('harmony_collectScore', {
                        "appId": "1ElZXwKuP",
                        "taskToken": tp[i].taskToken,
                        "taskId": t.taskId,
                        "actionType": 1
                    })];
            case 6:
                res = _t.sent();
                console.log(res.data.bizMsg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.waitDuration * 1000 || 2000)];
            case 7:
                _t.sent();
                _t.label = 8;
            case 8: return [4 /*yield*/, api('harmony_collectScore', {
                    "appId": "1ElZXwKuP",
                    "taskToken": tp[i].taskToken,
                    "taskId": t.taskId,
                    "actionType": 0
                })];
            case 9:
                res = _t.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 10:
                _t.sent();
                if (res.data.bizMsg === 'success') {
                    console.log('任务完成');
                }
                else {
                    return [3 /*break*/, 12];
                }
                _t.label = 11;
            case 11:
                i++;
                return [3 /*break*/, 5];
            case 12:
                _c++;
                return [3 /*break*/, 4];
            case 13:
                _i++;
                return [3 /*break*/, 2];
            case 14:
                full = [];
                _e = 0, _f = cookiesArr.entries();
                _t.label = 15;
            case 15:
                if (!(_e < _f.length)) return [3 /*break*/, 22];
                _g = _f[_e], index = _g[0], value = _g[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('sgmh', 30)];
            case 16:
                shareCodePool = _t.sent();
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], shareCodeSelf, true), shareCodePool, true)));
                _h = 0, shareCode_1 = shareCode;
                _t.label = 17;
            case 17:
                if (!(_h < shareCode_1.length)) return [3 /*break*/, 21];
                code = shareCode_1[_h];
                if (full.includes(code)) {
                    console.log('full contains');
                    return [3 /*break*/, 20];
                }
                console.log('去助力', code);
                return [4 /*yield*/, api('harmony_collectScore', { "appId": "1ElZXwKuP", "taskToken": code, "taskId": 3 })];
            case 18:
                res = _t.sent();
                if (res.data.bizCode === 0) {
                    console.log('助力成功');
                }
                else if (res.data.bizCode === 108) {
                    console.log('上限');
                    return [3 /*break*/, 21];
                }
                else if (res.data.bizMsg === '助力已满员！谢谢你哦~') {
                    full.push(code);
                    console.log('已满');
                }
                else {
                    console.log('助力失败', res.data.bizMsg);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 19:
                _t.sent();
                _t.label = 20;
            case 20:
                _h++;
                return [3 /*break*/, 17];
            case 21:
                _e++;
                return [3 /*break*/, 15];
            case 22:
                _j = 0, _k = cookiesArr.entries();
                _t.label = 23;
            case 23:
                if (!(_j < _k.length)) return [3 /*break*/, 31];
                _l = _k[_j], index = _l[0], value = _l[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('healthyDay_getHomeData', { "appId": "1ElZXwKuP", "taskToken": "", "channelId": 1 })];
            case 24:
                res = _t.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 25:
                _t.sent();
                lotteryNum = parseInt(res.data.result.userInfo.lotteryNum);
                console.log('可以抽奖', lotteryNum, '次');
                i = 0;
                _t.label = 26;
            case 26:
                if (!(i < lotteryNum)) return [3 /*break*/, 30];
                return [4 /*yield*/, api('interact_template_getLotteryResult', { "appId": "1ElZXwKuP" })];
            case 27:
                res = _t.sent();
                if (res.data.result.userAwardsCacheDto.type === 0) {
                    console.log('抽奖成功 空气');
                }
                else {
                    console.log('抽奖成功', (_s = res.data.result.userAwardsCacheDto.jBeanAwardVo) === null || _s === void 0 ? void 0 : _s.prizeName);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 28:
                _t.sent();
                _t.label = 29;
            case 29:
                i++;
                return [3 /*break*/, 26];
            case 30:
                _j++;
                return [3 /*break*/, 23];
            case 31: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post('https://api.m.jd.com/client.action', "functionId=".concat(fn, "&body=").concat(JSON.stringify(body), "&client=wh5&clientVersion=1.0.0"), {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://h5.m.jd.com',
                            'User-Agent': 'jdapp;iPhone;10.4.3;',
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
