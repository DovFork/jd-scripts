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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var _2000jinli_log_1 = require("./test/2000jinli_log");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var Mofang = /** @class */ (function (_super) {
    __extends(Mofang, _super);
    function Mofang() {
        return _super.call(this) || this;
    }
    Mofang.prototype.init = function () {
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
    Mofang.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wait(1000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.post("https://api.m.jd.com/client.action", new URLSearchParams({
                                'functionId': fn,
                                'body': JSON.stringify(body),
                                'client': 'wh5',
                                'clientVersion': '1.0.0',
                                'appid': 'content_ecology'
                            }), {
                                'Host': 'api.m.jd.com',
                                'Origin': 'https://h5.m.jd.com',
                                'User-Agent': this.user.UserAgent,
                                'Referer': 'https://h5.m.jd.com/pb/010631430/2bf3XEEyWG11pQzPGkKpKX2GxJz2/index.html',
                                'Cookie': this.user.cookie
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mofang.prototype.api2 = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wait(1000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.post('https://api.m.jd.com/client.action?functionId=doInteractiveAssignment', body, {
                                'Host': 'api.m.jd.com',
                                'Cookie': this.user.cookie,
                                'content-type': 'application/x-www-form-urlencoded',
                                'user-agent': 'JD4iPhone'
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mofang.prototype.getLog = function () {
        var n = (0, TS_USER_AGENTS_1.getRandomNumberByRange)(0, _2000jinli_log_1.logs.length);
        this.log = _2000jinli_log_1.logs[n].match(/"log":"(.*)"/)[1];
        this.random = _2000jinli_log_1.logs[n].match(/"random":"(\d+)"/)[1];
    };
    Mofang.prototype.main = function (user) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var res, taskConfig_projectId, projectPoolId, giftConfig_projectId, _i, _b, t, signDay, type, _c, _d, proInfo, _e, _f, proInfo, i, exchangeRestScoreMap368, i, exchangeRestScoreMap367, arr;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        if (!user.cookie.includes('app_open')) {
                            return [2 /*return*/];
                        }
                        this.user = user;
                        return [4 /*yield*/, this.api('getInteractionHomeInfo', { "sign": "u6vtLQ7ztxgykLEr" })];
                    case 1:
                        res = _g.sent();
                        taskConfig_projectId = res.result.taskConfig.projectId;
                        projectPoolId = res.result.taskConfig.projectPoolId;
                        giftConfig_projectId = res.result.giftConfig.projectId;
                        return [4 /*yield*/, this.api('queryInteractiveInfo', { "encryptProjectId": taskConfig_projectId, "sourceCode": "acexinpin0823", "ext": {} })];
                    case 2:
                        res = _g.sent();
                        _i = 0, _b = res.assignmentList;
                        _g.label = 3;
                    case 3:
                        if (!(_i < _b.length)) return [3 /*break*/, 17];
                        t = _b[_i];
                        if (!(t.completionCnt < t.assignmentTimesLimit)) return [3 /*break*/, 16];
                        if (!(t.assignmentName === '每日签到')) return [3 /*break*/, 6];
                        if (!(t.ext.sign1.status === 1)) return [3 /*break*/, 5];
                        signDay = ((_a = t.ext.sign1.signList) === null || _a === void 0 ? void 0 : _a.length) || 0, type = t.rewards[signDay].rewardType;
                        console.log(signDay, type);
                        this.getLog();
                        return [4 /*yield*/, this.api('doInteractiveAssignment', { "encryptProjectId": taskConfig_projectId, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": "1", "actionType": "", "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": this.random }, "signStr": this.log, "sceneid": "XMFhPageh5" } })];
                    case 4:
                        res = _g.sent();
                        console.log('签到成功');
                        return [3 /*break*/, 6];
                    case 5:
                        console.log('已签到');
                        _g.label = 6;
                    case 6:
                        _c = 0, _d = t.ext.shoppingActivity || t.ext.browseShop || [];
                        _g.label = 7;
                    case 7:
                        if (!(_c < _d.length)) return [3 /*break*/, 12];
                        proInfo = _d[_c];
                        if (!(proInfo.status === 1)) return [3 /*break*/, 11];
                        console.log(t.assignmentName);
                        this.getLog();
                        return [4 /*yield*/, this.api('doInteractiveAssignment', { "encryptProjectId": taskConfig_projectId, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 1, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": this.random }, "signStr": this.log, "sceneid": "XMFhPageh5" } })];
                    case 8:
                        res = _g.sent();
                        console.log(res.msg);
                        return [4 /*yield*/, this.wait(t.ext.waitDuration * 1000 || 1000)];
                    case 9:
                        _g.sent();
                        this.getLog();
                        return [4 /*yield*/, this.api('doInteractiveAssignment', { "encryptProjectId": taskConfig_projectId, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 0, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": this.random }, "signStr": this.log, "sceneid": "XMFhPageh5" } })];
                    case 10:
                        res = _g.sent();
                        console.log(res.msg);
                        _g.label = 11;
                    case 11:
                        _c++;
                        return [3 /*break*/, 7];
                    case 12:
                        _e = 0, _f = t.ext.productsInfo || t.ext.addCart || [];
                        _g.label = 13;
                    case 13:
                        if (!(_e < _f.length)) return [3 /*break*/, 16];
                        proInfo = _f[_e];
                        if (!(proInfo.status === 1)) return [3 /*break*/, 15];
                        console.log(t.assignmentName);
                        this.getLog();
                        return [4 /*yield*/, this.api('doInteractiveAssignment', { "encryptProjectId": taskConfig_projectId, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 0, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": this.random }, "signStr": this.log, "sceneid": "XMFhPageh5" } })];
                    case 14:
                        res = _g.sent();
                        console.log(res.msg);
                        if (res.msg === '任务已完成') {
                            return [3 /*break*/, 16];
                        }
                        _g.label = 15;
                    case 15:
                        _e++;
                        return [3 /*break*/, 13];
                    case 16:
                        _i++;
                        return [3 /*break*/, 3];
                    case 17:
                        i = 0;
                        _g.label = 18;
                    case 18:
                        if (!(i < 4)) return [3 /*break*/, 22];
                        return [4 /*yield*/, this.getSign('doInteractiveAssignment', { "encryptProjectId": taskConfig_projectId, "completionFlag": true, "encryptAssignmentId": "44M5m7wZs5vDAMkaTmYXeppqTsZR", "sourceCode": "acexinpin0823" })];
                    case 19:
                        res = _g.sent();
                        return [4 /*yield*/, this.api2(res)];
                    case 20:
                        res = _g.sent();
                        this.o2s(res);
                        _g.label = 21;
                    case 21:
                        i++;
                        return [3 /*break*/, 18];
                    case 22: return [4 /*yield*/, this.api('queryInteractiveRewardInfo', { "encryptProjectId": giftConfig_projectId, "sourceCode": "acexinpin0823", "ext": { "needExchangeRestScore": "1" } })];
                    case 23:
                        res = _g.sent();
                        console.log('当前魔方', res.exchangeRestScoreMap["367"]);
                        return [4 /*yield*/, this.api('queryInteractiveRewardInfo', { "encryptProjectPoolId": projectPoolId, "sourceCode": "acexinpin0823", "ext": { "needPoolRewards": 1, "needExchangeRestScore": 1 } })];
                    case 24:
                        res = _g.sent();
                        console.log('碎片进度', res.exchangeRestScoreMap["368"]);
                        exchangeRestScoreMap368 = res.exchangeRestScoreMap["368"];
                        i = 1;
                        _g.label = 25;
                    case 25:
                        if (!(i < Math.floor(exchangeRestScoreMap368 / 6))) return [3 /*break*/, 28];
                        this.getLog();
                        return [4 /*yield*/, this.api('doInteractiveAssignment', { "encryptProjectId": giftConfig_projectId, "encryptAssignmentId": "wE62TwscdA52Z4WkpTJq7NaMvfw", "sourceCode": "acexinpin0823", "itemId": "", "actionType": "", "completionFlag": "", "ext": { "exchangeNum": 1 }, "extParam": { "businessData": { "random": this.random }, "signStr": this.log, "sceneid": "XMFhPageh5" } })];
                    case 26:
                        res = _g.sent();
                        console.log('合成魔方', res.rewardsInfo.successRewards['1'].quantity);
                        if (i === 20)
                            return [3 /*break*/, 28];
                        _g.label = 27;
                    case 27:
                        i++;
                        return [3 /*break*/, 25];
                    case 28: return [4 /*yield*/, this.api('queryInteractiveRewardInfo', { "encryptProjectId": giftConfig_projectId, "sourceCode": "acexinpin0823", "ext": { "needExchangeRestScore": "1" } })];
                    case 29:
                        res = _g.sent();
                        console.log('当前魔方', res.exchangeRestScoreMap["367"]);
                        exchangeRestScoreMap367 = res.exchangeRestScoreMap["367"], arr = [];
                        exchangeRestScoreMap367 >= 1 ? arr.push('2VUEMo9KjtktsQNvb2yHED2m2oCh') : '';
                        exchangeRestScoreMap367 >= 4 ? arr.push('khdCzL9YRdYjh3dWFXfZLteUTYu') : '';
                        exchangeRestScoreMap367 >= 24 ? arr.push('JkfeMeE5JGmkXiTeJZGzcAWv5cr') : '';
                        return [2 /*return*/];
                }
            });
        });
    };
    return Mofang;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Mofang().init().then();
