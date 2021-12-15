"use strict";
/**
 * 每周质量报告
 * cron: 0 0 * * 1
 * desc: 每周一凌晨0点执行，更新上周的质量报告
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
var date_fns_1 = require("date-fns");
var axios_1 = require("axios");
var sendNotify_1 = require("./sendNotify");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var PrettyTable = require('prettytable');
var START = (0, date_fns_1.getTime)(new Date((0, date_fns_1.format)((0, date_fns_1.subDays)(Date.now(), 7), 'yyyy-MM-dd 00:00:00')));
var cookie = '', res = '', UserName, index, message = '';
var headers = ["Type", "Used", "Total"];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, flag, page, redNum, total, jx, jxUsed, js, jsUsed, jk, jkUsed, jd, jdUsed, all, allUsed, pt, rows, _i, _a, t;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _b.sent();
                i = 0;
                _b.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 10];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                flag = true, page = 0, redNum = 0, total = 0;
                jx = 0, jxUsed = 0, js = 0, jsUsed = 0, jk = 0, jkUsed = 0, jd = 0, jdUsed = 0, all = 0, allUsed = 0;
                pt = new PrettyTable(), rows = [];
                _b.label = 3;
            case 3:
                if (!1) return [3 /*break*/, 8];
                if (!flag) return [3 /*break*/, 6];
                return [4 /*yield*/, api(page)];
            case 4:
                res = _b.sent();
                for (_i = 0, _a = res.data.unUseRedInfo.redList; _i < _a.length; _i++) {
                    t = _a[_i];
                    if (t.beginTime * 1000 > START) {
                        redNum++;
                        total = accAdd(total, t.discount * 1);
                        if (t.orgLimitStr.indexOf('京喜') > -1) {
                            jx = accAdd(jx, t.discount * 1);
                            jxUsed = accAdd(jxUsed, accSub(t.discount * 1, t.balance * 1));
                        }
                        else if (t.orgLimitStr.indexOf('极速') > -1) {
                            js = accAdd(js, t.discount * 1);
                            jsUsed = accAdd(jsUsed, accSub(t.discount * 1, t.balance * 1));
                        }
                        else if (t.orgLimitStr.indexOf('健康') > -1) {
                            jk = accAdd(jk, t.discount * 1);
                            jkUsed = accAdd(jkUsed, accSub(t.discount * 1, t.balance * 1));
                        }
                        else if (t.orgLimitStr.indexOf('京东商城') > -1) {
                            jd = accAdd(jd, t.discount * 1);
                            jdUsed = accAdd(jdUsed, accSub(t.discount * 1, t.balance * 1));
                        }
                        else {
                            all = accAdd(all, t.discount * 1);
                            allUsed = accAdd(allUsed, accSub(t.discount * 1, t.balance * 1));
                        }
                    }
                    else {
                        flag = false;
                    }
                }
                page++;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 5:
                _b.sent();
                return [3 /*break*/, 7];
            case 6: return [3 /*break*/, 8];
            case 7: return [3 /*break*/, 3];
            case 8:
                message += "\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n\u4EAC\u559C\uFF1A").concat(jx, "\uFF0C\u5DF2\u7528").concat(jxUsed, "\n\u6781\u901F\uFF1A").concat(js, "\uFF0C\u5DF2\u7528").concat(jsUsed, "\n\u5065\u5EB7\uFF1A").concat(jk, "\uFF0C\u5DF2\u7528").concat(jkUsed, "\n\u4EAC\u4E1C\uFF1A").concat(jd, "\uFF0C\u5DF2\u7528").concat(jdUsed, "\n\u901A\u7528\uFF1A").concat(all, "\uFF0C\u5DF2\u7528").concat(allUsed, "\n\u5408\u8BA1\uFF1A").concat(total, "\u5143\uFF0C\u5171").concat(redNum, "\u4E2A\u7EA2\u5305\n\n");
                // console.log('红包数量', redNum)
                // console.log('总计', total)
                // console.log('京喜', jxUsed, '/', jx)
                // console.log('极速', jsUsed, '/', js)
                // console.log('健康', jkUsed, '/', jk)
                // console.log('京东', jdUsed, '/', jd)
                // console.log('通用', allUsed, '/', all)
                rows.push(['JX', jxUsed, jx]);
                rows.push(['JS', jsUsed, js]);
                rows.push(['JK', jkUsed, jk]);
                rows.push(['JD', jdUsed, jd]);
                rows.push(['General', allUsed, all]);
                rows.push(['Count', '', redNum]);
                rows.push(['Total', '', total]);
                pt.create(headers, rows);
                pt.print();
                _b.label = 9;
            case 9:
                i++;
                return [3 /*break*/, 2];
            case 10:
                if (!message) return [3 /*break*/, 12];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)('每周质量报告', message)];
            case 11:
                _b.sent();
                _b.label = 12;
            case 12: return [2 /*return*/];
        }
    });
}); })();
function api(page) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://wq.jd.com/user/info/QueryUserRedEnvelopesV2?type=2&orgFlag=JD_PinGou_New&page=".concat(page, "&cashRedType=1&redBalanceFlag=0&channel=3&_=").concat(Date.now(), "&sceneval=2"), {
                        headers: {
                            'authority': 'wq.jd.com',
                            'user-agent': TS_USER_AGENTS_1["default"],
                            'referer': 'https://wqs.jd.com/',
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
function accAdd(arg1, arg2) {
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
}
function accSub(arg1, arg2) {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return parseFloat(((arg1 * m - arg2 * m) / m).toFixed(n));
}
