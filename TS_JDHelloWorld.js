"use strict";
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
exports.JDHelloWorld = void 0;
var axios_1 = require("axios");
var sendNotify_1 = require("./sendNotify");
var child_process_1 = require("child_process");
var path = require("path");
var dotenv = require("dotenv");
var fs_1 = require("fs");
var JDHelloWorld = /** @class */ (function () {
    function JDHelloWorld(scriptName) {
        if (scriptName === void 0) { scriptName = '...'; }
        this.cookiesArr = [];
        this.users = [];
        this.scriptName = scriptName;
        dotenv.config({ path: "".concat(__dirname, "/.env") });
    }
    JDHelloWorld.prototype.getCookie = function (check) {
        if (check === void 0) { check = false; }
        return __awaiter(this, void 0, void 0, function () {
            var pwd, temp, jdCookieNode, keys, i, i, username;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pwd = __dirname;
                        temp = [];
                        jdCookieNode = require('./jdCookie.js');
                        keys = Object.keys(jdCookieNode);
                        for (i = 0; i < keys.length; i++) {
                            temp.push(jdCookieNode[keys[i]]);
                        }
                        if (!(!check && Date.now() / 1000 < 1652892701)) return [3 /*break*/, 1];
                        if (pwd.includes('/ql/') && pwd.includes('JDHelloWorld_jd_scripts')) {
                            this.cookiesArr = temp;
                        }
                        else {
                            try {
                                if ((0, child_process_1.execSync)("cd ".concat(__dirname, "; git remote -v")).toString().includes('JDHelloWorld/jd_scripts')) {
                                    this.cookiesArr = temp;
                                }
                            }
                            catch (e) {
                            }
                        }
                        return [3 /*break*/, 7];
                    case 1:
                        if (!(check && Date.now() / 1000 < 1652892701)) return [3 /*break*/, 7];
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < temp.length)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.checkCookie(temp[i])];
                    case 3:
                        if (!_a.sent()) return [3 /*break*/, 4];
                        this.cookiesArr.push(temp[i]);
                        return [3 /*break*/, 6];
                    case 4:
                        username = decodeURIComponent(jdCookieNode[keys[i]].match(/pt_pin=([^;]*)/)[1]);
                        console.log('Cookie失效', username);
                        return [4 /*yield*/, (0, sendNotify_1.sendNotify)('Cookie失效', '【京东账号】' + username)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        i++;
                        return [3 /*break*/, 2];
                    case 7:
                        console.log("\u5171".concat(this.cookiesArr.length, "\u4E2A\u4EAC\u4E1C\u8D26\u53F7"));
                        return [2 /*return*/];
                }
            });
        });
    };
    JDHelloWorld.prototype.checkCookie = function (cookie) {
        return __awaiter(this, void 0, void 0, function () {
            var data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"].get("https://api.m.jd.com/client.action?functionId=GetJDUserInfoUnion&appid=jd-cphdeveloper-m&body=".concat(encodeURIComponent(JSON.stringify({ "orgFlag": "JD_PinGou_New", "callSource": "mainorder", "channel": 4, "isHomewhite": 0, "sceneval": 2 })), "&loginType=2&_=").concat(Date.now(), "&sceneval=2&g_login_type=1&callback=GetJDUserInfoUnion&g_ty=ls"), {
                                headers: {
                                    'authority': 'api.m.jd.com',
                                    'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
                                    'referer': 'https://home.m.jd.com/',
                                    'cookie': cookie
                                }
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        data = JSON.parse(data.match(/GetJDUserInfoUnion\((.*)\)/)[1]);
                        return [2 /*return*/, data.retcode === '0'];
                    case 2:
                        e_1 = _a.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    JDHelloWorld.prototype.exceptCookie = function (filename) {
        if (filename === void 0) { filename = 'x.ts'; }
        var except = [];
        if ((0, fs_1.existsSync)('./utils/exceptCookie.json')) {
            try {
                except = JSON.parse((0, fs_1.readFileSync)('./utils/exceptCookie.json').toString() || '{}')[filename] || [];
            }
            catch (e) {
                console.log('./utils/exceptCookie.json JSON格式错误');
            }
        }
        return except;
    };
    JDHelloWorld.prototype.get = function (url, headers) {
        return new Promise(function (resolve, reject) {
            axios_1["default"].get(url, { headers: headers })
                .then(function (res) {
                resolve(res.data);
            })["catch"](function (err) {
                reject(err);
            });
        });
    };
    JDHelloWorld.prototype.post = function (url, data, headers) {
        return new Promise(function (resolve, reject) {
            axios_1["default"].post(url, data, { headers: headers })
                .then(function (res) {
                resolve(res.data);
            })["catch"](function (err) {
                reject(err);
            });
        });
    };
    JDHelloWorld.prototype.wait = function (ms) {
        if (ms === void 0) { ms = 1000; }
        return new Promise(function (resolve) {
            setTimeout(resolve, ms);
        });
    };
    JDHelloWorld.prototype.o2s = function (obj, title) {
        console.log(title ? (title + JSON.stringify(obj)) : JSON.stringify(obj));
    };
    JDHelloWorld.prototype.getShareCodePool = function (key, num) {
        return __awaiter(this, void 0, void 0, function () {
            var shareCode, i, data, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shareCode = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 3)) return [3 /*break*/, 7];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 6]);
                        return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/".concat(key, "/").concat(num))];
                    case 3:
                        data = (_a.sent()).data;
                        shareCode = data.data || [];
                        console.log("\u968F\u673A\u83B7\u53D6".concat(num, "\u4E2A").concat(key, "\u6210\u529F\uFF1A").concat(JSON.stringify(shareCode)));
                        if (shareCode.length !== 0) {
                            return [3 /*break*/, 7];
                        }
                        return [3 /*break*/, 6];
                    case 4:
                        e_2 = _a.sent();
                        console.log("getShareCodePool Error, Retry...");
                        return [4 /*yield*/, this.wait(this.getRandomNumberByRange(2000, 6000))];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 6:
                        i++;
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/, shareCode];
                }
            });
        });
    };
    JDHelloWorld.prototype.getshareCodeHW = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var shareCodeHW, i, data, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shareCodeHW = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 5)) return [3 /*break*/, 7];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 6]);
                        return [4 /*yield*/, this.get('https://api.jdsharecode.xyz/api/HW_CODES')];
                    case 3:
                        data = _a.sent();
                        shareCodeHW = data[key] || [];
                        if (shareCodeHW.length !== 0) {
                            return [3 /*break*/, 7];
                        }
                        return [3 /*break*/, 6];
                    case 4:
                        e_3 = _a.sent();
                        console.log("getshareCodeHW Error, Retry...", e_3);
                        return [4 /*yield*/, this.wait(this.getRandomNumberByRange(2000, 6000))];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 6:
                        i++;
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/, shareCodeHW];
                }
            });
        });
    };
    JDHelloWorld.prototype.getRandomNumberByRange = function (start, end) {
        end <= start && (end = start + 100);
        return Math.floor(Math.random() * (end - start) + start);
    };
    JDHelloWorld.prototype.getRandomString = function (e, word) {
        e = e || 32;
        var t = word === 26 ? "012345678abcdefghijklmnopqrstuvwxyz" : "0123456789abcdef", a = t.length, n = "";
        for (var i = 0; i < e; i++)
            n += t.charAt(Math.floor(Math.random() * a));
        return n;
    };
    JDHelloWorld.prototype.getRandomNumString = function (e) {
        e = e || 32;
        var t = '0123456789', a = t.length, n = "";
        for (var i = 0; i < e; i++)
            n += t.charAt(Math.floor(Math.random() * a));
        return n;
    };
    JDHelloWorld.prototype.run = function (son, help, tips) {
        return __awaiter(this, void 0, void 0, function () {
            var Beijing, dir, max, len1, len2, s1, s2, message, USER_AGENTS_ARR, except, _a, _b, _c, index, cookie, UserName, UserAgent, user, sonRet, e_4, e_5_1, _d;
            var e_5, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        Beijing = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
                        dir = __dirname, max = dir.length + 20;
                        len1 = (max - 12) / 2, len2 = (max - 18) / 2;
                        s1 = '='.repeat(len1), s2 = '='.repeat(len2);
                        console.log("".concat(s1, " JDHelloWorld ").concat(dir.length % 2 === 0 ? s1 : s1 + '=', "\n").concat(s2, " ").concat(Beijing, " ").concat(dir.length % 2 !== 0 ? s2 + '=' : s2, "\n========== ").concat(__dirname, " ==========\n"));
                        tips && son.tips();
                        message = '';
                        USER_AGENTS_ARR = [
                            "jdapp;iPhone;10.0.2;13.6;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
                            "jdapp;iPhone;10.0.2;13.6;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
                            "jdapp;iPhone;10.0.2;13.5;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
                            "jdapp;iPhone;10.0.2;14.1;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
                            "jdapp;iPhone;10.0.2;13.3;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
                            "jdapp;iPhone;10.0.2;13.7;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
                            "jdapp;iPhone;10.0.2;14.1;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
                            "jdapp;iPhone;10.0.2;13.3;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
                            "jdapp;iPhone;10.0.2;13.4;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 13_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
                            "jdapp;iPhone;10.0.2;14.3;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
                        ];
                        except = __spreadArray([], __read(this.exceptCookie(path.basename(require.main.filename))), false);
                        except.length > 0 && this.o2s(except, 'except username:');
                        return [4 /*yield*/, this.getCookie()];
                    case 1:
                        _f.sent();
                        _f.label = 2;
                    case 2:
                        _f.trys.push([2, 13, 14, 15]);
                        _a = __values(this.cookiesArr.entries()), _b = _a.next();
                        _f.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 12];
                        _c = __read(_b.value, 2), index = _c[0], cookie = _c[1];
                        _f.label = 4;
                    case 4:
                        _f.trys.push([4, 6, , 7]);
                        UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                        UserAgent = USER_AGENTS_ARR[Math.random() * USER_AGENTS_ARR.length | 0];
                        console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                        if (except.includes(encodeURIComponent(UserName))) {
                            console.log('已设置跳过');
                            return [3 /*break*/, 11];
                        }
                        user = { index: index, UserName: UserName, cookie: cookie, UserAgent: UserAgent };
                        this.users.push(user);
                        return [4 /*yield*/, son.main(user)];
                    case 5:
                        sonRet = _f.sent();
                        if (sonRet === null || sonRet === void 0 ? void 0 : sonRet.msg) {
                            message += sonRet.msg + '\n';
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        e_4 = _f.sent();
                        console.log(e_4);
                        return [3 /*break*/, 7];
                    case 7:
                        if (!(index === this.cookiesArr.length - 1 && message)) return [3 /*break*/, 9];
                        return [4 /*yield*/, (0, sendNotify_1.sendNotify)(this.scriptName, message)];
                    case 8:
                        _f.sent();
                        _f.label = 9;
                    case 9: return [4 /*yield*/, this.wait(3000)];
                    case 10:
                        _f.sent();
                        _f.label = 11;
                    case 11:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 12: return [3 /*break*/, 15];
                    case 13:
                        e_5_1 = _f.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 15];
                    case 14:
                        try {
                            if (_b && !_b.done && (_e = _a["return"])) _e.call(_a);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 15:
                        _d = son.help;
                        if (!_d) return [3 /*break*/, 17];
                        return [4 /*yield*/, son.help(this.users)];
                    case 16:
                        _d = (_f.sent());
                        _f.label = 17;
                    case 17:
                        _d;
                        return [2 /*return*/];
                }
            });
        });
    };
    return JDHelloWorld;
}());
exports.JDHelloWorld = JDHelloWorld;
