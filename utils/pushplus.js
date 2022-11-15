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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
exports.pushplus = void 0;
var axios_1 = require("axios");
var fs_1 = require("fs");
var account = [];
try {
    account = JSON.parse((0, fs_1.readFileSync)("./utils/account.json").toString());
}
catch (e) {
    console.log('utils/account.json load failed');
}
function pushplus(title, content, template) {
    if (template === void 0) { template = 'html'; }
    return __awaiter(this, void 0, void 0, function () {
        var token, _i, account_1, user, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    for (_i = 0, account_1 = account; _i < account_1.length; _i++) {
                        user = account_1[_i];
                        if (content.includes(decodeURIComponent(user.pt_pin)) && user.pushplus) {
                            token = user.pushplus;
                            break;
                        }
                    }
                    if (!token) {
                        console.log('no pushplus token');
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, axios_1["default"].post('https://www.pushplus.plus/send', {
                            token: token,
                            title: title,
                            content: content,
                            template: template
                        }, {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    if (data.code === 200) {
                        console.log('pushplus发送成功');
                    }
                    else {
                        console.log('pushplus发送失败', JSON.stringify(data));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.pushplus = pushplus;
