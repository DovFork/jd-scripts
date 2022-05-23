"use strict";
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
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var log_618_1 = require("./utils/log_618");
var Jd_618 = /** @class */ (function (_super) {
    __extends(Jd_618, _super);
    function Jd_618() {
        var _this = _super.call(this) || this;
        _this.logTool = new log_618_1.Log_618();
        return _this;
    }
    Jd_618.prototype.init = function () {
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
    Jd_618.prototype.getLog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.logTool.main()];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, this.wait(4000)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Jd_618.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.post("https://api.m.jd.com/client.action?functionId=".concat(fn), "functionId=".concat(fn, "&client=m&clientVersion=-1&appid=signed_wh5&body=").concat(JSON.stringify(body)), {
                        'Host': 'api.m.jd.com',
                        'Origin': 'https://wbbny.m.jd.com',
                        'Accept': 'application/json, text/plain, */*',
                        'User-Agent': this.user.UserAgent,
                        'Referer': 'https://wbbny.m.jd.com/',
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Cookie': this.user.cookie
                    })];
            });
        });
    };
    Jd_618.prototype.qryViewkitCallbackResult = function (taskToken) {
        return __awaiter(this, void 0, void 0, function () {
            var body, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = { "dataSource": "newshortAward", "method": "getTaskAward", "reqParams": "{\"taskToken\":\"".concat(taskToken, "\"}") };
                        return [4 /*yield*/, this.logTool.qry('qryViewkitCallbackResult', body)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, this.post('https://api.m.jd.com/client.action?functionId=qryViewkitCallbackResult', data, {
                                'Host': 'api.m.jd.com',
                                'Cookie': this.user.cookie,
                                'content-type': 'application/x-www-form-urlencoded',
                                'User-Agent': this.user.UserAgent
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_618.prototype.feed = function (taskId, secretp) {
        return __awaiter(this, void 0, void 0, function () {
            var res, times, maxTimes, _i, _a, tp, log, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.api('promote_getFeedDetail', { "taskId": taskId })];
                    case 1:
                        res = _b.sent();
                        times = res.data.result.addProductVos[0].times, maxTimes = res.data.result.addProductVos[0].maxTimes;
                        _i = 0, _a = res.data.result.addProductVos[0].productInfoVos;
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 7];
                        tp = _a[_i];
                        if (times === maxTimes)
                            return [3 /*break*/, 7];
                        return [4 /*yield*/, this.getLog()];
                    case 3:
                        log = _b.sent();
                        return [4 /*yield*/, this.api('promote_collectScore', {
                                "taskId": taskId,
                                "taskToken": tp.taskToken,
                                "ss": JSON.stringify({
                                    extraData: {
                                        log: encodeURIComponent(log.log),
                                        sceneid: 'RAhomePageh5'
                                    },
                                    secretp: secretp,
                                    random: log.random
                                })
                            })];
                    case 4:
                        data = _b.sent();
                        this.o2s(data);
                        times++;
                        return [4 /*yield*/, this.wait(1000)];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 2];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Jd_618.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, log, secretp, loop, _i, _a, t, _b, _c, t, _d, _e, tp, _f, _g, tp, e_1;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        this.user = user;
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 1:
                        res = _h.sent();
                        secretp = res.data.result.homeMainInfo.secretp;
                        console.log('当前金币', parseInt(res.data.result.homeMainInfo.raiseInfo.totalScore));
                        return [4 /*yield*/, this.getLog()];
                    case 2:
                        log = _h.sent();
                        return [4 /*yield*/, this.api('promote_collectAutoScore', {
                                ss: JSON.stringify({
                                    extraData: {
                                        log: encodeURIComponent(log.log),
                                        sceneid: 'RAhomePageh5'
                                    },
                                    secretp: secretp,
                                    random: log.random
                                })
                            })];
                    case 3:
                        res = _h.sent();
                        console.log('收金币', parseInt(res.data.result.produceScore));
                        return [4 /*yield*/, this.wait(1000)];
                    case 4:
                        _h.sent();
                        loop = 0;
                        _h.label = 5;
                    case 5:
                        if (!(loop < 3)) return [3 /*break*/, 39];
                        _h.label = 6;
                    case 6:
                        _h.trys.push([6, 35, , 36]);
                        console.log('loop', loop);
                        return [4 /*yield*/, this.api('promote_getTaskDetail', {})];
                    case 7:
                        res = _h.sent();
                        this.o2s(res);
                        _i = 0, _a = res.data.result.lotteryTaskVos[0].badgeAwardVos;
                        _h.label = 8;
                    case 8:
                        if (!(_i < _a.length)) return [3 /*break*/, 12];
                        t = _a[_i];
                        if (!(t.status === 3)) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.api('promote_getBadgeAward', { "awardToken": t.awardToken })];
                    case 9:
                        data = _h.sent();
                        console.log(t.awardName, parseInt(data.data.result.myAwardVos[0].pointVo.score));
                        return [4 /*yield*/, this.wait(2000)];
                    case 10:
                        _h.sent();
                        _h.label = 11;
                    case 11:
                        _i++;
                        return [3 /*break*/, 8];
                    case 12:
                        _b = 0, _c = res.data.result.taskVos;
                        _h.label = 13;
                    case 13:
                        if (!(_b < _c.length)) return [3 /*break*/, 34];
                        t = _c[_b];
                        if (!t.browseShopVo) return [3 /*break*/, 21];
                        _d = 0, _e = t.browseShopVo;
                        _h.label = 14;
                    case 14:
                        if (!(_d < _e.length)) return [3 /*break*/, 21];
                        tp = _e[_d];
                        if (!(tp.status === 1)) return [3 /*break*/, 20];
                        console.log(tp.shopName);
                        return [4 /*yield*/, this.getLog()];
                    case 15:
                        log = _h.sent();
                        return [4 /*yield*/, this.api('followShop', { "shopId": tp.shopId, "follow": true, "type": "0" })];
                    case 16:
                        data = _h.sent();
                        console.log('followShop', data.msg);
                        return [4 /*yield*/, this.api('promote_collectScore', {
                                "taskId": t.taskId.toString(),
                                "taskToken": tp.taskToken,
                                "actionType": 1,
                                "ss": JSON.stringify({
                                    extraData: {
                                        log: encodeURIComponent(log.log),
                                        sceneid: 'RAhomePageh5'
                                    },
                                    secretp: secretp,
                                    random: log.random
                                })
                            })
                            // this.o2s(data, 'promote_collectScore')
                        ];
                    case 17:
                        data = _h.sent();
                        // this.o2s(data, 'promote_collectScore')
                        console.log(data.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000 || 1000)];
                    case 18:
                        _h.sent();
                        return [4 /*yield*/, this.qryViewkitCallbackResult(tp.taskToken)
                            // this.o2s(data, 'qryViewkitCallbackResult')
                        ];
                    case 19:
                        data = _h.sent();
                        // this.o2s(data, 'qryViewkitCallbackResult')
                        console.log(data.toast.subTitle);
                        _h.label = 20;
                    case 20:
                        _d++;
                        return [3 /*break*/, 14];
                    case 21:
                        if (!t.shoppingActivityVos) return [3 /*break*/, 30];
                        _f = 0, _g = t.shoppingActivityVos;
                        _h.label = 22;
                    case 22:
                        if (!(_f < _g.length)) return [3 /*break*/, 30];
                        tp = _g[_f];
                        if (!(tp.status === 1)) return [3 /*break*/, 27];
                        return [4 /*yield*/, this.getLog()];
                    case 23:
                        log = _h.sent();
                        console.log(tp.title);
                        return [4 /*yield*/, this.api('promote_collectScore', {
                                "taskId": t.taskId, "taskToken": tp.taskToken, "actionType": 1, "ss": JSON.stringify({
                                    extraData: {
                                        log: encodeURIComponent(log.log),
                                        sceneid: 'RAhomePageh5'
                                    },
                                    secretp: secretp,
                                    random: log.random
                                })
                            })];
                    case 24:
                        data = _h.sent();
                        console.log(data.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000)];
                    case 25:
                        _h.sent();
                        return [4 /*yield*/, this.qryViewkitCallbackResult(tp.taskToken)];
                    case 26:
                        data = _h.sent();
                        console.log(data.toast.subTitle);
                        _h.label = 27;
                    case 27: return [4 /*yield*/, this.wait(2000)];
                    case 28:
                        _h.sent();
                        _h.label = 29;
                    case 29:
                        _f++;
                        return [3 /*break*/, 22];
                    case 30:
                        if (!t.taskName.includes('加购')) return [3 /*break*/, 33];
                        console.log(t.taskName);
                        return [4 /*yield*/, this.api('promote_getTaskDetail', { taskId: t.taskId })];
                    case 31:
                        data = _h.sent();
                        return [4 /*yield*/, this.feed(t.taskId, secretp)];
                    case 32:
                        _h.sent();
                        _h.label = 33;
                    case 33:
                        _b++;
                        return [3 /*break*/, 13];
                    case 34: return [3 /*break*/, 36];
                    case 35:
                        e_1 = _h.sent();
                        console.log('Error', e_1);
                        return [3 /*break*/, 39];
                    case 36: return [4 /*yield*/, this.wait(5000)];
                    case 37:
                        _h.sent();
                        _h.label = 38;
                    case 38:
                        loop++;
                        return [3 /*break*/, 5];
                    case 39: return [2 /*return*/];
                }
            });
        });
    };
    Jd_618.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var shareCodeHW, _i, users_1, user, res, log, secretp, memberCount, groupJoinInviteId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shareCodeHW = [];
                        _i = 0, users_1 = users;
                        _a.label = 1;
                    case 1:
                        if (!(_i < users_1.length)) return [3 /*break*/, 13];
                        user = users_1[_i];
                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(user.index + 1, "\u3011").concat(user.UserName, "\n"));
                        this.user = user;
                        res = void 0, log = void 0;
                        return [4 /*yield*/, this.api('promote_getHomeData', {})];
                    case 2:
                        res = _a.sent();
                        secretp = res.data.result.homeMainInfo.secretp;
                        return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 3:
                        res = _a.sent();
                        memberCount = res.data.result.groupInfo.memberList.length;
                        console.log('当前队伍有', memberCount, '人');
                        groupJoinInviteId = "";
                        if (memberCount < 20) {
                            groupJoinInviteId = res.data.result.groupInfo.groupJoinInviteId;
                            console.log('队伍未满', groupJoinInviteId);
                        }
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getshareCodeHW('lyb_group')];
                    case 4:
                        shareCodeHW = _a.sent();
                        _a.label = 5;
                    case 5:
                        // let shareCode: string[] = []
                        if (user.index === users.length - 1) {
                            groupJoinInviteId = shareCodeHW[0];
                        }
                        if (!(memberCount === 1)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.getLog()];
                    case 6:
                        log = _a.sent();
                        return [4 /*yield*/, this.api('promote_pk_joinGroup', {
                                "inviteId": groupJoinInviteId,
                                "ss": JSON.stringify({
                                    extraData: {
                                        log: encodeURIComponent(log.log),
                                        sceneid: 'RAhomePageh5'
                                    },
                                    secretp: secretp,
                                    random: log.random
                                }),
                                "confirmFlag": 1
                            })];
                    case 7:
                        res = _a.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 8:
                        _a.sent();
                        if (res.data.bizCode === 0) {
                            console.log('加入队伍成功');
                        }
                        else {
                            console.log(res.data.bizMsg);
                        }
                        return [4 /*yield*/, this.api('promote_pk_getHomeData', {})];
                    case 9:
                        res = _a.sent();
                        this.o2s(res, 'promote_pk_getHomeData');
                        _a.label = 10;
                    case 10: return [4 /*yield*/, this.wait(3000)];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12:
                        _i++;
                        return [3 /*break*/, 1];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_618;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_618().init().then();
