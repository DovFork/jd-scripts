"use strict";
/**
 * 财富岛捡贝壳挂后台
 * cron: 10 0 * * *
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
var cookie = '', res = '';
process.env.CFD_LOOP_DELAY ? console.log('设置延迟:', parseInt(process.env.CFD_LOOP_DELAY)) : console.log('设置延迟:10000~25000随机');
var UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, shell, _i, _a, s, j, e_1;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _c.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _c.sent();
                _c.label = 3;
            case 3:
                if (!1) return [3 /*break*/, 18];
                if (new Date().getHours() === 0 && new Date().getMinutes() < 10)
                    return [3 /*break*/, 18];
                i = 0;
                _c.label = 4;
            case 4:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 16];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                _c.label = 5;
            case 5:
                _c.trys.push([5, 14, , 15]);
                return [4 /*yield*/, speedUp('_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 6:
                shell = _c.sent();
                if (!((_b = shell === null || shell === void 0 ? void 0 : shell.Data) === null || _b === void 0 ? void 0 : _b.NormShell)) return [3 /*break*/, 13];
                _i = 0, _a = shell.Data.NormShell;
                _c.label = 7;
            case 7:
                if (!(_i < _a.length)) return [3 /*break*/, 13];
                s = _a[_i];
                j = 0;
                _c.label = 8;
            case 8:
                if (!(j < s.dwNum)) return [3 /*break*/, 12];
                return [4 /*yield*/, speedUp('_cfd_t,bizCode,dwEnv,dwType,ptag,source,strZone', s.dwType)];
            case 9:
                res = _c.sent();
                if (res.iRet !== 0) {
                    console.log(res);
                    return [3 /*break*/, 12];
                }
                console.log('捡贝壳:', res.Data.strFirstDesc);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(500)];
            case 10:
                _c.sent();
                _c.label = 11;
            case 11:
                j++;
                return [3 /*break*/, 8];
            case 12:
                _i++;
                return [3 /*break*/, 7];
            case 13: return [3 /*break*/, 15];
            case 14:
                e_1 = _c.sent();
                console.log(e_1);
                return [3 /*break*/, 15];
            case 15:
                i++;
                return [3 /*break*/, 4];
            case 16: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(60 * 10 * 1000)]; // 10min
            case 17:
                _c.sent(); // 10min
                return [3 /*break*/, 3];
            case 18: return [2 /*return*/];
        }
    });
}); })();
function speedUp(stk, dwType) {
    return __awaiter(this, void 0, void 0, function () {
        var url, data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    url = void 0;
                    if (stk === '_cfd_t,bizCode,dwEnv,ptag,source,strZone')
                        url = "https://m.jingxi.com/jxbfd/story/queryshell?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&_stk=_cfd_t%2CbizCode%2CdwEnv%2Cptag%2Csource%2CstrZone&_ste=1&_=" + Date.now() + "&sceneval=2";
                    else if (stk === '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strZone')
                        url = "https://m.jingxi.com/jxbfd/story/pickshell?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&dwType=" + dwType + "&_stk=_cfd_t%2CbizCode%2CdwEnv%2CdwType%2Cptag%2Csource%2CstrZone&_ste=1&_=" + Date.now() + "&sceneval=2";
                    url = (0, TS_USER_AGENTS_1.h5st)(url, stk, {});
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'Referer': 'https://st.jingxi.com/',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
                case 2:
                    e_2 = _a.sent();
                    return [2 /*return*/, ''];
                case 3: return [2 /*return*/];
            }
        });
    });
}
