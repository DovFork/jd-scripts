"use strict";
/**
 * 极速版-发财大赢家
 *
 * 要先手动开红包
 *
 * 只有内部互助
 *
 * 其他功能下次
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
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var dotenv = require("dotenv");
var notify = require('./sendNotify');
dotenv.config();
var UserName, index, cookie = '', cookiesArr = [], res = '';
var shareCodes = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var i, _a, isLogin, nickName, i, _i, shareCodes_1, share;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, requireConfig()];
            case 1:
                _b.sent();
                i = 0;
                _b.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 7];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                return [4 /*yield*/, TS_USER_AGENTS_1.TotalBean(cookie)];
            case 3:
                _a = _b.sent(), isLogin = _a.isLogin, nickName = _a.nickName;
                if (!isLogin) {
                    notify.sendNotify(__filename.split('/').pop(), "cookie\u5DF2\u5931\u6548\n\u4EAC\u4E1C\u8D26\u53F7" + index + "\uFF1A" + (nickName || UserName));
                    return [3 /*break*/, 6];
                }
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + (nickName || UserName) + "\n");
                return [4 /*yield*/, makeShareCodes()];
            case 4:
                _b.sent();
                return [4 /*yield*/, wait(2000)];
            case 5:
                _b.sent();
                _b.label = 6;
            case 6:
                i++;
                return [3 /*break*/, 2];
            case 7:
                console.log(shareCodes);
                i = 0;
                _b.label = 8;
            case 8:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 14];
                cookie = cookiesArr[i];
                _i = 0, shareCodes_1 = shareCodes;
                _b.label = 9;
            case 9:
                if (!(_i < shareCodes_1.length)) return [3 /*break*/, 13];
                share = shareCodes_1[_i];
                return [4 /*yield*/, help(share.redEnvelopeId, share.markedPin)];
            case 10:
                _b.sent();
                return [4 /*yield*/, wait(2000)];
            case 11:
                _b.sent();
                _b.label = 12;
            case 12:
                _i++;
                return [3 /*break*/, 9];
            case 13:
                i++;
                return [3 /*break*/, 8];
            case 14: return [2 /*return*/];
        }
    });
}); })();
function makeShareCodes() {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var data, userInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://api.m.jd.com/?functionId=redEnvelopeInteractHome&body={%22linkId%22:%22yMVR-_QKRd2Mq27xguJG-w%22,%22redEnvelopeId%22:%22%22,%22inviter%22:%22%22,%22helpType%22:%22%22}&t=" + Date.now() + "&appid=activities_platform&clientVersion=3.5.8", {
                        headers: {
                            'host': 'api.m.jd.com',
                            'Origin': 'https://618redpacket.jd.com',
                            'Cookie': cookie,
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://618redpacket.jd.com/'
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    userInfo = {
                        redEnvelopeId: data.data.redEnvelopeId,
                        markedPin: data.data.markedPin
                    };
                    console.log(userInfo);
                    shareCodes.push(userInfo);
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
}
function help(redEnvelopeId, inviter) {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://api.m.jd.com/?functionId=redEnvelopeInteractHome&body={%22linkId%22:%22yMVR-_QKRd2Mq27xguJG-w%22,%22redEnvelopeId%22:%22" + redEnvelopeId + "%22,%22inviter%22:%22" + inviter + "%22,%22helpType%22:%221%22}&t=" + Date.now() + "&appid=activities_platform&clientVersion=3.5.8", {
                        headers: {
                            'host': 'api.m.jd.com',
                            'Origin': 'https://618redpacket.jd.com',
                            'Cookie': cookie,
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://618redpacket.jd.com/'
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
}
function requireConfig() {
    return new Promise(function (resolve) {
        console.log('开始获取配置文件\n');
        var jdCookieNode = require('./jdCookie.js');
        Object.keys(jdCookieNode).forEach(function (item) {
            if (jdCookieNode[item]) {
                cookiesArr.push(jdCookieNode[item]);
            }
        });
        console.log("\u5171" + cookiesArr.length + "\u4E2A\u4EAC\u4E1C\u8D26\u53F7\n");
        resolve();
    });
}
function wait(t) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, t);
    });
}
