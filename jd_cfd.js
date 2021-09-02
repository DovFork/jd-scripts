"use strict";
/**
 * 京喜财富岛
 * 包含雇佣导游，建议每小时1次
 *
 * 此版本暂定默认帮助HelloWorld，帮助助力池
 * export HELP_HW = true    // 帮助HelloWorld
 * export HELP_POOL = true  // 帮助助力池
 *
 * 使用jd_env_copy.js同步js环境变量到ts
 * 使用jd_ts_test.ts测试环境变量
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
var date_fns_1 = require("date-fns");
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var ts_md5_1 = require("ts-md5");
var dotenv = require("dotenv");
var CryptoJS = require('crypto-js');
var notify = require('./sendNotify');
dotenv.config();
var appId = 10028, fingerprint, token = '', enCryptMethodJD;
var cookie = '', res = '', shareCodes = [], isCollector = false;
var HELP_HW = process.env.HELP_HW ? process.env.HELP_HW : "true";
console.log('帮助HelloWorld:', HELP_HW);
var HELP_POOL = process.env.HELP_POOL ? process.env.HELP_POOL : "true";
console.log('帮助助力池:', HELP_POOL);
var UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, _a, isLogin, nickName, e_1, token_1, wallet, build, minLV, _i, _b, b, strDT, strMyShareId, i_1, RealTmReport, j, _c, _d, stage, awardRes, employee, _e, employee_1, emp, empRes, _f, _g, sign, shipRes, bags_1, _h, _j, s, strTypeCnt_1, n, bags, _k, _l, s, strTypeCnt, n, j, tasks, t0, _m, _o, t, _p, _q, e, employ, _r, _s, t, _t, _u, b, data, e_2, data, e_3, i, j;
    return __generator(this, function (_v) {
        switch (_v.label) {
            case 0: return [4 /*yield*/, requestAlgo()];
            case 1:
                _v.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _v.sent();
                i = 0;
                _v.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 121];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.TotalBean)(cookie)];
            case 4:
                _a = _v.sent(), isLogin = _a.isLogin, nickName = _a.nickName;
                if (!isLogin) {
                    notify.sendNotify(__filename.split('/').pop(), "cookie\u5DF2\u5931\u6548\n\u4EAC\u4E1C\u8D26\u53F7" + index + "\uFF1A" + (nickName || UserName));
                    return [3 /*break*/, 120];
                }
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + (nickName || UserName) + "\n");
                _v.label = 5;
            case 5:
                _v.trys.push([5, 7, , 8]);
                return [4 /*yield*/, makeShareCodes()];
            case 6:
                _v.sent();
                return [3 /*break*/, 8];
            case 7:
                e_1 = _v.sent();
                console.log(e_1);
                return [3 /*break*/, 8];
            case 8:
                token_1 = getJxToken(cookie);
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone', {
                        ddwTaskId: '',
                        strShareId: '',
                        strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task',
                        strPgtimestamp: token_1.strPgtimestamp,
                        strPhoneID: token_1.strPhoneID,
                        strPgUUNum: token_1.strPgUUNum
                    })];
            case 9:
                // 离线
                res = _v.sent();
                wallet = res.ddwCoinBalance;
                console.log('金币余额:', wallet);
                console.log('离线收益:', res.Business.ddwCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                    // 升级建筑
                ];
            case 10:
                _v.sent();
                _v.label = 11;
            case 11:
                if (!1) return [3 /*break*/, 27];
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone', {
                        ddwTaskId: '',
                        strShareId: '',
                        strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task',
                        strPgtimestamp: token_1.strPgtimestamp,
                        strPhoneID: token_1.strPhoneID,
                        strPgUUNum: token_1.strPgUUNum
                    })];
            case 12:
                res = _v.sent();
                wallet = res.ddwCoinBalance;
                console.log('金币余额:', wallet);
                build = '', minLV = 99999;
                _i = 0, _b = ['food', 'fun', 'shop', 'sea'];
                _v.label = 13;
            case 13:
                if (!(_i < _b.length)) return [3 /*break*/, 17];
                b = _b[_i];
                return [4 /*yield*/, api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b })];
            case 14:
                res = _v.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 15:
                _v.sent();
                if (res.dwBuildLvl <= minLV) {
                    minLV = res.dwBuildLvl;
                    build = b;
                }
                _v.label = 16;
            case 16:
                _i++;
                return [3 /*break*/, 13];
            case 17:
                console.log('最低等级建筑:', minLV, build);
                return [4 /*yield*/, api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: build })];
            case 18:
                res = _v.sent();
                console.log(build + "\u5347\u7EA7\u9700\u8981:", res.ddwNextLvlCostCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 19:
                _v.sent();
                if (!(res.dwCanLvlUp === 1 && res.ddwNextLvlCostCoin * 2 <= wallet)) return [3 /*break*/, 24];
                return [4 /*yield*/, api('user/BuildLvlUp', '_cfd_t,bizCode,ddwCostCoin,dwEnv,ptag,source,strBuildIndex,strZone', { ddwCostCoin: res.ddwNextLvlCostCoin, strBuildIndex: build })];
            case 20:
                res = _v.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 21:
                _v.sent();
                if (!(res.iRet === 0)) return [3 /*break*/, 23];
                console.log("\u5347\u7EA7\u6210\u529F");
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 22:
                _v.sent();
                _v.label = 23;
            case 23: return [3 /*break*/, 25];
            case 24: return [3 /*break*/, 27];
            case 25: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 26:
                _v.sent();
                return [3 /*break*/, 11];
            case 27: return [4 /*yield*/, api('user/ComposeGameState', '', { dwFirst: 1 })];
            case 28:
                // 珍珠
                res = _v.sent();
                strDT = res.strDT, strMyShareId = res.strMyShareId;
                console.log("\u5DF2\u5408\u6210" + res.dwCurProgress + "\u4E2A\u73CD\u73E0");
                i_1 = 0;
                _v.label = 29;
            case 29:
                if (!(i_1 < 8 - res.dwCurProgress)) return [3 /*break*/, 38];
                console.log('继续合成');
                RealTmReport = (0, TS_USER_AGENTS_1.getRandomNumberByRange)(10, 20);
                console.log('本次合成需要上报：', RealTmReport);
                j = 0;
                _v.label = 30;
            case 30:
                if (!(j < RealTmReport)) return [3 /*break*/, 34];
                return [4 /*yield*/, api('user/RealTmReport', '', { dwIdentityType: 0, strBussKey: 'composegame', strMyShareId: strMyShareId, ddwCount: 5 })];
            case 31:
                res = _v.sent();
                if (res.iRet === 0)
                    console.log("\u6E38\u620F\u4E2D\u9014\u4E0A\u62A5" + (j + 1) + "\uFF1AOK");
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 32:
                _v.sent();
                _v.label = 33;
            case 33:
                j++;
                return [3 /*break*/, 30];
            case 34: return [4 /*yield*/, api('user/ComposeGameAddProcess', '__t,strBT,strZone', { __t: Date.now(), strBT: strDT })];
            case 35:
                res = _v.sent();
                console.log('游戏完成，已合成', res.dwCurProgress);
                console.log('游戏完成，等待3s');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 36:
                _v.sent();
                _v.label = 37;
            case 37:
                i_1++;
                return [3 /*break*/, 29];
            case 38: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 珍珠领奖
            ];
            case 39:
                _v.sent();
                return [4 /*yield*/, api('user/ComposeGameState', '', { dwFirst: 1 })];
            case 40:
                // 珍珠领奖
                res = _v.sent();
                _c = 0, _d = res.stagelist;
                _v.label = 41;
            case 41:
                if (!(_c < _d.length)) return [3 /*break*/, 45];
                stage = _d[_c];
                if (!(res.dwCurProgress >= stage.dwCurStageEndCnt && stage.dwIsAward === 0)) return [3 /*break*/, 44];
                return [4 /*yield*/, api('user/ComposeGameAward', '__t,dwCurStageEndCnt,strZone', {
                        __t: Date.now(),
                        dwCurStageEndCnt: stage.dwCurStageEndCnt
                    })];
            case 42:
                awardRes = _v.sent();
                console.log('珍珠领奖：', awardRes.ddwCoin, awardRes.addMonety);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 43:
                _v.sent();
                _v.label = 44;
            case 44:
                _c++;
                return [3 /*break*/, 41];
            case 45: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 签到 助力奖励
            ];
            case 46:
                _v.sent();
                return [4 /*yield*/, api('story/GetTakeAggrPage', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 47:
                // 签到 助力奖励
                res = _v.sent();
                employee = res.Data.Employee.EmployeeList.filter(function (e) {
                    return e.dwStatus === 0;
                });
                _e = 0, employee_1 = employee;
                _v.label = 48;
            case 48:
                if (!(_e < employee_1.length)) return [3 /*break*/, 52];
                emp = employee_1[_e];
                return [4 /*yield*/, api('story/helpdraw', '_cfd_t,bizCode,dwEnv,dwUserId,ptag,source,strZone', { dwUserId: emp.dwId })];
            case 49:
                empRes = _v.sent();
                if (empRes.iRet === 0)
                    console.log('助力奖励领取成功：', empRes.Data.ddwCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 50:
                _v.sent();
                _v.label = 51;
            case 51:
                _e++;
                return [3 /*break*/, 48];
            case 52:
                if (!(res.Data.Sign.dwTodayStatus === 0)) return [3 /*break*/, 56];
                _f = 0, _g = res.Data.Sign.SignList;
                _v.label = 53;
            case 53:
                if (!(_f < _g.length)) return [3 /*break*/, 56];
                sign = _g[_f];
                if (!(sign.dwDayId === res.Data.Sign.dwTodayId)) return [3 /*break*/, 55];
                return [4 /*yield*/, api('story/RewardSign', '_cfd_t,bizCode,ddwCoin,ddwMoney,dwEnv,dwPrizeLv,dwPrizeType,ptag,source,strPrizePool,strZone', {
                        ddwCoin: sign.ddwCoin,
                        ddwMoney: sign.ddwMoney,
                        dwPrizeLv: sign.dwBingoLevel,
                        dwPrizeType: sign.dwPrizeType,
                        strPrizePool: sign.strPrizePool
                    })];
            case 54:
                res = _v.sent();
                if (res.iRet === 0)
                    console.log('签到成功：', res.Data.ddwCoin, res.Data.ddwMoney, res.Data.strPrizePool);
                return [3 /*break*/, 56];
            case 55:
                _f++;
                return [3 /*break*/, 53];
            case 56: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 船来了
            ];
            case 57:
                _v.sent();
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strShareId,strZone', {
                        ddwTaskId: '',
                        strShareId: '',
                        strMarkList: 'undefined'
                    })];
            case 58:
                // 船来了
                res = _v.sent();
                if (!res.StoryInfo.StoryList) return [3 /*break*/, 70];
                if (!res.StoryInfo.StoryList[0].Special) return [3 /*break*/, 62];
                console.log("\u8239\u6765\u4E86\uFF0C\u4E58\u5BA2\u662F" + res.StoryInfo.StoryList[0].Special.strName);
                return [4 /*yield*/, api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '2',
                        triggerType: 0,
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 59:
                shipRes = _v.sent();
                console.log('正在下船，等待30s');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(30000)];
            case 60:
                _v.sent();
                return [4 /*yield*/, api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '3',
                        triggerType: 0,
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 61:
                shipRes = _v.sent();
                if (shipRes.iRet === 0)
                    console.log('船客接待成功');
                else
                    console.log('船客接待失败', shipRes);
                _v.label = 62;
            case 62:
                isCollector = false;
                if (!res.StoryInfo.StoryList[0].Collector) return [3 /*break*/, 68];
                console.log('收藏家出现');
                return [4 /*yield*/, api('story/CollectorOper', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,strStoryId,dwType,ddwTriggerDay', { strStoryId: res.StoryInfo.StoryList[0].strStoryId, dwType: '2', ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay })];
            case 63:
                // TODO 背包满了再卖给收破烂的
                res = _v.sent();
                console.log(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 64:
                _v.sent();
                isCollector = true;
                return [4 /*yield*/, api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 65:
                // 清空背包
                res = _v.sent();
                bags_1 = [];
                for (_h = 0, _j = res.Data.Office; _h < _j.length; _h++) {
                    s = _j[_h];
                    bags_1.push(s.dwType);
                    bags_1.push(s.dwCount);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 66:
                _v.sent();
                strTypeCnt_1 = '';
                for (n = 0; n < bags_1.length; n++) {
                    if (n % 2 === 0)
                        strTypeCnt_1 += bags_1[n] + ":";
                    else
                        strTypeCnt_1 += bags_1[n] + "|";
                }
                if (!(bags_1.length !== 0)) return [3 /*break*/, 68];
                return [4 /*yield*/, api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone', { dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt_1 })];
            case 67:
                res = _v.sent();
                console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney);
                _v.label = 68;
            case 68: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 69:
                _v.sent();
                _v.label = 70;
            case 70: return [4 /*yield*/, api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 71:
                // 清空背包
                res = _v.sent();
                bags = [];
                for (_k = 0, _l = res.Data.Office; _k < _l.length; _k++) {
                    s = _l[_k];
                    bags.push(s.dwType);
                    bags.push(s.dwCount);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 72:
                _v.sent();
                strTypeCnt = '';
                for (n = 0; n < bags.length; n++) {
                    if (n % 2 === 0)
                        strTypeCnt += bags[n] + ":";
                    else
                        strTypeCnt += bags[n] + "|";
                }
                if (!(bags.length !== 0)) return [3 /*break*/, 74];
                return [4 /*yield*/, api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone', { dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt })];
            case 73:
                res = _v.sent();
                console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney);
                _v.label = 74;
            case 74: return [4 /*yield*/, api('story/QueryRubbishInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 75:
                // 垃圾🚮
                res = _v.sent();
                if (!(res.Data.StoryInfo.StoryList.length !== 0)) return [3 /*break*/, 82];
                console.log('有垃圾');
                return [4 /*yield*/, api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwType,ptag,source,strZone', {
                        dwType: '1',
                        dwRewardType: 0
                    })];
            case 76:
                _v.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 77:
                _v.sent();
                j = 1;
                _v.label = 78;
            case 78:
                if (!(j < 9)) return [3 /*break*/, 82];
                return [4 /*yield*/, api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwRubbishId,dwType,ptag,source,strZone', {
                        dwType: '2',
                        dwRewardType: 0,
                        dwRubbishId: j
                    })];
            case 79:
                res = _v.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1500)];
            case 80:
                _v.sent();
                _v.label = 81;
            case 81:
                j++;
                return [3 /*break*/, 78];
            case 82: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 任务➡️
            ];
            case 83:
                _v.sent();
                tasks = void 0;
                return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 84:
                tasks = _v.sent();
                t0 = tasks.Data.TaskList[0];
                if (!(t0.strTaskName === '浏览1次爆款活动' && t0.dwCompleteNum === 0)) return [3 /*break*/, 86];
                return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t0.ddwTaskId })];
            case 85:
                res = _v.sent();
                if (res.ret === 0) {
                    console.log('浏览1次爆款活动，任务完成');
                }
                _v.label = 86;
            case 86: return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 87:
                tasks = _v.sent();
                _m = 0, _o = tasks.Data.TaskList;
                _v.label = 88;
            case 88:
                if (!(_m < _o.length)) return [3 /*break*/, 92];
                t = _o[_m];
                if (!(t.dwCompleteNum === t.dwTargetNum && t.dwAwardStatus === 2)) return [3 /*break*/, 91];
                return [4 /*yield*/, api('Award', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', { taskId: t.ddwTaskId })];
            case 89:
                res = _v.sent();
                if (res.ret === 0) {
                    console.log(t.strTaskName + "\u9886\u5956\u6210\u529F:", res.data.prizeInfo);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 90:
                _v.sent();
                _v.label = 91;
            case 91:
                _m++;
                return [3 /*break*/, 88];
            case 92: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 93:
                _v.sent();
                return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 94:
                tasks = _v.sent();
                if (!(tasks.Data.dwStatus === 3)) return [3 /*break*/, 97];
                return [4 /*yield*/, api('story/ActTaskAward', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 95:
                res = _v.sent();
                console.log('100财富任务完成：', res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 96:
                _v.sent();
                _v.label = 97;
            case 97: return [4 /*yield*/, api('user/EmployTourGuideInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 98:
                // 导游
                res = _v.sent();
                if (!!res.TourGuideList) return [3 /*break*/, 99];
                console.log('手动雇佣4个试用导游');
                return [3 /*break*/, 104];
            case 99:
                _p = 0, _q = res.TourGuideList;
                _v.label = 100;
            case 100:
                if (!(_p < _q.length)) return [3 /*break*/, 104];
                e = _q[_p];
                if (!(e.strBuildIndex !== 'food' && e.ddwRemainTm === 0)) return [3 /*break*/, 103];
                return [4 /*yield*/, api('user/EmployTourGuide', '_cfd_t,bizCode,ddwConsumeCoin,dwEnv,dwIsFree,ptag,source,strBuildIndex,strZone', { ddwConsumeCoin: e.ddwCostCoin, dwIsFree: 0, strBuildIndex: e.strBuildIndex })];
            case 101:
                employ = _v.sent();
                if (employ.iRet === 0)
                    console.log("\u96C7\u4F63" + e.strBuildIndex + "\u5BFC\u6E38\u6210\u529F");
                if (employ.iRet === 2003)
                    return [3 /*break*/, 104];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 102:
                _v.sent();
                _v.label = 103;
            case 103:
                _p++;
                return [3 /*break*/, 100];
            case 104: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 任务⬇️
            ];
            case 105:
                _v.sent();
                return [4 /*yield*/, mainTask('GetUserTaskStatusList', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', { taskId: 0 })];
            case 106:
                // 任务⬇️
                tasks = _v.sent();
                _r = 0, _s = tasks.data.userTaskStatusList;
                _v.label = 107;
            case 107:
                if (!(_r < _s.length)) return [3 /*break*/, 114];
                t = _s[_r];
                if (!(t.dateType === 2)) return [3 /*break*/, 113];
                if (!(t.awardStatus === 2 && t.completedTimes === t.targetTimes)) return [3 /*break*/, 110];
                console.log(1, t.taskName);
                return [4 /*yield*/, mainTask('Award', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', { taskId: t.taskId })];
            case 108:
                res = _v.sent();
                console.log(res);
                if (res.ret === 0) {
                    console.log(t.taskName + "\u9886\u5956\u6210\u529F:", res.data.prizeInfo);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 109:
                _v.sent();
                return [3 /*break*/, 113];
            case 110:
                if (!(t.awardStatus === 2 && t.completedTimes < t.targetTimes && ([1, 2, 3, 4].includes(t.orderId)))) return [3 /*break*/, 113];
                console.log('做任务:', t.taskId, t.taskName, t.completedTimes, t.targetTimes);
                return [4 /*yield*/, mainTask('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', {
                        taskId: t.taskId,
                        configExtra: ''
                    })];
            case 111:
                res = _v.sent();
                console.log('做任务:', res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 112:
                _v.sent();
                _v.label = 113;
            case 113:
                _r++;
                return [3 /*break*/, 107];
            case 114: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 115:
                _v.sent();
                _t = 0, _u = ['fun', 'shop', 'sea', 'food'];
                _v.label = 116;
            case 116:
                if (!(_t < _u.length)) return [3 /*break*/, 120];
                b = _u[_t];
                return [4 /*yield*/, api('user/CollectCoin', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b, dwType: '1' })];
            case 117:
                res = _v.sent();
                console.log(b + "\u6536\u91D1\u5E01:", res.ddwCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 118:
                _v.sent();
                _v.label = 119;
            case 119:
                _t++;
                return [3 /*break*/, 116];
            case 120:
                i++;
                return [3 /*break*/, 3];
            case 121:
                if (!(HELP_HW === 'true')) return [3 /*break*/, 125];
                _v.label = 122;
            case 122:
                _v.trys.push([122, 124, , 125]);
                return [4 /*yield*/, axios_1["default"].get("https://api.sharecode.ga/api/HW_CODES", { timeout: 10000 })];
            case 123:
                data = (_v.sent()).data;
                shareCodes = __spreadArray(__spreadArray([], shareCodes, true), data.jxcfd, true);
                console.log('获取HelloWorld助力码成功');
                return [3 /*break*/, 125];
            case 124:
                e_2 = _v.sent();
                console.log('获取HelloWorld助力码出错');
                return [3 /*break*/, 125];
            case 125:
                if (!(HELP_POOL === 'true')) return [3 /*break*/, 130];
                _v.label = 126;
            case 126:
                _v.trys.push([126, 128, , 129]);
                return [4 /*yield*/, axios_1["default"].get('https://api.sharecode.ga/api/jxcfd/20', { timeout: 10000 })];
            case 127:
                data = (_v.sent()).data;
                console.log('获取到20个随机助力码:', data.data);
                shareCodes = __spreadArray(__spreadArray([], shareCodes, true), data.data, true);
                return [3 /*break*/, 129];
            case 128:
                e_3 = _v.sent();
                console.log('获取助力池失败');
                return [3 /*break*/, 129];
            case 129: return [3 /*break*/, 131];
            case 130:
                console.log('你的设置是不帮助助力池');
                _v.label = 131;
            case 131:
                i = 0;
                _v.label = 132;
            case 132:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 138];
                j = 0;
                _v.label = 133;
            case 133:
                if (!(j < shareCodes.length)) return [3 /*break*/, 137];
                cookie = cookiesArr[i];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B:", shareCodes[j]);
                return [4 /*yield*/, api('story/helpbystage', '_cfd_t,bizCode,dwEnv,ptag,source,strShareId,strZone', { strShareId: shareCodes[j] })];
            case 134:
                res = _v.sent();
                console.log('助力:', res);
                if (res.iRet === 2232 || res.sErrMsg === '今日助力次数达到上限，明天再来帮忙吧~') {
                    return [3 /*break*/, 137];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 135:
                _v.sent();
                _v.label = 136;
            case 136:
                j++;
                return [3 /*break*/, 133];
            case 137:
                i++;
                return [3 /*break*/, 132];
            case 138: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    var _this = this;
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var url, key, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/jxbfd/" + fn + "?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&_ste=1&_=" + Date.now() + "&sceneval=2&_stk=" + encodeURIComponent(stk);
                    if (['GetUserTaskStatusList', 'Award', 'DoTask'].includes(fn)) {
                        console.log('api2');
                        url = "https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?strZone=jxbfd&bizCode=jxbfddch&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2";
                    }
                    if (Object.keys(params).length !== 0) {
                        key = void 0;
                        for (key in params) {
                            if (params.hasOwnProperty(key))
                                url += "&" + key + "=" + params[key];
                        }
                    }
                    url += '&h5st=' + decrypt(stk, url);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'Referer': 'https://st.jingxi.com/',
                                'User-Agent': TS_USER_AGENTS_1["default"],
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
function mainTask(fn, stk, params) {
    var _this = this;
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var url, key, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2";
                    if (Object.keys(params).length !== 0) {
                        key = void 0;
                        for (key in params) {
                            if (params.hasOwnProperty(key))
                                url += "&" + key + "=" + params[key];
                        }
                    }
                    url += '&h5st=' + decrypt(stk, url);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'X-Requested-With': 'com.jd.pingou',
                                'Referer': 'https://st.jingxi.com/',
                                'Host': 'm.jingxi.com',
                                'User-Agent': TS_USER_AGENTS_1["default"],
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
function makeShareCodes() {
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
                    return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strShareId,strZone', {
                            ddwTaskId: '',
                            strShareId: '',
                            strMarkList: 'undefined'
                        })];
                case 3:
                    res = _a.sent();
                    console.log('助力码:', res.strMyShareId);
                    shareCodes.push(res.strMyShareId);
                    pin = cookie.match(/pt_pin=([^;]*)/)[1];
                    pin = ts_md5_1.Md5.hashStr(pin);
                    axios_1["default"].get("https://api.sharecode.ga/api/autoInsert?db=jxcfd&code=" + res.strMyShareId + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin, { timeout: 10000 })
                        .then(function (res) {
                        if (res.data.code === 200)
                            console.log('已自动提交助力码');
                        else
                            console.log('提交失败！已提交farm和bean的cookie才可提交cfd');
                        resolve();
                    })["catch"](function (e) {
                        reject('访问助力池出错');
                    });
                    return [2 /*return*/];
            }
        });
    }); });
}
function requestAlgo() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, generateFp()];
                case 1:
                    fingerprint = _a.sent();
                    return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var data, enCryptMethodJDString;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, axios_1["default"].post('https://cactus.jd.com/request_algo?g_ty=ajax', {
                                            "version": "1.0",
                                            "fp": fingerprint,
                                            "appId": appId,
                                            "timestamp": Date.now(),
                                            "platform": "web",
                                            "expandParams": ""
                                        }, {
                                            "headers": {
                                                'Authority': 'cactus.jd.com',
                                                'Pragma': 'no-cache',
                                                'Cache-Control': 'no-cache',
                                                'Accept': 'application/json',
                                                'User-Agent': TS_USER_AGENTS_1["default"],
                                                'Content-Type': 'application/json',
                                                'Origin': 'https://st.jingxi.com',
                                                'Sec-Fetch-Site': 'cross-site',
                                                'Sec-Fetch-Mode': 'cors',
                                                'Sec-Fetch-Dest': 'empty',
                                                'Referer': 'https://st.jingxi.com/',
                                                'Accept-Language': 'zh-CN,zh;q=0.9,zh-TW;q=0.8,en;q=0.7'
                                            }
                                        })];
                                    case 1:
                                        data = (_a.sent()).data;
                                        if (data['status'] === 200) {
                                            token = data.data.result.tk;
                                            console.log('token:', token);
                                            enCryptMethodJDString = data.data.result.algo;
                                            if (enCryptMethodJDString)
                                                enCryptMethodJD = new Function("return " + enCryptMethodJDString)();
                                        }
                                        else {
                                            console.log("fp: " + fingerprint);
                                            console.log('request_algo 签名参数API请求失败:');
                                        }
                                        resolve();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
            }
        });
    });
}
function decrypt(stk, url) {
    var timestamp = ((0, date_fns_1.format)(new Date(), 'yyyyMMddhhmmssSSS'));
    var hash1;
    if (fingerprint && token && enCryptMethodJD) {
        hash1 = enCryptMethodJD(token, fingerprint.toString(), timestamp.toString(), appId.toString(), CryptoJS).toString(CryptoJS.enc.Hex);
    }
    else {
        var random = '5gkjB6SpmC9s';
        token = "tk01wcdf61cb3a8nYUtHcmhSUFFCfddDPRvKvYaMjHkxo6Aj7dhzO+GXGFa9nPXfcgT+mULoF1b1YIS1ghvSlbwhE0Xc";
        fingerprint = 9686767825751161;
        // $.fingerprint = 7811850938414161;
        var str = "" + token + fingerprint + timestamp + appId + random;
        hash1 = CryptoJS.SHA512(str, token).toString(CryptoJS.enc.Hex);
    }
    var st = '';
    stk.split(',').map(function (item, index) {
        st += item + ":" + getQueryString(url, item) + (index === stk.split(',').length - 1 ? '' : '&');
    });
    var hash2 = CryptoJS.HmacSHA256(st, hash1.toString()).toString(CryptoJS.enc.Hex);
    return encodeURIComponent(["".concat(timestamp.toString()), "".concat(fingerprint.toString()), "".concat(appId.toString()), "".concat(token), "".concat(hash2)].join(";"));
}
function generateFp() {
    var e = "0123456789";
    var a = 13;
    var i = '';
    for (; a--;)
        i += e[Math.random() * e.length | 0];
    return (i + Date.now()).slice(0, 16);
}
function getQueryString(url, name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = url.split('?')[1].match(reg);
    if (r != null)
        return unescape(r[2]);
    return '';
}
function getJxToken(cookie) {
    function generateStr(input) {
        var src = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var res = '';
        for (var i = 0; i < input; i++) {
            res += src[Math.floor(src.length * Math.random())];
        }
        return res;
    }
    return new Promise(function (resolve) {
        var phoneId = generateStr(40);
        var timestamp = Date.now().toString();
        if (!cookie['match'](/pt_pin=([^; ]+)(?=;?)/)) {
            console.log('此账号cookie填写不规范,你的pt_pin=xxx后面没分号(;)\n');
            resolve({});
        }
        var nickname = cookie.match(/pt_pin=([^;]*)/)[1];
        var jstoken = ts_md5_1.Md5.hashStr('' + decodeURIComponent(nickname) + timestamp + phoneId + 'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy');
        resolve({
            'strPgtimestamp': timestamp,
            'strPhoneID': phoneId,
            'strPgUUNum': jstoken
        });
    });
}
