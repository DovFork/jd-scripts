"use strict";
/**
 * 京喜牧场
 * 买、喂、收蛋、锄草、挑逗
 * export HELP_HW=true     // 默认帮助HelloWorld
 * export HELP_POOL=true   // 默认帮助助力池
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
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var ts_md5_1 = require("ts-md5");
var fs_1 = require("fs");
var notify = require('./sendNotify');
var A;
try {
    (0, fs_1.accessSync)('./tools/jd_jxmcToken.js');
    A = require('./tools/jd_jxmcToken');
}
catch (e) {
    A = require('./jd_jxmcToken');
}
var cookie = '', res = '', shareCodes = [], homePageInfo, activeid = '', jxToken, UserName, index;
var HELP_HW = process.env.HELP_HW ? process.env.HELP_HW : "true";
console.log('帮助HelloWorld:', HELP_HW);
var HELP_POOL = process.env.HELP_POOL ? process.env.HELP_POOL : "true";
console.log('帮助助力池:', HELP_POOL);
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, _a, isLogin, nickName, lastgettime, food, petid, coins, e_1, _i, _b, day, taskRetCode, e_2, e_3, e_4, data, e_5, i, j;
    var _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _e.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _e.sent();
                i = 0;
                _e.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 59];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.TotalBean)(cookie)];
            case 4:
                _a = _e.sent(), isLogin = _a.isLogin, nickName = _a.nickName;
                if (!isLogin) {
                    notify.sendNotify(__filename.split('/').pop(), "cookie\u5DF2\u5931\u6548\n\u4EAC\u4E1C\u8D26\u53F7" + index + ":" + (nickName || UserName));
                    return [3 /*break*/, 58];
                }
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + (nickName || UserName) + "\n");
                jxToken = (0, TS_USER_AGENTS_1.getJxToken)(cookie);
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isquerypicksite,sceneid', { isgift: 0, isquerypicksite: 0 })];
            case 5:
                homePageInfo = _e.sent();
                activeid = homePageInfo.data.activeid;
                lastgettime = void 0;
                if ((_d = (_c = homePageInfo.data) === null || _c === void 0 ? void 0 : _c.cow) === null || _d === void 0 ? void 0 : _d.lastgettime) {
                    lastgettime = homePageInfo.data.cow.lastgettime;
                }
                else {
                    return [3 /*break*/, 58];
                }
                food = 0;
                try {
                    food = homePageInfo.data.materialinfo[0].value;
                }
                catch (e) {
                    console.log('未开通？黑号？');
                    return [3 /*break*/, 58];
                }
                petid = homePageInfo.data.petinfo[0].petid;
                coins = homePageInfo.data.coins;
                console.log('助力码:', homePageInfo.data.sharekey);
                shareCodes.push(homePageInfo.data.sharekey);
                _e.label = 6;
            case 6:
                _e.trys.push([6, 8, , 9]);
                return [4 /*yield*/, makeShareCodes(homePageInfo.data.sharekey)];
            case 7:
                _e.sent();
                return [3 /*break*/, 9];
            case 8:
                e_1 = _e.sent();
                console.log(e_1);
                return [3 /*break*/, 9];
            case 9:
                console.log('现有草:', food);
                console.log('金币:', coins);
                return [4 /*yield*/, api('operservice/GetCoin', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,token', { token: A(lastgettime) })];
            case 10:
                // 收牛牛
                res = _e.sent();
                if (res.ret === 0)
                    console.log('收牛牛:', res.data.addcoin);
                return [4 /*yield*/, api('queryservice/GetSignInfo', 'activeid,activekey,channel,sceneid')];
            case 11:
                // 签到
                res = _e.sent();
                if (!res.data.signlist) return [3 /*break*/, 16];
                _i = 0, _b = res.data.signlist;
                _e.label = 12;
            case 12:
                if (!(_i < _b.length)) return [3 /*break*/, 15];
                day = _b[_i];
                if (!(day.fortoday && !day.hasdone)) return [3 /*break*/, 14];
                return [4 /*yield*/, api('operservice/GetSignReward', 'channel,currdate,sceneid', { currdate: res.data.currdate })];
            case 13:
                res = _e.sent();
                if (res.ret === 0) {
                    console.log('签到成功!');
                }
                else {
                    console.log(res);
                }
                return [3 /*break*/, 15];
            case 14:
                _i++;
                return [3 /*break*/, 12];
            case 15: return [3 /*break*/, 17];
            case 16:
                console.log('没有获取到签到信息！');
                _e.label = 17;
            case 17:
                taskRetCode = 0;
                _e.label = 18;
            case 18:
                if (!(taskRetCode === 0)) return [3 /*break*/, 23];
                return [4 /*yield*/, getTask()];
            case 19:
                taskRetCode = _e.sent();
                console.log('taskRetCode:', taskRetCode);
                if (!(taskRetCode === 0)) return [3 /*break*/, 21];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 20:
                _e.sent();
                return [3 /*break*/, 22];
            case 21: return [3 /*break*/, 23];
            case 22: return [3 /*break*/, 18];
            case 23:
                if (!(coins >= 5000 && food <= 500)) return [3 /*break*/, 26];
                return [4 /*yield*/, api('operservice/Buy', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '1' })];
            case 24:
                res = _e.sent();
                if (res.ret === 0) {
                    console.log('买草成功:', res.data.newnum);
                    coins -= 5000;
                    food += 100;
                }
                else {
                    console.log(res);
                    return [3 /*break*/, 26];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 25:
                _e.sent();
                return [3 /*break*/, 23];
            case 26: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 27:
                _e.sent();
                _e.label = 28;
            case 28:
                if (!(food >= 10)) return [3 /*break*/, 39];
                _e.label = 29;
            case 29:
                _e.trys.push([29, 37, , 38]);
                return [4 /*yield*/, api('operservice/Feed', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 30:
                res = _e.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 31];
                food -= 10;
                console.log('剩余草:', res.data.newnum);
                return [3 /*break*/, 35];
            case 31:
                if (!(res.ret === 2020)) return [3 /*break*/, 34];
                if (!(res.data.maintaskId === 'pause')) return [3 /*break*/, 33];
                console.log('收🥚');
                return [4 /*yield*/, api('operservice/GetSelfResult', 'channel,itemid,sceneid,type', { petid: petid, type: '11' })];
            case 32:
                res = _e.sent();
                if (res.ret === 0) {
                    console.log('收🥚成功:', res.data.newnum);
                }
                _e.label = 33;
            case 33: return [3 /*break*/, 35];
            case 34:
                console.log(res);
                return [3 /*break*/, 39];
            case 35: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 36:
                _e.sent();
                return [3 /*break*/, 38];
            case 37:
                e_2 = _e.sent();
                return [3 /*break*/, 39];
            case 38: return [3 /*break*/, 28];
            case 39: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 40:
                _e.sent();
                _e.label = 41;
            case 41:
                if (!1) return [3 /*break*/, 50];
                _e.label = 42;
            case 42:
                _e.trys.push([42, 48, , 49]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '2' })];
            case 43:
                res = _e.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 50];
                console.log('锄草:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 44:
                _e.sent();
                if (!res.data.surprise) return [3 /*break*/, 47];
                return [4 /*yield*/, api("operservice/GetSelfResult", "activeid,activekey,channel,sceneid,type", { type: '14' })];
            case 45:
                res = _e.sent();
                console.log('锄草奖励:', res.data.prizepool);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 46:
                _e.sent();
                _e.label = 47;
            case 47: return [3 /*break*/, 49];
            case 48:
                e_3 = _e.sent();
                console.log('Error:', e_3);
                return [3 /*break*/, 50];
            case 49: return [3 /*break*/, 41];
            case 50: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 51:
                _e.sent();
                _e.label = 52;
            case 52:
                if (!1) return [3 /*break*/, 58];
                _e.label = 53;
            case 53:
                _e.trys.push([53, 56, , 57]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,petid,sceneid,type', { type: '1', petid: petid })];
            case 54:
                res = _e.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 58];
                console.log('挑逗:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 55:
                _e.sent();
                return [3 /*break*/, 57];
            case 56:
                e_4 = _e.sent();
                console.log('Error:', e_4);
                return [3 /*break*/, 58];
            case 57: return [3 /*break*/, 52];
            case 58:
                i++;
                return [3 /*break*/, 3];
            case 59:
                if (!(HELP_POOL === 'true')) return [3 /*break*/, 64];
                _e.label = 60;
            case 60:
                _e.trys.push([60, 62, , 63]);
                return [4 /*yield*/, axios_1["default"].get('https://api.sharecode.ga/api/jxmc/6', { timeout: 10000 })];
            case 61:
                data = (_e.sent()).data;
                console.log('获取到20个随机助力码:', data.data);
                shareCodes = __spreadArray(__spreadArray([], shareCodes, true), data.data, true);
                return [3 /*break*/, 63];
            case 62:
                e_5 = _e.sent();
                console.log('获取助力池失败');
                return [3 /*break*/, 63];
            case 63: return [3 /*break*/, 65];
            case 64:
                console.log('你的设置是不帮助助力池！');
                _e.label = 65;
            case 65:
                i = 0;
                _e.label = 66;
            case 66:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 72];
                cookie = cookiesArr[i];
                j = 0;
                _e.label = 67;
            case 67:
                if (!(j < shareCodes.length)) return [3 /*break*/, 71];
                if (!(i !== j)) return [3 /*break*/, 70];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B" + shareCodes[j]);
                return [4 /*yield*/, api('operservice/EnrollFriend', 'channel,sceneid,sharekey', { sharekey: shareCodes[j] })];
            case 68:
                res = _e.sent();
                if (res.ret === 0) {
                    console.log('助力成功，获得:', res.data.addcoins);
                }
                else {
                    console.log('助力失败：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 69:
                _e.sent();
                _e.label = 70;
            case 70:
                j++;
                return [3 /*break*/, 67];
            case 71:
                i++;
                return [3 /*break*/, 66];
            case 72: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    var _this = this;
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var url, key, data, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/jxmc/" + fn + "?channel=7&sceneid=1001&activeid=" + activeid + "&activekey=null&jxmc_jstoken=" + jxToken.strPgUUNum + "&timestamp=" + Date.now() + "&phoneid=" + jxToken.strPhoneID + "&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2";
                    if (Object.keys(params).length !== 0) {
                        key = void 0;
                        for (key in params) {
                            if (params.hasOwnProperty(key))
                                url += "&" + key + "=" + params[key];
                        }
                    }
                    url += '&h5st=' + (0, TS_USER_AGENTS_1.decrypt)(stk, url);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Cookie': cookie,
                                'Host': 'm.jingxi.com',
                                'User-Agent': 'jdpingou;iPhone;4.11.0;12.4.1;52cf225f0c463b69e1e36b11783074f9a7d9cbf0;network/wifi;model/iPhone11,6;appBuild/100591;ADID/C51FD279-5C69-4F94-B1C5-890BC8EB501F;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/503;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                                'Referer': 'https://st.jingxi.com/'
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    resolve(data);
                    return [3 /*break*/, 4];
                case 3:
                    e_6 = _a.sent();
                    reject(401);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
function getTask() {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var tasks, doTaskRes, _i, _a, t, awardCoin;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, taskAPI('GetUserTaskStatusList', 'bizCode,dateType,source')];
                case 1:
                    tasks = _b.sent();
                    doTaskRes = { ret: 1 };
                    _i = 0, _a = tasks.data.userTaskStatusList;
                    _b.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 9];
                    t = _a[_i];
                    if (!((t.dateType === 1 || t.dateType === 2) && t.completedTimes == t.targetTimes && t.awardStatus === 2)) return [3 /*break*/, 5];
                    // 成就任务
                    t.dateType === 1
                        ?
                            console.log('成就任务可领取:', t.taskName, t.completedTimes, t.targetTimes)
                        :
                            console.log('每日任务可领取:', t.taskName, t.completedTimes, t.targetTimes);
                    return [4 /*yield*/, taskAPI('Award', 'bizCode,source,taskId', { taskId: t.taskId })];
                case 3:
                    doTaskRes = _b.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
                case 4:
                    _b.sent();
                    if (doTaskRes.ret === 0) {
                        awardCoin = doTaskRes['data']['prizeInfo'].match(/:(.*)}/)[1] * 1;
                        console.log('领奖成功:', awardCoin);
                    }
                    _b.label = 5;
                case 5:
                    if (!(t.dateType === 2 && t.completedTimes < t.targetTimes && t.awardStatus === 2 && t.taskType === 2)) return [3 /*break*/, 8];
                    console.log('可做每日任务:', t.taskName, t.taskId);
                    return [4 /*yield*/, taskAPI('DoTask', 'bizCode,configExtra,source,taskId', { taskId: t.taskId, configExtra: '' })];
                case 6:
                    doTaskRes = _b.sent();
                    if (!(doTaskRes.ret === 0)) return [3 /*break*/, 8];
                    console.log('任务完成');
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    _i++;
                    return [3 /*break*/, 2];
                case 9:
                    resolve(doTaskRes.ret);
                    return [2 /*return*/];
            }
        });
    }); });
}
function taskAPI(fn, stk, params) {
    var _this = this;
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var url, key, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?_=" + Date.now() + "&source=jxmc&bizCode=jxmc&_ste=1&sceneval=2&_stk=" + encodeURIComponent(stk) + "&g_login_type=1&g_ty=ajax";
                    if (Object.keys(params).length !== 0) {
                        key = void 0;
                        for (key in params) {
                            if (params.hasOwnProperty(key))
                                url += "&" + key + "=" + params[key];
                        }
                    }
                    url += '&h5st=' + (0, TS_USER_AGENTS_1.decrypt)(stk, url);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Origin': 'https://st.jingxi.com',
                                'Accept-Language': 'zh-cn',
                                'Connection': 'keep-alive',
                                'Host': 'm.jingxi.com',
                                'Referer': 'https://st.jingxi.com/pingou/jxmc/index.html?nativeConfig=%7B%22immersion%22%3A1%2C%22toColor%22%3A%22%23e62e0f%22%7D&__mcwvt=sjcp&PTAG=139279.13.31&jxsid=16257474246337594063',
                                'Accept': 'application/json',
                                'User-Agent': 'jdpingou;iPhone;4.11.0;12.4.1;52cf225f0c463b69e1e36b11783074f9a7d9cbf0;network/wifi;model/iPhone11,6;appBuild/100591;ADID/C51FD279-5C69-4F94-B1C5-890BC8EB501F;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/503;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    resolve(data);
                    return [2 /*return*/];
            }
        });
    }); });
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
                    return [4 /*yield*/, axios_1["default"].get("https://api.sharecode.ga/api/autoInsert?db=jxmc&code=" + code + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin, { timeout: 10000 })
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
