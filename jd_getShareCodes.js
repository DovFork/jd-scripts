"use strict";
/**
 * cron 0 20 * * 6
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
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
    return __generator(this, function (_0) {
        switch (_0.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _0.sent();
                i = 0;
                _0.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 12];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                _b = (_a = console).log;
                _c = ['种豆得豆:'];
                return [4 /*yield*/, (0, shareCodesTool_1.bean)(cookie)];
            case 3:
                _b.apply(_a, _c.concat([_0.sent()]));
                _e = (_d = console).log;
                _f = ['东东农场:'];
                return [4 /*yield*/, (0, shareCodesTool_1.farm)(cookie)];
            case 4:
                _e.apply(_d, _f.concat([_0.sent()]));
                _h = (_g = console).log;
                _j = ['京东健康:'];
                return [4 /*yield*/, (0, shareCodesTool_1.health)(cookie)];
            case 5:
                _h.apply(_g, _j.concat([_0.sent()]));
                _l = (_k = console).log;
                _m = ['东东萌宠:'];
                return [4 /*yield*/, (0, shareCodesTool_1.pet)(cookie)];
            case 6:
                _l.apply(_k, _m.concat([_0.sent()]));
                _p = (_o = console).log;
                _q = ['东东工厂:'];
                return [4 /*yield*/, (0, shareCodesTool_1.factory)(cookie)];
            case 7:
                _p.apply(_o, _q.concat([_0.sent()]));
                _s = (_r = console).log;
                _t = ['京喜工厂:'];
                return [4 /*yield*/, (0, shareCodesTool_1.jxfactory)(cookie)];
            case 8:
                _s.apply(_r, _t.concat([_0.sent()]));
                _v = (_u = console).log;
                _w = ['闪购盲盒:'];
                return [4 /*yield*/, (0, shareCodesTool_1.sgmh)(cookie)];
            case 9:
                _v.apply(_u, _w.concat([_0.sent()]));
                _y = (_x = console).log;
                _z = ['领现金呀:'];
                return [4 /*yield*/, (0, shareCodesTool_1.cash)(cookie)];
            case 10:
                _y.apply(_x, _z.concat([_0.sent()]));
                _0.label = 11;
            case 11:
                i++;
                return [3 /*break*/, 2];
            case 12: return [2 /*return*/];
        }
    });
}); })();
