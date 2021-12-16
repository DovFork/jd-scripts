"use strict";
/**
 * 京喜财富岛
 * 包含雇佣导游，建议每小时1次
 * 使用jd_env_copy.js同步js环境变量到ts
 * 使用jd_ts_test.ts测试环境变量
 *
 * cron: 0 * * * *
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
var date_fns_1 = require("date-fns");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', UserName, index;
var shareCode = [], shareCodeSelf = [], shareCodeHW = [], isCollector = false, token = {};
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, e_1, todayMoney, flag, dwPageIndex, _i, _a, t, _b, _c, xb, tasks, _d, _e, t, prizeInfo, CardList, cards, _f, CardList_1, card, richcard, coincard, _g, coincard_1, card, _h, richcard_1, card, j, j, wallet, build, minLV, _j, _k, b, employee, _l, employee_1, emp, empRes, _m, _o, sign, MermaidRes, shipRes, bags_1, _p, _q, s, strTypeCnt_1, n, bags, _r, _s, s, strTypeCnt, n, j, _t, _u, t, _v, _w, t, _x, _y, e, employ, _z, _0, b, _1, _2, _3, value, index_1, pool, _4, shareCode_1, code;
    var _5;
    return __generator(this, function (_6) {
        switch (_6.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _6.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _6.sent();
                i = 0;
                _6.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 144];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                token = (0, TS_USER_AGENTS_1.getJxToken)(cookie);
                _6.label = 4;
            case 4:
                _6.trys.push([4, 6, , 7]);
                return [4 /*yield*/, makeshareCode()];
            case 5:
                _6.sent();
                return [3 /*break*/, 7];
            case 6:
                e_1 = _6.sent();
                console.log(e_1);
                return [3 /*break*/, 7];
            case 7:
                todayMoney = 0, flag = true;
                dwPageIndex = 0;
                _6.label = 8;
            case 8:
                if (!(dwPageIndex < 5)) return [3 /*break*/, 12];
                if (!flag)
                    return [3 /*break*/, 12];
                return [4 /*yield*/, api('user/GetMoneyDetail', '_cfd_t,bizCode,dwEnv,dwPageIndex,dwPageSize,dwProperty,dwQueryType,ptag,source,strZone', { dwQueryType: 0, dwPageIndex: 1, dwPageSize: 10, dwProperty: 1 })];
            case 9:
                res = _6.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 10:
                _6.sent();
                for (_i = 0, _a = res === null || res === void 0 ? void 0 : res.Detail; _i < _a.length; _i++) {
                    t = _a[_i];
                    if ((0, date_fns_1.getDate)(t.ddwTime * 1000) === (0, date_fns_1.getDate)(new Date())) {
                        todayMoney += t.ddwValue;
                    }
                    else {
                        flag = false;
                        break;
                    }
                }
                _6.label = 11;
            case 11:
                dwPageIndex++;
                return [3 /*break*/, 8];
            case 12:
                console.log('今日累计获得财富:', todayMoney);
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone', { ddwTaskId: '', strShareId: '', strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task', strPgtimestamp: token.strPgtimestamp, strPhoneID: token.strPhoneID, strPgUUNum: token.strPgUUNum })];
            case 13:
                // 离线
                res = _6.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 14:
                _6.sent();
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,dwIsReJoin,ptag,source,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strVersion,strZone', { ddwTaskId: '', strShareId: '', strMarkList: 'undefined', strVersion: '1.0.1', dwIsReJoin: 0, strPgtimestamp: token.strPgtimestamp, strPhoneID: token.strPhoneID, strPgUUNum: token.strPgUUNum })];
            case 15:
                res = _6.sent();
                console.log('财富余额:', res.ddwRichBalance);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                    // 寻宝
                ];
            case 16:
                _6.sent();
                _b = 0, _c = res.XbStatus.XBDetail;
                _6.label = 17;
            case 17:
                if (!(_b < _c.length)) return [3 /*break*/, 21];
                xb = _c[_b];
                if (!(xb.dwRemainCnt !== 0)) return [3 /*break*/, 20];
                return [4 /*yield*/, api('user/TreasureHunt', '_cfd_t,bizCode,dwEnv,ptag,source,strIndex,strZone', { strIndex: xb.strIndex })];
            case 18:
                res = _6.sent();
                if (res.iRet === 0) {
                    console.log('发现宝物:', res.AwardInfo.ddwValue);
                }
                else {
                    console.log('寻宝失败:', res);
                    return [3 /*break*/, 21];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 19:
                _6.sent();
                _6.label = 20;
            case 20:
                _b++;
                return [3 /*break*/, 17];
            case 21:
                tasks = void 0;
                return [4 /*yield*/, api('story/GetPropTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 22:
                // 加速卡任务
                tasks = _6.sent();
                _d = 0, _e = tasks.Data.TaskList;
                _6.label = 23;
            case 23:
                if (!(_d < _e.length)) return [3 /*break*/, 30];
                t = _e[_d];
                if (!(t.dwCompleteNum === t.dwTargetNum && t.dwAwardStatus === 2)) return [3 /*break*/, 26];
                return [4 /*yield*/, api('Award', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', { bizCode: tasks.Data.strZone, taskId: t.ddwTaskId })];
            case 24:
                res = _6.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 25:
                _6.sent();
                if (res.ret === 0) {
                    prizeInfo = JSON.parse(res.data.prizeInfo);
                    CardList = prizeInfo.CardInfo.CardList;
                    cards = '';
                    for (_f = 0, CardList_1 = CardList; _f < CardList_1.length; _f++) {
                        card = CardList_1[_f];
                        cards += card.strCardName;
                    }
                    console.log('加速卡领取成功', cards);
                }
                else {
                    console.log('加速卡领取失败', res);
                    return [3 /*break*/, 30];
                }
                _6.label = 26;
            case 26:
                if (!(t.dwCompleteNum < t.dwTargetNum && t.strTaskName !== '去接待NPC' && t.strTaskName.indexOf('累计邀请') === -1)) return [3 /*break*/, 29];
                console.log(t.strTaskName);
                return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { bizCode: tasks.Data.strZone, taskId: t.ddwTaskId })];
            case 27:
                res = _6.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)((_5 = t.dwLookTime * 1000) !== null && _5 !== void 0 ? _5 : 2000)];
            case 28:
                _6.sent();
                if (res.ret === 0) {
                    console.log('加速卡任务完成');
                }
                else {
                    console.log('加速卡任务失败', res);
                    return [3 /*break*/, 30];
                }
                _6.label = 29;
            case 29:
                _d++;
                return [3 /*break*/, 23];
            case 30: return [4 /*yield*/, api('user/GetPropCardCenterInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 31:
                // 加速卡
                res = _6.sent();
                console.log('加速卡：');
                (0, TS_USER_AGENTS_1.o2s)(res);
                richcard = res.cardInfo.richcard, coincard = res.cardInfo.coincard;
                _g = 0, coincard_1 = coincard;
                _6.label = 32;
            case 32:
                if (!(_g < coincard_1.length)) return [3 /*break*/, 35];
                card = coincard_1[_g];
                if (!(card.dwCardNums !== 0)) return [3 /*break*/, 34];
                return [4 /*yield*/, api('user/UsePropCard', '_cfd_t,bizCode,dwCardType,dwEnv,ptag,source,strCardTypeIndex,strZone', { dwCardType: 1, strCardTypeIndex: encodeURIComponent(card.strCardTypeIndex) })];
            case 33:
                res = _6.sent();
                if (res.iRet === 0) {
                    console.log('金币加速卡使用成功');
                }
                else {
                    console.log('金币加速卡使用失败', res);
                }
                return [3 /*break*/, 35];
            case 34:
                _g++;
                return [3 /*break*/, 32];
            case 35:
                _h = 0, richcard_1 = richcard;
                _6.label = 36;
            case 36:
                if (!(_h < richcard_1.length)) return [3 /*break*/, 39];
                card = richcard_1[_h];
                if (!(card.dwCardNums !== 0)) return [3 /*break*/, 38];
                return [4 /*yield*/, api('user/UsePropCard', '_cfd_t,bizCode,dwCardType,dwEnv,ptag,source,strCardTypeIndex,strZone', { dwCardType: 2, strCardTypeIndex: encodeURIComponent(card.strCardTypeIndex) })];
            case 37:
                res = _6.sent();
                if (res.iRet === 0) {
                    console.log('点券加速卡使用成功');
                }
                else {
                    console.log('点券加速卡使用失败', res);
                }
                return [3 /*break*/, 39];
            case 38:
                _h++;
                return [3 /*break*/, 36];
            case 39:
                // 任务⬇️
                console.log('底部任务列表开始');
                j = 0;
                _6.label = 40;
            case 40:
                if (!(j < 30)) return [3 /*break*/, 44];
                return [4 /*yield*/, task()];
            case 41:
                if ((_6.sent()) === 0) {
                    return [3 /*break*/, 44];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 42:
                _6.sent();
                _6.label = 43;
            case 43:
                j++;
                return [3 /*break*/, 40];
            case 44:
                console.log('底部任务列表结束');
                j = 0;
                _6.label = 45;
            case 45:
                if (!(j < 5)) return [3 /*break*/, 63];
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone', { ddwTaskId: '', strShareId: '', strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task', strPgtimestamp: token.strPgtimestamp, strPhoneID: token.strPhoneID, strPgUUNum: token.strPgUUNum })];
            case 46:
                res = _6.sent();
                wallet = res.ddwCoinBalance;
                console.log('金币余额:', wallet);
                build = '', minLV = 99999;
                _j = 0, _k = ['food', 'fun', 'shop', 'sea'];
                _6.label = 47;
            case 47:
                if (!(_j < _k.length)) return [3 /*break*/, 51];
                b = _k[_j];
                return [4 /*yield*/, api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b })];
            case 48:
                res = _6.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 49:
                _6.sent();
                if (res.dwBuildLvl <= minLV) {
                    minLV = res.dwBuildLvl;
                    build = b;
                }
                _6.label = 50;
            case 50:
                _j++;
                return [3 /*break*/, 47];
            case 51:
                console.log('最低等级建筑:', minLV, build);
                return [4 /*yield*/, api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: build })];
            case 52:
                res = _6.sent();
                console.log("".concat(build, "\u5347\u7EA7\u9700\u8981:"), res.ddwNextLvlCostCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 53:
                _6.sent();
                if (!(res.dwCanLvlUp === 1 && res.ddwNextLvlCostCoin <= wallet)) return [3 /*break*/, 59];
                return [4 /*yield*/, api('user/BuildLvlUp', '_cfd_t,bizCode,ddwCostCoin,dwEnv,ptag,source,strBuildIndex,strZone', { ddwCostCoin: res.ddwNextLvlCostCoin, strBuildIndex: build })];
            case 54:
                res = _6.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 55:
                _6.sent();
                if (!(res.iRet === 0)) return [3 /*break*/, 57];
                console.log("\u5347\u7EA7\u6210\u529F");
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 56:
                _6.sent();
                return [3 /*break*/, 58];
            case 57:
                console.log('升级失败', res);
                _6.label = 58;
            case 58: return [3 /*break*/, 60];
            case 59: return [3 /*break*/, 63];
            case 60: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 61:
                _6.sent();
                _6.label = 62;
            case 62:
                j++;
                return [3 /*break*/, 45];
            case 63: return [4 /*yield*/, api('story/GetTakeAggrPage', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 64:
                // 签到 助力奖励
                res = _6.sent();
                employee = res.Data.Employee.EmployeeList.filter(function (e) {
                    return e.dwStatus === 0;
                });
                _l = 0, employee_1 = employee;
                _6.label = 65;
            case 65:
                if (!(_l < employee_1.length)) return [3 /*break*/, 69];
                emp = employee_1[_l];
                return [4 /*yield*/, api('story/helpdraw', '_cfd_t,bizCode,dwEnv,dwUserId,ptag,source,strZone', { dwUserId: emp.dwId })];
            case 66:
                empRes = _6.sent();
                if (empRes.iRet === 0)
                    console.log('助力奖励领取成功:', empRes.Data.ddwCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 67:
                _6.sent();
                _6.label = 68;
            case 68:
                _l++;
                return [3 /*break*/, 65];
            case 69:
                if (!(res.Data.Sign.dwTodayStatus === 0)) return [3 /*break*/, 74];
                console.log('今日未签到');
                _m = 0, _o = res.Data.Sign.SignList;
                _6.label = 70;
            case 70:
                if (!(_m < _o.length)) return [3 /*break*/, 73];
                sign = _o[_m];
                if (!(sign.dwDayId === res.Data.Sign.dwTodayId)) return [3 /*break*/, 72];
                return [4 /*yield*/, api('story/RewardSign', '_cfd_t,bizCode,ddwCoin,ddwMoney,dwEnv,dwPrizeLv,dwPrizeType,ptag,source,strPgUUNum,strPgtimestamp,strPhoneID,strPrizePool,strZone', {
                        ddwCoin: sign.ddwCoin,
                        ddwMoney: sign.ddwMoney,
                        dwPrizeLv: sign.dwBingoLevel,
                        dwPrizeType: sign.dwPrizeType,
                        strPrizePool: sign.strPrizePool,
                        strPgtimestamp: token.strPgtimestamp,
                        strPhoneID: token.strPhoneID,
                        strPgUUNum: token.strPgUUNum
                    })];
            case 71:
                res = _6.sent();
                if (res.iRet === 0)
                    console.log('签到成功:', res.Data.ddwCoin, res.Data.ddwMoney, res.Data.strPrizePool);
                else
                    console.log('签到失败:', res);
                return [3 /*break*/, 73];
            case 72:
                _m++;
                return [3 /*break*/, 70];
            case 73: return [3 /*break*/, 75];
            case 74:
                console.log('今日已经签到');
                _6.label = 75;
            case 75: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 76:
                _6.sent();
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strVersion,strZone', {
                        ddwTaskId: '',
                        strShareId: '',
                        strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task,cfd_has_show_selef_point',
                        strPgUUNum: token.strPgUUNum,
                        strPgtimestamp: token.strPgtimestamp,
                        strPhoneID: token.strPhoneID,
                        strVersion: '1.0.1'
                    })];
            case 77:
                res = _6.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 78:
                _6.sent();
                if (!res.StoryInfo.StoryList) return [3 /*break*/, 98];
                if (!res.StoryInfo.StoryList[0].Mermaid) return [3 /*break*/, 85];
                console.log("\u53D1\u73B0\u7F8E\u4EBA\u9C7C\uD83E\uDDDC\u200D\u2640\uFE0F");
                return [4 /*yield*/, api('story/MermaidOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '1',
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 79:
                MermaidRes = _6.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 80:
                _6.sent();
                if (!(MermaidRes.iRet === 0)) return [3 /*break*/, 82];
                return [4 /*yield*/, api('story/MermaidOpe', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '3',
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 81:
                MermaidRes = _6.sent();
                if (MermaidRes.iRet === 0) {
                    console.log("\u62EF\u6551\u7F8E\u4EBA\u9C7C\u6210\u529F");
                }
                _6.label = 82;
            case 82: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 83:
                _6.sent();
                return [4 /*yield*/, api('story/MermaidOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '2',
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 84:
                MermaidRes = _6.sent();
                if (MermaidRes.iRet === 0)
                    console.log('获得金币:', MermaidRes.Data.ddwCoin);
                _6.label = 85;
            case 85: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 86:
                _6.sent();
                if (!res.StoryInfo.StoryList[0].Special) return [3 /*break*/, 90];
                console.log("\u8239\u6765\u4E86\uFF0C\u4E58\u5BA2\u662F".concat(res.StoryInfo.StoryList[0].Special.strName));
                return [4 /*yield*/, api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '2',
                        triggerType: 0,
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 87:
                shipRes = _6.sent();
                console.log('正在下船，等待30s');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(30000)];
            case 88:
                _6.sent();
                return [4 /*yield*/, api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '3',
                        triggerType: 0,
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 89:
                shipRes = _6.sent();
                if (shipRes.iRet === 0)
                    console.log('船客接待成功');
                else
                    console.log('船客接待失败', shipRes);
                _6.label = 90;
            case 90:
                isCollector = false;
                if (!res.StoryInfo.StoryList[0].Collector) return [3 /*break*/, 96];
                console.log('收藏家出现');
                return [4 /*yield*/, api('story/CollectorOper', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,strStoryId,dwType,ddwTriggerDay', { strStoryId: res.StoryInfo.StoryList[0].strStoryId, dwType: '2', ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay })];
            case 91:
                // TODO 背包满了再卖给收破烂的
                res = _6.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 92:
                _6.sent();
                isCollector = true;
                return [4 /*yield*/, api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 93:
                // 清空背包
                res = _6.sent();
                bags_1 = [];
                for (_p = 0, _q = res.Data.Office; _p < _q.length; _p++) {
                    s = _q[_p];
                    bags_1.push(s.dwType);
                    bags_1.push(s.dwCount);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 94:
                _6.sent();
                strTypeCnt_1 = '';
                for (n = 0; n < bags_1.length; n++) {
                    if (n % 2 === 0)
                        strTypeCnt_1 += "".concat(bags_1[n], ":");
                    else
                        strTypeCnt_1 += "".concat(bags_1[n], "|");
                }
                if (!(bags_1.length !== 0)) return [3 /*break*/, 96];
                return [4 /*yield*/, api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone', { dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt_1 })];
            case 95:
                res = _6.sent();
                console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney);
                _6.label = 96;
            case 96: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 97:
                _6.sent();
                _6.label = 98;
            case 98: return [4 /*yield*/, api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 99:
                // 清空背包
                res = _6.sent();
                bags = [];
                for (_r = 0, _s = res.Data.Office; _r < _s.length; _r++) {
                    s = _s[_r];
                    bags.push(s.dwType);
                    bags.push(s.dwCount);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 100:
                _6.sent();
                strTypeCnt = '';
                for (n = 0; n < bags.length; n++) {
                    if (n % 2 === 0)
                        strTypeCnt += "".concat(bags[n], ":");
                    else
                        strTypeCnt += "".concat(bags[n], "|");
                }
                if (!(bags.length !== 0)) return [3 /*break*/, 102];
                return [4 /*yield*/, api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone', { dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt })];
            case 101:
                res = _6.sent();
                console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney);
                _6.label = 102;
            case 102: return [4 /*yield*/, api('story/QueryRubbishInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 103:
                // 垃圾🚮
                res = _6.sent();
                if (!(res.Data.StoryInfo.StoryList.length !== 0)) return [3 /*break*/, 110];
                console.log('有垃圾');
                return [4 /*yield*/, api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwType,ptag,source,strZone', {
                        dwType: '1',
                        dwRewardType: 0
                    })];
            case 104:
                _6.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 105:
                _6.sent();
                j = 1;
                _6.label = 106;
            case 106:
                if (!(j < 9)) return [3 /*break*/, 110];
                return [4 /*yield*/, api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwRubbishId,dwType,ptag,source,strZone', {
                        dwType: '2',
                        dwRewardType: 0,
                        dwRubbishId: j
                    })];
            case 107:
                res = _6.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1500)];
            case 108:
                _6.sent();
                _6.label = 109;
            case 109:
                j++;
                return [3 /*break*/, 106];
            case 110: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 任务➡️
            ];
            case 111:
                _6.sent();
                return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 112:
                // 任务➡️
                tasks = _6.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 113:
                _6.sent();
                _t = 0, _u = tasks.Data.TaskList;
                _6.label = 114;
            case 114:
                if (!(_t < _u.length)) return [3 /*break*/, 118];
                t = _u[_t];
                if (!([1, 2].indexOf(t.dwOrderId) > -1 && t.dwCompleteNum < t.dwTargetNum && t.strTaskName !== '升级1个建筑')) return [3 /*break*/, 117];
                console.log('开始任务➡️:', t.strTaskName);
                return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.ddwTaskId, configExtra: '' }, 'right')];
            case 115:
                res = _6.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.dwLookTime * 1000)];
            case 116:
                _6.sent();
                if (res.ret === 0) {
                    console.log('任务完成');
                }
                else {
                    console.log('任务失败', res);
                }
                _6.label = 117;
            case 117:
                _t++;
                return [3 /*break*/, 114];
            case 118: return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 119:
                tasks = _6.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 120:
                _6.sent();
                _v = 0, _w = tasks.Data.TaskList;
                _6.label = 121;
            case 121:
                if (!(_v < _w.length)) return [3 /*break*/, 125];
                t = _w[_v];
                if (!(t.dwCompleteNum === t.dwTargetNum && t.dwAwardStatus === 2)) return [3 /*break*/, 124];
                return [4 /*yield*/, api('Award', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.ddwTaskId }, 'right')];
            case 122:
                res = _6.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 123:
                _6.sent();
                if (res.ret === 0) {
                    console.log('领奖成功：', res);
                }
                else {
                    console.log('领奖失败', res);
                }
                _6.label = 124;
            case 124:
                _v++;
                return [3 /*break*/, 121];
            case 125: return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 126:
                tasks = _6.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 127:
                _6.sent();
                if (!(tasks.Data.dwStatus === 3)) return [3 /*break*/, 129];
                return [4 /*yield*/, api('story/ActTaskAward', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 128:
                res = _6.sent();
                if (res.ret === 0) {
                    console.log('100财富任务完成');
                }
                _6.label = 129;
            case 129: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 导游
            ];
            case 130:
                _6.sent();
                return [4 /*yield*/, api('user/EmployTourGuideInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 131:
                // 导游
                res = _6.sent();
                if (!!res.TourGuideList) return [3 /*break*/, 132];
                console.log('手动雇佣4个试用导游');
                return [3 /*break*/, 137];
            case 132:
                _x = 0, _y = res.TourGuideList;
                _6.label = 133;
            case 133:
                if (!(_x < _y.length)) return [3 /*break*/, 137];
                e = _y[_x];
                if (!(e.strBuildIndex !== 'food' && e.ddwRemainTm === 0)) return [3 /*break*/, 136];
                return [4 /*yield*/, api('user/EmployTourGuide', '_cfd_t,bizCode,ddwConsumeCoin,dwEnv,dwIsFree,ptag,source,strBuildIndex,strZone', { ddwConsumeCoin: e.ddwCostCoin, dwIsFree: 0, strBuildIndex: e.strBuildIndex })];
            case 134:
                employ = _6.sent();
                if (employ.iRet === 0)
                    console.log("\u96C7\u4F63".concat(e.strBuildIndex, "\u5BFC\u6E38\u6210\u529F"));
                if (employ.iRet === 2003)
                    return [3 /*break*/, 137];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 135:
                _6.sent();
                _6.label = 136;
            case 136:
                _x++;
                return [3 /*break*/, 133];
            case 137: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 138:
                _6.sent();
                _z = 0, _0 = ['fun', 'shop', 'sea', 'food'];
                _6.label = 139;
            case 139:
                if (!(_z < _0.length)) return [3 /*break*/, 143];
                b = _0[_z];
                return [4 /*yield*/, api('user/CollectCoin', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b, dwType: '1' })];
            case 140:
                res = _6.sent();
                console.log("".concat(b, "\u6536\u91D1\u5E01:"), res.ddwCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 141:
                _6.sent();
                _6.label = 142;
            case 142:
                _z++;
                return [3 /*break*/, 139];
            case 143:
                i++;
                return [3 /*break*/, 3];
            case 144:
                _1 = 0, _2 = cookiesArr.entries();
                _6.label = 145;
            case 145:
                if (!(_1 < _2.length)) return [3 /*break*/, 154];
                _3 = _2[_1], value = _3[0], index_1 = _3[1];
                if (!(shareCodeHW.length === 0)) return [3 /*break*/, 147];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('jxcfd')];
            case 146:
                shareCodeHW = _6.sent();
                _6.label = 147;
            case 147: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('jxcfd', 30)];
            case 148:
                pool = _6.sent();
                shareCode = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodeSelf, true), shareCodeHW, true), pool, true)));
                _4 = 0, shareCode_1 = shareCode;
                _6.label = 149;
            case 149:
                if (!(_4 < shareCode_1.length)) return [3 /*break*/, 153];
                code = shareCode_1[_4];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\u3010\u8D26\u53F7".concat(index_1 + 1, "\u3011 ").concat(UserName, " \u53BB\u52A9\u529B ").concat(code));
                return [4 /*yield*/, api('story/helpbystage', '_cfd_t,bizCode,dwEnv,ptag,source,strShareId,strZone', { strShareId: code })];
            case 150:
                res = _6.sent();
                if (res.iRet === 0) {
                    console.log('助力成功:', res.Data.GuestPrizeInfo.strPrizeName);
                }
                else if (res.iRet === 2190 || res.sErrMsg === '达到助力上限') {
                    console.log('上限');
                    return [3 /*break*/, 153];
                }
                else if (res.iRet === 1023) {
                    console.log('信号弱');
                    return [3 /*break*/, 153];
                }
                else if (res.iRet === 2191) {
                    console.log('已助力');
                }
                else {
                    console.log('其他错误:', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 151:
                _6.sent();
                _6.label = 152;
            case 152:
                _4++;
                return [3 /*break*/, 149];
            case 153:
                _1++;
                return [3 /*break*/, 145];
            case 154: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params, taskPosition) {
    if (params === void 0) { params = {}; }
    if (taskPosition === void 0) { taskPosition = ''; }
    return __awaiter(this, void 0, void 0, function () {
        var url, t, bizCode, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    t = Date.now();
                    if (['GetUserTaskStatusList', 'Award', 'DoTask'].includes(fn)) {
                        bizCode = void 0;
                        if (!params.bizCode) {
                            bizCode = taskPosition === 'right' ? 'jxbfddch' : 'jxbfd';
                        }
                        else {
                            bizCode = params.bizCode;
                        }
                        url = "https://m.jingxi.com/newtasksys/newtasksys_front/".concat(fn, "?strZone=jxbfd&bizCode=").concat(bizCode, "&source=jxbfd&dwEnv=7&_cfd_t=").concat(t, "&ptag=&_stk=").concat(encodeURIComponent(stk), "&_ste=1&_=").concat(t + 2, "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls");
                    }
                    else {
                        url = "https://m.jingxi.com/jxbfd/".concat(fn, "?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=").concat(t, "&ptag=&_stk=").concat(encodeURIComponent(stk), "&_ste=1&_=").concat(t + 2, "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls");
                    }
                    url = (0, TS_USER_AGENTS_1.h5st)(url, stk, params, 10032);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'Accept': '*/*',
                                'Connection': 'keep-alive',
                                'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                                'User-Agent': "jdpingou;iPhone;5.14.2;".concat((0, TS_USER_AGENTS_1.getRandomNumberByRange)(12, 16), ".").concat((0, TS_USER_AGENTS_1.getRandomNumberByRange)(0, 3), ";").concat((0, TS_USER_AGENTS_1.randomString)(40), ";"),
                                'Referer': 'https://st.jingxi.com/',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    try {
                        return [2 /*return*/, JSON.parse(data.match(/jsonpCBK.?\(([^)]*)/)[1])];
                    }
                    catch (e) {
                        console.log(data);
                        return [2 /*return*/, ''];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function task() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, _a, t;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('刷新任务列表');
                    return [4 /*yield*/, api('GetUserTaskStatusList', '_cfd_t,bizCode,dwEnv,ptag,showAreaTaskFlag,source,strZone,taskId', { taskId: 0, showAreaTaskFlag: 1 })];
                case 1:
                    res = _b.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                case 2:
                    _b.sent();
                    _i = 0, _a = res.data.userTaskStatusList;
                    _b.label = 3;
                case 3:
                    if (!(_i < _a.length)) return [3 /*break*/, 12];
                    t = _a[_i];
                    if (!(t.awardStatus === 2 && t.completedTimes === t.targetTimes)) return [3 /*break*/, 8];
                    console.log('可领奖:', t.taskName);
                    return [4 /*yield*/, api('Award', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', { taskId: t.taskId, bizCode: t.bizCode })];
                case 4:
                    res = _b.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                case 5:
                    _b.sent();
                    if (!(res.ret === 0)) return [3 /*break*/, 7];
                    try {
                        res = JSON.parse(res.data.prizeInfo);
                        console.log("\u9886\u5956\u6210\u529F:", res.ddwCoin, res.ddwMoney);
                    }
                    catch (e) {
                        console.log('领奖失败:', res.data);
                    }
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 6:
                    _b.sent();
                    return [2 /*return*/, 1];
                case 7:
                    console.log('领奖失败:', res);
                    return [2 /*return*/, 0];
                case 8:
                    if (!(t.dateType === 2 && t.awardStatus === 2 && t.completedTimes < t.targetTimes && t.taskCaller === 1)) return [3 /*break*/, 11];
                    console.log('做任务:', t.taskId, t.taskName, t.completedTimes, t.targetTimes);
                    return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.taskId, configExtra: '', bizCode: t.bizCode })];
                case 9:
                    res = _b.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
                case 10:
                    _b.sent();
                    if (res.ret === 0) {
                        console.log('任务完成');
                        return [2 /*return*/, 1];
                    }
                    else {
                        console.log('任务失败');
                        return [2 /*return*/, 0];
                    }
                    _b.label = 11;
                case 11:
                    _i++;
                    return [3 /*break*/, 3];
                case 12: return [2 /*return*/, 0];
            }
        });
    });
}
function makeshareCode() {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strVersion,strZone', {
                            ddwTaskId: '',
                            strShareId: '',
                            strMarkList: 'undefined',
                            strPgUUNum: token.strPgUUNum,
                            strPgtimestamp: token.strPgtimestamp,
                            strPhoneID: token.strPhoneID,
                            strVersion: '1.0.1'
                        })];
                case 1:
                    res = _a.sent();
                    console.log('助力码:', res.strMyShareId);
                    shareCodeSelf.push(res.strMyShareId);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 2:
                    bean = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 3:
                    farm = _a.sent();
                    pin = ts_md5_1.Md5.hashStr(cookie.match(/pt_pin=([^;]*)/)[1]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/jxcfd?sharecode=".concat(res.strMyShareId, "&bean=").concat(bean, "&farm=").concat(farm, "&pin=").concat(pin))];
                case 4:
                    data = (_a.sent()).data;
                    console.log(data.message);
                    return [3 /*break*/, 6];
                case 5:
                    e_2 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_2);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
