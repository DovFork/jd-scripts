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
exports.__esModule = true;
var axios_1 = require("axios");
var ts_md5_1 = require("ts-md5");
var sendNotify_1 = require("./sendNotify");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var V3_1 = require("./utils/V3");
var fs_1 = require("fs");
var token = require('./utils/jd_jxmc.js').token;
var cookie = '', res = '', shareCodes = [], homePageInfo = '', jxToken = '', UserName = '', ua = null, account = [];
var shareCodesSelf = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, _c, account_1, acc, lastgettime, food, petid, coins, petNum, petids, e_1, drawTimes, j, _d, _e, card, e_2, _f, _g, day, j, _h, _j, t, j, e_3, j, e_4;
    var _k, _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                if ((0, fs_1.existsSync)('./utils/account.json')) {
                    try {
                        account = JSON.parse((0, fs_1.readFileSync)('./utils/account.json').toString());
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
                return [4 /*yield*/, (0, V3_1.requestAlgo)('00df8', 'jdpingou;')];
            case 1:
                _m.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _m.sent();
                _i = 0, _a = cookiesArr.entries();
                _m.label = 3;
            case 3:
                if (!(_i < _a.length)) return [3 /*break*/, 83];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                ua = null;
                for (_c = 0, account_1 = account; _c < account_1.length; _c++) {
                    acc = account_1[_c];
                    if (acc === null || acc === void 0 ? void 0 : acc.pt_pin.includes(UserName)) {
                        ua = acc.jdpingou;
                        break;
                    }
                }
                return [4 /*yield*/, token(cookie)];
            case 4:
                jxToken = _m.sent();
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', { isgift: 1, isquerypicksite: 1, isqueryinviteicon: 1 })];
            case 5:
                homePageInfo = _m.sent();
                lastgettime = void 0;
                if ((_l = (_k = homePageInfo.data) === null || _k === void 0 ? void 0 : _k.cow) === null || _l === void 0 ? void 0 : _l.lastgettime) {
                    lastgettime = homePageInfo.data.cow.lastgettime;
                }
                else {
                    return [3 /*break*/, 82];
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
                    return [3 /*break*/, 82];
                }
                console.log('助力码:', homePageInfo.data.sharekey);
                shareCodesSelf.push(homePageInfo.data.sharekey);
                _m.label = 6;
            case 6:
                _m.trys.push([6, 8, , 9]);
                return [4 /*yield*/, makeShareCodes(homePageInfo.data.sharekey)];
            case 7:
                _m.sent();
                return [3 /*break*/, 9];
            case 8:
                e_1 = _m.sent();
                console.log("提交助力码出错");
                return [3 /*break*/, 9];
            case 9:
                console.log('草草🌿', food);
                console.log('蛋蛋🥚', homePageInfo.data.eggcnt);
                console.log('钱钱💰', coins);
                console.log('鸡鸡🐔', petNum);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)
                    // 扭蛋机
                ];
            case 10:
                _m.sent();
                return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 11:
                // 扭蛋机
                res = _m.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 12:
                _m.sent();
                drawTimes = res.data.times;
                if (!(typeof drawTimes === "undefined")) return [3 /*break*/, 14];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)("牧场扭蛋机错误", "\u8D26\u53F7".concat(index + 1, " ").concat(UserName, "\n\u624B\u52A8\u5EFA\u9020\u626D\u86CB\u673A"))];
            case 13:
                _m.sent();
                return [3 /*break*/, 20];
            case 14:
                console.log('扭蛋机剩余次数:', drawTimes);
                j = 0;
                _m.label = 15;
            case 15:
                if (!(j < drawTimes)) return [3 /*break*/, 20];
                return [4 /*yield*/, api('operservice/DrawCard', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 16:
                res = _m.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 18];
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
            case 17:
                _m.sent();
                return [3 /*break*/, 19];
            case 18:
                console.log('抽奖失败:', res);
                return [3 /*break*/, 20];
            case 19:
                j++;
                return [3 /*break*/, 15];
            case 20: return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 21:
                res = _m.sent();
                _m.label = 22;
            case 22:
                _m.trys.push([22, 28, , 29]);
                _d = 0, _e = res.data.cardinfo;
                _m.label = 23;
            case 23:
                if (!(_d < _e.length)) return [3 /*break*/, 27];
                card = _e[_d];
                console.log("card ".concat(card.cardtype), card.currnum, '/', card.neednum);
                if (!(card.currnum >= card.neednum && petNum < 6)) return [3 /*break*/, 26];
                console.log('可以兑换');
                return [4 /*yield*/, api('operservice/Combine', 'activeid,activekey,cardtype,channel,jxmc_jstoken,phoneid,sceneid,timestamp', { cardtype: card.cardtype })];
            case 24:
                res = _m.sent();
                res.ret === 0 ? console.log('兑换成功') : '';
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 25:
                _m.sent();
                _m.label = 26;
            case 26:
                _d++;
                return [3 /*break*/, 23];
            case 27: return [3 /*break*/, 29];
            case 28:
                e_2 = _m.sent();
                return [3 /*break*/, 29];
            case 29: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 签到
            ];
            case 30:
                _m.sent();
                return [4 /*yield*/, api('queryservice/GetSignInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 31:
                // 签到
                res = _m.sent();
                if (!res.data.signlist) return [3 /*break*/, 36];
                _f = 0, _g = res.data.signlist;
                _m.label = 32;
            case 32:
                if (!(_f < _g.length)) return [3 /*break*/, 35];
                day = _g[_f];
                if (!(day.fortoday && !day.hasdone)) return [3 /*break*/, 34];
                return [4 /*yield*/, api('operservice/GetSignReward', 'channel,currdate,sceneid', { currdate: res.data.currdate })];
            case 33:
                res = _m.sent();
                if (res.ret === 0) {
                    console.log('签到成功!');
                }
                else {
                    console.log(res);
                }
                return [3 /*break*/, 35];
            case 34:
                _f++;
                return [3 /*break*/, 32];
            case 35: return [3 /*break*/, 37];
            case 36:
                console.log('没有获取到签到信息！');
                _m.label = 37;
            case 37: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 登录领白菜
            ];
            case 38:
                _m.sent();
                return [4 /*yield*/, api('queryservice/GetVisitBackInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 39:
                // 登录领白菜
                res = _m.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 40:
                _m.sent();
                if (!(res.data.iscandraw === 1)) return [3 /*break*/, 42];
                return [4 /*yield*/, api('operservice/GetVisitBackCabbage', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 41:
                res = _m.sent();
                if (res.ret === 0) {
                    console.log('登录领白菜:', res.data.drawnum);
                }
                _m.label = 42;
            case 42: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 43:
                _m.sent();
                console.log('任务列表开始');
                j = 0;
                _m.label = 44;
            case 44:
                if (!(j < 30)) return [3 /*break*/, 48];
                return [4 /*yield*/, getTask()];
            case 45:
                if ((_m.sent()) === 0) {
                    return [3 /*break*/, 48];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 46:
                _m.sent();
                _m.label = 47;
            case 47:
                j++;
                return [3 /*break*/, 44];
            case 48:
                console.log('任务列表结束');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 49:
                _m.sent();
                _m.label = 50;
            case 50:
                if (!(coins >= 5000 && food <= 500)) return [3 /*break*/, 53];
                return [4 /*yield*/, api('operservice/Buy', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '1' })];
            case 51:
                res = _m.sent();
                if (res.ret === 0) {
                    console.log('买草成功:', res.data.newnum);
                    coins -= 5000;
                    food += 100;
                }
                else {
                    console.log(res);
                    return [3 /*break*/, 53];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 52:
                _m.sent();
                return [3 /*break*/, 50];
            case 53: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 54:
                _m.sent();
                _m.label = 55;
            case 55:
                if (!(food >= 10)) return [3 /*break*/, 63];
                food -= 10;
                return [4 /*yield*/, api('operservice/Feed', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 56:
                res = _m.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 57];
                console.log('喂食:', res.data.newnum);
                return [3 /*break*/, 61];
            case 57:
                if (!(res.ret === 2020)) return [3 /*break*/, 60];
                console.log('收🥚');
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', {
                        isgift: 1,
                        isquerypicksite: 1,
                        isqueryinviteicon: 1
                    })];
            case 58:
                homePageInfo = _m.sent();
                for (_h = 0, _j = homePageInfo.data.petinfo; _h < _j.length; _h++) {
                    t = _j[_h];
                    if (t.cangetborn === 1) {
                        petid = t.petid;
                        break;
                    }
                }
                return [4 /*yield*/, api('operservice/GetSelfResult', 'activeid,activekey,channel,itemid,jxmc_jstoken,phoneid,sceneid,timestamp,type', { itemid: petid, type: '11' })];
            case 59:
                res = _m.sent();
                if (res.ret === 0) {
                    console.log('收🥚成功:', res.data.newnum);
                }
                else {
                    console.log('收🥚失败:', res);
                    return [3 /*break*/, 63];
                }
                return [3 /*break*/, 61];
            case 60:
                if (res.ret === 2005) {
                    console.log('今天吃撑了');
                    return [3 /*break*/, 63];
                }
                else {
                    console.log('Feed未知错误:', res);
                    return [3 /*break*/, 63];
                }
                _m.label = 61;
            case 61: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 62:
                _m.sent();
                return [3 /*break*/, 55];
            case 63: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 64:
                _m.sent();
                console.log('除草...start');
                j = 0;
                _m.label = 65;
            case 65:
                if (!(j < 30)) return [3 /*break*/, 74];
                _m.label = 66;
            case 66:
                _m.trys.push([66, 72, , 73]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '2' })];
            case 67:
                res = _m.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 74];
                console.log('锄草:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 68:
                _m.sent();
                if (!res.data.surprise) return [3 /*break*/, 71];
                return [4 /*yield*/, api("operservice/GetSelfResult", "activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type", { type: '14', itemid: 'undefined' })];
            case 69:
                res = _m.sent();
                console.log('锄草奖励:', res.data.prizepool);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 70:
                _m.sent();
                _m.label = 71;
            case 71: return [3 /*break*/, 73];
            case 72:
                e_3 = _m.sent();
                console.log('除草 Error');
                return [3 /*break*/, 74];
            case 73:
                j++;
                return [3 /*break*/, 65];
            case 74: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 75:
                _m.sent();
                j = 0;
                _m.label = 76;
            case 76:
                if (!(j < 30)) return [3 /*break*/, 82];
                _m.label = 77;
            case 77:
                _m.trys.push([77, 80, , 81]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,petid,phoneid,sceneid,timestamp,type', { type: '1', petid: petids[Math.floor((Math.random() * petids.length))] })];
            case 78:
                res = _m.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 82];
                console.log('挑逗:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 79:
                _m.sent();
                return [3 /*break*/, 81];
            case 80:
                e_4 = _m.sent();
                console.log('挑逗 Error');
                return [3 /*break*/, 82];
            case 81:
                j++;
                return [3 /*break*/, 76];
            case 82:
                _i++;
                return [3 /*break*/, 3];
            case 83: return [2 /*return*/];
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
        var url, t, _i, _a, _b, key, value, h5st, data, e_5;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    t = [
                        { key: 'activeid', value: 'jxmc_active_0001' },
                        { key: 'activekey', value: 'null' },
                        { key: 'channel', value: '7' },
                        { key: 'jxmc_jstoken', value: jxToken['farm_jstoken'] },
                        { key: 'phoneid', value: jxToken['phoneid'] },
                        { key: 'sceneid', value: '1001' },
                        { key: 'timestamp', value: jxToken['timestamp'] },
                    ];
                    if (['GetUserTaskStatusList', 'DoTask', 'Award'].indexOf(fn) > -1)
                        url = "https://m.jingxi.com/newtasksys/newtasksys_front/".concat(fn, "?_=").concat(Date.now(), "&source=jxmc&bizCode=jxmc&_stk=").concat(encodeURIComponent(stk), "&_ste=1&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls");
                    else
                        url = "https://m.jingxi.com/jxmc/".concat(fn, "?channel=7&sceneid=1001&activeid=jxmc_active_0001&activekey=null&jxmc_jstoken=").concat(jxToken['farm_jstoken'], "&timestamp=").concat(jxToken['timestamp'], "&phoneid=").concat(jxToken['phoneid'], "&_stk=").concat(encodeURIComponent(stk), "&_ste=1&_=").concat(Date.now(), "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls");
                    for (_i = 0, _a = Object.entries(params); _i < _a.length; _i++) {
                        _b = _a[_i], key = _b[0], value = _b[1];
                        t.push({ key: key, value: value });
                        url += "&".concat(key, "=").concat(value);
                    }
                    h5st = (0, V3_1.geth5st)(t, '00df8');
                    url += "&h5st=".concat(encodeURIComponent(h5st));
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'Accept': '*/*',
                                'User-Agent': ua !== null && ua !== void 0 ? ua : 'jdpingou;',
                                'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                                'Referer': 'https://st.jingxi.com/',
                                'Cookie': cookie
                            }
                        })];
                case 2:
                    data = (_c.sent()).data;
                    return [2 /*return*/, JSON.parse(data.match(/jsonpCBK.?\((.*)/)[1])];
                case 3:
                    e_5 = _c.sent();
                    (0, TS_USER_AGENTS_1.o2s)(e_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function makeShareCodes(code) {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_6;
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
                    e_6 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_6);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
