"use strict";
/**
 * 健康社区
 * https://h5.m.jd.com/babelDiy/Zeus/D2CwCLVmaP3QonubWFJeTVhYRyT/index.html
 * cron: 35 0,6,18 * * *
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
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var path = require("path");
var cookie = '', res = '', UserName;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, except, _i, _a, _b, index, value, j, _c, _d, t, _e, _f, tp, e_1;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _g.sent();
                except = (0, TS_USER_AGENTS_1.exceptCookie)(path.basename(__filename));
                _i = 0, _a = cookiesArr.entries();
                _g.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 24];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                if (except.includes(encodeURIComponent(UserName))) {
                    console.log('已设置跳过');
                    return [3 /*break*/, 23];
                }
                j = 0;
                _g.label = 3;
            case 3:
                if (!(j < 3)) return [3 /*break*/, 23];
                return [4 /*yield*/, api('jdhealth_getTaskDetail', { "buildingId": "", "taskId": "", "channelId": 1 })];
            case 4:
                res = _g.sent();
                _g.label = 5;
            case 5:
                _g.trys.push([5, 19, , 20]);
                _c = 0, _d = res.data.result.taskVos;
                _g.label = 6;
            case 6:
                if (!(_c < _d.length)) return [3 /*break*/, 18];
                t = _d[_c];
                if (!(t.status === 1 || t.status === 3)) return [3 /*break*/, 17];
                console.log(t.taskName);
                _e = 0, _f = t.productInfoVos || t.followShopVo || t.shoppingActivityVos || [];
                _g.label = 7;
            case 7:
                if (!(_e < _f.length)) return [3 /*break*/, 17];
                tp = _f[_e];
                if (!(tp.status === 1)) return [3 /*break*/, 16];
                console.log('\t', tp.skuName || tp.shopName || tp.title);
                if (!(t.taskName.includes('早睡打卡') && t.taskBeginTime < Date.now() && t.taskEndTime > Date.now())) return [3 /*break*/, 10];
                return [4 /*yield*/, api('jdhealth_collectScore', { "taskToken": tp.taskToken, "taskId": t.taskId, "actionType": 1 })];
            case 8:
                res = _g.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 9:
                _g.sent();
                console.log('\t', res.data.bizMsg);
                _g.label = 10;
            case 10:
                if (!t.waitDuration) return [3 /*break*/, 13];
                return [4 /*yield*/, api('jdhealth_collectScore', { "taskToken": tp.taskToken, "taskId": t.taskId, "actionType": 1 })];
            case 11:
                res = _g.sent();
                console.log('\t', res.data.bizMsg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.waitDuration * 1000)];
            case 12:
                _g.sent();
                _g.label = 13;
            case 13: return [4 /*yield*/, api('jdhealth_collectScore', { "taskToken": tp.taskToken, "taskId": t.taskId, "actionType": 0 })];
            case 14:
                res = _g.sent();
                console.log(res.data.bizMsg, res.data.result.score * 1);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1500)];
            case 15:
                _g.sent();
                _g.label = 16;
            case 16:
                _e++;
                return [3 /*break*/, 7];
            case 17:
                _c++;
                return [3 /*break*/, 6];
            case 18: return [3 /*break*/, 20];
            case 19:
                e_1 = _g.sent();
                console.log('Error', e_1);
                return [3 /*break*/, 23];
            case 20: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 21:
                _g.sent();
                _g.label = 22;
            case 22:
                j++;
                return [3 /*break*/, 3];
            case 23:
                _i++;
                return [3 /*break*/, 2];
            case 24: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post('https://api.m.jd.com/', "functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&client=wh5&clientVersion=1.0.0&uuid="), {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://h5.m.jd.com',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://h5.m.jd.com/',
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
