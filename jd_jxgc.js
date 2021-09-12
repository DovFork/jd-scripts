"use strict";
/**
* TODO
* 团
*
* cron: 30 * * * *
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
var date_fns_1 = require("date-fns");
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, productionId, factoryId, flag, j, _i, _a, t, j;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)(10001)];
            case 1:
                _b.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _b.sent();
                i = 0;
                _b.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 29];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                return [4 /*yield*/, api('userinfo/GetUserInfo', '_time,materialTuanId,materialTuanPin,needPickSiteInfo,pin,sharePin,shareType,source,zone', {
                        pin: '',
                        sharePin: '',
                        shareType: '',
                        materialTuanPin: '',
                        materialTuanId: '',
                        needPickSiteInfo: 0,
                        source: ''
                    })];
            case 4:
                res = _b.sent();
                productionId = 0;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 5:
                _b.sent();
                try {
                    productionId = res.data.productionList[0].productionId;
                }
                catch (e) {
                    console.log('当前没有产品在生产');
                    return [3 /*break*/, 28];
                }
                factoryId = res.data.factoryList[0].factoryId;
                return [4 /*yield*/, api('generator/QueryCurrentElectricityQuantity', '_time,factoryid,querytype,zone', { factoryid: factoryId, querytype: 1 })];
            case 6:
                res = _b.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 7:
                _b.sent();
                flag = -1;
                if (res.data.nextCollectDoubleFlag === 1) {
                    // 下次双倍
                    if (res.data.currentElectricityQuantity === res.data.maxElectricityQuantity) {
                        // 发电机满
                        flag = 1;
                    }
                    else {
                        console.log('发电机可收取双倍，但没满');
                    }
                }
                else {
                    // 没有双倍，直接收
                    flag = 0;
                }
                if (!(flag !== -1)) return [3 /*break*/, 9];
                return [4 /*yield*/, api('generator/CollectCurrentElectricity', '_time,apptoken,doubleflag,factoryid,pgtimestamp,phoneID,zone', { apptoken: '', pgtimestamp: '', phoneID: '', factoryid: factoryId, doubleflag: flag, timeStamp: 'undefined' })];
            case 8:
                res = _b.sent();
                res.ret === 0
                    ? console.log('发电机收取成功：', res.data.CollectElectricity)
                    : console.log('发电机收取失败：', res);
                _b.label = 9;
            case 9: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 投入电力
            ];
            case 10:
                _b.sent();
                j = 0;
                _b.label = 11;
            case 11:
                if (!(j < 3)) return [3 /*break*/, 15];
                return [4 /*yield*/, api('userinfo/InvestElectric', '_time,productionId,zone', { productionId: productionId })];
            case 12:
                res = _b.sent();
                if (res.ret === 0) {
                    console.log('投入电力：', res.data.investElectric);
                }
                else {
                    console.log(res.msg);
                    return [3 /*break*/, 15];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 13:
                _b.sent();
                _b.label = 14;
            case 14:
                j++;
                return [3 /*break*/, 11];
            case 15: return [4 /*yield*/, api('friend/QueryHireReward', '_time,zone')];
            case 16:
                res = _b.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 17:
                _b.sent();
                _i = 0, _a = res.data.hireReward;
                _b.label = 18;
            case 18:
                if (!(_i < _a.length)) return [3 /*break*/, 22];
                t = _a[_i];
                if (!(t.date !== (0, date_fns_1.format)(Date.now(), "yyyyMMdd"))) return [3 /*break*/, 21];
                return [4 /*yield*/, api('friend/HireAward', '_time,date,type,zone', { date: t.date })];
            case 19:
                res = _b.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 20:
                _b.sent();
                if (res.ret === 0)
                    console.log('收取气泡成功：', t.electricityQuantity);
                _b.label = 21;
            case 21:
                _i++;
                return [3 /*break*/, 18];
            case 22:
                console.log('任务列表开始');
                j = 0;
                _b.label = 23;
            case 23:
                if (!(j < 30)) return [3 /*break*/, 27];
                return [4 /*yield*/, task()];
            case 24:
                if ((_b.sent()) === 0) {
                    return [3 /*break*/, 27];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 25:
                _b.sent();
                _b.label = 26;
            case 26:
                j++;
                return [3 /*break*/, 23];
            case 27:
                console.log('任务列表结束');
                _b.label = 28;
            case 28:
                i++;
                return [3 /*break*/, 3];
            case 29: return [2 /*return*/];
        }
    });
}); })();
function task() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, _a, t;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, api('GetUserTaskStatusList', '_time,bizCode,source')];
                case 1:
                    res = _b.sent();
                    console.log('GetUserTaskStatusList: 刷新任务列表');
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                case 2:
                    _b.sent();
                    _i = 0, _a = res.data.userTaskStatusList;
                    _b.label = 3;
                case 3:
                    if (!(_i < _a.length)) return [3 /*break*/, 13];
                    t = _a[_i];
                    if (!(t.awardStatus === 2)) return [3 /*break*/, 12];
                    if (!(t.completedTimes >= t.targetTimes)) return [3 /*break*/, 7];
                    console.log('可领奖:', t.taskName);
                    return [4 /*yield*/, api('Award', '_time,bizCode,source,taskId', { taskId: t.taskId })];
                case 4:
                    res = _b.sent();
                    if (!(res.ret === 0)) return [3 /*break*/, 6];
                    console.log('领奖成功:', res.data.prizeInfo.trim() * 1);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
                case 5:
                    _b.sent();
                    return [2 /*return*/, 1];
                case 6:
                    console.log('领奖出错');
                    return [2 /*return*/, 0];
                case 7:
                    if (!(t.dateType === 2 && t.completedTimes < t.targetTimes && [2, 6, 9].indexOf(t.taskType) > -1)) return [3 /*break*/, 12];
                    console.log('任务开始:', t.taskName);
                    return [4 /*yield*/, api('DoTask', '_time,bizCode,configExtra,source,taskId', { configExtra: '', taskId: t.taskId })];
                case 8:
                    res = _b.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
                case 9:
                    _b.sent();
                    if (!(res.ret === 0)) return [3 /*break*/, 11];
                    console.log('任务完成');
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
                case 10:
                    _b.sent();
                    return [2 /*return*/, 1];
                case 11:
                    console.log('任务失败:');
                    return [2 /*return*/, 0];
                case 12:
                    _i++;
                    return [3 /*break*/, 3];
                case 13: return [2 /*return*/, 0];
            }
        });
    });
}
function api(fn, stk, params) {
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) {
        var url = '';
        if (['GetUserTaskStatusList', 'DoTask', 'Award'].indexOf(fn) > -1)
            url = "https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?source=dreamfactory&bizCode=dream_factory&_time=" + Date.now() + "&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2";
        else
            url = "https://m.jingxi.com/dreamfactory/" + fn + "?zone=dream_factory&_time=" + Date.now() + "&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2";
        url = (0, TS_USER_AGENTS_1.h5st)(url, stk, params, 10001);
        axios_1["default"].get(url, {
            headers: {
                'Cookie': cookie,
                'Host': 'm.jingxi.com',
                'User-Agent': 'jdpingou;',
                'Referer': 'https://st.jingxi.com/pingou/dream_factory/index.html'
            }
        }).then(function (res) {
            resolve(res.data);
        })["catch"](function (err) {
            console.log('err:', err);
            reject(err);
        });
    });
}
