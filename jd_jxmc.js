"use strict";
/**
 * 京喜牧场
 * 买、喂、收蛋、锄草、挑逗
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
var A = require('./utils/jd_jxmcToken');
var cookie = '', res = '', shareCodes = [], homePageInfo, activeid = '', jxToken, UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, lastgettime, food, petid, coins, e_1, _i, _a, day, e_2, e_3, e_4, data, e_5, i, j;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _d.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _d.sent();
                i = 0;
                _d.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 54];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                jxToken = (0, TS_USER_AGENTS_1.getJxToken)(cookie);
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isquerypicksite,sceneid', {
                        isgift: 0,
                        isquerypicksite: 0
                    })];
            case 4:
                homePageInfo = _d.sent();
                activeid = homePageInfo.data.activeid;
                lastgettime = void 0;
                if ((_c = (_b = homePageInfo.data) === null || _b === void 0 ? void 0 : _b.cow) === null || _c === void 0 ? void 0 : _c.lastgettime) {
                    lastgettime = homePageInfo.data.cow.lastgettime;
                }
                else {
                    return [3 /*break*/, 53];
                }
                food = 0;
                try {
                    food = homePageInfo.data.materialinfo[0].value;
                }
                catch (e) {
                    console.log('未开通？黑号？');
                    return [3 /*break*/, 53];
                }
                petid = homePageInfo.data.petinfo[0].petid;
                coins = homePageInfo.data.coins;
                console.log('助力码:', homePageInfo.data.sharekey);
                shareCodes.push(homePageInfo.data.sharekey);
                _d.label = 5;
            case 5:
                _d.trys.push([5, 7, , 8]);
                return [4 /*yield*/, makeShareCodes(homePageInfo.data.sharekey)];
            case 6:
                _d.sent();
                return [3 /*break*/, 8];
            case 7:
                e_1 = _d.sent();
                console.log(e_1);
                return [3 /*break*/, 8];
            case 8:
                console.log('现有草:', food);
                console.log('金币:', coins);
                return [4 /*yield*/, api('operservice/GetCoin', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,token', { token: A(lastgettime) })];
            case 9:
                // 收牛牛
                res = _d.sent();
                if (res.ret === 0)
                    console.log('收牛牛:', res.data.addcoin);
                return [4 /*yield*/, api('queryservice/GetSignInfo', 'activeid,activekey,channel,sceneid')];
            case 10:
                // 签到
                res = _d.sent();
                if (!res.data.signlist) return [3 /*break*/, 15];
                _i = 0, _a = res.data.signlist;
                _d.label = 11;
            case 11:
                if (!(_i < _a.length)) return [3 /*break*/, 14];
                day = _a[_i];
                if (!(day.fortoday && !day.hasdone)) return [3 /*break*/, 13];
                return [4 /*yield*/, api('operservice/GetSignReward', 'channel,currdate,sceneid', { currdate: res.data.currdate })];
            case 12:
                res = _d.sent();
                if (res.ret === 0) {
                    console.log('签到成功!');
                }
                else {
                    console.log(res);
                }
                return [3 /*break*/, 14];
            case 13:
                _i++;
                return [3 /*break*/, 11];
            case 14: return [3 /*break*/, 16];
            case 15:
                console.log('没有获取到签到信息！');
                _d.label = 16;
            case 16:
                console.log('开始任务列表');
                return [4 /*yield*/, getTask()];
            case 17:
                _d.sent();
                console.log('结束任务列表');
                _d.label = 18;
            case 18:
                if (!(coins >= 5000 && food <= 500)) return [3 /*break*/, 21];
                return [4 /*yield*/, api('operservice/Buy', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '1' })];
            case 19:
                res = _d.sent();
                if (res.ret === 0) {
                    console.log('买草成功:', res.data.newnum);
                    coins -= 5000;
                    food += 100;
                }
                else {
                    console.log(res);
                    return [3 /*break*/, 21];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 20:
                _d.sent();
                return [3 /*break*/, 18];
            case 21: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 22:
                _d.sent();
                _d.label = 23;
            case 23:
                if (!(food >= 10)) return [3 /*break*/, 34];
                _d.label = 24;
            case 24:
                _d.trys.push([24, 32, , 33]);
                return [4 /*yield*/, api('operservice/Feed', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 25:
                res = _d.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 26];
                food -= 10;
                console.log('剩余草:', res.data.newnum);
                return [3 /*break*/, 30];
            case 26:
                if (!(res.ret === 2020)) return [3 /*break*/, 29];
                if (!(res.data.maintaskId === 'pause')) return [3 /*break*/, 28];
                console.log('收🥚');
                return [4 /*yield*/, api('operservice/GetSelfResult', 'channel,itemid,sceneid,type', { petid: petid, type: '11' })];
            case 27:
                res = _d.sent();
                if (res.ret === 0) {
                    console.log('收🥚成功:', res.data.newnum);
                }
                _d.label = 28;
            case 28: return [3 /*break*/, 30];
            case 29:
                console.log(res);
                return [3 /*break*/, 34];
            case 30: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 31:
                _d.sent();
                return [3 /*break*/, 33];
            case 32:
                e_2 = _d.sent();
                return [3 /*break*/, 34];
            case 33: return [3 /*break*/, 23];
            case 34: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 35:
                _d.sent();
                _d.label = 36;
            case 36:
                if (!1) return [3 /*break*/, 45];
                _d.label = 37;
            case 37:
                _d.trys.push([37, 43, , 44]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '2' })];
            case 38:
                res = _d.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 45];
                console.log('锄草:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 39:
                _d.sent();
                if (!res.data.surprise) return [3 /*break*/, 42];
                return [4 /*yield*/, api("operservice/GetSelfResult", "activeid,activekey,channel,sceneid,type", { type: '14' })];
            case 40:
                res = _d.sent();
                console.log('锄草奖励:', res.data.prizepool);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 41:
                _d.sent();
                _d.label = 42;
            case 42: return [3 /*break*/, 44];
            case 43:
                e_3 = _d.sent();
                console.log('Error:', e_3);
                return [3 /*break*/, 45];
            case 44: return [3 /*break*/, 36];
            case 45: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 46:
                _d.sent();
                _d.label = 47;
            case 47:
                if (!1) return [3 /*break*/, 53];
                _d.label = 48;
            case 48:
                _d.trys.push([48, 51, , 52]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,petid,sceneid,type', {
                        type: '1',
                        petid: petid
                    })];
            case 49:
                res = _d.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 53];
                console.log('挑逗:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 50:
                _d.sent();
                return [3 /*break*/, 52];
            case 51:
                e_4 = _d.sent();
                console.log('Error:', e_4);
                return [3 /*break*/, 53];
            case 52: return [3 /*break*/, 47];
            case 53:
                i++;
                return [3 /*break*/, 3];
            case 54:
                _d.trys.push([54, 56, , 57]);
                return [4 /*yield*/, axios_1["default"].get('https://api.sharecode.ga/api/jxmc/30', { timeout: 10000 })];
            case 55:
                data = (_d.sent()).data;
                console.log('获取到30个随机助力码:', data.data);
                shareCodes = __spreadArray(__spreadArray([], shareCodes, true), data.data, true);
                return [3 /*break*/, 57];
            case 56:
                e_5 = _d.sent();
                console.log('获取助力池失败');
                return [3 /*break*/, 57];
            case 57:
                i = 0;
                _d.label = 58;
            case 58:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 64];
                cookie = cookiesArr[i];
                j = 0;
                _d.label = 59;
            case 59:
                if (!(j < shareCodes.length)) return [3 /*break*/, 63];
                if (!(i !== j)) return [3 /*break*/, 62];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B" + shareCodes[j]);
                return [4 /*yield*/, api('operservice/EnrollFriend', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: shareCodes[j] })];
            case 60:
                res = _d.sent();
                if (res.ret === 0) {
                    console.log('助力成功，获得:', res.data.addcoins);
                }
                else {
                    console.log('助力失败：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 61:
                _d.sent();
                _d.label = 62;
            case 62:
                j++;
                return [3 /*break*/, 59];
            case 63:
                i++;
                return [3 /*break*/, 58];
            case 64: return [2 /*return*/];
        }
    });
}); })();
function getTask() {
    return __awaiter(this, void 0, void 0, function () {
        var tasks, _i, _a, t, awardCoin;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, api('GetUserTaskStatusList', 'bizCode,dateType,source')];
                case 1:
                    tasks = _b.sent();
                    _i = 0, _a = tasks.data.userTaskStatusList;
                    _b.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 11];
                    t = _a[_i];
                    if (!(t.completedTimes == t.targetTimes && t.awardStatus === 2)) return [3 /*break*/, 6];
                    return [4 /*yield*/, api('Award', 'bizCode,source,taskId', { taskId: t.taskId })];
                case 3:
                    res = _b.sent();
                    if (!(res.ret === 0)) return [3 /*break*/, 6];
                    awardCoin = res.data.prizeInfo.match(/:(.*)}/)[1] * 1;
                    console.log('领奖成功:', awardCoin);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, getTask()];
                case 5:
                    _b.sent();
                    _b.label = 6;
                case 6:
                    if (!(t.dateType === 2 && t.completedTimes < t.targetTimes && t.awardStatus === 2 && t.taskType === 2)) return [3 /*break*/, 10];
                    return [4 /*yield*/, api('DoTask', 'bizCode,configExtra,source,taskId', { taskId: t.taskId, configExtra: '' })];
                case 7:
                    res = _b.sent();
                    if (!(res.ret === 0)) return [3 /*break*/, 10];
                    console.log('任务完成');
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
                case 8:
                    _b.sent();
                    return [4 /*yield*/, getTask()];
                case 9:
                    _b.sent();
                    _b.label = 10;
                case 10:
                    _i++;
                    return [3 /*break*/, 2];
                case 11: return [2 /*return*/];
            }
        });
    });
}
function api(fn, stk, params) {
    if (params === void 0) { params = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var url, data, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = '';
                    if (['GetUserTaskStatusList', 'DoTask', 'Award'].indexOf(fn) > -1)
                        url = "https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?_=" + Date.now() + "&source=jxmc&bizCode=jxmc&_ste=1&sceneval=2&_stk=" + encodeURIComponent(stk);
                    else
                        url = "https://m.jingxi.com/jxmc/" + fn + "?channel=7&sceneid=1001&activeid=" + activeid + "&activekey=null&jxmc_jstoken=" + jxToken.strPgUUNum + "&timestamp=" + Date.now() + "&phoneid=" + jxToken.strPhoneID + "&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2";
                    url = (0, TS_USER_AGENTS_1.h5st)(url, stk, params);
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
                    return [2 /*return*/, data];
                case 3:
                    e_6 = _a.sent();
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
