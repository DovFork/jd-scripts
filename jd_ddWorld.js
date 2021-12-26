"use strict";
/**
 * 东东世界
 * https://ddsj-dz.isvjcloud.com/
 * cron: 5 0,8,20 * * *
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
var cookie = '', res = '', shareCodesInternal = [], UserName;
var tokenKey = '', token = '', bearer = '';
var HW_Priority = true, shareCodeHW = [], shareCode = [];
/**
 * CK1助力顺序
 * HW_Priority: boolean
 * true  HW.ts -> 内部
 * false 内部   -> HW.ts
 */
process.env.HW_Priority === 'false' ? HW_Priority = false : '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, _c, _d, t, items, _e, items_1, item, name_1, _f, res_1, t, _g, _h, _j, index, value, _k, shareCodesInternal_1, code;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _l.sent();
                _i = 0, _a = cookiesArr.entries();
                _l.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 25];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, getIsvToken()];
            case 3:
                _l.sent();
                return [4 /*yield*/, getIsvToken2()];
            case 4:
                _l.sent();
                return [4 /*yield*/, getToken()];
            case 5:
                _l.sent();
                return [4 /*yield*/, api('get_task')];
            case 6:
                res = _l.sent();
                _c = 0, _d = res.result.taskVos;
                _l.label = 7;
            case 7:
                if (!(_c < _d.length)) return [3 /*break*/, 18];
                t = _d[_c];
                if (!(t.status === 1)) return [3 /*break*/, 17];
                if (!t.simpleRecordInfoVo) return [3 /*break*/, 10];
                return [4 /*yield*/, api('do_task', "taskToken=".concat(t.simpleRecordInfoVo.taskToken, "&task_id=").concat(t.taskId, "&task_type=").concat(t.taskType))];
            case 8:
                // 签到
                res = _l.sent();
                console.log('签到成功：', res.score);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 9:
                _l.sent();
                return [3 /*break*/, 15];
            case 10:
                items = t.browseShopVo || t.shoppingActivityVos || t.productInfoVos || [];
                _e = 0, items_1 = items;
                _l.label = 11;
            case 11:
                if (!(_e < items_1.length)) return [3 /*break*/, 15];
                item = items_1[_e];
                if (!(item.status === 1)) return [3 /*break*/, 14];
                name_1 = item.shopName || item.title || item.skuName;
                return [4 /*yield*/, api('do_task', "taskToken=".concat(item.taskToken, "&task_id=").concat(t.taskId, "&task_type=").concat(t.taskType, "&task_name=").concat(encodeURIComponent(name_1)))];
            case 12:
                res = _l.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 13:
                _l.sent();
                console.log('任务完成：', res.score);
                _l.label = 14;
            case 14:
                _e++;
                return [3 /*break*/, 11];
            case 15:
                if (!(t.taskName === '邀请好友助力')) return [3 /*break*/, 17];
                console.log('收到助力：', t.times);
                return [4 /*yield*/, api('get_user_info')];
            case 16:
                res = _l.sent();
                console.log('助力码：', t.assistTaskDetailVo.taskToken, res.openid);
                shareCodesInternal.push({
                    taskToken: t.assistTaskDetailVo.taskToken,
                    inviter_id: res.openid
                });
                _l.label = 17;
            case 17:
                _c++;
                return [3 /*break*/, 7];
            case 18:
                if (!(new Date().getHours() === 20)) return [3 /*break*/, 24];
                return [4 /*yield*/, api('get_exchange')];
            case 19:
                res = _l.sent();
                _f = 0, res_1 = res;
                _l.label = 20;
            case 20:
                if (!(_f < res_1.length)) return [3 /*break*/, 24];
                t = res_1[_f];
                if (!([500, 1000].includes(t.coins) && t.times_limit !== t.exchange_total)) return [3 /*break*/, 23];
                console.log('兑换', t.coins);
                return [4 /*yield*/, api('do_exchange', "id=".concat(t.id))];
            case 21:
                res = _l.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 22:
                _l.sent();
                _l.label = 23;
            case 23:
                _f++;
                return [3 /*break*/, 20];
            case 24:
                _i++;
                return [3 /*break*/, 2];
            case 25:
                console.log('内部助力码：', shareCodesInternal);
                _g = 0, _h = cookiesArr.entries();
                _l.label = 26;
            case 26:
                if (!(_g < _h.length)) return [3 /*break*/, 37];
                _j = _h[_g], index = _j[0], value = _j[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                return [4 /*yield*/, getIsvToken()];
            case 27:
                _l.sent();
                return [4 /*yield*/, getIsvToken2()];
            case 28:
                _l.sent();
                return [4 /*yield*/, getToken()];
            case 29:
                _l.sent();
                if (!(shareCodeHW.length === 0)) return [3 /*break*/, 31];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('ddWorld')];
            case 30:
                shareCodeHW = _l.sent();
                _l.label = 31;
            case 31:
                if (index === 0 && HW_Priority) {
                    shareCode = __spreadArray(__spreadArray([], shareCodeHW, true), shareCodesInternal, true);
                }
                else {
                    shareCode = __spreadArray(__spreadArray([], shareCodesInternal, true), shareCodeHW, true);
                }
                _k = 0, shareCodesInternal_1 = shareCodesInternal;
                _l.label = 32;
            case 32:
                if (!(_k < shareCodesInternal_1.length)) return [3 /*break*/, 36];
                code = shareCodesInternal_1[_k];
                console.log("".concat(UserName, " \u53BB\u52A9\u529B ").concat(code.taskToken));
                return [4 /*yield*/, api('do_assist_task', "taskToken=".concat(code.taskToken, "&inviter_id=").concat(code.inviter_id))];
            case 33:
                res = _l.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                // console.log('助力结果：', res)
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 34:
                // console.log('助力结果：', res)
                _l.sent();
                if (res.status_code === 422)
                    return [3 /*break*/, 36];
                _l.label = 35;
            case 35:
                _k++;
                return [3 /*break*/, 32];
            case 36:
                _g++;
                return [3 /*break*/, 26];
            case 37: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    if (body === void 0) { body = ''; }
    return __awaiter(this, void 0, void 0, function () {
        var headers, data, e_1, data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    headers = {
                        'Host': 'ddsj-dz.isvjcloud.com',
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'User-Agent': TS_USER_AGENTS_1["default"],
                        'Authorization': "Bearer ".concat(bearer),
                        'Referer': 'https://ddsj-dz.isvjcloud.com/dd-world/'
                    };
                    if (!body) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].post("https://ddsj-dz.isvjcloud.com/dd-api/".concat(fn), body, { headers: headers })];
                case 2:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, e_1.response.data];
                case 4: return [3 /*break*/, 8];
                case 5:
                    _a.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, axios_1["default"].get("https://ddsj-dz.isvjcloud.com/dd-api/".concat(fn), { headers: headers })];
                case 6:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
                case 7:
                    e_2 = _a.sent();
                    return [2 /*return*/];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function getIsvToken() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action?functionId=genToken", "body=".concat(encodeURIComponent(JSON.stringify({ "to": "https://ddsj-dz.isvjcloud.com/dd-world/load_app/load_app.html", "action": "to" })), "&uuid=4ccb375c539fd92bade&client=apple&clientVersion=10.0.10&st=1631884082694&sv=111&sign=1a49fd69e7d3c18cad91cc00ed40d327"), {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'accept': '*/*',
                            'content-type': 'application/x-www-form-urlencoded',
                            'referer': '',
                            'user-agent': 'JD4iPhone/167814 (iPhone; iOS 12.4.1; Scale/3.00)',
                            'accept-language': 'zh-Hans-CN;q=1',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    tokenKey = data.tokenKey;
                    return [2 /*return*/];
            }
        });
    });
}
function getIsvToken2() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action?functionId=isvObfuscator", "body=".concat(encodeURIComponent(JSON.stringify({ "id": "", "url": "https://ddsj-dz.isvjcloud.com" })), "&uuid=5162ca82aed35fc52e8&client=apple&clientVersion=10.0.10&st=1631884203742&sv=112&sign=fd40dc1c65d20881d92afe96c4aec3d0"), {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'accept': '*/*',
                            'content-type': 'application/x-www-form-urlencoded',
                            'referer': '',
                            'user-agent': 'JD4iPhone/167814 (iPhone; iOS 12.4.1; Scale/3.00)',
                            'accept-language': 'zh-Hans-CN;q=1',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    token = data.token;
                    return [2 /*return*/];
            }
        });
    });
}
function getToken() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post('https://ddsj-dz.isvjcloud.com/dd-api/jd-user-info', "token=".concat(token, "&source=01"), {
                        headers: {
                            'Host': 'ddsj-dz.isvjcloud.com',
                            'Origin': 'https://ddsj-dz.isvjcloud.com',
                            'Authorization': 'Bearer undefined',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://ddsj-dz.isvjcloud.com',
                            'Cookie': "IsvToken=".concat(tokenKey, ";")
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    bearer = data.access_token;
                    return [2 /*return*/];
            }
        });
    });
}
