"use strict";
/**
 * cron: 59 23 * * 0
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
var shareCodesTool_1 = require("./utils/shareCodesTool");
var cookie = '', UserName, index;
var beans = '', farms = '', healths = '', pets = '', factorys = '', jxfactorys = '', sgmhs = '', s = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _a.sent();
                i = 0;
                _a.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 11];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, (0, shareCodesTool_1.bean)(cookie)];
            case 3:
                s = _a.sent();
                s ? beans += s + '&' : '';
                console.log('种豆得豆:', s);
                return [4 /*yield*/, (0, shareCodesTool_1.farm)(cookie)];
            case 4:
                s = _a.sent();
                s ? farms += s + '&' : '';
                console.log('东东农场:', s);
                return [4 /*yield*/, (0, shareCodesTool_1.health)(cookie)];
            case 5:
                s = _a.sent();
                s ? healths += s + '&' : '';
                console.log('京东健康:', s);
                return [4 /*yield*/, (0, shareCodesTool_1.pet)(cookie)];
            case 6:
                s = _a.sent();
                s ? pets += s + '&' : '';
                console.log('东东萌宠:', s);
                return [4 /*yield*/, (0, shareCodesTool_1.factory)(cookie)];
            case 7:
                s = _a.sent();
                s ? factorys += s + '&' : '';
                console.log('东东工厂:', s);
                return [4 /*yield*/, (0, shareCodesTool_1.jxfactory)(cookie)];
            case 8:
                s = _a.sent();
                s ? jxfactorys += s + '&' : '';
                console.log('京喜工厂:', s);
                return [4 /*yield*/, (0, shareCodesTool_1.sgmh)(cookie)];
            case 9:
                s = _a.sent();
                s ? sgmhs += s + '&' : '';
                console.log('闪购盲盒:', s);
                _a.label = 10;
            case 10:
                i++;
                return [3 /*break*/, 2];
            case 11:
                console.log('/bean', beans.substring(0, beans.length - 1));
                console.log('/farm', farms.substring(0, farms.length - 1));
                console.log('/health', healths.substring(0, healths.length - 1));
                console.log('/pet', pets.substring(0, pets.length - 1));
                console.log('/factory', factorys.substring(0, factorys.length - 1));
                console.log('/jxfactory', jxfactorys.substring(0, jxfactorys.length - 1));
                console.log('/sgmh', sgmhs.substring(0, sgmhs.length - 1));
                return [2 /*return*/];
        }
    });
}); })();
