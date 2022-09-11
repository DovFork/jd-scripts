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
var sendNotify_1 = require("./sendNotify");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var h5st_1 = require("./utils/h5st");
var cookie = '', res = '', data, UserName;
var shareCodeSelf = [], shareCodePool = [], shareCode = [], shareCodeFile = require('./jdFruitShareCodes');
var message = '', h5stTool = new h5st_1.H5ST("0c010", TS_USER_AGENTS_1["default"], process.env.FP_0C010 || "");
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, totalEnergy, _c, _d, fr, friendList, i, _e, friendList_1, fr, _f, _g, t, _h, _j, t, _k, _l, t, farmAssistInit_waterEnergy, _m, _o, t, e_1;
    return __generator(this, function (_p) {
        switch (_p.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getCookie)()];
            case 1:
                cookiesArr = _p.sent();
                _i = 0, _a = cookiesArr.entries();
                _p.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 89];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                message += "\u3010\u8D26\u53F7".concat(index + 1, "\u3011  ").concat(UserName, "\n");
                return [4 /*yield*/, h5stTool.__genAlgo()];
            case 3:
                _p.sent();
                _p.label = 4;
            case 4:
                _p.trys.push([4, 85, 86, 88]);
                if (Object.keys(shareCodeFile)[index]) {
                    shareCodeSelf = shareCodeFile[Object.keys(shareCodeFile)[index]].split('@');
                }
                (0, TS_USER_AGENTS_1.o2s)(shareCodeSelf, "\u7B2C".concat(index + 1, "\u4E2A\u8D26\u53F7\u83B7\u53D6\u7684\u5185\u90E8\u4E92\u52A9"));
                return [4 /*yield*/, api('initForFarm', { "version": 11, "channel": 3 })];
            case 5:
                // 初始化
                res = _p.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'initForFarm');
                if (!(res.code === '6')) return [3 /*break*/, 7];
                console.log('黑号');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 6:
                _p.sent();
                return [3 /*break*/, 88];
            case 7: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 8:
                _p.sent();
                if (!res.todayGotWaterGoalTask.canPop) return [3 /*break*/, 10];
                return [4 /*yield*/, api('gotWaterGoalTaskForFarm', { "type": 3, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 9:
                data = _p.sent();
                (0, TS_USER_AGENTS_1.o2s)(data);
                console.log("弹窗获得水滴", data.addEnergy);
                _p.label = 10;
            case 10:
                (0, TS_USER_AGENTS_1.o2s)(res, 'initForFarm');
                totalEnergy = res.farmUserPro.totalEnergy // 背包剩余水滴
                ;
                console.log('背包剩余水滴', totalEnergy);
                if (!(res.farmUserPro.treeState === 2)) return [3 /*break*/, 12];
                console.log("可以兑换奖品了");
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)("东东农场", "\u8D26\u53F7".concat(index + 1, "  ").concat(UserName, "\n\n\u5DF2\u6210\u719F"))];
            case 11:
                _p.sent();
                _p.label = 12;
            case 12: return [4 /*yield*/, api('friendListInitForFarm', { "lastId": null, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 13:
                // for (let i = 0; i < 460; i++) {
                //   res = await api('waterGoodForFarm', {"version": 16, "channel": 1, "babelChannel": "121"})
                //   o2s(res, 'waterGoodForFarm')
                //   console.log(res.treeEnergy)
                //   await wait(2000)
                //   if (res.finished || res.code !== '0') {
                //     break
                //   }
                // }
                // 删除好友
                res = _p.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 14:
                _p.sent();
                if (!!res.newFriendMsg) return [3 /*break*/, 19];
                _c = 0, _d = res.friends;
                _p.label = 15;
            case 15:
                if (!(_c < _d.length)) return [3 /*break*/, 19];
                fr = _d[_c];
                return [4 /*yield*/, api('deleteFriendForFarm', { "shareCode": fr.shareCode, "version": 14, "channel": 1, "babelChannel": "121" })];
            case 16:
                res = _p.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 17:
                _p.sent();
                if (res.code === '0') {
                    console.log("\u5220\u9664\u597D\u53CB".concat(fr.nickName, "\u6210\u529F"));
                }
                else {
                    console.log("\u5220\u9664\u597D\u53CB".concat(fr.nickName, "\u5931\u8D25"));
                    return [3 /*break*/, 19];
                }
                _p.label = 18;
            case 18:
                _c++;
                return [3 /*break*/, 15];
            case 19: return [4 /*yield*/, api('friendListInitForFarm', { "lastId": null, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 20:
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
                res = _p.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'friendListInitForFarm');
                friendList = res.friends;
                if (!(res.inviteFriendCount > res.inviteFriendGotAwardCount)) return [3 /*break*/, 23];
                return [4 /*yield*/, api('awardInviteFriendForFarm', {})];
            case 21:
                data = _p.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 22:
                _p.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, '好友邀请奖励');
                _p.label = 23;
            case 23: return [4 /*yield*/, api('taskInitForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 24:
                // 给好友浇水
                res = _p.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'taskInitForFarm');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 25:
                _p.sent();
                console.log("\u4ECA\u65E5\u5DF2\u7ED9".concat(res.waterFriendTaskInit.waterFriendCountKey, "\u4E2A\u597D\u53CB\u6D47\u6C34"));
                if (!(res.waterFriendTaskInit.waterFriendCountKey < res.waterFriendTaskInit.waterFriendMax)) return [3 /*break*/, 33];
                i = res.waterFriendTaskInit.waterFriendCountKey;
                _p.label = 26;
            case 26:
                if (!(i < res.waterFriendTaskInit.waterFriendMax)) return [3 /*break*/, 32];
                _e = 0, friendList_1 = friendList;
                _p.label = 27;
            case 27:
                if (!(_e < friendList_1.length)) return [3 /*break*/, 31];
                fr = friendList_1[_e];
                if (!(fr.friendState === 1)) return [3 /*break*/, 30];
                return [4 /*yield*/, api('waterFriendForFarm', { "shareCode": fr.shareCode, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 28:
                data = _p.sent();
                if (data.code === '0')
                    console.log("\u7ED9\u597D\u53CB".concat(fr.nickName, "\u6D47\u6C34\u6210\u529F"));
                if (data.cardInfo) {
                    console.log('获得卡片');
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 29:
                _p.sent();
                return [3 /*break*/, 31];
            case 30:
                _e++;
                return [3 /*break*/, 27];
            case 31:
                i++;
                return [3 /*break*/, 26];
            case 32: return [3 /*break*/, 36];
            case 33:
                if (!(res.waterFriendTaskInit.waterFriendCountKey === res.waterFriendTaskInit.waterFriendMax && !res.waterFriendTaskInit.waterFriendGotAward)) return [3 /*break*/, 36];
                return [4 /*yield*/, api('waterFriendGotAwardForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 34:
                data = _p.sent();
                console.log('给好友浇水奖励', data.addWater);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 35:
                _p.sent();
                _p.label = 36;
            case 36: return [4 /*yield*/, api('clockInInitForFarm', { "timestamp": Date.now(), "version": 14, "channel": 1, "babelChannel": "120" })];
            case 37:
                // 签到
                res = _p.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 38:
                _p.sent();
                if (!!res.todaySigned) return [3 /*break*/, 41];
                return [4 /*yield*/, api('clockInForFarm', { "type": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 39:
                data = _p.sent();
                if (data.signDay === 7) {
                    // data = await api('gotClockInGift', {"type": 2, "version": 14, "channel": 1, "babelChannel": "120"})
                    // o2s(data, 'gotClockInGift')
                    // await wait(1000)
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 40:
                _p.sent();
                _p.label = 41;
            case 41: return [4 /*yield*/, api('clockInInitForFarm', { "timestamp": Date.now(), "version": 14, "channel": 1, "babelChannel": "120" })];
            case 42:
                res = _p.sent();
                _f = 0, _g = res.themes || [];
                _p.label = 43;
            case 43:
                if (!(_f < _g.length)) return [3 /*break*/, 48];
                t = _g[_f];
                if (!!t.hadGot) return [3 /*break*/, 47];
                console.log('关注', t.name);
                return [4 /*yield*/, api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 44:
                res = _p.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 45:
                _p.sent();
                return [4 /*yield*/, api('clockInFollowForFarm', { "id": t.id, "type": "theme", "step": 2, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 46:
                res = _p.sent();
                console.log('获得水滴', res.amount);
                _p.label = 47;
            case 47:
                _f++;
                return [3 /*break*/, 43];
            case 48: return [4 /*yield*/, api('taskInitForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 49:
                // 任务
                res = _p.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                if (!!res.gotBrowseTaskAdInit.f) return [3 /*break*/, 57];
                _h = 0, _j = res.gotBrowseTaskAdInit.userBrowseTaskAds;
                _p.label = 50;
            case 50:
                if (!(_h < _j.length)) return [3 /*break*/, 57];
                t = _j[_h];
                if (!(t.hadFinishedTimes !== t.limit)) return [3 /*break*/, 54];
                return [4 /*yield*/, api('browseAdTaskForFarm', { "advertId": t.advertId, "type": 0, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 51:
                data = _p.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'browseAdTaskForFarm');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.time * 1000 || 1000)];
            case 52:
                _p.sent();
                return [4 /*yield*/, api('browseAdTaskForFarm', { "advertId": t.advertId, "type": 1, "version": 14, "channel": 1, "babelChannel": "120" })];
            case 53:
                data = _p.sent();
                console.log('任务完成，获得', data.amount);
                _p.label = 54;
            case 54: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 55:
                _p.sent();
                _p.label = 56;
            case 56:
                _h++;
                return [3 /*break*/, 50];
            case 57:
                if (!!res.gotThreeMealInit.f) return [3 /*break*/, 60];
                if (!![10, 15, 16, 22, 23].includes(new Date().getHours())) return [3 /*break*/, 60];
                return [4 /*yield*/, api('gotThreeMealForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 58:
                data = _p.sent();
                if (data.code === '0') {
                    console.log('定时奖励成功', data.amount);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 59:
                _p.sent();
                _p.label = 60;
            case 60:
                if (!!res.waterRainInit.f) return [3 /*break*/, 62];
                if (!(Date.now < res.waterRainInit.lastTime + 3 * 60 * 60 * 1000)) return [3 /*break*/, 62];
                return [4 /*yield*/, api('waterRainForFarm', { "type": 1, "hongBaoTimes": 100, "version": 3 })];
            case 61:
                data = _p.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'waterRainForFarm');
                if (data.code === '0') {
                    console.log('获得水滴', data.addEnergy);
                }
                _p.label = 62;
            case 62:
                if (!(!res.firstWaterInit.f && res.firstWaterInit.totalWaterTimes !== 0)) return [3 /*break*/, 64];
                return [4 /*yield*/, api('firstWaterTaskForFarm', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 63:
                data = _p.sent();
                console.log('firstWaterTaskForFarm', data.amount);
                _p.label = 64;
            case 64: return [4 /*yield*/, api('initForTurntableFarm', { "version": 4, "channel": 1 })];
            case 65:
                // 红包
                res = _p.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'initForTurntableFarm');
                _k = 0, _l = res.turntableBrowserAds;
                _p.label = 66;
            case 66:
                if (!(_k < _l.length)) return [3 /*break*/, 71];
                t = _l[_k];
                if (!!t.status) return [3 /*break*/, 70];
                console.log("browserForTurntableFarm", t.main);
                return [4 /*yield*/, api('browserForTurntableFarm', { "type": 1, "adId": t.adId, "version": 4, "channel": 1 })];
            case 67:
                data = _p.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.browserTimes * 1000 || 1000)];
            case 68:
                _p.sent();
                return [4 /*yield*/, api('browserForTurntableFarm', { "type": 2, "adId": t.adId, "version": 4, "channel": 1 })];
            case 69:
                data = _p.sent();
                _p.label = 70;
            case 70:
                _k++;
                return [3 /*break*/, 66];
            case 71:
                if (!(!res.timingGotStatus && res.remainLotteryTimes)) return [3 /*break*/, 75];
                if (!(Date.now() > (res.timingLastSysTime + 60 * 60 * res.timingIntervalHours * 1000))) return [3 /*break*/, 74];
                return [4 /*yield*/, api('timingAwardForTurntableFarm', { "version": 4, "channel": 1 })];
            case 72:
                data = _p.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 73:
                _p.sent();
                (0, TS_USER_AGENTS_1.o2s)(data, 'timingAwardForTurntableFarm');
                return [3 /*break*/, 75];
            case 74:
                console.log("\u514D\u8D39\u8D60\u9001\u7684\u62BD\u5956\u673A\u4F1A\u672A\u5230\u65F6\u95F4");
                _p.label = 75;
            case 75: 
            // 天天红包助力
            // shareCodePool = await getShareCodePool('farm', 30)
            // shareCode = Array.from(new Set([...shareCodeSelf, ...shareCodePool]))
            // for (let code of shareCodeSelf) {
            //   console.log('去红包助力', code)
            //   data = await api('initForFarm', {"shareCode": `${code}-3`, "lng": "0.000000", "lat": "0.000000", "sid": "2871ac0252645ef0e2731aa7d03c1d3w", "un_area": "16_1341_1347_44750", "version": 14, "channel": 1, "babelChannel": 0})
            //   await wait(3000)
            //   if (data.code === '0') {
            //     console.log('红包助力成功')
            //   } else if (data.code === '11') {
            //     console.log('红包已助力过')
            //   } else if (data.code === '13') {
            //     console.log('上限')
            //     break
            //   }
            // }
            // 抽奖
            // for (let i = 0; i < res.remainLotteryTimes; i++) {
            //   data = await api('lotteryForTurntableFarm', {"type": 1, "version": 4, "channel": 1})
            //   if (data.type === 'thanks') {
            //     console.log('抽奖获得 空气')
            //   } else {
            //     console.log('抽奖获得', data.type)
            //   }
            //   await wait(6000)
            // }
            return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)
                // 助力奖励
            ];
            case 76:
                // 天天红包助力
                // shareCodePool = await getShareCodePool('farm', 30)
                // shareCode = Array.from(new Set([...shareCodeSelf, ...shareCodePool]))
                // for (let code of shareCodeSelf) {
                //   console.log('去红包助力', code)
                //   data = await api('initForFarm', {"shareCode": `${code}-3`, "lng": "0.000000", "lat": "0.000000", "sid": "2871ac0252645ef0e2731aa7d03c1d3w", "un_area": "16_1341_1347_44750", "version": 14, "channel": 1, "babelChannel": 0})
                //   await wait(3000)
                //   if (data.code === '0') {
                //     console.log('红包助力成功')
                //   } else if (data.code === '11') {
                //     console.log('红包已助力过')
                //   } else if (data.code === '13') {
                //     console.log('上限')
                //     break
                //   }
                // }
                // 抽奖
                // for (let i = 0; i < res.remainLotteryTimes; i++) {
                //   data = await api('lotteryForTurntableFarm', {"type": 1, "version": 4, "channel": 1})
                //   if (data.type === 'thanks') {
                //     console.log('抽奖获得 空气')
                //   } else {
                //     console.log('抽奖获得', data.type)
                //   }
                //   await wait(6000)
                // }
                _p.sent();
                return [4 /*yield*/, api('farmAssistInit', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 77:
                // 助力奖励
                res = _p.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 78:
                _p.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'farmAssistInit');
                farmAssistInit_waterEnergy = 0;
                _m = 0, _o = res.assistStageList;
                _p.label = 79;
            case 79:
                if (!(_m < _o.length)) return [3 /*break*/, 84];
                t = _o[_m];
                if (!(t.percentage === '100%' && t.stageStaus === 2)) return [3 /*break*/, 82];
                return [4 /*yield*/, api('receiveStageEnergy', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 80:
                data = _p.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 81:
                _p.sent();
                farmAssistInit_waterEnergy += t.waterEnergy;
                return [3 /*break*/, 83];
            case 82:
                if (t.stageStaus === 3) {
                    farmAssistInit_waterEnergy += t.waterEnergy;
                }
                _p.label = 83;
            case 83:
                _m++;
                return [3 /*break*/, 79];
            case 84:
                console.log('收到助力', res.assistFriendList.length);
                console.log('助力已领取', farmAssistInit_waterEnergy);
                message += "\u3010\u52A9\u529B\u5DF2\u9886\u53D6\u3011  ".concat(farmAssistInit_waterEnergy, "\n");
                message += '\n\n';
                return [3 /*break*/, 88];
            case 85:
                e_1 = _p.sent();
                console.log(e_1);
                return [3 /*break*/, 88];
            case 86: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 87:
                _p.sent();
                return [7 /*endfinally*/];
            case 88:
                _i++;
                return [3 /*break*/, 2];
            case 89:
                if (!message) return [3 /*break*/, 91];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)('东东农场', message)];
            case 90:
                _p.sent();
                _p.label = 91;
            case 91: return [2 /*return*/];
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
