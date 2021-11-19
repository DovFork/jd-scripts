"use strict";
/**
 * 宠汪汪三代目
 * cron: 0 0-23/3 * * *
 *
 * follow_fail就停
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
var cookie = '', res = '', UserName, index, invokeKey = 'q8DNJdpcfRQ69gIx';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, _i, _a, t, _b, _c, task, _d, _e, task, _f, _g, task;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _h.sent();
                i = 0;
                _h.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 38];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('pet/getPetTaskConfig')];
            case 3:
                /*
                await beforeFeed()
                await wait(1000)
                res = await feed()
                if (res.errorCode === 'feed_ok') {
                  console.log('喂食成功', 80)
                } else {
                  console.log('喂食失败', res)
                }
                await wait(2000)
            
                 */
                res = _h.sent();
                _i = 0, _a = res.datas;
                _h.label = 4;
            case 4:
                if (!(_i < _a.length)) return [3 /*break*/, 37];
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
                if (!(t.taskName === '浏览频道')) return [3 /*break*/, 20];
                return [4 /*yield*/, beforeFeed('follow_channel')];
            case 8:
                _h.sent();
                return [4 /*yield*/, click('follow_channel')];
            case 9:
                _h.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 10:
                _h.sent();
                return [4 /*yield*/, api('pet/getFollowChannels')];
            case 11:
                res = _h.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 12:
                _h.sent();
                _b = 0, _c = res.datas;
                _h.label = 13;
            case 13:
                if (!(_b < _c.length)) return [3 /*break*/, 20];
                task = _c[_b];
                if (!!task.status) return [3 /*break*/, 19];
                console.log('浏览频道', task.channelName);
                return [4 /*yield*/, click('follow_channel', task.channelId)];
            case 14:
                _h.sent();
                return [4 /*yield*/, beforeTask('follow_channel', task.channelId)];
            case 15:
                _h.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 16:
                _h.sent();
                return [4 /*yield*/, doTask('scan', { "channelId": task.channelId, "taskType": 'FollowChannel' })];
            case 17:
                _h.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 18:
                _h.sent();
                _h.label = 19;
            case 19:
                _b++;
                return [3 /*break*/, 13];
            case 20:
                if (!(t.taskName === '逛会场')) return [3 /*break*/, 28];
                _d = 0, _e = t.scanMarketList;
                _h.label = 21;
            case 21:
                if (!(_d < _e.length)) return [3 /*break*/, 28];
                task = _e[_d];
                if (!!task.status) return [3 /*break*/, 27];
                console.log('逛逛会场', task.marketName);
                return [4 /*yield*/, beforeTask('scan_market', encodeURIComponent(task.marketLink || task.marketLinkH5))];
            case 22:
                _h.sent();
                return [4 /*yield*/, click('scan_market', encodeURIComponent(task.marketLink || task.marketLinkH5))];
            case 23:
                _h.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 24:
                _h.sent();
                return [4 /*yield*/, doTask('scan', { "marketLink": task.marketLink || task.marketLinkH5, "taskType": "ScanMarket" })];
            case 25:
                _h.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 26:
                _h.sent();
                _h.label = 27;
            case 27:
                _d++;
                return [3 /*break*/, 21];
            case 28:
                if (!(t.taskName === '关注商品')) return [3 /*break*/, 36];
                _f = 0, _g = t.followGoodList;
                _h.label = 29;
            case 29:
                if (!(_f < _g.length)) return [3 /*break*/, 36];
                task = _g[_f];
                if (!!task.status) return [3 /*break*/, 35];
                console.log('关注商品', task.skuName);
                return [4 /*yield*/, beforeTask('follow_good', task.sku)];
            case 30:
                _h.sent();
                return [4 /*yield*/, click('follow_good', task.sku)];
            case 31:
                _h.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 32:
                _h.sent();
                return [4 /*yield*/, doTask('followGood', "sku=".concat(task.sku))];
            case 33:
                _h.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 34:
                _h.sent();
                _h.label = 35;
            case 35:
                _f++;
                return [3 /*break*/, 29];
            case 36:
                _i++;
                return [3 /*break*/, 4];
            case 37:
                i++;
                return [3 /*break*/, 2];
            case 38: return [2 /*return*/];
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
                    url = taskType
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
function beforeFeed(fn) {
    if (fn === void 0) { fn = 'feed'; }
    return __awaiter(this, void 0, void 0, function () {
        var lkt, lks, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lkt = Date.now();
                    lks = ts_md5_1.Md5.hashStr('' + invokeKey + lkt);
                    return [4 /*yield*/, axios_1["default"].get("https://jdjoy.jd.com/common/pet/icon/click1?iconCode=".concat(fn, "&reqSource=h5&invokeKey=").concat(invokeKey), {
                            headers: {
                                'Host': 'jdjoy.jd.com',
                                'lkt': lkt.toString(),
                                'Origin': 'https://h5.m.jd.com',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'lks': lks,
                                'Referer': 'https://h5.m.jd.com/',
                                'Content-Type': 'application/json',
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
function feed() {
    return __awaiter(this, void 0, void 0, function () {
        var lkt, lks, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lkt = Date.now();
                    lks = ts_md5_1.Md5.hashStr('' + invokeKey + lkt);
                    return [4 /*yield*/, axios_1["default"].get("https://jdjoy.jd.com/common/pet/feed?feedCount=80&reqSource=h5&invokeKey=".concat(invokeKey), {
                            headers: {
                                'Host': 'jdjoy.jd.com',
                                'lkt': lkt.toString(),
                                'Origin': 'https://h5.m.jd.com',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'lks': lks,
                                'Referer': 'https://h5.m.jd.com/',
                                'Content-Type': 'application/json',
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
                    return [4 /*yield*/, axios_1["default"].get("https://jdjoy.jd.com/common/pet/icon/click1?iconCode=".concat(fn, "&linkAddr=").concat(linkAddr, "&reqSource=h5&invokeKey=").concat(invokeKey), {
                            headers: {
                                'Host': 'jdjoy.jd.com',
                                'Accept': '*/*',
                                'lkt': lkt.toString(),
                                'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                                'Origin': 'https://h5.m.jd.com',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'Connection': 'keep-alive',
                                'lks': lks,
                                'Referer': 'https://h5.m.jd.com/',
                                'Content-Type': 'application/json',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    if (data.errorCode) {
                        console.log(data.errorCode);
                    }
                    return [2 /*return*/];
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
                    return [4 /*yield*/, axios_1["default"].post("https://jdjoy.jd.com/common/pet/".concat(fn, "?reqSource=h5&invokeKey=").concat(invokeKey), typeof body === 'object' ? JSON.stringify(body) : body, {
                            headers: {
                                'Host': 'jdjoy.jd.com',
                                'lkt': lkt.toString(),
                                'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                                'Origin': 'https://h5.m.jd.com',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'Referer': 'https://h5.m.jd.com/',
                                'lks': lks,
                                'Content-Type': typeof body === 'object' ? 'application/json' : 'application/x-www-form-urlencoded',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data.errorCode);
                    return [2 /*return*/];
            }
        });
    });
}
function click(iconCode, linkAddr) {
    return __awaiter(this, void 0, void 0, function () {
        var lkt, lks, url, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lkt = Date.now();
                    lks = ts_md5_1.Md5.hashStr('' + invokeKey + lkt);
                    url = linkAddr
                        ? "https://jdjoy.jd.com/common/pet/icon/click?code=1624363341529274068136&iconCode=".concat(iconCode, "&linkAddr=").concat(linkAddr, "&reqSource=h5&invokeKey=").concat(invokeKey)
                        : "https://jdjoy.jd.com/common/pet/icon/click?code=1624363341529274068136&iconCode=".concat(iconCode, "&reqSource=h5&invokeKey=").concat(invokeKey);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'jdjoy.jd.com',
                                'Connection': 'keep-alive',
                                'Sec-Fetch-Mode': 'cors',
                                'Origin': 'https://h5.m.jd.com',
                                'lks': lks,
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'lkt': lkt.toString(),
                                'content-type': 'application/json',
                                'X-Requested-With': 'com.jingdong.app.mall',
                                'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html',
                                'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    if (data.errorCode) {
                        console.log(data.errorCode);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
