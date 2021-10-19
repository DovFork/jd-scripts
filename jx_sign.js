"use strict";
/**
 * 任务、宝箱
 * TODO 助力
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
exports.__esModule = true;
var axios_1 = require("axios");
var path = require("path");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', USER_AGENT = "jdpingou;", UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, except, i, _i, _a, t, _b, _c, t, e_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _d.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _d.sent();
                except = (0, TS_USER_AGENTS_1.exceptCookie)(path.basename(__filename));
                i = 0;
                _d.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 21];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                if (except.includes(encodeURIComponent(UserName))) {
                    console.log('已设置跳过');
                    return [3 /*break*/, 20];
                }
                _d.label = 4;
            case 4:
                _d.trys.push([4, 17, , 18]);
                return [4 /*yield*/, api('query', 'signhb_source,smp,type', { signhb_source: 5, smp: '', type: 1 })];
            case 5:
                res = _d.sent();
                _i = 0, _a = res.commontask;
                _d.label = 6;
            case 6:
                if (!(_i < _a.length)) return [3 /*break*/, 10];
                t = _a[_i];
                if (!(t.status === 1)) return [3 /*break*/, 9];
                console.log(t.taskname);
                return [4 /*yield*/, api("https://m.jingxi.com/fanxiantask/signhb/dotask?task=" + t.task + "&signhb_source=5&_=" + Date.now() + "&sceneval=2&g_login_type=1&callback=jsonpCBKB&g_ty=ls", '')];
            case 7:
                res = _d.sent();
                if (res.ret === 0) {
                    console.log('任务完成，获得：', res.sendhb);
                }
                else {
                    console.log('任务失败：', res.errmsg);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 8:
                _d.sent();
                _d.label = 9;
            case 9:
                _i++;
                return [3 /*break*/, 6];
            case 10: return [4 /*yield*/, api('query', 'signhb_source,smp,type', { signhb_source: 5, smp: '', type: 1 })];
            case 11:
                res = _d.sent();
                if (!(res.baoxiang_left != 0)) return [3 /*break*/, 16];
                _b = 0, _c = res.baoxiang_stage;
                _d.label = 12;
            case 12:
                if (!(_b < _c.length)) return [3 /*break*/, 16];
                t = _c[_b];
                if (!(t.status === 1)) return [3 /*break*/, 15];
                return [4 /*yield*/, api("https://m.jingxi.com/fanxiantask/signhb/bxdraw?_=" + Date.now() + "&sceneval=2", '')];
            case 13:
                res = _d.sent();
                console.log('开宝箱，获得：', res.sendhb);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 14:
                _d.sent();
                _d.label = 15;
            case 15:
                _b++;
                return [3 /*break*/, 12];
            case 16: return [3 /*break*/, 18];
            case 17:
                e_1 = _d.sent();
                console.log(e_1);
                return [3 /*break*/, 18];
            case 18: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 19:
                _d.sent();
                _d.label = 20;
            case 20:
                i++;
                return [3 /*break*/, 3];
            case 21: return [2 /*return*/];
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
                    url = "https://m.jingxi.com/fanxiantask/signhb/" + fn + "?_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2&g_login_type=1&callback=jsonpCBKB&g_ty=ls";
                    url = (0, TS_USER_AGENTS_1.h5st)(url, stk, params, 10038);
                    if (fn.match(/(dotask|bxdraw)/)) {
                        url = fn;
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'User-Agent': USER_AGENT,
                                'Referer': 'https://st.jingxi.com/',
                                'X-Requested-With': 'com.jd.pingou',
                                'Cookie': cookie
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    if (typeof data === 'string') {
                        data = data.replace('try{jsonpCBKB(', '').replace('try{Query(', '').replace('try{BxDraw(', '').split('\n')[0];
                        resolve(JSON.parse(data));
                    }
                    else {
                        resolve(data);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    reject(401);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
