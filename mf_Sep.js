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
var cookie = '', res = '', UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, taskPoolId, _i, _a, t, _b, _c, t, _d, _e, t;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _f.sent();
                i = 0;
                _f.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 21];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                return [4 /*yield*/, view("getInteractionInfo", { sign: 3 })];
            case 3:
                res = _f.sent();
                taskPoolId = res.result.taskPoolInfo.taskPoolId;
                _i = 0, _a = res.result.taskPoolInfo.taskList[1].taskGroupList;
                _f.label = 4;
            case 4:
                if (!(_i < _a.length)) return [3 /*break*/, 8];
                t = _a[_i];
                console.log(t);
                return [4 /*yield*/, view("executeNewInteractionTask", { "sign": 3, "interactionId": 316, "taskPoolId": taskPoolId, "taskType": 2004, "advertId": t })];
            case 5:
                res = _f.sent();
                console.log(res);
                if (res.result.isLottery !== 0)
                    return [3 /*break*/, 8];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 6:
                _f.sent();
                _f.label = 7;
            case 7:
                _i++;
                return [3 /*break*/, 4];
            case 8: return [4 /*yield*/, queryPanamaPage()];
            case 9:
                res = _f.sent();
                _b = 0, _c = res.floorList[2].data.head.list;
                _f.label = 10;
            case 10:
                if (!(_b < _c.length)) return [3 /*break*/, 14];
                t = _c[_b];
                console.log(t.skuId);
                return [4 /*yield*/, view("executeNewInteractionTask", { "sign": 3, "interactionId": 316, "taskPoolId": taskPoolId, "taskType": 2002, "sku": t.skuId, "advertId": "16735055" })];
            case 11:
                res = _f.sent();
                console.log(res);
                if (res.result.isLottery !== 0)
                    return [3 /*break*/, 14];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 12:
                _f.sent();
                _f.label = 13;
            case 13:
                _b++;
                return [3 /*break*/, 10];
            case 14: return [4 /*yield*/, view("getInteractionInfo", { sign: 3 })];
            case 15:
                res = _f.sent();
                _d = 0, _e = res.result.taskPoolInfo.taskList[2].taskGroupList;
                _f.label = 16;
            case 16:
                if (!(_d < _e.length)) return [3 /*break*/, 20];
                t = _e[_d];
                console.log(t);
                return [4 /*yield*/, view("executeNewInteractionTask", { "sign": 3, "interactionId": 316, "taskPoolId": taskPoolId, "taskType": 2006, "advertId": t })];
            case 17:
                res = _f.sent();
                console.log(res);
                if (res.result.isLottery !== 0)
                    return [3 /*break*/, 20];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 18:
                _f.sent();
                _f.label = 19;
            case 19:
                _d++;
                return [3 /*break*/, 16];
            case 20:
                i++;
                return [3 /*break*/, 2];
            case 21: return [2 /*return*/];
        }
    });
}); })();
function view(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action", "functionId=" + fn + "&body=" + JSON.stringify(body) + "&client=wh5&clientVersion=10.1.4&appid=content_ecology&eufv=false&t=" + Date.now(), {
                        headers: {
                            'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/2umkvbpZCUtyN6gcymN88ew8WLeU/index.html',
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://h5.m.jd.com',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
function queryPanamaPage() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://api.m.jd.com/client.action?eufv=false&clientVersion=10.1.4&client=wh5&osVersion=&functionId=queryPanamaPage&body=%7B%22activityId%22%3A%222umkvbpZCUtyN6gcymN88ew8WLeU%22%2C%22dynamicParam%22%3A%7B%7D%2C%22geo%22%3A%7B%22lng%22%3A%220.000000%22%2C%22lat%22%3A%220.000000%22%7D%2C%22previewTime%22%3A%22%22%7D", {
                        headers: {
                            'Origin': 'https://h5.m.jd.com',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Host': 'api.m.jd.com',
                            'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/2umkvbpZCUtyN6gcymN88ew8WLeU/index.html',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
