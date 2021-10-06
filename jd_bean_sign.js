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
var child_process_1 = require("child_process");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var notify = require('./sendNotify'), message = '';
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var cookiesArr, cookiesNobyDa, i, data, e_1, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
                case 1:
                    cookiesArr = _a.sent();
                    cookiesNobyDa = [];
                    for (i = 0; i < cookiesArr.length; i++) {
                        cookiesNobyDa.push({ cookie: cookiesArr[i] });
                    }
                    data = '';
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 9]);
                    return [4 /*yield*/, axios_1["default"].get('https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js', { timeout: 5000 })];
                case 3:
                    data = _a.sent();
                    data = data.data;
                    console.log('raw');
                    return [3 /*break*/, 9];
                case 4:
                    e_1 = _a.sent();
                    _a.label = 5;
                case 5:
                    _a.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, axios_1["default"].get('https://ghproxy.com/https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js', { timeout: 10000 })];
                case 6:
                    data = _a.sent();
                    data = data.data;
                    console.log('ghproxy');
                    return [3 /*break*/, 8];
                case 7:
                    e_2 = _a.sent();
                    data = '非脚本问题！网络错误，访问github失败';
                    return [3 /*break*/, 8];
                case 8: return [3 /*break*/, 9];
                case 9:
                    if (data.indexOf('京东多合一签到脚本') > -1) {
                        data = data.replace('var OtherKey = ``;', "var OtherKey = `" + JSON.stringify(cookiesNobyDa) + "`;");
                        (0, fs_1.writeFileSync)('./sign.js', data, 'utf-8');
                        (0, child_process_1.execSync)('node ./sign.js >> ./sign.log');
                        data = (0, fs_1.readFileSync)('./sign.log', 'utf-8');
                        data = data.match(/【.*/gm);
                        message += data.join('\n').replace(/红包/g, '红包\n\n');
                        (0, fs_1.unlinkSync)('./sign.js');
                        (0, fs_1.unlinkSync)('./sign.log');
                    }
                    return [4 /*yield*/, notify.sendNotify('京东多合一签到脚本 via NobyDa@Github', message)];
                case 10:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main().then();
