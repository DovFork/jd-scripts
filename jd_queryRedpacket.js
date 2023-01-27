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
var Jd_queryRedpacket = /** @class */ (function (_super) {
    __extends(Jd_queryRedpacket, _super);
    function Jd_queryRedpacket() {
        return _super.call(this, "京东红包") || this;
    }
    Jd_queryRedpacket.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(new Jd_queryRedpacket())];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_queryRedpacket.prototype.add = function (arg1, arg2) {
        var r1, r2, m;
        try {
            r1 = arg1.toString().split('.')[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split('.')[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        return parseFloat(((arg1 * m + arg2 * m) / m).toFixed(2));
    };
    Jd_queryRedpacket.prototype.main = function (user) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var res, day, jdRed, jdRedExp, jsRed, jsRedExp, _i, _b, j, msg;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.get("https://m.jingxi.com/user/info/QueryUserRedEnvelopesV2?type=1&orgFlag=JD_PinGou_New&page=1&cashRedType=1&redBalanceFlag=1&channel=1&_=".concat(Date.now(), "&sceneval=2&g_login_type=1&g_ty=ls"), {
                            'Host': 'm.jingxi.com',
                            'Referer': 'https://st.jingxi.com/my/redpacket.shtml',
                            "Cookie": user.cookie,
                            'User-Agent': user.UserAgent
                        })];
                    case 1:
                        res = _c.sent();
                        day = new Date().getDay(), jdRed = 0, jdRedExp = 0, jsRed = 0, jsRedExp = 0;
                        for (_i = 0, _b = ((_a = res.data.useRedInfo) === null || _a === void 0 ? void 0 : _a.redList) || []; _i < _b.length; _i++) {
                            j = _b[_i];
                            console.log(j);
                            if (j.orgLimitStr.includes('京喜')) {
                            }
                            else if (j.activityName.includes('极速版')) {
                                jsRed = this.add(jsRed, j.balance);
                                if (new Date(j.endTime * 1000).getDay() === day)
                                    jsRedExp = this.add(jsRedExp, j.balance);
                            }
                            else if (j.orgLimitStr.includes('京东健康')) {
                            }
                            else {
                                jdRed = this.add(jdRed, j.balance);
                                if (new Date(j.endTime * 1000).getDay() === day)
                                    jdRedExp = this.add(jdRedExp, j.balance);
                            }
                        }
                        console.log('京东', jdRed, '  今日过期：', jdRedExp);
                        console.log('极速', jsRed, '  今日过期：', jsRedExp);
                        msg = "\u3010\u8D26\u53F7\u3011  ".concat(user.UserName, "\n\u4EAC\u4E1C\u7EA2\u5305  ").concat(jdRed, "\n\u4ECA\u65E5\u8FC7\u671F  ").concat(jdRedExp, "\n\n");
                        return [2 /*return*/, {
                                msg: msg
                            }];
                }
            });
        });
    };
    return Jd_queryRedpacket;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_queryRedpacket().init().then();
