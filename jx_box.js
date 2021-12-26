"use strict";
/**
 * 京喜-88红包-宝箱
 * 做任务、开宝箱
 * 每号可收20次助力，出1次助力
 * cron: 5 0,6,12 * * *
 * CK1默认优先助力HW.ts，其余助力CK1
 * HW_Priority: boolean
 * true  HW.ts -> 内部
 * false 内部   -> HW.ts
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
var cookie = '', res = '', UserName, index;
var shareCodeSelf = [], shareCode = [], shareCodeHW = ['aae98a3e3b04d3ac430ee9ee91f4759d', 'bdf489af86e5021575040fffee407bc2', '92a46b6081a955fb4dcea1e56e590b3a', '638d77021a1dd4d74cad72d44afd9899', 'f4dc33716d2551e372fd44f5ac0baca8', 'c99659c47858f18fb34427fec4647f17', '34bf741e6bb01c53d879f58b2c1a9205'];
var HW_Priority = true;
process.env.HW_Priority === 'false' ? HW_Priority = false : '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, HW_Random, _i, shareCode_1, code, i, _a, _b, t, sqactive, _c, _d, t, _e, _f, t, e_1;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _g.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _g.sent();
                cookie = cookiesArr[0];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F71 ".concat(UserName, "\n"));
                return [4 /*yield*/, api('query', 'signhb_source,smp,type', {})];
            case 3:
                res = _g.sent();
                console.log('助力码:', res.smp);
                shareCodeSelf.push(res.smp);
                console.log('内部助力:', shareCodeSelf);
                i = 0;
                _g.label = 4;
            case 4:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 10];
                HW_Random = shareCodeHW[Math.floor(Math.random() * shareCodeHW.length)];
                if (i === 0 && HW_Priority) {
                    shareCode = Array.from(new Set(__spreadArray([HW_Random], shareCodeSelf, true)));
                }
                else {
                    shareCode = Array.from(new Set(__spreadArray(__spreadArray([], shareCodeSelf, true), [HW_Random], false)));
                }
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                _i = 0, shareCode_1 = shareCode;
                _g.label = 5;
            case 5:
                if (!(_i < shareCode_1.length)) return [3 /*break*/, 9];
                code = shareCode_1[_i];
                console.log("".concat(UserName, " \u53BB\u52A9\u529B ").concat(code));
                return [4 /*yield*/, api('query', 'signhb_source,smp,type', { signhb_source: 5, smp: code, type: 1 })];
            case 6:
                res = _g.sent();
                console.log('助力码:', res.smp);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 7:
                _g.sent();
                if (res.autosign_sendhb !== '0' || res.todaysign === 1)
                    return [3 /*break*/, 9];
                _g.label = 8;
            case 8:
                _i++;
                return [3 /*break*/, 5];
            case 9:
                i++;
                return [3 /*break*/, 4];
            case 10:
                i = 0;
                _g.label = 11;
            case 11:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 38];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                _g.label = 12;
            case 12:
                _g.trys.push([12, 34, , 35]);
                return [4 /*yield*/, api('query', 'ispp,signhb_source,smp,tk,type', { signhb_source: 5, smp: '', ispp: 0, tk: '', type: 1 })];
            case 13:
                // 宝箱任务
                res = _g.sent();
                try {
                    console.log(res.invitesign);
                    console.log(parseFloat(res.invitesign.getmoney));
                }
                catch (e) {
                    console.log(res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 14:
                _g.sent();
                return [4 /*yield*/, api('query', 'signhb_source,smp,type', { signhb_source: 5, smp: '', type: 1 })
                    /*
                    // 日历
                    let rili: number = res.riliremind_task.status
                      "riliremind_task":
                      {
                          "domax": 0,
                          "forwardAlarmTime": "",
                          "getmoney": "0",
                          "getniu": "",
                          "rank": "",
                          "remindpopTitle": "",
                          "remindtime": "",
                          "status": 1,
                          "task": "",
                          "taskLink": "",
                          "taskbtnn": "",
                          "taskbtny": "",
                          "taskname": "",
                          "url": ""
                      }
                    console.log(res.riliremind_task.getmoney)
                    if (rili === 1) {
                      res = await api(`https://m.jingxi.com/fanxiantask/signhb/dotask?task=rili_remind&signhb_source=5&ispp=0&sqactive=&tk=&_stk=ispp%2Csignhb_source%2Csqactive%2Ctask%2Ctk&_ste=1&_=${Date.now()}&sceneval=2`, 'ispp,signhb_source,sqactive,task,tk')
                      if (res.ret === 0) {
                        console.log('日历任务完成')
                      } else {
                        console.log('日历任务失败', res)
                      }
                    }
                    */
                ];
            case 15:
                res = _g.sent();
                _a = 0, _b = res.commontask || [];
                _g.label = 16;
            case 16:
                if (!(_a < _b.length)) return [3 /*break*/, 20];
                t = _b[_a];
                if (!(t.status === 1)) return [3 /*break*/, 19];
                console.log(t.taskname);
                return [4 /*yield*/, api("https://m.jingxi.com/fanxiantask/signhb/dotask?task=".concat(t.task, "&signhb_source=5&_=").concat(Date.now(), "&sceneval=2"), '')];
            case 17:
                res = _g.sent();
                if (res.ret === 0) {
                    console.log('任务完成，获得：', res.sendhb);
                }
                else {
                    console.log('任务失败：', res.errmsg);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 18:
                _g.sent();
                _g.label = 19;
            case 19:
                _a++;
                return [3 /*break*/, 16];
            case 20: return [4 /*yield*/, api('query', 'ispp,signhb_source,smp,tk,type', { type: 0, signhb_source: 5, smp: '', ispp: 1, tk: '' })];
            case 21:
                // 喜豆任务
                res = _g.sent();
                sqactive = res.sqactive;
                _c = 0, _d = res.commontask;
                _g.label = 22;
            case 22:
                if (!(_c < _d.length)) return [3 /*break*/, 26];
                t = _d[_c];
                if (!(t.status === 1)) return [3 /*break*/, 25];
                console.log('喜豆任务：', t.taskbtnn);
                return [4 /*yield*/, api("https://m.jingxi.com/fanxiantask/signhb/dotask?task=".concat(t.task, "&signhb_source=5&ispp=1&sqactive=").concat(sqactive, "&tk=&_=").concat(Date.now(), "&sceneval=2"), '')];
            case 23:
                res = _g.sent();
                console.log('任务完成，获得：', res.sendxd);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 24:
                _g.sent();
                _g.label = 25;
            case 25:
                _c++;
                return [3 /*break*/, 22];
            case 26: return [4 /*yield*/, api('query', 'signhb_source,smp,type', { signhb_source: 5, smp: '', type: 1 })];
            case 27:
                // 开宝箱
                res = _g.sent();
                if (!(res.baoxiang_left != 0)) return [3 /*break*/, 32];
                console.log(res.baoxiang_stage);
                _e = 0, _f = res.baoxiang_stage;
                _g.label = 28;
            case 28:
                if (!(_e < _f.length)) return [3 /*break*/, 32];
                t = _f[_e];
                if (!(t.status === 1)) return [3 /*break*/, 31];
                return [4 /*yield*/, api("https://m.jingxi.com/fanxiantask/signhb/bxdraw?_=".concat(Date.now(), "&sceneval=2"), '')];
            case 29:
                res = _g.sent();
                console.log('开宝箱，获得：', res.sendhb);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 30:
                _g.sent();
                _g.label = 31;
            case 31:
                _e++;
                return [3 /*break*/, 28];
            case 32: return [4 /*yield*/, doubleSign()];
            case 33:
                res = _g.sent();
                if (res.retCode === 0) {
                    console.log('双签成功');
                }
                else {
                    console.log('双签失败', res);
                }
                return [3 /*break*/, 35];
            case 34:
                e_1 = _g.sent();
                console.log(e_1);
                return [3 /*break*/, 35];
            case 35: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 36:
                _g.sent();
                _g.label = 37;
            case 37:
                i++;
                return [3 /*break*/, 11];
            case 38: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    if (params === void 0) { params = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var url, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/fanxiantask/signhb/".concat(fn, "?_stk=").concat(encodeURIComponent(stk), "&_ste=1&_=").concat(Date.now(), "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls");
                    if (fn.match(/(dotask|bxdraw)/)) {
                        url = fn;
                    }
                    url = (0, TS_USER_AGENTS_1.h5st)(url, stk, params, 10038);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'Accept': '*/*',
                                'Connection': 'keep-alive',
                                'User-Agent': 'jdpingou;',
                                'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                                'Referer': 'https://st.jingxi.com/',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, JSON.parse(data.match(/\((.*)/)[1])];
            }
        });
    });
}
function doubleSign() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://m.jingxi.com/double_sign/IssueReward?sceneval=2&g_login_type=1&callback=jsonpCBK".concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls"), {
                        headers: {
                            'Host': 'm.jingxi.com',
                            'Accept': '*/*',
                            'Connection': 'keep-alive',
                            'User-Agent': 'jdpingou;',
                            'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                            'Referer': 'https://st.jingxi.com/',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, JSON.parse(data.match(/jsonpCBK.?\((.*)/)[1])];
            }
        });
    });
}
