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
exports.geth5st = exports.requestAlgo = void 0;
var axios_1 = require("axios");
var date_fns_1 = require("date-fns");
var CryptoJS = require('crypto-js');
var fp = '', tk = '', genKey = null;
function getRandomIDPro() {
    var e, a = 10, n = 'number', i = '';
    switch (n) {
        case 'alphabet':
            e = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            break;
        case 'max':
            e = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
            break;
        case 'number':
        default:
            e = '0123456789';
    }
    for (; a--;)
        i += e[(Math.random() * e.length) | 0];
    return i;
}
function requestAlgo(appId, USER_AGENT) {
    return __awaiter(this, void 0, void 0, function () {
        var s, a, u, c, ss, _i, _a, i, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    s = "", a = "0123456789", u = a, c = (Math.random() * 10) | 0;
                    do {
                        ss = getRandomIDPro() + "";
                        if (s.indexOf(ss) == -1)
                            s += ss;
                    } while (s.length < 3);
                    for (_i = 0, _a = s.slice(); _i < _a.length; _i++) {
                        i = _a[_i];
                        u = u.replace(i, '');
                    }
                    fp = getRandomIDPro() + "" + s + getRandomIDPro() + c + "";
                    return [4 /*yield*/, axios_1["default"].post("https://cactus.jd.com/request_algo?g_ty=ajax", "{\"version\":\"3.0\",\"fp\":\"".concat(fp, "\",\"appId\":\"").concat(appId, "\",\"timestamp\":").concat(Date.now(), ",\"platform\":\"web\",\"expandParams\":\"\"}"), {
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                "Accept-Encoding": "gzip, deflate, br",
                                "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
                                'Origin': 'https://prodev.m.jd.com',
                                'Referer': 'https://prodev.m.jd.com/',
                                'User-Agent': USER_AGENT
                            }
                        })];
                case 1:
                    data = (_b.sent()).data;
                    tk = data.data.result.tk;
                    genKey = new Function("return ".concat(data.data.result.algo))();
                    return [2 /*return*/];
            }
        });
    });
}
exports.requestAlgo = requestAlgo;
function geth5st(t, appId) {
    var a = t.map(function (e) {
        return e["key"] + ":" + e["value"];
    })["join"]("&");
    var time = Date.now();
    var timestamp = (0, date_fns_1.format)(time, "yyyyMMddhhmmssSSS");
    var hash1 = genKey(tk, fp.toString(), timestamp.toString(), appId.toString(), CryptoJS).toString();
    var hash2 = CryptoJS.HmacSHA256(a, hash1.toString()).toString();
    return ["".concat(timestamp.toString()), "".concat(fp.toString()), "".concat(appId.toString()), "".concat(tk), "".concat(hash2), "3.0", "".concat(time.toString())].join(";");
}
exports.geth5st = geth5st;
