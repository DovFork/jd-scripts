"use strict";
/**
 * 京东-下拉
 * cron: 0 9-20/1 * * *
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
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', UserName, index, uuid;
var shareCodeSelf = [], shareCode = [], shareCodeHW = [];
var activityId, encryptProjectId, inviteTaskId, isOpen = false;
var message = '', sendNotify = require('./sendNotify').sendNotify;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, _i, _a, card, e_1, activityCardInfo, _b, _c, t, _d, _e, sign2, beginClock, j, i, _f, shareCode_1, code;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _g.sent();
                i = 0;
                _g.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 31];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                uuid = (0, TS_USER_AGENTS_1.randomString)(40);
                _g.label = 3;
            case 3:
                _g.trys.push([3, 5, , 6]);
                return [4 /*yield*/, api('showSecondFloorCardInfo', { "source": "card" })];
            case 4:
                res = _g.sent();
                activityId = res.data.result.activityBaseInfo.activityId;
                encryptProjectId = res.data.result.activityBaseInfo.encryptProjectId;
                isOpen = true;
                // 已收集
                console.log('已收集');
                for (_i = 0, _a = res.data.result.activityCardInfo.cardPackList; _i < _a.length; _i++) {
                    card = _a[_i];
                    console.log("card-".concat(card.cardType), card.num, card.num === 0 ? "!!!" : "");
                }
                return [3 /*break*/, 6];
            case 5:
                e_1 = _g.sent();
                console.log('活动未开启');
                return [3 /*break*/, 31];
            case 6:
                activityCardInfo = res.data.result.activityCardInfo;
                if (!(activityCardInfo.divideTimeStatus === 1 && activityCardInfo.divideStatus === 0 && activityCardInfo.cardStatus === 1)) return [3 /*break*/, 9];
                return [4 /*yield*/, api('superBrandTaskLottery', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "tag": "divide" })];
            case 7:
                res = _g.sent();
                console.log('瓜分', res.data.result.rewards[0].beanNum);
                message += "\u8D26\u53F7".concat(index, "  ").concat(UserName, "\n").concat(res.data.result.rewards[0].beanNum, "\n\n");
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 8:
                _g.sent();
                _g.label = 9;
            case 9: return [4 /*yield*/, api('superBrandTaskList', { "source": "card", "activityId": activityId, "assistInfoFlag": 1 })];
            case 10:
                res = _g.sent();
                _b = 0, _c = res.data.result.taskList || [];
                _g.label = 11;
            case 11:
                if (!(_b < _c.length)) return [3 /*break*/, 28];
                t = _c[_b];
                if (!!t.completionFlag) return [3 /*break*/, 22];
                if (!(t.assignmentType === 1)) return [3 /*break*/, 14];
                return [4 /*yield*/, api('superBrandDoTask', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": t.encryptAssignmentId, "assignmentType": 1, "itemId": t.ext.shoppingActivity[0].itemId, "actionType": 0 })];
            case 12:
                res = _g.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 13:
                _g.sent();
                _g.label = 14;
            case 14:
                if (!(t.assignmentType === 3)) return [3 /*break*/, 17];
                return [4 /*yield*/, api('superBrandDoTask', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": t.encryptAssignmentId, "assignmentType": 3, "itemId": t.ext.followShop[0].itemId, "actionType": 0 })];
            case 15:
                res = _g.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 16:
                _g.sent();
                _g.label = 17;
            case 17:
                if (!(t.assignmentType === 5)) return [3 /*break*/, 21];
                console.log(t.assignmentName);
                _d = 0, _e = t.ext.sign2;
                _g.label = 18;
            case 18:
                if (!(_d < _e.length)) return [3 /*break*/, 21];
                sign2 = _e[_d];
                console.log(sign2.beginTime, sign2.status);
                beginClock = new Date("2021-01-01 ".concat(sign2.beginTime)).getHours();
                if (!(new Date().getHours() === beginClock && sign2.status === 1)) return [3 /*break*/, 20];
                console.log('开始下拉任务');
                return [4 /*yield*/, api('superBrandDoTask', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": t.encryptAssignmentId, "assignmentType": 5, "itemId": sign2.itemId, "actionType": 0, "dropDownChannel": 1 })];
            case 19:
                res = _g.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                _g.label = 20;
            case 20:
                _d++;
                return [3 /*break*/, 18];
            case 21:
                if (t.assignmentType === 7) {
                    console.log('开卡  pass');
                }
                _g.label = 22;
            case 22:
                if (!(t.assignmentName === '邀请好友')) return [3 /*break*/, 27];
                (0, TS_USER_AGENTS_1.o2s)(t);
                inviteTaskId = t.encryptAssignmentId;
                console.log('助力码', t.ext.assistTaskDetail.itemId);
                shareCodeSelf.push(t.ext.assistTaskDetail.itemId);
                console.log('收到助力', t.completionCnt, '/', 30);
                j = 0;
                _g.label = 23;
            case 23:
                if (!(j < t.ext.cardAssistBoxRest)) return [3 /*break*/, 27];
                return [4 /*yield*/, api('superBrandTaskLottery', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId })];
            case 24:
                res = _g.sent();
                console.log('打开盒子', JSON.stringify(res));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 25:
                _g.sent();
                _g.label = 26;
            case 26:
                j++;
                return [3 /*break*/, 23];
            case 27:
                _b++;
                return [3 /*break*/, 11];
            case 28: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 29:
                _g.sent();
                _g.label = 30;
            case 30:
                i++;
                return [3 /*break*/, 2];
            case 31:
                if (!message) return [3 /*break*/, 33];
                return [4 /*yield*/, sendNotify("特物瓜分", message)];
            case 32:
                _g.sent();
                _g.label = 33;
            case 33:
                if (!isOpen) return [3 /*break*/, 47];
                console.log('内部助力', shareCodeSelf);
                if (!(shareCodeHW.length === 0)) return [3 /*break*/, 35];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('tw')];
            case 34:
                shareCodeHW = _g.sent();
                _g.label = 35;
            case 35:
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], shareCodeSelf, true), shareCodeHW, true)));
                i = 0;
                _g.label = 36;
            case 36:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 47];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                _f = 0, shareCode_1 = shareCode;
                _g.label = 37;
            case 37:
                if (!(_f < shareCode_1.length)) return [3 /*break*/, 46];
                code = shareCode_1[_f];
                console.log("\u8D26\u53F7 ".concat(UserName, " \u53BB\u52A9\u529B ").concat(code));
                return [4 /*yield*/, api('superBrandDoTask', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": inviteTaskId, "assignmentType": 2, "itemId": code, "actionType": 0 })];
            case 38:
                res = _g.sent();
                if (!(res.data.bizCode === '0')) return [3 /*break*/, 39];
                console.log('成功');
                return [3 /*break*/, 43];
            case 39:
                if (!(res.data.bizCode === '104')) return [3 /*break*/, 40];
                console.log('已助力过');
                return [3 /*break*/, 43];
            case 40:
                if (!(res.data.bizCode === '109')) return [3 /*break*/, 41];
                console.log('不能自己给自己助力');
                return [3 /*break*/, 43];
            case 41:
                console.log('助力失败', res.data.bizMsg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 42:
                _g.sent();
                _g.label = 43;
            case 43: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 44:
                _g.sent();
                _g.label = 45;
            case 45:
                _f++;
                return [3 /*break*/, 37];
            case 46:
                i++;
                return [3 /*break*/, 36];
            case 47: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/?uuid=".concat(uuid, "&client=wh5&appid=ProductZ4Brand&functionId=").concat(fn, "&t=").concat(Date.now(), "&body=").concat(encodeURIComponent(JSON.stringify(body))), '', {
                            headers: {
                                'Host': 'api.m.jd.com',
                                'Origin': 'https://prodev.m.jd.com',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'Referer': 'https://prodev.m.jd.com/mall/active/ZskuZGqQMZ2j6L99PM1L8jg2F2a/index.html',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
                case 2:
                    e_2 = _a.sent();
                    console.log('Error');
                    (0, TS_USER_AGENTS_1.o2s)(e_2);
                    return [2 /*return*/, ''];
                case 3: return [2 /*return*/];
            }
        });
    });
}
