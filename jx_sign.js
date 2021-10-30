"use strict";
/**
 * 任务、宝箱
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
var path = require("path");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', UserName, index;
var shareCodeSelf = [], shareCode = [], shareCodeHW = [
    'aae98a3e3b04d3ac430ee9ee91f4759d',
    'bdf489af86e5021575040fffee407bc2',
    '92a46b6081a955fb4dcea1e56e590b3a',
    '638d77021a1dd4d74cad72d44afd9899',
    'f4dc33716d2551e372fd44f5ac0baca8'
];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, except, i, i, _i, shareCode_1, code, i, rili, _a, _b, t, _c, _d, t, e_1;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _e.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _e.sent();
                except = (0, TS_USER_AGENTS_1.exceptCookie)(path.basename(__filename));
                i = 0;
                _e.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 7];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                return [4 /*yield*/, api('query', 'signhb_source,smp,type', {})];
            case 4:
                res = _e.sent();
                console.log('助力码:', res.smp);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 5:
                _e.sent();
                shareCodeSelf.push(res.smp);
                _e.label = 6;
            case 6:
                i++;
                return [3 /*break*/, 3];
            case 7:
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], shareCodeSelf, true), shareCodeHW, true)));
                console.log('内部助力:', shareCodeSelf);
                i = 0;
                _e.label = 8;
            case 8:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 14];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                _i = 0, shareCode_1 = shareCode;
                _e.label = 9;
            case 9:
                if (!(_i < shareCode_1.length)) return [3 /*break*/, 13];
                code = shareCode_1[_i];
                console.log(UserName + " \u53BB\u52A9\u529B " + code);
                return [4 /*yield*/, api('query', 'signhb_source,smp,type', { signhb_source: 5, smp: code, type: 1 })];
            case 10:
                res = _e.sent();
                console.log('助力', JSON.stringify(res));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 11:
                _e.sent();
                _e.label = 12;
            case 12:
                _i++;
                return [3 /*break*/, 9];
            case 13:
                i++;
                return [3 /*break*/, 8];
            case 14:
                i = 0;
                _e.label = 15;
            case 15:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 36];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                if (except.includes(encodeURIComponent(UserName))) {
                    console.log('已设置跳过');
                    return [3 /*break*/, 35];
                }
                _e.label = 16;
            case 16:
                _e.trys.push([16, 32, , 33]);
                return [4 /*yield*/, api('query', 'signhb_source,smp,type', { signhb_source: 5, smp: '', type: 1 })];
            case 17:
                res = _e.sent();
                rili = res.riliremind_task.status;
                console.log(res.riliremind_task.getmoney);
                _a = 0, _b = res.commontask;
                _e.label = 18;
            case 18:
                if (!(_a < _b.length)) return [3 /*break*/, 22];
                t = _b[_a];
                if (!(t.status === 1)) return [3 /*break*/, 21];
                console.log(t.taskname);
                return [4 /*yield*/, api("https://m.jingxi.com/fanxiantask/signhb/dotask?task=" + t.task + "&signhb_source=5&_=" + Date.now() + "&sceneval=2", '')];
            case 19:
                res = _e.sent();
                if (res.ret === 0) {
                    console.log('任务完成，获得：', res.sendhb);
                }
                else {
                    console.log('任务失败：', res.errmsg);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 20:
                _e.sent();
                _e.label = 21;
            case 21:
                _a++;
                return [3 /*break*/, 18];
            case 22:
                if (!(rili === 1)) return [3 /*break*/, 24];
                return [4 /*yield*/, api("https://m.jingxi.com/fanxiantask/signhb/dotask?task=rili_remind&signhb_source=5&ispp=0&sqactive=&tk=&_stk=ispp%2Csignhb_source%2Csqactive%2Ctask%2Ctk&_ste=1&_=" + Date.now() + "&sceneval=2", 'ispp,signhb_source,sqactive,task,tk')];
            case 23:
                res = _e.sent();
                if (res.ret === 0) {
                    console.log('日历任务完成');
                }
                else {
                    console.log('日历任务失败', res);
                }
                _e.label = 24;
            case 24: return [4 /*yield*/, api('query', 'signhb_source,smp,type', { signhb_source: 5, smp: '', type: 1 })];
            case 25:
                res = _e.sent();
                if (!(res.baoxiang_left != 0)) return [3 /*break*/, 30];
                console.log(res.baoxiang_stage);
                _c = 0, _d = res.baoxiang_stage;
                _e.label = 26;
            case 26:
                if (!(_c < _d.length)) return [3 /*break*/, 30];
                t = _d[_c];
                if (!(t.status === 1)) return [3 /*break*/, 29];
                return [4 /*yield*/, api("https://m.jingxi.com/fanxiantask/signhb/bxdraw?_=" + Date.now() + "&sceneval=2", '')];
            case 27:
                res = _e.sent();
                console.log('开宝箱，获得：', res.sendhb);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 28:
                _e.sent();
                _e.label = 29;
            case 29:
                _c++;
                return [3 /*break*/, 26];
            case 30: return [4 /*yield*/, doubleSign()];
            case 31:
                res = _e.sent();
                if (res.retCode === 0) {
                    console.log('双签成功');
                }
                else {
                    console.log('双签失败', res);
                }
                return [3 /*break*/, 33];
            case 32:
                e_1 = _e.sent();
                console.log(e_1);
                return [3 /*break*/, 33];
            case 33: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 34:
                _e.sent();
                _e.label = 35;
            case 35:
                i++;
                return [3 /*break*/, 15];
            case 36: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    var _this = this;
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var url, data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/fanxiantask/signhb/" + fn + "?_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2";
                    if (fn.match(/(dotask|bxdraw)/)) {
                        url = fn;
                    }
                    url = (0, TS_USER_AGENTS_1.h5st)(url, stk, params, 10038);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'User-Agent': "jdpingou;iPhone;5.9.0;12.4.1;" + (0, TS_USER_AGENTS_1.randomString)(40) + ";network/wifi;",
                                'Referer': 'https://st.jingxi.com/',
                                'Cookie': cookie
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    if (typeof data === 'string') {
                        data = data.replace('try{jsonpCBKB(', '').replace('try{Query(', '').replace('try{BxDraw(', '').replace('try{Dotask(', '').split('\n')[0];
                        resolve(JSON.parse(data));
                    }
                    else {
                        resolve(data);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    reject(e_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
function doubleSign() {
    return __awaiter(this, void 0, void 0, function () {
        var data, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get('https://m.jingxi.com/double_sign/IssueReward?sceneval=2', {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'Origin': 'https://st.jingxi.com',
                                'Accept': 'application/json',
                                'User-Agent': 'jdpingou;',
                                'Referer': 'https://st.jingxi.com/pingou/jxapp_double_signin/index.html',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
                case 2:
                    e_3 = _a.sent();
                    console.log(e_3);
                    return [2 /*return*/, ''];
                case 3: return [2 /*return*/];
            }
        });
    });
}
