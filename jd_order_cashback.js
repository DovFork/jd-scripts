"use strict";
/**
 * 下单返红包助力
 * 只助力助力池，不助力内部，多次被同账号助力可能会黑
 * cron: 30 0,9,17 * * *
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
var ts_md5_1 = require("ts-md5");
var cookie = '', UserName, index, res = '';
var orders = [], shareCodeSelf = [], shareCodes = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, order, _i, _a, t, remaininghongbaosum, _b, _c, _d, index_1, value, _e, shareCodes_1, code;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _f.sent();
                i = 0;
                _f.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 13];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, getOrderList()];
            case 3:
                res = _f.sent();
                order = '' // 订单号
                ;
                _i = 0, _a = res.orderList;
                _f.label = 4;
            case 4:
                if (!(_i < _a.length)) return [3 /*break*/, 12];
                t = _a[_i];
                if (t.parentId !== '0') {
                    order = t.parentId;
                }
                else {
                    order = t.orderId;
                }
                if (!!orders.includes(order)) return [3 /*break*/, 11];
                orders.push(order);
                return [4 /*yield*/, api("QueryGroupDetail", order)];
            case 5:
                res = _f.sent();
                if (!(res.data.groupinfo && res.data.groupinfo.end_time * 1000 > Date.now())) return [3 /*break*/, 8];
                remaininghongbaosum = res.data.groupinfo.remaininghongbaosum * 1;
                console.log("\u8BA2\u5355 ".concat(order, " \u2705"), res.data.groupinfo.groupid, '剩余：', remaininghongbaosum);
                if (!(remaininghongbaosum !== 0)) return [3 /*break*/, 7];
                return [4 /*yield*/, makeShareCodes(res.data.groupinfo.groupid)];
            case 6:
                _f.sent();
                shareCodeSelf.push(res.data.groupinfo.groupid);
                _f.label = 7;
            case 7: return [3 /*break*/, 9];
            case 8:
                console.log("\u8BA2\u5355 ".concat(order, " \u274C"));
                _f.label = 9;
            case 9: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 10:
                _f.sent();
                _f.label = 11;
            case 11:
                _i++;
                return [3 /*break*/, 4];
            case 12:
                i++;
                return [3 /*break*/, 2];
            case 13:
                _b = 0, _c = cookiesArr.entries();
                _f.label = 14;
            case 14:
                if (!(_b < _c.length)) return [3 /*break*/, 22];
                _d = _c[_b], index_1 = _d[0], value = _d[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('fanxian', 20)];
            case 15:
                shareCodes = _f.sent();
                _e = 0, shareCodes_1 = shareCodes;
                _f.label = 16;
            case 16:
                if (!(_e < shareCodes_1.length)) return [3 /*break*/, 21];
                code = shareCodes_1[_e];
                if (!!shareCodeSelf.includes(code)) return [3 /*break*/, 19];
                console.log("\u8D26\u53F7".concat(index_1 + 1, " ").concat(UserName, " \u53BB\u52A9\u529B ").concat(code));
                return [4 /*yield*/, api('Help', code)];
            case 17:
                res = _f.sent();
                if (res.msg === '') {
                    console.log('助力成功，获得：', parseFloat(res.data.prize.discount));
                }
                else {
                    console.log(res.msg);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 18:
                _f.sent();
                return [3 /*break*/, 20];
            case 19:
                console.log("\u8DF3\u8FC7\u5185\u90E8\u8D26\u53F7");
                _f.label = 20;
            case 20:
                _e++;
                return [3 /*break*/, 16];
            case 21:
                _b++;
                return [3 /*break*/, 14];
            case 22: return [2 /*return*/];
        }
    });
}); })();
function api(fn, orderid) {
    return __awaiter(this, void 0, void 0, function () {
        var url, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = fn === 'Help'
                        ? "https://wq.jd.com/fanxianzl/zhuli/Help?groupid=".concat(orderid, "&_stk=groupid&_ste=2&sceneval=2")
                        : "https://m.jingxi.com/fanxianzl/zhuli/".concat(fn, "?isquerydraw=1&orderid=").concat(orderid, "&groupid=&_=").concat(Date.now(), "&sceneval=2");
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'User-Agent': "jdpingou;iPhone;5.12.0;15.1;".concat((0, TS_USER_AGENTS_1.randomString)(40), ";network/wifi;"),
                                'Referer': 'https://actst.jingxi.com/',
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
function getOrderList() {
    return __awaiter(this, void 0, void 0, function () {
        var t, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    t = Date.now();
                    return [4 /*yield*/, axios_1["default"].get("https://wq.jd.com/bases/orderlist/list?order_type=2&start_page=1&last_page=0&page_size=10&callersource=mainorder&t=".concat(t, "&sceneval=2&_=").concat(t + 1, "&sceneval=2"), {
                            headers: {
                                'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
                                'referer': 'https://wqs.jd.com/',
                                'cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
function makeShareCodes(code) {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 1:
                    bean = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 2:
                    farm = _a.sent();
                    pin = ts_md5_1.Md5.hashStr(cookie.match(/pt_pin=([^;]*)/)[1]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/fanxian?sharecode=".concat(code, "&bean=").concat(bean, "&farm=").concat(farm, "&pin=").concat(pin))];
                case 3:
                    data = (_a.sent()).data;
                    console.log(data.message);
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
