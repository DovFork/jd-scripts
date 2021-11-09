"use strict";
/**
 * 京喜牧场
 * cron: 10 0,12,18 * * *
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
var ts_md5_1 = require("ts-md5");
var path = require("path");
var sendNotify_1 = require("./sendNotify");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var token = require('./utils/jd_jxmc.js').token;
var cookie = '', res = '', shareCodes = [], homePageInfo, jxToken, UserName, index;
var shareCodesHbSelf = [], shareCodesHbHw = [], shareCodesSelf = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, except, i, j, lastgettime, food, petid, coins, e_1, tasks, _i, _a, t, j, drawTimes, j, _b, _c, card, e_2, e_3, _d, _e, day, _f, _g, t, e_4, e_5, i, data, e_6, j, i, data, e_7, j;
    var _h, _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _k.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _k.sent();
                if (process.argv[2]) {
                    console.log('收到命令行cookie');
                    cookiesArr = [unescape(process.argv[2])];
                }
                except = (0, TS_USER_AGENTS_1.exceptCookie)(path.basename(__filename));
                i = 0;
                _k.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 99];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                if (except.includes(encodeURIComponent(UserName))) {
                    console.log('已设置跳过');
                    return [3 /*break*/, 98];
                }
                return [4 /*yield*/, token(cookie)];
            case 4:
                jxToken = _k.sent();
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', { isgift: 1, isquerypicksite: 1, isqueryinviteicon: 1 })];
            case 5:
                homePageInfo = _k.sent();
                if (!(homePageInfo.data.maintaskId !== 'pause')) return [3 /*break*/, 10];
                console.log('init...');
                j = 0;
                _k.label = 6;
            case 6:
                if (!(j < 20)) return [3 /*break*/, 10];
                return [4 /*yield*/, api('operservice/DoMainTask', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,step,timestamp', { step: homePageInfo.data.maintaskId })];
            case 7:
                res = _k.sent();
                if (res.data.maintaskId === 'pause')
                    return [3 /*break*/, 10];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 8:
                _k.sent();
                _k.label = 9;
            case 9:
                j++;
                return [3 /*break*/, 6];
            case 10: return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', { isgift: 1, isquerypicksite: 1, isqueryinviteicon: 1 })];
            case 11:
                homePageInfo = _k.sent();
                lastgettime = void 0;
                if ((_j = (_h = homePageInfo.data) === null || _h === void 0 ? void 0 : _h.cow) === null || _j === void 0 ? void 0 : _j.lastgettime) {
                    lastgettime = homePageInfo.data.cow.lastgettime;
                }
                else {
                    return [3 /*break*/, 98];
                }
                food = void 0, petid = void 0, coins = void 0;
                try {
                    food = homePageInfo.data.materialinfo[0].value;
                    petid = homePageInfo.data.petinfo[0].petid;
                    coins = homePageInfo.data.coins;
                }
                catch (e) {
                    console.log('初始化出错，手动去app');
                    return [3 /*break*/, 98];
                }
                console.log('助力码:', homePageInfo.data.sharekey);
                shareCodesSelf.push(homePageInfo.data.sharekey);
                _k.label = 12;
            case 12:
                _k.trys.push([12, 14, , 15]);
                return [4 /*yield*/, makeShareCodes(homePageInfo.data.sharekey)];
            case 13:
                _k.sent();
                return [3 /*break*/, 15];
            case 14:
                e_1 = _k.sent();
                console.log(e_1);
                return [3 /*break*/, 15];
            case 15:
                console.log('草草🌿', food);
                console.log('蛋蛋🥚', homePageInfo.data.eggcnt);
                console.log('钱钱💰', coins);
                return [4 /*yield*/, api('GetUserTaskStatusList', 'bizCode,dateType,jxpp_wxapp_type,showAreaTaskFlag,source', { dateType: '2', showAreaTaskFlag: 0, jxpp_wxapp_type: 7 }, true)];
            case 16:
                tasks = _k.sent();
                _i = 0, _a = tasks.data.userTaskStatusList;
                _k.label = 17;
            case 17:
                if (!(_i < _a.length)) return [3 /*break*/, 27];
                t = _a[_i];
                if (!(t.awardStatus === 2 && t.taskName !== '邀请牧场新用户助力' && t.taskName !== '拆开邀人红包')) return [3 /*break*/, 26];
                console.log(t.taskName);
                if (!(t.completedTimes < t.targetTimes)) return [3 /*break*/, 23];
                j = t.completedTimes;
                _k.label = 18;
            case 18:
                if (!(j < t.targetTimes)) return [3 /*break*/, 22];
                return [4 /*yield*/, api('DoTask', 'bizCode,configExtra,source,taskId', { taskId: t.taskId }, true)];
            case 19:
                res = _k.sent();
                if (res.ret === 0) {
                    console.log('任务完成');
                }
                else {
                    console.log('任务失败');
                    return [3 /*break*/, 22];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 20:
                _k.sent();
                _k.label = 21;
            case 21:
                j++;
                return [3 /*break*/, 18];
            case 22: return [3 /*break*/, 26];
            case 23: return [4 /*yield*/, api('Award', 'bizCode,source,taskId', { taskId: t.taskId }, true)];
            case 24:
                res = _k.sent();
                if (res.ret === 0) {
                    console.log('领奖成功', res.data.prizeInfo.match(/:(.*)}/)[1]);
                }
                else {
                    console.log('领奖失败');
                    return [3 /*break*/, 27];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 25:
                _k.sent();
                _k.label = 26;
            case 26:
                _i++;
                return [3 /*break*/, 17];
            case 27: return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 28:
                // 扭蛋机
                res = _k.sent();
                drawTimes = res.data.times;
                if (!(typeof drawTimes === "undefined")) return [3 /*break*/, 30];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)("牧场扭蛋机错误", "\u8D26\u53F7" + (i + 1) + " " + UserName + "\n\u624B\u52A8\u5EFA\u9020\u626D\u86CB\u673A")];
            case 29:
                _k.sent();
                return [3 /*break*/, 37];
            case 30:
                console.log('扭蛋机剩余次数:', drawTimes);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 31:
                _k.sent();
                j = 0;
                _k.label = 32;
            case 32:
                if (!(j < drawTimes)) return [3 /*break*/, 37];
                return [4 /*yield*/, api('operservice/DrawCard', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 33:
                res = _k.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 35];
                if (res.data.prizetype === 3) {
                    console.log('抽奖成功，金币：', res.data.addcoins);
                }
                else if (res.data.prizetype === 1) {
                    console.log('抽奖成功，卡片：', res.data.cardtype);
                }
                else {
                    console.log('抽奖成功，其他：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 34:
                _k.sent();
                return [3 /*break*/, 36];
            case 35:
                console.log('抽奖失败:', res);
                return [3 /*break*/, 37];
            case 36:
                j++;
                return [3 /*break*/, 32];
            case 37: return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 38:
                res = _k.sent();
                _k.label = 39;
            case 39:
                _k.trys.push([39, 45, , 46]);
                _b = 0, _c = res.data.cardinfo;
                _k.label = 40;
            case 40:
                if (!(_b < _c.length)) return [3 /*break*/, 44];
                card = _c[_b];
                console.log("card " + card.cardtype, card.currnum, '/', card.neednum);
                if (!(card.currnum >= card.neednum)) return [3 /*break*/, 43];
                console.log('可以兑换');
                return [4 /*yield*/, api('operservice/Combine', 'activeid,activekey,cardtype,channel,jxmc_jstoken,phoneid,sceneid,timestamp', { cardtype: card.cardtype })];
            case 41:
                res = _k.sent();
                res.ret === 0 ? console.log('兑换成功') : '';
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 42:
                _k.sent();
                _k.label = 43;
            case 43:
                _b++;
                return [3 /*break*/, 40];
            case 44: return [3 /*break*/, 46];
            case 45:
                e_2 = _k.sent();
                return [3 /*break*/, 46];
            case 46: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)
                // 红包
            ];
            case 47:
                _k.sent();
                return [4 /*yield*/, api('operservice/GetInviteStatus', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 48:
                // 红包
                res = _k.sent();
                console.log('红包助力:', res.data.sharekey);
                shareCodesHbSelf.push(res.data.sharekey);
                _k.label = 49;
            case 49:
                _k.trys.push([49, 51, , 52]);
                return [4 /*yield*/, makeShareCodesHb(res.data.sharekey)];
            case 50:
                _k.sent();
                return [3 /*break*/, 52];
            case 51:
                e_3 = _k.sent();
                return [3 /*break*/, 52];
            case 52: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)
                // 签到
            ];
            case 53:
                _k.sent();
                return [4 /*yield*/, api('queryservice/GetSignInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 54:
                // 签到
                res = _k.sent();
                if (!res.data.signlist) return [3 /*break*/, 59];
                _d = 0, _e = res.data.signlist;
                _k.label = 55;
            case 55:
                if (!(_d < _e.length)) return [3 /*break*/, 58];
                day = _e[_d];
                if (!(day.fortoday && !day.hasdone)) return [3 /*break*/, 57];
                return [4 /*yield*/, api('operservice/GetSignReward', 'channel,currdate,sceneid', { currdate: res.data.currdate })];
            case 56:
                res = _k.sent();
                if (res.ret === 0) {
                    console.log('签到成功!');
                }
                else {
                    console.log(res);
                }
                return [3 /*break*/, 58];
            case 57:
                _d++;
                return [3 /*break*/, 55];
            case 58: return [3 /*break*/, 60];
            case 59:
                console.log('没有获取到签到信息！');
                _k.label = 60;
            case 60: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)
                // 登录领白菜
            ];
            case 61:
                _k.sent();
                return [4 /*yield*/, api('queryservice/GetVisitBackInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 62:
                // 登录领白菜
                res = _k.sent();
                if (!(res.iscandraw === 1)) return [3 /*break*/, 64];
                return [4 /*yield*/, api('operservice/GetVisitBackCabbage', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 63:
                res = _k.sent();
                if (res.ret === 0) {
                    console.log('登录领白菜：', res.data.drawnum);
                }
                _k.label = 64;
            case 64: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)
                /*
                    console.log('任务列表开始')
                    for (let j = 0; j < 30; j++) {
                      if (await getTask() === 0) {
                        break
                      }
                      await wait(3000)
                    }
                    console.log('任务列表结束')
                    await wait(3000)
                */
            ];
            case 65:
                _k.sent();
                _k.label = 66;
            case 66:
                if (!(coins >= 5000 && food <= 500)) return [3 /*break*/, 69];
                return [4 /*yield*/, api('operservice/Buy', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '1' })];
            case 67:
                res = _k.sent();
                if (res.ret === 0) {
                    console.log('买草成功:', res.data.newnum);
                    coins -= 5000;
                    food += 100;
                }
                else {
                    console.log(res);
                    return [3 /*break*/, 69];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 68:
                _k.sent();
                return [3 /*break*/, 66];
            case 69: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 70:
                _k.sent();
                _k.label = 71;
            case 71:
                if (!(food >= 10)) return [3 /*break*/, 79];
                return [4 /*yield*/, api('operservice/Feed', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 72:
                res = _k.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 73];
                food -= 10;
                console.log('剩余草:', res.data.newnum);
                return [3 /*break*/, 77];
            case 73:
                if (!(res.ret === 2020)) return [3 /*break*/, 76];
                console.log('收🥚');
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', {
                        isgift: 1,
                        isquerypicksite: 1,
                        isqueryinviteicon: 1
                    })];
            case 74:
                homePageInfo = _k.sent();
                for (_f = 0, _g = homePageInfo.data.petinfo; _f < _g.length; _f++) {
                    t = _g[_f];
                    if (t.cangetborn === 1) {
                        petid = t.petid;
                        break;
                    }
                }
                return [4 /*yield*/, api('operservice/GetSelfResult', 'activeid,activekey,channel,itemid,jxmc_jstoken,phoneid,sceneid,timestamp,type', { itemid: petid, type: '11' })];
            case 75:
                res = _k.sent();
                if (res.ret === 0) {
                    console.log('收🥚成功:', res.data.newnum);
                }
                else {
                    console.log('收🥚失败:', res);
                    return [3 /*break*/, 79];
                }
                return [3 /*break*/, 77];
            case 76:
                if (res.ret === 2005) {
                    console.log('今天吃撑了');
                    return [3 /*break*/, 79];
                }
                else {
                    console.log('Feed未知错误:', res);
                    return [3 /*break*/, 79];
                }
                _k.label = 77;
            case 77: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 78:
                _k.sent();
                return [3 /*break*/, 71];
            case 79: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 80:
                _k.sent();
                _k.label = 81;
            case 81:
                if (!1) return [3 /*break*/, 90];
                _k.label = 82;
            case 82:
                _k.trys.push([82, 88, , 89]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '2' })];
            case 83:
                res = _k.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 90];
                console.log('锄草:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 84:
                _k.sent();
                if (!res.data.surprise) return [3 /*break*/, 87];
                return [4 /*yield*/, api("operservice/GetSelfResult", "activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type", { type: '14', itemid: 'undefined' })];
            case 85:
                res = _k.sent();
                console.log('锄草奖励:', res.data.prizepool);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 86:
                _k.sent();
                _k.label = 87;
            case 87: return [3 /*break*/, 89];
            case 88:
                e_4 = _k.sent();
                console.log('Error:', e_4);
                return [3 /*break*/, 90];
            case 89: return [3 /*break*/, 81];
            case 90: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 91:
                _k.sent();
                _k.label = 92;
            case 92:
                if (!1) return [3 /*break*/, 98];
                _k.label = 93;
            case 93:
                _k.trys.push([93, 96, , 97]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,petid,phoneid,sceneid,timestamp,type', {
                        type: '1',
                        petid: petid
                    })];
            case 94:
                res = _k.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 98];
                console.log('挑逗:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 95:
                _k.sent();
                return [3 /*break*/, 97];
            case 96:
                e_5 = _k.sent();
                console.log('Error:', e_5);
                return [3 /*break*/, 98];
            case 97: return [3 /*break*/, 92];
            case 98:
                i++;
                return [3 /*break*/, 3];
            case 99: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 100:
                _k.sent();
                i = 0;
                _k.label = 101;
            case 101:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 113];
                return [4 /*yield*/, getCodes()
                    // 获取随机红包码
                ];
            case 102:
                _k.sent();
                _k.label = 103;
            case 103:
                _k.trys.push([103, 105, , 106]);
                (0, TS_USER_AGENTS_1.resetHosts)();
                return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/jxmchb/30", { timeout: 10000 })];
            case 104:
                data = (_k.sent()).data;
                console.log('获取到30个随机红包码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodesHbSelf, true), shareCodesHbHw, true), data.data, true)));
                return [3 /*break*/, 106];
            case 105:
                e_6 = _k.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesHbSelf, true), shareCodesHbHw, true)));
                return [3 /*break*/, 106];
            case 106:
                cookie = cookiesArr[i];
                return [4 /*yield*/, token(cookie)];
            case 107:
                jxToken = _k.sent();
                j = 0;
                _k.label = 108;
            case 108:
                if (!(j < shareCodes.length)) return [3 /*break*/, 112];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B" + shareCodes[j]);
                return [4 /*yield*/, api('operservice/InviteEnroll', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: shareCodes[j] })];
            case 109:
                res = _k.sent();
                if (res.ret === 0) {
                    console.log('成功');
                }
                else if (res.ret === 2711) {
                    console.log('上限');
                    return [3 /*break*/, 112];
                }
                else {
                    console.log('失败：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 110:
                _k.sent();
                _k.label = 111;
            case 111:
                j++;
                return [3 /*break*/, 108];
            case 112:
                i++;
                return [3 /*break*/, 101];
            case 113:
                i = 0;
                _k.label = 114;
            case 114:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 126];
                return [4 /*yield*/, getCodes()
                    // 获取随机助力码
                ];
            case 115:
                _k.sent();
                _k.label = 116;
            case 116:
                _k.trys.push([116, 118, , 119]);
                return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/jxmc/30", { timeout: 10000 })];
            case 117:
                data = (_k.sent()).data;
                console.log('获取到30个随机助力码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true), data.data, true)));
                return [3 /*break*/, 119];
            case 118:
                e_7 = _k.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true)));
                return [3 /*break*/, 119];
            case 119:
                cookie = cookiesArr[i];
                return [4 /*yield*/, token(cookie)];
            case 120:
                jxToken = _k.sent();
                j = 0;
                _k.label = 121;
            case 121:
                if (!(j < shareCodes.length)) return [3 /*break*/, 125];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B" + shareCodes[j]);
                return [4 /*yield*/, api('operservice/EnrollFriend', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: shareCodes[j] })];
            case 122:
                res = _k.sent();
                if (res.ret === 0) {
                    console.log('成功，获得:', res.data.addcoins);
                }
                else {
                    console.log('失败：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 123:
                _k.sent();
                _k.label = 124;
            case 124:
                j++;
                return [3 /*break*/, 121];
            case 125:
                i++;
                return [3 /*break*/, 114];
            case 126: return [2 /*return*/];
        }
    });
}); })();
function getTask() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, _a, t, awardCoin;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('刷新任务列表');
                    return [4 /*yield*/, api('GetUserTaskStatusList', 'bizCode,dateType,jxpp_wxapp_type,showAreaTaskFlag,source', { dateType: '', showAreaTaskFlag: 0, jxpp_wxapp_type: 7 })];
                case 1:
                    res = _b.sent();
                    _i = 0, _a = res.data.userTaskStatusList;
                    _b.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 11];
                    t = _a[_i];
                    if (!(t.completedTimes == t.targetTimes && t.awardStatus === 2)) return [3 /*break*/, 6];
                    return [4 /*yield*/, api('Award', 'bizCode,source,taskId', { taskId: t.taskId })];
                case 3:
                    res = _b.sent();
                    if (!(res.ret === 0)) return [3 /*break*/, 5];
                    awardCoin = res.data.prizeInfo.match(/:(.*)}/)[1] * 1;
                    console.log('领奖成功:', awardCoin);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
                case 4:
                    _b.sent();
                    return [2 /*return*/, 1];
                case 5:
                    console.log('领奖失败:', res);
                    return [2 /*return*/, 0];
                case 6:
                    if (!(t.dateType === 2 && t.completedTimes < t.targetTimes && t.awardStatus === 2 && t.taskType === 2)) return [3 /*break*/, 10];
                    return [4 /*yield*/, api('DoTask', 'bizCode,configExtra,source,taskId', { taskId: t.taskId, configExtra: '' })];
                case 7:
                    res = _b.sent();
                    if (!(res.ret === 0)) return [3 /*break*/, 9];
                    console.log('任务完成');
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
                case 8:
                    _b.sent();
                    return [2 /*return*/, 1];
                case 9:
                    console.log('任务失败:', res);
                    return [2 /*return*/, 0];
                case 10:
                    _i++;
                    return [3 /*break*/, 2];
                case 11: return [2 /*return*/, 0];
            }
        });
    });
}
function api(fn, stk, params, temporary) {
    if (params === void 0) { params = {}; }
    if (temporary === void 0) { temporary = false; }
    return __awaiter(this, void 0, void 0, function () {
        var url, data, e_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (['GetUserTaskStatusList', 'DoTask', 'Award'].indexOf(fn) > -1) {
                        if (temporary)
                            url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?_=" + Date.now() + "&source=jxmc_zanaixin&bizCode=jxmc_zanaixin&_stk=" + encodeURIComponent(stk) + "&_ste=1&sceneval=2&g_login_type=1&callback=jsonpCBK" + String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0)) + "&g_ty=ls", stk, params, 10028);
                        else
                            url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?_=" + Date.now() + "&source=jxmc&bizCode=jxmc&_stk=" + encodeURIComponent(stk) + "&_ste=1&sceneval=2&g_login_type=1&callback=jsonpCBK" + String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0)) + "&g_ty=ls", stk, params, 10028);
                    }
                    else {
                        url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/jxmc/" + fn + "?channel=7&sceneid=1001&activeid=jxmc_active_0001&activekey=null&jxmc_jstoken=" + jxToken['farm_jstoken'] + "&timestamp=" + jxToken['timestamp'] + "&phoneid=" + jxToken['phoneid'] + "&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + (Date.now() + 2) + "&sceneval=2&g_login_type=1&callback=jsonpCBK" + String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0)) + "&g_ty=ls", stk, params, 10028);
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'User-Agent': "jdpingou;iPhone;5.9.0;12.4.1;" + (0, TS_USER_AGENTS_1.randomString)(40) + ";network/wifi;",
                                'Referer': 'https://st.jingxi.com/pingou/jxmc/index.html',
                                'Cookie': cookie
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    if (typeof data === 'string')
                        return [2 /*return*/, JSON.parse(data.replace(/\n/g, '').match(/jsonpCBK.?\(([^)]*)/)[1])];
                    return [2 /*return*/, data];
                case 3:
                    e_8 = _a.sent();
                    console.log('api Error:', e_8);
                    return [2 /*return*/, {}];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function makeShareCodes(code) {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 1:
                    bean = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 2:
                    farm = _a.sent();
                    pin = ts_md5_1.Md5.hashStr(cookie.match(/pt_pin=([^;]*)/)[1]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/jxmc?sharecode=" + code + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin)];
                case 3:
                    data = (_a.sent()).data;
                    console.log(data.message);
                    return [3 /*break*/, 5];
                case 4:
                    e_9 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_9);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function makeShareCodesHb(code) {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 1:
                    bean = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 2:
                    farm = _a.sent();
                    pin = ts_md5_1.Md5.hashStr(cookie.match(/pt_pin=([^;]*)/)[1]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/jxmchb?sharecode=" + code + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin, { timeout: 10000 })];
                case 3:
                    data = (_a.sent()).data;
                    console.log(data.message);
                    return [3 /*break*/, 5];
                case 4:
                    e_10 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_10);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function getCodes() {
    return __awaiter(this, void 0, void 0, function () {
        var data, e_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get('https://api.jdsharecode.xyz/api/HW_CODES')];
                case 1:
                    data = (_a.sent()).data;
                    shareCodesHW = data.jxmc || [];
                    shareCodesHbHw = data.jxmchb || [];
                    return [3 /*break*/, 3];
                case 2:
                    e_11 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
