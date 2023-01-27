"use strict";
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var cookie = '', UserName = '', res = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _loop_1, _i, _a, _b, index, value;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getCookie)()];
            case 1:
                cookiesArr = _c.sent();
                _loop_1 = function (index, value) {
                    var commId;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                cookie = value;
                                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                                return [4 /*yield*/, api('FavCommQueryFilter')];
                            case 1:
                                res = _d.sent();
                                commId = '';
                                console.log('当前关注商品：', parseInt(res.totalNum));
                                res.data.map(function (item) {
                                    commId += item.commId + ',';
                                });
                                commId = commId.slice(0, -1);
                                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                            case 2:
                                _d.sent();
                                if (!commId) return [3 /*break*/, 4];
                                return [4 /*yield*/, api('FavCommBatchDel', commId)];
                            case 3:
                                res = _d.sent();
                                if (res.iRet === '0') {
                                    console.log('取关', commId.split(',').length, '个商品成功');
                                }
                                else {
                                    console.log('取关失败', res.errMsg);
                                }
                                _d.label = 4;
                            case 4: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                            case 5:
                                _d.sent();
                                return [4 /*yield*/, api('QueryShopFavList')];
                            case 6:
                                res = _d.sent();
                                console.log('当前关注店铺：', parseInt(res.totalNum));
                                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                            case 7:
                                _d.sent();
                                commId = '';
                                res.data.map(function (item) {
                                    commId += item.shopId + ',';
                                });
                                commId = commId.slice(0, -1);
                                if (!commId) return [3 /*break*/, 9];
                                return [4 /*yield*/, api('batchunfollow', commId)];
                            case 8:
                                res = _d.sent();
                                if (res.iRet === '0') {
                                    console.log('取关', commId.split(',').length, '个店铺成功');
                                }
                                else {
                                    console.log('取关失败', res.errMsg);
                                }
                                _d.label = 9;
                            case 9: return [2 /*return*/];
                        }
                    });
                };
                _i = 0, _a = cookiesArr.entries();
                _c.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 5];
                _b = _a[_i], index = _b[0], value = _b[1];
                return [5 /*yield**/, _loop_1(index, value)];
            case 3:
                _c.sent();
                _c.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/];
        }
    });
}); })();
function api(fn, params) {
    if (params === void 0) { params = ''; }
    return __awaiter(this, void 0, void 0, function () {
        var url, u, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    u = "_=".concat(Date.now(), "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls");
                    if (fn === 'FavCommQueryFilter')
                        url = "https://wq.jd.com/fav/comm/FavCommQueryFilter?cp=1&pageSize=10&category=0&promote=0&cutPrice=0&coupon=0&stock=0".concat(u);
                    else if (fn === 'FavCommBatchDel')
                        url = "https://wq.jd.com/fav/comm/FavCommBatchDel?commId=".concat(params).concat(u);
                    else if (fn === 'QueryShopFavList')
                        url = "https://wq.jd.com/fav/shop/QueryShopFavList?cp=1&pageSize=10&lastlogintime=0".concat(u);
                    else
                        url = "https://wq.jd.com/fav/shop/batchunfollow?shopId=".concat(params).concat(u);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'authority': 'wq.jd.com',
                                'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
                                'referer': 'https://wqs.jd.com/',
                                'accept-language': 'zh-CN,zh;q=0.9',
                                'cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, JSON.parse(data.match(/jsonpCBK.?\(([\w\W]*)\);/)[1])];
            }
        });
    });
}
