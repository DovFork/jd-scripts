"use strict";
/**
 * 京喜-首页-牛牛福利
 * 1 0,9,19,23 * * *
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
var cookie = '', UserName, index, allMessage = '', res = '', message = '';
var shareCodeSelf = [], shareCode = [], shareCodeHW = [
    'XGxI73R4Uu88cRIL2AqoJqA6ARbMr6sd61N5WAIe0uE=',
    'XGxI73R4Uu88cRIL2AqoJqgNuwWuQGNjLRJIFY-3_rxsWB2PWldeVlSv7mzjupaI',
    'XGxI73R4Uu88cRIL2AqoJgWJCtAg_6Zac104GwpC7iu1iLBi33sHk8tz9b3Oc8w5',
    'XGxI73R4Uu88cRIL2AqoJngB6FxQhXeTexN8lMu0ejY=',
    'XGxI73R4Uu88cRIL2AqoJmZUOjq-1DhZURMBZYdfxv3hG1P_qnrIyxaEmseHd2aL'
];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, coin, tasks, _i, _a, t, _b, _c, t, _d, _e, t, surplusTimes, j, i, _f, shareCode_1, code;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _h.sent();
                i = 0;
                _h.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 22];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                return [4 /*yield*/, api('sign/UserSignNew', 'sceneval,source', { source: '' })];
            case 3:
                res = _h.sent();
                console.log('签到', JSON.stringify(res));
                console.log('助力码', res.data.token);
                shareCodeSelf.push(res.data.token);
                coin = res.data.pgAmountTotal;
                console.log('金币', coin);
                return [4 /*yield*/, api('task/QueryUserTask', 'sceneval,taskType', { taskType: 0 })];
            case 4:
                res = _h.sent();
                tasks = [];
                for (_i = 0, _a = (_g = res.datas) !== null && _g !== void 0 ? _g : []; _i < _a.length; _i++) {
                    t = _a[_i];
                    if (t.state !== 2)
                        tasks.push(t.taskid);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 5:
                _h.sent();
                return [4 /*yield*/, api('task/QueryPgTaskCfg', 'sceneval', {})];
            case 6:
                res = _h.sent();
                if (tasks.length === 0) {
                    for (_b = 0, _c = res.data.tasks; _b < _c.length; _b++) {
                        t = _c[_b];
                        tasks.push(t.taskid);
                    }
                }
                _d = 0, _e = res.data.tasks;
                _h.label = 7;
            case 7:
                if (!(_d < _e.length)) return [3 /*break*/, 13];
                t = _e[_d];
                if (!tasks.includes(t.taskid)) return [3 /*break*/, 12];
                console.log(t.taskName);
                return [4 /*yield*/, api('task/drawUserTask', 'sceneval,taskid', { taskid: t.taskId })];
            case 8:
                res = _h.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 9:
                _h.sent();
                return [4 /*yield*/, api('task/UserTaskFinish', 'sceneval,taskid', { taskid: t.taskId })];
            case 10:
                res = _h.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 11:
                _h.sent();
                _h.label = 12;
            case 12:
                _d++;
                return [3 /*break*/, 7];
            case 13: return [4 /*yield*/, api('active/LuckyTwistUserInfo', 'sceneval', {})];
            case 14:
                res = _h.sent();
                surplusTimes = res.data.surplusTimes;
                console.log('剩余抽奖次数', surplusTimes);
                j = 0;
                _h.label = 15;
            case 15:
                if (!(j < surplusTimes && coin >= 10)) return [3 /*break*/, 19];
                return [4 /*yield*/, api('active/LuckyTwistDraw', 'active,activedesc,sceneval', { active: 'rwjs_fk1111', activedesc: encodeURIComponent('幸运扭蛋机抽奖') })];
            case 16:
                res = _h.sent();
                console.log('抽奖成功', JSON.stringify(res));
                coin -= 10;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 17:
                _h.sent();
                _h.label = 18;
            case 18:
                j++;
                return [3 /*break*/, 15];
            case 19: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 20:
                _h.sent();
                _h.label = 21;
            case 21:
                i++;
                return [3 /*break*/, 2];
            case 22:
                console.log('内部助力', shareCodeSelf);
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], shareCodeSelf, true), shareCodeHW, true)));
                i = 0;
                _h.label = 23;
            case 23:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 29];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                _f = 0, shareCode_1 = shareCode;
                _h.label = 24;
            case 24:
                if (!(_f < shareCode_1.length)) return [3 /*break*/, 28];
                code = shareCode_1[_f];
                console.log(UserName + " \u53BB\u52A9\u529B " + code);
                return [4 /*yield*/, api('sign/helpSign', 'flag,sceneval,token', { flag: 0, token: code })];
            case 25:
                res = _h.sent();
                console.log('助力结果', JSON.stringify(res));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 26:
                _h.sent();
                _h.label = 27;
            case 27:
                _f++;
                return [3 /*break*/, 24];
            case 28:
                i++;
                return [3 /*break*/, 23];
            case 29: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    return __awaiter(this, void 0, void 0, function () {
        var url, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/pgcenter/" + fn + "?sceneval=2&_stk=sceneval&_ste=1&_=" + Date.now() + "&sceneval=2", stk, params, 10012);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'User-Agent': 'jdpingou;',
                                'Referer': 'https://st.jingxi.com/pingou/taskcenter/index.html',
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
