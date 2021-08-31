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
var notify = require('./sendNotify');
var cookie = '', res = '', UserName;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, exist, items, message, _i, _a, good, _b, _c, t, _d, _e, j;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _f.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _f.sent();
                cookie = cookiesArr[0];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                try {
                    (0, fs_1.accessSync)('./jxmc_stock.json');
                }
                catch (e) {
                    (0, fs_1.writeFileSync)('./jxmc_stock.json', '{}', 'utf-8');
                }
                exist = JSON.parse((0, fs_1.readFileSync)('./jxmc_stock.json', 'utf-8'));
                items = '', message = '';
                return [4 /*yield*/, api('queryservice/GetGoodsListV2', 'channel,sceneid')];
            case 3:
                res = _f.sent();
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
                if (!items) return [3 /*break*/, 5];
                return [4 /*yield*/, getEgg(items)];
            case 4:
                res = _f.sent();
                for (_b = 0, _c = res.result; _b < _c.length; _b++) {
                    t = _c[_b];
                    exist[t.active].name = t.prizes[0].Name;
                }
                _f.label = 5;
            case 5:
                (0, fs_1.writeFileSync)('./jxmc_stock.json', JSON.stringify(exist, null, 2), 'utf-8');
                for (_d = 0, _e = Object.keys(exist); _d < _e.length; _d++) {
                    j = _e[_d];
                    if (items.indexOf(j) > -1) {
                        message += exist[j].name + '\t' + exist[j].egg + '\n';
                    }
                }
                if (!message) return [3 /*break*/, 7];
                return [4 /*yield*/, notify.sendNotify('京喜牧场兑换', message, '', '\n\n你好，世界！')];
            case 6:
                _f.sent();
                _f.label = 7;
            case 7:
                console.log(exist);
                return [2 /*return*/];
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
                    url = "https://m.jingxi.com/jxmc/" + fn + "?channel=7&sceneid=1001&_stk=" + encodeURIComponent(stk) + "&_ste=1&sceneval=2";
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
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://m.jingxi.com/active/queryprizedetails?actives=" + items + "&_=" + Date.now() + "&sceneval=2", {
                        headers: {
                            'Cookie': cookie,
                            'Host': 'm.jingxi.com',
                            'User-Agent': 'jdpingou;',
                            'Referer': 'https://st.jingxi.com/'
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    data = JSON.parse(data.replace('try{ QueryPrizesDetails(', '').replace(');}catch(e){}', ''));
                    resolve(data);
                    return [2 /*return*/];
            }
        });
    }); });
}
