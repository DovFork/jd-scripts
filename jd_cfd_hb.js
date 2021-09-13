"use strict";
/**
 * 我就是看看，不抢
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
var cookie = '', cookiesArr, res = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var PrettyTable, pt, title, datas, _i, _a, t;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _b.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _b.sent();
                cookie = cookiesArr[0];
                return [4 /*yield*/, api('user/ExchangeState', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strZone', { dwType: '2' })];
            case 3:
                res = _b.sent();
                _b.label = 4;
            case 4:
                if (!1) return [3 /*break*/, 8];
                if (!(new Date().getSeconds() < 61)) return [3 /*break*/, 5];
                return [3 /*break*/, 8];
            case 5: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 6:
                _b.sent();
                _b.label = 7;
            case 7: return [3 /*break*/, 4];
            case 8:
                PrettyTable = require('prettytable');
                pt = new PrettyTable();
                title = ['Value', 'Status', 'Stock'];
                datas = [];
                for (_i = 0, _a = res.hongbao; _i < _a.length; _i++) {
                    t = _a[_i];
                    datas.push([t.strPrizeName.replace('元', ''), t.dwState ? 'True' : 'False', t.dwStockNum]);
                }
                pt.create(title, datas);
                pt.print();
                return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) {
        var url = "https://m.jingxi.com/jxbfd/" + fn + "?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&_ste=1&_=" + Date.now() + "&sceneval=2&_stk=" + encodeURIComponent(stk);
        url = (0, TS_USER_AGENTS_1.h5st)(url, stk, params, 10032);
        axios_1["default"].get(url, {
            headers: {
                'Host': 'm.jingxi.com',
                'Referer': 'https://st.jingxi.com/',
                'User-Agent': TS_USER_AGENTS_1["default"],
                'Cookie': cookie
            }
        }).then(function (res) {
            resolve(res.data);
        })["catch"](function (e) {
            reject(e);
        });
    });
}
