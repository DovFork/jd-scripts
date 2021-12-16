"use strict";
/**
 * 京喜财富岛-合成游戏
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
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', UserName, index, token = {};
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, j, dwCurProgress, strDT, strMyShareId, ddwSeasonStartTm, RealTmReport, PearlList, strLT, j_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _a.sent();
                i = 0;
                _a.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 19];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                j = 0;
                _a.label = 4;
            case 4:
                if (!(j < 3)) return [3 /*break*/, 18];
                token = (0, TS_USER_AGENTS_1.getJxToken)(cookie);
                return [4 /*yield*/, api('user/ComposePearlState', '', { __t: Date.now(), dwGetType: 0 })];
            case 5:
                // 珍珠
                res = _a.sent();
                dwCurProgress = res.dwCurProgress;
                strDT = res.strDT;
                strMyShareId = res.strMyShareId;
                ddwSeasonStartTm = res.ddwSeasonStartTm;
                RealTmReport = res.PearlList.length;
                PearlList = res.PearlList;
                console.log('PearlList', JSON.stringify(PearlList));
                strLT = res.oPT[res.ddwCurTime % (res.oPT.length)];
                console.log("\u5DF2\u5408\u6210".concat(dwCurProgress, "\u4E2A\u73CD\u73E0\uFF0C").concat(res.ddwVirHb / 100, "\u5143\u7EA2\u5305"));
                if (!(res.dayDrawInfo.dwIsDraw === 0)) return [3 /*break*/, 8];
                return [4 /*yield*/, api("user/GetPearlDailyReward", "__t,strZone", { __t: Date.now() })];
            case 6:
                res = _a.sent();
                if (!(res.iRet === 0)) return [3 /*break*/, 8];
                return [4 /*yield*/, api("user/PearlDailyDraw", "__t,ddwSeaonStart,strToken,strZone", { __t: Date.now(), ddwSeaonStart: ddwSeasonStartTm, strToken: res.strToken })];
            case 7:
                res = _a.sent();
                if (res.strPrizeName) {
                    console.log('抽奖获得:', res.strPrizeName);
                }
                else {
                    console.log('抽奖失败？', res);
                }
                _a.label = 8;
            case 8:
                if (!strDT) return [3 /*break*/, 17];
                console.log('继续合成');
                console.log('本次合成需要上报:', RealTmReport);
                j_1 = 0;
                _a.label = 9;
            case 9:
                if (!(j_1 < RealTmReport)) return [3 /*break*/, 15];
                return [4 /*yield*/, api('user/RealTmReport', '', { __t: Date.now(), dwIdentityType: 0, strBussKey: 'composegame', strMyShareId: strMyShareId, ddwCount: 10 })];
            case 10:
                res = _a.sent();
                if (res.iRet === 0)
                    console.log("\u6E38\u620F\u4E2D\u9014\u4E0A\u62A5".concat(j_1 + 1, ":OK"));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 11:
                _a.sent();
                console.log(JSON.stringify(PearlList[j_1]));
                if (!PearlList[j_1].rbf) return [3 /*break*/, 14];
                return [4 /*yield*/, api('user/ComposePearlAward', '__t,size,strBT,strZone,type', { __t: Date.now(), size: 1, strBT: strDT, type: PearlList[j_1].type })];
            case 12:
                res = _a.sent();
                if (res.iRet === 0) {
                    console.log("\u4E0A\u62A5\u5F97\u7EA2\u5305:".concat(res.ddwAwardHb / 100, "\u7EA2\u5305\uFF0C\u5F53\u524D\u6709").concat(res.ddwVirHb / 100));
                }
                else {
                    console.log('上报得红包失败:', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 13:
                _a.sent();
                _a.label = 14;
            case 14:
                j_1++;
                return [3 /*break*/, 9];
            case 15: return [4 /*yield*/, api("user/ComposePearlAddProcess", '__t,strBT,strLT,strZone', { __t: Date.now(), strBT: strDT, strLT: strLT })];
            case 16:
                // 珍珠奖励
                res = _a.sent();
                if (res.iRet === 0) {
                    console.log("\u5408\u6210\u6210\u529F:\u83B7\u5F97".concat(res.ddwAwardHb / 100, "\u7EA2\u5305\uFF0C\u5F53\u524D\u6709").concat(res.dwCurProgress, "\u73CD\u73E0\uFF0C").concat(res.ddwVirHb / 100, "\u7EA2\u5305"));
                    if (res.ddwAwardHb === 0) {
                        return [3 /*break*/, 18];
                    }
                }
                else {
                    console.log('合成失败:', res);
                }
                _a.label = 17;
            case 17:
                j++;
                return [3 /*break*/, 4];
            case 18:
                i++;
                return [3 /*break*/, 3];
            case 19: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params, taskPosition) {
    if (params === void 0) { params = {}; }
    if (taskPosition === void 0) { taskPosition = ''; }
    return __awaiter(this, void 0, void 0, function () {
        var url, bizCode, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (['GetUserTaskStatusList', 'Award', 'DoTask'].includes(fn)) {
                        bizCode = void 0;
                        if (!params.bizCode) {
                            bizCode = taskPosition === 'right' ? 'jxbfddch' : 'jxbfd';
                        }
                        else {
                            bizCode = params.bizCode;
                        }
                        url = "https://m.jingxi.com/newtasksys/newtasksys_front/".concat(fn, "?strZone=jxbfd&bizCode=").concat(bizCode, "&source=jxbfd&dwEnv=7&_cfd_t=").concat(Date.now(), "&ptag=&_stk=").concat(encodeURIComponent(stk), "&_ste=1&_=").concat(Date.now(), "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls");
                    }
                    else {
                        url = "https://m.jingxi.com/jxbfd/".concat(fn, "?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=").concat(Date.now(), "&ptag=&_stk=").concat(encodeURIComponent(stk), "&_ste=1&_=").concat(Date.now(), "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls");
                    }
                    url = (0, TS_USER_AGENTS_1.h5st)(url, stk, params, 10032);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'Accept': '*/*',
                                'Connection': 'keep-alive',
                                'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                                'User-Agent': "jdpingou;",
                                'Referer': 'https://st.jingxi.com/',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, JSON.parse(data.replace(/\n/g, '').match(/jsonpCBK.?\(([^)]*)/)[1])];
            }
        });
    });
}
