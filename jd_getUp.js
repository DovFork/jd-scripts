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
var notify = require('./sendNotify');
var cookie = '', cookiesArr, UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var i, _a, isLogin, nickName, data, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, TS_USER_AGENTS_1.requireConfig()];
            case 1:
                cookiesArr = _b.sent();
                i = 0;
                _b.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 8];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                return [4 /*yield*/, TS_USER_AGENTS_1.TotalBean(cookie)];
            case 3:
                _a = _b.sent(), isLogin = _a.isLogin, nickName = _a.nickName;
                if (!isLogin) {
                    notify.sendNotify(__filename.split('/').pop(), "cookie\u5DF2\u5931\u6548\n\u4EAC\u4E1C\u8D26\u53F7" + index + "\uFF1A" + (nickName || UserName));
                    return [3 /*break*/, 7];
                }
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + (nickName || UserName) + "\n");
                _b.label = 4;
            case 4:
                _b.trys.push([4, 6, , 7]);
                return [4 /*yield*/, axios_1["default"].get('https://api.m.jd.com/client.action?functionId=morningGetBean&area=22_1930_50948_52157&body=%7B%22rnVersion%22%3A%224.7%22%2C%22fp%22%3A%22-1%22%2C%22eid%22%3A%22%22%2C%22shshshfp%22%3A%22-1%22%2C%22userAgent%22%3A%22-1%22%2C%22shshshfpa%22%3A%22-1%22%2C%22referUrl%22%3A%22-1%22%2C%22jda%22%3A%22-1%22%7D&build=167724&client=apple&clientVersion=10.0.6&d_brand=apple&d_model=iPhone12%2C8&eid=eidI1aaf8122bas5nupxDQcTRriWjt7Slv2RSJ7qcn6zrB99mPt31yO9nye2dnwJ/OW%2BUUpYt6I0VSTk7xGpxEHp6sM62VYWXroGATSgQLrUZ4QHLjQw&isBackground=N&joycious=60&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=32280b23f8a48084816d8a6c577c6573c162c174&osVersion=14.4&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=0c19e5962cea97520c1ef9a2e67dda60&st=1625354180413&sv=112&uemps=0-0&uts=0f31TVRjBSsqndu4/jgUPz6uymy50MQJSPYvHJMKdY9TUw/AQc1o/DLA/rOTDwEjG4Ar9s7IY4H6IPf3pAz7rkIVtEeW7XkXSOXGvEtHspPvqFlAueK%2B9dfB7ZbI91M9YYXBBk66bejZnH/W/xDy/aPsq2X3k4dUMOkS4j5GHKOGQO3o2U1rhx5O70ZrLaRm7Jy/DxCjm%2BdyfXX8v8rwKw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=c99b216a4acd3bce759e369eaeeafd7', {
                        headers: {
                            'Cookie': cookie,
                            'Accept': '*/*',
                            'Connection': 'keep-alive',
                            'Accept-Encoding': 'gzip, deflate, br',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Accept-Language': 'zh-Hans-CN;q=1',
                            'Host': 'api.m.jd.com'
                        }
                    })];
            case 5:
                data = (_b.sent()).data;
                if (data.code === '0') {
                    data.data.awardResultFlag === '2'
                        ? console.log(data.data.bizMsg)
                        : console.log(data.data.bizMsg, data.data.beanNum);
                }
                return [3 /*break*/, 7];
            case 6:
                e_1 = _b.sent();
                console.log('Error:', e_1);
                return [3 /*break*/, 7];
            case 7:
                i++;
                return [3 /*break*/, 2];
            case 8: return [2 /*return*/];
        }
    });
}); })();
