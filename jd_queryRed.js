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
var fs_1 = require("fs");
var date_fns_1 = require("date-fns");
var sendNotify_1 = require("./sendNotify");
var pushplus_1 = require("./utils/pushplus");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', UserName;
var date = (0, date_fns_1.getDate)(new Date()), message = '', allMessage = '', pushplusArr, pushplusUser = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _i, pushplusArr_1, user, cookiesArr, _a, _b, _c, index, value, jdRed, jdRedExp, _d, _e, red;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                if (Object.keys(process.env).includes("QL_DIR"))
                    return [2 /*return*/];
                try {
                    pushplusArr = JSON.parse((0, fs_1.readFileSync)('./utils/account.json', 'utf-8').toString());
                }
                catch (e) {
                    console.log('utils/pushplus.json 加载错误');
                    pushplusArr = [];
                }
                for (_i = 0, pushplusArr_1 = pushplusArr; _i < pushplusArr_1.length; _i++) {
                    user = pushplusArr_1[_i];
                    if (user.pushplus) {
                        pushplusUser.push(decodeURIComponent(user.pt_pin));
                    }
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _f.sent();
                _a = 0, _b = cookiesArr.entries();
                _f.label = 2;
            case 2:
                if (!(_a < _b.length)) return [3 /*break*/, 8];
                _c = _b[_a], index = _c[0], value = _c[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                jdRed = 0, jdRedExp = 0;
                return [4 /*yield*/, api()];
            case 3:
                res = _f.sent();
                for (_d = 0, _e = res.data.useRedInfo.redList; _d < _e.length; _d++) {
                    red = _e[_d];
                    if (red.orgLimitStr.includes("京喜")) {
                    }
                    else if (red.activityName.includes('极速版')) {
                    }
                    else if (red.orgLimitStr.includes('京东健康')) {
                    }
                    else {
                        jdRed += parseFloat(red.balance);
                        (0, date_fns_1.getDate)(red.endTime * 1000) === date ? jdRedExp += parseFloat(red.balance) : '';
                    }
                }
                console.log(parseFloat(jdRed.toFixed(2)), parseFloat(jdRedExp.toFixed(2)));
                message = "\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011 ").concat(UserName, "\n\u4EAC\u4E1C\u7EA2\u5305  ").concat(jdRed.toFixed(2), "\n\u4ECA\u65E5\u8FC7\u671F  ").concat(jdRedExp.toFixed(2), "\n\n");
                if (!pushplusUser.includes(UserName)) return [3 /*break*/, 5];
                return [4 /*yield*/, (0, pushplus_1.pushplus)('京东红包', message)];
            case 4:
                _f.sent();
                _f.label = 5;
            case 5:
                allMessage += message;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 6:
                _f.sent();
                _f.label = 7;
            case 7:
                _a++;
                return [3 /*break*/, 2];
            case 8:
                if (!allMessage) return [3 /*break*/, 10];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)('京东红包', allMessage)];
            case 9:
                _f.sent();
                _f.label = 10;
            case 10: return [2 /*return*/];
        }
    });
}); })();
function api() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://wq.jd.com/user/info/QueryUserRedEnvelopesV2?type=1&orgFlag=JD_PinGou_New&page=1&cashRedType=1&redBalanceFlag=1&channel=3&_=".concat(Date.now(), "&sceneval=2&g_login_type=1&callback=jsonpCBK").concat((0, TS_USER_AGENTS_1.randomWord)(), "&g_ty=ls"), {
                        headers: {
                            'authority': 'wq.jd.com',
                            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
                            'referer': 'https://wqs.jd.com/',
                            'cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, JSON.parse(data.match(/jsonpCBK.?\(([\w\W]*)\);/)[1])];
            }
        });
    });
}
