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
var cookie = '', res = '', UserName, index, invokeKey = 'q8DNJdpcfRQ69gIx';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, _i, _a, t, _b, _c, t_1, _d, _e, task, _f, _g, task;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _h.sent();
                i = 0;
                _h.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 32];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('pet/getPetTaskConfig')];
            case 3:
                res = _h.sent();
                _i = 0, _a = res.datas;
                _h.label = 4;
            case 4:
                if (!(_i < _a.length)) return [3 /*break*/, 30];
                t = _a[_i];
                if (!(t.receiveStatus === 'unreceive')) return [3 /*break*/, 7];
                console.log('可领奖:', t.taskName);
                return [4 /*yield*/, api('pet/getFood', t.taskType)];
            case 5:
                res = _h.sent();
                if (res.errorCode === 'received') {
                    console.log('已领取:', res.data);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 6:
                _h.sent();
                _h.label = 7;
            case 7:
                if (!(t.taskName === '浏览频道')) return [3 /*break*/, 15];
                return [4 /*yield*/, api('pet/getFollowChannels')];
            case 8:
                res = _h.sent();
                _b = 0, _c = res.datas;
                _h.label = 9;
            case 9:
                if (!(_b < _c.length)) return [3 /*break*/, 15];
                t_1 = _c[_b];
                if (!!t_1.status) return [3 /*break*/, 14];
                console.log(t_1.channelName);
                return [4 /*yield*/, beforeTask('follow_channel', t_1.channelId)];
            case 10:
                _h.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 11:
                _h.sent();
                return [4 /*yield*/, doTask('scan', { "channelId": t_1.channelId, "taskType": 'FollowChannel' })];
            case 12:
                _h.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 13:
                _h.sent();
                _h.label = 14;
            case 14:
                _b++;
                return [3 /*break*/, 9];
            case 15:
                if (!(t.taskName === '逛会场')) return [3 /*break*/, 22];
                _d = 0, _e = t.scanMarketList;
                _h.label = 16;
            case 16:
                if (!(_d < _e.length)) return [3 /*break*/, 22];
                task = _e[_d];
                if (!!task.status) return [3 /*break*/, 21];
                console.log(task.marketName);
                return [4 /*yield*/, beforeTask('scan_market', encodeURIComponent(task.marketLink || task.marketLinkH5))];
            case 17:
                _h.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 18:
                _h.sent();
                return [4 /*yield*/, doTask('scan', { "marketLink": task.marketLink || task.marketLinkH5, "taskType": "ScanMarket" })];
            case 19:
                _h.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 20:
                _h.sent();
                _h.label = 21;
            case 21:
                _d++;
                return [3 /*break*/, 16];
            case 22:
                if (!(t.taskName === '关注商品')) return [3 /*break*/, 29];
                _f = 0, _g = t.followGoodList;
                _h.label = 23;
            case 23:
                if (!(_f < _g.length)) return [3 /*break*/, 29];
                task = _g[_f];
                if (!!task.status) return [3 /*break*/, 28];
                console.log(task.skuName);
                return [4 /*yield*/, beforeTask('follow_good', task.sku)];
            case 24:
                _h.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 25:
                _h.sent();
                return [4 /*yield*/, doTask('followGood', "sku=".concat(task.sku))];
            case 26:
                _h.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 27:
                _h.sent();
                _h.label = 28;
            case 28:
                _f++;
                return [3 /*break*/, 23];
            case 29:
                _i++;
                return [3 /*break*/, 4];
            case 30: return [3 /*break*/, 32];
            case 31:
                i++;
                return [3 /*break*/, 2];
            case 32: return [2 /*return*/];
        }
    });
}); })();
function api(fn, taskType) {
    return __awaiter(this, void 0, void 0, function () {
        var lkt, lks, url, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lkt = Date.now();
                    lks = ts_md5_1.Md5.hashStr('' + invokeKey + lkt);
                    url = fn === 'pet/getFood'
                        ? "https://jdjoy.jd.com/common/".concat(fn, "?reqSource=h5&invokeKey=").concat(invokeKey, "&taskType=").concat(taskType)
                        : "https://jdjoy.jd.com/common/".concat(fn, "?reqSource=h5&invokeKey=").concat(invokeKey);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'jdjoy.jd.com',
                                'Accept': '*/*',
                                'lkt': lkt.toString(),
                                'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                                'Content-Type': 'application/json',
                                'Origin': 'https://h5.m.jd.com',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'lks': lks,
                                'Referer': 'https://h5.m.jd.com/',
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
function beforeTask(fn, linkAddr) {
    return __awaiter(this, void 0, void 0, function () {
        var lkt, lks, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lkt = Date.now();
                    lks = ts_md5_1.Md5.hashStr('' + invokeKey + lkt);
                    return [4 /*yield*/, axios_1["default"].post("https://draw.jdfcloud.com//common/pet/icon/click?iconCode=".concat(fn, "&linkAddr=").concat(linkAddr, "&reqSource=weapp&invokeKey=").concat(invokeKey), {
                            headers: {
                                'lkt': lkt,
                                'lks': lks,
                                'Host': 'draw.jdfcloud.com',
                                'content-type': 'application/json',
                                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x18001027) NetType/WIFI Language/zh_CN',
                                'Referer': 'https://servicewechat.com/wxccb5c536b0ecd1bf/770/page-frame.html',
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
function doTask(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var lkt, lks, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lkt = Date.now();
                    lks = ts_md5_1.Md5.hashStr('' + invokeKey + lkt);
                    return [4 /*yield*/, axios_1["default"].post("https://draw.jdfcloud.com//common/pet/".concat(fn, "?reqSource=weapp&invokeKey=").concat(invokeKey), {
                            headers: {
                                'lkt': lkt,
                                'lks': lks,
                                'Host': 'draw.jdfcloud.com',
                                'content-type': fn === 'followGood' || fn === 'followShop' ? 'application/x-www-form-urlencoded' : 'application/json',
                                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x18001027) NetType/WIFI Language/zh_CN',
                                'Referer': 'https://servicewechat.com/wxccb5c536b0ecd1bf/770/page-frame.html',
                                'Cookie': cookie
                            },
                            body: typeof body === 'object' ? JSON.stringify(body) : body
                        })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
