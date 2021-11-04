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
    var cookiesArr, except, orders, i, _i, _a, order, orderId, title, t, status_1;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _d.sent();
                except = (0, TS_USER_AGENTS_1.exceptCookie)(path.basename(__filename));
                try {
                    (0, fs_1.accessSync)('./json/jd_track.json');
                    orders = JSON.parse((0, fs_1.readFileSync)('./json/jd_track.json').toString() || '{}');
                }
                catch (e) {
                    orders = {};
                }
                i = 0;
                _d.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 6];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                if (except.includes(encodeURIComponent(UserName))) {
                    console.log('已设置跳过');
                    return [3 /*break*/, 5];
                }
                message = '';
                return [4 /*yield*/, getOrderList()];
            case 3:
                res = _d.sent();
                for (_i = 0, _a = res.orderList; _i < _a.length; _i++) {
                    order = _a[_i];
                    orderId = order['orderId'];
                    title = order['productList'][0]['title'];
                    t = ((_b = order.progressInfo) === null || _b === void 0 ? void 0 : _b.tip) || null;
                    status_1 = ((_c = order.progressInfo) === null || _c === void 0 ? void 0 : _c.content) || null;
                    if (t && status_1) {
                        if (status_1.match(/(?=签收|已取走|已暂存)/))
                            continue;
                        console.log(title);
                        console.log('\t', t, status_1);
                        console.log();
                        if (Object.keys(orders).indexOf(orderId) > -1 && orders[orderId]['status'] !== status_1) {
                            message += title + "\n" + t + "  " + status_1 + "\n\n";
                        }
                        orders[orderId] = {
                            user: UserName,
                            title: title,
                            t: t,
                            status: status_1
                        };
                    }
                }
                if (message) {
                    message = "<\u4EAC\u4E1C\u8D26\u53F7" + (i + 1) + ">  " + UserName + "\n\n" + message;
                    allMessage += message;
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 4:
                _d.sent();
                _d.label = 5;
            case 5:
                i++;
                return [3 /*break*/, 2];
            case 6:
                (0, fs_1.writeFileSync)('./json/jd_track.json', JSON.stringify(orders));
                if (!allMessage) return [3 /*break*/, 8];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)('京东快递更新', allMessage)];
            case 7:
                _d.sent();
                _d.label = 8;
            case 8: return [2 /*return*/];
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
                    return [4 /*yield*/, axios_1["default"].get("https://wq.jd.com/bases/orderlist/list?order_type=2&start_page=1&last_page=0&page_size=10&callersource=mainorder&t=" + t + "&sceneval=2&_=" + (t + 1) + "&sceneval=2", {
                            headers: {
                                'authority': 'wq.jd.com',
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
