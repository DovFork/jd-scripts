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
var TEST = /** @class */ (function (_super) {
    __extends(TEST, _super);
    function TEST() {
        return _super.call(this) || this;
    }
    TEST.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(new TEST)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TEST.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('https://api.m.jd.com/', "functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&client=wh5&clientVersion=1.0.0&uuid="), {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://h5.m.jd.com',
                            'User-Agent': this.user.UserAgent,
                            'Referer': 'https://h5.m.jd.com/',
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Cookie': this.user.cookie
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TEST.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, _i, _a, t, _b, _c, tp, e_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.user = user;
                        return [4 /*yield*/, this.api('jdhealth_getTaskDetail', { "buildingId": "", "taskId": "", "channelId": 1 })];
                    case 1:
                        res = _d.sent();
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 17, , 18]);
                        _i = 0, _a = res.data.result.taskVos;
                        _d.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 16];
                        t = _a[_i];
                        if (!(t.status === 1 || t.status === 3)) return [3 /*break*/, 15];
                        console.log(t.taskName);
                        _b = 0, _c = t.productInfoVos || t.followShopVo || t.shoppingActivityVos || [];
                        _d.label = 4;
                    case 4:
                        if (!(_b < _c.length)) return [3 /*break*/, 15];
                        tp = _c[_b];
                        if (!(tp.status === 1)) return [3 /*break*/, 14];
                        console.log('\t', tp.skuName || tp.shopName || tp.title);
                        if (!(t.taskName.includes('早睡打卡') && t.taskBeginTime < Date.now() && t.taskEndTime > Date.now())) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.api('jdhealth_collectScore', { "taskToken": tp.taskToken, "taskId": t.taskId, "actionType": 1 })];
                    case 5:
                        res = _d.sent();
                        return [4 /*yield*/, this.wait(2000)];
                    case 6:
                        _d.sent();
                        console.log('\t', res.data.bizMsg);
                        _d.label = 7;
                    case 7:
                        if (!t.waitDuration) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.api('jdhealth_collectScore', { "taskToken": tp.taskToken, "taskId": t.taskId, "actionType": 1 })];
                    case 8:
                        res = _d.sent();
                        console.log('\t', res.data.bizMsg);
                        return [4 /*yield*/, this.wait(t.waitDuration * 1000)];
                    case 9:
                        _d.sent();
                        _d.label = 10;
                    case 10: return [4 /*yield*/, this.api('jdhealth_collectScore', { "taskToken": tp.taskToken, "taskId": t.taskId, "actionType": 0 })];
                    case 11:
                        res = _d.sent();
                        if (!res.data.bizMsg.includes('做完')) return [3 /*break*/, 12];
                        console.log(res.data.bizMsg);
                        return [3 /*break*/, 15];
                    case 12:
                        console.log(res.data.bizMsg, parseInt(res.data.result.score));
                        return [4 /*yield*/, this.wait(1500)];
                    case 13:
                        _d.sent();
                        _d.label = 14;
                    case 14:
                        _b++;
                        return [3 /*break*/, 4];
                    case 15:
                        _i++;
                        return [3 /*break*/, 3];
                    case 16: return [3 /*break*/, 18];
                    case 17:
                        e_1 = _d.sent();
                        console.log('Error', e_1);
                        return [3 /*break*/, 18];
                    case 18: return [2 /*return*/];
                }
            });
        });
    };
    return TEST;
}(TS_JDHelloWorld_1.JDHelloWorld));
new TEST().init().then();
