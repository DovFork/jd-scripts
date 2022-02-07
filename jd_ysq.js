"use strict";
/**
 * 京喜-天天压岁钱
 * cron: 5 0,9,18 * * *
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
var cookie = '', res = '', UserName;
var shareCodes = [], shareCodesSelf = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, _c, _d, t, _e, _f, _g, index, value, _h, shareCodes_1, code;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0: return [4 /*yield*/, (0, V3_1.requestAlgo)('76a41', 'jdpingou;')];
            case 1:
                _j.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _j.sent();
                _i = 0, _a = cookiesArr.entries();
                _j.label = 3;
            case 3:
                if (!(_i < _a.length)) return [3 /*break*/, 15];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('GetUserInfo', '__t,dwEnv,nopopup,strInviteId', { strInviteId: '', nopopup: 1 })];
            case 4:
                // 助力码
                res = _j.sent();
                console.log('助力码:', res.myInfo.shareId);
                shareCodesSelf.push(res.myInfo.shareId);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 5:
                _j.sent();
                return [4 /*yield*/, api('GetTaskList', '__t,dwEnv', {})];
            case 6:
                res = _j.sent();
                _c = 0, _d = res.data.taskList;
                _j.label = 7;
            case 7:
                if (!(_c < _d.length)) return [3 /*break*/, 14];
                t = _d[_c];
                if (!(t.completedTimes !== t.configTargetTimes)) return [3 /*break*/, 10];
                if (!(t.awardStatus === 2 && [2, 14].includes(t.taskType))) return [3 /*break*/, 10];
                console.log('开始任务:', t.taskName);
                return [4 /*yield*/, api('DoTask', '__t,bizCode,configExtra,dwEnv,strShareId,taskId', { bizCode: t.bizCode, configExtra: '', strShareId: '', taskId: t.taskId })];
            case 8:
                res = _j.sent();
                if (res.iRet === 0) {
                    console.log('任务完成');
                }
                else {
                    console.log('任务失败', (0, TS_USER_AGENTS_1.obj2str)(res));
                    return [3 /*break*/, 14];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 9:
                _j.sent();
                _j.label = 10;
            case 10:
                if (!(t.completedTimes === t.configTargetTimes && t.awardStatus === 2)) return [3 /*break*/, 13];
                return [4 /*yield*/, api('Award', '__t,bizCode,dwEnv,source,taskId', { bizCode: t.bizCode, source: t.bizCode, taskId: t.taskId })];
            case 11:
                res = _j.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 13];
                res = JSON.parse(res.data.prizeInfo);
                console.log('领奖成功:', res.ddwAward, res.ddwExtAward);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1500)];
            case 12:
                _j.sent();
                _j.label = 13;
            case 13:
                _c++;
                return [3 /*break*/, 7];
            case 14:
                _i++;
                return [3 /*break*/, 3];
            case 15:
                _e = 0, _f = cookiesArr.entries();
                _j.label = 16;
            case 16:
                if (!(_e < _f.length)) return [3 /*break*/, 24];
                _g = _f[_e], index = _g[0], value = _g[1];
                if (!(shareCodesHW.length === 0)) return [3 /*break*/, 18];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('ysq')];
            case 17:
                shareCodesHW = _j.sent();
                _j.label = 18;
            case 18:
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true)));
                cookie = value;
                _h = 0, shareCodes_1 = shareCodes;
                _j.label = 19;
            case 19:
                if (!(_h < shareCodes_1.length)) return [3 /*break*/, 23];
                code = shareCodes_1[_h];
                console.log("\u8D26\u53F7".concat(index + 1, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodesSelf.includes(code) ? '*内部*' : ''));
                return [4 /*yield*/, api('BestWishes', '__t,dwEnv,id,shareId', { id: 1, shareId: code })];
            case 20:
                res = _j.sent();
                if (res.iRet === 0) {
                    if (res.data.toast === '助力失败，活动太火爆，晚点再来试试吧～') {
                        console.log('黑号，无法助力别人');
                        return [3 /*break*/, 23];
                    }
                    else if (res.data.toast === '') {
                        console.log('助力成功');
                    }
                    else {
                        console.log(res.data.toast);
                    }
                }
                else {
                    console.log('助力失败', (0, TS_USER_AGENTS_1.obj2str)(res));
                    return [3 /*break*/, 23];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 21:
                _j.sent();
                _j.label = 22;
            case 22:
                _h++;
                return [3 /*break*/, 19];
            case 23:
                _e++;
                return [3 /*break*/, 16];
            case 24: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    return __awaiter(this, void 0, void 0, function () {
        var url, timestamp, t, _i, _a, _b, key, value, h5st, data;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    timestamp = Date.now();
                    t = [
                        { key: '__t', value: timestamp.toString() },
                        { key: 'dwEnv', value: '7' },
                    ];
                    url = fn === 'Award'
                        ? "https://m.jingxi.com/newtasksys/newtasksys_front/".concat(fn, "?__t=").concat(timestamp, "&dwEnv=7&_stk=").concat(encodeURIComponent(stk), "&_ste=1&sceneval=2&g_login_type=1&g_ty=ajax")
                        : "https://m.jingxi.com/jxnhj/".concat(fn, "?__t=").concat(timestamp, "&dwEnv=7&_stk=").concat(encodeURIComponent(stk), "&_ste=1&sceneval=2&g_login_type=1&g_ty=ajax");
                    for (_i = 0, _a = Object.entries(params); _i < _a.length; _i++) {
                        _b = _a[_i], key = _b[0], value = _b[1];
                        t.push({ key: key, value: value });
                        url += "&".concat(key, "=").concat(value);
                    }
                    h5st = (0, V3_1.geth5st)(t, '76a41');
                    url += "&h5st=".concat(encodeURIComponent(h5st));
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'User-Agent': 'jdpingou;',
                                'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                                'Referer': 'https://st.jingxi.com/',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_c.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
