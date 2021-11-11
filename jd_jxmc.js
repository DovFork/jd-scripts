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
    var cookiesArr, except, i, j, lastgettime, food, petid, coins, petNum, petids, e_1, e_2, tasks, _i, _a, t, j, drawTimes, j, _b, _c, card, e_3, e_4, _d, _e, day, _f, _g, t, e_5, e_6, i, data, e_7, j, i, data, e_8, j;
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
                if (!(i < cookiesArr.length)) return [3 /*break*/, 109];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                if (except.includes(encodeURIComponent(UserName))) {
                    console.log('已设置跳过');
                    return [3 /*break*/, 108];
                }
                return [4 /*yield*/, token(cookie)];
            case 4:
                jxToken = _k.sent();
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', { isgift: 1, isquerypicksite: 1, isqueryinviteicon: 1 })];
            case 5:
                homePageInfo = _k.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 6:
                _k.sent();
                if (!(homePageInfo.data.maintaskId !== 'pause')) return [3 /*break*/, 11];
                console.log('init...');
                j = 0;
                _k.label = 7;
            case 7:
                if (!(j < 20)) return [3 /*break*/, 11];
                return [4 /*yield*/, api('operservice/DoMainTask', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,step,timestamp', { step: homePageInfo.data.maintaskId })];
            case 8:
                res = _k.sent();
                if (res.data.maintaskId === 'pause')
                    return [3 /*break*/, 11];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 9:
                _k.sent();
                _k.label = 10;
            case 10:
                j++;
                return [3 /*break*/, 7];
            case 11: return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', { isgift: 1, isquerypicksite: 1, isqueryinviteicon: 1 })];
            case 12:
                homePageInfo = _k.sent();
                lastgettime = void 0;
                if ((_j = (_h = homePageInfo.data) === null || _h === void 0 ? void 0 : _h.cow) === null || _j === void 0 ? void 0 : _j.lastgettime) {
                    lastgettime = homePageInfo.data.cow.lastgettime;
                }
                else {
                    return [3 /*break*/, 108];
                }
                food = 0, petid = '', coins = 0, petNum = 0, petids = [];
                _k.label = 13;
            case 13:
                _k.trys.push([13, 15, , 16]);
                food = homePageInfo.data.materialinfo[0].value;
                petid = homePageInfo.data.petinfo[0].petid;
                petids = homePageInfo.data.petinfo.map(function (pet) {
                    return pet.petid;
                });
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(20000)];
            case 14:
                _k.sent();
                petNum = homePageInfo.data.petinfo.length;
                coins = homePageInfo.data.coins;
                return [3 /*break*/, 16];
            case 15:
                e_1 = _k.sent();
                console.log('初始化出错，手动去app');
                return [3 /*break*/, 108];
            case 16:
                console.log('助力码:', homePageInfo.data.sharekey);
                shareCodesSelf.push(homePageInfo.data.sharekey);
                _k.label = 17;
            case 17:
                _k.trys.push([17, 19, , 20]);
                return [4 /*yield*/, makeShareCodes(homePageInfo.data.sharekey)];
            case 18:
                _k.sent();
                return [3 /*break*/, 20];
            case 19:
                e_2 = _k.sent();
                console.log(e_2);
                return [3 /*break*/, 20];
            case 20:
                console.log('草草🌿', food);
                console.log('蛋蛋🥚', homePageInfo.data.eggcnt);
                console.log('钱钱💰', coins);
                console.log('鸡鸡🐔', petNum);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                    // 助农
                ];
            case 21:
                _k.sent();
                return [4 /*yield*/, api('GetUserTaskStatusList', 'bizCode,dateType,jxpp_wxapp_type,showAreaTaskFlag,source', { dateType: '2', showAreaTaskFlag: 0, jxpp_wxapp_type: 7 }, true)];
            case 22:
                tasks = _k.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 23:
                _k.sent();
                _i = 0, _a = tasks.data.userTaskStatusList;
                _k.label = 24;
            case 24:
                if (!(_i < _a.length)) return [3 /*break*/, 34];
                t = _a[_i];
                if (!(t.awardStatus === 2 && t.taskName !== '邀请牧场新用户助力' && t.taskName !== '拆开邀人红包')) return [3 /*break*/, 33];
                console.log(t.taskName);
                if (!(t.completedTimes < t.targetTimes)) return [3 /*break*/, 30];
                j = t.completedTimes;
                _k.label = 25;
            case 25:
                if (!(j < t.targetTimes)) return [3 /*break*/, 29];
                return [4 /*yield*/, api('DoTask', 'bizCode,configExtra,source,taskId', { taskId: t.taskId }, true)];
            case 26:
                res = _k.sent();
                if (res.ret === 0) {
                    console.log('任务完成');
                }
                else {
                    console.log('任务失败');
                    return [3 /*break*/, 29];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 27:
                _k.sent();
                _k.label = 28;
            case 28:
                j++;
                return [3 /*break*/, 25];
            case 29: return [3 /*break*/, 33];
            case 30: return [4 /*yield*/, api('Award', 'bizCode,source,taskId', { taskId: t.taskId }, true)];
            case 31:
                res = _k.sent();
                if (res.ret === 0) {
                    console.log('领奖成功', res.data.prizeInfo.match(/:(.*)}/)[1]);
                }
                else {
                    console.log('领奖失败');
                    return [3 /*break*/, 34];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 32:
                _k.sent();
                _k.label = 33;
            case 33:
                _i++;
                return [3 /*break*/, 24];
            case 34: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 扭蛋机
            ];
            case 35:
                _k.sent();
                return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 36:
                // 扭蛋机
                res = _k.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 37:
                _k.sent();
                drawTimes = res.data.times;
                if (!(typeof drawTimes === "undefined")) return [3 /*break*/, 39];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)("牧场扭蛋机错误", "\u8D26\u53F7" + (i + 1) + " " + UserName + "\n\u624B\u52A8\u5EFA\u9020\u626D\u86CB\u673A")];
            case 38:
                _k.sent();
                return [3 /*break*/, 45];
            case 39:
                console.log('扭蛋机剩余次数:', drawTimes);
                j = 0;
                _k.label = 40;
            case 40:
                if (!(j < drawTimes)) return [3 /*break*/, 45];
                return [4 /*yield*/, api('operservice/DrawCard', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 41:
                res = _k.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 43];
                if (res.data.prizetype === 3) {
                    console.log('抽奖成功，金币：', res.data.addcoins);
                }
                else if (res.data.prizetype === 1) {
                    console.log('抽奖成功，卡片：', res.data.cardtype);
                }
                else {
                    console.log('抽奖成功，其他：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 42:
                _k.sent();
                return [3 /*break*/, 44];
            case 43:
                console.log('抽奖失败:', res);
                return [3 /*break*/, 45];
            case 44:
                j++;
                return [3 /*break*/, 40];
            case 45: return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 46:
                res = _k.sent();
                _k.label = 47;
            case 47:
                _k.trys.push([47, 53, , 54]);
                _b = 0, _c = res.data.cardinfo;
                _k.label = 48;
            case 48:
                if (!(_b < _c.length)) return [3 /*break*/, 52];
                card = _c[_b];
                console.log("card " + card.cardtype, card.currnum, '/', card.neednum);
                if (!(card.currnum >= card.neednum && petNum < 6)) return [3 /*break*/, 51];
                console.log('可以兑换');
                return [4 /*yield*/, api('operservice/Combine', 'activeid,activekey,cardtype,channel,jxmc_jstoken,phoneid,sceneid,timestamp', { cardtype: card.cardtype })];
            case 49:
                res = _k.sent();
                res.ret === 0 ? console.log('兑换成功') : '';
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 50:
                _k.sent();
                _k.label = 51;
            case 51:
                _b++;
                return [3 /*break*/, 48];
            case 52: return [3 /*break*/, 54];
            case 53:
                e_3 = _k.sent();
                return [3 /*break*/, 54];
            case 54: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 红包
            ];
            case 55:
                _k.sent();
                return [4 /*yield*/, api('operservice/GetInviteStatus', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 56:
                // 红包
                res = _k.sent();
                console.log('红包助力:', res.data.sharekey);
                shareCodesHbSelf.push(res.data.sharekey);
                _k.label = 57;
            case 57:
                _k.trys.push([57, 59, , 60]);
                return [4 /*yield*/, makeShareCodesHb(res.data.sharekey)];
            case 58:
                _k.sent();
                return [3 /*break*/, 60];
            case 59:
                e_4 = _k.sent();
                return [3 /*break*/, 60];
            case 60: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 签到
            ];
            case 61:
                _k.sent();
                return [4 /*yield*/, api('queryservice/GetSignInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 62:
                // 签到
                res = _k.sent();
                if (!res.data.signlist) return [3 /*break*/, 67];
                _d = 0, _e = res.data.signlist;
                _k.label = 63;
            case 63:
                if (!(_d < _e.length)) return [3 /*break*/, 66];
                day = _e[_d];
                if (!(day.fortoday && !day.hasdone)) return [3 /*break*/, 65];
                return [4 /*yield*/, api('operservice/GetSignReward', 'channel,currdate,sceneid', { currdate: res.data.currdate })];
            case 64:
                res = _k.sent();
                if (res.ret === 0) {
                    console.log('签到成功!');
                }
                else {
                    console.log(res);
                }
                return [3 /*break*/, 66];
            case 65:
                _d++;
                return [3 /*break*/, 63];
            case 66: return [3 /*break*/, 68];
            case 67:
                console.log('没有获取到签到信息！');
                _k.label = 68;
            case 68: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 登录领白菜
            ];
            case 69:
                _k.sent();
                return [4 /*yield*/, api('queryservice/GetVisitBackInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 70:
                // 登录领白菜
                res = _k.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 71:
                _k.sent();
                if (!(res.iscandraw === 1)) return [3 /*break*/, 73];
                return [4 /*yield*/, api('operservice/GetVisitBackCabbage', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 72:
                res = _k.sent();
                if (res.ret === 0) {
                    console.log('登录领白菜：', res.data.drawnum);
                }
                _k.label = 73;
            case 73: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // console.log('任务列表开始')
                // for (let j = 0; j < 30; j++) {
                //   if (await getTask() === 0) {
                //     break
                //   }
                //   await wait(4000)
                // }
                // console.log('任务列表结束')
                // await wait(5000)
            ];
            case 74:
                _k.sent();
                _k.label = 75;
            case 75:
                if (!(coins >= 5000)) return [3 /*break*/, 79];
                console.log('buy...');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(10000)];
            case 76:
                _k.sent();
                return [4 /*yield*/, api('operservice/Buy', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '1' })];
            case 77:
                res = _k.sent();
                if (res.ret === 0) {
                    console.log('买草成功:', res.data.newnum);
                    coins -= 5000;
                    food += 100;
                }
                else {
                    console.log(res);
                    return [3 /*break*/, 79];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 78:
                _k.sent();
                return [3 /*break*/, 75];
            case 79: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 80:
                _k.sent();
                console.log('草草🌿', food);
                _k.label = 81;
            case 81:
                if (!(food >= 10)) return [3 /*break*/, 89];
                food -= 10;
                return [4 /*yield*/, api('operservice/Feed', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 82:
                res = _k.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 83];
                console.log('剩余草:', res.data.newnum);
                return [3 /*break*/, 87];
            case 83:
                if (!(res.ret === 2020)) return [3 /*break*/, 86];
                console.log('收🥚');
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', {
                        isgift: 1,
                        isquerypicksite: 1,
                        isqueryinviteicon: 1
                    })];
            case 84:
                homePageInfo = _k.sent();
                for (_f = 0, _g = homePageInfo.data.petinfo; _f < _g.length; _f++) {
                    t = _g[_f];
                    if (t.cangetborn === 1) {
                        petid = t.petid;
                        break;
                    }
                }
                return [4 /*yield*/, api('operservice/GetSelfResult', 'activeid,activekey,channel,itemid,jxmc_jstoken,phoneid,sceneid,timestamp,type', { itemid: petid, type: '11' })];
            case 85:
                res = _k.sent();
                if (res.ret === 0) {
                    console.log('收🥚成功:', res.data.newnum);
                }
                else {
                    console.log('收🥚失败:', res);
                    return [3 /*break*/, 89];
                }
                return [3 /*break*/, 87];
            case 86:
                if (res.ret === 2005) {
                    console.log('今天吃撑了');
                    return [3 /*break*/, 89];
                }
                else {
                    console.log('Feed未知错误:', res);
                    return [3 /*break*/, 89];
                }
                _k.label = 87;
            case 87: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 88:
                _k.sent();
                return [3 /*break*/, 81];
            case 89: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 90:
                _k.sent();
                _k.label = 91;
            case 91:
                if (!1) return [3 /*break*/, 100];
                _k.label = 92;
            case 92:
                _k.trys.push([92, 98, , 99]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '2' })];
            case 93:
                res = _k.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 100];
                console.log('锄草:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 94:
                _k.sent();
                if (!res.data.surprise) return [3 /*break*/, 97];
                return [4 /*yield*/, api("operservice/GetSelfResult", "activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type", { type: '14', itemid: 'undefined' })];
            case 95:
                res = _k.sent();
                console.log('锄草奖励:', res.data.prizepool);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 96:
                _k.sent();
                _k.label = 97;
            case 97: return [3 /*break*/, 99];
            case 98:
                e_5 = _k.sent();
                console.log('Error:', e_5);
                return [3 /*break*/, 100];
            case 99: return [3 /*break*/, 91];
            case 100: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 101:
                _k.sent();
                _k.label = 102;
            case 102:
                if (!1) return [3 /*break*/, 108];
                _k.label = 103;
            case 103:
                _k.trys.push([103, 106, , 107]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,petid,phoneid,sceneid,timestamp,type', { type: '1', petid: petids[Math.floor((Math.random() * petids.length))] })];
            case 104:
                res = _k.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 108];
                console.log('挑逗:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 105:
                _k.sent();
                return [3 /*break*/, 107];
            case 106:
                e_6 = _k.sent();
                console.log('Error:', e_6);
                return [3 /*break*/, 108];
            case 107: return [3 /*break*/, 102];
            case 108:
                i++;
                return [3 /*break*/, 3];
            case 109: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 110:
                _k.sent();
                i = 0;
                _k.label = 111;
            case 111:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 123];
                return [4 /*yield*/, getCodes()
                    // 获取随机红包码
                ];
            case 112:
                _k.sent();
                _k.label = 113;
            case 113:
                _k.trys.push([113, 115, , 116]);
                return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/jxmchb/30", { timeout: 10000 })];
            case 114:
                data = (_k.sent()).data;
                console.log('获取到30个随机红包码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodesHbSelf, true), shareCodesHbHw, true), data.data, true)));
                return [3 /*break*/, 116];
            case 115:
                e_7 = _k.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesHbSelf, true), shareCodesHbHw, true)));
                return [3 /*break*/, 116];
            case 116:
                cookie = cookiesArr[i];
                return [4 /*yield*/, token(cookie)];
            case 117:
                jxToken = _k.sent();
                j = 0;
                _k.label = 118;
            case 118:
                if (!(j < shareCodes.length)) return [3 /*break*/, 122];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B" + shareCodes[j]);
                return [4 /*yield*/, api('operservice/InviteEnroll', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: shareCodes[j] })];
            case 119:
                res = _k.sent();
                if (res.ret === 0) {
                    console.log('成功');
                }
                else if (res.ret === 2711) {
                    console.log('上限');
                    return [3 /*break*/, 122];
                }
                else {
                    console.log('失败：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 120:
                _k.sent();
                _k.label = 121;
            case 121:
                j++;
                return [3 /*break*/, 118];
            case 122:
                i++;
                return [3 /*break*/, 111];
            case 123:
                i = 0;
                _k.label = 124;
            case 124:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 136];
                return [4 /*yield*/, getCodes()
                    // 获取随机助力码
                ];
            case 125:
                _k.sent();
                _k.label = 126;
            case 126:
                _k.trys.push([126, 128, , 129]);
                return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/jxmc/30", { timeout: 10000 })];
            case 127:
                data = (_k.sent()).data;
                console.log('获取到30个随机助力码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true), data.data, true)));
                return [3 /*break*/, 129];
            case 128:
                e_8 = _k.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true)));
                return [3 /*break*/, 129];
            case 129:
                cookie = cookiesArr[i];
                return [4 /*yield*/, token(cookie)];
            case 130:
                jxToken = _k.sent();
                j = 0;
                _k.label = 131;
            case 131:
                if (!(j < shareCodes.length)) return [3 /*break*/, 135];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B" + shareCodes[j]);
                return [4 /*yield*/, api('operservice/EnrollFriend', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: shareCodes[j] })];
            case 132:
                res = _k.sent();
                if (res.ret === 0) {
                    console.log('成功，获得:', res.data.addcoins);
                }
                else {
                    console.log('失败：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 133:
                _k.sent();
                _k.label = 134;
            case 134:
                j++;
                return [3 /*break*/, 131];
            case 135:
                i++;
                return [3 /*break*/, 124];
            case 136: return [2 /*return*/];
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
        var url, data, e_9;
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
                        url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/jxmc/" + fn + "?channel=7&sceneid=1001&activeid=jxmc_active_0001&activekey=null&jxmc_jstoken=" + jxToken['farm_jstoken'] + "&timestamp=" + jxToken['timestamp'] + "&phoneid=" + jxToken['phoneid'] + "&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2&g_login_type=1&callback=jsonpCBK" + String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0)) + "&g_ty=ls", stk, params, 10028);
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
                    e_9 = _a.sent();
                    console.log('api Error:', e_9);
                    return [2 /*return*/, {}];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function makeShareCodes(code) {
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
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/jxmc?sharecode=" + code + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin)];
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
function makeShareCodesHb(code) {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_11;
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
                    e_11 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_11);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function getCodes() {
    return __awaiter(this, void 0, void 0, function () {
        var data, e_12;
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
                    e_12 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
