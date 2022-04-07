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
var V3_1 = require("./utils/V3");
var crypto_js_1 = require("crypto-js");
var cookie = '', res = '', UserName = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, _c, _d, t, e_1;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _e.sent();
                _i = 0, _a = cookiesArr.entries();
                _e.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 17];
                _b = _a[_i], index = _b[0], value = _b[1];
                _e.label = 3;
            case 3:
                _e.trys.push([3, 13, , 14]);
                return [4 /*yield*/, (0, V3_1.requestAlgo)('15097', 'jdltapp;')];
            case 4:
                _e.sent();
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('apSignIn_day', { "linkId": "9WA12jYGulArzWS7vcrwhw", "serviceName": "dayDaySignGetRedEnvelopeSignService", "business": 1 })];
            case 5:
                res = _e.sent();
                if (res.data.retCode === 0) {
                    console.log('签到成功');
                }
                else {
                    console.log(res.data.retMessage);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 6:
                _e.sent();
                return [4 /*yield*/, api('signPrizeDetailList', { "linkId": "9WA12jYGulArzWS7vcrwhw", "serviceName": "dayDaySignGetRedEnvelopeSignService", "business": 1, "pageSize": 20, "page": 1 })];
            case 7:
                res = _e.sent();
                _c = 0, _d = res.data.prizeDrawBaseVoPageBean.items;
                _e.label = 8;
            case 8:
                if (!(_c < _d.length)) return [3 /*break*/, 12];
                t = _d[_c];
                if (!(t.prizeType === 4 && t.prizeStatus === 0)) return [3 /*break*/, 11];
                return [4 /*yield*/, api('apCashWithDraw', { "linkId": "9WA12jYGulArzWS7vcrwhw", "businessSource": "DAY_DAY_RED_PACKET_SIGN", "base": { "prizeType": t.prizeType, "business": t.business, "id": t.id, "poolBaseId": t.poolBaseId, "prizeGroupId": t.prizeGroupId, "prizeBaseId": t.prizeBaseId } })];
            case 9:
                res = _e.sent();
                console.log(parseFloat(t.prizeValue), res.data.message);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 10:
                _e.sent();
                _e.label = 11;
            case 11:
                _c++;
                return [3 /*break*/, 8];
            case 12: return [3 /*break*/, 14];
            case 13:
                e_1 = _e.sent();
                console.log(e_1);
                return [3 /*break*/, 14];
            case 14: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 15:
                _e.sent();
                _e.label = 16;
            case 16:
                _i++;
                return [3 /*break*/, 2];
            case 17: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var timestamp, t, h5st, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    timestamp = Date.now(), t = [
                        { key: 'functionId', value: fn },
                        { key: 'body', value: (0, crypto_js_1.SHA256)(JSON.stringify(body)).toString() },
                        { key: 't', value: timestamp.toString() },
                        { key: 'appid', value: 'activities_platform' },
                        { key: 'client', value: 'H5' },
                        { key: 'clientVersion', value: '1.0.0' },
                    ];
                    h5st = (0, V3_1.geth5st)(t, '8adfb');
                    return [4 /*yield*/, axios_1["default"].post('https://api.m.jd.com/', "functionId=".concat(fn, "&body=").concat(JSON.stringify(body), "&t=").concat(timestamp, "&appid=activities_platform&client=H5&clientVersion=1.0.0&h5st=").concat(h5st), {
                            headers: {
                                'Host': 'api.m.jd.com',
                                'Origin': 'https://daily-redpacket.jd.com',
                                'User-Agent': 'jdltapp;',
                                'Referer': 'https://daily-redpacket.jd.com/',
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
