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
var cookie = '', res, shareCodes = [], UserName, index;
var pin = '', uuid = '', shopId = '', tokenKey = '', token = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, foodLeft, j;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _a.sent();
                i = 0;
                _a.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 16];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, getIsvToken()];
            case 3:
                _a.sent();
                return [4 /*yield*/, getIsvToken2()];
            case 4:
                _a.sent();
                return [4 /*yield*/, init()];
            case 5:
                _a.sent();
                return [4 /*yield*/, api('https://lzdz-isv.isvjcloud.com/dz/common/getSimpleActInfoVo', 'activityId=90121061401')];
            case 6:
                res = _a.sent();
                shopId = res.data.shopId;
                console.log('shopId:', shopId);
                return [4 /*yield*/, api('https://lzdz-isv.isvjcloud.com/customer/getMyPing', "userId=1000361242&token=".concat(token, "&fromType=APP"))];
            case 7:
                res = _a.sent();
                pin = res.data.secretPin;
                console.log('pin:', pin);
                return [4 /*yield*/, api('myInfo', "activityId=90121061401&pin=".concat(encodeURIComponent(pin)))];
            case 8:
                res = _a.sent();
                foodLeft = res.data.bags[1].totalNum - res.data.bags[1].useNum;
                uuid = res.data.bags[0].uid;
                console.log('剩余饲料', foodLeft);
                j = 0;
                _a.label = 9;
            case 9:
                if (!(j < 20)) return [3 /*break*/, 14];
                return [4 /*yield*/, api('doTask', "taskId=interact&activityId=90121061401&pin=".concat(encodeURIComponent(pin)))];
            case 10:
                res = _a.sent();
                if (!res.result) return [3 /*break*/, 12];
                console.log('互动成功', res.data.growUp);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(7000)];
            case 11:
                _a.sent();
                return [3 /*break*/, 13];
            case 12:
                console.log('互动失败', res);
                return [3 /*break*/, 14];
            case 13:
                j++;
                return [3 /*break*/, 9];
            case 14: 
            /*
            for (let t of res.data.task) {
              if (t.type === 0 && t.maxNeed === 10000000) {
                // 首页任务
                console.log(t.type, t.taskname)
                res = await api('doTask', `taskId=${t.taskid}&activityId=90121061401&pin=${encodeURIComponent(pin)}`)
                if (res.result) {
                  console.log(`${t.taskname}成功:${res.data.growUp}`)
                } else {
                  console.log(res.errorMessage)
                }
                await wait(5000)
              }
        
              if (t.curNum != t.need && t.type === 1) {
                console.log(t.taskname)
                if (t.taskid === 'signin') {
                  let signRes: any = await api("signin", `taskId=signin&param=&activityId=90121061401&pin=${encodeURIComponent(pin)}`)
                  console.log('签到:', signRes)
                }
                if (t.taskid === 'scanvideo') {
                  let r: any = await api('doTask', `taskId=${t.taskid}&activityId=90121061401&pin=${encodeURIComponent(pin)}`)
                  await wait(1000)
                }
                if (t.taskid === 'scansku' || t.taskid === 'add2cart') {
                  let products: any = await api('getproduct', `type=${t.params}&activityId=90121061401&pin=${encodeURIComponent(pin)}`)
                  await wait(1000)
                  await api("doTask", `taskId=${t.taskid}&param=${products.data[0].id}&activityId=90121061401&pin=${encodeURIComponent(pin)}`)
                  for (let p of products.data) {
                    console.log(p.id)
                  }
                }
                if (t.taskid === 'interact') {
                  for (let i = 0; i < t.maxNeed - t.curNum; i++) {
                    let playRes: any = await api('doTask', `taskId=${t.taskid}&activityId=90121061401&pin=${encodeURIComponent(pin)}`)
                    if (playRes.result) {
                      console.log('互动成功:', playRes.data.growUp)
                    } else {
                      console.log(res.errorMessage)
                    }
                    await wait(5000)
                  }
                }
              }
            }
             */
            return [3 /*break*/, 16];
            case 15:
                i++;
                return [3 /*break*/, 2];
            case 16: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    var _this = this;
    var url;
    if (fn.indexOf('https://') > -1) {
        url = fn;
    }
    else {
        url = "https://lzdz-isv.isvjcloud.com/dingzhi/qqxing/pasture/".concat(fn, "?_=").concat(Date.now());
    }
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var _a, data, headers;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post(url, typeof body === 'string' ? body : JSON.stringify(body), {
                        headers: {
                            'Host': 'lzdz-isv.isvjcloud.com',
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Referer': 'https://lzdz-isv.isvjcloud.com/dingzhi/qqxing/pasture/activity?activityId=90121061401',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Accept': 'application/json',
                            'Origin': 'https://lzdz-isv.isvjcloud.com',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    _a = _b.sent(), data = _a.data, headers = _a.headers;
                    resolve(data);
                    reloadCookie(headers['set-cookie']);
                    return [2 /*return*/];
            }
        });
    }); });
}
function getIsvToken() {
    return __awaiter(this, void 0, void 0, function () {
        var body, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sign()];
                case 1:
                    body = _a.sent();
                    return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action?functionId=genToken", body, {
                            headers: {
                                'Host': 'api.m.jd.com',
                                'content-type': 'application/x-www-form-urlencoded',
                                'referer': '',
                                'user-agent': 'JD4iPhone/167863%20(iPhone;%20iOS;%20Scale/3.00)',
                                'Cookie': cookie
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    tokenKey = data.tokenKey;
                    return [2 /*return*/];
            }
        });
    });
}
function getIsvToken2() {
    return __awaiter(this, void 0, void 0, function () {
        var body, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, isvObfuscator()];
                case 1:
                    body = _a.sent();
                    return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action?functionId=isvObfuscator", body, {
                            headers: {
                                'Host': 'api.m.jd.com',
                                'accept': '*/*',
                                'content-type': 'application/x-www-form-urlencoded',
                                'referer': '',
                                'user-agent': 'JD4iPhone/167814 (iPhone; iOS 12.4.1; Scale/3.00)',
                                'accept-language': 'zh-Hans-CN;q=1',
                                'Cookie': cookie
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    token = data.token;
                    return [2 /*return*/];
            }
        });
    });
}
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://lzdz-isv.isvjcloud.com/dingzhi/qqxing/pasture/activity?activityId=90121061401", {
                        headers: {
                            'Host': 'lzdz-isv.isvjcloud.com',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'X-Requested-With': 'com.jingdong.app.mall',
                            'Cookie': 'IsvToken=' + token
                        }
                    })];
                case 1:
                    headers = (_a.sent()).headers;
                    reloadCookie(headers['set-cookie']);
                    return [2 /*return*/];
            }
        });
    });
}
function sign() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.jds.codes/sign", { "fn": "genToken", "body": { "to": "https:\/\/lzdz-isv.isvjcloud.com\/dingzhi\/qqxing\/pasture\/activity?activityId=90121061401", "action": "to" } })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data.data.sign];
            }
        });
    });
}
function isvObfuscator() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.jds.codes/sign", { "fn": "isvObfuscator", "body": { "url": "https:\/\/lzdz-isv.isvjcloud.com", "id": "" } })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data.data.sign];
            }
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
    for (var _a = 0, setCookie_1 = setCookie; _a < setCookie_1.length; _a++) {
        var ck = setCookie_1[_a];
        ck = ck.split(';')[0];
        cookieTEMP[ck.split('=')[0]] = ck.match(/(pt_key|pt_pin|LZ_TOKEN_KEY|LZ_TOKEN_VALUE|AUTH_C_USER|lz_jdpin_token|IsvToken)=([^;]*)/)[2];
    }
    cookie = '';
    for (var ck in cookieTEMP) {
        if (cookieTEMP.hasOwnProperty(ck)) {
            cookie += "".concat(ck, "=").concat(cookieTEMP[ck], ";");
        }
    }
}
