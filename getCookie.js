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
var _a;
exports.__esModule = true;
/**
 * 推送CK，默认否
 * export PUSH_COOKIE=true
 */
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var qrcode = require('qrcode-terminal');
var notify = require('./sendNotify');
var USER_AGENT = 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5 UCBrowser/13.4.2.1122';
var PUSH_COOKIE = (_a = process.env.PUSH_COOKIE) !== null && _a !== void 0 ? _a : "false";
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var config, _a, headers, data, s_token, setCookie, _i, _b, h, guid, lsid, lstoken, cookies, body, res, token, okl_token, url, code, _c, _d, h;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                config = {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json, text/plain, */*',
                        'Referer': 'https://plogin.m.jd.com/login/login?appid=300&returnurl=https://wq.jd.com/passport/LoginRedirect?state=${Date.now()}&returnurl=https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action&source=wq_passport',
                        'User-Agent': USER_AGENT,
                        'Host': 'plogin.m.jd.com'
                    }
                };
                return [4 /*yield*/, axios_1["default"].get("https://plogin.m.jd.com/cgi-bin/mm/new_login_entrance?lang=chs&appid=300&returnurl=https://wq.jd.com/passport/LoginRedirect?state=" + Date.now() + "&returnurl=https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action&source=wq_passport", config)];
            case 1:
                _a = _e.sent(), headers = _a.headers, data = _a.data;
                s_token = data['s_token'];
                setCookie = '';
                for (_i = 0, _b = headers['set-cookie']; _i < _b.length; _i++) {
                    h = _b[_i];
                    setCookie += h + ';';
                }
                guid = setCookie.match(/guid=([^;]*)/)[1];
                lsid = setCookie.match(/lsid=([^;]*)/)[1];
                lstoken = setCookie.match(/lstoken=([^;]*)/)[1];
                cookies = "guid=" + guid + ";lang=chs;lsid=" + lsid + ";lstoken=" + lstoken + ";";
                config.headers.cookie = cookies;
                body = { 'lang': 'chs', 'appid': '300', 'returnurl': "https://wqlogin2.jd.com/passport/LoginRedirect?state=" + Date.now() + "&returnurl=//home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action", 'source': 'wq_passport' };
                return [4 /*yield*/, axios_1["default"].post("https://plogin.m.jd.com/cgi-bin/m/tmauthreflogurl?s_token=" + s_token + "&v=" + Date.now() + "&remember=true", encodeURIComponent(JSON.stringify(body)), config).then(function (res) {
                        return res;
                    })];
            case 2:
                res = _e.sent();
                token = res.data.token;
                okl_token = res.headers['set-cookie'][0].match(/okl_token=([^;]*)/)[1];
                url = "https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=" + token;
                console.log(url);
                qrcode.generate(url, { small: true });
                _e.label = 3;
            case 3:
                if (!1) return [3 /*break*/, 10];
                return [4 /*yield*/, axios_1["default"].post("https://plogin.m.jd.com/cgi-bin/m/tmauthchecktoken?&token=" + token + "&ou_state=0&okl_token=" + okl_token, "lang=chs&appid=300&source=wq_passport&returnurl=https://wqlogin2.jd.com/passport/LoginRedirect?state=" + Date.now() + "&returnurl=//home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action", {
                        headers: {
                            'Referer': "https://plogin.m.jd.com/login/login?appid=300&returnurl=https://wqlogin2.jd.com/passport/LoginRedirect?state=" + Date.now() + "&returnurl=//home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action&source=wq_passport",
                            'Cookie': cookies,
                            'Connection': 'Keep-Alive',
                            'Content-Type': 'application/x-www-form-urlencoded; Charset=UTF-8',
                            'Accept': 'application/json, text/plain, */*',
                            'User-Agent': USER_AGENT
                        }
                    }).then(function (res) {
                        return res;
                    })];
            case 4:
                res = _e.sent();
                console.log(JSON.stringify(res.data));
                code = res.data.errcode;
                if (!(code === 0)) return [3 /*break*/, 7];
                console.log('Cookie获取成功\n');
                for (_c = 0, _d = res.headers['set-cookie']; _c < _d.length; _c++) {
                    h = _d[_c];
                    setCookie += h + ';';
                }
                cookies = setCookie.match(/(pt_key=\S*)/)[1] + setCookie.match(/(pt_pin=\S*)/)[1];
                console.log(cookies);
                console.log('\n哪个死妈东西说扫了此脚本被偷ck的？100行不到的代码你告诉我哪里是泄漏你ck的？');
                if (!(PUSH_COOKIE === "true")) return [3 /*break*/, 6];
                return [4 /*yield*/, notify.sendNotify('Cookie', cookies + '\n\n哪个死妈东西说扫了此脚本被偷ck的？100行不到的代码你告诉我哪里是泄漏你ck的？', '', '\n\n你好，世界！')];
            case 5:
                _e.sent();
                _e.label = 6;
            case 6: return [3 /*break*/, 10];
            case 7:
                if (code === 21) {
                    console.log('二维码失效');
                    return [3 /*break*/, 10];
                }
                else if (code === 176) {
                }
                else {
                    console.log('Error:', JSON.stringify(res.data));
                    return [3 /*break*/, 10];
                }
                _e.label = 8;
            case 8: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 9:
                _e.sent();
                return [3 /*break*/, 3];
            case 10: return [2 /*return*/];
        }
    });
}); })();
