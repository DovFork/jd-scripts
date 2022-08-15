"use strict";
/**
 * 汪汪乐园-跑步+组队
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
var h5st2_1 = require("./utils/h5st2");
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var Joy_Park_Run = /** @class */ (function (_super) {
    __extends(Joy_Park_Run, _super);
    function Joy_Park_Run() {
        var _this = _super.call(this) || this;
        _this.captainId = 'IReO3ad-dyrjil-pq4FZeg';
        return _this;
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
    Joy_Park_Run.prototype.team = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now();
                        h5st = this.teamTool.__genH5st({
                            appid: "activities_platform",
                            body: JSON.stringify(body),
                            client: "ios",
                            clientVersion: "3.9.2",
                            functionId: fn,
                            t: timestamp.toString()
                        });
                        return [4 /*yield*/, this.get("https://api.m.jd.com/?functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&t=").concat(timestamp, "&appid=activities_platform&client=ios&clientVersion=3.9.2&cthr=1&h5st=").concat(h5st), {
                                'Host': 'api.m.jd.com',
                                'User-Agent': 'jdltapp;iPhone;3.9.2;Mozilla/5.0 (iPhone; CPU iPhone OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;',
                                'Origin': 'https://h5platform.jd.com',
                                'X-Requested-With': 'com.jd.jdlite',
                                'Referer': 'https://h5platform.jd.com/',
                                'Cookie': this.user.cookie
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Joy_Park_Run.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, _i, _a, member, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.user = user;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, , 10]);
                        this.teamTool = new h5st2_1.H5ST('448de', 'jdltapp;iPhone;3.9.2;Mozilla/5.0 (iPhone; CPU iPhone OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;', process.env.FP_448DE || '');
                        return [4 /*yield*/, this.teamTool.__genAlgo()];
                    case 2:
                        _b.sent();
                        res = void 0;
                        return [4 /*yield*/, this.team('runningTeamInfo', { "linkId": "L-sOanK_5RJCz7I314FpnQ" })];
                    case 3:
                        res = _b.sent();
                        if (!!this.captainId) return [3 /*break*/, 4];
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
                        return [3 /*break*/, 7];
                    case 4:
                        if (!(this.captainId && res.data.members.length === 0)) return [3 /*break*/, 6];
                        console.log('已有组队ID，未加入队伍');
                        return [4 /*yield*/, this.team('runningJoinTeam', { "linkId": "L-sOanK_5RJCz7I314FpnQ", "captainId": this.captainId })];
                    case 5:
                        res = _b.sent();
                        if (res.code === 0) {
                            console.log('组队成功');
                            for (_i = 0, _a = res.data.members; _i < _a.length; _i++) {
                                member = _a[_i];
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
                        return [3 /*break*/, 7];
                    case 6:
                        console.log('已组队', res.data.members.length);
                        console.log('战队收益', res.data.teamSumPrize);
                        _b.label = 7;
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1 = _b.sent();
                        console.log('Error', e_1.message);
                        return [4 /*yield*/, this.wait(3000)];
                    case 9:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    return Joy_Park_Run;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Joy_Park_Run().init().then();
