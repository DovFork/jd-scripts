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
var TS_USER_AGENTS_2 = require("./TS_USER_AGENTS");
var notify = require('./sendNotify');
var cookie = '', UserName, index, message = '';
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var cookiesArr, i, _a, isLogin, nickName, data, e_1, e_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
                case 1:
                    cookiesArr = _b.sent();
                    i = 0;
                    _b.label = 2;
                case 2:
                    if (!(i < cookiesArr.length)) return [3 /*break*/, 15];
                    cookie = cookiesArr[i];
                    UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                    index = i + 1;
                    return [4 /*yield*/, (0, TS_USER_AGENTS_2.TotalBean)(cookie)];
                case 3:
                    _a = _b.sent(), isLogin = _a.isLogin, nickName = _a.nickName;
                    if (!isLogin) {
                        notify.sendNotify(__filename.split('/').pop(), "cookie\u5DF2\u5931\u6548\n\u4EAC\u4E1C\u8D26\u53F7" + index + "\uFF1A" + (nickName || UserName));
                        return [3 /*break*/, 14];
                    }
                    console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + (nickName || UserName) + "\n");
                    data = void 0;
                    _b.label = 4;
                case 4:
                    _b.trys.push([4, 6, , 11]);
                    return [4 /*yield*/, axios_1["default"].get('https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js', { timeout: 5000 })];
                case 5:
                    data = _b.sent();
                    data = data.data;
                    return [3 /*break*/, 11];
                case 6:
                    e_1 = _b.sent();
                    _b.label = 7;
                case 7:
                    _b.trys.push([7, 9, , 10]);
                    return [4 /*yield*/, axios_1["default"].get('https://ghproxy.com/https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js', { timeout: 10000 })];
                case 8:
                    data = _b.sent();
                    data = data.data;
                    return [3 /*break*/, 10];
                case 9:
                    e_2 = _b.sent();
                    data = '非脚本问题！网络错误，访问github失败';
                    return [3 /*break*/, 10];
                case 10: return [3 /*break*/, 11];
                case 11:
                    if (!(data.indexOf('京东多合一签到脚本') > -1)) return [3 /*break*/, 12];
                    data = data.replace("var Key = ''", "var Key = '" + cookie + "'").replace(/qRKHmL4sna8ZOP9F/g, "RtKLB8euDo7KwsO0");
                    (0, fs_1.writeFileSync)('./sign.js', data, 'utf-8');
                    (0, child_process_1.execSync)('node ./sign.js>>./sign.log');
                    data = (0, fs_1.readFileSync)('./sign.log', 'utf-8');
                    message += data.replace(/(\n京东现金[\S|\s]*^)【签到/mg, '【签到');
                    (0, fs_1.unlinkSync)('./sign.js');
                    (0, fs_1.unlinkSync)('./sign.log');
                    return [3 /*break*/, 14];
                case 12: return [4 /*yield*/, notify.sendNotify("\u591A\u5408\u4E00\u7B7E\u5230  " + UserName, data, '', '\n\n你好，世界！')];
                case 13:
                    _b.sent();
                    _b.label = 14;
                case 14:
                    i++;
                    return [3 /*break*/, 2];
                case 15: return [4 /*yield*/, notify.sendNotify('JD签到All in One', message, '', '\n\n你好，世界！')];
                case 16:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main().then();
