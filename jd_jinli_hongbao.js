"use strict";
/**
 * 京东-锦鲤红包
 * 做任务、助力、开红包
 * cron: 1 0,6,18 * * *
 * CK1助力顺序
 * HW.ts -> 内部
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
var sendNotify_1 = require("./sendNotify");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', UserName;
var shareCodesSelf = [], shareCodes = [], shareCodesHW = [], fullCode = [];
var min = [0.02, 0.12, 0.3, 0.6, 0.7, 0.8, 1, 2];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, e_1, _c, _d, _e, index, value, _f, shareCodes_1, code, e_2, _g, _h, _j, index, value, _k, _l, t, _m, _o, tp, _p, _q, t, j, _r, _s, t, e_3;
    return __generator(this, function (_t) {
        switch (_t.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _t.sent();
                _i = 0, _a = cookiesArr.entries();
                _t.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 9];
                _b = _a[_i], index = _b[0], value = _b[1];
                _t.label = 3;
            case 3:
                _t.trys.push([3, 7, , 8]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('h5launch', { "followShop": 0, "random": (0, TS_USER_AGENTS_1.getRandomNumberByRange)(36135846, 74613584), "log": "".concat(Date.now(), "~0iuxyee"), "sceneid": "JLHBhPageh5" })];
            case 4:
                res = _t.sent();
                console.log('活动初始化：', res.data.result.statusDesc);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 5:
                _t.sent();
                return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
            case 6:
                res = _t.sent();
                console.log('红包ID：', res.data.result.redpacketInfo.id);
                shareCodesSelf.push(res.data.result.redpacketInfo.id);
                return [3 /*break*/, 8];
            case 7:
                e_1 = _t.sent();
                console.log(e_1);
                return [3 /*break*/, 8];
            case 8:
                _i++;
                return [3 /*break*/, 2];
            case 9:
                console.log('内部助力：', shareCodesSelf);
                _c = 0, _d = cookiesArr.entries();
                _t.label = 10;
            case 10:
                if (!(_c < _d.length)) return [3 /*break*/, 22];
                _e = _d[_c], index = _e[0], value = _e[1];
                _t.label = 11;
            case 11:
                _t.trys.push([11, 20, , 21]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                if (!(shareCodesHW.length === 0)) return [3 /*break*/, 13];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('jlhb')];
            case 12:
                shareCodesHW = _t.sent();
                _t.label = 13;
            case 13:
                if (index === 0 || cookiesArr.length === 2) { // 红包1需2个助力
                    shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesHW, true), shareCodesSelf, true)));
                }
                else {
                    shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true)));
                }
                if (cookiesArr.length > 5 && cookiesArr.length < 8 && index > 4) { // 红包3需要7个助力
                    shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesHW, true), shareCodesSelf, true)));
                }
                _f = 0, shareCodes_1 = shareCodes;
                _t.label = 14;
            case 14:
                if (!(_f < shareCodes_1.length)) return [3 /*break*/, 19];
                code = shareCodes_1[_f];
                if (!!fullCode.includes(code)) return [3 /*break*/, 17];
                console.log("\u8D26\u53F7".concat(index + 1, " ").concat(UserName, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodesSelf.includes(code) ? '*内部*' : ''));
                return [4 /*yield*/, api('jinli_h5assist', { "redPacketId": code, "followShop": 0, "random": (0, TS_USER_AGENTS_1.getRandomNumberByRange)(36135846, 74613584), "log": "".concat(Date.now(), "~0gga2ik"), "sceneid": "JLHBhPageh5" })];
            case 15:
                res = _t.sent();
                if (res.data.result.status === 0) {
                    console.log('助力成功：', parseFloat(res.data.result.assistReward.discount));
                    return [3 /*break*/, 19];
                }
                else if (res.data.result.status === 3) {
                    console.log('今日助力次数已满');
                    return [3 /*break*/, 19];
                }
                else {
                    console.log('助力结果：', res.data.result.statusDesc);
                    if (res.data.result.statusDesc === '啊偶，TA的助力已满，开启自己的红包活动吧~') {
                        fullCode.push(code);
                    }
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 16:
                _t.sent();
                return [3 /*break*/, 18];
            case 17:
                console.log("Code ".concat(code, " \u5DF2\u88AB\u52A9\u6EE1"));
                _t.label = 18;
            case 18:
                _f++;
                return [3 /*break*/, 14];
            case 19: return [3 /*break*/, 21];
            case 20:
                e_2 = _t.sent();
                console.log(e_2);
                return [3 /*break*/, 21];
            case 21:
                _c++;
                return [3 /*break*/, 10];
            case 22:
                _g = 0, _h = cookiesArr.entries();
                _t.label = 23;
            case 23:
                if (!(_g < _h.length)) return [3 /*break*/, 64];
                _j = _h[_g], index = _j[0], value = _j[1];
                _t.label = 24;
            case 24:
                _t.trys.push([24, 62, , 63]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('taskHomePage', {})];
            case 25:
                // 做任务
                res = _t.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 26:
                _t.sent();
                _k = 0, _l = res.data.result.taskInfos;
                _t.label = 27;
            case 27:
                if (!(_k < _l.length)) return [3 /*break*/, 42];
                t = _l[_k];
                if (!(!t.alreadyReceivedCount || t.alreadyReceivedCount < t.requireCount)) return [3 /*break*/, 36];
                if (![2, 3, 4, 5, 8].includes(t.taskType)) return [3 /*break*/, 36];
                return [4 /*yield*/, api('startTask', { "taskType": t.taskType, "random": (0, TS_USER_AGENTS_1.getRandomNumberByRange)(36135846, 74613584), "log": "".concat(Date.now(), "~1orj8k3"), "sceneid": "JLHBhPageh5" })];
            case 28:
                res = _t.sent();
                console.log(t.title, res.data.biz_msg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 29:
                _t.sent();
                return [4 /*yield*/, api('getTaskDetailForColor', { taskType: t.taskType })];
            case 30:
                res = _t.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 31:
                _t.sent();
                _m = 0, _o = res.data.result.advertDetails;
                _t.label = 32;
            case 32:
                if (!(_m < _o.length)) return [3 /*break*/, 36];
                tp = _o[_m];
                if (!(tp.status === 0)) return [3 /*break*/, 35];
                return [4 /*yield*/, api('taskReportForColor', { "taskType": t.taskType, "detailId": tp.id })];
            case 33:
                res = _t.sent();
                console.log(t.title, tp.name, res.data.biz_msg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 34:
                _t.sent();
                _t.label = 35;
            case 35:
                _m++;
                return [3 /*break*/, 32];
            case 36:
                if (!(t.innerStatus === 3)) return [3 /*break*/, 41];
                return [4 /*yield*/, api('h5receiveRedpacketAll', { "taskType": t.taskType, "random": (0, TS_USER_AGENTS_1.getRandomNumberByRange)(36135846, 74613584), "log": "".concat(Date.now(), "~138q6w6"), "sceneid": "JLHBhPageh5" })];
            case 37:
                res = _t.sent();
                console.log("".concat(t.title, " \u6253\u5F00\u6210\u529F\uFF0C\u83B7\u5F97"), parseFloat(res.data.result.discount));
                if (!!min.includes(parseFloat(res.data.result.discount))) return [3 /*break*/, 39];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)("\u9526\u9CA4\u7EA2\u5305", "\u8D26\u53F7".concat(index + 1, " ").concat(UserName, "\n").concat(res.data.result.discount))];
            case 38:
                _t.sent();
                _t.label = 39;
            case 39: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 40:
                _t.sent();
                _t.label = 41;
            case 41:
                _k++;
                return [3 /*break*/, 27];
            case 42: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)
                // 打开任务红包
            ];
            case 43:
                _t.sent();
                return [4 /*yield*/, api('taskHomePage', {})];
            case 44:
                // 打开任务红包
                res = _t.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 45:
                _t.sent();
                _p = 0, _q = res.data.result.taskInfos;
                _t.label = 46;
            case 46:
                if (!(_p < _q.length)) return [3 /*break*/, 52];
                t = _q[_p];
                if (!(t.innerStatus === 3)) return [3 /*break*/, 51];
                return [4 /*yield*/, api('h5receiveRedpacketAll', { "taskType": t.taskType, "random": (0, TS_USER_AGENTS_1.getRandomNumberByRange)(36135846, 74613584), "log": "".concat(Date.now(), "~138q6w6"), "sceneid": "JLHBhPageh5" })];
            case 47:
                res = _t.sent();
                console.log("".concat(t.title, " \u6253\u5F00\u6210\u529F\uFF0C\u83B7\u5F97"), parseFloat(res.data.result.discount));
                if (!!min.includes(parseFloat(res.data.result.discount))) return [3 /*break*/, 49];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)("\u9526\u9CA4\u7EA2\u5305", "\u8D26\u53F7".concat(index + 1, " ").concat(UserName, "\n").concat(res.data.result.discount))];
            case 48:
                _t.sent();
                _t.label = 49;
            case 49: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 50:
                _t.sent();
                _t.label = 51;
            case 51:
                _p++;
                return [3 /*break*/, 46];
            case 52: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)
                // 打开助力红包
            ];
            case 53:
                _t.sent();
                j = 1;
                return [4 /*yield*/, api('h5activityIndex', { "isjdapp": 1 })];
            case 54:
                res = _t.sent();
                _r = 0, _s = res.data.result.redpacketConfigFillRewardInfo;
                _t.label = 55;
            case 55:
                if (!(_r < _s.length)) return [3 /*break*/, 61];
                t = _s[_r];
                if (!(t.packetStatus === 2)) return [3 /*break*/, 56];
                console.log("\u7EA2\u5305".concat(j, "\u5DF2\u62C6\u8FC7\uFF0C\u83B7\u5F97"), t.packetAmount);
                return [3 /*break*/, 59];
            case 56:
                if (!(t.packetStatus === 1)) return [3 /*break*/, 59];
                console.log("\u7EA2\u5305".concat(j, "\u53EF\u62C6"));
                return [4 /*yield*/, api('h5receiveRedpacketAll', { "random": (0, TS_USER_AGENTS_1.getRandomNumberByRange)(36135846, 74613584), "log": "".concat(Date.now(), "~0suodw0"), "sceneid": "JLHBhPageh5" })];
            case 57:
                res = _t.sent();
                console.log(res.data.biz_msg, parseFloat(res.data.result.discount));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 58:
                _t.sent();
                _t.label = 59;
            case 59:
                j++;
                _t.label = 60;
            case 60:
                _r++;
                return [3 /*break*/, 55];
            case 61: return [3 /*break*/, 63];
            case 62:
                e_3 = _t.sent();
                console.log(e_3);
                return [3 /*break*/, 63];
            case 63:
                _g++;
                return [3 /*break*/, 23];
            case 64: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/api?appid=jinlihongbao&functionId=".concat(fn, "&loginType=2&client=jinlihongbao&t=").concat(Date.now(), "&clientVersion=10.2.4&osVersion=-1"), "body=".concat(encodeURIComponent(JSON.stringify(body))), {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://happy.m.jd.com',
                            'Connection': 'keep-alive',
                            'Accept': 'application/json, text/plain, */*',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://happy.m.jd.com/',
                            'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                            'Content-Type': 'application/x-www-form-urlencoded',
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
