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
var sendNotify_1 = require("./sendNotify");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var h5st_1 = require("./utils/h5st");
var cookie = '', res = '', data, UserName;
var shareCodeSelf = [], shareCodePool = [], shareCode = [], shareCodeFile = require('./jdFruitShareCodes');
var message = '', h5stTool = new h5st_1.H5ST("0c010", TS_USER_AGENTS_1["default"], "8389547038003203");
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, totalEnergy, _c, _d, fr, friendList, i, _e, friendList_1, fr, _f, _g, t, _h, _j, t, _k, _l, t, _m, shareCodeSelf_1, code, i, farmAssistInit_waterEnergy, _o, _p, t, e_1;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getCookie)()];
            case 1:
                cookiesArr = _q.sent();
                _i = 0, _a = cookiesArr.entries();
                _q.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 99];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                message += "\u3010\u8D26\u53F7".concat(index + 1, "\u3011  ").concat(UserName, "\n");
                return [4 /*yield*/, h5stTool.__genAlgo()];
            case 3:
                _q.sent();
                _q.label = 4;
            case 4:
                _q.trys.push([4, 95, 96, 98]);
                if (Object.keys(shareCodeFile)[index]) {
                    shareCodeSelf = shareCodeFile[Object.keys(shareCodeFile)[index]].split('@');
                }
                console.log("\u7B2C".concat(index + 1, "\u4E2A\u8D26\u53F7\u83B7\u53D6\u7684\u5185\u90E8\u4E92\u52A9"), shareCodeSelf);
                return [4 /*yield*/, api('initForFarm', { "version": 11, "channel": 3 })];
            case 5:
                // 初始化
                res = _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                if (!(res.code === '6')) return [3 /*break*/, 7];
                console.log('黑号');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 6:
                _q.sent();
                return [3 /*break*/, 98];
            case 7: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 8:
                _q.sent();
                if (!res.todayGotWaterGoalTask.canPop) return [3 /*break*/, 10];
                return [4 /*yield*/, api('gotWaterGoalTaskForFarm', { "type": 3, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 9:
                data = _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(data);
                console.log("弹窗获得水滴", data.addEnergy);
                _q.label = 10;
            case 10:
                (0, TS_USER_AGENTS_1.o2s)(res, 'initForFarm');
                totalEnergy = res.farmUserPro.totalEnergy // 背包剩余水滴
                ;
                if (!(res.farmUserPro.treeState === 2)) return [3 /*break*/, 12];
                console.log("可以兑换奖品了");
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)("东东农场", "\u8D26\u53F7".concat(index + 1, "  ").concat(UserName, "\n\n\u5DF2\u6210\u719F"))];
            case 11:
                _q.sent();
                return [3 /*break*/, 13];
            case 12:
                if (res.farmUserPro.treeState === 0) {
                    console.log("自动种植");
                }
                _q.label = 13;
            case 13: return [4 /*yield*/, api('friendListInitForFarm', { "lastId": null, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 14:
                // 添加好友
                // 删除好友
                res = _q.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 15:
                _q.sent();
                if (!!res.newFriendMsg) return [3 /*break*/, 20];
                _c = 0, _d = res.friends;
                _q.label = 16;
            case 16:
                if (!(_c < _d.length)) return [3 /*break*/, 20];
                fr = _d[_c];
                return [4 /*yield*/, api('deleteFriendForFarm', { "shareCode": fr.shareCode, "version": 14, "channel": 1, "babelChannel": "121" })];
            case 17:
                res = _q.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 18:
                _q.sent();
                if (res.code === '0') {
                    console.log("\u5220\u9664\u597D\u53CB".concat(fr.nickName, "\u6210\u529F"));
                }
                else {
                    console.log("\u5220\u9664\u597D\u53CB".concat(fr.nickName, "\u5931\u8D25"));
                    return [3 /*break*/, 20];
                }
                _q.label = 19;
            case 19:
                _c++;
                return [3 /*break*/, 16];
            case 20: return [4 /*yield*/, api('friendListInitForFarm', { "lastId": null, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 21:
                // 背包
                // process.env.jdFruitBeanCard = 'True'
                // if (process.env.jdFruitBeanCard.toLowerCase() === 'true') {
                //   res = await api('myCardInfoForFarm', {"version": 14, "channel": 3, "babelChannel": "10"})
                //   o2s(res, 'myCardInfoForFarm')
                //   let beanCard: number = res.beanCard  // 换豆卡
                //   console.log('换豆卡数量', beanCard)
                //   for (let i = 0; i < 10; i++) {
                //     if (totalEnergy >= 100 && beanCard) {
                //       data = await api('userMyCardForFarm', {"cardType": "beanCard", "babelChannel": "10", "channel": 3, "version": 14})
                //       console.log('使用水滴换豆卡，获得京豆', data.beanCount)
                //       totalEnergy -= 100
                //       beanCard--
                //       await wait(1000)
                //     }
                //   }
                // } else {
                //   console.log('未设置水滴换豆卡环境变量')
                // }
                // 好友邀请奖励
                res = _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'friendListInitForFarm');
                friendList = res.friends;
                if (!(res.inviteFriendCount > res.inviteFriendGotAwardCount)) return [3 /*break*/, 24];
                return [4 /*yield*/, api('awardInviteFriendForFarm', {})];
            case 22:
                data = _q.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 23:
                _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, '好友邀请奖励');
                _q.label = 24;
            case 24: return [4 /*yield*/, api('taskInitForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 25:
                // 给好友浇水
                res = _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'taskInitForFarm');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 26:
                _q.sent();
                console.log("\u4ECA\u65E5\u5DF2\u7ED9".concat(res.waterFriendTaskInit.waterFriendCountKey, "\u4E2A\u597D\u53CB\u6D47\u6C34"));
                if (!(res.waterFriendTaskInit.waterFriendCountKey < res.waterFriendTaskInit.waterFriendMax)) return [3 /*break*/, 34];
                i = res.waterFriendTaskInit.waterFriendCountKey;
                _q.label = 27;
            case 27:
                if (!(i < res.waterFriendTaskInit.waterFriendMax)) return [3 /*break*/, 33];
                _e = 0, friendList_1 = friendList;
                _q.label = 28;
            case 28:
                if (!(_e < friendList_1.length)) return [3 /*break*/, 32];
                fr = friendList_1[_e];
                if (!(fr.friendState === 1)) return [3 /*break*/, 31];
                return [4 /*yield*/, api('waterFriendForFarm', { "shareCode": fr.shareCode, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 29:
                data = _q.sent();
                if (data.code === '0')
                    console.log("\u7ED9\u597D\u53CB".concat(fr.nickName, "\u6D47\u6C34\u6210\u529F"));
                if (data.cardInfo) {
                    console.log('获得卡片');
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 30:
                _q.sent();
                return [3 /*break*/, 32];
            case 31:
                _e++;
                return [3 /*break*/, 28];
            case 32:
                i++;
                return [3 /*break*/, 27];
            case 33: return [3 /*break*/, 37];
            case 34:
                if (!(res.waterFriendTaskInit.waterFriendCountKey === res.waterFriendTaskInit.waterFriendMax && !res.waterFriendTaskInit.waterFriendGotAward)) return [3 /*break*/, 37];
                return [4 /*yield*/, api('waterFriendGotAwardForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 35:
                data = _q.sent();
                console.log('给好友浇水奖励', data.addWater);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 36:
                _q.sent();
                _q.label = 37;
            case 37: return [4 /*yield*/, api('clockInInitForFarm', { "timestamp": Date.now(), "version": 14, "channel": 1, "babelChannel": "120" })];
            case 38:
                // 签到
                // res = await api('clockInInitForFarm', {"timestamp": Date.now(), "version": 14, "channel": 1, "babelChannel": "120"})
                // await wait(1000)
                // if (!res.todaySigned) {
                //   data = await api('clockInForFarm', {"type": 1, "version": 14, "channel": 1, "babelChannel": "120"})
                //   if (data.signDay === 7) {
                //     // data = await api('gotClockInGift', {"type": 2, "version": 14, "channel": 1, "babelChannel": "120"})
                //     // o2s(data, 'gotClockInGift')
                //     // await wait(1000)
                //   }
                //   await wait(1000)
                // }
                res = _q.sent();
                _f = 0, _g = res.themes || [];
                _q.label = 39;
            case 39:
                if (!(_f < _g.length)) return [3 /*break*/, 44];
                t = _g[_f];
                if (!!t.hadGot) return [3 /*break*/, 43];
                console.log('关注', t.name);
                return [4 /*yield*/, api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 40:
                res = _q.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 41:
                _q.sent();
                return [4 /*yield*/, api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 2, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 42:
                res = _q.sent();
                console.log('获得水滴', res.amount);
                _q.label = 43;
            case 43:
                _f++;
                return [3 /*break*/, 39];
            case 44: return [4 /*yield*/, api('taskInitForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 45:
                // 任务
                res = _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                if (!res.signInit.todaySigned) return [3 /*break*/, 46];
                console.log("\u4ECA\u5929\u5DF2\u7B7E\u5230,\u5DF2\u7ECF\u8FDE\u7EED\u7B7E\u5230".concat(res.signInit.totalSigned, "\u5929,\u4E0B\u6B21\u7B7E\u5230\u53EF\u5F97").concat(res.signInit.signEnergyEachAmount, "g"));
                return [3 /*break*/, 49];
            case 46: return [4 /*yield*/, api('signForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 47:
                data = _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'signForFarm');
                console.log('签到成功', data.amount);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 48:
                _q.sent();
                _q.label = 49;
            case 49:
                if (!!res.gotBrowseTaskAdInit.f) return [3 /*break*/, 57];
                _h = 0, _j = res.gotBrowseTaskAdInit.userBrowseTaskAds;
                _q.label = 50;
            case 50:
                if (!(_h < _j.length)) return [3 /*break*/, 57];
                t = _j[_h];
                if (!(t.hadFinishedTimes !== t.limit)) return [3 /*break*/, 54];
                return [4 /*yield*/, api('browseAdTaskForFarm', { "advertId": t.advertId, "type": 0, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 51:
                data = _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'browseAdTaskForFarm');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.time * 1000 || 1000)];
            case 52:
                _q.sent();
                return [4 /*yield*/, api('browseAdTaskForFarm', { "advertId": t.advertId, "type": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 53:
                data = _q.sent();
                console.log('任务完成，获得', data.amount);
                _q.label = 54;
            case 54: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 55:
                _q.sent();
                _q.label = 56;
            case 56:
                _h++;
                return [3 /*break*/, 50];
            case 57:
                if (!!res.gotThreeMealInit.f) return [3 /*break*/, 60];
                if (!![10, 15, 16, 22, 23].includes(new Date().getHours())) return [3 /*break*/, 60];
                return [4 /*yield*/, api('gotThreeMealForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 58:
                data = _q.sent();
                if (data.code === '0') {
                    console.log('定时奖励成功', data.amount);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 59:
                _q.sent();
                _q.label = 60;
            case 60:
                if (!!res.waterRainInit.f) return [3 /*break*/, 62];
                if (!(Date.now < res.waterRainInit.lastTime + 3 * 60 * 60 * 1000)) return [3 /*break*/, 62];
                return [4 /*yield*/, api('waterRainForFarm', { "type": 1, "hongBaoTimes": 100, "version": 3 })];
            case 61:
                data = _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'waterRainForFarm');
                if (data.code === '0') {
                    console.log('获得水滴', data.addEnergy);
                }
                _q.label = 62;
            case 62:
                if (!(!res.firstWaterInit.f && res.firstWaterInit.totalWaterTimes !== 0)) return [3 /*break*/, 64];
                return [4 /*yield*/, api('firstWaterTaskForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 63:
                data = _q.sent();
                console.log('firstWaterTaskForFarm', data.amount);
                _q.label = 64;
            case 64: return [4 /*yield*/, api('initForTurntableFarm', { "version": 4, "channel": 1 })];
            case 65:
                // 红包
                res = _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'initForTurntableFarm');
                _k = 0, _l = res.turntableBrowserAds;
                _q.label = 66;
            case 66:
                if (!(_k < _l.length)) return [3 /*break*/, 71];
                t = _l[_k];
                if (!!t.status) return [3 /*break*/, 70];
                console.log("browserForTurntableFarm", t.main);
                return [4 /*yield*/, api('browserForTurntableFarm', { "type": 1, "adId": t.adId, "version": 4, "channel": 1 })];
            case 67:
                data = _q.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.browserTimes * 1000 || 1000)];
            case 68:
                _q.sent();
                return [4 /*yield*/, api('browserForTurntableFarm', { "type": 2, "adId": t.adId, "version": 4, "channel": 1 })];
            case 69:
                data = _q.sent();
                _q.label = 70;
            case 70:
                _k++;
                return [3 /*break*/, 66];
            case 71:
                if (!(!res.timingGotStatus && res.remainLotteryTimes)) return [3 /*break*/, 75];
                if (!(Date.now() > (res.timingLastSysTime + 60 * 60 * res.timingIntervalHours * 1000))) return [3 /*break*/, 74];
                return [4 /*yield*/, api('timingAwardForTurntableFarm', { "version": 4, "channel": 1 })];
            case 72:
                data = _q.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 73:
                _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'timingAwardForTurntableFarm');
                return [3 /*break*/, 75];
            case 74:
                console.log("\u514D\u8D39\u8D60\u9001\u7684\u62BD\u5956\u673A\u4F1A\u672A\u5230\u65F6\u95F4");
                _q.label = 75;
            case 75: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('farm', 30)];
            case 76:
                // 天天红包助力
                shareCodePool = _q.sent();
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], shareCodeSelf, true), shareCodePool, true)));
                _m = 0, shareCodeSelf_1 = shareCodeSelf;
                _q.label = 77;
            case 77:
                if (!(_m < shareCodeSelf_1.length)) return [3 /*break*/, 81];
                code = shareCodeSelf_1[_m];
                console.log('去红包助力', code);
                return [4 /*yield*/, api('initForFarm', { "shareCode": "".concat(code, "-3"), "lng": "0.000000", "lat": "0.000000", "sid": "2871ac0252645ef0e2731aa7d03c1d3w", "un_area": "16_1341_1347_44750", "version": 14, "channel": 1, "babelChannel": 0 })];
            case 78:
                data = _q.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 79:
                _q.sent();
                if (data.code === '0') {
                    console.log('红包助力成功');
                }
                else if (data.code === '11') {
                    console.log('红包已助力过');
                }
                else if (data.code === '13') {
                    console.log('上限');
                    return [3 /*break*/, 81];
                }
                _q.label = 80;
            case 80:
                _m++;
                return [3 /*break*/, 77];
            case 81:
                i = 0;
                _q.label = 82;
            case 82:
                if (!(i < res.remainLotteryTimes)) return [3 /*break*/, 86];
                return [4 /*yield*/, api('lotteryForTurntableFarm', { "type": 1, "version": 4, "channel": 1 })];
            case 83:
                data = _q.sent();
                if (data.type === 'thanks') {
                    console.log('抽奖获得 空气');
                }
                else {
                    console.log('抽奖获得', data.type);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 84:
                _q.sent();
                _q.label = 85;
            case 85:
                i++;
                return [3 /*break*/, 82];
            case 86: return [4 /*yield*/, api('farmAssistInit', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 87:
                // 助力
                // shareCodePool = await getShareCodePool('farm', 30)
                // shareCode = Array.from(new Set([...shareCodeSelf, ...shareCodePool]))
                // for (let code of shareCodeSelf) {
                //   console.log('去助力', code)
                //   res = await api('initForFarm', {"mpin": "", "utm_campaign": "t_335139774", "utm_medium": "appshare", "shareCode": code, "utm_term": "Wxfriends", "utm_source": "iosapp", "imageUrl": "", "nickName": "", "version": 14, "channel": 2, "babelChannel": 0})
                //   await wait(6000)
                //   o2s(res, '助力')
                //   if (res.helpResult.code === '7') {
                //     console.log('不给自己助力')
                //   } else if (res.helpResult.code === '0') {
                //     console.log('助力成功,获得', res.helpResult.salveHelpAddWater)
                //   } else if (res.helpResult.code === '8') {
                //     console.log('上限')
                //     break
                //   } else if (res.helpResult.code === '9') {
                //     console.log('已助力')
                //   } else if (res.helpResult.code === '10') {
                //     console.log('已满')
                //   } else if (res.helpResult.remainTimes === 0) {
                //     console.log('次数用完')
                //     break
                //   }
                // }
                // 助力奖励
                res = _q.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 88:
                _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'farmAssistInit');
                farmAssistInit_waterEnergy = 0;
                _o = 0, _p = res.assistStageList;
                _q.label = 89;
            case 89:
                if (!(_o < _p.length)) return [3 /*break*/, 94];
                t = _p[_o];
                if (!(t.percentage === '100%' && t.stageStaus === 2)) return [3 /*break*/, 92];
                return [4 /*yield*/, api('receiveStageEnergy', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 90:
                data = _q.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 91:
                _q.sent();
                farmAssistInit_waterEnergy += t.waterEnergy;
                return [3 /*break*/, 93];
            case 92:
                if (t.stageStaus === 3) {
                    farmAssistInit_waterEnergy += t.waterEnergy;
                }
                _q.label = 93;
            case 93:
                _o++;
                return [3 /*break*/, 89];
            case 94:
                console.log('收到助力', res.assistFriendList.length);
                console.log('助力已领取', farmAssistInit_waterEnergy);
                message += "\u3010\u52A9\u529B\u5DF2\u9886\u53D6\u3011  ".concat(farmAssistInit_waterEnergy, "\n");
                message += '\n\n';
                return [3 /*break*/, 98];
            case 95:
                e_1 = _q.sent();
                console.log(e_1);
                return [3 /*break*/, 98];
            case 96: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 97:
                _q.sent();
                return [7 /*endfinally*/];
            case 98:
                _i++;
                return [3 /*break*/, 2];
            case 99:
                if (!message) return [3 /*break*/, 101];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)('东东农场', message)];
            case 100:
                _q.sent();
                _q.label = 101;
            case 101: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var h5st;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    h5st = h5stTool.__genH5st({
                        'appid': 'wh5',
                        'body': JSON.stringify(body),
                        'client': 'apple',
                        'clientVersion': '10.2.4',
                        'functionId': fn
                    });
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://api.m.jd.com/client.action?functionId=".concat(fn, "&body=").concat(JSON.stringify(body), "&appid=wh5&client=apple&clientVersion=10.2.4&h5st=").concat(h5st), {
                            "Host": "api.m.jd.com",
                            "Origin": "https://carry.m.jd.com",
                            "User-Agent": TS_USER_AGENTS_1["default"],
                            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                            "Referer": "https://carry.m.jd.com/",
                            "Cookie": cookie
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
