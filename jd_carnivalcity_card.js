"use strict";
/**
 * 手机狂欢城
 * 浏览、加购
 * cron: 15 0,6 * * *
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
var cookie = '', res = '', UserName, shareCodeSelf = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value, i;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _c.sent();
                _i = 0, _a = cookiesArr.entries();
                _c.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 21];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                if (!(new Date().getMinutes() < 10)) return [3 /*break*/, 5];
                return [4 /*yield*/, api({ "apiMapping": "/khc/task/getSupport" })];
            case 3:
                res = _c.sent();
                console.log('助力码', res.data.shareId);
                shareCodeSelf.push(res.data.shareId);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 4:
                _c.sent();
                return [3 /*break*/, 20];
            case 5:
                i = 0;
                _c.label = 6;
            case 6:
                if (!(i < 30)) return [3 /*break*/, 17];
                return [4 /*yield*/, api({ "apiMapping": "/khc/index/headInfo" })];
            case 7:
                res = _c.sent();
                (0, TS_USER_AGENTS_1.o2s)(res.data);
                if (!(res.data.taskType === '14')) return [3 /*break*/, 10];
                return [4 /*yield*/, api({ "taskId": res.data.taskId, "taskIndex": res.data.taskIndex, "apiMapping": "/khc/task/getHeadJoinPrize" })];
            case 8:
                res = _c.sent();
                console.log('加购', res.msg, res.data.jingBean);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 9:
                _c.sent();
                return [3 /*break*/, 16];
            case 10:
                if (!['13', '15'].includes(res.data.taskType)) return [3 /*break*/, 15];
                return [4 /*yield*/, api({ "taskIndex": res.data.taskIndex, "taskId": res.data.taskId, "taskType": res.data.taskType, "apiMapping": "/khc/task/doBrowseHead" })];
            case 11:
                res = _c.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 12:
                _c.sent();
                return [4 /*yield*/, api({ "browseId": res.data.browseId, "apiMapping": "/khc/task/getHeadBrowsePrize" })];
            case 13:
                res = _c.sent();
                console.log('浏览', res.msg, res.data.jingBean);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 14:
                _c.sent();
                return [3 /*break*/, 16];
            case 15:
                if (!res.data.taskType) {
                    console.log('任务全部完成');
                    return [3 /*break*/, 17];
                }
                _c.label = 16;
            case 16:
                i++;
                return [3 /*break*/, 6];
            case 17: return [4 /*yield*/, api({ "apiMapping": "/khc/rank/dayRank" })];
            case 18:
                res = _c.sent();
                console.log('我的积分', parseInt(res.data.myRank.integral));
                console.log('我的排名', parseInt(res.data.myRank.rank));
                if (index === cookiesArr.length - 1) {
                    console.log('\n');
                    console.log('TOP1 ', parseInt(res.data.rankList[0].integral));
                    console.log('TOP10', parseInt(res.data.rankList[9].integral));
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 19:
                _c.sent();
                _c.label = 20;
            case 20:
                _i++;
                return [3 /*break*/, 2];
            case 21:
                if (shareCodeSelf.length !== 0) {
                    (0, TS_USER_AGENTS_1.o2s)(shareCodeSelf);
                }
                return [2 /*return*/];
        }
    });
}); })();
function api(body) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.post)('https://api.m.jd.com/api', "appid=reinforceints&functionId=carnivalcity_jd_prod&body=".concat(JSON.stringify(body), "&t=").concat(Date.now(), "&h5st=&loginType=2"), {
                        'Host': 'api.m.jd.com',
                        'Origin': 'https://welfare.m.jd.com',
                        'User-Agent': TS_USER_AGENTS_1["default"],
                        'Referer': 'https://welfare.m.jd.com/',
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Cookie': cookie
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
