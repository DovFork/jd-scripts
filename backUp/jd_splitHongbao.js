"use strict";
/**
 * 金榜任务
 * 入口 https://wz.my/7tf
 * cron: 0 0,15 * * *
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
var TS_USER_AGENTS_1 = require("../TS_USER_AGENTS");
var axios_1 = require("axios");
var cookie = '', res = '', UserName, index;
var shareCodeSelf = [], shareCode = [], shareCodeHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, taskVos, _i, taskVos_1, t, _a, _b, tp, lotteryNum, j, _c, taskVos_2, t, i, _d, shareCode_1, code;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _e.sent();
                i = 0;
                _e.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 24];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('splitHongbao_getHomeData', { "appId": "1EFVXxg", "taskToken": "" })];
            case 3:
                res = _e.sent();
                taskVos = res.data.result.taskVos;
                _i = 0, taskVos_1 = taskVos;
                _e.label = 4;
            case 4:
                if (!(_i < taskVos_1.length)) return [3 /*break*/, 12];
                t = taskVos_1[_i];
                if (!(t.status === 1)) return [3 /*break*/, 10];
                console.log(t.taskName);
                _a = 0, _b = t.shoppingActivityVos || t.productInfoVos;
                _e.label = 5;
            case 5:
                if (!(_a < _b.length)) return [3 /*break*/, 10];
                tp = _b[_a];
                if (!(tp.status === 1)) return [3 /*break*/, 9];
                return [4 /*yield*/, api('harmony_collectScore', { "appId": "1EFVXxg", "taskToken": tp.taskToken, "taskId": t.taskId, "itemId": tp.itemId, "actionType": "1" })];
            case 6:
                res = _e.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.waitDuration * 1000 + 500)];
            case 7:
                _e.sent();
                return [4 /*yield*/, api('harmony_collectScore', { "appId": "1EFVXxg", "taskToken": tp.taskToken, "taskId": t.taskId, "itemId": tp.itemId, "actionType": "0" })];
            case 8:
                res = _e.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                _e.label = 9;
            case 9:
                _a++;
                return [3 /*break*/, 5];
            case 10:
                if (t.taskId === 7) {
                    console.log('助力码：', t.assistTaskDetailVo.taskToken);
                    shareCodeSelf.push(t.assistTaskDetailVo.taskToken);
                }
                _e.label = 11;
            case 11:
                _i++;
                return [3 /*break*/, 4];
            case 12: return [4 /*yield*/, api('splitHongbao_getHomeData', { "appId": "1EFVXxg", "taskToken": "" })];
            case 13:
                res = _e.sent();
                lotteryNum = parseInt(res.data.result.userInfo.lotteryNum);
                taskVos = res.data.result.taskVos;
                j = 0;
                _e.label = 14;
            case 14:
                if (!(j < lotteryNum)) return [3 /*break*/, 18];
                return [4 /*yield*/, api('splitHongbao_getLotteryResult', { "appId": "1EFVXxg", "taskId": "" })];
            case 15:
                res = _e.sent();
                console.log('开红包：', parseFloat(res.data.result.userAwardsCacheDto.redPacketVO.value));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 16:
                _e.sent();
                _e.label = 17;
            case 17:
                j++;
                return [3 /*break*/, 14];
            case 18:
                _c = 0, taskVos_2 = taskVos;
                _e.label = 19;
            case 19:
                if (!(_c < taskVos_2.length)) return [3 /*break*/, 23];
                t = taskVos_2[_c];
                if (!(t.status === 3)) return [3 /*break*/, 22];
                return [4 /*yield*/, api('splitHongbao_getLotteryResult', { "appId": "1EFVXxg", "taskId": t.taskId })];
            case 20:
                res = _e.sent();
                console.log('开红包：', parseFloat(res.data.result.userAwardsCacheDto.redPacketVO.value));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 21:
                _e.sent();
                _e.label = 22;
            case 22:
                _c++;
                return [3 /*break*/, 19];
            case 23:
                i++;
                return [3 /*break*/, 2];
            case 24:
                console.log('内部助力码：', shareCodeSelf);
                i = 0;
                _e.label = 25;
            case 25:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 33];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                if (!(shareCodeHW.length === 0)) return [3 /*break*/, 27];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('jinbang')];
            case 26:
                shareCodeHW = _e.sent();
                _e.label = 27;
            case 27:
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], shareCodeSelf, true), shareCodeHW, true)));
                _d = 0, shareCode_1 = shareCode;
                _e.label = 28;
            case 28:
                if (!(_d < shareCode_1.length)) return [3 /*break*/, 32];
                code = shareCode_1[_d];
                console.log("\u8D26\u53F7 ".concat(UserName, " \u53BB\u52A9\u529B ").concat(code));
                return [4 /*yield*/, api('harmony_collectScore', { "appId": "1EFVXxg", "taskToken": code, "taskId": 6, "actionType": 0 })];
            case 29:
                res = _e.sent();
                if (res.data.bizMsg === 'success') {
                    console.log('助力成功');
                }
                else if (res.data.bizMsg === '已达到助力上限') {
                    return [3 /*break*/, 32];
                }
                else {
                    console.log(res.data.bizMsg);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 30:
                _e.sent();
                _e.label = 31;
            case 31:
                _d++;
                return [3 /*break*/, 28];
            case 32:
                i++;
                return [3 /*break*/, 25];
            case 33: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post('https://api.m.jd.com/client.action', "functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&client=wh5&clientVersion=1.0.0"), {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://h5.m.jd.com',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://h5.m.jd.com/',
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
