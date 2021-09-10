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
exports.__esModule = true;
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var ts_md5_1 = require("ts-md5");
var dotenv = require("dotenv");
var notify = require('./sendNotify');
dotenv.config();
var cookie = '', res = '', shareCodes = [], isCollector = false;
var HELP_HW = process.env.HELP_HW ? process.env.HELP_HW : "true";
console.log('帮助HelloWorld:', HELP_HW);
var HELP_POOL = process.env.HELP_POOL ? process.env.HELP_POOL : "true";
console.log('帮助助力池:', HELP_POOL);
var UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, _a, isLogin, nickName, e_1, token, employee, _i, employee_1, emp, empRes, _b, _c, sign, MermaidRes, shipRes, bags_1, _d, _e, s, strTypeCnt_1, n, bags, _f, _g, s, strTypeCnt, n, j, tasks, _h, _j, t, _k, _l, t, _m, _o, e, employ, e_2, _p, _q, b;
    return __generator(this, function (_r) {
        switch (_r.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _r.sent();
                i = 0;
                _r.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 96];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.TotalBean)(cookie)];
            case 4:
                _a = _r.sent(), isLogin = _a.isLogin, nickName = _a.nickName;
                if (!isLogin) {
                    notify.sendNotify(__filename.split('/').pop(), "cookie\u5DF2\u5931\u6548\n\u4EAC\u4E1C\u8D26\u53F7" + index + "\uFF1A" + (nickName || UserName));
                    return [3 /*break*/, 95];
                }
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + (nickName || UserName) + "\n");
                _r.label = 5;
            case 5:
                _r.trys.push([5, 7, , 8]);
                return [4 /*yield*/, makeShareCodes()];
            case 6:
                _r.sent();
                return [3 /*break*/, 8];
            case 7:
                e_1 = _r.sent();
                console.log(e_1);
                return [3 /*break*/, 8];
            case 8:
                token = (0, TS_USER_AGENTS_1.getJxToken)(cookie);
                return [4 /*yield*/, api('story/GetTakeAggrPage', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 9:
                /*
                // 离线
                res = await api('user/QueryUserInfo',
                  '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone',
                  {
                    ddwTaskId: '',
                    strShareId: '',
                    strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task',
                    strPgtimestamp: token.strPgtimestamp,
                    strPhoneID: token.strPhoneID,
                    strPgUUNum: token.strPgUUNum
                  })
                console.log('离线收益:', res.Business.ddwCoin)
                await wait(2000)
            
                // 升级建筑
                while (1) {
                  res = await api('user/QueryUserInfo',
                    '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone',
                    {
                      ddwTaskId: '',
                      strShareId: '',
                      strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task',
                      strPgtimestamp: token.strPgtimestamp,
                      strPhoneID: token.strPhoneID,
                      strPgUUNum: token.strPgUUNum
                    })
                  let wallet: number = res.ddwCoinBalance
                  console.log('金币余额:', wallet)
                  let build: string = '', minLV: number = 99999
                  for (let b of ['food', 'fun', 'shop', 'sea']) {
                    res = await api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', {strBuildIndex: b})
                    await wait(2000)
                    if (res.dwBuildLvl <= minLV) {
                      minLV = res.dwBuildLvl
                      build = b
                    }
                  }
                  console.log('最低等级建筑:', minLV, build)
            
                  res = await api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', {strBuildIndex: build})
                  console.log(`${build}升级需要:`, res.ddwNextLvlCostCoin)
                  await wait(2000)
                  if (res.dwCanLvlUp === 1 && res.ddwNextLvlCostCoin * 2 <= wallet) {
                    res = await api('user/BuildLvlUp', '_cfd_t,bizCode,ddwCostCoin,dwEnv,ptag,source,strBuildIndex,strZone', {ddwCostCoin: res.ddwNextLvlCostCoin, strBuildIndex: build})
                    await wait(2000)
                    if (res.iRet === 0) {
                      console.log(`升级成功`)
                      await wait(2000)
                    }
                  } else {
                    break
                  }
                  await wait(3000)
                }
                */
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
                res = _r.sent();
                employee = res.Data.Employee.EmployeeList.filter(function (e) {
                    return e.dwStatus === 0;
                });
                _i = 0, employee_1 = employee;
                _r.label = 10;
            case 10:
                if (!(_i < employee_1.length)) return [3 /*break*/, 14];
                emp = employee_1[_i];
                return [4 /*yield*/, api('story/helpdraw', '_cfd_t,bizCode,dwEnv,dwUserId,ptag,source,strZone', { dwUserId: emp.dwId })];
            case 11:
                empRes = _r.sent();
                if (empRes.iRet === 0)
                    console.log('助力奖励领取成功：', empRes.Data.ddwCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 12:
                _r.sent();
                _r.label = 13;
            case 13:
                _i++;
                return [3 /*break*/, 10];
            case 14:
                if (!(res.Data.Sign.dwTodayStatus === 0)) return [3 /*break*/, 19];
                console.log('今日未签到');
                _b = 0, _c = res.Data.Sign.SignList;
                _r.label = 15;
            case 15:
                if (!(_b < _c.length)) return [3 /*break*/, 18];
                sign = _c[_b];
                if (!(sign.dwDayId === res.Data.Sign.dwTodayId)) return [3 /*break*/, 17];
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
            case 16:
                res = _r.sent();
                if (res.iRet === 0)
                    console.log('签到成功：', res.Data.ddwCoin, res.Data.ddwMoney, res.Data.strPrizePool);
                else
                    console.log('签到失败：', res);
                return [3 /*break*/, 18];
            case 17:
                _b++;
                return [3 /*break*/, 15];
            case 18: return [3 /*break*/, 20];
            case 19:
                console.log('今日已经签到');
                _r.label = 20;
            case 20: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 21:
                _r.sent();
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strShareId,strZone', {
                        ddwTaskId: '',
                        strShareId: '',
                        strMarkList: 'undefined'
                    })];
            case 22:
                res = _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 23:
                _r.sent();
                if (!res.StoryInfo.StoryList) return [3 /*break*/, 43];
                if (!res.StoryInfo.StoryList[0].Mermaid) return [3 /*break*/, 30];
                console.log("\u53D1\u73B0\u7F8E\u4EBA\u9C7C\uD83E\uDDDC\u200D\u2640\uFE0F");
                return [4 /*yield*/, api('story/MermaidOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '1',
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 24:
                MermaidRes = _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 25:
                _r.sent();
                if (!(MermaidRes.iRet === 0)) return [3 /*break*/, 27];
                return [4 /*yield*/, api('story/MermaidOpe', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '3',
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 26:
                MermaidRes = _r.sent();
                if (MermaidRes.iRet === 0) {
                    console.log("\u62EF\u6551\u7F8E\u4EBA\u9C7C\u6210\u529F");
                }
                _r.label = 27;
            case 27: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 28:
                _r.sent();
                return [4 /*yield*/, api('story/MermaidOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '2',
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 29:
                MermaidRes = _r.sent();
                if (MermaidRes.iRet === 0)
                    console.log('获得金币:', MermaidRes.Data.ddwCoin);
                _r.label = 30;
            case 30: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 31:
                _r.sent();
                if (!res.StoryInfo.StoryList[0].Special) return [3 /*break*/, 35];
                console.log("\u8239\u6765\u4E86\uFF0C\u4E58\u5BA2\u662F" + res.StoryInfo.StoryList[0].Special.strName);
                return [4 /*yield*/, api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '2',
                        triggerType: 0,
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 32:
                shipRes = _r.sent();
                console.log('正在下船，等待30s');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(30000)];
            case 33:
                _r.sent();
                return [4 /*yield*/, api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '3',
                        triggerType: 0,
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 34:
                shipRes = _r.sent();
                if (shipRes.iRet === 0)
                    console.log('船客接待成功');
                else
                    console.log('船客接待失败', shipRes);
                _r.label = 35;
            case 35:
                isCollector = false;
                if (!res.StoryInfo.StoryList[0].Collector) return [3 /*break*/, 41];
                console.log('收藏家出现');
                return [4 /*yield*/, api('story/CollectorOper', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,strStoryId,dwType,ddwTriggerDay', { strStoryId: res.StoryInfo.StoryList[0].strStoryId, dwType: '2', ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay })];
            case 36:
                // TODO 背包满了再卖给收破烂的
                res = _r.sent();
                console.log(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 37:
                _r.sent();
                isCollector = true;
                return [4 /*yield*/, api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 38:
                // 清空背包
                res = _r.sent();
                bags_1 = [];
                for (_d = 0, _e = res.Data.Office; _d < _e.length; _d++) {
                    s = _e[_d];
                    bags_1.push(s.dwType);
                    bags_1.push(s.dwCount);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 39:
                _r.sent();
                strTypeCnt_1 = '';
                for (n = 0; n < bags_1.length; n++) {
                    if (n % 2 === 0)
                        strTypeCnt_1 += bags_1[n] + ":";
                    else
                        strTypeCnt_1 += bags_1[n] + "|";
                }
                if (!(bags_1.length !== 0)) return [3 /*break*/, 41];
                return [4 /*yield*/, api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone', { dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt_1 })];
            case 40:
                res = _r.sent();
                console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney);
                _r.label = 41;
            case 41: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 42:
                _r.sent();
                _r.label = 43;
            case 43: return [4 /*yield*/, api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 44:
                // 清空背包
                res = _r.sent();
                bags = [];
                for (_f = 0, _g = res.Data.Office; _f < _g.length; _f++) {
                    s = _g[_f];
                    bags.push(s.dwType);
                    bags.push(s.dwCount);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 45:
                _r.sent();
                strTypeCnt = '';
                for (n = 0; n < bags.length; n++) {
                    if (n % 2 === 0)
                        strTypeCnt += bags[n] + ":";
                    else
                        strTypeCnt += bags[n] + "|";
                }
                if (!(bags.length !== 0)) return [3 /*break*/, 47];
                return [4 /*yield*/, api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone', { dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt })];
            case 46:
                res = _r.sent();
                console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney);
                _r.label = 47;
            case 47: return [4 /*yield*/, api('story/QueryRubbishInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 48:
                // 垃圾🚮
                res = _r.sent();
                if (!(res.Data.StoryInfo.StoryList.length !== 0)) return [3 /*break*/, 55];
                console.log('有垃圾');
                return [4 /*yield*/, api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwType,ptag,source,strZone', {
                        dwType: '1',
                        dwRewardType: 0
                    })];
            case 49:
                _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 50:
                _r.sent();
                j = 1;
                _r.label = 51;
            case 51:
                if (!(j < 9)) return [3 /*break*/, 55];
                return [4 /*yield*/, api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwRubbishId,dwType,ptag,source,strZone', {
                        dwType: '2',
                        dwRewardType: 0,
                        dwRubbishId: j
                    })];
            case 52:
                res = _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1500)];
            case 53:
                _r.sent();
                _r.label = 54;
            case 54:
                j++;
                return [3 /*break*/, 51];
            case 55: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 任务➡️
            ];
            case 56:
                _r.sent();
                tasks = void 0;
                return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 57:
                tasks = _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 58:
                _r.sent();
                _h = 0, _j = tasks.Data.TaskList;
                _r.label = 59;
            case 59:
                if (!(_h < _j.length)) return [3 /*break*/, 63];
                t = _j[_h];
                if (!((t.dwOrderId === 1 || t.dwOrderId === 2) && t.dwCompleteNum < t.dwTargetNum && t.strTaskName != '热气球接待20位游客')) return [3 /*break*/, 62];
                console.log('开始任务:', t.strTaskName);
                return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.ddwTaskId })];
            case 60:
                res = _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.dwLookTime * 1000)];
            case 61:
                _r.sent();
                if (res.ret === 0) {
                    console.log('任务完成');
                }
                else {
                    console.log('任务失败', res);
                }
                _r.label = 62;
            case 62:
                _h++;
                return [3 /*break*/, 59];
            case 63: return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 64:
                tasks = _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 65:
                _r.sent();
                _k = 0, _l = tasks.Data.TaskList;
                _r.label = 66;
            case 66:
                if (!(_k < _l.length)) return [3 /*break*/, 70];
                t = _l[_k];
                if (!(t.dwCompleteNum === t.dwTargetNum && t.dwAwardStatus === 2)) return [3 /*break*/, 69];
                return [4 /*yield*/, api('Award', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.ddwTaskId })];
            case 67:
                res = _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 68:
                _r.sent();
                if (res.ret === 0) {
                    console.log("\u9886\u5956\u6210\u529F:", JSON.parse(res.data.prizeInfo.trim()).ddwCoin);
                }
                else {
                    console.log('领奖失败', res);
                }
                _r.label = 69;
            case 69:
                _k++;
                return [3 /*break*/, 66];
            case 70: return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 71:
                tasks = _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 72:
                _r.sent();
                if (!(tasks.Data.dwStatus === 3)) return [3 /*break*/, 74];
                return [4 /*yield*/, api('story/ActTaskAward', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 73:
                res = _r.sent();
                if (res.ret === 0) {
                    console.log('100财富任务完成');
                }
                _r.label = 74;
            case 74: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 导游
            ];
            case 75:
                _r.sent();
                return [4 /*yield*/, api('user/EmployTourGuideInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 76:
                // 导游
                res = _r.sent();
                if (!!res.TourGuideList) return [3 /*break*/, 77];
                console.log('手动雇佣4个试用导游');
                return [3 /*break*/, 82];
            case 77:
                _m = 0, _o = res.TourGuideList;
                _r.label = 78;
            case 78:
                if (!(_m < _o.length)) return [3 /*break*/, 82];
                e = _o[_m];
                if (!(e.strBuildIndex !== 'food' && e.ddwRemainTm === 0)) return [3 /*break*/, 81];
                return [4 /*yield*/, api('user/EmployTourGuide', '_cfd_t,bizCode,ddwConsumeCoin,dwEnv,dwIsFree,ptag,source,strBuildIndex,strZone', { ddwConsumeCoin: e.ddwCostCoin, dwIsFree: 0, strBuildIndex: e.strBuildIndex })];
            case 79:
                employ = _r.sent();
                if (employ.iRet === 0)
                    console.log("\u96C7\u4F63" + e.strBuildIndex + "\u5BFC\u6E38\u6210\u529F");
                if (employ.iRet === 2003)
                    return [3 /*break*/, 82];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 80:
                _r.sent();
                _r.label = 81;
            case 81:
                _m++;
                return [3 /*break*/, 78];
            case 82: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 任务⬇️
            ];
            case 83:
                _r.sent();
                // 任务⬇️
                console.log('开始任务列表');
                _r.label = 84;
            case 84:
                if (!1) return [3 /*break*/, 90];
                _r.label = 85;
            case 85:
                _r.trys.push([85, 88, , 89]);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 86:
                _r.sent();
                return [4 /*yield*/, task()];
            case 87:
                _r.sent();
                return [3 /*break*/, 89];
            case 88:
                e_2 = _r.sent();
                console.log(e_2);
                return [3 /*break*/, 90];
            case 89:
                console.log('wait...');
                return [3 /*break*/, 84];
            case 90:
                console.log('结束任务列表');
                _p = 0, _q = ['fun', 'shop', 'sea', 'food'];
                _r.label = 91;
            case 91:
                if (!(_p < _q.length)) return [3 /*break*/, 95];
                b = _q[_p];
                return [4 /*yield*/, api('user/CollectCoin', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b, dwType: '1' })];
            case 92:
                res = _r.sent();
                console.log(b + "\u6536\u91D1\u5E01:", res.ddwCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 93:
                _r.sent();
                _r.label = 94;
            case 94:
                _p++;
                return [3 /*break*/, 91];
            case 95:
                i++;
                return [3 /*break*/, 3];
            case 96: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    var _this = this;
    if (params === void 0) { params = {}; }
    var url = '';
    if (['GetUserTaskStatusList', 'Award', 'DoTask'].indexOf(fn) > -1)
        url = "https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2";
    else
        url = "https://m.jingxi.com/jxbfd/" + fn + "?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&_ste=1&_=" + Date.now() + "&sceneval=2&_stk=" + encodeURIComponent(stk);
    url = (0, TS_USER_AGENTS_1.h5st)(url, stk, params);
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var data, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
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
                    return [3 /*break*/, 3];
                case 2:
                    e_3 = _a.sent();
                    resolve(e_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
}
function task() {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var _i, _a, t;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, api('GetUserTaskStatusList', '_cfd_t,bizCode,dwEnv,ptag,showAreaTaskFlag,source,strZone,taskId', { taskId: 0, showAreaTaskFlag: 0 })];
                case 1:
                    res = _b.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                case 2:
                    _b.sent();
                    _i = 0, _a = res.data.userTaskStatusList;
                    _b.label = 3;
                case 3:
                    if (!(_i < _a.length)) return [3 /*break*/, 9];
                    t = _a[_i];
                    if (!(t.dateType === 2)) return [3 /*break*/, 8];
                    if (!(t.awardStatus === 2 && t.completedTimes === t.targetTimes)) return [3 /*break*/, 5];
                    console.log(1, t.taskName);
                    return [4 /*yield*/, api('Award', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', { taskId: t.taskId })];
                case 4:
                    res = _b.sent();
                    if (res.ret === 0) {
                        console.log(t.taskName + "\u9886\u5956\u6210\u529F:", res.data.prizeInfo);
                        resolve(0);
                    }
                    else {
                        console.log('领奖失败');
                        reject(res);
                    }
                    return [3 /*break*/, 8];
                case 5:
                    if (!(t.awardStatus === 2 && t.completedTimes < t.targetTimes && ([1, 2, 3, 4, 5].includes(t.orderId)))) return [3 /*break*/, 8];
                    console.log('做任务:', t.taskId, t.taskName, t.completedTimes, t.targetTimes);
                    return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', {
                            taskId: t.taskId,
                            configExtra: ''
                        })];
                case 6:
                    res = _b.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
                case 7:
                    _b.sent();
                    if (res.ret === 0) {
                        console.log('任务完成');
                        resolve(0);
                    }
                    else {
                        console.log('任务失败');
                        reject(res);
                    }
                    _b.label = 8;
                case 8:
                    _i++;
                    return [3 /*break*/, 3];
                case 9:
                    reject('end');
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
