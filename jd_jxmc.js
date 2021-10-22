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
var cow = require('./utils/jd_jxmc.js').cow;
var token = require('./utils/jd_jxmc.js').token;
var cookie = '', res = '', shareCodes = [], homePageInfo, jxToken, UserName, index;
var shareCodesHbSelf = [], shareCodesHbHw = [], shareCodesSelf = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var e_1, cookiesArr, except, i, lastgettime, food, petid, coins, e_2, drawTimes, j, e_3, cowToken, _i, _a, day, j, _b, _c, t, e_4, e_5, i, data, e_6, j, i, data, e_7, j;
    var _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _f.trys.push([0, 1, , 3]);
                (0, TS_USER_AGENTS_1.resetHosts)();
                return [3 /*break*/, 3];
            case 1:
                e_1 = _f.sent();
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)("脚本执行出错", "删除TS_USER_AGENT.js\n\n删js ! 不是ts !")];
            case 2:
                _f.sent();
                return [2 /*return*/];
            case 3: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 4:
                _f.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 5:
                cookiesArr = _f.sent();
                if (process.argv[2]) {
                    console.log('收到命令行cookie');
                    cookiesArr = [unescape(process.argv[2])];
                }
                except = (0, TS_USER_AGENTS_1.exceptCookie)(path.basename(__filename));
                i = 0;
                _f.label = 6;
            case 6:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 77];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                if (except.includes(encodeURIComponent(UserName))) {
                    console.log('已设置跳过');
                    return [3 /*break*/, 76];
                }
                return [4 /*yield*/, token(cookie)];
            case 7:
                jxToken = _f.sent();
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', {
                        isgift: 1,
                        isquerypicksite: 1,
                        isqueryinviteicon: 1
                    })];
            case 8:
                homePageInfo = _f.sent();
                console.log(JSON.stringify(homePageInfo));
                lastgettime = void 0;
                if ((_e = (_d = homePageInfo.data) === null || _d === void 0 ? void 0 : _d.cow) === null || _e === void 0 ? void 0 : _e.lastgettime) {
                    lastgettime = homePageInfo.data.cow.lastgettime;
                }
                else {
                    return [3 /*break*/, 76];
                }
                food = 0;
                try {
                    food = homePageInfo.data.materialinfo[0].value;
                }
                catch (e) {
                    console.log('未开通？黑号？');
                    return [3 /*break*/, 76];
                }
                petid = homePageInfo.data.petinfo[0].petid;
                coins = homePageInfo.data.coins;
                console.log('助力码:', homePageInfo.data.sharekey);
                shareCodesSelf.push(homePageInfo.data.sharekey);
                _f.label = 9;
            case 9:
                _f.trys.push([9, 11, , 12]);
                return [4 /*yield*/, makeShareCodes(homePageInfo.data.sharekey)];
            case 10:
                _f.sent();
                return [3 /*break*/, 12];
            case 11:
                e_2 = _f.sent();
                console.log(e_2);
                return [3 /*break*/, 12];
            case 12:
                console.log('现有草:', food);
                console.log('金币:', coins);
                return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 13:
                // 扭蛋机
                res = _f.sent();
                drawTimes = res.data.times;
                console.log('扭蛋机剩余次数:', drawTimes);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 14:
                _f.sent();
                j = 0;
                _f.label = 15;
            case 15:
                if (!(j < drawTimes)) return [3 /*break*/, 20];
                return [4 /*yield*/, api('operservice/DrawCard', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 16:
                res = _f.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 18];
                if (res.data.prizetype === 3)
                    console.log('抽奖成功，金币：', res.data.addcoins);
                else
                    console.log('抽奖成功，其他：', res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 17:
                _f.sent();
                return [3 /*break*/, 19];
            case 18:
                console.log('抽奖失败:', res);
                return [3 /*break*/, 20];
            case 19:
                j++;
                return [3 /*break*/, 15];
            case 20: return [4 /*yield*/, api('operservice/GetInviteStatus', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 21:
                // 红包
                res = _f.sent();
                console.log('红包助力:', res.data.sharekey);
                shareCodesHbSelf.push(res.data.sharekey);
                _f.label = 22;
            case 22:
                _f.trys.push([22, 24, , 25]);
                return [4 /*yield*/, makeShareCodesHb(res.data.sharekey)];
            case 23:
                _f.sent();
                return [3 /*break*/, 25];
            case 24:
                e_3 = _f.sent();
                return [3 /*break*/, 25];
            case 25: return [4 /*yield*/, cow(lastgettime)];
            case 26:
                cowToken = _f.sent();
                console.log(cowToken);
                return [4 /*yield*/, api('operservice/GetCoin', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,token', { token: cowToken })];
            case 27:
                res = _f.sent();
                if (res.ret === 0)
                    console.log('收牛牛:', res.data.addcoin);
                else
                    console.log('收牛牛:', res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)
                    // 签到
                ];
            case 28:
                _f.sent();
                return [4 /*yield*/, api('queryservice/GetSignInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 29:
                // 签到
                res = _f.sent();
                if (!res.data.signlist) return [3 /*break*/, 34];
                _i = 0, _a = res.data.signlist;
                _f.label = 30;
            case 30:
                if (!(_i < _a.length)) return [3 /*break*/, 33];
                day = _a[_i];
                if (!(day.fortoday && !day.hasdone)) return [3 /*break*/, 32];
                return [4 /*yield*/, api('operservice/GetSignReward', 'channel,currdate,sceneid', { currdate: res.data.currdate })];
            case 31:
                res = _f.sent();
                if (res.ret === 0) {
                    console.log('签到成功!');
                }
                else {
                    console.log(res);
                }
                return [3 /*break*/, 33];
            case 32:
                _i++;
                return [3 /*break*/, 30];
            case 33: return [3 /*break*/, 35];
            case 34:
                console.log('没有获取到签到信息！');
                _f.label = 35;
            case 35: return [4 /*yield*/, api('queryservice/GetVisitBackInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 36:
                // 登录领白菜
                res = _f.sent();
                if (!(res.iscandraw === 1)) return [3 /*break*/, 38];
                return [4 /*yield*/, api('operservice/GetVisitBackCabbage', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 37:
                res = _f.sent();
                if (res.ret === 0) {
                    console.log('登录领白菜：', res.data.drawnum);
                }
                _f.label = 38;
            case 38:
                console.log('任务列表开始');
                j = 0;
                _f.label = 39;
            case 39:
                if (!(j < 30)) return [3 /*break*/, 43];
                return [4 /*yield*/, getTask()];
            case 40:
                if ((_f.sent()) === 0) {
                    return [3 /*break*/, 43];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 41:
                _f.sent();
                _f.label = 42;
            case 42:
                j++;
                return [3 /*break*/, 39];
            case 43:
                console.log('任务列表结束');
                _f.label = 44;
            case 44:
                if (!(coins >= 5000 && food <= 500)) return [3 /*break*/, 47];
                return [4 /*yield*/, api('operservice/Buy', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '1' })];
            case 45:
                res = _f.sent();
                if (res.ret === 0) {
                    console.log('买草成功:', res.data.newnum);
                    coins -= 5000;
                    food += 100;
                }
                else {
                    console.log(res);
                    return [3 /*break*/, 47];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 46:
                _f.sent();
                return [3 /*break*/, 44];
            case 47: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 48:
                _f.sent();
                console.log('food:', food, food >= 10);
                _f.label = 49;
            case 49:
                if (!(food >= 10)) return [3 /*break*/, 57];
                return [4 /*yield*/, api('operservice/Feed', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 50:
                res = _f.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 51];
                food -= 10;
                console.log('剩余草:', res.data.newnum);
                return [3 /*break*/, 55];
            case 51:
                if (!(res.ret === 2020)) return [3 /*break*/, 54];
                console.log('收🥚');
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', {
                        isgift: 1,
                        isquerypicksite: 1,
                        isqueryinviteicon: 1
                    })];
            case 52:
                homePageInfo = _f.sent();
                for (_b = 0, _c = homePageInfo.data.petinfo; _b < _c.length; _b++) {
                    t = _c[_b];
                    if (t.progress === '0') {
                        petid = t.petid;
                        break;
                    }
                }
                return [4 /*yield*/, api('operservice/GetSelfResult', 'activeid,activekey,channel,itemid,jxmc_jstoken,phoneid,sceneid,timestamp,type', { itemid: petid, type: '11' })];
            case 53:
                res = _f.sent();
                if (res.ret === 0) {
                    console.log('收🥚成功:', res.data.newnum);
                }
                else {
                    console.log('收🥚失败:', res);
                    return [3 /*break*/, 57];
                }
                return [3 /*break*/, 55];
            case 54:
                if (res.ret === 2005) {
                    console.log('今天吃撑了');
                    return [3 /*break*/, 57];
                }
                else {
                    console.log('Feed未知错误:', res);
                    return [3 /*break*/, 57];
                }
                _f.label = 55;
            case 55: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 56:
                _f.sent();
                return [3 /*break*/, 49];
            case 57: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 58:
                _f.sent();
                _f.label = 59;
            case 59:
                if (!1) return [3 /*break*/, 68];
                _f.label = 60;
            case 60:
                _f.trys.push([60, 66, , 67]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '2' })];
            case 61:
                res = _f.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 68];
                console.log('锄草:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 62:
                _f.sent();
                if (!res.data.surprise) return [3 /*break*/, 65];
                return [4 /*yield*/, api("operservice/GetSelfResult", "activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type", { type: '14', itemid: 'undefined' })];
            case 63:
                res = _f.sent();
                console.log('锄草奖励:', res.data.prizepool);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 64:
                _f.sent();
                _f.label = 65;
            case 65: return [3 /*break*/, 67];
            case 66:
                e_4 = _f.sent();
                console.log('Error:', e_4);
                return [3 /*break*/, 68];
            case 67: return [3 /*break*/, 59];
            case 68: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 69:
                _f.sent();
                _f.label = 70;
            case 70:
                if (!1) return [3 /*break*/, 76];
                _f.label = 71;
            case 71:
                _f.trys.push([71, 74, , 75]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,petid,phoneid,sceneid,timestamp,type', {
                        type: '1',
                        petid: petid
                    })];
            case 72:
                res = _f.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 76];
                console.log('挑逗:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 73:
                _f.sent();
                return [3 /*break*/, 75];
            case 74:
                e_5 = _f.sent();
                console.log('Error:', e_5);
                return [3 /*break*/, 76];
            case 75: return [3 /*break*/, 70];
            case 76:
                i++;
                return [3 /*break*/, 6];
            case 77:
                i = 0;
                _f.label = 78;
            case 78:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 90];
                return [4 /*yield*/, getCodes()];
            case 79:
                _f.sent();
                _f.label = 80;
            case 80:
                _f.trys.push([80, 82, , 83]);
                (0, TS_USER_AGENTS_1.resetHosts)();
                return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/jxmchb/30", { timeout: 10000 })];
            case 81:
                data = (_f.sent()).data;
                console.log('获取到30个随机红包码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodesHbSelf, true), shareCodesHbHw, true), data.data, true)));
                return [3 /*break*/, 83];
            case 82:
                e_6 = _f.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesHbSelf, true), shareCodesHbHw, true)));
                return [3 /*break*/, 83];
            case 83:
                cookie = cookiesArr[i];
                return [4 /*yield*/, token(cookie)];
            case 84:
                jxToken = _f.sent();
                j = 0;
                _f.label = 85;
            case 85:
                if (!(j < shareCodes.length)) return [3 /*break*/, 89];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B" + shareCodes[j]);
                return [4 /*yield*/, api('operservice/InviteEnroll', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: shareCodes[j] })];
            case 86:
                res = _f.sent();
                if (res.ret === 0) {
                    console.log('成功');
                }
                else if (res.ret === 2711) {
                    console.log('上限');
                    return [3 /*break*/, 89];
                }
                else {
                    console.log('失败：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 87:
                _f.sent();
                _f.label = 88;
            case 88:
                j++;
                return [3 /*break*/, 85];
            case 89:
                i++;
                return [3 /*break*/, 78];
            case 90:
                i = 0;
                _f.label = 91;
            case 91:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 103];
                return [4 /*yield*/, getCodes()];
            case 92:
                _f.sent();
                _f.label = 93;
            case 93:
                _f.trys.push([93, 95, , 96]);
                (0, TS_USER_AGENTS_1.resetHosts)();
                return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/jxmc/30", { timeout: 10000 })];
            case 94:
                data = (_f.sent()).data;
                console.log('获取到30个随机助力码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true), data.data, true)));
                return [3 /*break*/, 96];
            case 95:
                e_7 = _f.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true)));
                return [3 /*break*/, 96];
            case 96:
                cookie = cookiesArr[i];
                return [4 /*yield*/, token(cookie)];
            case 97:
                jxToken = _f.sent();
                j = 0;
                _f.label = 98;
            case 98:
                if (!(j < shareCodes.length)) return [3 /*break*/, 102];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B" + shareCodes[j]);
                return [4 /*yield*/, api('operservice/EnrollFriend', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: shareCodes[j] })];
            case 99:
                res = _f.sent();
                if (res.ret === 0) {
                    console.log('成功，获得:', res.data.addcoins);
                }
                else {
                    console.log('失败：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 100:
                _f.sent();
                _f.label = 101;
            case 101:
                j++;
                return [3 /*break*/, 98];
            case 102:
                i++;
                return [3 /*break*/, 91];
            case 103: return [2 /*return*/];
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
function api(fn, stk, params) {
    if (params === void 0) { params = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var url, data, e_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (['GetUserTaskStatusList', 'DoTask', 'Award'].indexOf(fn) > -1) {
                        url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?_=" + Date.now() + "&source=jxmc&bizCode=jxmc&_stk=" + encodeURIComponent(stk) + "&_ste=1&sceneval=2", stk, params, 10028);
                    }
                    else {
                        url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/jxmc/" + fn + "?channel=7&sceneid=1001&activeid=jxmc_active_0001&activekey=null&jxmc_jstoken=" + jxToken['farm_jstoken'] + "&timestamp=" + jxToken['timestamp'] + "&phoneid=" + jxToken['phoneid'] + "&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + (Date.now() + 2) + "&sceneval=2", stk, params, 10028);
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Referer': 'https://st.jingxi.com/pingou/jxmc/index.html',
                                'Host': 'm.jingxi.com',
                                'User-Agent': 'jdpingou;',
                                'Cookie': cookie
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    if (typeof data === 'string')
                        return [2 /*return*/, JSON.parse(data.replace(/jsonpCBK.?\(/, '').split('\n')[0])];
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
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var bean, farm, pin;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 1:
                    bean = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 2:
                    farm = _a.sent();
                    pin = cookie.match(/pt_pin=([^;]*)/)[1];
                    pin = ts_md5_1.Md5.hashStr(pin);
                    (0, TS_USER_AGENTS_1.resetHosts)();
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/jxmc?sharecode=" + code + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin, { timeout: 10000 })
                            .then(function (res) {
                            if (res.data.code === 200)
                                console.log('已自动提交助力码');
                            else
                                console.log('提交失败！已提交farm的cookie才可提交cfd');
                            resolve(200);
                        })["catch"](function () {
                            reject('访问助力池出错');
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
}
function makeShareCodesHb(code) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var bean, farm, pin;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 1:
                    bean = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 2:
                    farm = _a.sent();
                    pin = cookie.match(/pt_pin=([^;]*)/)[1];
                    pin = ts_md5_1.Md5.hashStr(pin);
                    (0, TS_USER_AGENTS_1.resetHosts)();
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/jxmchb?sharecode=" + code + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin, { timeout: 10000 })
                            .then(function (res) {
                            if (res.data.code === 200)
                                console.log('已自动提交红包码');
                            else
                                console.log('提交失败！已提交farm的cookie才可提交cfd');
                            resolve(200);
                        })["catch"](function () {
                            reject('访问助力池出错');
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
}
function getCodes() {
    return __awaiter(this, void 0, void 0, function () {
        var data, e_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    (0, TS_USER_AGENTS_1.resetHosts)();
                    return [4 /*yield*/, axios_1["default"].get('https://api.jdsharecode.xyz/api/HW_CODES', { timeout: 10000 })];
                case 1:
                    data = (_a.sent()).data;
                    shareCodesHW = data.jxmc || [];
                    shareCodesHbHw = data.jxmchb || [];
                    return [3 /*break*/, 3];
                case 2:
                    e_9 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
