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
var TS_USER_AGENTS_2 = require("./test/TS_USER_AGENTS");
var cookie = '', UserName = '', elements;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, _i, _a, _b, index, value;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _c.sent();
                _i = 0, _a = cookiesArr.entries();
                _c.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 5];
                _b = _a[_i], index = _b[0], value = _b[1];
                cookie = value;
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index + 1, "\u3011").concat(UserName, "\n"));
                axios_1["default"].get("https://api.m.jd.com/?t=".concat(Date.now(), "&functionId=pg_channel_page_data&appid=vip_h5&body=%7B%22paramData%22:%7B%22token%22:%2260143dce-1cde-44de-8130-a6e5579e1567%22%7D%7D"), {
                    headers: {
                        'Host': 'api.m.jd.com',
                        'Origin': 'https://vipgrowth.m.jd.com',
                        'Accept': 'application/json',
                        'User-Agent': TS_USER_AGENTS_2["default"],
                        'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                        'Referer': 'https://vipgrowth.m.jd.com/',
                        'Cookie': cookie
                    }
                }).then(function (_a) {
                    var res = _a.data;
                    console.log('京享值', res.data.floorInfoList[0].floorData.jxScoreInfo.jxScore);
                    elements = res.data.floorInfoList[0].floorData.jxScoreInfo.elements;
                    for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                        var ele = elements_1[_i];
                        if (ele.level) {
                            console.log(ele.name, ele.level);
                        }
                    }
                    console.log('更新时间', res.data.floorInfoList[0].floorData.jxScoreInfo.lastUpdateTime);
                })["catch"](function (err) {
                    console.log(err);
                });
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 3:
                _c.sent();
                _c.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5:
                desc();
                return [2 /*return*/];
        }
    });
}); })();
function desc() {
    console.log('\n\n');
    for (var _i = 0, elements_2 = elements; _i < elements_2.length; _i++) {
        var ele = elements_2[_i];
        if (ele.level) {
            console.log("".concat(ele.name, "\uFF1A").concat(ele.desc));
        }
    }
}
