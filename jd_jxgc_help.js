"use strict";
/**
 * 这是一个只会助力的脚本，因为没打工仔了。
 * 先内部，再助力池。
 * cron: 0,30 21-23 * * *
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
var jxfactory;
try {
    jxfactory = require('../tools/jd_shareCodesTool').jxfactory;
}
catch (e) {
    jxfactory = require('./JDHelloWorld_jd_scripts_jd_shareCodesTool').jxfactory;
}
var cookie = '', res = '', UserName, index;
var shareCodes = [], shareCodesInternal = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, sharecode, _i, cookiesArr_1, emp, empName, sharecode, _a, shareCodes_1, boss;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _b.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _b.sent();
                i = 0;
                _b.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 7];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                return [4 /*yield*/, jxfactory(cookie)];
            case 4:
                sharecode = _b.sent();
                console.log('助力码:', sharecode);
                shareCodesInternal.push(sharecode);
                return [4 /*yield*/, api('friend/QueryFriendList', '_time,zone')];
            case 5:
                res = _b.sent();
                console.log('收到助力:', res.data.hireListToday.length, '/', res.data.hireNumMax);
                _b.label = 6;
            case 6:
                i++;
                return [3 /*break*/, 3];
            case 7:
                console.log('内部助力码:', shareCodesInternal);
                _i = 0, cookiesArr_1 = cookiesArr;
                _b.label = 8;
            case 8:
                if (!(_i < cookiesArr_1.length)) return [3 /*break*/, 18];
                emp = cookiesArr_1[_i];
                cookie = emp;
                empName = decodeURIComponent(emp.match(/pt_pin=([^;]*)/)[1]);
                return [4 /*yield*/, jxfactory(emp)];
            case 9:
                sharecode = _b.sent();
                return [4 /*yield*/, getShareCodes()];
            case 10:
                _b.sent();
                _a = 0, shareCodes_1 = shareCodes;
                _b.label = 11;
            case 11:
                if (!(_a < shareCodes_1.length)) return [3 /*break*/, 16];
                boss = shareCodes_1[_a];
                if (!(sharecode === boss)) return [3 /*break*/, 12];
                console.log('不给自己助力');
                return [3 /*break*/, 15];
            case 12:
                console.log(empName + "\u7ED9" + boss + "\u52A9\u529B");
                return [4 /*yield*/, api('friend/AssistFriend', '_time,sharepin,zone', { sharepin: boss })];
            case 13:
                res = _b.sent();
                if (res.ret === 0) {
                    console.log('助力成功');
                    return [3 /*break*/, 16];
                }
                else if (res.ret === 11009) {
                    console.log('助力失败:', res.msg);
                    return [3 /*break*/, 16];
                }
                else {
                    console.log('助力失败:', res.msg);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 14:
                _b.sent();
                _b.label = 15;
            case 15:
                _a++;
                return [3 /*break*/, 11];
            case 16:
                console.log('');
                _b.label = 17;
            case 17:
                _i++;
                return [3 /*break*/, 8];
            case 18: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    var _this = this;
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var url, key, data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/dreamfactory/" + fn + "?zone=dream_factory&_time=" + Date.now() + "&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2";
                    if (Object.keys(params).length !== 0) {
                        key = void 0;
                        for (key in params) {
                            if (params.hasOwnProperty(key))
                                url += "&" + key + "=" + params[key];
                        }
                    }
                    url += '&h5st=' + (0, TS_USER_AGENTS_1.decrypt)(stk, url);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Cookie': cookie,
                                'Host': 'm.jingxi.com',
                                'User-Agent': 'jdpingou;',
                                'Referer': 'https://actst.jingxi.com/pingou/dream_factory/index.html'
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    resolve(data);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    reject(401);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
function getShareCodes() {
    return __awaiter(this, void 0, void 0, function () {
        var data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.sharecode.ga/api/jxfactory/30")];
                case 1:
                    data = (_a.sent()).data;
                    console.log("\u4ECE\u52A9\u529B\u6C60\u83B7\u53D6\u523030\u4E2A:" + JSON.stringify(data.data));
                    shareCodes = __spreadArray(__spreadArray([], shareCodesInternal, true), data.data, true);
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    shareCodes = __spreadArray([], shareCodesInternal, true);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
