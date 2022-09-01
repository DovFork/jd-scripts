"use strict";
/**
 * 汪汪乐园-跑步+组队+浏览
 * cron: 20 * * * *
 * export FP_448DE=""
 * export FP_B6AC3=""
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var h5st_pro_1 = require("./utils/h5st_pro");
var date_fns_1 = require("date-fns");
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var Joy_Park_Run = /** @class */ (function (_super) {
    __extends(Joy_Park_Run, _super);
    function Joy_Park_Run() {
        return _super.call(this) || this;
    }
    Joy_Park_Run.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(this)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 秒转分:秒
    Joy_Park_Run.prototype.secondsToMinutes = function (seconds) {
        var minutes = Math.floor(seconds / 60);
        var second = Math.floor(seconds % 60);
        return "".concat(minutes, "\u5206").concat(second, "\u79D2");
    };
    Joy_Park_Run.prototype.team = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now();
                        return [4 /*yield*/, this.teamTool.__genH5st({
                                appid: "activities_platform",
                                body: JSON.stringify(body),
                                client: "ios",
                                clientVersion: "3.9.2",
                                functionId: fn,
                                t: timestamp.toString()
                            })];
                    case 1:
                        h5st = _a.sent();
                        return [4 /*yield*/, this.get("https://api.m.jd.com/?functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&t=").concat(timestamp, "&appid=activities_platform&client=ios&clientVersion=3.9.2&cthr=1&h5st=").concat(h5st), {
                                'Host': 'api.m.jd.com',
                                'User-Agent': this.user.UserAgent,
                                'Origin': 'https://h5platform.jd.com',
                                'X-Requested-With': 'com.jd.jdlite',
                                'Referer': 'https://h5platform.jd.com/',
                                'Cookie': this.user.cookie
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Joy_Park_Run.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now(), h5st = '';
                        if (!(fn === 'runningOpenBox')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.apiTool.__genH5st({
                                appid: "activities_platform",
                                body: JSON.stringify(body),
                                client: "ios",
                                clientVersion: "3.9.2",
                                functionId: fn,
                                t: timestamp.toString()
                            })];
                    case 1:
                        h5st = _a.sent();
                        _a.label = 2;
                    case 2:
                        params = "functionId=".concat(fn, "&body=").concat(JSON.stringify(body), "&t=").concat(timestamp, "&appid=activities_platform&client=ios&clientVersion=3.9.2&cthr=1");
                        h5st && (params += "&h5st=".concat(h5st));
                        return [4 /*yield*/, this.post('https://api.m.jd.com/', params, {
                                'authority': 'api.m.jd.com',
                                'content-type': 'application/x-www-form-urlencoded',
                                'cookie': this.user.cookie,
                                'origin': 'https://h5platform.jd.com',
                                'referer': 'https://h5platform.jd.com/',
                                'User-Agent': this.user.UserAgent
                            })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Joy_Park_Run.prototype.runningPageHome = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get("https://api.m.jd.com/?functionId=runningPageHome&body=%7B%22linkId%22:%22L-sOanK_5RJCz7I314FpnQ%22,%22isFromJoyPark%22:true,%22joyLinkId%22:%22LsQNxL7iWDlXUs6cFl-AAg%22%7D&t=".concat(Date.now(), "&appid=activities_platform&client=ios&clientVersion=3.9.2"), {
                        'Host': 'api.m.jd.com',
                        'Origin': 'https://h5platform.jd.com',
                        'User-Agent': this.user.UserAgent,
                        'Referer': 'https://h5platform.jd.com/',
                        'Cookie': this.user.cookie
                    })];
            });
        });
    };
    Joy_Park_Run.prototype.startRunning = function (res, assets) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!res.data.runningHomeInfo.nextRunningTime) return [3 /*break*/, 11];
                        console.log('终点目标', assets);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 5)) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.api('runningOpenBox', { "linkId": "L-sOanK_5RJCz7I314FpnQ" })];
                    case 2:
                        res = _a.sent();
                        if (!(parseFloat(res.data.assets) >= assets)) return [3 /*break*/, 5];
                        assets = parseFloat(res.data.assets);
                        return [4 /*yield*/, this.api('runningFail', { "linkId": "L-sOanK_5RJCz7I314FpnQ" })];
                    case 3:
                        res = _a.sent();
                        this.o2s(res, 'runningFail');
                        return [4 /*yield*/, this.api('runningPreserveAssets', { "linkId": "L-sOanK_5RJCz7I314FpnQ" })];
                    case 4:
                        res = _a.sent();
                        console.log('领取成功', assets);
                        return [3 /*break*/, 11];
                    case 5:
                        if (!res.data.doubleSuccess) return [3 /*break*/, 7];
                        console.log('翻倍成功', parseFloat(res.data.assets));
                        return [4 /*yield*/, this.wait(10000)];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 7:
                        if (!(!res.data.doubleSuccess && !res.data.runningHomeInfo.runningFinish)) return [3 /*break*/, 9];
                        console.log('开始跑步', parseFloat(res.data.assets));
                        return [4 /*yield*/, this.wait(10000)];
                    case 8:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        console.log('翻倍失败');
                        return [3 /*break*/, 11];
                    case 10:
                        i++;
                        return [3 /*break*/, 1];
                    case 11: return [4 /*yield*/, this.wait(3000)];
                    case 12:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Joy_Park_Run.prototype.main = function (user) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var assets, rewardAmount, res, apTaskList, _i, _b, t, _c, _d, t, apTaskDetail, taskItemList, i, sum, success, _e, _f, t, _g, _h, member, energy, i, e_1;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        this.user = user;
                        this.user.UserAgent = "jdltapp;iPhone;3.9.2;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;");
                        assets = parseFloat(process.env.JD_JOY_PARK_RUN_ASSETS || '0.08');
                        rewardAmount = 0;
                        _j.label = 1;
                    case 1:
                        _j.trys.push([1, 51, , 53]);
                        this.teamTool = new h5st_pro_1.H5ST('448de', this.user.UserAgent, process.env.FP_448DE || "", 'https://h5platform.jd.com/swm-stable/people-run/index?activityId=L-sOanK_5RJCz7I314FpnQ', 'https://h5platform.jd.com');
                        return [4 /*yield*/, this.teamTool.__genAlgo()];
                    case 2:
                        _j.sent();
                        res = void 0, apTaskList = void 0;
                        return [4 /*yield*/, this.api('apTaskList', { "linkId": "LsQNxL7iWDlXUs6cFl-AAg" })];
                    case 3:
                        apTaskList = _j.sent();
                        _i = 0, _b = apTaskList.data;
                        _j.label = 4;
                    case 4:
                        if (!(_i < _b.length)) return [3 /*break*/, 9];
                        t = _b[_i];
                        if (!(t.taskType === 'BROWSE_CHANNEL' && !t.taskFinished)) return [3 /*break*/, 8];
                        console.log(t.taskTitle);
                        return [4 /*yield*/, this.api('apDoTask', { "taskType": t.taskType, "taskId": t.id, "itemId": encodeURIComponent(t.taskSourceUrl), "linkId": "LsQNxL7iWDlXUs6cFl-AAg" })];
                    case 5:
                        res = _j.sent();
                        res.success ? console.log('任务完成') : this.o2s(res, '任务失败');
                        return [4 /*yield*/, this.wait(1000)];
                    case 6:
                        _j.sent();
                        return [4 /*yield*/, this.api('apTaskDrawAward', { "taskType": t.taskType, "taskId": t.id, "linkId": "LsQNxL7iWDlXUs6cFl-AAg" })];
                    case 7:
                        res = _j.sent();
                        res.success ? console.log('领奖成功', res.data[0].awardGivenNumber) : this.o2s(res, '领奖失败');
                        _j.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 4];
                    case 9: return [4 /*yield*/, this.api('apTaskList', { "linkId": "L-sOanK_5RJCz7I314FpnQ" })];
                    case 10:
                        apTaskList = _j.sent();
                        _c = 0, _d = apTaskList.data;
                        _j.label = 11;
                    case 11:
                        if (!(_c < _d.length)) return [3 /*break*/, 21];
                        t = _d[_c];
                        if (!(t.taskShowTitle === '逛会场得生命值' && !t.taskFinished)) return [3 /*break*/, 20];
                        return [4 /*yield*/, this.api('apTaskDetail', { "linkId": "L-sOanK_5RJCz7I314FpnQ", "taskType": "BROWSE_CHANNEL", "taskId": t.id, "channel": 4 })];
                    case 12:
                        apTaskDetail = _j.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 13:
                        _j.sent();
                        taskItemList = apTaskDetail.data.taskItemList;
                        i = apTaskDetail.data.status.userFinishedTimes;
                        _j.label = 14;
                    case 14:
                        if (!(i < apTaskDetail.data.status.finishNeed)) return [3 /*break*/, 20];
                        console.log(taskItemList[i].itemName);
                        return [4 /*yield*/, this.api('apTaskTimeRecord', { "linkId": "L-sOanK_5RJCz7I314FpnQ", "taskId": 817 })];
                    case 15:
                        res = _j.sent();
                        return [4 /*yield*/, this.wait(31000)];
                    case 16:
                        _j.sent();
                        return [4 /*yield*/, this.api('apDoTask', { "linkId": "L-sOanK_5RJCz7I314FpnQ", "taskType": "BROWSE_CHANNEL", "taskId": t.id, "channel": 4, "itemId": encodeURIComponent(taskItemList[i].itemId), "checkVersion": true })];
                    case 17:
                        res = _j.sent();
                        if (res.success) {
                            console.log('任务完成');
                        }
                        else {
                            this.o2s(res, '任务失败');
                        }
                        return [4 /*yield*/, this.wait(3000)];
                    case 18:
                        _j.sent();
                        _j.label = 19;
                    case 19:
                        i++;
                        return [3 /*break*/, 14];
                    case 20:
                        _c++;
                        return [3 /*break*/, 11];
                    case 21: return [4 /*yield*/, this.wait(2000)];
                    case 22:
                        _j.sent();
                        return [4 /*yield*/, this.team('runningMyPrize', { "linkId": "L-sOanK_5RJCz7I314FpnQ", "pageSize": 20, "time": null, "ids": null })
                            // res = await this.team('runningMyPrize', {"linkId": "L-sOanK_5RJCz7I314FpnQ", "pageSize": 10, "time": 1660943842000, "ids": [1263040]})
                            // this.o2s(res)
                        ];
                    case 23:
                        res = _j.sent();
                        sum = 0, success = 0;
                        rewardAmount = res.data.rewardAmount;
                        if (!(res.data.runningCashStatus.currentEndTime && res.data.runningCashStatus.status === 0)) return [3 /*break*/, 27];
                        console.log('可提现', rewardAmount);
                        return [4 /*yield*/, this.api('runningPrizeDraw', { "linkId": "L-sOanK_5RJCz7I314FpnQ", "type": 2 })];
                    case 24:
                        res = _j.sent();
                        return [4 /*yield*/, this.wait(2000)];
                    case 25:
                        _j.sent();
                        console.log(res.data.message);
                        return [4 /*yield*/, this.team('runningMyPrize', { "linkId": "L-sOanK_5RJCz7I314FpnQ", "pageSize": 20, "time": null, "ids": null })];
                    case 26:
                        res = _j.sent();
                        _j.label = 27;
                    case 27:
                        for (_e = 0, _f = ((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.detailVos) || []; _e < _f.length; _e++) {
                            t = _f[_e];
                            if (t.amount > 0 && (0, date_fns_1.getDate)(new Date(t.createTime)) === new Date().getDate()) {
                                sum += t.amount;
                                success++;
                            }
                            else {
                                break;
                            }
                        }
                        console.log('成功', success);
                        sum = parseFloat(sum.toFixed(2));
                        console.log('收益', sum);
                        return [4 /*yield*/, this.team('runningTeamInfo', { "linkId": "L-sOanK_5RJCz7I314FpnQ" })];
                    case 28:
                        res = _j.sent();
                        if (!!this.captainId) return [3 /*break*/, 29];
                        if (res.data.members.length === 0) {
                            console.log('成为队长');
                            this.captainId = res.data.captainId;
                        }
                        else if (res.data.members.length !== 6) {
                            console.log('队伍未满', res.data.members.length);
                            this.captainId = res.data.captainId;
                        }
                        else {
                            console.log('队伍已满');
                        }
                        return [3 /*break*/, 32];
                    case 29:
                        if (!(this.captainId && res.data.members.length === 0)) return [3 /*break*/, 31];
                        console.log('已有组队ID，未加入队伍');
                        return [4 /*yield*/, this.team('runningJoinTeam', { "linkId": "L-sOanK_5RJCz7I314FpnQ", "captainId": this.captainId })];
                    case 30:
                        res = _j.sent();
                        if (res.code === 0) {
                            console.log('组队成功');
                            for (_g = 0, _h = res.data.members; _g < _h.length; _g++) {
                                member = _h[_g];
                                if (member.captain) {
                                    console.log('队长', member.nickName);
                                    break;
                                }
                            }
                            if (res.data.members.length === 6) {
                                console.log('队伍已满');
                                this.captainId = '';
                            }
                        }
                        else {
                            this.o2s(res, '组队失败');
                        }
                        return [3 /*break*/, 32];
                    case 31:
                        console.log('已组队', res.data.members.length);
                        console.log('战队收益', res.data.teamSumPrize);
                        _j.label = 32;
                    case 32:
                        this.apiTool = new h5st_pro_1.H5ST('b6ac3', this.user.UserAgent, process.env.FP_B6AC3 || "", 'https://h5platform.jd.com/swm-stable/people-run/index?activityId=L-sOanK_5RJCz7I314FpnQ', 'https://h5platform.jd.com');
                        return [4 /*yield*/, this.apiTool.__genAlgo()];
                    case 33:
                        _j.sent();
                        return [4 /*yield*/, this.runningPageHome()];
                    case 34:
                        res = _j.sent();
                        console.log('🧧', res.data.runningHomeInfo.prizeValue);
                        console.log('💊', res.data.runningHomeInfo.energy);
                        energy = res.data.runningHomeInfo.energy;
                        return [4 /*yield*/, this.wait(2000)];
                    case 35:
                        _j.sent();
                        console.log('⏳', this.secondsToMinutes(res.data.runningHomeInfo.nextRunningTime / 1000));
                        if (!(res.data.runningHomeInfo.nextRunningTime && res.data.runningHomeInfo.nextRunningTime / 1000 < 300)) return [3 /*break*/, 39];
                        console.log('⏳');
                        return [4 /*yield*/, this.wait(res.data.runningHomeInfo.nextRunningTime + 3000)];
                    case 36:
                        _j.sent();
                        return [4 /*yield*/, this.runningPageHome()];
                    case 37:
                        res = _j.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 38:
                        _j.sent();
                        _j.label = 39;
                    case 39: return [4 /*yield*/, this.startRunning(res, assets)];
                    case 40:
                        _j.sent();
                        return [4 /*yield*/, this.runningPageHome()];
                    case 41:
                        res = _j.sent();
                        i = 0;
                        _j.label = 42;
                    case 42:
                        if (!(i < energy)) return [3 /*break*/, 48];
                        if (res.data.runningHomeInfo.nextRunningTime / 1000 < 3000 || new Date().getHours() > 15)
                            return [3 /*break*/, 48];
                        console.log('💉');
                        return [4 /*yield*/, this.api('runningUseEnergyBar', { "linkId": "L-sOanK_5RJCz7I314FpnQ" })];
                    case 43:
                        res = _j.sent();
                        console.log(res.errMsg);
                        return [4 /*yield*/, this.runningPageHome()];
                    case 44:
                        res = _j.sent();
                        return [4 /*yield*/, this.startRunning(res, assets)];
                    case 45:
                        _j.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 46:
                        _j.sent();
                        _j.label = 47;
                    case 47:
                        i++;
                        return [3 /*break*/, 42];
                    case 48: return [4 /*yield*/, this.runningPageHome()];
                    case 49:
                        res = _j.sent();
                        console.log('🧧', res.data.runningHomeInfo.prizeValue);
                        return [4 /*yield*/, this.wait(2000)];
                    case 50:
                        _j.sent();
                        return [3 /*break*/, 53];
                    case 51:
                        e_1 = _j.sent();
                        console.log('Error', e_1.message);
                        return [4 /*yield*/, this.wait(3000)];
                    case 52:
                        _j.sent();
                        return [3 /*break*/, 53];
                    case 53: return [2 /*return*/];
                }
            });
        });
    };
    return Joy_Park_Run;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Joy_Park_Run().init().then();
