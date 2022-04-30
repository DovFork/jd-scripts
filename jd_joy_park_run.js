"use strict";
/**
 * 汪汪乐园-跑步+组队
 * 默认翻倍到0.04红包结束
 * export JD_JOY_PARK_RUN_ASSETS="0.04"
 * cron: 20 * * * *
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
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var h5st_1 = require("./utils/h5st");
var fs_1 = require("fs");
var cookie = '', res = '', data, UserName;
var assets = 0.04, captainId = '', h5stTool = new h5st_1.H5ST('b6ac3', 'jdltapp;', '1804945295425750');
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, account, _i, _a, _b, index, value, _c, account_1, user, _d, _e, member, e_1, i, assets_1, e_2;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _f.sent();
                account = [];
                if ((0, fs_1.existsSync)('./utils/account.json')) {
                    try {
                        account = JSON.parse((0, fs_1.readFileSync)('./utils/account.json').toString());
                    }
                    catch (e) {
                        console.log('./utils/account.json 加载出错');
                    }
                }
                _i = 0, _a = cookiesArr.entries();
                _f.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 34];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                assets = parseFloat(process.env.JD_JOY_PARK_RUN_ASSETS || '0.04');
                for (_c = 0, account_1 = account; _c < account_1.length; _c++) {
                    user = account_1[_c];
                    if (user.pt_pin === encodeURIComponent(UserName) && user.joy_park_run) {
                        console.log('自定义终点', user.joy_park_run);
                        assets = parseFloat(user.joy_park_run.toString());
                        break;
                    }
                }
                _f.label = 3;
            case 3:
                _f.trys.push([3, 10, , 11]);
                return [4 /*yield*/, h5stTool.__genAlgo()];
            case 4:
                _f.sent();
                return [4 /*yield*/, team('runningTeamInfo', { "linkId": "L-sOanK_5RJCz7I314FpnQ" })];
            case 5:
                res = _f.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                if (!(!captainId && res.data.members.length === 0)) return [3 /*break*/, 6];
                console.log('组队ID不存在,开始创建组队');
                captainId = res.data.captainId;
                return [3 /*break*/, 9];
            case 6:
                if (!(captainId && res.data.members.length === 0)) return [3 /*break*/, 8];
                console.log('已有组队ID，未加入队伍');
                return [4 /*yield*/, team('runningJoinTeam', { "linkId": "L-sOanK_5RJCz7I314FpnQ", "captainId": captainId })];
            case 7:
                res = _f.sent();
                if (res.code === 0) {
                    console.log('组队成功');
                    for (_d = 0, _e = res.data.members; _d < _e.length; _d++) {
                        member = _e[_d];
                        if (member.captain) {
                            console.log('队长', member.nickName);
                            break;
                        }
                    }
                    if (res.data.members.length === 6) {
                        console.log('队伍已满');
                        captainId = '';
                    }
                }
                return [3 /*break*/, 9];
            case 8:
                console.log('已组队', res.data.members.length);
                _f.label = 9;
            case 9: return [3 /*break*/, 11];
            case 10:
                e_1 = _f.sent();
                console.log('组队 Error', e_1);
                return [3 /*break*/, 11];
            case 11:
                _f.trys.push([11, 32, , 33]);
                return [4 /*yield*/, runningPageHome()];
            case 12:
                res = _f.sent();
                console.log('🧧', res.data.runningHomeInfo.prizeValue);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 13:
                _f.sent();
                console.log('能量恢复中', secondsToMinutes(res.data.runningHomeInfo.nextRunningTime / 1000), '能量棒', res.data.runningHomeInfo.energy);
                if (!(res.data.runningHomeInfo.nextRunningTime && res.data.runningHomeInfo.nextRunningTime / 1000 < 300)) return [3 /*break*/, 17];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(res.data.runningHomeInfo.nextRunningTime)];
            case 14:
                _f.sent();
                return [4 /*yield*/, runningPageHome()];
            case 15:
                res = _f.sent();
                console.log('能量恢复中', secondsToMinutes(res.data.runningHomeInfo.nextRunningTime / 1000), '能量棒', res.data.runningHomeInfo.energy);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 16:
                _f.sent();
                _f.label = 17;
            case 17:
                if (!!res.data.runningHomeInfo.nextRunningTime) return [3 /*break*/, 29];
                console.log('终点目标', assets);
                i = 0;
                _f.label = 18;
            case 18:
                if (!(i < 10)) return [3 /*break*/, 29];
                return [4 /*yield*/, api('runningOpenBox', { "linkId": "L-sOanK_5RJCz7I314FpnQ" })];
            case 19:
                res = _f.sent();
                if (!(parseFloat(res.data.assets) >= assets)) return [3 /*break*/, 21];
                assets_1 = parseFloat(res.data.assets);
                return [4 /*yield*/, api('runningPreserveAssets', { "linkId": "L-sOanK_5RJCz7I314FpnQ" })];
            case 20:
                res = _f.sent();
                console.log('领取成功', assets_1);
                return [3 /*break*/, 29];
            case 21:
                if (!res.data.doubleSuccess) return [3 /*break*/, 23];
                console.log('翻倍成功', parseFloat(res.data.assets));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 22:
                _f.sent();
                return [3 /*break*/, 26];
            case 23:
                if (!(!res.data.doubleSuccess && !res.data.runningHomeInfo.runningFinish)) return [3 /*break*/, 25];
                console.log('开始跑步', parseFloat(res.data.assets));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 24:
                _f.sent();
                return [3 /*break*/, 26];
            case 25:
                console.log('翻倍失败');
                return [3 /*break*/, 29];
            case 26: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 27:
                _f.sent();
                _f.label = 28;
            case 28:
                i++;
                return [3 /*break*/, 18];
            case 29: return [4 /*yield*/, runningPageHome()];
            case 30:
                res = _f.sent();
                console.log('🧧', res.data.runningHomeInfo.prizeValue);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 31:
                _f.sent();
                return [3 /*break*/, 33];
            case 32:
                e_2 = _f.sent();
                console.log('跑步 Error', e_2);
                return [3 /*break*/, 33];
            case 33:
                _i++;
                return [3 /*break*/, 2];
            case 34: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var timestamp, h5st, params;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    timestamp = Date.now(), h5st = '';
                    if (fn === 'runningOpenBox') {
                        h5st = h5stTool.__genH5st({
                            appid: "activities_platform",
                            body: JSON.stringify(body),
                            client: "ios",
                            clientVersion: "3.1.0",
                            functionId: "runningOpenBox",
                            t: timestamp.toString()
                        });
                    }
                    params = "functionId=".concat(fn, "&body=").concat(JSON.stringify(body), "&t=").concat(timestamp, "&appid=activities_platform&client=ios&clientVersion=3.1.0&cthr=1");
                    h5st && (params += "&h5st=".concat(h5st));
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.post)('https://api.m.jd.com/', params, {
                            'authority': 'api.m.jd.com',
                            'content-type': 'application/x-www-form-urlencoded',
                            'cookie': cookie,
                            'origin': 'https://h5platform.jd.com',
                            'referer': 'https://h5platform.jd.com/',
                            'user-agent': 'jdltapp;'
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function runningPageHome() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, (0, TS_USER_AGENTS_1.get)("https://api.m.jd.com/?functionId=runningPageHome&body=%7B%22linkId%22:%22L-sOanK_5RJCz7I314FpnQ%22,%22isFromJoyPark%22:true,%22joyLinkId%22:%22LsQNxL7iWDlXUs6cFl-AAg%22%7D&t=".concat(Date.now(), "&appid=activities_platform&client=ios&clientVersion=3.1.0"), {
                    'Host': 'api.m.jd.com',
                    'Origin': 'https://h5platform.jd.com',
                    'User-Agent': 'jdltapp;',
                    'Referer': 'https://h5platform.jd.com/',
                    'Cookie': cookie
                })];
        });
    });
}
function team(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var timestamp, h5st;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    timestamp = Date.now();
                    h5st = '';
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://api.m.jd.com/?functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&t=").concat(timestamp, "&appid=activities_platform&client=ios&clientVersion=3.1.0&cthr=1&h5st=").concat(h5st), {
                            'Host': 'api.m.jd.com',
                            'User-Agent': 'jdltapp;',
                            'Origin': 'https://h5platform.jd.com',
                            'X-Requested-With': 'com.jd.jdlite',
                            'Referer': 'https://h5platform.jd.com/',
                            'Cookie': cookie
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
// 秒转时分秒
function secondsToMinutes(seconds) {
    var minutes = Math.floor(seconds / 60);
    var second = Math.floor(seconds % 60);
    return "".concat(minutes, "\u5206").concat(second, "\u79D2");
}
