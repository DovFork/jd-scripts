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
var fs_1 = require("fs");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', data, UserName, index;
var shareCodeSelf = [], shareCodePool = [], shareCode = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, totalEnergy, _i, _a, fr, beanCard, i_1, friendList, i_2, _b, friendList_1, fr, _c, _d, t, _e, _f, t, _g, _h, t, _j, _k, t, i_3, _l, shareCodeSelf_1, code;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _m.sent();
                try {
                    shareCodeSelf = JSON.parse((0, fs_1.readFileSync)('./utils/sharecodes.json').toString()).fruit;
                    console.log(shareCodeSelf);
                }
                catch (e) {
                    console.log('读取分享码失败');
                }
                i = 0;
                _m.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 93];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('initForFarm', { "version": 11, "channel": 3 })];
            case 3:
                // 初始化
                res = _m.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 4:
                _m.sent();
                if (!res.todayGotWaterGoalTask.canPop) return [3 /*break*/, 6];
                return [4 /*yield*/, api('gotWaterGoalTaskForFarm', { "type": 3, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 5:
                data = _m.sent();
                (0, TS_USER_AGENTS_1.o2s)(data);
                console.log("弹窗获得水滴", data.addEnergy);
                _m.label = 6;
            case 6:
                (0, TS_USER_AGENTS_1.o2s)(res, 'initForFarm');
                totalEnergy = res.farmUserPro.totalEnergy // 背包剩余水滴
                ;
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
                res = _m.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 8:
                _m.sent();
                if (!!res.newFriendMsg) return [3 /*break*/, 13];
                _i = 0, _a = res.friends;
                _m.label = 9;
            case 9:
                if (!(_i < _a.length)) return [3 /*break*/, 13];
                fr = _a[_i];
                return [4 /*yield*/, api('deleteFriendForFarm', { "shareCode": fr.shareCode, "version": 8, "channel": 1 })];
            case 10:
                res = _m.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 11:
                _m.sent();
                if (res.code === '0') {
                    console.log("\u5220\u9664\u597D\u53CB".concat(fr.nickName, "\u6210\u529F"));
                }
                else {
                    console.log("\u5220\u9664\u597D\u53CB".concat(fr.nickName, "\u5931\u8D25"));
                    return [3 /*break*/, 13];
                }
                _m.label = 12;
            case 12:
                _i++;
                return [3 /*break*/, 9];
            case 13: return [4 /*yield*/, api('myCardInfoForFarm', { "version": 14, "channel": 3, "babelChannel": "10" })];
            case 14:
                // 背包
                res = _m.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'myCardInfoForFarm');
                beanCard = res.beanCard // 换豆卡
                ;
                i_1 = 0;
                _m.label = 15;
            case 15:
                if (!(i_1 < 5)) return [3 /*break*/, 19];
                if (!(totalEnergy >= 100 && beanCard)) return [3 /*break*/, 18];
                return [4 /*yield*/, api('userMyCardForFarm', { "cardType": "beanCard", "babelChannel": "10", "channel": 3, "version": 14 })];
            case 16:
                data = _m.sent();
                console.log('使用水滴换豆卡，获得京豆', data.beanCount);
                totalEnergy -= 100;
                beanCard--;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 17:
                _m.sent();
                _m.label = 18;
            case 18:
                i_1++;
                return [3 /*break*/, 15];
            case 19: return [4 /*yield*/, api('friendListInitForFarm', { "lastId": null, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 20:
                // 好友邀请奖励
                res = _m.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'friendListInitForFarm');
                friendList = res.friends;
                if (!(res.inviteFriendCount > res.inviteFriendGotAwardCount)) return [3 /*break*/, 23];
                return [4 /*yield*/, api('awardInviteFriendForFarm', {})];
            case 21:
                data = _m.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 22:
                _m.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, '好友邀请奖励');
                _m.label = 23;
            case 23: return [4 /*yield*/, api('taskInitForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 24:
                // 给好友浇水
                res = _m.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'taskInitForFarm');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 25:
                _m.sent();
                console.log("\u4ECA\u65E5\u5DF2\u7ED9".concat(res.waterFriendTaskInit.waterFriendCountKey, "\u4E2A\u597D\u53CB\u6D47\u6C34"));
                if (!(res.waterFriendTaskInit.waterFriendCountKey < res.waterFriendTaskInit.waterFriendMax)) return [3 /*break*/, 33];
                i_2 = res.waterFriendTaskInit.waterFriendCountKey;
                _m.label = 26;
            case 26:
                if (!(i_2 < res.waterFriendTaskInit.waterFriendMax)) return [3 /*break*/, 32];
                _b = 0, friendList_1 = friendList;
                _m.label = 27;
            case 27:
                if (!(_b < friendList_1.length)) return [3 /*break*/, 31];
                fr = friendList_1[_b];
                if (!(fr.friendState === 1)) return [3 /*break*/, 30];
                return [4 /*yield*/, api('waterFriendForFarm', { "shareCode": fr.shareCode, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 28:
                data = _m.sent();
                if (data.code === '0')
                    console.log("\u7ED9\u597D\u53CB".concat(fr.nickName, "\u6D47\u6C34\u6210\u529F"));
                if (data.cardInfo) {
                    console.log('获得卡片');
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 29:
                _m.sent();
                return [3 /*break*/, 31];
            case 30:
                _b++;
                return [3 /*break*/, 27];
            case 31:
                i_2++;
                return [3 /*break*/, 26];
            case 32: return [3 /*break*/, 36];
            case 33:
                if (!(res.waterFriendTaskInit.waterFriendCountKey === res.waterFriendTaskInit.waterFriendMax && !res.waterFriendTaskInit.waterFriendGotAward)) return [3 /*break*/, 36];
                return [4 /*yield*/, api('waterFriendGotAwardForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 34:
                data = _m.sent();
                console.log('给好友浇水奖励', data.addWater);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 35:
                _m.sent();
                _m.label = 36;
            case 36: return [4 /*yield*/, api('clockInInitForFarm', { "timestamp": Date.now(), "version": 14, "channel": 1, "babelChannel": "120" })];
            case 37:
                // 签到
                res = _m.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 38:
                _m.sent();
                if (!!res.todaySigned) return [3 /*break*/, 44];
                return [4 /*yield*/, api('clockInForFarm', { "type": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 39:
                data = _m.sent();
                if (!(data.signDay === 7)) return [3 /*break*/, 42];
                return [4 /*yield*/, api('gotClockInGift', { "type": 2, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 40:
                data = _m.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'gotClockInGift');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 41:
                _m.sent();
                _m.label = 42;
            case 42: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 43:
                _m.sent();
                _m.label = 44;
            case 44: return [4 /*yield*/, api('clockInInitForFarm', { "timestamp": Date.now(), "version": 14, "channel": 1, "babelChannel": "120" })];
            case 45:
                res = _m.sent();
                _c = 0, _d = res.themes || [];
                _m.label = 46;
            case 46:
                if (!(_c < _d.length)) return [3 /*break*/, 51];
                t = _d[_c];
                if (!!t.hadGot) return [3 /*break*/, 50];
                console.log('关注', t.name);
                return [4 /*yield*/, api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 47:
                res = _m.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 48:
                _m.sent();
                return [4 /*yield*/, api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 2, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 49:
                res = _m.sent();
                console.log('获得水滴', res.amount);
                _m.label = 50;
            case 50:
                _c++;
                return [3 /*break*/, 46];
            case 51: return [4 /*yield*/, api('farmAssistInit', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 52:
                // 助力奖励
                res = _m.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 53:
                _m.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'farmAssistInit');
                _e = 0, _f = res.assistStageList;
                _m.label = 54;
            case 54:
                if (!(_e < _f.length)) return [3 /*break*/, 58];
                t = _f[_e];
                if (!(t.percentage === '100%' && t.stageStaus === 2)) return [3 /*break*/, 57];
                return [4 /*yield*/, api('receiveStageEnergy', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 55:
                data = _m.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 56:
                _m.sent();
                console.log('被助力奖励', data.amount);
                _m.label = 57;
            case 57:
                _e++;
                return [3 /*break*/, 54];
            case 58: return [4 /*yield*/, api('taskInitForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 59:
                // 任务
                res = _m.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                if (!!res.gotBrowseTaskAdInit.f) return [3 /*break*/, 63];
                _g = 0, _h = res.gotBrowseTaskAdInit.userBrowseTaskAds;
                _m.label = 60;
            case 60:
                if (!(_g < _h.length)) return [3 /*break*/, 63];
                t = _h[_g];
                return [4 /*yield*/, api('browseAdTaskForFarm', { "advertId": t.advertId, "type": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 61:
                // if (t.hadFinishedTimes !== t.limit) {
                // data = await api('browseAdTaskForFarm', {"advertId": t.advertId, "type": 0, "version": 14, "channel": 1, "babelChannel": "120"})
                // o2s(data, 'browseAdTaskForFarm')
                // await wait(t.time * 1000 || 1000)
                data = _m.sent();
                console.log('任务完成，获得', data.amount);
                _m.label = 62;
            case 62:
                _g++;
                return [3 /*break*/, 60];
            case 63:
                if (!!res.gotThreeMealInit.f) return [3 /*break*/, 66];
                if (!![10, 15, 16, 22, 23].includes(new Date().getHours())) return [3 /*break*/, 66];
                return [4 /*yield*/, api('gotThreeMealForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 64:
                data = _m.sent();
                if (data.code === '0') {
                    console.log('定时奖励成功', data.amount);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 65:
                _m.sent();
                _m.label = 66;
            case 66:
                if (!res.signInit.todaySigned) return [3 /*break*/, 67];
                console.log("\u4ECA\u5929\u5DF2\u7B7E\u5230,\u5DF2\u7ECF\u8FDE\u7EED\u7B7E\u5230".concat(res.signInit.totalSigned, "\u5929,\u4E0B\u6B21\u7B7E\u5230\u53EF\u5F97").concat(res.signInit.signEnergyEachAmount, "g"));
                return [3 /*break*/, 70];
            case 67: return [4 /*yield*/, api('signForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 68:
                data = _m.sent();
                console.log('签到成功', data.amount);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 69:
                _m.sent();
                _m.label = 70;
            case 70:
                if (!!res.waterRainInit.f) return [3 /*break*/, 72];
                if (!(Date.now < res.waterRainInit.lastTime + 3 * 60 * 60 * 1000)) return [3 /*break*/, 72];
                return [4 /*yield*/, api('waterRainForFarm', { "type": 1, "hongBaoTimes": 100, "version": 3 })];
            case 71:
                data = _m.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'waterRainForFarm');
                if (data.code === '0') {
                    console.log('获得水滴', data.addEnergy);
                }
                _m.label = 72;
            case 72:
                if (!(!res.firstWaterInit.f && res.firstWaterInit.totalWaterTimes !== 0)) return [3 /*break*/, 74];
                return [4 /*yield*/, api('firstWaterTaskForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 73:
                data = _m.sent();
                console.log('firstWaterTaskForFarm', data.amount);
                _m.label = 74;
            case 74: return [4 /*yield*/, api('initForTurntableFarm', { "version": 4, "channel": 1 })];
            case 75:
                // 红包
                res = _m.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'initForTurntableFarm');
                _j = 0, _k = res.turntableBrowserAds;
                _m.label = 76;
            case 76:
                if (!(_j < _k.length)) return [3 /*break*/, 81];
                t = _k[_j];
                if (!!t.status) return [3 /*break*/, 80];
                console.log(t.main);
                return [4 /*yield*/, api('browserForTurntableFarm', { "type": 1, "adId": t.adId, "version": 4, "channel": 1 })];
            case 77:
                data = _m.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.browserTimes * 1000 || 1000)];
            case 78:
                _m.sent();
                return [4 /*yield*/, api('browserForTurntableFarm', { "type": 2, "adId": t.adId, "version": 4, "channel": 1 })];
            case 79:
                data = _m.sent();
                _m.label = 80;
            case 80:
                _j++;
                return [3 /*break*/, 76];
            case 81:
                i_3 = 0;
                _m.label = 82;
            case 82:
                if (!(i_3 < res.remainLotteryTimes)) return [3 /*break*/, 86];
                return [4 /*yield*/, api('lotteryForTurntableFarm', { "type": 1, "version": 4, "channel": 1 })];
            case 83:
                data = _m.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'lotteryForTurntableFarm');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 84:
                _m.sent();
                _m.label = 85;
            case 85:
                i_3++;
                return [3 /*break*/, 82];
            case 86: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('farm', 30)];
            case 87:
                // if (!res.timingGotStatus && res.remainLotteryTimes) {
                //   if (Date.now() > (res.timingLastSysTime + 60 * 60 * res.timingIntervalHours * 1000)) {
                //     data = await api('timingAwardForTurntableFarm', {"version": 4, "channel": 1})
                //     await wait(1000)
                //     o2s(data, 'timingAwardForTurntableFarm')
                //   } else {
                //     console.log(`免费赠送的抽奖机会未到时间`)
                //   }
                // }
                // 助力
                shareCodePool = _m.sent();
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], shareCodeSelf, true), shareCodePool, true)));
                _l = 0, shareCodeSelf_1 = shareCodeSelf;
                _m.label = 88;
            case 88:
                if (!(_l < shareCodeSelf_1.length)) return [3 /*break*/, 92];
                code = shareCodeSelf_1[_l];
                console.log('去助力', code);
                return [4 /*yield*/, api('initForFarm', { "mpin": "", "utm_campaign": "t_335139774", "utm_medium": "appshare", "shareCode": code, "utm_term": "Wxfriends", "utm_source": "iosapp", "imageUrl": "", "nickName": "", "version": 14, "channel": 2, "babelChannel": 0 })];
            case 89:
                res = _m.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 90:
                _m.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, '助力');
                if (res.helpResult.code === '7') {
                    console.log('不给自己助力');
                }
                else if (res.helpResult.code === '0') {
                    console.log('助力成功,获得', res.helpResult.salveHelpAddWater);
                }
                else if (res.helpResult.code === '8') {
                    console.log('上限');
                    return [3 /*break*/, 92];
                }
                else if (res.helpResult.code === '9') {
                    console.log('已助力');
                }
                else if (res.helpResult.code === '10') {
                    console.log('已满');
                }
                else if (res.helpResult.remainTimes === 0) {
                    console.log('次数用完');
                    return [3 /*break*/, 92];
                }
                _m.label = 91;
            case 91:
                _l++;
                return [3 /*break*/, 88];
            case 92:
                i++;
                return [3 /*break*/, 2];
            case 93: return [2 /*return*/];
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
