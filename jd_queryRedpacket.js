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
var sendNotify_1 = require("./sendNotify");
var pushplus_1 = require("./utils/pushplus");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', UserName;
var message = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, day, jdRed, jdRedExp, _c, _d, j, text;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _e.sent();
                _i = 0, _a = cookiesArr.entries();
                _e.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 7];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://m.jingxi.com/user/info/QueryUserRedEnvelopesV2?type=1&orgFlag=JD_PinGou_New&page=1&cashRedType=1&redBalanceFlag=1&channel=1&_=".concat(Date.now(), "&sceneval=2&g_login_type=1&g_ty=ls"), '', {
                        'Host': 'm.jingxi.com',
                        'Referer': 'https://st.jingxi.com/my/redpacket.shtml',
                        "Cookie": cookie,
                        'User-Agent': TS_USER_AGENTS_1["default"]
                    })];
            case 3:
                res = _e.sent();
                day = new Date().getDay(), jdRed = 0, jdRedExp = 0;
                for (_c = 0, _d = res.data.useRedInfo.redList; _c < _d.length; _c++) {
                    j = _d[_c];
                    if (j.orgLimitStr.includes('京喜')) {
                    }
                    else if (j.activityName.includes('极速版')) {
                    }
                    else if (j.orgLimitStr.includes('京东健康')) {
                    }
                    else {
                        jdRed = add(jdRed, j.balance);
                        if (new Date(j.endTime * 1000).getDay() === day)
                            jdRedExp = add(jdRedExp, j.balance);
                    }
                }
                console.log(jdRed, '  今日过期：', jdRedExp);
                text = "\u3010\u8D26\u53F7\u3011  ".concat(UserName, "\n\u4EAC\u4E1C\u7EA2\u5305  ").concat(jdRed, "\n\u4ECA\u65E5\u8FC7\u671F  ").concat(jdRedExp);
                return [4 /*yield*/, (0, pushplus_1.pushplus)('京东红包', text)];
            case 4:
                _e.sent();
                message += "".concat(text, "\n\n");
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 5:
                _e.sent();
                _e.label = 6;
            case 6:
                _i++;
                return [3 /*break*/, 2];
            case 7: return [4 /*yield*/, (0, sendNotify_1.sendNotify)('京东红包', message)];
            case 8:
                _e.sent();
                return [2 /*return*/];
        }
    });
}); })();
function add(arg1, arg2) {
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
