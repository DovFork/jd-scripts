"use strict";
/**
 * 京喜工厂：肯德基、沃尔玛
 * cron: 0 * * * *
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
var sendNotify_1 = require("./sendNotify");
var cookie = '', res = '', message = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, keywords, _i, _a, t, name_1, _b, keywords_1, keyword;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)(10001)];
            case 1:
                _c.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _c.sent();
                cookie = cookiesArr[0];
                return [4 /*yield*/, api()];
            case 3:
                /*
                let exist: string[] = [];
                if (existsSync('json/jxgc_stock.json')) {
                  exist = JSON.parse(readFileSync('./json/jxgc_stock.json').toString() || '[]')
                }
                res = await api();
                let current: string[] = []
                for (let t of res.data.commodityList) {
                  console.log(t.name)
                  current.push(t.name)
                  if (!exist.includes(t.name)) {
                    message += t.name + '\n'
                  }
                }
                writeFileSync('./json/jxgc_stock.json', JSON.stringify(current))
                if (message) {
                  console.log('send...')
                  sendNotify('京喜工厂可生产', message)
                }
                 */
                res = _c.sent();
                keywords = ['KFC', 'kfc', '肯德基', '沃尔玛'];
                _i = 0, _a = res.data.commodityList;
                _c.label = 4;
            case 4:
                if (!(_i < _a.length)) return [3 /*break*/, 9];
                t = _a[_i];
                name_1 = t.name;
                console.log(name_1);
                _b = 0, keywords_1 = keywords;
                _c.label = 5;
            case 5:
                if (!(_b < keywords_1.length)) return [3 /*break*/, 8];
                keyword = keywords_1[_b];
                if (!(name_1.indexOf(keyword) > -1)) return [3 /*break*/, 7];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)("京喜工厂", name_1)];
            case 6:
                _c.sent();
                return [3 /*break*/, 8];
            case 7:
                _b++;
                return [3 /*break*/, 5];
            case 8:
                _i++;
                return [3 /*break*/, 4];
            case 9: return [2 /*return*/];
        }
    });
}); })();
function api() {
    return __awaiter(this, void 0, void 0, function () {
        var url, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = (0, TS_USER_AGENTS_1.h5st)("https://wq.jd.com/dreamfactory/diminfo/GetCommodityList?zone=dream_factory&flag=2&pageNo=1&pageSize=12&_time=" + Date.now() + "&_stk=_time%2Cflag%2CpageNo%2CpageSize%2Czone&_ste=1&_=" + Date.now() + "&sceneval=2", '_time,flag,pageNo,pageSize,zone', {}, 10001);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'wq.jd.com',
                                "User-Agent": TS_USER_AGENTS_1["default"],
                                'accept-language': 'zh-cn',
                                'referer': 'https://wqsd.jd.com/pingou/dream_factory/index.html',
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
