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
    var cookiesArr, activityId, _i, _a, _b, index, value, encryptProjectId, _c, _d, t, tp, e_1, sum, userStarNum, i, full, _e, _f, _g, index, value, mine, _h, _j, t, _loop_1, _k, shareCodes_1, code, state_1;
    var _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
    return __generator(this, function (_2) {
        switch (_2.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _2.sent();
                _i = 0, _a = cookiesArr.entries();
                _2.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 25];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('superBrandSecondFloorMainPage', { "source": "secondfloor" })];
            case 3:
                res = _2.sent();
                activityId = res.data.result.activityBaseInfo.activityId;
                encryptProjectId = res.data.result.activityBaseInfo.encryptProjectId;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)
                    // 任务
                ];
            case 4:
                _2.sent();
                return [4 /*yield*/, api('superBrandTaskList', { "source": "secondfloor", "activityId": activityId, "assistInfoFlag": 1 })];
            case 5:
                // 任务
                res = _2.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                _c = 0, _d = res.data.result.taskList;
                _2.label = 6;
            case 6:
                if (!(_c < _d.length)) return [3 /*break*/, 17];
                t = _d[_c];
                if (!(t.completionCnt !== t.assignmentTimesLimit)) return [3 /*break*/, 15];
                if (!(((_l = t.ext) === null || _l === void 0 ? void 0 : _l.shoppingActivity) || ((_m = t.ext) === null || _m === void 0 ? void 0 : _m.followShop))) return [3 /*break*/, 9];
                tp = ((_o = t.ext) === null || _o === void 0 ? void 0 : _o.shoppingActivity) || ((_p = t.ext) === null || _p === void 0 ? void 0 : _p.followShop);
                tp = tp[0];
                console.log(tp.title || tp.shopName, tp.itemId);
                return [4 /*yield*/, api('superBrandDoTask', { "source": "secondfloor", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": t.encryptAssignmentId, "assignmentType": t.assignmentType, "itemId": tp.itemId, "actionType": 0 })];
            case 7:
                res = _2.sent();
                console.log((_q = res.data) === null || _q === void 0 ? void 0 : _q.bizMsg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 8:
                _2.sent();
                _2.label = 9;
            case 9:
                if (!((_r = t.ext) === null || _r === void 0 ? void 0 : _r.sign2)) return [3 /*break*/, 15];
                _2.label = 10;
            case 10:
                _2.trys.push([10, 14, , 15]);
                if (!(new Date().getHours() >= 14 && new Date().getHours() <= 20)) return [3 /*break*/, 13];
                return [4 /*yield*/, api('superBrandDoTask', { "source": "secondfloor", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": t.encryptAssignmentId, "assignmentType": t.assignmentType, "itemId": t.ext.sign2[0].itemId, "actionType": 0 })];
            case 11:
                res = _2.sent();
                console.log((_s = res.data) === null || _s === void 0 ? void 0 : _s.bizMsg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 12:
                _2.sent();
                _2.label = 13;
            case 13: return [3 /*break*/, 15];
            case 14:
                e_1 = _2.sent();
                console.log((_t = t.ext) === null || _t === void 0 ? void 0 : _t.sign2);
                return [3 /*break*/, 15];
            case 15:
                // 助力码
                if ((_u = t.ext) === null || _u === void 0 ? void 0 : _u.assistTaskDetail) {
                    console.log('助力码：', t.ext.assistTaskDetail.itemId);
                    console.log('收到助力：', (_x = (_w = (_v = t.ext) === null || _v === void 0 ? void 0 : _v.assistList) === null || _w === void 0 ? void 0 : _w.length) !== null && _x !== void 0 ? _x : 0);
                    shareCodesSelf.push({
                        activityId: activityId,
                        encryptProjectId: encryptProjectId,
                        encryptAssignmentId: t.encryptAssignmentId,
                        itemId: t.ext.assistTaskDetail.itemId
                    });
                }
                _2.label = 16;
            case 16:
                _c++;
                return [3 /*break*/, 6];
            case 17:
                if (!(new Date().getHours() === 22)) return [3 /*break*/, 24];
                sum = 0;
                return [4 /*yield*/, api('superBrandSecondFloorMainPage', { "source": "secondfloor" })];
            case 18:
                res = _2.sent();
                userStarNum = res.data.result.activityUserInfo.userStarNum;
                console.log('可以抽奖', userStarNum, '次');
                i = 0;
                _2.label = 19;
            case 19:
                if (!(i < userStarNum)) return [3 /*break*/, 23];
                return [4 /*yield*/, api('superBrandTaskLottery', { "source": "secondfloor", "activityId": activityId })];
            case 20:
                res = _2.sent();
                if ((_0 = (_z = (_y = res.data.result) === null || _y === void 0 ? void 0 : _y.rewardComponent) === null || _z === void 0 ? void 0 : _z.beanList) === null || _0 === void 0 ? void 0 : _0.length) {
                    console.log('抽奖获得京豆：', res.data.result.rewardComponent.beanList[0].quantity);
                    sum += res.data.result.rewardComponent.beanList[0].quantity;
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 21:
                _2.sent();
                _2.label = 22;
            case 22:
                i++;
                return [3 /*break*/, 19];
            case 23:
                message += "\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n\u62BD\u5956").concat(userStarNum, "\u6B21\uFF0C\u83B7\u5F97\u4EAC\u8C46").concat(sum, "\n\n");
                _2.label = 24;
            case 24:
                _i++;
                return [3 /*break*/, 2];
            case 25: return [4 /*yield*/, (0, sendNotify_1.sendNotify)('京东-下拉', message)];
            case 26:
                _2.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('tewu')];
            case 27:
                shareCodesHW = _2.sent();
                shareCodes = __spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true);
                full = [];
                _e = 0, _f = cookiesArr.entries();
                _2.label = 28;
            case 28:
                if (!(_e < _f.length)) return [3 /*break*/, 34];
                _g = _f[_e], index = _g[0], value = _g[1];
                cookie = value;
                return [4 /*yield*/, api('superBrandTaskList', { "source": "secondfloor", "activityId": activityId, "assistInfoFlag": 1 })];
            case 29:
                res = _2.sent();
                mine = '';
                for (_h = 0, _j = res.data.result.taskList; _h < _j.length; _h++) {
                    t = _j[_h];
                    if ((_1 = t.ext) === null || _1 === void 0 ? void 0 : _1.assistTaskDetail) {
                        mine = t.ext.assistTaskDetail.itemId;
                    }
                }
                _loop_1 = function (code) {
                    return __generator(this, function (_3) {
                        switch (_3.label) {
                            case 0:
                                if (!(code.itemId !== mine && !full.includes(code.itemId))) return [3 /*break*/, 3];
                                console.log("\u8D26\u53F7".concat(index + 1, " \u53BB\u52A9\u529B ").concat(code.itemId, " ").concat(shareCodesSelf.some(function (self) { return self.itemId === code.itemId; }) ? '*内部*' : ''));
                                return [4 /*yield*/, api('superBrandDoTask', { "source": "secondfloor", "activityId": code.activityId, "encryptProjectId": code.encryptProjectId, "encryptAssignmentId": code.encryptAssignmentId, "assignmentType": 2, "itemId": code.itemId, "actionType": 0 })];
                            case 1:
                                res = _3.sent();
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
                                _3.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                console.log('助力满了，跳过');
                                _3.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                };
                _k = 0, shareCodes_1 = shareCodes;
                _2.label = 30;
            case 30:
                if (!(_k < shareCodes_1.length)) return [3 /*break*/, 33];
                code = shareCodes_1[_k];
                return [5 /*yield**/, _loop_1(code)];
            case 31:
                state_1 = _2.sent();
                if (state_1 === "break")
                    return [3 /*break*/, 33];
                _2.label = 32;
            case 32:
                _k++;
                return [3 /*break*/, 30];
            case 33:
                _e++;
                return [3 /*break*/, 28];
            case 34: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/api?functionId=".concat(fn, "&appid=ProductZ4Brand&client=wh5&t=").concat(Date.now(), "&body=").concat(encodeURIComponent(JSON.stringify(body))), '', {
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
