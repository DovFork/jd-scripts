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
var dotenv = require("dotenv");
var notify = require('./sendNotify');
dotenv.config();
var token, token2, actorUuid, shopId, pin, uuid;
var milk;
var cookie = '', res = '', UserName, index;
function main() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var cookiesArr, i, _c, isLogin, nickName, j, taskArr, _i, taskArr_1, t, e_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, TS_USER_AGENTS_1.requireConfig()];
                case 1:
                    cookiesArr = _d.sent();
                    i = 0;
                    _d.label = 2;
                case 2:
                    if (!(i < cookiesArr.length)) return [3 /*break*/, 29];
                    _d.label = 3;
                case 3:
                    _d.trys.push([3, 26, , 27]);
                    cookie = cookiesArr[i];
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    index = i + 1;
                    return [4 /*yield*/, TS_USER_AGENTS_1.TotalBean(cookie)];
                case 4:
                    _c = _d.sent(), isLogin = _c.isLogin, nickName = _c.nickName;
                    if (!isLogin) {
                        notify.sendNotify(__filename.split('/').pop(), "cookie\u5DF2\u5931\u6548\n\u4EAC\u4E1C\u8D26\u53F7" + index + "\uFF1A" + (nickName || UserName));
                        return [3 /*break*/, 28];
                    }
                    console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + (nickName || UserName) + "\n");
                    return [4 /*yield*/, getIsvToken()];
                case 5:
                    _d.sent();
                    return [4 /*yield*/, getIsvToken2()];
                case 6:
                    _d.sent();
                    return [4 /*yield*/, init()];
                case 7:
                    _d.sent();
                    return [4 /*yield*/, api('https://lzdz-isv.isvjcloud.com/dz/common/getSimpleActInfoVo', 'activityId=dz2103100001340201')];
                case 8:
                    res = _d.sent();
                    shopId = res.data.venderId;
                    return [4 /*yield*/, api('https://lzdz-isv.isvjcloud.com/customer/getMyPing', "userId=" + shopId + "&token=" + token2 + "&fromType=APP")];
                case 9:
                    res = _d.sent();
                    pin = res.data.secretPin;
                    return [4 /*yield*/, api('https://lzdz-isv.isvjcloud.com/wxActionCommon/getUserInfo', "pin=" + encodeURIComponent(pin))];
                case 10:
                    res = _d.sent();
                    if ((_a = res.data) === null || _a === void 0 ? void 0 : _a.hasOwnProperty('id')) {
                        uuid = res.data.id;
                    }
                    else {
                        return [3 /*break*/, 28];
                    }
                    return [4 /*yield*/, api('https://lzdz-isv.isvjcloud.com/common/accessLogWithAD', "venderId=1000013402&code=99&pin=" + encodeURIComponent(pin) + "&activityId=dz2103100001340201&pageUrl=https%3A%2F%2Flzdz-isv.isvjcloud.com%2Fdingzhi%2Fyili%2Fyangniu%2Factivity%2F4827909%3FactivityId%3Ddz2103100001340201%26shareUuid%3Db44243656a694b6f94bb30a4a5f2a45d%26adsource%3Dziying%26shareuserid4minipg%3D5Iufa9rY657S3OP3PLSpK07oeVP9kq2pYSH90mYt4m3fwcJlClpxrfmVYaGKuquQkdK3rLBQpEQH9V4tdrrh0w%3D%3D%26shopid%3D1000013402%26lng%3D114.062604%26lat%3D29.541501%26sid%3D6e9bfee3838075a72533536815d8f3ew%26un_area%3D4_48201_54794_0&subType=app&adSource=ziying")];
                case 11:
                    res = _d.sent();
                    return [4 /*yield*/, api('https://lzdz-isv.isvjcloud.com/dingzhi/yili/yangniu/activityContent', "activityId=dz2103100001340201&pin=" + encodeURIComponent(pin) + "&pinImg=null&nick=" + cookie.match(/pt_pin=([^;]*)/)[1] + "&cjyxPin=&cjhyPin=&shareUuid=")];
                case 12:
                    res = _d.sent();
                    actorUuid = res.data.actorUuid;
                    console.log('互助码：', actorUuid);
                    milk = res.data.score2 / 10;
                    j = 0;
                    _d.label = 13;
                case 13:
                    if (!(j < milk)) return [3 /*break*/, 17];
                    return [4 /*yield*/, api('feedCow', "activityId=dz2103100001340201&actorUuid=" + actorUuid + "&pin=" + encodeURIComponent(pin))];
                case 14:
                    res = _d.sent();
                    if (res.result) {
                        console.log('喂奶成功，剩余：', res.data.score2);
                    }
                    else {
                        console.log('喂奶失败：', res);
                        return [3 /*break*/, 17];
                    }
                    return [4 /*yield*/, TS_USER_AGENTS_1.wait(2000)];
                case 15:
                    _d.sent();
                    _d.label = 16;
                case 16:
                    j++;
                    return [3 /*break*/, 13];
                case 17:
                    if (!1) return [3 /*break*/, 20];
                    return [4 /*yield*/, api('start', "activityId=dz2103100001340201&actorUuid=" + actorUuid + "&pin=" + encodeURIComponent(pin))];
                case 18:
                    res = _d.sent();
                    if (res.result) {
                        console.log('抽奖成功：', res.data.name);
                    }
                    else if (res.errorMessage === '继续努力，多多喂养牛牛哦~') {
                        console.log('抽奖失败，没有抽奖机会');
                        return [3 /*break*/, 20];
                    }
                    else {
                        console.log('抽奖失败：', res);
                        return [3 /*break*/, 20];
                    }
                    return [4 /*yield*/, TS_USER_AGENTS_1.wait(3000)];
                case 19:
                    _d.sent();
                    return [3 /*break*/, 17];
                case 20:
                    taskArr = [
                        { taskType: 0 },
                        { taskType: 1 },
                        { taskType: 12 },
                        { taskType: 13, taskValue: 'ziying' },
                        { taskType: 13, taskValue: 'pop' },
                        { taskType: 21 },
                    ];
                    _i = 0, taskArr_1 = taskArr;
                    _d.label = 21;
                case 21:
                    if (!(_i < taskArr_1.length)) return [3 /*break*/, 25];
                    t = taskArr_1[_i];
                    return [4 /*yield*/, api('saveTask', "activityId=dz2103100001340201&actorUuid=" + actorUuid + "&pin=" + encodeURIComponent(pin) + "&taskType=" + t.taskType + "&taskValue=" + ((_b = t.taskValue) !== null && _b !== void 0 ? _b : ''))];
                case 22:
                    res = _d.sent();
                    if (res.result)
                        console.log('任务完成：', res.data.milkCount);
                    else {
                        console.log('任务失败：', res);
                        return [3 /*break*/, 25];
                    }
                    return [4 /*yield*/, TS_USER_AGENTS_1.wait(2000)];
                case 23:
                    _d.sent();
                    _d.label = 24;
                case 24:
                    _i++;
                    return [3 /*break*/, 21];
                case 25: return [3 /*break*/, 27];
                case 26:
                    e_1 = _d.sent();
                    console.log(e_1);
                    return [3 /*break*/, 27];
                case 27: return [3 /*break*/, 29];
                case 28:
                    i++;
                    return [3 /*break*/, 2];
                case 29: return [2 /*return*/];
            }
        });
    });
}
main().then();
function api(fn, body) {
    var _this = this;
    var url;
    if (fn.indexOf('https://') > -1) {
        url = fn;
    }
    else {
        url = "https://lzdz-isv.isvjcloud.com/dingzhi/yili/yangniu/" + fn;
    }
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var _a, data, headers;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post(url, body, {
                        headers: {
                            'Host': 'lzdz-isv.isvjcloud.com',
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Referer': 'https://lzdz-isv.isvjcloud.com/dingzhi/yili/yangniu/activity',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Accept': 'application/json',
                            'Origin': 'https://lzdz-isv.isvjcloud.com',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    _a = _b.sent(), data = _a.data, headers = _a.headers;
                    reloadCookie(headers['set-cookie']);
                    resolve(data);
                    return [2 /*return*/];
            }
        });
    }); });
}
function getIsvToken() {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action?functionId=genToken&clientVersion=10.0.2&client=android&uuid=818aa057737ba6a4&st=1623934987178&sign=0877498be29cda51b9628fa0195f412f&sv=111", "body=" + escape('{"action":"to","to":"https%3A%2F%2Fh5.m.jd.com%2FbabelDiy%2FZeus%2F3KSjXqQabiTuD1cJ28QskrpWoBKT%2Findex.html%3FbabelChannel%3D45%26collectionId%3D519"}'), {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'charset': 'UTF-8',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'cache-control': 'no-cache',
                            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                            'cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    token = data.tokenKey;
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
}
function getIsvToken2() {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action?functionId=isvObfuscator&clientVersion=10.0.2&client=android&uuid=818aa057737ba6a4&st=1623934998790&sign=e571148c8dfb456a1795d249c6aa3956&sv=100", 'body=%7B%22id%22%3A%22%22%2C%22url%22%3A%22https%3A//xinruidddj-isv.isvjcloud.com%22%7D', {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'user-agent': TS_USER_AGENTS_1["default"],
                            'content-type': 'application/x-www-form-urlencoded',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    token2 = data.token;
                    cookie += 'IsvToken=' + token2 + ';';
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
}
function init() {
    return new Promise(function (resolve) {
        axios_1["default"].get("https://lzdz-isv.isvjcloud.com/dingzhi/yili/yangniu/activity", {
            headers: {
                'Host': 'lzdz-isv.isvjcloud.com',
                'User-Agent': TS_USER_AGENTS_1["default"],
                'Cookie': 'IsvToken=' + token
            }
        }).then(function (res) {
            reloadCookie(res.headers['set-cookie']);
            resolve();
        });
    });
}
function reloadCookie(setCookie) {
    var cookieArr = cookie.split(';');
    cookieArr.pop();
    var cookieTEMP = {};
    for (var _i = 0, cookieArr_1 = cookieArr; _i < cookieArr_1.length; _i++) {
        var ck = cookieArr_1[_i];
        cookieTEMP[ck.split('=')[0]] = ck.match(/(pt_key|pt_pin|LZ_TOKEN_KEY|LZ_TOKEN_VALUE|AUTH_C_USER|lz_jdpin_token|IsvToken)=([^;]*)/)[2];
    }
    if (setCookie) {
        for (var _a = 0, setCookie_1 = setCookie; _a < setCookie_1.length; _a++) {
            var ck = setCookie_1[_a];
            ck = ck.split(';')[0];
            cookieTEMP[ck.split('=')[0]] = ck.match(/(pt_key|pt_pin|LZ_TOKEN_KEY|LZ_TOKEN_VALUE|AUTH_C_USER|lz_jdpin_token|IsvToken)=([^;]*)/)[2];
        }
        cookie = '';
        for (var ck in cookieTEMP) {
            if (cookieTEMP.hasOwnProperty(ck)) {
                cookie += ck + "=" + cookieTEMP[ck] + ";";
            }
        }
    }
}
