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
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, UserName, finishCount, maxTaskCount, i, tasks, _c, tasks_1, t;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getCookie)()];
            case 1:
                cookiesArr = _d.sent();
                _i = 0, _a = cookiesArr.entries();
                _d.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 16];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('getTaskFinishCount')];
            case 3:
                res = _d.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 4:
                _d.sent();
                finishCount = res.content.content.finishCount, maxTaskCount = res.content.content.maxTaskCount;
                console.log(finishCount, '/', maxTaskCount);
                i = finishCount;
                _d.label = 5;
            case 5:
                if (!(i < maxTaskCount)) return [3 /*break*/, 15];
                return [4 /*yield*/, api('getTaskList')];
            case 6:
                tasks = _d.sent();
                tasks = tasks.content;
                tasks = tasks.sort(compare('rewardBeans'));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 7:
                _d.sent();
                _c = 0, tasks_1 = tasks;
                _d.label = 8;
            case 8:
                if (!(_c < tasks_1.length)) return [3 /*break*/, 14];
                t = tasks_1[_c];
                if (!(t.statusName !== '活动结束' && t.status !== 2)) return [3 /*break*/, 13];
                return [4 /*yield*/, taskApi('saveTaskRecord', { "taskId": null, "taskType": 2, "businessId": null })];
            case 9:
                res = _d.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.watchTime * 1000 + 500)];
            case 10:
                _d.sent();
                return [4 /*yield*/, taskApi('saveTaskRecord', { taskId: t.taskId, taskType: t.taskType, businessId: t.businessId, uid: res.content.uid, tt: res.content.tt })];
            case 11:
                res = _d.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 12:
                _d.sent();
                _d.label = 13;
            case 13:
                _c++;
                return [3 /*break*/, 8];
            case 14:
                i++;
                return [3 /*break*/, 5];
            case 15:
                _i++;
                return [3 /*break*/, 2];
            case 16: return [2 /*return*/];
        }
    });
}); })();
function api(fn) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://ifanli.m.jd.com/rebateapi/task/".concat(fn), {
                        headers: {
                            "Host": "ifanli.m.jd.com",
                            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
                            'referer': 'https://ifanli.m.jd.com/rebate/earnBean.html?paltform=null',
                            "Cookie": cookie,
                            "Content-Type": "application/json;charset=UTF-8"
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
function taskApi(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://ifanli.m.jd.com/rebateapi/task/".concat(fn), JSON.stringify(body), {
                        headers: {
                            'authority': 'ifanli.m.jd.com',
                            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
                            'referer': 'https://ifanli.m.jd.com/rebate/earnBean.html?paltform=null',
                            'cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
function compare(property) {
    return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
    };
}
