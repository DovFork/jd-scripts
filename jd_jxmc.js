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
    var e_1, cookiesArr, except, i, j, lastgettime, food, petid, coins, e_2, drawTimes, j, e_3, cowToken, _i, _a, day, j, _b, _c, t, e_4, e_5, i, data, e_6, j, i, data, e_7, j;
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
                if (!(i < cookiesArr.length)) return [3 /*break*/, 85];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                if (except.includes(encodeURIComponent(UserName))) {
                    console.log('已设置跳过');
                    return [3 /*break*/, 84];
                }
                return [4 /*yield*/, token(cookie)];
            case 7:
                jxToken = _f.sent();
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', { isgift: 1, isquerypicksite: 1, isqueryinviteicon: 1 })];
            case 8:
                homePageInfo = _f.sent();
                if (!(homePageInfo.data.maintaskId !== 'pause')) return [3 /*break*/, 13];
                console.log('init...');
                j = 0;
                _f.label = 9;
            case 9:
                if (!(j < 20)) return [3 /*break*/, 13];
                return [4 /*yield*/, api('operservice/DoMainTask', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,step,timestamp', { step: homePageInfo.data.maintaskId })];
            case 10:
                res = _f.sent();
                if (res.data.maintaskId === 'pause')
                    return [3 /*break*/, 13];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 11:
                _f.sent();
                _f.label = 12;
            case 12:
                j++;
                return [3 /*break*/, 9];
            case 13: return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', { isgift: 1, isquerypicksite: 1, isqueryinviteicon: 1 })];
            case 14:
                homePageInfo = _f.sent();
                lastgettime = void 0;
                if ((_e = (_d = homePageInfo.data) === null || _d === void 0 ? void 0 : _d.cow) === null || _e === void 0 ? void 0 : _e.lastgettime) {
                    lastgettime = homePageInfo.data.cow.lastgettime;
                }
                else {
                    return [3 /*break*/, 84];
                }
                food = 0;
                try {
                    food = homePageInfo.data.materialinfo[0].value;
                }
                catch (e) {
                    console.log('未开通？黑号？');
                    return [3 /*break*/, 84];
                }
                petid = homePageInfo.data.petinfo[0].petid;
                coins = homePageInfo.data.coins;
                console.log('助力码:', homePageInfo.data.sharekey);
                shareCodesSelf.push(homePageInfo.data.sharekey);
                _f.label = 15;
            case 15:
                _f.trys.push([15, 17, , 18]);
                return [4 /*yield*/, makeShareCodes(homePageInfo.data.sharekey)];
            case 16:
                _f.sent();
                return [3 /*break*/, 18];
            case 17:
                e_2 = _f.sent();
                console.log(e_2);
                return [3 /*break*/, 18];
            case 18:
                console.log('草草🌿', food);
                console.log('蛋蛋🥚', homePageInfo.data.eggcnt);
                console.log('钱钱💰', coins);
                return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 19:
                // 扭蛋机
                res = _f.sent();
                drawTimes = res.data.times;
                if (!(typeof drawTimes === "undefined")) return [3 /*break*/, 21];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)("牧场扭蛋机错误", "\u8D26\u53F7" + (i + 1) + " " + UserName + "\n\u624B\u52A8\u5EFA\u9020\u626D\u86CB\u673A")];
            case 20:
                _f.sent();
                return [3 /*break*/, 28];
            case 21:
                console.log('扭蛋机剩余次数:', drawTimes);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 22:
                _f.sent();
                j = 0;
                _f.label = 23;
            case 23:
                if (!(j < drawTimes)) return [3 /*break*/, 28];
                return [4 /*yield*/, api('operservice/DrawCard', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 24:
                res = _f.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 26];
                if (res.data.prizetype === 3)
                    console.log('抽奖成功，金币：', res.data.addcoins);
                else
                    console.log('抽奖成功，其他：', res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 25:
                _f.sent();
                return [3 /*break*/, 27];
            case 26:
                console.log('抽奖失败:', res);
                return [3 /*break*/, 28];
            case 27:
                j++;
                return [3 /*break*/, 23];
            case 28: return [4 /*yield*/, api('operservice/GetInviteStatus', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 29:
                // 红包
                res = _f.sent();
                console.log('红包助力:', res.data.sharekey);
                shareCodesHbSelf.push(res.data.sharekey);
                _f.label = 30;
            case 30:
                _f.trys.push([30, 32, , 33]);
                return [4 /*yield*/, makeShareCodesHb(res.data.sharekey)];
            case 31:
                _f.sent();
                return [3 /*break*/, 33];
            case 32:
                e_3 = _f.sent();
                return [3 /*break*/, 33];
            case 33: return [4 /*yield*/, cow(lastgettime)];
            case 34:
                cowToken = _f.sent();
                console.log(cowToken);
                return [4 /*yield*/, api('operservice/GetCoin', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,token', { token: cowToken })];
            case 35:
                res = _f.sent();
                if (res.ret === 0)
                    console.log('收牛牛:', res.data.addcoin);
                else
                    console.log('收牛牛:', res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)
                    // 签到
                ];
            case 36:
                _f.sent();
                return [4 /*yield*/, api('queryservice/GetSignInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 37:
                // 签到
                res = _f.sent();
                if (!res.data.signlist) return [3 /*break*/, 42];
                _i = 0, _a = res.data.signlist;
                _f.label = 38;
            case 38:
                if (!(_i < _a.length)) return [3 /*break*/, 41];
                day = _a[_i];
                if (!(day.fortoday && !day.hasdone)) return [3 /*break*/, 40];
                return [4 /*yield*/, api('operservice/GetSignReward', 'channel,currdate,sceneid', { currdate: res.data.currdate })];
            case 39:
                res = _f.sent();
                if (res.ret === 0) {
                    console.log('签到成功!');
                }
                else {
                    console.log(res);
                }
                return [3 /*break*/, 41];
            case 40:
                _i++;
                return [3 /*break*/, 38];
            case 41: return [3 /*break*/, 43];
            case 42:
                console.log('没有获取到签到信息！');
                _f.label = 43;
            case 43: return [4 /*yield*/, api('queryservice/GetVisitBackInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 44:
                // 登录领白菜
                res = _f.sent();
                if (!(res.iscandraw === 1)) return [3 /*break*/, 46];
                return [4 /*yield*/, api('operservice/GetVisitBackCabbage', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 45:
                res = _f.sent();
                if (res.ret === 0) {
                    console.log('登录领白菜：', res.data.drawnum);
                }
                _f.label = 46;
            case 46:
                console.log('任务列表开始');
                j = 0;
                _f.label = 47;
            case 47:
                if (!(j < 30)) return [3 /*break*/, 51];
                return [4 /*yield*/, getTask()];
            case 48:
                if ((_f.sent()) === 0) {
                    return [3 /*break*/, 51];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 49:
                _f.sent();
                _f.label = 50;
            case 50:
                j++;
                return [3 /*break*/, 47];
            case 51:
                console.log('任务列表结束');
                _f.label = 52;
            case 52:
                if (!(coins >= 5000 && food <= 500)) return [3 /*break*/, 55];
                return [4 /*yield*/, api('operservice/Buy', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '1' })];
            case 53:
                res = _f.sent();
                if (res.ret === 0) {
                    console.log('买草成功:', res.data.newnum);
                    coins -= 5000;
                    food += 100;
                }
                else {
                    console.log(res);
                    return [3 /*break*/, 55];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 54:
                _f.sent();
                return [3 /*break*/, 52];
            case 55: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 56:
                _f.sent();
                console.log('food:', food, food >= 10);
                _f.label = 57;
            case 57:
                if (!(food >= 10)) return [3 /*break*/, 65];
                return [4 /*yield*/, api('operservice/Feed', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 58:
                res = _f.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 59];
                food -= 10;
                console.log('剩余草:', res.data.newnum);
                return [3 /*break*/, 63];
            case 59:
                if (!(res.ret === 2020)) return [3 /*break*/, 62];
                console.log('收🥚');
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', {
                        isgift: 1,
                        isquerypicksite: 1,
                        isqueryinviteicon: 1
                    })];
            case 60:
                homePageInfo = _f.sent();
                for (_b = 0, _c = homePageInfo.data.petinfo; _b < _c.length; _b++) {
                    t = _c[_b];
                    if (t.progress === '0') {
                        petid = t.petid;
                        break;
                    }
                }
                return [4 /*yield*/, api('operservice/GetSelfResult', 'activeid,activekey,channel,itemid,jxmc_jstoken,phoneid,sceneid,timestamp,type', { itemid: petid, type: '11' })];
            case 61:
                res = _f.sent();
                if (res.ret === 0) {
                    console.log('收🥚成功:', res.data.newnum);
                }
                else {
                    console.log('收🥚失败:', res);
                    return [3 /*break*/, 65];
                }
                return [3 /*break*/, 63];
            case 62:
                if (res.ret === 2005) {
                    console.log('今天吃撑了');
                    return [3 /*break*/, 65];
                }
                else {
                    console.log('Feed未知错误:', res);
                    return [3 /*break*/, 65];
                }
                _f.label = 63;
            case 63: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 64:
                _f.sent();
                return [3 /*break*/, 57];
            case 65: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 66:
                _f.sent();
                _f.label = 67;
            case 67:
                if (!1) return [3 /*break*/, 76];
                _f.label = 68;
            case 68:
                _f.trys.push([68, 74, , 75]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '2' })];
            case 69:
                res = _f.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 76];
                console.log('锄草:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 70:
                _f.sent();
                if (!res.data.surprise) return [3 /*break*/, 73];
                return [4 /*yield*/, api("operservice/GetSelfResult", "activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type", { type: '14', itemid: 'undefined' })];
            case 71:
                res = _f.sent();
                console.log('锄草奖励:', res.data.prizepool);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 72:
                _f.sent();
                _f.label = 73;
            case 73: return [3 /*break*/, 75];
            case 74:
                e_4 = _f.sent();
                console.log('Error:', e_4);
                return [3 /*break*/, 76];
            case 75: return [3 /*break*/, 67];
            case 76: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 77:
                _f.sent();
                _f.label = 78;
            case 78:
                if (!1) return [3 /*break*/, 84];
                _f.label = 79;
            case 79:
                _f.trys.push([79, 82, , 83]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,petid,phoneid,sceneid,timestamp,type', {
                        type: '1',
                        petid: petid
                    })];
            case 80:
                res = _f.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 84];
                console.log('挑逗:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 81:
                _f.sent();
                return [3 /*break*/, 83];
            case 82:
                e_5 = _f.sent();
                console.log('Error:', e_5);
                return [3 /*break*/, 84];
            case 83: return [3 /*break*/, 78];
            case 84:
                i++;
                return [3 /*break*/, 6];
            case 85:
                i = 0;
                _f.label = 86;
            case 86:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 98];
                return [4 /*yield*/, getCodes()];
            case 87:
                _f.sent();
                _f.label = 88;
            case 88:
                _f.trys.push([88, 90, , 91]);
                (0, TS_USER_AGENTS_1.resetHosts)();
                return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/jxmchb/30", { timeout: 10000 })];
            case 89:
                data = (_f.sent()).data;
                console.log('获取到30个随机红包码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodesHbSelf, true), shareCodesHbHw, true), data.data, true)));
                return [3 /*break*/, 91];
            case 90:
                e_6 = _f.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesHbSelf, true), shareCodesHbHw, true)));
                return [3 /*break*/, 91];
            case 91:
                cookie = cookiesArr[i];
                return [4 /*yield*/, token(cookie)];
            case 92:
                jxToken = _f.sent();
                j = 0;
                _f.label = 93;
            case 93:
                if (!(j < shareCodes.length)) return [3 /*break*/, 97];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B" + shareCodes[j]);
                return [4 /*yield*/, api('operservice/InviteEnroll', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: shareCodes[j] })];
            case 94:
                res = _f.sent();
                if (res.ret === 0) {
                    console.log('成功');
                }
                else if (res.ret === 2711) {
                    console.log('上限');
                    return [3 /*break*/, 97];
                }
                else {
                    console.log('失败：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 95:
                _f.sent();
                _f.label = 96;
            case 96:
                j++;
                return [3 /*break*/, 93];
            case 97:
                i++;
                return [3 /*break*/, 86];
            case 98:
                i = 0;
                _f.label = 99;
            case 99:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 111];
                return [4 /*yield*/, getCodes()];
            case 100:
                _f.sent();
                _f.label = 101;
            case 101:
                _f.trys.push([101, 103, , 104]);
                (0, TS_USER_AGENTS_1.resetHosts)();
                return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/jxmc/30", { timeout: 10000 })];
            case 102:
                data = (_f.sent()).data;
                console.log('获取到30个随机助力码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true), data.data, true)));
                return [3 /*break*/, 104];
            case 103:
                e_7 = _f.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true)));
                return [3 /*break*/, 104];
            case 104:
                cookie = cookiesArr[i];
                return [4 /*yield*/, token(cookie)];
            case 105:
                jxToken = _f.sent();
                j = 0;
                _f.label = 106;
            case 106:
                if (!(j < shareCodes.length)) return [3 /*break*/, 110];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B" + shareCodes[j]);
                return [4 /*yield*/, api('operservice/EnrollFriend', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: shareCodes[j] })];
            case 107:
                res = _f.sent();
                if (res.ret === 0) {
                    console.log('成功，获得:', res.data.addcoins);
                }
                else {
                    console.log('失败：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 108:
                _f.sent();
                _f.label = 109;
            case 109:
                j++;
                return [3 /*break*/, 106];
            case 110:
                i++;
                return [3 /*break*/, 99];
            case 111: return [2 /*return*/];
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
                                'Host': 'm.jingxi.com',
                                'User-Agent': "jdpingou;iPhone;5.9.0;12.4.1;" + (0, TS_USER_AGENTS_1.randomString)(40) + ";network/wifi;",
                                'Referer': 'https://st.jingxi.com/pingou/jxmc/index.html',
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
