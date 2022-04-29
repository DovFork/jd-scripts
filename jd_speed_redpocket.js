"use strict";
/**
 * 极速版-领红包
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
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var h5st_1 = require("./h5st");
var cookie = '', res = '', UserName = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, remainChance, i;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _c.sent();
                _i = 0, _a = cookiesArr.entries();
                _c.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 9];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('spring_reward_query', { "linkId": "Eu7-E0CUzqYyhZJo9d3YkQ", "inviter": "" })];
            case 3:
                res = _c.sent();
                remainChance = res.data.remainChance;
                console.log('剩余抽奖次数：', remainChance);
                i = 0;
                _c.label = 4;
            case 4:
                if (!(i < remainChance)) return [3 /*break*/, 8];
                return [4 /*yield*/, api('spring_reward_receive', { "inviter": "", "linkId": "Eu7-E0CUzqYyhZJo9d3YkQ" })];
            case 5:
                res = _c.sent();
                try {
                    console.log('抽奖成功', res.data.received.prizeDesc);
                }
                catch (e) {
                    console.log('抽奖失败');
                    return [3 /*break*/, 8];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 6:
                _c.sent();
                _c.label = 7;
            case 7:
                i++;
                return [3 /*break*/, 4];
            case 8:
                _i++;
                return [3 /*break*/, 2];
            case 9: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var timestamp, t, h5st;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    timestamp = Date.now(), t = [
                        { key: 'appid', value: 'activities_platform' },
                        { key: 'body', value: JSON.stringify(body) },
                        { key: 'client', value: 'H5' },
                        { key: 'clientVersion', value: '1.0.0' },
                        { key: 'functionId', value: fn },
                        { key: 't', value: timestamp.toString() },
                    ];
                    return [4 /*yield*/, new h5st_1.H5ST(t, "07244", "jdltapp;", "5817062902662730").__run()];
                case 1:
                    h5st = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.get)("https://api.m.jd.com/?functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&t=").concat(timestamp, "&appid=activities_platform&h5st=").concat(h5st), {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://prodev.m.jd.com',
                            'User-Agent': 'jdltapp;',
                            'Referer': 'https://prodev.m.jd.com/',
                            'Cookie': cookie
                        })];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
