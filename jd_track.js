"use strict";
/**
 * 京东快递更新通知
 * cron: 0 0-23/4 * * *
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
var sendNotify_1 = require("./sendNotify");
var fs_1 = require("fs");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', UserName, index, allMessage = '', res = '', message = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, except, orders, i, _i, _a, order, orderId, orderType, title, t, status_1, carrier, carriageId, account, _b, account_1, acc;
    var _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _e.sent();
                except = (0, TS_USER_AGENTS_1.exceptCookie)(path.basename(__filename));
                orders = {};
                if ((0, fs_1.existsSync)('./json')) {
                    if ((0, fs_1.existsSync)('./json/jd_track.json')) {
                        orders = JSON.parse((0, fs_1.readFileSync)('./json/jd_track.json').toString() || '{}');
                    }
                    else {
                        (0, fs_1.writeFileSync)('./json/jd_track.json', '{}');
                    }
                }
                else {
                    (0, fs_1.mkdirSync)('./json');
                    (0, fs_1.writeFileSync)('./json/jd_track.json', '{}');
                }
                i = 0;
                _e.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 11];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                if (except.includes(encodeURIComponent(UserName))) {
                    console.log('已设置跳过');
                    return [3 /*break*/, 10];
                }
                message = '';
                return [4 /*yield*/, getOrderList()];
            case 3:
                res = _e.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 4:
                _e.sent();
                _i = 0, _a = res.orderList;
                _e.label = 5;
            case 5:
                if (!(_i < _a.length)) return [3 /*break*/, 8];
                order = _a[_i];
                orderId = order.orderId;
                orderType = order.orderType;
                title = order.productList[0].title;
                t = ((_c = order.progressInfo) === null || _c === void 0 ? void 0 : _c.tip) || null;
                status_1 = ((_d = order.progressInfo) === null || _d === void 0 ? void 0 : _d.content) || null;
                return [4 /*yield*/, getWuliu(orderId, orderType)];
            case 6:
                res = _e.sent();
                carrier = res.carrier, carriageId = res.carriageId;
                if (t && status_1) {
                    if (status_1.match(/(?=签收|已取走|已暂存)/))
                        return [3 /*break*/, 7];
                    console.log(title);
                    console.log('\t', t, status_1);
                    console.log();
                    if (Object.keys(orders).indexOf(orderId) > -1 && orders[orderId]['status'] !== status_1) {
                        message += "".concat(title, "\n").concat(carrier, "  ").concat(carriageId, "\n").concat(t, "  ").concat(status_1, "\n\n");
                    }
                    orders[orderId] = {
                        user: UserName,
                        title: title,
                        t: t,
                        status: status_1,
                        carrier: carrier,
                        carriageId: carriageId
                    };
                }
                _e.label = 7;
            case 7:
                _i++;
                return [3 /*break*/, 5];
            case 8:
                if (message) {
                    message = "<\u4EAC\u4E1C\u8D26\u53F7".concat(i + 1, ">  ").concat(UserName, "\n\n").concat(message);
                    allMessage += message;
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 9:
                _e.sent();
                _e.label = 10;
            case 10:
                i++;
                return [3 /*break*/, 2];
            case 11:
                orders = JSON.stringify(orders, null, 2);
                account = JSON.parse((0, fs_1.readFileSync)('./utils/account.json').toString() || '[]') || [];
                for (_b = 0, account_1 = account; _b < account_1.length; _b++) {
                    acc = account_1[_b];
                    orders = orders.replace(new RegExp(decodeURIComponent(acc['pt_pin']), 'g'), acc['remarks']);
                }
                (0, fs_1.writeFileSync)('./json/jd_track.json', orders);
                if (!allMessage) return [3 /*break*/, 13];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)('京东快递更新', allMessage)];
            case 12:
                _e.sent();
                _e.label = 13;
            case 13: return [2 /*return*/];
        }
    });
}); })();
function getOrderList() {
    return __awaiter(this, void 0, void 0, function () {
        var t, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    t = Date.now();
                    return [4 /*yield*/, axios_1["default"].get("https://wq.jd.com/bases/orderlist/list?order_type=2&start_page=1&last_page=0&page_size=10&callersource=mainorder&t=".concat(t, "&sceneval=2&_=").concat(t + 1, "&sceneval=2"), {
                            headers: {
                                'authority': 'wq.jd.com',
                                'user-agent': TS_USER_AGENTS_1["default"],
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
function getWuliu(orderId, orderType) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://wq.jd.com/bases/wuliudetail/dealloglist?deal_id=".concat(orderId, "&orderstate=15&ordertype=").concat(orderType, "&t=").concat(Date.now(), "&sceneval=2"), {
                        headers: {
                            'authority': 'wq.jd.com',
                            'user-agent': TS_USER_AGENTS_1["default"],
                            'referer': 'https://wqs.jd.com/',
                            'cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
