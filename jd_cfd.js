"use strict";
/**
 * 京喜财富岛
 * cron: 40 * * * *
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
var V3_1 = require("./utils/V3");
var fs_1 = require("fs");
var cookie = '', res = '', UserName, index, ua = null, account = [];
var shareCode = [], shareCodeSelf = [], shareCodeHW = [], isCollector = false, token = {};
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, _i, account_1, acc, e_1, todayMoney, flag, dwPageIndex, _a, _b, t, _c, _d, xb, tasks, _e, _f, t, prizeInfo, CardList, cards, _g, CardList_1, card, richcard, coincard, _h, coincard_1, card, _j, richcard_1, card, j, j, wallet, build, minLV, _k, _l, b, employee, _m, employee_1, emp, empRes, _o, _p, sign, shipRes, bags_1, _q, _r, s, strTypeCnt_1, n, bags, _s, _t, s, strTypeCnt, n, j, _u, _v, t, _w, _x, t, _y, _z, e, employ, _0, _1, b, _2, _3, _4, index_1, value, pool, _5, shareCode_1, code;
    var _6;
    return __generator(this, function (_7) {
        switch (_7.label) {
            case 0:
                if ((0, fs_1.existsSync)('./utils/account.json')) {
                    try {
                        account = JSON.parse((0, fs_1.readFileSync)('./utils/account.json').toString());
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
                return [4 /*yield*/, (0, V3_1.requestAlgo)('92a36', 'jdpingou;')];
            case 1:
                _7.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _7.sent();
                i = 0;
                _7.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 137];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                ua = 'jdpingou;';
                for (_i = 0, account_1 = account; _i < account_1.length; _i++) {
                    acc = account_1[_i];
                    if ((acc === null || acc === void 0 ? void 0 : acc.pt_pin.includes(UserName)) && (acc === null || acc === void 0 ? void 0 : acc.jdpingou)) {
                        ua = acc.jdpingou;
                        console.log('指定UA：', ua);
                        break;
                    }
                }
                token = (0, TS_USER_AGENTS_1.getJxToken)(cookie);
                _7.label = 4;
            case 4:
                _7.trys.push([4, 6, , 7]);
                return [4 /*yield*/, makeshareCode()];
            case 5:
                _7.sent();
                return [3 /*break*/, 7];
            case 6:
                e_1 = _7.sent();
                console.log(e_1);
                return [3 /*break*/, 7];
            case 7:
                todayMoney = 0, flag = true;
                dwPageIndex = 0;
                _7.label = 8;
            case 8:
                if (!(dwPageIndex < 5)) return [3 /*break*/, 12];
                if (!flag)
                    return [3 /*break*/, 12];
                return [4 /*yield*/, api('user/GetMoneyDetail', '_cfd_t,bizCode,dwEnv,dwPageIndex,dwPageSize,dwProperty,dwQueryType,ptag,source,strZone', { dwQueryType: 0, dwPageIndex: 1, dwPageSize: 10, dwProperty: 1 })];
            case 9:
                res = _7.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 10:
                _7.sent();
                for (_a = 0, _b = res === null || res === void 0 ? void 0 : res.Detail; _a < _b.length; _a++) {
                    t = _b[_a];
                    if ((0, date_fns_1.getDate)(t.ddwTime * 1000) === (0, date_fns_1.getDate)(new Date())) {
                        todayMoney += t.ddwValue;
                    }
                    else {
                        flag = false;
                        break;
                    }
                }
                _7.label = 11;
            case 11:
                dwPageIndex++;
                return [3 /*break*/, 8];
            case 12:
                console.log('今日累计获得财富:', todayMoney);
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone', { ddwTaskId: '', strShareId: '', strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task', strPgtimestamp: token.strPgtimestamp, strPhoneID: token.strPhoneID, strPgUUNum: token.strPgUUNum })];
            case 13:
                // 离线
                res = _7.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 14:
                _7.sent();
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,dwIsReJoin,ptag,source,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strVersion,strZone', { ddwTaskId: '', strShareId: '', strMarkList: 'undefined', strVersion: '1.0.1', dwIsReJoin: 0, strPgtimestamp: token.strPgtimestamp, strPhoneID: token.strPhoneID, strPgUUNum: token.strPgUUNum })];
            case 15:
                res = _7.sent();
                console.log('财富余额:', res.ddwRichBalance);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                    // 寻宝
                ];
            case 16:
                _7.sent();
                _c = 0, _d = res.XbStatus.XBDetail;
                _7.label = 17;
            case 17:
                if (!(_c < _d.length)) return [3 /*break*/, 21];
                xb = _d[_c];
                if (!(xb.dwRemainCnt !== 0)) return [3 /*break*/, 20];
                return [4 /*yield*/, api('user/TreasureHunt', '_cfd_t,bizCode,dwEnv,ptag,source,strIndex,strZone', { strIndex: xb.strIndex })];
            case 18:
                res = _7.sent();
                if (res.iRet === 0) {
                    console.log('发现宝物:', res.AwardInfo.ddwValue);
                }
                else {
                    console.log('寻宝失败:', res);
                    return [3 /*break*/, 21];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 19:
                _7.sent();
                _7.label = 20;
            case 20:
                _c++;
                return [3 /*break*/, 17];
            case 21:
                tasks = void 0;
                return [4 /*yield*/, api('story/GetPropTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 22:
                // 加速卡任务
                tasks = _7.sent();
                _e = 0, _f = tasks.Data.TaskList;
                _7.label = 23;
            case 23:
                if (!(_e < _f.length)) return [3 /*break*/, 30];
                t = _f[_e];
                if (!(t.dwCompleteNum === t.dwTargetNum && t.dwAwardStatus === 2)) return [3 /*break*/, 26];
                return [4 /*yield*/, api('Award', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', { bizCode: tasks.Data.strZone, taskId: t.ddwTaskId })];
            case 24:
                res = _7.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 25:
                _7.sent();
                if (res.ret === 0) {
                    prizeInfo = JSON.parse(res.data.prizeInfo);
                    CardList = prizeInfo.CardInfo.CardList;
                    cards = '';
                    for (_g = 0, CardList_1 = CardList; _g < CardList_1.length; _g++) {
                        card = CardList_1[_g];
                        cards += card.strCardName;
                    }
                    console.log('加速卡领取成功', cards);
                }
                else {
                    console.log('加速卡领取失败', res);
                    return [3 /*break*/, 30];
                }
                _7.label = 26;
            case 26:
                if (!(t.dwCompleteNum < t.dwTargetNum && t.strTaskName !== '去接待NPC' && t.strTaskName.indexOf('累计邀请') === -1)) return [3 /*break*/, 29];
                console.log(t.strTaskName);
                return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { bizCode: tasks.Data.strZone, taskId: t.ddwTaskId })];
            case 27:
                res = _7.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)((_6 = t.dwLookTime * 1000) !== null && _6 !== void 0 ? _6 : 2000)];
            case 28:
                _7.sent();
                if (res.ret === 0) {
                    console.log('加速卡任务完成');
                }
                else {
                    console.log('加速卡任务失败', res);
                    return [3 /*break*/, 30];
                }
                _7.label = 29;
            case 29:
                _e++;
                return [3 /*break*/, 23];
            case 30: return [4 /*yield*/, api('user/GetPropCardCenterInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 31:
                // 加速卡
                res = _7.sent();
                richcard = res.cardInfo.richcard, coincard = res.cardInfo.coincard;
                _h = 0, coincard_1 = coincard;
                _7.label = 32;
            case 32:
                if (!(_h < coincard_1.length)) return [3 /*break*/, 35];
                card = coincard_1[_h];
                if (!(card.dwCardNums !== 0)) return [3 /*break*/, 34];
                return [4 /*yield*/, api('user/UsePropCard', '_cfd_t,bizCode,dwCardType,dwEnv,ptag,source,strCardTypeIndex,strZone', { dwCardType: 1, strCardTypeIndex: encodeURIComponent(card.strCardTypeIndex) })];
            case 33:
                res = _7.sent();
                if (res.iRet === 0) {
                    console.log('金币加速卡使用成功');
                }
                else {
                    console.log('金币加速卡使用失败', res);
                }
                return [3 /*break*/, 35];
            case 34:
                _h++;
                return [3 /*break*/, 32];
            case 35:
                _j = 0, richcard_1 = richcard;
                _7.label = 36;
            case 36:
                if (!(_j < richcard_1.length)) return [3 /*break*/, 39];
                card = richcard_1[_j];
                if (!(card.dwCardNums !== 0)) return [3 /*break*/, 38];
                return [4 /*yield*/, api('user/UsePropCard', '_cfd_t,bizCode,dwCardType,dwEnv,ptag,source,strCardTypeIndex,strZone', { dwCardType: 2, strCardTypeIndex: encodeURIComponent(card.strCardTypeIndex) })];
            case 37:
                res = _7.sent();
                if (res.iRet === 0) {
                    console.log('点券加速卡使用成功');
                }
                else {
                    console.log('点券加速卡使用失败', res);
                }
                return [3 /*break*/, 39];
            case 38:
                _j++;
                return [3 /*break*/, 36];
            case 39:
                // 任务⬇️
                console.log('底部任务列表开始');
                j = 0;
                _7.label = 40;
            case 40:
                if (!(j < 30)) return [3 /*break*/, 44];
                return [4 /*yield*/, task()];
            case 41:
                if ((_7.sent()) === 0) {
                    return [3 /*break*/, 44];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 42:
                _7.sent();
                _7.label = 43;
            case 43:
                j++;
                return [3 /*break*/, 40];
            case 44:
                console.log('底部任务列表结束');
                j = 0;
                _7.label = 45;
            case 45:
                if (!(j < 5)) return [3 /*break*/, 63];
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone', { ddwTaskId: '', strShareId: '', strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task', strPgtimestamp: token.strPgtimestamp, strPhoneID: token.strPhoneID, strPgUUNum: token.strPgUUNum })];
            case 46:
                res = _7.sent();
                wallet = res.ddwCoinBalance;
                console.log('金币余额:', wallet);
                build = '', minLV = 99999;
                _k = 0, _l = ['food', 'fun', 'shop', 'sea'];
                _7.label = 47;
            case 47:
                if (!(_k < _l.length)) return [3 /*break*/, 51];
                b = _l[_k];
                return [4 /*yield*/, api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b })];
            case 48:
                res = _7.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 49:
                _7.sent();
                if (res.dwBuildLvl <= minLV) {
                    minLV = res.dwBuildLvl;
                    build = b;
                }
                _7.label = 50;
            case 50:
                _k++;
                return [3 /*break*/, 47];
            case 51:
                console.log('最低等级建筑:', minLV, build);
                return [4 /*yield*/, api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: build })];
            case 52:
                res = _7.sent();
                console.log("".concat(build, "\u5347\u7EA7\u9700\u8981:"), res.ddwNextLvlCostCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 53:
                _7.sent();
                if (!(res.dwCanLvlUp === 1 && res.ddwNextLvlCostCoin <= wallet)) return [3 /*break*/, 59];
                return [4 /*yield*/, api('user/BuildLvlUp', '_cfd_t,bizCode,ddwCostCoin,dwEnv,ptag,source,strBuildIndex,strZone', { ddwCostCoin: res.ddwNextLvlCostCoin, strBuildIndex: build })];
            case 54:
                res = _7.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 55:
                _7.sent();
                if (!(res.iRet === 0)) return [3 /*break*/, 57];
                console.log("\u5347\u7EA7\u6210\u529F");
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 56:
                _7.sent();
                return [3 /*break*/, 58];
            case 57:
                console.log('升级失败', res);
                _7.label = 58;
            case 58: return [3 /*break*/, 60];
            case 59: return [3 /*break*/, 63];
            case 60: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 61:
                _7.sent();
                _7.label = 62;
            case 62:
                j++;
                return [3 /*break*/, 45];
            case 63: return [4 /*yield*/, api('story/GetTakeAggrPage', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 64:
                // 签到 助力奖励
                res = _7.sent();
                employee = res.Data.Employee.EmployeeList.filter(function (e) {
                    return e.dwStatus === 0;
                });
                _m = 0, employee_1 = employee;
                _7.label = 65;
            case 65:
                if (!(_m < employee_1.length)) return [3 /*break*/, 69];
                emp = employee_1[_m];
                return [4 /*yield*/, api('story/helpdraw', '_cfd_t,bizCode,dwEnv,dwUserId,ptag,source,strZone', { dwUserId: emp.dwId })];
            case 66:
                empRes = _7.sent();
                if (empRes.iRet === 0)
                    console.log('助力奖励领取成功:', empRes.Data.ddwCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 67:
                _7.sent();
                _7.label = 68;
            case 68:
                _m++;
                return [3 /*break*/, 65];
            case 69:
                if (!(res.Data.Sign.dwTodayStatus === 0)) return [3 /*break*/, 74];
                console.log('今日未签到');
                _o = 0, _p = res.Data.Sign.SignList;
                _7.label = 70;
            case 70:
                if (!(_o < _p.length)) return [3 /*break*/, 73];
                sign = _p[_o];
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
                res = _7.sent();
                if (res.iRet === 0)
                    console.log('签到成功:', res.Data.ddwCoin, res.Data.ddwMoney, res.Data.strPrizePool);
                else
                    console.log('签到失败:', res);
                return [3 /*break*/, 73];
            case 72:
                _o++;
                return [3 /*break*/, 70];
            case 73: return [3 /*break*/, 75];
            case 74:
                console.log('今日已经签到');
                _7.label = 75;
            case 75: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 76:
                _7.sent();
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
                res = _7.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 78:
                _7.sent();
                if (!res.StoryInfo.StoryList) return [3 /*break*/, 91];
                // 美人鱼
                if (res.StoryInfo.StoryList[0].Mermaid) {
                    console.log("\u53D1\u73B0\u7F8E\u4EBA\u9C7C\uD83E\uDDDC\u200D\u2640\uFE0F");
                    /*
                    let MermaidRes: any = await api('story/MermaidOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                      strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                      dwType: '1',
                      ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })
                    await wait(3000)
                    if (MermaidRes.iRet === 0) {
                      MermaidRes = await api('story/MermaidOpe', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '3',
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                      })
                      if (MermaidRes.iRet === 0) {
                        console.log(`拯救美人鱼成功`)
                      }
                    }
                    await wait(1000)
                    MermaidRes = await api('story/MermaidOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                      strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                      dwType: '2',
                      ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })
                    if (MermaidRes.iRet === 0)
                      console.log('获得金币:', MermaidRes.Data.ddwCoin)
            
                     */
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 79:
                _7.sent();
                if (!res.StoryInfo.StoryList[0].Special) return [3 /*break*/, 83];
                console.log("\u8239\u6765\u4E86\uFF0C\u4E58\u5BA2\u662F".concat(res.StoryInfo.StoryList[0].Special.strName));
                return [4 /*yield*/, api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '2',
                        triggerType: 0,
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 80:
                shipRes = _7.sent();
                console.log('正在下船，等待30s');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(30000)];
            case 81:
                _7.sent();
                return [4 /*yield*/, api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '3',
                        triggerType: 0,
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 82:
                shipRes = _7.sent();
                if (shipRes.iRet === 0)
                    console.log('船客接待成功');
                else
                    console.log('船客接待失败', shipRes);
                _7.label = 83;
            case 83:
                isCollector = false;
                if (!res.StoryInfo.StoryList[0].Collector) return [3 /*break*/, 89];
                console.log('收藏家出现');
                return [4 /*yield*/, api('story/CollectorOper', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,strStoryId,dwType,ddwTriggerDay', { strStoryId: res.StoryInfo.StoryList[0].strStoryId, dwType: '2', ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay })];
            case 84:
                // TODO 背包满了再卖给收破烂的
                res = _7.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 85:
                _7.sent();
                isCollector = true;
                return [4 /*yield*/, api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 86:
                // 清空背包
                res = _7.sent();
                bags_1 = [];
                for (_q = 0, _r = res.Data.Office; _q < _r.length; _q++) {
                    s = _r[_q];
                    bags_1.push(s.dwType);
                    bags_1.push(s.dwCount);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 87:
                _7.sent();
                strTypeCnt_1 = '';
                for (n = 0; n < bags_1.length; n++) {
                    if (n % 2 === 0)
                        strTypeCnt_1 += "".concat(bags_1[n], ":");
                    else
                        strTypeCnt_1 += "".concat(bags_1[n], "|");
                }
                if (!(bags_1.length !== 0)) return [3 /*break*/, 89];
                return [4 /*yield*/, api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone', { dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt_1 })];
            case 88:
                res = _7.sent();
                console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney);
                _7.label = 89;
            case 89: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 90:
                _7.sent();
                _7.label = 91;
            case 91: return [4 /*yield*/, api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 92:
                // 清空背包
                res = _7.sent();
                bags = [];
                for (_s = 0, _t = res.Data.Office; _s < _t.length; _s++) {
                    s = _t[_s];
                    bags.push(s.dwType);
                    bags.push(s.dwCount);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 93:
                _7.sent();
                strTypeCnt = '';
                for (n = 0; n < bags.length; n++) {
                    if (n % 2 === 0)
                        strTypeCnt += "".concat(bags[n], ":");
                    else
                        strTypeCnt += "".concat(bags[n], "|");
                }
                if (!(bags.length !== 0)) return [3 /*break*/, 95];
                return [4 /*yield*/, api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone', { dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt })];
            case 94:
                res = _7.sent();
                console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney);
                _7.label = 95;
            case 95: return [4 /*yield*/, api('story/QueryRubbishInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 96:
                // 垃圾🚮
                res = _7.sent();
                if (!(res.Data.StoryInfo.StoryList.length !== 0)) return [3 /*break*/, 103];
                console.log('有垃圾');
                return [4 /*yield*/, api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwType,ptag,source,strZone', {
                        dwType: '1',
                        dwRewardType: 0
                    })];
            case 97:
                _7.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 98:
                _7.sent();
                j = 1;
                _7.label = 99;
            case 99:
                if (!(j < 9)) return [3 /*break*/, 103];
                return [4 /*yield*/, api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwRubbishId,dwType,ptag,source,strZone', {
                        dwType: '2',
                        dwRewardType: 0,
                        dwRubbishId: j
                    })];
            case 100:
                res = _7.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1500)];
            case 101:
                _7.sent();
                _7.label = 102;
            case 102:
                j++;
                return [3 /*break*/, 99];
            case 103: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 任务➡️
            ];
            case 104:
                _7.sent();
                return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 105:
                // 任务➡️
                res = _7.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 106:
                _7.sent();
                _u = 0, _v = res.Data.TaskList;
                _7.label = 107;
            case 107:
                if (!(_u < _v.length)) return [3 /*break*/, 111];
                t = _v[_u];
                if (!([1, 2].indexOf(t.dwOrderId) > -1 && t.dwCompleteNum < t.dwTargetNum && t.strTaskName !== '升级1个建筑')) return [3 /*break*/, 110];
                console.log('开始任务➡️:', t.strTaskName);
                return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.ddwTaskId, configExtra: '' }, 'right')];
            case 108:
                res = _7.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.dwLookTime * 1000)];
            case 109:
                _7.sent();
                if (res.ret === 0) {
                    console.log('任务完成');
                }
                else {
                    console.log('任务失败', res);
                }
                _7.label = 110;
            case 110:
                _u++;
                return [3 /*break*/, 107];
            case 111: return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 112:
                res = _7.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 113:
                _7.sent();
                _w = 0, _x = res.Data.TaskList;
                _7.label = 114;
            case 114:
                if (!(_w < _x.length)) return [3 /*break*/, 118];
                t = _x[_w];
                if (!(t.dwCompleteNum === t.dwTargetNum && t.dwAwardStatus === 2)) return [3 /*break*/, 117];
                return [4 /*yield*/, api('Award', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.ddwTaskId }, 'right')];
            case 115:
                res = _7.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 116:
                _7.sent();
                if (res.ret === 0) {
                    try {
                        res = JSON.parse(res.data.prizeInfo);
                        console.log("\u9886\u5956\u6210\u529F:", res.ddwCoin, res.ddwMoney);
                    }
                    catch (e) {
                        console.log("\u9886\u5956\u6210\u529F:", res);
                    }
                }
                else {
                    console.log('领奖失败', res);
                }
                _7.label = 117;
            case 117:
                _w++;
                return [3 /*break*/, 114];
            case 118: return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 119:
                res = _7.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 120:
                _7.sent();
                if (!(res.Data.dwStatus === 3)) return [3 /*break*/, 122];
                return [4 /*yield*/, api('story/ActTaskAward', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 121:
                res = _7.sent();
                if (res.ret === 0) {
                    console.log('100财富任务完成');
                }
                _7.label = 122;
            case 122: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 导游
            ];
            case 123:
                _7.sent();
                return [4 /*yield*/, api('user/EmployTourGuideInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 124:
                // 导游
                res = _7.sent();
                if (!!res.TourGuideList) return [3 /*break*/, 125];
                console.log('手动雇佣4个试用导游');
                return [3 /*break*/, 130];
            case 125:
                _y = 0, _z = res.TourGuideList;
                _7.label = 126;
            case 126:
                if (!(_y < _z.length)) return [3 /*break*/, 130];
                e = _z[_y];
                if (!(e.strBuildIndex !== 'food' && e.ddwRemainTm === 0)) return [3 /*break*/, 129];
                return [4 /*yield*/, api('user/EmployTourGuide', '_cfd_t,bizCode,ddwConsumeCoin,dwEnv,dwIsFree,ptag,source,strBuildIndex,strZone', { ddwConsumeCoin: e.ddwCostCoin, dwIsFree: 0, strBuildIndex: e.strBuildIndex })];
            case 127:
                employ = _7.sent();
                if (employ.iRet === 0)
                    console.log("\u96C7\u4F63".concat(e.strBuildIndex, "\u5BFC\u6E38\u6210\u529F"));
                if (employ.iRet === 2003)
                    return [3 /*break*/, 130];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 128:
                _7.sent();
                _7.label = 129;
            case 129:
                _y++;
                return [3 /*break*/, 126];
            case 130: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 131:
                _7.sent();
                _0 = 0, _1 = ['fun', 'shop', 'sea', 'food'];
                _7.label = 132;
            case 132:
                if (!(_0 < _1.length)) return [3 /*break*/, 136];
                b = _1[_0];
                return [4 /*yield*/, api('user/CollectCoin', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b, dwType: '1' })];
            case 133:
                res = _7.sent();
                console.log("".concat(b, "\u6536\u91D1\u5E01:"), res.ddwCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 134:
                _7.sent();
                _7.label = 135;
            case 135:
                _0++;
                return [3 /*break*/, 132];
            case 136:
                i++;
                return [3 /*break*/, 3];
            case 137:
                _2 = 0, _3 = cookiesArr.entries();
                _7.label = 138;
            case 138:
                if (!(_2 < _3.length)) return [3 /*break*/, 147];
                _4 = _3[_2], index_1 = _4[0], value = _4[1];
                cookie = value;
                if (!(shareCodeHW.length === 0)) return [3 /*break*/, 140];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('jxcfd')];
            case 139:
                shareCodeHW = _7.sent();
                _7.label = 140;
            case 140: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('jxcfd', 30)];
            case 141:
                pool = _7.sent();
                shareCode = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], shareCodeSelf, true), shareCodeHW, true), pool, true)));
                _5 = 0, shareCode_1 = shareCode;
                _7.label = 142;
            case 142:
                if (!(_5 < shareCode_1.length)) return [3 /*break*/, 146];
                code = shareCode_1[_5];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\u3010\u8D26\u53F7".concat(index_1 + 1, "\u3011 ").concat(UserName, " \u53BB\u52A9\u529B ").concat(code));
                return [4 /*yield*/, api('story/helpbystage', '_cfd_t,bizCode,dwEnv,ptag,source,strShareId,strZone', { strShareId: code })];
            case 143:
                res = _7.sent();
                if (res.iRet === 0) {
                    console.log('助力成功:', res.Data.GuestPrizeInfo.strPrizeName);
                }
                else if (res.iRet === 2190 || res.sErrMsg === '达到助力上限') {
                    console.log('上限');
                    return [3 /*break*/, 146];
                }
                else if (res.iRet === 1023) {
                    console.log('信号弱');
                    return [3 /*break*/, 146];
                }
                else if (res.iRet === 2191) {
                    console.log('已助力');
                }
                else {
                    console.log('其他错误:', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 144:
                _7.sent();
                _7.label = 145;
            case 145:
                _5++;
                return [3 /*break*/, 142];
            case 146:
                _2++;
                return [3 /*break*/, 138];
            case 147: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params, taskPosition) {
    if (params === void 0) { params = {}; }
    if (taskPosition === void 0) { taskPosition = ''; }
    return __awaiter(this, void 0, void 0, function () {
        var timestamp, url, t, bizCode, _i, _a, _b, key, value, h5st, data;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    timestamp = Date.now();
                    t = [
                        { key: 'strZone', value: 'jxbfd' },
                        { key: 'source', value: 'jxbfd' },
                        { key: 'dwEnv', value: '7' },
                        { key: 'ptag', value: '' },
                        { key: '_cfd_t', value: timestamp.toString() },
                    ];
                    if (['GetUserTaskStatusList', 'Award', 'DoTask'].includes(fn)) {
                        bizCode = void 0;
                        if (!params.bizCode) {
                            bizCode = taskPosition === 'right' ? 'jxbfddch' : 'jxbfd';
                        }
                        else {
                            bizCode = params.bizCode;
                        }
                        url = "https://m.jingxi.com/newtasksys/newtasksys_front/".concat(fn, "?strZone=jxbfd&bizCode=").concat(bizCode, "&source=jxbfd&dwEnv=7&_cfd_t=").concat(timestamp, "&ptag=&_stk=").concat(encodeURIComponent(stk), "&_ste=1&_=").concat(Date.now(), "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls");
                    }
                    else {
                        url = "https://m.jingxi.com/jxbfd/".concat(fn, "?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=").concat(timestamp, "&ptag=&_stk=").concat(encodeURIComponent(stk), "&_ste=1&_=").concat(timestamp, "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls");
                    }
                    for (_i = 0, _a = Object.entries(params); _i < _a.length; _i++) {
                        _b = _a[_i], key = _b[0], value = _b[1];
                        t.push({ key: key, value: value });
                        url += "&".concat(key, "=").concat(value);
                    }
                    h5st = (0, V3_1.geth5st)(t, '92a36');
                    url += "&h5st=".concat(encodeURIComponent(h5st));
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'Accept': '*/*',
                                'Connection': 'keep-alive',
                                'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                                'User-Agent': ua,
                                'Referer': 'https://st.jingxi.com/',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_c.sent()).data;
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
                        console.log('领奖成功:', res);
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
