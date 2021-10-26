"use strict";
/**
 * 京喜牧场兑换新品通知
 * 推送新上商品
 * cron: 0 * * * *
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
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var fs_1 = require("fs");
var notify = require('./sendNotify'), jxmcToken = require('./utils/jd_jxmc.js').token;
var cookie = '', res = '', UserName;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, exist, items, message, token, _i, _a, good, allItems, arr, result, i, len, _b, result_1, group, _c, group_1, id, _d, _e, t, _f, _g, j;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _h.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _h.sent();
                cookie = cookiesArr[(0, TS_USER_AGENTS_1.getRandomNumberByRange)(0, cookiesArr.length)];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                try {
                    (0, fs_1.accessSync)('./json/jxmc_stock.json');
                }
                catch (e) {
                    (0, fs_1.writeFileSync)('./json/jxmc_stock.json', '{}', 'utf-8');
                }
                exist = (0, fs_1.readFileSync)('./json/jxmc_stock.json', 'utf-8');
                try {
                    exist = JSON.parse(exist);
                }
                catch (e) {
                    exist = {};
                }
                items = '', message = '';
                return [4 /*yield*/, jxmcToken(cookie)];
            case 3:
                token = _h.sent();
                _h.label = 4;
            case 4:
                if (!1) return [3 /*break*/, 6];
                if (new Date().getSeconds() === 0)
                    return [3 /*break*/, 6];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(100)];
            case 5:
                _h.sent();
                return [3 /*break*/, 4];
            case 6: return [4 /*yield*/, api('queryservice/GetGoodsListV2', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp', {
                    activeid: 'jxmc_active_0001',
                    activekey: 'null',
                    jxmc_jstoken: token.farm_jstoken,
                    timestamp: token.timestamp,
                    phoneid: token.phoneid
                })];
            case 7:
                res = _h.sent();
                console.log(JSON.stringify(res));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 8:
                _h.sent();
                for (_i = 0, _a = res.data.goodslist; _i < _a.length; _i++) {
                    good = _a[_i];
                    if (!Object.keys(exist).includes(good.prizepool)) {
                        items += good.prizepool + ',';
                        exist[good.prizepool] = {
                            id: good.prizepool,
                            egg: good.neednum
                        };
                    }
                }
                allItems = items;
                if (!items) return [3 /*break*/, 13];
                arr = items.split(',');
                arr.pop();
                items = '';
                result = [];
                for (i = 0, len = arr.length; i < len; i += 30) {
                    result.push(arr.slice(i, i + 30));
                }
                _b = 0, result_1 = result;
                _h.label = 9;
            case 9:
                if (!(_b < result_1.length)) return [3 /*break*/, 13];
                group = result_1[_b];
                for (_c = 0, group_1 = group; _c < group_1.length; _c++) {
                    id = group_1[_c];
                    items += id + ',';
                }
                return [4 /*yield*/, getEgg(items)];
            case 10:
                res = _h.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 11:
                _h.sent();
                for (_d = 0, _e = res.result; _d < _e.length; _d++) {
                    t = _e[_d];
                    exist[t.active].name = t.prizes[0].Name;
                }
                items = '';
                _h.label = 12;
            case 12:
                _b++;
                return [3 /*break*/, 9];
            case 13:
                (0, fs_1.writeFileSync)('./json/jxmc_stock.json', JSON.stringify(exist, null, 2), 'utf-8');
                for (_f = 0, _g = Object.keys(exist); _f < _g.length; _f++) {
                    j = _g[_f];
                    if (allItems.indexOf(j) > -1) {
                        message += exist[j].name + '\t' + exist[j].egg + '\n';
                    }
                }
                console.log(message);
                if (!message) return [3 /*break*/, 15];
                return [4 /*yield*/, notify.sendNotify('京喜牧场兑换', message)];
            case 14:
                _h.sent();
                _h.label = 15;
            case 15: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    var _this = this;
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var url, data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/jxmc/" + fn + "?channel=7&sceneid=1001&_stk=" + encodeURIComponent(stk) + "&_ste=1&sceneval=2";
                    url = (0, TS_USER_AGENTS_1.h5st)(url, stk, params, 10028);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Cookie': cookie,
                                'Host': 'm.jingxi.com',
                                'User-Agent': 'jdpingou;',
                                'Referer': 'https://st.jingxi.com/'
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
function getEgg(items) {
    var _this = this;
    items = items.substr(0, items.length - 1);
    var rnd = "abcdefhijkmnprstwxyz".charAt(Math.floor(Math.random() * 4)).toUpperCase();
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://m.jingxi.com/active/queryprizedetails?actives=" + items + "&_=" + Date.now() + "&sceneval=2&g_login_type=1&callback=jsonpCBK" + rnd + "&g_ty=ls", {
                        headers: {
                            'Cookie': cookie,
                            'Host': 'm.jingxi.com',
                            'User-Agent': 'jdpingou;',
                            'Referer': 'https://st.jingxi.com/pingou/jxmc/index.html'
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    data = JSON.parse(data.replace("try{ jsonpCBK" + rnd + "(", '').replace(');}catch(e){}', ''));
                    resolve(data);
                    return [2 /*return*/];
            }
        });
    }); });
}
