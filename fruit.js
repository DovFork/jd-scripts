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
var cookie = '', res = '', data, UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, _i, _a, fr, _b, _c, t, _d, _e, t;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _f.sent();
                i = 0;
                _f.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 40];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('initForFarm', { "version": 11, "channel": 3 })];
            case 3:
                // 初始化
                res = _f.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 4:
                _f.sent();
                if (!res.todayGotWaterGoalTask.canPop) return [3 /*break*/, 6];
                return [4 /*yield*/, api('gotWaterGoalTaskForFarm', { "type": 3, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 5:
                data = _f.sent();
                (0, TS_USER_AGENTS_1.o2s)(data);
                console.log("弹窗获得水滴", data.amount);
                _f.label = 6;
            case 6:
                (0, TS_USER_AGENTS_1.o2s)(res);
                if (res.farmUserPro.treeState === 2) {
                    console.log("可以兑换奖品了");
                }
                else if (res.farmUserPro.treeState === 0) {
                    console.log("自动种植");
                }
                return [4 /*yield*/, api('friendListInitForFarm', { "lastId": null, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 7:
                // 添加好友
                // 删除好友
                res = _f.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 8:
                _f.sent();
                if (!!res.newFriendMsg) return [3 /*break*/, 13];
                _i = 0, _a = res.friends;
                _f.label = 9;
            case 9:
                if (!(_i < _a.length)) return [3 /*break*/, 13];
                fr = _a[_i];
                return [4 /*yield*/, api('deleteFriendForFarm', { "shareCode": fr.shareCode, "version": 8, "channel": 1 })];
            case 10:
                res = _f.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 11:
                _f.sent();
                if (res.code === '0') {
                    console.log("\u5220\u9664\u597D\u53CB".concat(fr.nickName, "\u6210\u529F"));
                }
                else {
                    console.log("\u5220\u9664\u597D\u53CB".concat(fr.nickName, "\u5931\u8D25"));
                    return [3 /*break*/, 13];
                }
                _f.label = 12;
            case 12:
                _i++;
                return [3 /*break*/, 9];
            case 13: return [4 /*yield*/, api('friendListInitForFarm', { "lastId": null, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 14:
                // 好友邀请奖励
                res = _f.sent();
                if (!(res.inviteFriendCount > res.inviteFriendGotAwardCount)) return [3 /*break*/, 17];
                return [4 /*yield*/, api('awardInviteFriendForFarm', {})];
            case 15:
                res = _f.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 16:
                _f.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, '好友邀请奖励');
                _f.label = 17;
            case 17: return [4 /*yield*/, api('clockInInitForFarm', { "timestamp": Date.now(), "version": 14, "channel": 1, "babelChannel": "120" })];
            case 18:
                // 签到
                res = _f.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 19:
                _f.sent();
                if (!!res.todaySigned) return [3 /*break*/, 22];
                return [4 /*yield*/, api('clockInForFarm', { "type": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 20:
                res = _f.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 21:
                _f.sent();
                _f.label = 22;
            case 22: return [4 /*yield*/, api('clockInInitForFarm', { "timestamp": Date.now(), "version": 14, "channel": 1, "babelChannel": "120" })];
            case 23:
                res = _f.sent();
                _b = 0, _c = res.themes || [];
                _f.label = 24;
            case 24:
                if (!(_b < _c.length)) return [3 /*break*/, 29];
                t = _c[_b];
                if (!!t.hadGot) return [3 /*break*/, 28];
                console.log('关注', t.name);
                return [4 /*yield*/, api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 25:
                res = _f.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 26:
                _f.sent();
                return [4 /*yield*/, api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 2, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 27:
                res = _f.sent();
                console.log('获得水滴', res.amount);
                _f.label = 28;
            case 28:
                _b++;
                return [3 /*break*/, 24];
            case 29: return [4 /*yield*/, api('taskInitForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 30:
                // 任务
                res = _f.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                if (!!res.gotBrowseTaskAdInit.f) return [3 /*break*/, 35];
                _d = 0, _e = res.gotBrowseTaskAdInit.userBrowseTaskAds;
                _f.label = 31;
            case 31:
                if (!(_d < _e.length)) return [3 /*break*/, 35];
                t = _e[_d];
                if (!(t.hadFinishedTimes !== t.limit)) return [3 /*break*/, 34];
                return [4 /*yield*/, api('browseAdTaskForFarm', { "advertId": t.advertId, "type": 0, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 32:
                data = _f.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'browseAdTaskForFarm');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.time * 1000 || 1000)];
            case 33:
                _f.sent();
                _f.label = 34;
            case 34:
                _d++;
                return [3 /*break*/, 31];
            case 35:
                if (!!res.waterRainInit.f) return [3 /*break*/, 37];
                if (!(Date.now < res.waterRainInit.lastTime + 3 * 60 * 60 * 1000)) return [3 /*break*/, 37];
                return [4 /*yield*/, api('waterRainForFarm', { "type": 1, "hongBaoTimes": 100, "version": 3 })];
            case 36:
                data = _f.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'waterRainForFarm');
                if (data.code === '0') {
                    console.log('获得水滴', data.addEnergy);
                }
                _f.label = 37;
            case 37:
                if (!(!res.firstWaterInit.f && res.firstWaterInit.totalWaterTimes !== 0)) return [3 /*break*/, 39];
                return [4 /*yield*/, api('firstWaterTaskForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 38:
                data = _f.sent();
                console.log('firstWaterTaskForFarm', data.amount);
                _f.label = 39;
            case 39:
                i++;
                return [3 /*break*/, 2];
            case 40: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://api.m.jd.com/client.action?functionId=".concat(fn, "&body=").concat(JSON.stringify(body), "&&appid=wh5&client=apple&clientVersion=10.2.4"), {
                        headers: {
                            "Host": "api.m.jd.com",
                            "Origin": "https://carry.m.jd.com",
                            "User-Agent": TS_USER_AGENTS_1["default"],
                            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                            "Referer": "https://carry.m.jd.com/",
                            "Cookie": cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
