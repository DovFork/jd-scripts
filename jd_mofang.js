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
var shareCodeSelf = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, sign, _i, _a, t, signDay, type, _b, _c, proInfo, _d, _e, proInfo, _f, _g, proInfo, _h, _j, proInfo;
    var _k, _l, _m, _o, _p;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _q.sent();
                i = 0;
                _q.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 32];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api("functionId=getInteractionHomeInfo&body=%7B%22sign%22%3A%22u6vtLQ7ztxgykLEr%22%7D&appid=content_ecology&client=wh5&clientVersion=1.0.0")];
            case 3:
                res = _q.sent();
                sign = res.result.taskConfig.projectId;
                return [4 /*yield*/, api("functionId=queryInteractiveInfo&body=%7B%22encryptProjectId%22%3A%22".concat(sign, "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 4:
                res = _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                _i = 0, _a = res.assignmentList;
                _q.label = 5;
            case 5:
                if (!(_i < _a.length)) return [3 /*break*/, 31];
                t = _a[_i];
                if (!(t.completionCnt < t.assignmentTimesLimit)) return [3 /*break*/, 30];
                if (!t.ext) return [3 /*break*/, 29];
                if (!(t.assignmentName === '每日签到')) return [3 /*break*/, 8];
                if (!(t.ext.sign1.status === 1)) return [3 /*break*/, 7];
                signDay = ((_k = t.ext.sign1.signList) === null || _k === void 0 ? void 0 : _k.length) || 0, type = t.rewards[signDay].rewardType;
                console.log(signDay, type);
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22".concat(sign, "%22%2C%22encryptAssignmentId%22%3A%22").concat(t.encryptAssignmentId, "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22itemId%22%3A%221%22%2C%22actionType%22%3A%22%22%2C%22completionFlag%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 6:
                res = _q.sent();
                console.log('签到成功', JSON.stringify(res));
                return [3 /*break*/, 8];
            case 7:
                console.log('已签到');
                _q.label = 8;
            case 8:
                _b = 0, _c = (_l = t.ext.productsInfo) !== null && _l !== void 0 ? _l : [];
                _q.label = 9;
            case 9:
                if (!(_b < _c.length)) return [3 /*break*/, 12];
                proInfo = _c[_b];
                if (!(proInfo.status === 1)) return [3 /*break*/, 11];
                console.log(t.assignmentName);
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=".concat(encodeURIComponent(JSON.stringify({ "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 0, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": (0, TS_USER_AGENTS_1.getRandomNumberByRange)(25468465, 87465139) }, "signStr": "".concat(Date.now(), "~0heuagd"), "sceneid": "XMFhPageh5" } })), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 10:
                res = _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                _q.label = 11;
            case 11:
                _b++;
                return [3 /*break*/, 9];
            case 12:
                _d = 0, _e = (_m = t.ext.shoppingActivity) !== null && _m !== void 0 ? _m : [];
                _q.label = 13;
            case 13:
                if (!(_d < _e.length)) return [3 /*break*/, 18];
                proInfo = _e[_d];
                if (!(proInfo.status === 1)) return [3 /*break*/, 17];
                console.log(t.assignmentName);
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=".concat(encodeURIComponent(JSON.stringify({ "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 1, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": (0, TS_USER_AGENTS_1.getRandomNumberByRange)(25468465, 87465135) }, "signStr": "".concat(Date.now(), "~1hj9fq9"), "sceneid": "XMFhPageh5" } })), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 14:
                res = _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.ext.waitDuration * 1000)];
            case 15:
                _q.sent();
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=".concat(encodeURIComponent(JSON.stringify({ "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": 0, "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": (0, TS_USER_AGENTS_1.getRandomNumberByRange)(25468465, 87465135) }, "signStr": "".concat(Date.now(), "~1hj9fq9"), "sceneid": "XMFhPageh5" } })), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 16:
                res = _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                _q.label = 17;
            case 17:
                _d++;
                return [3 /*break*/, 13];
            case 18:
                _f = 0, _g = (_o = t.ext.browseShop) !== null && _o !== void 0 ? _o : [];
                _q.label = 19;
            case 19:
                if (!(_f < _g.length)) return [3 /*break*/, 24];
                proInfo = _g[_f];
                if (!(proInfo.status === 1)) return [3 /*break*/, 23];
                console.log(t.assignmentName);
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22".concat(sign, "%22%2C%22encryptAssignmentId%22%3A%22").concat(t.encryptAssignmentId, "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22itemId%22%3A%22").concat(proInfo.itemId, "%22%2C%22actionType%22%3A1%2C%22completionFlag%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 20:
                res = _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.ext.waitDuration * 1000)];
            case 21:
                _q.sent();
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22".concat(sign, "%22%2C%22encryptAssignmentId%22%3A%22").concat(t.encryptAssignmentId, "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22itemId%22%3A%22").concat(proInfo.itemId, "%22%2C%22actionType%22%3A0%2C%22completionFlag%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 22:
                res = _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                _q.label = 23;
            case 23:
                _f++;
                return [3 /*break*/, 19];
            case 24:
                _h = 0, _j = (_p = t.ext.addCart) !== null && _p !== void 0 ? _p : [];
                _q.label = 25;
            case 25:
                if (!(_h < _j.length)) return [3 /*break*/, 28];
                proInfo = _j[_h];
                if (!(proInfo.status === 1)) return [3 /*break*/, 27];
                console.log(t.assignmentName);
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=".concat(encodeURIComponent(JSON.stringify({ "encryptProjectId": sign, "encryptAssignmentId": t.encryptAssignmentId, "sourceCode": "acexinpin0823", "itemId": proInfo.itemId, "actionType": "0", "completionFlag": "", "ext": {}, "extParam": { "businessData": { "random": (0, TS_USER_AGENTS_1.getRandomNumberByRange)(25468465, 87465135) }, "signStr": "".concat(Date.now(), "~1nvhqmd"), "sceneid": "XMFJGh5" } })), "&client=wh5&clientVersion=1.0.0&appid=content_ecology"))];
            case 26:
                res = _q.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                _q.label = 27;
            case 27:
                _h++;
                return [3 /*break*/, 25];
            case 28: return [3 /*break*/, 30];
            case 29:
                if (t.assignmentName === '去新品频道逛逛') {
                }
                _q.label = 30;
            case 30:
                _i++;
                return [3 /*break*/, 5];
            case 31:
                i++;
                return [3 /*break*/, 2];
            case 32: return [2 /*return*/];
        }
    });
}); })();
function api(params) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action", params, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/2bf3XEEyWG11pQzPGkKpKX2GxJz2/index.html',
                            'Origin': 'https://h5.m.jd.com',
                            'Host': 'api.m.jd.com',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
