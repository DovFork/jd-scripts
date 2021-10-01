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
var cookie = '', res = '', shareCodes = [], shareCodesInternal = [], UserName, index;
var tokenKey = '', token = '', bearer = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, _i, _a, t, items, _b, items_1, item, name_1, e_1, i;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _c.sent();
                i = 0;
                _c.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 22];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                return [4 /*yield*/, getIsvToken()];
            case 3:
                _c.sent();
                return [4 /*yield*/, getIsvToken2()];
            case 4:
                _c.sent();
                return [4 /*yield*/, getToken()];
            case 5:
                _c.sent();
                return [4 /*yield*/, api('get_task')];
            case 6:
                res = _c.sent();
                _i = 0, _a = res.result.taskVos;
                _c.label = 7;
            case 7:
                if (!(_i < _a.length)) return [3 /*break*/, 21];
                t = _a[_i];
                if (!(t.status === 1)) return [3 /*break*/, 20];
                if (!t.simpleRecordInfoVo) return [3 /*break*/, 10];
                return [4 /*yield*/, api('do_task', "taskToken=" + t.simpleRecordInfoVo.taskToken + "&task_id=" + t.taskId + "&task_type=" + t.taskType)];
            case 8:
                // 签到
                res = _c.sent();
                console.log('签到成功：', res.score);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 9:
                _c.sent();
                return [3 /*break*/, 15];
            case 10:
                items = t.browseShopVo || t.shoppingActivityVos || t.productInfoVos || [];
                _b = 0, items_1 = items;
                _c.label = 11;
            case 11:
                if (!(_b < items_1.length)) return [3 /*break*/, 15];
                item = items_1[_b];
                if (!(item.status === 1)) return [3 /*break*/, 14];
                name_1 = item.shopName || item.title || item.skuName;
                return [4 /*yield*/, api('do_task', "taskToken=" + item.taskToken + "&task_id=" + t.taskId + "&task_type=" + t.taskType + "&task_name=" + encodeURIComponent(name_1))];
            case 12:
                res = _c.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 13:
                _c.sent();
                console.log('任务完成：', res.score);
                _c.label = 14;
            case 14:
                _b++;
                return [3 /*break*/, 11];
            case 15:
                if (!(t.taskName === '邀请好友助力')) return [3 /*break*/, 20];
                console.log('助力码：', t.assistTaskDetailVo.taskToken);
                return [4 /*yield*/, api('get_user_info')];
            case 16:
                res = _c.sent();
                shareCodesInternal.push({
                    taskToken: t.assistTaskDetailVo.taskToken,
                    inviter_id: res.openid
                });
                _c.label = 17;
            case 17:
                _c.trys.push([17, 19, , 20]);
                // await axios.get('https://api.jdsharecode.xyz/api/autoInsert/ddworld?sharecode=' + encodeURIComponent(t.assistTaskDetailVo.taskToken + ',' + res.openid))
                return [4 /*yield*/, axios_1["default"].get('http://127.0.0.1:10001/api/autoInsert/ddworld?sharecode=' + encodeURIComponent(t.assistTaskDetailVo.taskToken + ',' + res.openid))];
            case 18:
                // await axios.get('https://api.jdsharecode.xyz/api/autoInsert/ddworld?sharecode=' + encodeURIComponent(t.assistTaskDetailVo.taskToken + ',' + res.openid))
                _c.sent();
                return [3 /*break*/, 20];
            case 19:
                e_1 = _c.sent();
                return [3 /*break*/, 20];
            case 20:
                _i++;
                return [3 /*break*/, 7];
            case 21:
                i++;
                return [3 /*break*/, 2];
            case 22:
                console.log('内部助力码：', shareCodesInternal);
                i = 0;
                _c.label = 23;
            case 23:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 27];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log(UserName + "\u53BB\u52A9\u529B" + shareCodesInternal[0].taskToken);
                return [4 /*yield*/, api('do_assist_task', "taskToken=" + shareCodesInternal[0].taskToken + "&inviter_id=" + shareCodesInternal[0].inviter_id)];
            case 24:
                res = _c.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 25:
                _c.sent();
                console.log('助力结果：', res);
                _c.label = 26;
            case 26:
                i++;
                return [3 /*break*/, 23];
            case 27: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    if (body === void 0) { body = ''; }
    return __awaiter(this, void 0, void 0, function () {
        var headers, data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    headers = {
                        'Host': 'ddsj-dz.isvjcloud.com',
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'User-Agent': TS_USER_AGENTS_1["default"],
                        'Authorization': "Bearer " + bearer,
                        'Referer': 'https://ddsj-dz.isvjcloud.com/dd-world/'
                    };
                    data = {};
                    if (!body) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].post("https://ddsj-dz.isvjcloud.com/dd-api/" + fn, body, { headers: headers })];
                case 2:
                    data = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    return [2 /*return*/];
                case 4: return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, axios_1["default"].get("https://ddsj-dz.isvjcloud.com/dd-api/" + fn, { headers: headers })];
                case 6:
                    data = _a.sent();
                    _a.label = 7;
                case 7: return [2 /*return*/, data.data];
            }
        });
    });
}
function getIsvToken() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action?functionId=genToken", "body=%7B%22to%22%3A%22https%3A%2F%2Fddsj-dz.isvjcloud.com%2Fdd-world%2Fload_app%2Fload_app.html%22%2C%22action%22%3A%22to%22%7D&uuid=4ccb375c539fd92bade&client=apple&clientVersion=10.0.10&st=1631884082694&sv=111&sign=1a49fd69e7d3c18cad91cc00ed40d327", {
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
                case 1:
                    data = (_a.sent()).data;
                    tokenKey = data.tokenKey;
                    return [2 /*return*/];
            }
        });
    });
}
function getIsvToken2() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action?functionId=isvObfuscator", "body=%7B%22id%22%3A%22%22%2C%22url%22%3A%22https%3A%2F%2Fddsj-dz.isvjcloud.com%22%7D&uuid=5162ca82aed35fc52e8&client=apple&clientVersion=10.0.10&st=1631884203742&sv=112&sign=fd40dc1c65d20881d92afe96c4aec3d0", {
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
                case 1:
                    data = (_a.sent()).data;
                    token = data.token;
                    return [2 /*return*/];
            }
        });
    });
}
function getToken() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post('https://ddsj-dz.isvjcloud.com/dd-api/jd-user-info', "token=" + token + "&source=01", {
                        headers: {
                            'Host': 'ddsj-dz.isvjcloud.com',
                            'Origin': 'https://ddsj-dz.isvjcloud.com',
                            'Authorization': 'Bearer undefined',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://ddsj-dz.isvjcloud.com',
                            'Cookie': "IsvToken=" + tokenKey + ";"
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    bearer = data.access_token;
                    return [2 /*return*/];
            }
        });
    });
}
