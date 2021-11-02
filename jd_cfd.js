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
var axi = axios_1["default"].create({ timeout: 10000 });
var cookie = '', res = '', UserName, index;
var shareCodes = [], shareCodesSelf = [], shareCodesHW = [], isCollector = false, USER_AGENT = 'jdpingou;', token = {};
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, e_1, todayMoney, flag, dwPageIndex, _i, _a, t, _b, _c, xb, tasks, _d, _e, t, prizeInfo, CardList, cards, _f, CardList_1, card, richcard, coincard, coincardUsing, richcardUsing, _g, coincard_1, card, _h, richcard_1, card, j, j, wallet, build, minLV, _j, _k, b, dwCurProgress, strDT, strMyShareId, ddwSeasonStartTm, strLT, RealTmReport, j, employee, _l, employee_1, emp, empRes, _m, _o, sign, MermaidRes, shipRes, bags_1, _p, _q, s, strTypeCnt_1, n, bags, _r, _s, s, strTypeCnt, n, j, _t, _u, t, _v, _w, t, _x, _y, e, employ, _z, _0, b, i, data, e_2, j;
    var _1;
    return __generator(this, function (_2) {
        switch (_2.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _2.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _2.sent();
                i = 0;
                _2.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 156];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                token = (0, TS_USER_AGENTS_1.getJxToken)(cookie);
                _2.label = 4;
            case 4:
                _2.trys.push([4, 6, , 7]);
                return [4 /*yield*/, makeShareCodes()];
            case 5:
                _2.sent();
                return [3 /*break*/, 7];
            case 6:
                e_1 = _2.sent();
                console.log(e_1);
                return [3 /*break*/, 7];
            case 7:
                todayMoney = 0, flag = true;
                dwPageIndex = 0;
                _2.label = 8;
            case 8:
                if (!(dwPageIndex < 5)) return [3 /*break*/, 12];
                if (!flag)
                    return [3 /*break*/, 12];
                return [4 /*yield*/, api('user/GetMoneyDetail', '_cfd_t,bizCode,dwEnv,dwPageIndex,dwPageSize,dwProperty,dwQueryType,ptag,source,strZone', { dwQueryType: 0, dwPageIndex: 1, dwPageSize: 10, dwProperty: 1 })];
            case 9:
                res = _2.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 10:
                _2.sent();
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
                _2.label = 11;
            case 11:
                dwPageIndex++;
                return [3 /*break*/, 8];
            case 12:
                console.log('今日累计获得财富:', todayMoney);
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone', {
                        ddwTaskId: '',
                        strShareId: '',
                        strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task',
                        strPgtimestamp: token.strPgtimestamp,
                        strPhoneID: token.strPhoneID,
                        strPgUUNum: token.strPgUUNum
                    })];
            case 13:
                // 离线
                res = _2.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                    // 寻宝
                ];
            case 14:
                _2.sent();
                _b = 0, _c = res.XbStatus.XBDetail;
                _2.label = 15;
            case 15:
                if (!(_b < _c.length)) return [3 /*break*/, 19];
                xb = _c[_b];
                if (!(xb.dwRemainCnt !== 0)) return [3 /*break*/, 18];
                return [4 /*yield*/, api('user/TreasureHunt', '_cfd_t,bizCode,dwEnv,ptag,source,strIndex,strZone', { strIndex: xb.strIndex })];
            case 16:
                res = _2.sent();
                if (res.iRet === 0) {
                    console.log('发现宝物:', res.AwardInfo.ddwValue);
                }
                else {
                    console.log('寻宝失败:', res);
                    return [3 /*break*/, 19];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 17:
                _2.sent();
                _2.label = 18;
            case 18:
                _b++;
                return [3 /*break*/, 15];
            case 19:
                tasks = void 0;
                return [4 /*yield*/, api('story/GetPropTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 20:
                // 加速卡任务
                tasks = _2.sent();
                _d = 0, _e = tasks.Data.TaskList;
                _2.label = 21;
            case 21:
                if (!(_d < _e.length)) return [3 /*break*/, 28];
                t = _e[_d];
                if (!(t.dwCompleteNum === t.dwTargetNum && t.dwAwardStatus === 2)) return [3 /*break*/, 24];
                return [4 /*yield*/, api('Award', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', { bizCode: tasks.Data.strZone, taskId: t.ddwTaskId })];
            case 22:
                res = _2.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 23:
                _2.sent();
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
                    return [3 /*break*/, 28];
                }
                _2.label = 24;
            case 24:
                if (!(t.dwCompleteNum < t.dwTargetNum && t.strTaskName !== '去接待NPC')) return [3 /*break*/, 27];
                console.log(t.strTaskName);
                return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { bizCode: tasks.Data.strZone, taskId: t.ddwTaskId })];
            case 25:
                res = _2.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)((_1 = t.dwLookTime * 1000) !== null && _1 !== void 0 ? _1 : 2000)];
            case 26:
                _2.sent();
                if (res.ret === 0) {
                    console.log('加速卡任务完成');
                }
                else {
                    console.log('加速卡任务失败', res);
                    return [3 /*break*/, 28];
                }
                _2.label = 27;
            case 27:
                _d++;
                return [3 /*break*/, 21];
            case 28: return [4 /*yield*/, api('user/GetPropCardCenterInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 29:
                // 加速卡
                res = _2.sent();
                richcard = res.cardInfo.richcard, coincard = res.cardInfo.coincard;
                coincardUsing = coincard.filter(function (card) {
                    return card.dwCardState === 2;
                });
                richcardUsing = richcard.filter(function (card) {
                    return card.dwCardState === 2;
                });
                if (!(coincardUsing.length === 0)) return [3 /*break*/, 33];
                _g = 0, coincard_1 = coincard;
                _2.label = 30;
            case 30:
                if (!(_g < coincard_1.length)) return [3 /*break*/, 33];
                card = coincard_1[_g];
                if (!(card.dwIsCanUseNext === 1)) return [3 /*break*/, 32];
                return [4 /*yield*/, api('user/UsePropCard', '_cfd_t,bizCode,dwCardType,dwEnv,ptag,source,strCardTypeIndex,strZone', { dwCardType: 1, strCardTypeIndex: encodeURIComponent(card.strCardTypeIndex) })];
            case 31:
                res = _2.sent();
                if (res.iRet === 0) {
                    console.log('金币加速卡使用成功');
                }
                else {
                    console.log('金币加速卡使用失败', res);
                }
                return [3 /*break*/, 33];
            case 32:
                _g++;
                return [3 /*break*/, 30];
            case 33:
                if (!(richcardUsing.length === 0)) return [3 /*break*/, 40];
                _h = 0, richcard_1 = richcard;
                _2.label = 34;
            case 34:
                if (!(_h < richcard_1.length)) return [3 /*break*/, 40];
                card = richcard_1[_h];
                if (!(card.dwIsCanUseNext === 1)) return [3 /*break*/, 39];
                j = 0;
                _2.label = 35;
            case 35:
                if (!(j < card.dwCardNums)) return [3 /*break*/, 39];
                return [4 /*yield*/, api('user/UsePropCard', '_cfd_t,bizCode,dwCardType,dwEnv,ptag,source,strCardTypeIndex,strZone', { dwCardType: 2, strCardTypeIndex: encodeURIComponent(card.strCardTypeIndex) })];
            case 36:
                res = _2.sent();
                if (res.iRet === 0) {
                    console.log('点券加速卡使用成功');
                }
                else {
                    console.log('点券加速卡使用失败', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 37:
                _2.sent();
                _2.label = 38;
            case 38:
                j++;
                return [3 /*break*/, 35];
            case 39:
                _h++;
                return [3 /*break*/, 34];
            case 40:
                // 任务⬇️
                console.log('底部任务列表开始');
                j = 0;
                _2.label = 41;
            case 41:
                if (!(j < 30)) return [3 /*break*/, 45];
                return [4 /*yield*/, task()];
            case 42:
                if ((_2.sent()) === 0) {
                    return [3 /*break*/, 45];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 43:
                _2.sent();
                _2.label = 44;
            case 44:
                j++;
                return [3 /*break*/, 41];
            case 45:
                console.log('底部任务列表结束');
                _2.label = 46;
            case 46:
                if (!1) return [3 /*break*/, 62];
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone', {
                        ddwTaskId: '',
                        strShareId: '',
                        strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task',
                        strPgtimestamp: token.strPgtimestamp,
                        strPhoneID: token.strPhoneID,
                        strPgUUNum: token.strPgUUNum
                    })];
            case 47:
                res = _2.sent();
                wallet = res.ddwCoinBalance;
                console.log('金币余额:', wallet);
                build = '', minLV = 99999;
                _j = 0, _k = ['food', 'fun', 'shop', 'sea'];
                _2.label = 48;
            case 48:
                if (!(_j < _k.length)) return [3 /*break*/, 52];
                b = _k[_j];
                return [4 /*yield*/, api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b })];
            case 49:
                res = _2.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 50:
                _2.sent();
                if (res.dwBuildLvl <= minLV) {
                    minLV = res.dwBuildLvl;
                    build = b;
                }
                _2.label = 51;
            case 51:
                _j++;
                return [3 /*break*/, 48];
            case 52:
                console.log('最低等级建筑:', minLV, build);
                return [4 /*yield*/, api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: build })];
            case 53:
                res = _2.sent();
                console.log(build + "\u5347\u7EA7\u9700\u8981:", res.ddwNextLvlCostCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 54:
                _2.sent();
                if (!(res.dwCanLvlUp === 1 && res.ddwNextLvlCostCoin * 2 <= wallet)) return [3 /*break*/, 59];
                return [4 /*yield*/, api('user/BuildLvlUp', '_cfd_t,bizCode,ddwCostCoin,dwEnv,ptag,source,strBuildIndex,strZone', { ddwCostCoin: res.ddwNextLvlCostCoin, strBuildIndex: build })];
            case 55:
                res = _2.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 56:
                _2.sent();
                if (!(res.iRet === 0)) return [3 /*break*/, 58];
                console.log("\u5347\u7EA7\u6210\u529F");
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 57:
                _2.sent();
                _2.label = 58;
            case 58: return [3 /*break*/, 60];
            case 59: return [3 /*break*/, 62];
            case 60: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 61:
                _2.sent();
                return [3 /*break*/, 46];
            case 62: return [4 /*yield*/, api('user/ComposePearlState', '', { __t: Date.now(), dwGetType: 0 })];
            case 63:
                // 珍珠
                res = _2.sent();
                dwCurProgress = res.dwCurProgress, strDT = res.strDT, strMyShareId = res.strMyShareId, ddwSeasonStartTm = res.ddwSeasonStartTm;
                strLT = res.oPT[res.ddwCurTime % (res.oPT.length)];
                console.log("\u5DF2\u5408\u6210" + dwCurProgress + "\u4E2A\u73CD\u73E0\uFF0C" + res.ddwVirHb / 100 + "\u5143\u7EA2\u5305");
                if (!(res.dayDrawInfo.dwIsDraw === 0)) return [3 /*break*/, 66];
                return [4 /*yield*/, api("user/GetPearlDailyReward", "__t,strZone", { __t: Date.now() })];
            case 64:
                res = _2.sent();
                if (!(res.iRet === 0)) return [3 /*break*/, 66];
                return [4 /*yield*/, api("user/PearlDailyDraw", "__t,ddwSeaonStart,strToken,strZone", { __t: Date.now(), ddwSeaonStart: ddwSeasonStartTm, strToken: res.strToken })];
            case 65:
                res = _2.sent();
                if (res.strPrizeName) {
                    console.log('抽奖获得：', res.strPrizeName);
                }
                else {
                    console.log('抽奖失败？', res);
                }
                _2.label = 66;
            case 66:
                if (!strDT) return [3 /*break*/, 75];
                console.log('继续合成');
                RealTmReport = (0, TS_USER_AGENTS_1.getRandomNumberByRange)(10, 20);
                console.log('本次合成需要上报：', RealTmReport);
                j = 0;
                _2.label = 67;
            case 67:
                if (!(j < RealTmReport)) return [3 /*break*/, 73];
                return [4 /*yield*/, api('user/RealTmReport', '', { __t: Date.now(), dwIdentityType: 0, strBussKey: 'composegame', strMyShareId: strMyShareId, ddwCount: 10 })];
            case 68:
                res = _2.sent();
                if (res.iRet === 0)
                    console.log("\u6E38\u620F\u4E2D\u9014\u4E0A\u62A5" + (j + 1) + "\uFF1AOK");
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 69:
                _2.sent();
                if (!((0, TS_USER_AGENTS_1.getRandomNumberByRange)(1, 6) === 2)) return [3 /*break*/, 72];
                return [4 /*yield*/, api('user/ComposePearlAward', '__t,size,strBT,strZone,type', { __t: Date.now(), size: 1, strBT: strDT, type: 4 })];
            case 70:
                res = _2.sent();
                if (res.iRet === 0) {
                    console.log("\u4E0A\u62A5\u5F97\u7EA2\u5305:" + res.ddwAwardHb / 100 + "\u7EA2\u5305\uFF0C\u5F53\u524D\u6709" + res.ddwVirHb / 100);
                }
                else {
                    console.log('上报得红包失败：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 71:
                _2.sent();
                _2.label = 72;
            case 72:
                j++;
                return [3 /*break*/, 67];
            case 73: return [4 /*yield*/, api("user/ComposePearlAddProcess", '__t,strBT,strLT,strZone', { __t: Date.now(), strBT: strDT, strLT: strLT })];
            case 74:
                // 珍珠奖励
                res = _2.sent();
                if (res.iRet === 0) {
                    console.log("\u5408\u6210\u6210\u529F\uFF1A\u83B7\u5F97" + res.ddwAwardHb / 100 + "\u7EA2\u5305\uFF0C\u5F53\u524D\u6709" + res.dwCurProgress + "\u73CD\u73E0\uFF0C" + res.ddwVirHb / 100 + "\u7EA2\u5305");
                }
                else {
                    console.log('合成失败：', res);
                }
                _2.label = 75;
            case 75: return [4 /*yield*/, api('story/GetTakeAggrPage', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 76:
                // 签到 助力奖励
                res = _2.sent();
                employee = res.Data.Employee.EmployeeList.filter(function (e) {
                    return e.dwStatus === 0;
                });
                _l = 0, employee_1 = employee;
                _2.label = 77;
            case 77:
                if (!(_l < employee_1.length)) return [3 /*break*/, 81];
                emp = employee_1[_l];
                return [4 /*yield*/, api('story/helpdraw', '_cfd_t,bizCode,dwEnv,dwUserId,ptag,source,strZone', { dwUserId: emp.dwId })];
            case 78:
                empRes = _2.sent();
                if (empRes.iRet === 0)
                    console.log('助力奖励领取成功：', empRes.Data.ddwCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 79:
                _2.sent();
                _2.label = 80;
            case 80:
                _l++;
                return [3 /*break*/, 77];
            case 81:
                if (!(res.Data.Sign.dwTodayStatus === 0)) return [3 /*break*/, 86];
                console.log('今日未签到');
                _m = 0, _o = res.Data.Sign.SignList;
                _2.label = 82;
            case 82:
                if (!(_m < _o.length)) return [3 /*break*/, 85];
                sign = _o[_m];
                if (!(sign.dwDayId === res.Data.Sign.dwTodayId)) return [3 /*break*/, 84];
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
            case 83:
                res = _2.sent();
                if (res.iRet === 0)
                    console.log('签到成功：', res.Data.ddwCoin, res.Data.ddwMoney, res.Data.strPrizePool);
                else
                    console.log('签到失败：', res);
                return [3 /*break*/, 85];
            case 84:
                _m++;
                return [3 /*break*/, 82];
            case 85: return [3 /*break*/, 87];
            case 86:
                console.log('今日已经签到');
                _2.label = 87;
            case 87: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 88:
                _2.sent();
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strVersion,strZone', {
                        ddwTaskId: '',
                        strShareId: '',
                        strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task,cfd_has_show_selef_point',
                        strPgUUNum: token.strPgUUNum,
                        strPgtimestamp: token.strPgtimestamp,
                        strPhoneID: token.strPhoneID,
                        strVersion: '1.0.1'
                    })];
            case 89:
                res = _2.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 90:
                _2.sent();
                if (!res.StoryInfo.StoryList) return [3 /*break*/, 110];
                if (!res.StoryInfo.StoryList[0].Mermaid) return [3 /*break*/, 97];
                console.log("\u53D1\u73B0\u7F8E\u4EBA\u9C7C\uD83E\uDDDC\u200D\u2640\uFE0F");
                return [4 /*yield*/, api('story/MermaidOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '1',
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 91:
                MermaidRes = _2.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 92:
                _2.sent();
                if (!(MermaidRes.iRet === 0)) return [3 /*break*/, 94];
                return [4 /*yield*/, api('story/MermaidOpe', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '3',
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 93:
                MermaidRes = _2.sent();
                if (MermaidRes.iRet === 0) {
                    console.log("\u62EF\u6551\u7F8E\u4EBA\u9C7C\u6210\u529F");
                }
                _2.label = 94;
            case 94: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 95:
                _2.sent();
                return [4 /*yield*/, api('story/MermaidOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '2',
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 96:
                MermaidRes = _2.sent();
                if (MermaidRes.iRet === 0)
                    console.log('获得金币:', MermaidRes.Data.ddwCoin);
                _2.label = 97;
            case 97: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 98:
                _2.sent();
                if (!res.StoryInfo.StoryList[0].Special) return [3 /*break*/, 102];
                console.log("\u8239\u6765\u4E86\uFF0C\u4E58\u5BA2\u662F" + res.StoryInfo.StoryList[0].Special.strName);
                return [4 /*yield*/, api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '2',
                        triggerType: 0,
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 99:
                shipRes = _2.sent();
                console.log('正在下船，等待30s');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(30000)];
            case 100:
                _2.sent();
                return [4 /*yield*/, api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '3',
                        triggerType: 0,
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 101:
                shipRes = _2.sent();
                if (shipRes.iRet === 0)
                    console.log('船客接待成功');
                else
                    console.log('船客接待失败', shipRes);
                _2.label = 102;
            case 102:
                isCollector = false;
                if (!res.StoryInfo.StoryList[0].Collector) return [3 /*break*/, 108];
                console.log('收藏家出现');
                return [4 /*yield*/, api('story/CollectorOper', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,strStoryId,dwType,ddwTriggerDay', { strStoryId: res.StoryInfo.StoryList[0].strStoryId, dwType: '2', ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay })];
            case 103:
                // TODO 背包满了再卖给收破烂的
                res = _2.sent();
                console.log(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 104:
                _2.sent();
                isCollector = true;
                return [4 /*yield*/, api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 105:
                // 清空背包
                res = _2.sent();
                bags_1 = [];
                for (_p = 0, _q = res.Data.Office; _p < _q.length; _p++) {
                    s = _q[_p];
                    bags_1.push(s.dwType);
                    bags_1.push(s.dwCount);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 106:
                _2.sent();
                strTypeCnt_1 = '';
                for (n = 0; n < bags_1.length; n++) {
                    if (n % 2 === 0)
                        strTypeCnt_1 += bags_1[n] + ":";
                    else
                        strTypeCnt_1 += bags_1[n] + "|";
                }
                if (!(bags_1.length !== 0)) return [3 /*break*/, 108];
                return [4 /*yield*/, api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone', { dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt_1 })];
            case 107:
                res = _2.sent();
                console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney);
                _2.label = 108;
            case 108: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 109:
                _2.sent();
                _2.label = 110;
            case 110: return [4 /*yield*/, api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 111:
                // 清空背包
                res = _2.sent();
                bags = [];
                for (_r = 0, _s = res.Data.Office; _r < _s.length; _r++) {
                    s = _s[_r];
                    bags.push(s.dwType);
                    bags.push(s.dwCount);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 112:
                _2.sent();
                strTypeCnt = '';
                for (n = 0; n < bags.length; n++) {
                    if (n % 2 === 0)
                        strTypeCnt += bags[n] + ":";
                    else
                        strTypeCnt += bags[n] + "|";
                }
                if (!(bags.length !== 0)) return [3 /*break*/, 114];
                return [4 /*yield*/, api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone', { dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt })];
            case 113:
                res = _2.sent();
                console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney);
                _2.label = 114;
            case 114: return [4 /*yield*/, api('story/QueryRubbishInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 115:
                // 垃圾🚮
                res = _2.sent();
                if (!(res.Data.StoryInfo.StoryList.length !== 0)) return [3 /*break*/, 122];
                console.log('有垃圾');
                return [4 /*yield*/, api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwType,ptag,source,strZone', {
                        dwType: '1',
                        dwRewardType: 0
                    })];
            case 116:
                _2.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 117:
                _2.sent();
                j = 1;
                _2.label = 118;
            case 118:
                if (!(j < 9)) return [3 /*break*/, 122];
                return [4 /*yield*/, api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwRubbishId,dwType,ptag,source,strZone', {
                        dwType: '2',
                        dwRewardType: 0,
                        dwRubbishId: j
                    })];
            case 119:
                res = _2.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1500)];
            case 120:
                _2.sent();
                _2.label = 121;
            case 121:
                j++;
                return [3 /*break*/, 118];
            case 122: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 任务➡️
            ];
            case 123:
                _2.sent();
                return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 124:
                // 任务➡️
                tasks = _2.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 125:
                _2.sent();
                _t = 0, _u = tasks.Data.TaskList;
                _2.label = 126;
            case 126:
                if (!(_t < _u.length)) return [3 /*break*/, 130];
                t = _u[_t];
                if (!([1, 2].indexOf(t.dwOrderId) > -1 && t.dwCompleteNum < t.dwTargetNum && t.strTaskName != '热气球接待20位游客')) return [3 /*break*/, 129];
                console.log('开始任务➡️:', t.strTaskName);
                return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.ddwTaskId, configExtra: '' }, 'right')];
            case 127:
                res = _2.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.dwLookTime * 1000)];
            case 128:
                _2.sent();
                if (res.ret === 0) {
                    console.log('任务完成');
                }
                else {
                    console.log('任务失败', res);
                }
                _2.label = 129;
            case 129:
                _t++;
                return [3 /*break*/, 126];
            case 130: return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 131:
                tasks = _2.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 132:
                _2.sent();
                _v = 0, _w = tasks.Data.TaskList;
                _2.label = 133;
            case 133:
                if (!(_v < _w.length)) return [3 /*break*/, 137];
                t = _w[_v];
                if (!(t.dwCompleteNum === t.dwTargetNum && t.dwAwardStatus === 2)) return [3 /*break*/, 136];
                return [4 /*yield*/, api('Award', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.ddwTaskId }, 'right')];
            case 134:
                res = _2.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 135:
                _2.sent();
                if (res.ret === 0) {
                    console.log("\u9886\u5956\u6210\u529F:", res);
                }
                else {
                    console.log('领奖失败', res);
                }
                _2.label = 136;
            case 136:
                _v++;
                return [3 /*break*/, 133];
            case 137: return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 138:
                tasks = _2.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 139:
                _2.sent();
                if (!(tasks.Data.dwStatus === 3)) return [3 /*break*/, 141];
                return [4 /*yield*/, api('story/ActTaskAward', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 140:
                res = _2.sent();
                if (res.ret === 0) {
                    console.log('100财富任务完成');
                }
                _2.label = 141;
            case 141: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 导游
            ];
            case 142:
                _2.sent();
                return [4 /*yield*/, api('user/EmployTourGuideInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 143:
                // 导游
                res = _2.sent();
                if (!!res.TourGuideList) return [3 /*break*/, 144];
                console.log('手动雇佣4个试用导游');
                return [3 /*break*/, 149];
            case 144:
                _x = 0, _y = res.TourGuideList;
                _2.label = 145;
            case 145:
                if (!(_x < _y.length)) return [3 /*break*/, 149];
                e = _y[_x];
                if (!(e.strBuildIndex !== 'food' && e.ddwRemainTm === 0)) return [3 /*break*/, 148];
                return [4 /*yield*/, api('user/EmployTourGuide', '_cfd_t,bizCode,ddwConsumeCoin,dwEnv,dwIsFree,ptag,source,strBuildIndex,strZone', { ddwConsumeCoin: e.ddwCostCoin, dwIsFree: 0, strBuildIndex: e.strBuildIndex })];
            case 146:
                employ = _2.sent();
                if (employ.iRet === 0)
                    console.log("\u96C7\u4F63" + e.strBuildIndex + "\u5BFC\u6E38\u6210\u529F");
                if (employ.iRet === 2003)
                    return [3 /*break*/, 149];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 147:
                _2.sent();
                _2.label = 148;
            case 148:
                _x++;
                return [3 /*break*/, 145];
            case 149: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 150:
                _2.sent();
                _z = 0, _0 = ['fun', 'shop', 'sea', 'food'];
                _2.label = 151;
            case 151:
                if (!(_z < _0.length)) return [3 /*break*/, 155];
                b = _0[_z];
                return [4 /*yield*/, api('user/CollectCoin', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b, dwType: '1' })];
            case 152:
                res = _2.sent();
                console.log(b + "\u6536\u91D1\u5E01:", res.ddwCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 153:
                _2.sent();
                _2.label = 154;
            case 154:
                _z++;
                return [3 /*break*/, 151];
            case 155:
                i++;
                return [3 /*break*/, 3];
            case 156:
                i = 0;
                _2.label = 157;
            case 157:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 168];
                return [4 /*yield*/, getCodesHW()
                    // 获取随机助力码
                ];
            case 158:
                _2.sent();
                _2.label = 159;
            case 159:
                _2.trys.push([159, 161, , 162]);
                return [4 /*yield*/, axi.get("https://api.jdsharecode.xyz/api/jxcfd/30", { timeout: 10000 })];
            case 160:
                data = (_2.sent()).data;
                console.log('获取到30个随机助力码:', data.data);
                shareCodes = __spreadArray(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true), data.data, true);
                return [3 /*break*/, 162];
            case 161:
                e_2 = _2.sent();
                console.log('获取助力池失败');
                shareCodes = __spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true);
                return [3 /*break*/, 162];
            case 162:
                j = 0;
                _2.label = 163;
            case 163:
                if (!(j < shareCodes.length)) return [3 /*break*/, 167];
                cookie = cookiesArr[i];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B:", shareCodes[j]);
                return [4 /*yield*/, api('story/helpbystage', '_cfd_t,bizCode,dwEnv,ptag,source,strShareId,strZone', { strShareId: shareCodes[j] })];
            case 164:
                res = _2.sent();
                if (res.iRet === 0) {
                    console.log('助力成功:', res.Data.GuestPrizeInfo.strPrizeName);
                }
                else if (res.iRet === 2190) {
                    console.log('上限');
                    return [3 /*break*/, 167];
                }
                else if (res.iRet === 2191) {
                    console.log('已助力');
                }
                else {
                    console.log('其他错误:', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 165:
                _2.sent();
                _2.label = 166;
            case 166:
                j++;
                return [3 /*break*/, 163];
            case 167:
                i++;
                return [3 /*break*/, 157];
            case 168: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params, taskPosition) {
    if (params === void 0) { params = {}; }
    if (taskPosition === void 0) { taskPosition = ''; }
    return new Promise(function (resolve, reject) {
        var url;
        if (['GetUserTaskStatusList', 'Award', 'DoTask'].includes(fn)) {
            var bizCode = void 0;
            if (!params.bizCode) {
                bizCode = taskPosition === 'right' ? 'jxbfddch' : 'jxbfd';
            }
            else {
                bizCode = params.bizCode;
            }
            url = "https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?strZone=jxbfd&bizCode=" + bizCode + "&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2";
        }
        else {
            url = "https://m.jingxi.com/jxbfd/" + fn + "?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&_ste=1&_=" + Date.now() + "&sceneval=2&_stk=" + encodeURIComponent(stk);
        }
        url = (0, TS_USER_AGENTS_1.h5st)(url, stk, params, 10032);
        axios_1["default"].get(url, {
            headers: {
                'Host': 'm.jingxi.com',
                'Referer': 'https://st.jingxi.com/',
                'User-Agent': USER_AGENT,
                'Cookie': cookie
            }
        }).then(function (res) {
            resolve(res.data);
        })["catch"](function (e) {
            reject(e);
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
                        console.log('领奖成功:', res.data);
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
function makeShareCodes() {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_3;
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
                    shareCodesSelf.push(res.strMyShareId);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 2:
                    bean = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 3:
                    farm = _a.sent();
                    pin = ts_md5_1.Md5.hashStr(cookie.match(/pt_pin=([^;]*)/)[1]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/jxcfd?sharecode=" + res.strMyShareId + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin)];
                case 4:
                    data = (_a.sent()).data;
                    console.log(data.message);
                    return [3 /*break*/, 6];
                case 5:
                    e_3 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_3);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function getCodesHW() {
    return __awaiter(this, void 0, void 0, function () {
        var data, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axi.get("https://api.jdsharecode.xyz/api/HW_CODES", { timeout: 10000 })];
                case 1:
                    data = (_a.sent()).data;
                    shareCodesHW = data['jxcfd'] || [];
                    return [3 /*break*/, 3];
                case 2:
                    e_4 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
