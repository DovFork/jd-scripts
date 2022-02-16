"use strict";
/**
 * 京东-下拉
 * cron: 15 1,15,22 * * *
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
var cookie = '', UserName = '', res = '', message = '', shareCodes = [], shareCodesSelf = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, activityId, _i, _a, _b, index, value, encryptProjectId, _c, _d, t, tp, sum, userStarNum, i, full, _e, _f, _g, index, value, _loop_1, _h, shareCodes_1, code, state_1;
    var _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
    return __generator(this, function (_w) {
        switch (_w.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _w.sent();
                _i = 0, _a = cookiesArr.entries();
                _w.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 19];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('showSecondFloorRunInfo', { "source": "run" })];
            case 3:
                res = _w.sent();
                activityId = res.data.result.activityBaseInfo.activityId;
                encryptProjectId = res.data.result.activityBaseInfo.encryptProjectId;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)
                    // 任务
                ];
            case 4:
                _w.sent();
                return [4 /*yield*/, api('superBrandTaskList', { "source": "run", "activityId": activityId, "assistInfoFlag": 1 })];
            case 5:
                // 任务
                res = _w.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                _c = 0, _d = res.data.result.taskList;
                _w.label = 6;
            case 6:
                if (!(_c < _d.length)) return [3 /*break*/, 11];
                t = _d[_c];
                if (!(t.completionCnt !== t.assignmentTimesLimit)) return [3 /*break*/, 10];
                if (!(((_j = t.ext) === null || _j === void 0 ? void 0 : _j.shoppingActivity) || ((_k = t.ext) === null || _k === void 0 ? void 0 : _k.followShop))) return [3 /*break*/, 9];
                tp = ((_l = t.ext) === null || _l === void 0 ? void 0 : _l.shoppingActivity) || ((_m = t.ext) === null || _m === void 0 ? void 0 : _m.followShop);
                tp = tp[0];
                console.log(tp.title || tp.shopName, tp.itemId);
                return [4 /*yield*/, api('superBrandDoTask', { "source": "run", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": t.encryptAssignmentId, "assignmentType": t.assignmentType, "itemId": tp.itemId, "actionType": 0 })];
            case 7:
                res = _w.sent();
                console.log((_o = res.data) === null || _o === void 0 ? void 0 : _o.bizMsg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 8:
                _w.sent();
                return [3 /*break*/, 10];
            case 9:
                if ((_p = t.ext) === null || _p === void 0 ? void 0 : _p.assistTaskDetail) {
                    // 助力码
                    console.log('助力码：', t.ext.assistTaskDetail.itemId);
                    console.log('收到助力：', (_s = (_r = (_q = t.ext) === null || _q === void 0 ? void 0 : _q.assistList) === null || _r === void 0 ? void 0 : _r.length) !== null && _s !== void 0 ? _s : 0);
                    shareCodesSelf.push({
                        activityId: activityId,
                        encryptProjectId: encryptProjectId,
                        encryptAssignmentId: t.encryptAssignmentId,
                        itemId: t.ext.assistTaskDetail.itemId
                    });
                }
                _w.label = 10;
            case 10:
                _c++;
                return [3 /*break*/, 6];
            case 11:
                if (!(new Date().getHours() === 23)) return [3 /*break*/, 18];
                sum = 0;
                return [4 /*yield*/, api('showSecondFloorRunInfo', { "source": "run" })];
            case 12:
                res = _w.sent();
                userStarNum = Math.floor(res.data.result.activityUserInfo.userStarNum / 300);
                console.log('可以抽奖', userStarNum, '次');
                i = 0;
                _w.label = 13;
            case 13:
                if (!(i < userStarNum)) return [3 /*break*/, 17];
                return [4 /*yield*/, api('superBrandTaskLottery', { "source": "run", "activityId": activityId })];
            case 14:
                res = _w.sent();
                if ((_v = (_u = (_t = res.data.result) === null || _t === void 0 ? void 0 : _t.rewardComponent) === null || _u === void 0 ? void 0 : _u.beanList) === null || _v === void 0 ? void 0 : _v.length) {
                    console.log('抽奖获得京豆：', res.data.result.rewardComponent.beanList[0].quantity);
                    sum += res.data.result.rewardComponent.beanList[0].quantity;
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 15:
                _w.sent();
                _w.label = 16;
            case 16:
                i++;
                return [3 /*break*/, 13];
            case 17:
                message += "\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n\u62BD\u5956").concat(userStarNum, "\u6B21\uFF0C\u83B7\u5F97\u4EAC\u8C46").concat(sum, "\n\n");
                _w.label = 18;
            case 18:
                _i++;
                return [3 /*break*/, 2];
            case 19: return [4 /*yield*/, (0, sendNotify_1.sendNotify)('京东特物', message)];
            case 20:
                _w.sent();
                console.log(shareCodesSelf);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 21:
                _w.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('tewu')];
            case 22:
                shareCodesHW = _w.sent();
                full = [];
                _e = 0, _f = cookiesArr.entries();
                _w.label = 23;
            case 23:
                if (!(_e < _f.length)) return [3 /*break*/, 29];
                _g = _f[_e], index = _g[0], value = _g[1];
                shareCodes = index === 0
                    ? Array.from(new Set(__spreadArray(__spreadArray([], shareCodesHW, true), shareCodesSelf, true)))
                    : Array.from(new Set(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true)));
                cookie = value;
                return [4 /*yield*/, api('superBrandTaskList', { "source": "run", "activityId": activityId, "assistInfoFlag": 1 })];
            case 24:
                res = _w.sent();
                _loop_1 = function (code) {
                    return __generator(this, function (_x) {
                        switch (_x.label) {
                            case 0:
                                if (!!full.includes(code.itemId)) return [3 /*break*/, 3];
                                console.log("\u8D26\u53F7".concat(index + 1, " \u53BB\u52A9\u529B ").concat(code.itemId, " ").concat(shareCodesSelf.some(function (self) { return self.itemId === code.itemId; }) ? '*内部*' : ''));
                                return [4 /*yield*/, api('superBrandDoTask', { "source": "run", "activityId": code.activityId, "encryptProjectId": code.encryptProjectId, "encryptAssignmentId": code.encryptAssignmentId, "assignmentType": 2, "itemId": code.itemId, "actionType": 0 })];
                            case 1:
                                res = _x.sent();
                                if (res.data.bizCode === '0') {
                                    console.log('助力成功');
                                }
                                else if (res.data.bizCode === '103') {
                                    console.log('助力满了');
                                    full.push(code.itemId);
                                }
                                else if (res.data.bizCode === '108') {
                                    console.log('上限');
                                    return [2 /*return*/, "break"];
                                }
                                else if (res.data.bizCode === '2001') {
                                    console.log('黑号');
                                    return [2 /*return*/, "break"];
                                }
                                else {
                                    console.log('其他错误', res.data.bizMsg);
                                }
                                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                            case 2:
                                _x.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                console.log('助力满了，跳过');
                                _x.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                };
                _h = 0, shareCodes_1 = shareCodes;
                _w.label = 25;
            case 25:
                if (!(_h < shareCodes_1.length)) return [3 /*break*/, 28];
                code = shareCodes_1[_h];
                return [5 /*yield**/, _loop_1(code)];
            case 26:
                state_1 = _w.sent();
                if (state_1 === "break")
                    return [3 /*break*/, 28];
                _w.label = 27;
            case 27:
                _h++;
                return [3 /*break*/, 25];
            case 28:
                _e++;
                return [3 /*break*/, 23];
            case 29: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/?uuid=&client=wh5&appid=ProductZ4Brand&functionId=".concat(fn, "&t=").concat(Date.now(), "&body=").concat(encodeURIComponent(JSON.stringify(body))), '', {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://pro.m.jd.com',
                            'Accept': 'application/json, text/plain, */*',
                            'User-Agent': 'jdapp;iPhone;10.3.2;',
                            'Referer': 'https://pro.m.jd.com/',
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
