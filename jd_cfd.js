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
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var ts_md5_1 = require("ts-md5");
var dotenv = require("dotenv");
dotenv.config();
var cookie = '', res = '', shareCodes = [], isCollector = false, USER_AGENT = 'jdpingou;android;4.13.0;10;b21fede89fb4bc77;network/wifi;model/M2004J7AC;appBuild/17690;partner/xiaomi;;session/704;aid/b21fede89fb4bc77;oaid/dcb5f3e835497cc3;pap/JA2019_3111789;brand/Xiaomi;eu/8313831616035373;fv/7333732616631643;Mozilla/5.0 (Linux; Android 10; M2004J7AC Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.120 Mobile Safari/537.36', token = {};
var UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, e_1, j, wallet, build, minLV, _i, _a, b, employee, _b, employee_1, emp, empRes, _c, _d, sign, MermaidRes, shipRes, bags_1, _e, _f, s, strTypeCnt_1, n, bags, _g, _h, s, strTypeCnt, n, j, tasks, _j, _k, t, _l, _m, t, _o, _p, e, employ, _q, _r, b, data, e_2, i, j;
    return __generator(this, function (_s) {
        switch (_s.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _s.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _s.sent();
                i = 0;
                _s.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 112];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                token = (0, TS_USER_AGENTS_1.getJxToken)(cookie);
                _s.label = 4;
            case 4:
                _s.trys.push([4, 6, , 7]);
                return [4 /*yield*/, makeShareCodes()];
            case 5:
                _s.sent();
                return [3 /*break*/, 7];
            case 6:
                e_1 = _s.sent();
                console.log(e_1);
                return [3 /*break*/, 7];
            case 7: return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone', {
                    ddwTaskId: '',
                    strShareId: '',
                    strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task',
                    strPgtimestamp: token.strPgtimestamp,
                    strPhoneID: token.strPhoneID,
                    strPgUUNum: token.strPgUUNum
                })];
            case 8:
                // 离线
                res = _s.sent();
                console.log('离线收益:', res.Business.ddwCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                    // 任务⬇️
                ];
            case 9:
                _s.sent();
                // 任务⬇️
                console.log('任务列表开始');
                j = 0;
                _s.label = 10;
            case 10:
                if (!(j < 30)) return [3 /*break*/, 14];
                return [4 /*yield*/, task()];
            case 11:
                if ((_s.sent()) === 0) {
                    return [3 /*break*/, 14];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 12:
                _s.sent();
                _s.label = 13;
            case 13:
                j++;
                return [3 /*break*/, 10];
            case 14:
                console.log('任务列表结束');
                _s.label = 15;
            case 15:
                if (!1) return [3 /*break*/, 31];
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone', {
                        ddwTaskId: '',
                        strShareId: '',
                        strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task',
                        strPgtimestamp: token.strPgtimestamp,
                        strPhoneID: token.strPhoneID,
                        strPgUUNum: token.strPgUUNum
                    })];
            case 16:
                res = _s.sent();
                wallet = res.ddwCoinBalance;
                console.log('金币余额:', wallet);
                build = '', minLV = 99999;
                _i = 0, _a = ['food', 'fun', 'shop', 'sea'];
                _s.label = 17;
            case 17:
                if (!(_i < _a.length)) return [3 /*break*/, 21];
                b = _a[_i];
                return [4 /*yield*/, api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b })];
            case 18:
                res = _s.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 19:
                _s.sent();
                if (res.dwBuildLvl <= minLV) {
                    minLV = res.dwBuildLvl;
                    build = b;
                }
                _s.label = 20;
            case 20:
                _i++;
                return [3 /*break*/, 17];
            case 21:
                console.log('最低等级建筑:', minLV, build);
                return [4 /*yield*/, api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: build })];
            case 22:
                res = _s.sent();
                console.log(build + "\u5347\u7EA7\u9700\u8981:", res.ddwNextLvlCostCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 23:
                _s.sent();
                if (!(res.dwCanLvlUp === 1 && res.ddwNextLvlCostCoin * 2 <= wallet)) return [3 /*break*/, 28];
                return [4 /*yield*/, api('user/BuildLvlUp', '_cfd_t,bizCode,ddwCostCoin,dwEnv,ptag,source,strBuildIndex,strZone', { ddwCostCoin: res.ddwNextLvlCostCoin, strBuildIndex: build })];
            case 24:
                res = _s.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 25:
                _s.sent();
                if (!(res.iRet === 0)) return [3 /*break*/, 27];
                console.log("\u5347\u7EA7\u6210\u529F");
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 26:
                _s.sent();
                _s.label = 27;
            case 27: return [3 /*break*/, 29];
            case 28: return [3 /*break*/, 31];
            case 29: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 30:
                _s.sent();
                return [3 /*break*/, 15];
            case 31: return [4 /*yield*/, api('story/GetTakeAggrPage', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 32:
                // 珍珠
                /*
                res = await api('user/ComposeGameState', '', {dwFirst: 1})
                let strDT: string = res.strDT, strMyShareId: string = res.strMyShareId
                console.log(`已合成${res.dwCurProgress}个珍珠`)
                for (let i = 0; i < 8 - res.dwCurProgress; i++) {
                  console.log('继续合成')
                  let RealTmReport: number = getRandomNumberByRange(10, 20)
                  console.log('本次合成需要上报：', RealTmReport)
                  for (let j = 0; j < RealTmReport; j++) {
                    res = await api('user/RealTmReport', '',
                      {dwIdentityType: 0, strBussKey: 'composegame', strMyShareId: strMyShareId, ddwCount: 5})
                    if (res.iRet === 0)
                      console.log(`游戏中途上报${j + 1}：OK`)
                    await wait(5000)
                  }
                  res = await api('user/ComposeGameAddProcess', '__t,strBT,strZone', {__t: Date.now(), strBT: strDT})
                  console.log('游戏完成，已合成', res.dwCurProgress)
                  console.log('游戏完成，等待3s')
                  await wait(3000)
                }
                await wait(2000)
            
                // 珍珠领奖
                res = await api('user/ComposeGameState', '', {dwFirst: 1})
                for (let stage of res.stagelist) {
                  if (res.dwCurProgress >= stage.dwCurStageEndCnt && stage.dwIsAward === 0) {
                    let awardRes: any = await api('user/ComposeGameAward', '__t,dwCurStageEndCnt,strZone', {
                      __t: Date.now(),
                      dwCurStageEndCnt: stage.dwCurStageEndCnt
                    })
                    console.log('珍珠领奖：', awardRes.ddwCoin, awardRes.addMonety)
                    await wait(3000)
                  }
                }
                await wait(2000)
                */
                // 签到 助力奖励
                res = _s.sent();
                employee = res.Data.Employee.EmployeeList.filter(function (e) {
                    return e.dwStatus === 0;
                });
                _b = 0, employee_1 = employee;
                _s.label = 33;
            case 33:
                if (!(_b < employee_1.length)) return [3 /*break*/, 37];
                emp = employee_1[_b];
                return [4 /*yield*/, api('story/helpdraw', '_cfd_t,bizCode,dwEnv,dwUserId,ptag,source,strZone', { dwUserId: emp.dwId })];
            case 34:
                empRes = _s.sent();
                if (empRes.iRet === 0)
                    console.log('助力奖励领取成功：', empRes.Data.ddwCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 35:
                _s.sent();
                _s.label = 36;
            case 36:
                _b++;
                return [3 /*break*/, 33];
            case 37:
                if (!(res.Data.Sign.dwTodayStatus === 0)) return [3 /*break*/, 42];
                console.log('今日未签到');
                _c = 0, _d = res.Data.Sign.SignList;
                _s.label = 38;
            case 38:
                if (!(_c < _d.length)) return [3 /*break*/, 41];
                sign = _d[_c];
                if (!(sign.dwDayId === res.Data.Sign.dwTodayId)) return [3 /*break*/, 40];
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
            case 39:
                res = _s.sent();
                if (res.iRet === 0)
                    console.log('签到成功：', res.Data.ddwCoin, res.Data.ddwMoney, res.Data.strPrizePool);
                else
                    console.log('签到失败：', res);
                return [3 /*break*/, 41];
            case 40:
                _c++;
                return [3 /*break*/, 38];
            case 41: return [3 /*break*/, 43];
            case 42:
                console.log('今日已经签到');
                _s.label = 43;
            case 43: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 44:
                _s.sent();
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strVersion,strZone', {
                        ddwTaskId: '',
                        strShareId: '',
                        strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task,cfd_has_show_selef_point',
                        strPgUUNum: token.strPgUUNum,
                        strPgtimestamp: token.strPgtimestamp,
                        strPhoneID: token.strPhoneID,
                        strVersion: '1.0.1'
                    })];
            case 45:
                res = _s.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 46:
                _s.sent();
                if (!res.StoryInfo.StoryList) return [3 /*break*/, 66];
                if (!res.StoryInfo.StoryList[0].Mermaid) return [3 /*break*/, 53];
                console.log("\u53D1\u73B0\u7F8E\u4EBA\u9C7C\uD83E\uDDDC\u200D\u2640\uFE0F");
                return [4 /*yield*/, api('story/MermaidOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '1',
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 47:
                MermaidRes = _s.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 48:
                _s.sent();
                if (!(MermaidRes.iRet === 0)) return [3 /*break*/, 50];
                return [4 /*yield*/, api('story/MermaidOpe', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '3',
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 49:
                MermaidRes = _s.sent();
                if (MermaidRes.iRet === 0) {
                    console.log("\u62EF\u6551\u7F8E\u4EBA\u9C7C\u6210\u529F");
                }
                _s.label = 50;
            case 50: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 51:
                _s.sent();
                return [4 /*yield*/, api('story/MermaidOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '2',
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 52:
                MermaidRes = _s.sent();
                if (MermaidRes.iRet === 0)
                    console.log('获得金币:', MermaidRes.Data.ddwCoin);
                _s.label = 53;
            case 53: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 54:
                _s.sent();
                if (!res.StoryInfo.StoryList[0].Special) return [3 /*break*/, 58];
                console.log("\u8239\u6765\u4E86\uFF0C\u4E58\u5BA2\u662F" + res.StoryInfo.StoryList[0].Special.strName);
                return [4 /*yield*/, api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '2',
                        triggerType: 0,
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 55:
                shipRes = _s.sent();
                console.log('正在下船，等待30s');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(30000)];
            case 56:
                _s.sent();
                return [4 /*yield*/, api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '3',
                        triggerType: 0,
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 57:
                shipRes = _s.sent();
                if (shipRes.iRet === 0)
                    console.log('船客接待成功');
                else
                    console.log('船客接待失败', shipRes);
                _s.label = 58;
            case 58:
                isCollector = false;
                if (!res.StoryInfo.StoryList[0].Collector) return [3 /*break*/, 64];
                console.log('收藏家出现');
                return [4 /*yield*/, api('story/CollectorOper', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,strStoryId,dwType,ddwTriggerDay', { strStoryId: res.StoryInfo.StoryList[0].strStoryId, dwType: '2', ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay })];
            case 59:
                // TODO 背包满了再卖给收破烂的
                res = _s.sent();
                console.log(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 60:
                _s.sent();
                isCollector = true;
                return [4 /*yield*/, api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 61:
                // 清空背包
                res = _s.sent();
                bags_1 = [];
                for (_e = 0, _f = res.Data.Office; _e < _f.length; _e++) {
                    s = _f[_e];
                    bags_1.push(s.dwType);
                    bags_1.push(s.dwCount);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 62:
                _s.sent();
                strTypeCnt_1 = '';
                for (n = 0; n < bags_1.length; n++) {
                    if (n % 2 === 0)
                        strTypeCnt_1 += bags_1[n] + ":";
                    else
                        strTypeCnt_1 += bags_1[n] + "|";
                }
                if (!(bags_1.length !== 0)) return [3 /*break*/, 64];
                return [4 /*yield*/, api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone', { dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt_1 })];
            case 63:
                res = _s.sent();
                console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney);
                _s.label = 64;
            case 64: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 65:
                _s.sent();
                _s.label = 66;
            case 66: return [4 /*yield*/, api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 67:
                // 清空背包
                res = _s.sent();
                bags = [];
                for (_g = 0, _h = res.Data.Office; _g < _h.length; _g++) {
                    s = _h[_g];
                    bags.push(s.dwType);
                    bags.push(s.dwCount);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 68:
                _s.sent();
                strTypeCnt = '';
                for (n = 0; n < bags.length; n++) {
                    if (n % 2 === 0)
                        strTypeCnt += bags[n] + ":";
                    else
                        strTypeCnt += bags[n] + "|";
                }
                if (!(bags.length !== 0)) return [3 /*break*/, 70];
                return [4 /*yield*/, api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone', { dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt })];
            case 69:
                res = _s.sent();
                console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney);
                _s.label = 70;
            case 70: return [4 /*yield*/, api('story/QueryRubbishInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 71:
                // 垃圾🚮
                res = _s.sent();
                if (!(res.Data.StoryInfo.StoryList.length !== 0)) return [3 /*break*/, 78];
                console.log('有垃圾');
                return [4 /*yield*/, api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwType,ptag,source,strZone', {
                        dwType: '1',
                        dwRewardType: 0
                    })];
            case 72:
                _s.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 73:
                _s.sent();
                j = 1;
                _s.label = 74;
            case 74:
                if (!(j < 9)) return [3 /*break*/, 78];
                return [4 /*yield*/, api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwRubbishId,dwType,ptag,source,strZone', {
                        dwType: '2',
                        dwRewardType: 0,
                        dwRubbishId: j
                    })];
            case 75:
                res = _s.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1500)];
            case 76:
                _s.sent();
                _s.label = 77;
            case 77:
                j++;
                return [3 /*break*/, 74];
            case 78: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 任务➡️
            ];
            case 79:
                _s.sent();
                tasks = void 0;
                return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 80:
                tasks = _s.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 81:
                _s.sent();
                _j = 0, _k = tasks.Data.TaskList;
                _s.label = 82;
            case 82:
                if (!(_j < _k.length)) return [3 /*break*/, 86];
                t = _k[_j];
                if (!([1, 2].indexOf(t.dwOrderId) > -1 && t.dwCompleteNum < t.dwTargetNum && t.strTaskName != '热气球接待20位游客')) return [3 /*break*/, 85];
                console.log('开始任务➡️:', t.strTaskName);
                return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.ddwTaskId })];
            case 83:
                res = _s.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.dwLookTime * 1000)];
            case 84:
                _s.sent();
                if (res.ret === 0) {
                    console.log('任务完成');
                }
                else {
                    console.log('任务失败', res);
                }
                _s.label = 85;
            case 85:
                _j++;
                return [3 /*break*/, 82];
            case 86: return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 87:
                tasks = _s.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 88:
                _s.sent();
                _l = 0, _m = tasks.Data.TaskList;
                _s.label = 89;
            case 89:
                if (!(_l < _m.length)) return [3 /*break*/, 93];
                t = _m[_l];
                if (!(t.dwCompleteNum === t.dwTargetNum && t.dwAwardStatus === 2)) return [3 /*break*/, 92];
                return [4 /*yield*/, api('Award', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.ddwTaskId })];
            case 90:
                res = _s.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 91:
                _s.sent();
                if (res.ret === 0) {
                    console.log("\u9886\u5956\u6210\u529F:", res);
                }
                else {
                    console.log('领奖失败', res);
                }
                _s.label = 92;
            case 92:
                _l++;
                return [3 /*break*/, 89];
            case 93: return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 94:
                tasks = _s.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 95:
                _s.sent();
                if (!(tasks.Data.dwStatus === 3)) return [3 /*break*/, 97];
                return [4 /*yield*/, api('story/ActTaskAward', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 96:
                res = _s.sent();
                if (res.ret === 0) {
                    console.log('100财富任务完成');
                }
                _s.label = 97;
            case 97: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 导游
            ];
            case 98:
                _s.sent();
                return [4 /*yield*/, api('user/EmployTourGuideInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 99:
                // 导游
                res = _s.sent();
                if (!!res.TourGuideList) return [3 /*break*/, 100];
                console.log('手动雇佣4个试用导游');
                return [3 /*break*/, 105];
            case 100:
                _o = 0, _p = res.TourGuideList;
                _s.label = 101;
            case 101:
                if (!(_o < _p.length)) return [3 /*break*/, 105];
                e = _p[_o];
                if (!(e.strBuildIndex !== 'food' && e.ddwRemainTm === 0)) return [3 /*break*/, 104];
                return [4 /*yield*/, api('user/EmployTourGuide', '_cfd_t,bizCode,ddwConsumeCoin,dwEnv,dwIsFree,ptag,source,strBuildIndex,strZone', { ddwConsumeCoin: e.ddwCostCoin, dwIsFree: 0, strBuildIndex: e.strBuildIndex })];
            case 102:
                employ = _s.sent();
                if (employ.iRet === 0)
                    console.log("\u96C7\u4F63" + e.strBuildIndex + "\u5BFC\u6E38\u6210\u529F");
                if (employ.iRet === 2003)
                    return [3 /*break*/, 105];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 103:
                _s.sent();
                _s.label = 104;
            case 104:
                _o++;
                return [3 /*break*/, 101];
            case 105: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 106:
                _s.sent();
                _q = 0, _r = ['fun', 'shop', 'sea', 'food'];
                _s.label = 107;
            case 107:
                if (!(_q < _r.length)) return [3 /*break*/, 111];
                b = _r[_q];
                return [4 /*yield*/, api('user/CollectCoin', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b, dwType: '1' })];
            case 108:
                res = _s.sent();
                console.log(b + "\u6536\u91D1\u5E01:", res.ddwCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 109:
                _s.sent();
                _s.label = 110;
            case 110:
                _q++;
                return [3 /*break*/, 107];
            case 111:
                i++;
                return [3 /*break*/, 3];
            case 112:
                _s.trys.push([112, 114, , 115]);
                return [4 /*yield*/, axios_1["default"].get('https://api.jdsharecode.xyz/api/jxcfd/20', { timeout: 10000 })];
            case 113:
                data = (_s.sent()).data;
                console.log('获取到20个随机助力码:', data.data);
                shareCodes = __spreadArray(__spreadArray([], shareCodes, true), data.data, true);
                return [3 /*break*/, 115];
            case 114:
                e_2 = _s.sent();
                console.log('获取助力池失败');
                return [3 /*break*/, 115];
            case 115:
                i = 0;
                _s.label = 116;
            case 116:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 122];
                j = 0;
                _s.label = 117;
            case 117:
                if (!(j < shareCodes.length)) return [3 /*break*/, 121];
                cookie = cookiesArr[i];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B:", shareCodes[j]);
                return [4 /*yield*/, api('story/helpbystage', '_cfd_t,bizCode,dwEnv,ptag,source,strShareId,strZone', { strShareId: shareCodes[j] })];
            case 118:
                res = _s.sent();
                if (res.iRet === 0) {
                    console.log('助力成功:', res.Data.GuestPrizeInfo.strPrizeName);
                }
                else if (res.iRet === 2232 || res.sErrMsg === '今日助力次数达到上限，明天再来帮忙吧~') {
                    return [3 /*break*/, 121];
                }
                else {
                    console.log('助力未知错误：', res);
                    return [3 /*break*/, 121];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 119:
                _s.sent();
                _s.label = 120;
            case 120:
                j++;
                return [3 /*break*/, 117];
            case 121:
                i++;
                return [3 /*break*/, 116];
            case 122: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) {
        var url = '';
        if (['GetUserTaskStatusList', 'Award', 'DoTask'].indexOf(fn) > -1)
            url = "https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&showAreaTaskFlag=0&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2";
        else
            url = "https://m.jingxi.com/jxbfd/" + fn + "?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&_ste=1&_=" + Date.now() + "&sceneval=2&_stk=" + encodeURIComponent(stk);
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
                    return [4 /*yield*/, api('GetUserTaskStatusList', '_cfd_t,bizCode,dwEnv,ptag,showAreaTaskFlag,source,strZone,taskId', { taskId: 0, showAreaTaskFlag: 0 })];
                case 1:
                    res = _b.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                case 2:
                    _b.sent();
                    _i = 0, _a = res.data.userTaskStatusList;
                    _b.label = 3;
                case 3:
                    if (!(_i < _a.length)) return [3 /*break*/, 10];
                    t = _a[_i];
                    if (!(t.awardStatus === 2 && t.completedTimes === t.targetTimes)) return [3 /*break*/, 6];
                    console.log('可领奖:', t.taskName);
                    return [4 /*yield*/, api('Award', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', { taskId: t.taskId })];
                case 4:
                    res = _b.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                case 5:
                    _b.sent();
                    if (res.ret === 0) {
                        res = JSON.parse(res.data.prizeInfo);
                        console.log("\u9886\u5956\u6210\u529F:", res.ddwCoin, res.ddwMoney);
                        return [2 /*return*/, 1];
                    }
                    else {
                        console.log('领奖失败:', res);
                        return [2 /*return*/, 0];
                    }
                    _b.label = 6;
                case 6:
                    if (!(t.dateType === 2 && t.awardStatus === 2 && t.completedTimes < t.targetTimes && t.taskCaller === 1)) return [3 /*break*/, 9];
                    console.log('做任务:', t.taskId, t.taskName, t.completedTimes, t.targetTimes);
                    return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.taskId, configExtra: '' })];
                case 7:
                    res = _b.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
                case 8:
                    _b.sent();
                    if (res.ret === 0) {
                        console.log('任务完成');
                        return [2 /*return*/, 1];
                    }
                    else {
                        console.log('任务失败');
                        return [2 /*return*/, 0];
                    }
                    _b.label = 9;
                case 9:
                    _i++;
                    return [3 /*break*/, 3];
                case 10: return [2 /*return*/, 0];
            }
        });
    });
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
                    return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strVersion,strZone', {
                            ddwTaskId: '',
                            strShareId: '',
                            strMarkList: 'undefined',
                            strPgUUNum: token.strPgUUNum,
                            strPgtimestamp: token.strPgtimestamp,
                            strPhoneID: token.strPhoneID,
                            strVersion: '1.0.1'
                        })];
                case 3:
                    res = _a.sent();
                    console.log('助力码:', res.strMyShareId);
                    shareCodes.push(res.strMyShareId);
                    pin = cookie.match(/pt_pin=([^;]*)/)[1];
                    pin = ts_md5_1.Md5.hashStr(pin);
                    axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert?db=jxcfd&code=" + res.strMyShareId + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin, { timeout: 10000 })
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
