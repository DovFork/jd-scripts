"use strict";
/**
 * 京东-东东农场-助力
 * 所有CK助力顺序
 * 内部 -> 助力池
 * 和jd_fruit.js同方法自己设置内部码
 * 如果没有添加内部码，直接助力助力池
 * cron: 35 0,3,5 * * *
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
var date_fns_1 = require("date-fns");
var cookie = '', res = '', data, UserName;
var shareCodeSelf = [], shareCodePool = [], shareCode = [], shareCodeFile = require('./jdFruitShareCodes');
var message = '', log = { help: '', runTimes: '' };
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, i, today, e_1, e_2, _c, shareCodeSelf_1, code, farmAssistInit_waterEnergy, _d, _e, t;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _f.sent();
                _i = 0, _a = cookiesArr.entries();
                _f.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 32];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                message += "\u3010\u8D26\u53F7".concat(index + 1, "\u3011  ").concat(UserName, "\n");
                log.help += "\u3010\u8D26\u53F7".concat(index + 1, "\u3011  ").concat(UserName, "\n");
                log.runTimes += "\u3010\u8D26\u53F7".concat(index + 1, "\u3011  ").concat(UserName, "\n");
                if (Object.keys(shareCodeFile)[index]) {
                    shareCodeSelf = shareCodeFile[Object.keys(shareCodeFile)[index]].split('@');
                }
                (0, TS_USER_AGENTS_1.o2s)(shareCodeSelf, "\u7B2C".concat(index + 1, "\u4E2A\u8D26\u53F7\u83B7\u53D6\u7684\u5185\u90E8\u4E92\u52A9"));
                console.log('⬆️ 检查是否获取到内部互助码，有问题及时停止运行，15秒后开始执行');
                return [4 /*yield*/, api('initForFarm', { "version": 11, "channel": 3 })];
            case 3:
                // await wait(15000)
                res = _f.sent();
                _f.label = 4;
            case 4:
                _f.trys.push([4, 12, , 13]);
                console.log('助力码', res.farmUserPro.shareCode);
                i = 0;
                _f.label = 5;
            case 5:
                if (!(i < 5)) return [3 /*break*/, 11];
                _f.label = 6;
            case 6:
                _f.trys.push([6, 8, , 10]);
                today = (0, date_fns_1.getDate)(new Date());
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://api.jdsharecode.xyz/api/runTimes0407?activityId=farm&sharecode=".concat(res.farmUserPro.shareCode, "&today=").concat(today))];
            case 7:
                res = _f.sent();
                console.log(res);
                log.runTimes += "\u7B2C".concat(i + 1, "\u6B21").concat(res, "\n");
                return [3 /*break*/, 11];
            case 8:
                e_1 = _f.sent();
                console.log("\u7B2C".concat(i + 1, "\u6B21\u4E0A\u62A5\u5931\u8D25"), e_1);
                log.runTimes += "\u7B2C".concat(i + 1, "\u6B21\u4E0A\u62A5\u5931\u8D25 ").concat(typeof e_1 === 'object' ? JSON.stringify(e_1) : e_1, "\n");
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)((0, TS_USER_AGENTS_1.getRandomNumberByRange)(10000, 30000))];
            case 9:
                _f.sent();
                return [3 /*break*/, 10];
            case 10:
                i++;
                return [3 /*break*/, 5];
            case 11: return [3 /*break*/, 13];
            case 12:
                e_2 = _f.sent();
                console.log('获取助力码失败，黑号？');
                return [3 /*break*/, 31];
            case 13: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)
                // 助力
            ];
            case 14:
                _f.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('farm', 50)];
            case 15:
                // 助力
                shareCodePool = _f.sent();
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], shareCodeSelf, true), shareCodePool, true)));
                _c = 0, shareCodeSelf_1 = shareCodeSelf;
                _f.label = 16;
            case 16:
                if (!(_c < shareCodeSelf_1.length)) return [3 /*break*/, 20];
                code = shareCodeSelf_1[_c];
                console.log("\u8D26\u53F7 ".concat(UserName, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodeSelf.includes(code) ? '*内部*' : ''));
                return [4 /*yield*/, api('initForFarm', { "mpin": "", "utm_campaign": "t_335139774", "utm_medium": "appshare", "shareCode": code, "utm_term": "Wxfriends", "utm_source": "iosapp", "imageUrl": "", "nickName": "", "version": 14, "channel": 2, "babelChannel": 0 })];
            case 17:
                res = _f.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 18:
                _f.sent();
                if (res.helpResult.code === '7') {
                    console.log('不给自己助力');
                }
                else if (res.helpResult.code === '0') {
                    console.log('助力成功,获得', res.helpResult.salveHelpAddWater);
                    log.help += "\u52A9\u529B\u6210\u529F ".concat(code, " ").concat(shareCodeSelf.includes(code) ? '*内部*' : '', "\n");
                }
                else if (res.helpResult.code === '8') {
                    console.log('上限');
                    return [3 /*break*/, 20];
                }
                else if (res.helpResult.code === '9') {
                    console.log('已助力');
                    log.help += "\u5DF2\u52A9\u529B ".concat(code, " ").concat(shareCodeSelf.includes(code) ? '*内部*' : '', "\n");
                }
                else if (res.helpResult.code === '10') {
                    console.log('已满');
                }
                else if (res.helpResult.remainTimes === 0) {
                    console.log('次数用完');
                    return [3 /*break*/, 20];
                }
                _f.label = 19;
            case 19:
                _c++;
                return [3 /*break*/, 16];
            case 20: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)
                // 助力奖励
            ];
            case 21:
                _f.sent();
                return [4 /*yield*/, api('farmAssistInit', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 22:
                // 助力奖励
                res = _f.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 23:
                _f.sent();
                (0, TS_USER_AGENTS_1.o2s)(res, 'farmAssistInit');
                farmAssistInit_waterEnergy = 0;
                _d = 0, _e = res.assistStageList;
                _f.label = 24;
            case 24:
                if (!(_d < _e.length)) return [3 /*break*/, 29];
                t = _e[_d];
                if (!(t.percentage === '100%' && t.stageStaus === 2)) return [3 /*break*/, 27];
                return [4 /*yield*/, api('receiveStageEnergy', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 25:
                data = _f.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 26:
                _f.sent();
                farmAssistInit_waterEnergy += t.waterEnergy;
                return [3 /*break*/, 28];
            case 27:
                if (t.stageStaus === 3) {
                    farmAssistInit_waterEnergy += t.waterEnergy;
                }
                _f.label = 28;
            case 28:
                _d++;
                return [3 /*break*/, 24];
            case 29:
                console.log('收到助力', res.assistFriendList.length);
                console.log('助力已领取', farmAssistInit_waterEnergy);
                message += "\u3010\u52A9\u529B\u5DF2\u9886\u53D6\u3011  ".concat(farmAssistInit_waterEnergy, "\n");
                message += '\n\n';
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 30:
                _f.sent();
                _f.label = 31;
            case 31:
                _i++;
                return [3 /*break*/, 2];
            case 32:
                if (message) {
                    console.log('===================');
                    console.log(message);
                    console.log('===================');
                }
                console.log(log.help);
                console.log(log.runTimes);
                return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://api.m.jd.com/client.action?functionId=".concat(fn, "&body=").concat(JSON.stringify(body), "&appid=wh5&client=apple&clientVersion=10.2.4"), {
                        headers: {
                            "Host": "api.m.jd.com",
                            "Origin": "https://carry.m.jd.com",
                            "User-Agent": TS_USER_AGENTS_1["default"],
                            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                            "Referer": "https://carry.m.jd.com/",
                            "Cookie": cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
