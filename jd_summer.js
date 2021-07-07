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
exports.__esModule = true;
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
// @ts-ignore
var a_1 = require("./a");
var $ = {};
var cookie = '', cookiesArr = [], res = '', shareCodes = [];
var joyId = [], workJoyInfoList = [];
var joyId1, userLevel, Joys = [];
var joys;
var level = 5, runtimes = 0;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var i, tasks, allTask, ss, i_1, ss_1, _i, _a, t, _b, _c, tp, ss_2, _d, _e, t, _f, _g, tp, ss_3;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0: return [4 /*yield*/, requireConfig()];
            case 1:
                _h.sent();
                i = 0;
                _h.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 36];
                cookie = cookiesArr[i];
                $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                $.index = i + 1;
                $.isLogin = true;
                $.nickName = '';
                return [4 /*yield*/, TotalBean()];
            case 3:
                _h.sent();
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + $.index + "\u3011" + ($.nickName || $.UserName) + "\n");
                tasks = void 0;
                return [4 /*yield*/, api('olympicgames_getTaskDetail', { "taskId": "", "appSign": "1" })];
            case 4:
                allTask = _h.sent();
                console.log(allTask.data.result.taskVos[1].taskName);
                return [4 /*yield*/, a_1.getBody('doTaskDetail', 9, 9, cookie)];
            case 5:
                ss = _h.sent();
                ss = {
                    taskId: 9,
                    taskToken: allTask.data.result.taskVos[1].browseShopVo[0].taskToken,
                    ss: ss,
                    actionType: 1
                };
                console.log(ss);
                return [4 /*yield*/, api('olympicgames_doTaskDetail', ss)];
            case 6:
                res = _h.sent();
                console.log(res);
                console.log('等待中...');
                return [4 /*yield*/, wait(6500)];
            case 7:
                _h.sent();
                return [4 /*yield*/, api('olympicgames_getTaskDetail', { "taskId": 9, "appSign": "1" })];
            case 8:
                res = _h.sent();
                console.log(JSON.stringify(res.data.result.taskVos));
                i_1 = 1;
                _h.label = 9;
            case 9:
                if (!(i_1 < 3)) return [3 /*break*/, 14];
                return [4 /*yield*/, a_1.getBody('collectCurrency', '', '', cookie)];
            case 10:
                ss_1 = _h.sent();
                return [4 /*yield*/, api('olympicgames_collectCurrency', {
                        type: i_1,
                        ss: ss_1
                    })];
            case 11:
                res = _h.sent();
                console.log(res);
                return [4 /*yield*/, wait(1000)];
            case 12:
                _h.sent();
                _h.label = 13;
            case 13:
                i_1++;
                return [3 /*break*/, 9];
            case 14: return [4 /*yield*/, api('olympicgames_getTaskDetail', { "taskId": 17, "appSign": "1" })];
            case 15:
                tasks = _h.sent();
                _i = 0, _a = tasks.data.result.taskVos;
                _h.label = 16;
            case 16:
                if (!(_i < _a.length)) return [3 /*break*/, 24];
                t = _a[_i];
                if (!t.productInfoVos) return [3 /*break*/, 23];
                console.log(t.waitDuration);
                _b = 0, _c = t.productInfoVos;
                _h.label = 17;
            case 17:
                if (!(_b < _c.length)) return [3 /*break*/, 23];
                tp = _c[_b];
                if (!(tp.status === 1)) return [3 /*break*/, 22];
                console.log(tp.title, tp.taskToken, t.taskId);
                return [4 /*yield*/, a_1.getBody('doTaskDetail', 9, 9, cookie)];
            case 18:
                ss_2 = _h.sent();
                return [4 /*yield*/, api('olympicgames_doTaskDetail', {
                        taskId: 17,
                        taskToken: tp.taskToken,
                        ss: ss_2
                    })];
            case 19:
                res = _h.sent();
                console.log(res);
                if (res.data.bizMsg === '这个任务做完啦~！')
                    return [3 /*break*/, 23];
                console.log('等待中...');
                return [4 /*yield*/, wait(t.waitDuration * 1100)];
            case 20:
                _h.sent();
                return [4 /*yield*/, api('olympicgames_getTaskDetail', { "taskId": '9', "appSign": "1" })];
            case 21:
                _h.sent();
                _h.label = 22;
            case 22:
                _b++;
                return [3 /*break*/, 17];
            case 23:
                _i++;
                return [3 /*break*/, 16];
            case 24: return [4 /*yield*/, api('olympicgames_getTaskDetail', { "taskId": 7, "appSign": "1" })];
            case 25:
                tasks = _h.sent();
                _d = 0, _e = tasks.data.result.taskVos;
                _h.label = 26;
            case 26:
                if (!(_d < _e.length)) return [3 /*break*/, 34];
                t = _e[_d];
                if (!t.shoppingActivityVos) return [3 /*break*/, 33];
                console.log(t.waitDuration);
                _f = 0, _g = t.shoppingActivityVos;
                _h.label = 27;
            case 27:
                if (!(_f < _g.length)) return [3 /*break*/, 33];
                tp = _g[_f];
                if (!(tp.status === 1)) return [3 /*break*/, 32];
                console.log(tp.shopName, tp.taskToken, t.taskId);
                return [4 /*yield*/, a_1.getBody('doTaskDetail', 9, 9, cookie)];
            case 28:
                ss_3 = _h.sent();
                ss_3 = {
                    taskId: 7,
                    taskToken: tp.taskToken,
                    ss: ss_3
                };
                console.log(ss_3);
                return [4 /*yield*/, api('olympicgames_doTaskDetail', ss_3)];
            case 29:
                res = _h.sent();
                console.log(res);
                console.log('等待中...');
                return [4 /*yield*/, wait(t.waitDuration * 1100)];
            case 30:
                _h.sent();
                return [4 /*yield*/, api('olympicgames_getTaskDetail', { "taskId": '9', "appSign": "1" })];
            case 31:
                _h.sent();
                _h.label = 32;
            case 32:
                _f++;
                return [3 /*break*/, 27];
            case 33:
                _d++;
                return [3 /*break*/, 26];
            case 34: 
            /*
                tasks = await api('olympicgames_getTaskDetail', {"taskId": 5, "appSign": "1"})
                for (let t of tasks.data.result.taskVos) {
                  if (t.shoppingActivityVos) {
                    console.log(t.waitDuration)
                    for (let tp of t.shoppingActivityVos) {
                      if (tp.status === 1) {
                        console.log(tp.title, tp.taskToken, t.taskId)
                        let ss = await getBody('doTaskDetail', 9, 9, cookie)
                        ss = {
                          taskId: 5,
                          taskToken: tp.taskToken,
                          ss: ss
                        }
                        console.log(ss)
                        res = await api('olympicgames_doTaskDetail', ss)
                        console.log(res)
                        console.log('等待中...')
                        await wait(t.waitDuration * 1100)
                        await api('olympicgames_getTaskDetail', {"taskId": '9', "appSign": "1"})
                      }
                    }
                  }
                }
            */
            return [3 /*break*/, 36];
            case 35:
                i++;
                return [3 /*break*/, 2];
            case 36: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action?advId=" + fn, "functionId=" + fn + "&body=" + JSON.stringify(body) + "&client=wh5&clientVersion=1.0.0&appid=o2_act", {
                        headers: {
                            'Referer': 'https://wbbny.m.jd.com/babelDiy/Zeus/2rtpffK8wqNyPBH6wyUDuBKoAbCt/index.html',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Origin': 'https://wbbny.m.jd.com',
                            'Accept': 'application/json',
                            'Host': 'api.m.jd.com',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    resolve(data);
                    return [2 /*return*/];
            }
        });
    }); });
}
function makeShareCodes() {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api('joyBaseInfo', { "taskId": "167", "inviteType": "", "inviterPin": "", "linkId": "LsQNxL7iWDlXUs6cFl-AAg" })];
                case 1:
                    res = _a.sent();
                    console.log('用户等级:', res.data.level, '助力码:', res.data.invitePin);
                    shareCodes.push(res.data.invitePin);
                    userLevel = res.data.level;
                    return [4 /*yield*/, wait(1000)];
                case 2:
                    _a.sent();
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
}
function wait(t) {
    var _this = this;
    return new Promise(function (resolve) {
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                resolve();
                return [2 /*return*/];
            });
        }); }, t === 0 ? 1000 : t);
    });
}
function requireConfig() {
    return new Promise(function (resolve) {
        console.log('\n====================Hello World====================\n');
        console.log('开始获取配置文件\n');
        var jdCookieNode = require('./jdCookie.js');
        Object.keys(jdCookieNode).forEach(function (item) {
            if (jdCookieNode[item]) {
                cookiesArr.push(jdCookieNode[item]);
            }
        });
        console.log("\u5171" + cookiesArr.length + "\u4E2A\u4EAC\u4E1C\u8D26\u53F7\n");
        resolve(0);
    });
}
function TotalBean() {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            axios_1["default"].get('https://me-api.jd.com/user_new/info/GetJDUserInfoUnion', {
                headers: {
                    Host: "me-api.jd.com",
                    Connection: "keep-alive",
                    Cookie: cookie,
                    "User-Agent": TS_USER_AGENTS_1["default"],
                    "Accept-Language": "zh-cn",
                    "Referer": "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
                    "Accept-Encoding": "gzip, deflate, br"
                }
            }).then(function (res) {
                if (res.data) {
                    var data = res.data;
                    if (data['retcode'] === "1001") {
                        $.isLogin = false; //cookie过期
                        return;
                    }
                    if (data['retcode'] === "0" && data['data'] && data.data.hasOwnProperty("userInfo")) {
                        $.nickName = data.data.userInfo.baseInfo.nickname;
                    }
                }
                else {
                    console.log('京东服务器返回空数据');
                }
            })["catch"](function (e) {
                console.log('Error:', e);
            });
            resolve();
            return [2 /*return*/];
        });
    }); });
}
