"use strict";
/**
 * 极速版-挖宝
 * 助力，挖宝，任务，提现
 * cron: 2 0,1,18 * * *
 * CK1     HW.ts -> 内部
 * CK2～n  内部   -> HW.ts
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
var cookie = '', res = '', UserName, data, h5stTool = new h5st_1.H5ST("ce6c2", "jdltapp;", "9929056438203725");
var shareCodes = [], shareCodesHW = [], shareCodesSelf = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, e_1, _c, _d, _e, index, value, _f, shareCodesSelf_1, code, _g, _h, t, e_2, _j, _k, _l, index, value, blood, i, j, e_3;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getCookie)()];
            case 1:
                cookiesArr = _m.sent();
                _i = 0, _a = cookiesArr.entries();
                _m.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 10];
                _b = _a[_i], index = _b[0], value = _b[1];
                _m.label = 3;
            case 3:
                _m.trys.push([3, 6, , 7]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, h5stTool.__genAlgo()];
            case 4:
                _m.sent();
                return [4 /*yield*/, api('happyDigHome', { "linkId": "pTTvJeSTrpthgk9ASBVGsw" })];
            case 5:
                res = _m.sent();
                console.log('助力码', res.data.markedPin, res.data.inviteCode);
                shareCodesSelf.push({ inviter: res.data.markedPin, inviteCode: res.data.inviteCode });
                return [3 /*break*/, 7];
            case 6:
                e_1 = _m.sent();
                console.log('error');
                return [3 /*break*/, 7];
            case 7: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 8:
                _m.sent();
                _m.label = 9;
            case 9:
                _i++;
                return [3 /*break*/, 2];
            case 10:
                console.log('内部助力');
                (0, TS_USER_AGENTS_1.o2s)(shareCodesSelf);
                _c = 0, _d = cookiesArr.entries();
                _m.label = 11;
            case 11:
                if (!(_c < _d.length)) return [3 /*break*/, 37];
                _e = _d[_c], index = _e[0], value = _e[1];
                _m.label = 12;
            case 12:
                _m.trys.push([12, 34, , 36]);
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, h5stTool.__genAlgo()];
            case 13:
                _m.sent();
                if (!(shareCodesHW.length === 0)) return [3 /*break*/, 15];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('fcwb')];
            case 14:
                shareCodesHW = _m.sent();
                _m.label = 15;
            case 15:
                if (index === 0 && cookiesArr.length === 1) {
                    shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesHW, true), shareCodesSelf, true)));
                }
                else {
                    shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], shareCodesSelf, true), shareCodesHW, true)));
                }
                _f = 0, shareCodesSelf_1 = shareCodesSelf;
                _m.label = 16;
            case 16:
                if (!(_f < shareCodesSelf_1.length)) return [3 /*break*/, 26];
                code = shareCodesSelf_1[_f];
                console.log("\u53BB\u52A9\u529B ".concat(code.inviteCode));
                return [4 /*yield*/, api('happyDigHelp', { "linkId": "pTTvJeSTrpthgk9ASBVGsw", "inviter": code.inviter, "inviteCode": code.inviteCode })];
            case 17:
                res = _m.sent();
                if (!(res.code === 0)) return [3 /*break*/, 19];
                console.log('助力成功');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 18:
                _m.sent();
                return [3 /*break*/, 26];
            case 19:
                if (!(res.code === 16143)) return [3 /*break*/, 20];
                console.log('已助力');
                return [3 /*break*/, 23];
            case 20:
                if (!(res.code === 16144)) return [3 /*break*/, 22];
                console.log('上限');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 21:
                _m.sent();
                return [3 /*break*/, 26];
            case 22:
                (0, TS_USER_AGENTS_1.o2s)(res);
                _m.label = 23;
            case 23: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 24:
                _m.sent();
                _m.label = 25;
            case 25:
                _f++;
                return [3 /*break*/, 16];
            case 26: return [4 /*yield*/, api('apTaskList', { "linkId": "pTTvJeSTrpthgk9ASBVGsw" })];
            case 27:
                res = _m.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 28:
                _m.sent();
                _g = 0, _h = res.data;
                _m.label = 29;
            case 29:
                if (!(_g < _h.length)) return [3 /*break*/, 33];
                t = _h[_g];
                if (!(t.taskType === 'BROWSE_CHANNEL' && t.taskDoTimes === 0 && t.taskLimitTimes === 1)) return [3 /*break*/, 32];
                console.log(t.taskShowTitle);
                return [4 /*yield*/, api('apDoTask', { "linkId": "pTTvJeSTrpthgk9ASBVGsw", "taskType": "BROWSE_CHANNEL", "taskId": t.id, "channel": 4, "itemId": encodeURIComponent(t.taskSourceUrl), "checkVersion": false })];
            case 30:
                data = _m.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 31:
                _m.sent();
                if (data.success) {
                    console.log('任务完成');
                }
                else {
                    (0, TS_USER_AGENTS_1.o2s)(data, '任务失败');
                }
                _m.label = 32;
            case 32:
                _g++;
                return [3 /*break*/, 29];
            case 33: return [3 /*break*/, 36];
            case 34:
                e_2 = _m.sent();
                console.log('error', e_2);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 35:
                _m.sent();
                return [3 /*break*/, 36];
            case 36:
                _c++;
                return [3 /*break*/, 11];
            case 37:
                _j = 0, _k = cookiesArr.entries();
                _m.label = 38;
            case 38:
                if (!(_j < _k.length)) return [3 /*break*/, 53];
                _l = _k[_j], index = _l[0], value = _l[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, h5stTool.__genAlgo()];
            case 39:
                _m.sent();
                return [4 /*yield*/, api('happyDigHome', { "linkId": "pTTvJeSTrpthgk9ASBVGsw" })];
            case 40:
                res = _m.sent();
                blood = res.data.blood;
                i = 0;
                _m.label = 41;
            case 41:
                if (!(i < 4)) return [3 /*break*/, 52];
                _m.label = 42;
            case 42:
                _m.trys.push([42, 50, , 51]);
                if (blood <= 1) {
                    console.log('能量剩余1，跳过 A');
                    return [3 /*break*/, 52];
                }
                j = 0;
                _m.label = 43;
            case 43:
                if (!(j < 4)) return [3 /*break*/, 49];
                if (blood <= 1) {
                    console.log('能量剩余1，跳过 B');
                    return [3 /*break*/, 49];
                }
                return [4 /*yield*/, api('happyDigDo', { "round": 1, "rowIdx": i, "colIdx": j, "linkId": "pTTvJeSTrpthgk9ASBVGsw" })];
            case 44:
                res = _m.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                if (res.data.chunk.type === 1) {
                    console.log('挖到👎');
                }
                else if (res.data.chunk.type === 2) {
                    console.log('挖到🧧', parseFloat(res.data.chunk.value));
                }
                else if (res.data.chunk.type === 4) {
                    console.log('挖到💣');
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 45:
                _m.sent();
                return [4 /*yield*/, api('happyDigHome', { "linkId": "pTTvJeSTrpthgk9ASBVGsw" })];
            case 46:
                res = _m.sent();
                if (res.data.blood === 1) {
                    blood = 1;
                    console.log('能量剩余1，退出');
                    return [3 /*break*/, 49];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 47:
                _m.sent();
                _m.label = 48;
            case 48:
                j++;
                return [3 /*break*/, 43];
            case 49: return [3 /*break*/, 51];
            case 50:
                e_3 = _m.sent();
                console.log('error', res === null || res === void 0 ? void 0 : res.errMsg);
                return [3 /*break*/, 51];
            case 51:
                i++;
                return [3 /*break*/, 41];
            case 52:
                _j++;
                return [3 /*break*/, 38];
            case 53: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var timestamp, h5st;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    timestamp = Date.now();
                    h5st = h5stTool.__genH5st({
                        appid: 'activities_platform',
                        body: JSON.stringify(body),
                        client: 'H5',
                        clientVersion: '1.0.0',
                        functionId: fn,
                        t: timestamp.toString()
                    });
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://api.m.jd.com/?functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&t=").concat(timestamp, "&appid=activities_platform&client=H5&clientVersion=1.0.0&h5st=").concat(h5st), {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://bnzf.jd.com',
                            'User-Agent': "jdapp;iPhone;10.2.2;14.3;".concat((0, TS_USER_AGENTS_1.randomString)(40), ";M/5.0;network/wifi;ADID/;model/iPhone12,1;addressid/4199175193;appBuild/167863;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;"),
                            'Referer': 'https://bnzf.jd.com/',
                            'Cookie': cookie
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
