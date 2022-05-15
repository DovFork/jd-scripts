"use strict";
/**
 * 京东-新品-魔方
 * cron: 10 9,12,15 * * *
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
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var log_1 = require("./log");
var Mofang = /** @class */ (function (_super) {
    __extends(Mofang, _super);
    function Mofang() {
        return _super.call(this) || this;
    }
    Mofang.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(new Mofang())];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Mofang.prototype.api = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wait(1000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.post("https://api.m.jd.com/client.action", params, {
                                'Content-Type': 'application/x-www-form-urlencoded',
                                "User-Agent": "MQQBrowser/26 Mozilla/5.0 (Linux; U; Android 2.3.7; zh-cn; MB200 Build/GRJ22; CyanogenMod-7) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1",
                                'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/2bf3XEEyWG11pQzPGkKpKX2GxJz2/index.html',
                                'Origin': 'https://h5.m.jd.com',
                                'Host': 'api.m.jd.com',
                                'Cookie': this.user.cookie
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mofang.prototype.getLog = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mfTool.main()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Mofang.prototype.main = function (user) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function () {
            var log, res, sign, rewardSign, _i, _f, t, signDay, type, _g, _h, proInfo, _j, _k, proInfo, _l, _m, proInfo, _o, _p, proInfo, score;
            return __generator(this, function (_q) {
                switch (_q.label) {
                    case 0:
                        this.user = user;
                        this.mfTool = new log_1.Log('50091', 'doInteractiveAssignment', 'XMFhPageh5');
                        return [4 /*yield*/, this.mfTool.init()];
                    case 1:
                        _q.sent();
                        log = '';
                        return [4 /*yield*/, this.api("functionId=getInteractionHomeInfo&body=%7B%22sign%22%3A%22u6vtLQ7ztxgykLEr%22%7D&appid=content_ecology&client=wh5&clientVersion=1.0.0")];
                    case 2:
                        res = _q.sent();
                        sign = res.result.taskConfig.projectId, rewardSign = res.result.giftConfig.projectId;
                        return [4 /*yield*/, this.api("functionId=queryInteractiveInfo&body=%7B%22encryptProjectId%22%3A%22".concat(sign, "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
                    case 3:
                        res = _q.sent();
                        _i = 0, _f = res.assignmentList;
                        _q.label = 4;
                    case 4:
                        if (!(_i < _f.length)) return [3 /*break*/, 35];
                        t = _f[_i];
                        if (!(t.completionCnt < t.assignmentTimesLimit)) return [3 /*break*/, 34];
                        if (!t.ext) return [3 /*break*/, 34];
                        if (!(t.assignmentName === '每日签到')) return [3 /*break*/, 8];
                        if (!(t.ext.sign1.status === 1)) return [3 /*break*/, 7];
                        signDay = ((_a = t.ext.sign1.signList) === null || _a === void 0 ? void 0 : _a.length) || 0, type = t.rewards[signDay].rewardType;
                        console.log(signDay, type);
                        return [4 /*yield*/, this.getLog()];
                    case 5:
                        log = _q.sent();
                        return [4 /*yield*/, this.api("functionId=doInteractiveAssignment&body=".concat(JSON.stringify({
                                "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": "1", "actionType": "", "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" }
                            }), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
                    case 6:
                        res = _q.sent();
                        console.log('签到成功');
                        return [3 /*break*/, 8];
                    case 7:
                        console.log('已签到');
                        _q.label = 8;
                    case 8:
                        _g = 0, _h = (_b = t.ext.productsInfo) !== null && _b !== void 0 ? _b : [];
                        _q.label = 9;
                    case 9:
                        if (!(_g < _h.length)) return [3 /*break*/, 13];
                        proInfo = _h[_g];
                        if (!(proInfo.status === 1)) return [3 /*break*/, 12];
                        console.log(t.assignmentName);
                        return [4 /*yield*/, this.getLog()];
                    case 10:
                        log = _q.sent();
                        return [4 /*yield*/, this.api("functionId=doInteractiveAssignment&body=".concat(encodeURIComponent(JSON.stringify({ "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 0, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" } })), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
                    case 11:
                        res = _q.sent();
                        console.log(res.msg);
                        if (res.msg === '任务已完成') {
                            return [3 /*break*/, 13];
                        }
                        _q.label = 12;
                    case 12:
                        _g++;
                        return [3 /*break*/, 9];
                    case 13:
                        _j = 0, _k = (_c = t.ext.shoppingActivity) !== null && _c !== void 0 ? _c : [];
                        _q.label = 14;
                    case 14:
                        if (!(_j < _k.length)) return [3 /*break*/, 21];
                        proInfo = _k[_j];
                        if (!(proInfo.status === 1)) return [3 /*break*/, 20];
                        console.log(t.assignmentName);
                        return [4 /*yield*/, this.getLog()];
                    case 15:
                        log = _q.sent();
                        return [4 /*yield*/, this.api("functionId=doInteractiveAssignment&body=".concat(encodeURIComponent(JSON.stringify({ "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 1, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" } })), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
                    case 16:
                        res = _q.sent();
                        console.log(res.msg);
                        return [4 /*yield*/, this.wait(t.ext.waitDuration * 1000)];
                    case 17:
                        _q.sent();
                        return [4 /*yield*/, this.getLog()];
                    case 18:
                        log = _q.sent();
                        return [4 /*yield*/, this.api("functionId=doInteractiveAssignment&body=".concat(encodeURIComponent(JSON.stringify({ "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 0, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" } })), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
                    case 19:
                        res = _q.sent();
                        console.log(res.msg);
                        _q.label = 20;
                    case 20:
                        _j++;
                        return [3 /*break*/, 14];
                    case 21:
                        _l = 0, _m = (_d = t.ext.browseShop) !== null && _d !== void 0 ? _d : [];
                        _q.label = 22;
                    case 22:
                        if (!(_l < _m.length)) return [3 /*break*/, 29];
                        proInfo = _m[_l];
                        if (!(proInfo.status === 1)) return [3 /*break*/, 28];
                        console.log(t.assignmentName);
                        return [4 /*yield*/, this.getLog()];
                    case 23:
                        log = _q.sent();
                        return [4 /*yield*/, this.api("functionId=doInteractiveAssignment&body=".concat(JSON.stringify({
                                "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 1, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" }
                            }), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
                    case 24:
                        res = _q.sent();
                        console.log(res.msg);
                        return [4 /*yield*/, this.wait(t.ext.waitDuration * 1000)];
                    case 25:
                        _q.sent();
                        return [4 /*yield*/, this.getLog()];
                    case 26:
                        log = _q.sent();
                        return [4 /*yield*/, this.api("functionId=doInteractiveAssignment&body=".concat(JSON.stringify({
                                "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 0, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFhPageh5" }
                            }), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
                    case 27:
                        res = _q.sent();
                        console.log(res.msg);
                        _q.label = 28;
                    case 28:
                        _l++;
                        return [3 /*break*/, 22];
                    case 29:
                        _o = 0, _p = (_e = t.ext.addCart) !== null && _e !== void 0 ? _e : [];
                        _q.label = 30;
                    case 30:
                        if (!(_o < _p.length)) return [3 /*break*/, 34];
                        proInfo = _p[_o];
                        if (!(proInfo.status === 1)) return [3 /*break*/, 33];
                        console.log(t.assignmentName);
                        return [4 /*yield*/, this.getLog()];
                    case 31:
                        log = _q.sent();
                        return [4 /*yield*/, this.api("functionId=doInteractiveAssignment&body=".concat(encodeURIComponent(JSON.stringify({ "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": "0", "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFJGh5" } })), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
                    case 32:
                        res = _q.sent();
                        console.log(res.msg);
                        if (res.msg === '任务已完成') {
                            return [3 /*break*/, 34];
                        }
                        _q.label = 33;
                    case 33:
                        _o++;
                        return [3 /*break*/, 30];
                    case 34:
                        _i++;
                        return [3 /*break*/, 4];
                    case 35: return [4 /*yield*/, this.api("functionId=queryInteractiveRewardInfo&body=".concat(encodeURIComponent(JSON.stringify({ "encryptProjectId": rewardSign, "sourceCode": "acexinpin0823", "ext": { "needExchangeRestScore": "1" } })), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
                    case 36:
                        res = _q.sent();
                        score = res.exchangeRestScoreMap["367"];
                        console.log('当前碎片', score);
                        if (!(score >= 3)) return [3 /*break*/, 39];
                        return [4 /*yield*/, this.getLog()];
                    case 37:
                        log = _q.sent();
                        return [4 /*yield*/, this.api("functionId=doInteractiveAssignment&body=".concat(JSON.stringify({ "encryptProjectId": rewardSign, "encryptAssignmentId": "khdCzL9YRdYjh3dWFXfZLteUTYu", "sourceCode": "acexinpin0823", "itemId": "", "actionType": "", "completionFlag": "", "ext": { "exchangeNum": 1 }, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFDHh5" } }), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
                    case 38:
                        res = _q.sent();
                        if (res.subCode === '0') {
                            console.log('兑换成功', res.rewardsInfo.successRewards['3'][0].rewardName);
                            score -= 3;
                        }
                        else {
                            console.log('兑换失败', res.msg);
                        }
                        _q.label = 39;
                    case 39:
                        if (!(score >= 1)) return [3 /*break*/, 42];
                        return [4 /*yield*/, this.getLog()];
                    case 40:
                        log = _q.sent();
                        return [4 /*yield*/, this.api("functionId=doInteractiveAssignment&body=".concat(JSON.stringify({ "encryptProjectId": rewardSign, "encryptAssignmentId": "2VUEMo9KjtktsQNvb2yHED2m2oCh", "sourceCode": "acexinpin0823", "itemId": "", "actionType": "", "completionFlag": "", "ext": { "exchangeNum": 1 }, "extParam": { "businessData": { "random": log.match(/"random":"(\d+)"/)[1] }, "signStr": log.match(/"log":"(.*)"/)[1], "sceneid": "XMFDHh5" } }), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
                    case 41:
                        res = _q.sent();
                        if (res.subCode === '0') {
                            console.log('兑换成功', res.rewardsInfo.successRewards['3'][0].rewardName);
                            score -= 1;
                        }
                        else {
                            console.log('兑换失败', res.msg);
                        }
                        _q.label = 42;
                    case 42:
                        console.log('当前碎片', score);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Mofang;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Mofang().init().then();
