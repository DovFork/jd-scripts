"use strict";
/**
 * 京东-下拉
 * cron: 0 * * * *
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
var activityId, encryptProjectId, inviteTaskId;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, e_1, activityCardInfo, _i, _a, t, _b, _c, sign2, beginClock, i, _d, shareCode_1, code;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _e.sent();
                i = 0;
                _e.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 34];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                uuid = (0, TS_USER_AGENTS_1.randomString)(40);
                _e.label = 3;
            case 3:
                _e.trys.push([3, 5, , 6]);
                return [4 /*yield*/, api('showSecondFloorCardInfo', { "source": "card" })];
            case 4:
                res = _e.sent();
                activityId = res.data.result.activityBaseInfo.activityId;
                encryptProjectId = res.data.result.activityBaseInfo.encryptProjectId;
                return [3 /*break*/, 6];
            case 5:
                e_1 = _e.sent();
                console.log(e_1);
                return [3 /*break*/, 33];
            case 6:
                activityCardInfo = res.data.result.activityCardInfo;
                if (!(activityCardInfo.divideTimeStatus === 1 && activityCardInfo.divideStatus === 0 && activityCardInfo.cardStatus === 1)) return [3 /*break*/, 9];
                return [4 /*yield*/, api('superBrandTaskLottery', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "tag": "divide" })];
            case 7:
                res = _e.sent();
                console.log('瓜分');
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 8:
                _e.sent();
                _e.label = 9;
            case 9: return [4 /*yield*/, api('superBrandTaskList', { "source": "card", "activityId": activityId, "assistInfoFlag": 1 })];
            case 10:
                res = _e.sent();
                _i = 0, _a = res.data.result.taskList || [];
                _e.label = 11;
            case 11:
                if (!(_i < _a.length)) return [3 /*break*/, 31];
                t = _a[_i];
                if (!!t.completionFlag) return [3 /*break*/, 20];
                if (!(t.assignmentType === 3)) return [3 /*break*/, 14];
                return [4 /*yield*/, api('superBrandDoTask', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": t.encryptAssignmentId, "assignmentType": 3, "itemId": t.ext.followShop[0].itemId, "actionType": 0 })];
            case 12:
                res = _e.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 13:
                _e.sent();
                _e.label = 14;
            case 14:
                if (!(t.assignmentType === 5)) return [3 /*break*/, 18];
                console.log(t.assignmentName);
                _b = 0, _c = t.ext.sign2;
                _e.label = 15;
            case 15:
                if (!(_b < _c.length)) return [3 /*break*/, 18];
                sign2 = _c[_b];
                console.log(sign2.beginTime, sign2.status);
                beginClock = new Date("2021-01-01 " + sign2.beginTime).getHours();
                if (!(new Date().getHours() === beginClock && sign2.status === 1)) return [3 /*break*/, 17];
                console.log('开始下拉任务');
                return [4 /*yield*/, api('superBrandDoTask', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": t.encryptAssignmentId, "assignmentType": 5, "itemId": sign2.itemId, "actionType": 0, "dropDownChannel": 1 })];
            case 16:
                res = _e.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                _e.label = 17;
            case 17:
                _b++;
                return [3 /*break*/, 15];
            case 18:
                if (t.assignmentType === 7) {
                    console.log('开卡？');
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 19:
                _e.sent();
                _e.label = 20;
            case 20:
                if (!(t.assignmentName === '邀请好友')) return [3 /*break*/, 30];
                inviteTaskId = t.encryptAssignmentId;
                console.log('助力码', t.ext.assistTaskDetail.itemId);
                shareCodeSelf.push(t.ext.assistTaskDetail.itemId);
                return [4 /*yield*/, api('superBrandMyVoteFriendList', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": t.encryptAssignmentId, "assistInfoFlag": 1 })];
            case 21:
                res = _e.sent();
                console.log('收到助力', t.completionCnt, '/', 30);
                if (!(t.completionCnt >= 10 && t.ext.cardAssistBoxOpen === 0)) return [3 /*break*/, 24];
                return [4 /*yield*/, api('superBrandTaskLottery', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId })];
            case 22:
                res = _e.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 23:
                _e.sent();
                console.log('打开成功 1号盒子');
                t.ext.cardAssistBoxOpen++;
                _e.label = 24;
            case 24:
                if (!(t.completionCnt >= 20 && t.ext.cardAssistBoxOpen === 1)) return [3 /*break*/, 27];
                return [4 /*yield*/, api('superBrandTaskLottery', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId })];
            case 25:
                res = _e.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 26:
                _e.sent();
                console.log('打开成功 2号盒子');
                t.ext.cardAssistBoxOpen++;
                _e.label = 27;
            case 27:
                if (!(t.completionCnt >= 30 && t.ext.cardAssistBoxOpen === 2)) return [3 /*break*/, 30];
                return [4 /*yield*/, api('superBrandTaskLottery', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId })];
            case 28:
                res = _e.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 29:
                _e.sent();
                console.log('打开成功 3号盒子');
                _e.label = 30;
            case 30:
                _i++;
                return [3 /*break*/, 11];
            case 31: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 32:
                _e.sent();
                _e.label = 33;
            case 33:
                i++;
                return [3 /*break*/, 2];
            case 34:
                console.log('内部助力', shareCodeSelf);
                if (!(shareCodeHW.length === 0)) return [3 /*break*/, 36];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('tw')];
            case 35:
                shareCodeHW = _e.sent();
                _e.label = 36;
            case 36:
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], shareCodeSelf, true), shareCodeHW, true)));
                i = 0;
                _e.label = 37;
            case 37:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 48];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                _d = 0, shareCode_1 = shareCode;
                _e.label = 38;
            case 38:
                if (!(_d < shareCode_1.length)) return [3 /*break*/, 47];
                code = shareCode_1[_d];
                console.log("\u8D26\u53F7 " + UserName + " \u53BB\u52A9\u529B " + code);
                return [4 /*yield*/, api('superBrandDoTask', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": inviteTaskId, "assignmentType": 2, "itemId": code, "actionType": 0 })];
            case 39:
                res = _e.sent();
                if (!(res.data.bizCode === '0')) return [3 /*break*/, 40];
                console.log('成功');
                return [3 /*break*/, 44];
            case 40:
                if (!(res.data.bizCode === '104')) return [3 /*break*/, 41];
                console.log('已助力过');
                return [3 /*break*/, 44];
            case 41:
                if (!(res.data.bizCode === '109')) return [3 /*break*/, 42];
                console.log('不能自己给自己助力');
                return [3 /*break*/, 44];
            case 42:
                console.log('助力失败', res.data.bizMsg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 43:
                _e.sent();
                _e.label = 44;
            case 44: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 45:
                _e.sent();
                _e.label = 46;
            case 46:
                _d++;
                return [3 /*break*/, 38];
            case 47:
                i++;
                return [3 /*break*/, 37];
            case 48: return [2 /*return*/];
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
                    return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/?uuid=" + uuid + "&client=wh5&appid=ProductZ4Brand&functionId=" + fn + "&t=" + Date.now() + "&body=" + encodeURIComponent(JSON.stringify(body)), '', {
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
