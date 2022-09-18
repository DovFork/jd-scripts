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
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var h5st_1 = require("./utils/h5st");
var sendNotify_1 = require("./sendNotify");
var date_fns_1 = require("date-fns");
var cookie = '', res = '', UserName, h5stTool;
var shareCodeSelf = [], log = { help: '', runTimes: '' }, message = '', ua = '', fp = process.env.FP_8A2AF || process.env.FP_0C010 || '';
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var h5st;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    h5st = h5stTool.__genH5st({
                        'appid': 'signed_wh5',
                        'body': JSON.stringify(body),
                        'client': 'iOS',
                        'clientVersion': '10.2.4',
                        'functionId': fn
                    });
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://api.m.jd.com/client.action?functionId=".concat(fn, "&body=").concat(JSON.stringify(body), "&appid=signed_wh5&client=iOS&clientVersion=10.2.4&timestamp=").concat(Date.now(), "&h5st=").concat(h5st), {
                            "Host": "api.m.jd.com",
                            "Origin": "https://carry.m.jd.com",
                            "User-Agent": ua,
                            "Referer": "https://carry.m.jd.com/",
                            "Cookie": cookie
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, i, today, e_1, e_2, full, _c, _d, _e, index, value, shareCodePool, shareCode, _f, shareCode_1, code, e_3, _g, _h, _j, index, value, assistFriendList, farmAssistInit_waterEnergy, _k, _l, t, e_4, _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getCookie)()];
            case 1:
                cookiesArr = _o.sent();
                if (!!(process.env.FP_8A2AF || process.env.FP_0C010)) return [3 /*break*/, 3];
                console.log('环境变量FP_8A2AF或FP_0C010未设置，抓包关键词8a2af或0c010');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)('https://sharecodepool.cnmb.win/api/fp')];
            case 2:
                fp = _o.sent();
                console.log('remote fp', fp);
                _o.label = 3;
            case 3:
                _i = 0, _a = cookiesArr.entries();
                _o.label = 4;
            case 4:
                if (!(_i < _a.length)) return [3 /*break*/, 22];
                _b = _a[_i], index = _b[0], value = _b[1];
                _o.label = 5;
            case 5:
                _o.trys.push([5, 18, , 19]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                ua = "Mozilla/5.0 (iPhone; CPU iPhone OS ".concat((0, TS_USER_AGENTS_1.getRandomNumberByRange)(12, 16), "_").concat((0, TS_USER_AGENTS_1.getRandomNumberByRange)(0, 5), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac");
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                h5stTool = new h5st_1.H5ST("8a2af", ua, fp);
                return [4 /*yield*/, h5stTool.__genAlgo()];
            case 6:
                _o.sent();
                return [4 /*yield*/, api('initForFarm', { "babelChannel": "121", "sid": "", "un_area": "", "version": 18, "channel": 1 })];
            case 7:
                res = _o.sent();
                if (!(res.code === '6')) return [3 /*break*/, 10];
                (0, TS_USER_AGENTS_1.o2s)(res, '初始化失败');
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)('jd_fruit_help.ts error', "\u8D26\u53F7".concat(index + 1, " ").concat(UserName, " \u9700\u8981\u6293\u5305FP\n\n\u73AF\u5883\u53D8\u91CFFP_8A2AF\u6216FP_0C010\u672A\u8BBE\u7F6E\n\u6293\u5305\u5173\u952E\u8BCD8a2af\u62160c010"))];
            case 8:
                _o.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 9:
                _o.sent();
                return [3 /*break*/, 21];
            case 10:
                console.log('助力码', res.farmUserPro.shareCode);
                shareCodeSelf.push(res.farmUserPro.shareCode);
                i = 0;
                _o.label = 11;
            case 11:
                if (!(i < 5)) return [3 /*break*/, 17];
                _o.label = 12;
            case 12:
                _o.trys.push([12, 14, , 16]);
                today = (0, date_fns_1.getDate)(new Date());
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://sharecodepool.cnmb.win/api/runTimes0917?activityId=farm&sharecode=".concat(res.farmUserPro.shareCode, "&today=").concat(today))];
            case 13:
                res = _o.sent();
                console.log(res);
                log.runTimes += "\u7B2C".concat(i + 1, "\u6B21").concat(res, "\n");
                return [3 /*break*/, 17];
            case 14:
                e_1 = _o.sent();
                console.log("\u7B2C".concat(i + 1, "\u6B21\u4E0A\u62A5\u5931\u8D25"), e_1.message);
                log.runTimes += "\u7B2C".concat(i + 1, "\u6B21\u4E0A\u62A5\u5931\u8D25 ").concat(typeof e_1 === 'object' ? JSON.stringify(e_1) : e_1, "\n");
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)((0, TS_USER_AGENTS_1.getRandomNumberByRange)(10000, 30000))];
            case 15:
                _o.sent();
                return [3 /*break*/, 16];
            case 16:
                i++;
                return [3 /*break*/, 11];
            case 17: return [3 /*break*/, 19];
            case 18:
                e_2 = _o.sent();
                console.log('error', e_2.message);
                return [3 /*break*/, 19];
            case 19: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 20:
                _o.sent();
                _o.label = 21;
            case 21:
                _i++;
                return [3 /*break*/, 4];
            case 22:
                (0, TS_USER_AGENTS_1.o2s)(shareCodeSelf, '内部互助');
                full = [];
                _c = 0, _d = cookiesArr.entries();
                _o.label = 23;
            case 23:
                if (!(_c < _d.length)) return [3 /*break*/, 43];
                _e = _d[_c], index = _e[0], value = _e[1];
                _o.label = 24;
            case 24:
                _o.trys.push([24, 39, , 40]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                ua = "Mozilla/5.0 (iPhone; CPU iPhone OS ".concat((0, TS_USER_AGENTS_1.getRandomNumberByRange)(12, 16), "_").concat((0, TS_USER_AGENTS_1.getRandomNumberByRange)(0, 5), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac");
                h5stTool = new h5st_1.H5ST("235ec", ua, fp);
                return [4 /*yield*/, h5stTool.__genAlgo()];
            case 25:
                _o.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getShareCodePool)('farm', 50)];
            case 26:
                shareCodePool = _o.sent();
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], shareCodeSelf, true), shareCodePool, true)));
                _f = 0, shareCode_1 = shareCode;
                _o.label = 27;
            case 27:
                if (!(_f < shareCode_1.length)) return [3 /*break*/, 38];
                code = shareCode_1[_f];
                console.log("\u8D26\u53F7".concat(index + 1, " ").concat(UserName, " \u53BB\u52A9\u529B ").concat(code, " ").concat(shareCodeSelf.includes(code) ? "*内部*" : ""));
                if (full.includes(code)) {
                    console.log('full contains');
                    return [3 /*break*/, 37];
                }
                return [4 /*yield*/, api('initForFarm', { "shareCode": code, "mpin": "", "utm_term": "Wxfriends", "ad_od": "share", "utm_campaign": "t_335139774", "utm_medium": "appshare", "utm_source": "iosapp", "imageUrl": "", "nickName": "", "version": 18, "channel": 2, "babelChannel": 0 })];
            case 28:
                res = _o.sent();
                if (!!(res.helpResult && res.helpResult.code)) return [3 /*break*/, 29];
                (0, TS_USER_AGENTS_1.o2s)(res, 'initForFarm+sharecode error');
                return [3 /*break*/, 35];
            case 29:
                if (!(res.helpResult.code === '7')) return [3 /*break*/, 30];
                console.log('不给自己助力');
                return [3 /*break*/, 35];
            case 30:
                if (!(res.helpResult.code === '0')) return [3 /*break*/, 31];
                console.log('助力成功,获得', res.helpResult.salveHelpAddWater);
                log.help += "\u52A9\u529B\u6210\u529F ".concat(code, " ").concat(shareCodeSelf.includes(code) ? '*内部*' : '', "\n");
                return [3 /*break*/, 35];
            case 31:
                if (!(res.helpResult.code === '9')) return [3 /*break*/, 32];
                console.log('已助力');
                log.help += "\u5DF2\u52A9\u529B ".concat(code, " ").concat(shareCodeSelf.includes(code) ? '*内部*' : '', "\n");
                return [3 /*break*/, 35];
            case 32:
                if (!(res.helpResult.code === '10')) return [3 /*break*/, 33];
                console.log('已满');
                full.push(code);
                return [3 /*break*/, 35];
            case 33:
                if (!(res.helpResult.remainTimes === 0)) return [3 /*break*/, 35];
                console.log('上限');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(10000)];
            case 34:
                _o.sent();
                return [3 /*break*/, 38];
            case 35: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(10000)];
            case 36:
                _o.sent();
                _o.label = 37;
            case 37:
                _f++;
                return [3 /*break*/, 27];
            case 38: return [3 /*break*/, 40];
            case 39:
                e_3 = _o.sent();
                console.log('error', e_3.message);
                return [3 /*break*/, 40];
            case 40: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 41:
                _o.sent();
                _o.label = 42;
            case 42:
                _c++;
                return [3 /*break*/, 23];
            case 43:
                _g = 0, _h = cookiesArr.entries();
                _o.label = 44;
            case 44:
                if (!(_g < _h.length)) return [3 /*break*/, 58];
                _j = _h[_g], index = _j[0], value = _j[1];
                _o.label = 45;
            case 45:
                _o.trys.push([45, 54, , 55]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                ua = "Mozilla/5.0 (iPhone; CPU iPhone OS ".concat((0, TS_USER_AGENTS_1.getRandomNumberByRange)(12, 16), "_").concat((0, TS_USER_AGENTS_1.getRandomNumberByRange)(0, 5), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac");
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                h5stTool = new h5st_1.H5ST("92354", ua, fp);
                return [4 /*yield*/, h5stTool.__genAlgo()];
            case 46:
                _o.sent();
                return [4 /*yield*/, api('farmAssistInit', { "version": 18, "channel": 1, "babelChannel": "121" })];
            case 47:
                res = _o.sent();
                assistFriendList = res.assistFriendList.length;
                if (res.code !== '0') {
                    console.log('farmAssistInit Error');
                    return [3 /*break*/, 57];
                }
                farmAssistInit_waterEnergy = 0;
                _k = 0, _l = res.assistStageList;
                _o.label = 48;
            case 48:
                if (!(_k < _l.length)) return [3 /*break*/, 53];
                t = _l[_k];
                if (!(t.percentage === '100%' && t.stageStaus === 2)) return [3 /*break*/, 51];
                return [4 /*yield*/, api('receiveStageEnergy', { "version": 14, "channel": 1, "babelChannel": "120" })];
            case 49:
                res = _o.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 50:
                _o.sent();
                farmAssistInit_waterEnergy += t.waterEnergy;
                return [3 /*break*/, 52];
            case 51:
                if (t.stageStaus === 3) {
                    farmAssistInit_waterEnergy += t.waterEnergy;
                }
                _o.label = 52;
            case 52:
                _k++;
                return [3 /*break*/, 48];
            case 53:
                console.log('收到助力', assistFriendList);
                console.log('助力已领取', farmAssistInit_waterEnergy);
                message += "\u3010\u52A9\u529B\u5DF2\u9886\u53D6\u3011  ".concat(farmAssistInit_waterEnergy, "\n\n");
                message += '\n\n';
                return [3 /*break*/, 55];
            case 54:
                e_4 = _o.sent();
                console.log('error', e_4.message);
                return [3 /*break*/, 55];
            case 55: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(10000)];
            case 56:
                _o.sent();
                _o.label = 57;
            case 57:
                _g++;
                return [3 /*break*/, 44];
            case 58:
                _m = message;
                if (!_m) return [3 /*break*/, 60];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)("农场助力", message)];
            case 59:
                _m = (_o.sent());
                _o.label = 60;
            case 60:
                _m;
                return [2 /*return*/];
        }
    });
}); })();
