"use strict";
/**
 * 京东-下拉
 * cron: 15 8,20 * * *
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
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var path = require("path");
var cookie = '', UserName = '', res = '', message = '', shareCodes = [], shareCodesSelf = [], shareCodesHW = [], black = [];
var except = (0, TS_USER_AGENTS_1.exceptCookie)(path.basename(__filename));
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, activityId, _i, _a, _b, index, value, encryptProjectId, divide, _c, _d, t, tp, _e, _f, sign, sum, userStarNum, i, e_1, e_2, full, _g, _h, _j, index, value, _k, shareCodes_1, code;
    var _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
    return __generator(this, function (_4) {
        switch (_4.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getCookie)()];
            case 1:
                cookiesArr = _4.sent();
                _i = 0, _a = cookiesArr.entries();
                _4.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 34];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                if (except.includes(encodeURIComponent(UserName))) {
                    console.log('已设置跳过');
                    return [3 /*break*/, 33];
                }
                return [4 /*yield*/, api('showSecondFloorCardInfo', { "source": "card" })];
            case 3:
                res = _4.sent();
                _4.label = 4;
            case 4:
                _4.trys.push([4, 31, , 33]);
                activityId = res.data.result.activityBaseInfo.activityId;
                encryptProjectId = res.data.result.activityBaseInfo.encryptProjectId;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 5:
                _4.sent();
                divide = res.data.result.activityCardInfo.divideStatus === 0 && res.data.result.activityCardInfo.cardStatus === 1;
                return [4 /*yield*/, api('superBrandTaskList', { "source": "card", "activityId": activityId, "assistInfoFlag": 1 })];
            case 6:
                // 任务
                res = _4.sent();
                _c = 0, _d = res.data.result.taskList;
                _4.label = 7;
            case 7:
                if (!(_c < _d.length)) return [3 /*break*/, 18];
                t = _d[_c];
                if (!(t.completionCnt !== t.assignmentTimesLimit)) return [3 /*break*/, 16];
                if (!(((_l = t.ext) === null || _l === void 0 ? void 0 : _l.shoppingActivity) || ((_m = t.ext) === null || _m === void 0 ? void 0 : _m.followShop))) return [3 /*break*/, 10];
                tp = ((_o = t.ext) === null || _o === void 0 ? void 0 : _o.shoppingActivity) || ((_p = t.ext) === null || _p === void 0 ? void 0 : _p.followShop);
                tp = tp[0];
                console.log(tp.title || tp.shopName, tp.itemId);
                return [4 /*yield*/, api('superBrandDoTask', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": t.encryptAssignmentId, "assignmentType": t.assignmentType, "itemId": tp.itemId, "actionType": 0 })];
            case 8:
                res = _4.sent();
                console.log((_q = res.data) === null || _q === void 0 ? void 0 : _q.bizMsg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 9:
                _4.sent();
                _4.label = 10;
            case 10:
                if (!((_r = t.ext) === null || _r === void 0 ? void 0 : _r.sign2)) return [3 /*break*/, 16];
                _e = 0, _f = t.ext.sign2;
                _4.label = 11;
            case 11:
                if (!(_e < _f.length)) return [3 /*break*/, 16];
                sign = _f[_e];
                if (!(sign.status === 0 && [10, 18].includes(new Date().getHours()))) return [3 /*break*/, 14];
                return [4 /*yield*/, api('superBrandDoTask', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": t.encryptAssignmentId, "assignmentType": t.assignmentType, "itemId": t.ext.currentSectionItemId, "actionType": 0 })];
            case 12:
                res = _4.sent();
                console.log((_s = res.data) === null || _s === void 0 ? void 0 : _s.bizMsg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 13:
                _4.sent();
                console.log('下拉任务', (_t = t.ext) === null || _t === void 0 ? void 0 : _t.sign2);
                return [3 /*break*/, 15];
            case 14:
                if (sign.status !== 0) {
                    console.log("".concat(sign.beginTime, " \u7B7E\u5230\u5B8C\u6210"));
                }
                _4.label = 15;
            case 15:
                _e++;
                return [3 /*break*/, 11];
            case 16:
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
                _4.label = 17;
            case 17:
                _c++;
                return [3 /*break*/, 7];
            case 18:
                _4.trys.push([18, 26, , 27]);
                if (!(new Date().getHours() === 20)) return [3 /*break*/, 25];
                sum = 0;
                return [4 /*yield*/, api('superBrandSecondFloorMainPage', { "source": "card" })];
            case 19:
                res = _4.sent();
                userStarNum = res.data.result.activityUserInfo.userStarNum;
                console.log('可以抽奖', userStarNum, '次');
                i = 0;
                _4.label = 20;
            case 20:
                if (!(i < userStarNum)) return [3 /*break*/, 24];
                return [4 /*yield*/, api('superBrandTaskLottery', { "source": "card", "activityId": activityId })];
            case 21:
                res = _4.sent();
                if ((_0 = (_z = (_y = res.data.result) === null || _y === void 0 ? void 0 : _y.rewardComponent) === null || _z === void 0 ? void 0 : _z.beanList) === null || _0 === void 0 ? void 0 : _0.length) {
                    console.log('抽奖获得京豆：', res.data.result.rewardComponent.beanList[0].quantity);
                    sum += res.data.result.rewardComponent.beanList[0].quantity;
                }
                else {
                    console.log('没抽到？', JSON.stringify(res));
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 22:
                _4.sent();
                _4.label = 23;
            case 23:
                i++;
                return [3 /*break*/, 20];
            case 24:
                message += "\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n\u62BD\u5956").concat(userStarNum, "\u6B21\uFF0C\u83B7\u5F97\u4EAC\u8C46").concat(sum, "\n\n");
                _4.label = 25;
            case 25: return [3 /*break*/, 27];
            case 26:
                e_1 = _4.sent();
                console.log('error');
                return [3 /*break*/, 27];
            case 27: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 28:
                _4.sent();
                if (!divide) return [3 /*break*/, 30];
                console.log('瓜分');
                return [4 /*yield*/, api('superBrandTaskLottery', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "tag": "divide" })];
            case 29:
                res = _4.sent();
                if (res.data.success) {
                    console.log('瓜分成功', (_3 = (_2 = (_1 = res.data.result) === null || _1 === void 0 ? void 0 : _1.rewardComponent) === null || _2 === void 0 ? void 0 : _2.beanList[0]) === null || _3 === void 0 ? void 0 : _3.quantity);
                }
                _4.label = 30;
            case 30: return [3 /*break*/, 33];
            case 31:
                e_2 = _4.sent();
                black.push(UserName);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 32:
                _4.sent();
                return [3 /*break*/, 33];
            case 33:
                _i++;
                return [3 /*break*/, 2];
            case 34:
                (0, TS_USER_AGENTS_1.o2s)(shareCodesSelf);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('tewu')];
            case 35:
                shareCodesHW = _4.sent();
                shareCodes = __spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true);
                full = [];
                _g = 0, _h = cookiesArr.entries();
                _4.label = 36;
            case 36:
                if (!(_g < _h.length)) return [3 /*break*/, 42];
                _j = _h[_g], index = _j[0], value = _j[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                if (except.includes(encodeURIComponent(UserName))) {
                    console.log('已设置跳过');
                    return [3 /*break*/, 41];
                }
                if (black.includes(UserName)) {
                    console.log('黑号');
                    return [3 /*break*/, 41];
                }
                _k = 0, shareCodes_1 = shareCodes;
                _4.label = 37;
            case 37:
                if (!(_k < shareCodes_1.length)) return [3 /*break*/, 41];
                code = shareCodes_1[_k];
                if (full.includes(code.itemId))
                    return [3 /*break*/, 40];
                console.log("\u8D26\u53F7".concat(index + 1, " ").concat(UserName, " \u53BB\u52A9\u529B ").concat(code.itemId));
                return [4 /*yield*/, api('superBrandDoTask', { "source": "card", "activityId": code.activityId, "encryptProjectId": code.encryptProjectId, "encryptAssignmentId": code.encryptAssignmentId, "assignmentType": 2, "itemId": code.itemId, "actionType": 0 })];
            case 38:
                res = _4.sent();
                if (res.data.bizCode === '0') {
                    console.log('助力成功');
                }
                else if (res.data.bizCode === '103') {
                    console.log('助力满了');
                    full.push(code.itemId);
                }
                else if (res.data.bizCode === '104') {
                    console.log('已助力过');
                }
                else if (res.data.bizCode === '108') {
                    console.log('上限');
                    return [3 /*break*/, 41];
                }
                else if (res.data.bizCode === '109') {
                }
                else if (res.data.bizCode === '2001') {
                    console.log('黑号');
                    return [3 /*break*/, 41];
                }
                else if (res.data.bizCode === '4001') {
                    console.log('助力码过期');
                    full.push(code.itemId);
                }
                else {
                    (0, TS_USER_AGENTS_1.o2s)(res, 'error');
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 39:
                _4.sent();
                _4.label = 40;
            case 40:
                _k++;
                return [3 /*break*/, 37];
            case 41:
                _g++;
                return [3 /*break*/, 36];
            case 42: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.post)("https://api.m.jd.com/?uuid=&client=wh5&appid=ProductZ4Brand&functionId=".concat(fn, "&t=").concat(Date.now(), "&body=").concat(encodeURIComponent(JSON.stringify(body))), '', {
                        'Host': 'api.m.jd.com',
                        'Origin': 'https://pro.m.jd.com',
                        'User-Agent': TS_USER_AGENTS_1["default"],
                        'Referer': 'https://pro.m.jd.com/',
                        'Cookie': cookie
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
