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
var sendNotify_1 = require("./sendNotify");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var token = require('./utils/jd_jxmc.js').token;
var cookie = '', res = '', shareCodes = [], homePageInfo, jxToken, UserName, index;
var shareCodesHbSelf = [], shareCodesHbHw = [], shareCodesSelf = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index_1, value, j, lastgettime, food, petid, coins, petNum, petids, e_1, tasks, _c, _d, t, j, drawTimes, j, _e, _f, card, e_2, e_3, _g, _h, day, j, _j, _k, t, j, e_4, j, e_5, _l, _m, _o, index_2, value, data, e_6, _p, shareCodes_1, code, _q, _r, _s, index_3, value, data, e_7, _t, shareCodes_2, code;
    var _u, _v;
    return __generator(this, function (_w) {
        switch (_w.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _w.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _w.sent();
                _i = 0, _a = cookiesArr.entries();
                _w.label = 3;
            case 3:
                if (!(_i < _a.length)) return [3 /*break*/, 110];
                _b = _a[_i], index_1 = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index_1 + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, token(cookie)];
            case 4:
                jxToken = _w.sent();
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', { isgift: 1, isquerypicksite: 1, isqueryinviteicon: 1 })];
            case 5:
                homePageInfo = _w.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 6:
                _w.sent();
                if (!(homePageInfo.data.maintaskId !== 'pause')) return [3 /*break*/, 11];
                console.log('init...');
                j = 0;
                _w.label = 7;
            case 7:
                if (!(j < 20)) return [3 /*break*/, 11];
                return [4 /*yield*/, api('operservice/DoMainTask', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,step,timestamp', { step: homePageInfo.data.maintaskId })];
            case 8:
                res = _w.sent();
                if (res.data.maintaskId === 'pause')
                    return [3 /*break*/, 11];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 9:
                _w.sent();
                _w.label = 10;
            case 10:
                j++;
                return [3 /*break*/, 7];
            case 11: return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', { isgift: 1, isquerypicksite: 1, isqueryinviteicon: 1 })];
            case 12:
                homePageInfo = _w.sent();
                lastgettime = void 0;
                if ((_v = (_u = homePageInfo.data) === null || _u === void 0 ? void 0 : _u.cow) === null || _v === void 0 ? void 0 : _v.lastgettime) {
                    lastgettime = homePageInfo.data.cow.lastgettime;
                }
                else {
                    return [3 /*break*/, 109];
                }
                food = 0, petid = '', coins = 0, petNum = 0, petids = [];
                try {
                    food = homePageInfo.data.materialinfo[0].value;
                    petid = homePageInfo.data.petinfo[0].petid;
                    petids = homePageInfo.data.petinfo.map(function (pet) {
                        return pet.petid;
                    });
                    console.log('当前🐔🐔：', petids);
                    petNum = homePageInfo.data.petinfo.length;
                    coins = homePageInfo.data.coins;
                }
                catch (e) {
                    console.log('初始化出错，手动去app');
                    return [3 /*break*/, 109];
                }
                console.log('助力码:', homePageInfo.data.sharekey);
                shareCodesSelf.push(homePageInfo.data.sharekey);
                _w.label = 13;
            case 13:
                _w.trys.push([13, 15, , 16]);
                return [4 /*yield*/, makeShareCodes(homePageInfo.data.sharekey)];
            case 14:
                _w.sent();
                return [3 /*break*/, 16];
            case 15:
                e_1 = _w.sent();
                console.log(e_1);
                return [3 /*break*/, 16];
            case 16:
                console.log('草草🌿', food);
                console.log('蛋蛋🥚', homePageInfo.data.eggcnt);
                console.log('钱钱💰', coins);
                console.log('鸡鸡🐔', petNum);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)
                    // 助农
                ];
            case 17:
                _w.sent();
                return [4 /*yield*/, api('GetUserTaskStatusList', 'bizCode,dateType,jxpp_wxapp_type,showAreaTaskFlag,source', { dateType: '2', showAreaTaskFlag: 0, jxpp_wxapp_type: 7 }, true)];
            case 18:
                tasks = _w.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 19:
                _w.sent();
                _c = 0, _d = tasks.data.userTaskStatusList;
                _w.label = 20;
            case 20:
                if (!(_c < _d.length)) return [3 /*break*/, 30];
                t = _d[_c];
                if (!(t.awardStatus === 2 && t.taskName !== '邀请牧场新用户助力' && t.taskName !== '拆开邀人红包')) return [3 /*break*/, 29];
                console.log(t.taskName);
                if (!(t.completedTimes < t.targetTimes)) return [3 /*break*/, 26];
                j = t.completedTimes;
                _w.label = 21;
            case 21:
                if (!(j < t.targetTimes)) return [3 /*break*/, 25];
                return [4 /*yield*/, api('DoTask', 'bizCode,configExtra,source,taskId', { taskId: t.taskId }, true)];
            case 22:
                res = _w.sent();
                if (res.ret === 0) {
                    console.log('任务完成');
                }
                else {
                    console.log('任务失败');
                    return [3 /*break*/, 25];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 23:
                _w.sent();
                _w.label = 24;
            case 24:
                j++;
                return [3 /*break*/, 21];
            case 25: return [3 /*break*/, 29];
            case 26: return [4 /*yield*/, api('Award', 'bizCode,source,taskId', { taskId: t.taskId }, true)];
            case 27:
                res = _w.sent();
                if (res.ret === 0) {
                    console.log('领奖成功', res.data.prizeInfo.match(/:(.*)}/)[1]);
                }
                else {
                    console.log('领奖失败');
                    return [3 /*break*/, 30];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 28:
                _w.sent();
                _w.label = 29;
            case 29:
                _c++;
                return [3 /*break*/, 20];
            case 30: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 扭蛋机
            ];
            case 31:
                _w.sent();
                return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 32:
                // 扭蛋机
                res = _w.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 33:
                _w.sent();
                drawTimes = res.data.times;
                if (!(typeof drawTimes === "undefined")) return [3 /*break*/, 35];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)("牧场扭蛋机错误", "\u8D26\u53F7".concat(index_1 + 1, " ").concat(UserName, "\n\u624B\u52A8\u5EFA\u9020\u626D\u86CB\u673A"))];
            case 34:
                _w.sent();
                return [3 /*break*/, 41];
            case 35:
                console.log('扭蛋机剩余次数:', drawTimes);
                j = 0;
                _w.label = 36;
            case 36:
                if (!(j < drawTimes)) return [3 /*break*/, 41];
                return [4 /*yield*/, api('operservice/DrawCard', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 37:
                res = _w.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 39];
                if (res.data.prizetype === 3) {
                    console.log('抽奖成功，金币:', res.data.addcoins);
                }
                else if (res.data.prizetype === 1) {
                    console.log('抽奖成功，卡片:', res.data.cardtype);
                }
                else {
                    console.log('抽奖成功，其他:', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 38:
                _w.sent();
                return [3 /*break*/, 40];
            case 39:
                console.log('抽奖失败:', res);
                return [3 /*break*/, 41];
            case 40:
                j++;
                return [3 /*break*/, 36];
            case 41: return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 42:
                res = _w.sent();
                _w.label = 43;
            case 43:
                _w.trys.push([43, 49, , 50]);
                _e = 0, _f = res.data.cardinfo;
                _w.label = 44;
            case 44:
                if (!(_e < _f.length)) return [3 /*break*/, 48];
                card = _f[_e];
                console.log("card ".concat(card.cardtype), card.currnum, '/', card.neednum);
                if (!(card.currnum >= card.neednum && petNum < 6)) return [3 /*break*/, 47];
                console.log('可以兑换');
                return [4 /*yield*/, api('operservice/Combine', 'activeid,activekey,cardtype,channel,jxmc_jstoken,phoneid,sceneid,timestamp', { cardtype: card.cardtype })];
            case 45:
                res = _w.sent();
                res.ret === 0 ? console.log('兑换成功') : '';
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 46:
                _w.sent();
                _w.label = 47;
            case 47:
                _e++;
                return [3 /*break*/, 44];
            case 48: return [3 /*break*/, 50];
            case 49:
                e_2 = _w.sent();
                return [3 /*break*/, 50];
            case 50: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 红包
            ];
            case 51:
                _w.sent();
                return [4 /*yield*/, api('operservice/GetInviteStatus', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 52:
                // 红包
                res = _w.sent();
                console.log('红包助力:', res.data.sharekey);
                shareCodesHbSelf.push(res.data.sharekey);
                _w.label = 53;
            case 53:
                _w.trys.push([53, 55, , 56]);
                return [4 /*yield*/, makeShareCodesHb(res.data.sharekey)];
            case 54:
                _w.sent();
                return [3 /*break*/, 56];
            case 55:
                e_3 = _w.sent();
                return [3 /*break*/, 56];
            case 56: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 签到
            ];
            case 57:
                _w.sent();
                return [4 /*yield*/, api('queryservice/GetSignInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 58:
                // 签到
                res = _w.sent();
                if (!res.data.signlist) return [3 /*break*/, 63];
                _g = 0, _h = res.data.signlist;
                _w.label = 59;
            case 59:
                if (!(_g < _h.length)) return [3 /*break*/, 62];
                day = _h[_g];
                if (!(day.fortoday && !day.hasdone)) return [3 /*break*/, 61];
                return [4 /*yield*/, api('operservice/GetSignReward', 'channel,currdate,sceneid', { currdate: res.data.currdate })];
            case 60:
                res = _w.sent();
                if (res.ret === 0) {
                    console.log('签到成功!');
                }
                else {
                    console.log(res);
                }
                return [3 /*break*/, 62];
            case 61:
                _g++;
                return [3 /*break*/, 59];
            case 62: return [3 /*break*/, 64];
            case 63:
                console.log('没有获取到签到信息！');
                _w.label = 64;
            case 64: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 登录领白菜
            ];
            case 65:
                _w.sent();
                return [4 /*yield*/, api('queryservice/GetVisitBackInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 66:
                // 登录领白菜
                res = _w.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 67:
                _w.sent();
                if (!(res.data.iscandraw === 1)) return [3 /*break*/, 69];
                return [4 /*yield*/, api('operservice/GetVisitBackCabbage', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 68:
                res = _w.sent();
                if (res.ret === 0) {
                    console.log('登录领白菜:', res.data.drawnum);
                }
                _w.label = 69;
            case 69: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 70:
                _w.sent();
                console.log('任务列表开始');
                j = 0;
                _w.label = 71;
            case 71:
                if (!(j < 30)) return [3 /*break*/, 75];
                return [4 /*yield*/, getTask()];
            case 72:
                if ((_w.sent()) === 0) {
                    return [3 /*break*/, 75];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 73:
                _w.sent();
                _w.label = 74;
            case 74:
                j++;
                return [3 /*break*/, 71];
            case 75:
                console.log('任务列表结束');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 76:
                _w.sent();
                _w.label = 77;
            case 77:
                if (!(coins >= 5000)) return [3 /*break*/, 80];
                return [4 /*yield*/, api('operservice/Buy', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '1' })];
            case 78:
                res = _w.sent();
                if (res.ret === 0) {
                    console.log('买草成功:', res.data.newnum);
                    coins -= 5000;
                    food += 100;
                }
                else {
                    console.log(res);
                    return [3 /*break*/, 80];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 79:
                _w.sent();
                return [3 /*break*/, 77];
            case 80: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 81:
                _w.sent();
                _w.label = 82;
            case 82:
                if (!(food >= 10)) return [3 /*break*/, 90];
                food -= 10;
                return [4 /*yield*/, api('operservice/Feed', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 83:
                res = _w.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 84];
                console.log('喂食:', res.data.newnum);
                return [3 /*break*/, 88];
            case 84:
                if (!(res.ret === 2020)) return [3 /*break*/, 87];
                console.log('收🥚');
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', {
                        isgift: 1,
                        isquerypicksite: 1,
                        isqueryinviteicon: 1
                    })];
            case 85:
                homePageInfo = _w.sent();
                for (_j = 0, _k = homePageInfo.data.petinfo; _j < _k.length; _j++) {
                    t = _k[_j];
                    if (t.cangetborn === 1) {
                        petid = t.petid;
                        break;
                    }
                }
                return [4 /*yield*/, api('operservice/GetSelfResult', 'activeid,activekey,channel,itemid,jxmc_jstoken,phoneid,sceneid,timestamp,type', { itemid: petid, type: '11' })];
            case 86:
                res = _w.sent();
                if (res.ret === 0) {
                    console.log('收🥚成功:', res.data.newnum);
                }
                else {
                    console.log('收🥚失败:', res);
                    return [3 /*break*/, 90];
                }
                return [3 /*break*/, 88];
            case 87:
                if (res.ret === 2005) {
                    console.log('今天吃撑了');
                    return [3 /*break*/, 90];
                }
                else {
                    console.log('Feed未知错误:', res);
                    return [3 /*break*/, 90];
                }
                _w.label = 88;
            case 88: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 89:
                _w.sent();
                return [3 /*break*/, 82];
            case 90: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 91:
                _w.sent();
                console.log('除草...start');
                j = 0;
                _w.label = 92;
            case 92:
                if (!(j < 30)) return [3 /*break*/, 101];
                _w.label = 93;
            case 93:
                _w.trys.push([93, 99, , 100]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '2' })];
            case 94:
                res = _w.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 101];
                console.log('锄草:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 95:
                _w.sent();
                if (!res.data.surprise) return [3 /*break*/, 98];
                return [4 /*yield*/, api("operservice/GetSelfResult", "activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type", { type: '14', itemid: 'undefined' })];
            case 96:
                res = _w.sent();
                console.log('锄草奖励:', res.data.prizepool);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 97:
                _w.sent();
                _w.label = 98;
            case 98: return [3 /*break*/, 100];
            case 99:
                e_4 = _w.sent();
                console.log('除草 Error:', e_4.response);
                return [3 /*break*/, 101];
            case 100:
                j++;
                return [3 /*break*/, 92];
            case 101: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 102:
                _w.sent();
                j = 0;
                _w.label = 103;
            case 103:
                if (!(j < 30)) return [3 /*break*/, 109];
                _w.label = 104;
            case 104:
                _w.trys.push([104, 107, , 108]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,petid,phoneid,sceneid,timestamp,type', { type: '1', petid: petids[Math.floor((Math.random() * petids.length))] })];
            case 105:
                res = _w.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 109];
                console.log('挑逗:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 106:
                _w.sent();
                return [3 /*break*/, 108];
            case 107:
                e_5 = _w.sent();
                console.log('挑逗 Error:', e_5.response);
                return [3 /*break*/, 109];
            case 108:
                j++;
                return [3 /*break*/, 103];
            case 109:
                _i++;
                return [3 /*break*/, 3];
            case 110: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 111:
                _w.sent();
                _l = 0, _m = cookiesArr.entries();
                _w.label = 112;
            case 112:
                if (!(_l < _m.length)) return [3 /*break*/, 124];
                _o = _m[_l], index_2 = _o[0], value = _o[1];
                if (!(shareCodesHbHw.length === 0)) return [3 /*break*/, 114];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('jxmchb')];
            case 113:
                shareCodesHbHw = _w.sent();
                _w.label = 114;
            case 114:
                _w.trys.push([114, 116, , 117]);
                return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/jxmchb/30")];
            case 115:
                data = (_w.sent()).data;
                console.log('获取到30个随机红包码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodesHbSelf, true), shareCodesHbHw, true), data.data, true)));
                return [3 /*break*/, 117];
            case 116:
                e_6 = _w.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesHbSelf, true), shareCodesHbHw, true)));
                return [3 /*break*/, 117];
            case 117:
                cookie = value;
                return [4 /*yield*/, token(cookie)];
            case 118:
                jxToken = _w.sent();
                _p = 0, shareCodes_1 = shareCodes;
                _w.label = 119;
            case 119:
                if (!(_p < shareCodes_1.length)) return [3 /*break*/, 123];
                code = shareCodes_1[_p];
                console.log("\u8D26\u53F7".concat(index_2 + 1, " \u53BB\u52A9\u529B ").concat(code));
                return [4 /*yield*/, api('operservice/InviteEnroll', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: code })];
            case 120:
                res = _w.sent();
                if (res.ret === 0) {
                    console.log('成功');
                }
                else if (res.ret === 2711) {
                    console.log('上限');
                    return [3 /*break*/, 123];
                }
                else {
                    console.log('失败:', res.message);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 121:
                _w.sent();
                _w.label = 122;
            case 122:
                _p++;
                return [3 /*break*/, 119];
            case 123:
                _l++;
                return [3 /*break*/, 112];
            case 124:
                _q = 0, _r = cookiesArr.entries();
                _w.label = 125;
            case 125:
                if (!(_q < _r.length)) return [3 /*break*/, 137];
                _s = _r[_q], index_3 = _s[0], value = _s[1];
                if (!(shareCodesHW.length === 0)) return [3 /*break*/, 127];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('jxmc')];
            case 126:
                shareCodesHW = _w.sent();
                _w.label = 127;
            case 127:
                _w.trys.push([127, 129, , 130]);
                return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/jxmc/30", { timeout: 10000 })];
            case 128:
                data = (_w.sent()).data;
                console.log('获取到30个随机助力码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true), data.data, true)));
                return [3 /*break*/, 130];
            case 129:
                e_7 = _w.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true)));
                return [3 /*break*/, 130];
            case 130:
                cookie = value;
                return [4 /*yield*/, token(cookie)];
            case 131:
                jxToken = _w.sent();
                _t = 0, shareCodes_2 = shareCodes;
                _w.label = 132;
            case 132:
                if (!(_t < shareCodes_2.length)) return [3 /*break*/, 136];
                code = shareCodes_2[_t];
                console.log("\u8D26\u53F7".concat(index_3 + 1, " \u53BB\u52A9\u529B ").concat(code));
                return [4 /*yield*/, api('operservice/EnrollFriend', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: code })];
            case 133:
                res = _w.sent();
                if (res.ret === 0) {
                    console.log('成功，获得:', res.data.addcoins);
                }
                else {
                    console.log('失败:', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 134:
                _w.sent();
                _w.label = 135;
            case 135:
                _t++;
                return [3 /*break*/, 132];
            case 136:
                _q++;
                return [3 /*break*/, 125];
            case 137: return [2 /*return*/];
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
        var url, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (['GetUserTaskStatusList', 'DoTask', 'Award'].indexOf(fn) > -1) {
                        if (temporary)
                            url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/newtasksys/newtasksys_front/".concat(fn, "?_=").concat(Date.now(), "&source=jxmc_zanaixin&bizCode=jxmc_zanaixin&_stk=").concat(encodeURIComponent(stk), "&_ste=1&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls"), stk, params, 10028);
                        else
                            url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/newtasksys/newtasksys_front/".concat(fn, "?_=").concat(Date.now(), "&source=jxmc&bizCode=jxmc&_stk=").concat(encodeURIComponent(stk), "&_ste=1&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls"), stk, params, 10028);
                    }
                    else {
                        url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/jxmc/".concat(fn, "?channel=7&sceneid=1001&activeid=jxmc_active_0001&activekey=null&jxmc_jstoken=").concat(jxToken['farm_jstoken'], "&timestamp=").concat(jxToken['timestamp'], "&phoneid=").concat(jxToken['phoneid'], "&_stk=").concat(encodeURIComponent(stk), "&_ste=1&_=").concat(Date.now(), "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls"), stk, params, 10028);
                    }
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'Accept': '*/*',
                                'User-Agent': 'jdpingou;iPhone;5.15.0;15.1;3271867e5dc749cc8cc76aa5aa6a084eea8e7920;network/wifi;model/iPhone11,6;appBuild/100779;ADID/;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/15;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                                'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                                'Referer': 'https://st.jingxi.com/',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, JSON.parse(data.match(/jsonpCBK.?\((.*)/)[1])];
            }
        });
    });
}
function makeShareCodes(code) {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_8;
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
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/jxmc?sharecode=".concat(code, "&bean=").concat(bean, "&farm=").concat(farm, "&pin=").concat(pin))];
                case 3:
                    data = (_a.sent()).data;
                    console.log(data.message);
                    return [3 /*break*/, 5];
                case 4:
                    e_8 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_8);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function makeShareCodesHb(code) {
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
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/jxmchb?sharecode=".concat(code, "&bean=").concat(bean, "&farm=").concat(farm, "&pin=").concat(pin), { timeout: 10000 })];
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
