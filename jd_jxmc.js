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
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cow = require('./utils/jd_jxmc.js').cow;
var token = require('./utils/jd_jxmc.js').token;
var cookie = '', res = '', shareCodes = [], homePageInfo, jxToken, UserName, index;
var shareCodesHbSelf = [], shareCodesHbHw = [], shareCodesSelf = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, except, i, lastgettime, food, petid, coins, e_1, e_2, cowToken, _i, _a, day, j, e_3, e_4, e_5, i, data, e_6, j, i, data, e_7, j;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _d.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _d.sent();
                if (process.argv[2]) {
                    console.log('收到命令行cookie');
                    cookiesArr = [unescape(process.argv[2])];
                }
                except = (0, TS_USER_AGENTS_1.exceptCookie)(path.basename(__filename));
                i = 0;
                _d.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 69];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                if (except.includes(encodeURIComponent(UserName))) {
                    console.log('已设置跳过');
                    return [3 /*break*/, 68];
                }
                return [4 /*yield*/, token(cookie)];
            case 4:
                jxToken = _d.sent();
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', {
                        isgift: 1,
                        isquerypicksite: 1,
                        isqueryinviteicon: 1
                    })];
            case 5:
                homePageInfo = _d.sent();
                lastgettime = void 0;
                if ((_c = (_b = homePageInfo.data) === null || _b === void 0 ? void 0 : _b.cow) === null || _c === void 0 ? void 0 : _c.lastgettime) {
                    lastgettime = homePageInfo.data.cow.lastgettime;
                    console.log('lastgettime:', lastgettime);
                }
                else {
                    return [3 /*break*/, 68];
                }
                food = 0;
                try {
                    food = homePageInfo.data.materialinfo[0].value;
                }
                catch (e) {
                    console.log('未开通？黑号？');
                    return [3 /*break*/, 68];
                }
                petid = homePageInfo.data.petinfo[0].petid;
                coins = homePageInfo.data.coins;
                console.log('助力码:', homePageInfo.data.sharekey);
                shareCodesSelf.push(homePageInfo.data.sharekey);
                _d.label = 6;
            case 6:
                _d.trys.push([6, 8, , 9]);
                return [4 /*yield*/, makeShareCodes(homePageInfo.data.sharekey)];
            case 7:
                _d.sent();
                return [3 /*break*/, 9];
            case 8:
                e_1 = _d.sent();
                console.log(e_1);
                return [3 /*break*/, 9];
            case 9:
                console.log('现有草:', food);
                console.log('金币:', coins);
                return [4 /*yield*/, api('operservice/GetInviteStatus', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 10:
                // 红包
                res = _d.sent();
                console.log('红包助力:', res.data.sharekey);
                shareCodesHbSelf.push(res.data.sharekey);
                _d.label = 11;
            case 11:
                _d.trys.push([11, 13, , 14]);
                return [4 /*yield*/, makeShareCodesHb(res.data.sharekey)];
            case 12:
                _d.sent();
                return [3 /*break*/, 14];
            case 13:
                e_2 = _d.sent();
                return [3 /*break*/, 14];
            case 14: return [4 /*yield*/, cow(lastgettime)];
            case 15:
                cowToken = _d.sent();
                console.log(cowToken);
                return [4 /*yield*/, api('operservice/GetCoin', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,token', { token: cowToken })];
            case 16:
                res = _d.sent();
                if (res.ret === 0)
                    console.log('收牛牛:', res.data.addcoin);
                else
                    console.log('收牛牛:', res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)
                    // 签到
                ];
            case 17:
                _d.sent();
                return [4 /*yield*/, api('queryservice/GetSignInfo', 'activeid,activekey,channel,sceneid')];
            case 18:
                // 签到
                res = _d.sent();
                if (!res.data.signlist) return [3 /*break*/, 23];
                _i = 0, _a = res.data.signlist;
                _d.label = 19;
            case 19:
                if (!(_i < _a.length)) return [3 /*break*/, 22];
                day = _a[_i];
                if (!(day.fortoday && !day.hasdone)) return [3 /*break*/, 21];
                return [4 /*yield*/, api('operservice/GetSignReward', 'channel,currdate,sceneid', { currdate: res.data.currdate })];
            case 20:
                res = _d.sent();
                if (res.ret === 0) {
                    console.log('签到成功!');
                }
                else {
                    console.log(res);
                }
                return [3 /*break*/, 22];
            case 21:
                _i++;
                return [3 /*break*/, 19];
            case 22: return [3 /*break*/, 24];
            case 23:
                console.log('没有获取到签到信息！');
                _d.label = 24;
            case 24: return [4 /*yield*/, api('queryservice/GetVisitBackInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 25:
                // 登录领白菜
                res = _d.sent();
                if (!(res.iscandraw === 1)) return [3 /*break*/, 27];
                return [4 /*yield*/, api('operservice/GetVisitBackCabbage', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 26:
                res = _d.sent();
                if (res.ret === 0) {
                    console.log('登录领白菜：', res.data.drawnum);
                }
                _d.label = 27;
            case 27:
                console.log('任务列表开始');
                j = 0;
                _d.label = 28;
            case 28:
                if (!(j < 30)) return [3 /*break*/, 32];
                return [4 /*yield*/, getTask()];
            case 29:
                if ((_d.sent()) === 0) {
                    return [3 /*break*/, 32];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 30:
                _d.sent();
                _d.label = 31;
            case 31:
                j++;
                return [3 /*break*/, 28];
            case 32:
                console.log('任务列表结束');
                _d.label = 33;
            case 33:
                if (!(coins >= 5000 && food <= 500)) return [3 /*break*/, 36];
                return [4 /*yield*/, api('operservice/Buy', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '1' })];
            case 34:
                res = _d.sent();
                if (res.ret === 0) {
                    console.log('买草成功:', res.data.newnum);
                    coins -= 5000;
                    food += 100;
                }
                else {
                    console.log(res);
                    return [3 /*break*/, 36];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 35:
                _d.sent();
                return [3 /*break*/, 33];
            case 36: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 37:
                _d.sent();
                _d.label = 38;
            case 38:
                if (!(food >= 10)) return [3 /*break*/, 49];
                _d.label = 39;
            case 39:
                _d.trys.push([39, 47, , 48]);
                return [4 /*yield*/, api('operservice/Feed', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 40:
                res = _d.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 41];
                food -= 10;
                console.log('剩余草:', res.data.newnum);
                return [3 /*break*/, 45];
            case 41:
                if (!(res.ret === 2020)) return [3 /*break*/, 44];
                if (!(res.data.maintaskId === 'pause' || res.data.maintaskId === 'E-1')) return [3 /*break*/, 43];
                console.log('收🥚');
                return [4 /*yield*/, api('operservice/GetSelfResult', 'channel,itemid,sceneid,type', { petid: petid, type: '11' })];
            case 42:
                res = _d.sent();
                if (res.ret === 0) {
                    console.log('收🥚成功:', res.data.newnum);
                }
                else {
                    console.log('收🥚失败:', res);
                }
                _d.label = 43;
            case 43: return [3 /*break*/, 45];
            case 44:
                if (res.ret === 2005) {
                    console.log('今天吃撑了');
                    return [3 /*break*/, 49];
                }
                else {
                    console.log('Feed未知错误:', res);
                    return [3 /*break*/, 49];
                }
                _d.label = 45;
            case 45: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 46:
                _d.sent();
                return [3 /*break*/, 48];
            case 47:
                e_3 = _d.sent();
                return [3 /*break*/, 49];
            case 48: return [3 /*break*/, 38];
            case 49: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 50:
                _d.sent();
                _d.label = 51;
            case 51:
                if (!1) return [3 /*break*/, 60];
                _d.label = 52;
            case 52:
                _d.trys.push([52, 58, , 59]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '2' })];
            case 53:
                res = _d.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 60];
                console.log('锄草:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 54:
                _d.sent();
                if (!res.data.surprise) return [3 /*break*/, 57];
                return [4 /*yield*/, api("operservice/GetSelfResult", "activeid,activekey,channel,sceneid,type", { type: '14' })];
            case 55:
                res = _d.sent();
                console.log('锄草奖励:', res.data.prizepool);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 56:
                _d.sent();
                _d.label = 57;
            case 57: return [3 /*break*/, 59];
            case 58:
                e_4 = _d.sent();
                console.log('Error:', e_4);
                return [3 /*break*/, 60];
            case 59: return [3 /*break*/, 51];
            case 60: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 61:
                _d.sent();
                _d.label = 62;
            case 62:
                if (!1) return [3 /*break*/, 68];
                _d.label = 63;
            case 63:
                _d.trys.push([63, 66, , 67]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,petid,sceneid,type', {
                        type: '1',
                        petid: petid
                    })];
            case 64:
                res = _d.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 68];
                console.log('挑逗:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 65:
                _d.sent();
                return [3 /*break*/, 67];
            case 66:
                e_5 = _d.sent();
                console.log('Error:', e_5);
                return [3 /*break*/, 68];
            case 67: return [3 /*break*/, 62];
            case 68:
                i++;
                return [3 /*break*/, 3];
            case 69:
                i = 0;
                _d.label = 70;
            case 70:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 82];
                return [4 /*yield*/, getCodes()];
            case 71:
                _d.sent();
                _d.label = 72;
            case 72:
                _d.trys.push([72, 74, , 75]);
                return [4 /*yield*/, axios_1["default"].get(require('./USER_AGENTS').hwApi + "jxmchb/30", { timeout: 10000 })];
            case 73:
                data = (_d.sent()).data;
                console.log('获取到30个随机红包码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodesHbSelf, true), shareCodesHbHw, true), data.data, true)));
                return [3 /*break*/, 75];
            case 74:
                e_6 = _d.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesHbSelf, true), shareCodesHbHw, true)));
                return [3 /*break*/, 75];
            case 75:
                cookie = cookiesArr[i];
                return [4 /*yield*/, token(cookie)];
            case 76:
                jxToken = _d.sent();
                j = 0;
                _d.label = 77;
            case 77:
                if (!(j < shareCodes.length)) return [3 /*break*/, 81];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B" + shareCodes[j]);
                return [4 /*yield*/, api('operservice/InviteEnroll', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: shareCodes[j] })];
            case 78:
                res = _d.sent();
                if (res.ret === 0) {
                    console.log('成功');
                }
                else if (res.ret === 2711) {
                    console.log('上限');
                    return [3 /*break*/, 81];
                }
                else {
                    console.log('失败：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 79:
                _d.sent();
                _d.label = 80;
            case 80:
                j++;
                return [3 /*break*/, 77];
            case 81:
                i++;
                return [3 /*break*/, 70];
            case 82:
                i = 0;
                _d.label = 83;
            case 83:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 95];
                return [4 /*yield*/, getCodes()];
            case 84:
                _d.sent();
                _d.label = 85;
            case 85:
                _d.trys.push([85, 87, , 88]);
                return [4 /*yield*/, axios_1["default"].get(require('./USER_AGENTS').hwApi + "jxmc/30", { timeout: 10000 })];
            case 86:
                data = (_d.sent()).data;
                console.log('获取到30个随机助力码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true), data.data, true)));
                return [3 /*break*/, 88];
            case 87:
                e_7 = _d.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true)));
                return [3 /*break*/, 88];
            case 88:
                cookie = cookiesArr[i];
                return [4 /*yield*/, token(cookie)];
            case 89:
                jxToken = _d.sent();
                j = 0;
                _d.label = 90;
            case 90:
                if (!(j < shareCodes.length)) return [3 /*break*/, 94];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B" + shareCodes[j]);
                return [4 /*yield*/, api('operservice/EnrollFriend', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: shareCodes[j] })];
            case 91:
                res = _d.sent();
                if (res.ret === 0) {
                    console.log('成功，获得:', res.data.addcoins);
                }
                else {
                    console.log('失败：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 92:
                _d.sent();
                _d.label = 93;
            case 93:
                j++;
                return [3 /*break*/, 90];
            case 94:
                i++;
                return [3 /*break*/, 83];
            case 95: return [2 /*return*/];
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
                                'User-Agent': 'jdpingou;',
                                'Referer': 'https://st.jingxi.com/pingou/jxmc/index.html',
                                'Host': 'm.jingxi.com',
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
                    return [4 /*yield*/, axios_1["default"].get(require('./USER_AGENTS').hwApi + "autoInsert/jxmc?sharecode=" + code + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin, { timeout: 10000 })
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
                    return [4 /*yield*/, axios_1["default"].get(require('./USER_AGENTS').hwApi + "autoInsert/jxmchb?sharecode=" + code + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin, { timeout: 10000 })
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
