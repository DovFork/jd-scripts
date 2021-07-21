"use strict";
/**
 * 网络测试
 * 1、测试是否能访问助力池
 * 2、助力获取失败、没有统计到运行次数，很大可能因为访问api失败
 * 3、如果出现失败，自行更换设备dns
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
var notify = require('./sendNotify');
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cars, db, num, data, e_1, data, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("==================\u811A\u672C\u6267\u884C- \u5317\u4EAC\u65F6\u95F4(UTC+8)\uFF1A" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString() + "=====================\n");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 5]);
                cars = ['bean', 'farm', 'health', 'jxfactory', 'pet'];
                db = cars[getRandomNumberByRange(0, 5)];
                num = getRandomNumberByRange(5, 20);
                console.log("\u672C\u6B21\u968F\u673A\u9009\u62E9" + db + "\u83B7\u53D6" + num + "\u4E2A\u968F\u673A\u52A9\u529B\u7801");
                return [4 /*yield*/, axios_1["default"].get("https://api.sharecode.ga/api/" + db + "/" + num, { timeout: 10000 })];
            case 2:
                data = (_a.sent()).data;
                console.log(JSON.stringify(data, null, '  '));
                if (data.code === 200) {
                    if (data.data.length === num) {
                        console.log("\u6210\u529F\u83B7\u53D6" + num + "\u4E2A");
                    }
                }
                return [3 /*break*/, 5];
            case 3:
                e_1 = _a.sent();
                console.log('测试失败，请重试，或更换设备dns。');
                return [4 /*yield*/, notify.sendNotify("API访问失败！\n请检查网络或更换DNS", "手动测试：\nhttps://api.sharecode.ga/api/bean/10", "", "你好，世界！")];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5:
                _a.trys.push([5, 7, , 9]);
                return [4 /*yield*/, axios_1["default"].get("https://api.sharecode.ga/api/version", { timeout: 10000 })];
            case 6:
                data = (_a.sent()).data;
                console.log("\u5F53\u524D\u7248\u672C\uFF1A" + data);
                return [3 /*break*/, 9];
            case 7:
                e_2 = _a.sent();
                console.log('测试失败，请重试，或更换设备dns。');
                return [4 /*yield*/, notify.sendNotify("API访问失败！\n请检查网络或更换DNS", "手动测试：\nhttps://api.sharecode.ga/api/version", "", "你好，世界！")];
            case 8:
                _a.sent();
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); })();
function getRandomNumberByRange(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}
