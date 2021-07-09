"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var dotenv = require("dotenv");
dotenv.config();
var CookieJDs = [];
// 判断环境变量里面是否有京东ck
if (process.env.JD_COOKIE) {
    if (process.env.JD_COOKIE.indexOf('&') > -1) {
        CookieJDs = process.env.JD_COOKIE.split('&');
    }
    else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
        CookieJDs = process.env.JD_COOKIE.split('\n');
    }
    else {
        CookieJDs = [process.env.JD_COOKIE];
    }
}
// @ts-ignore
CookieJDs = __spreadArray([], new Set(CookieJDs.filter(function (item) { return !!item; })));
console.log("\n====================\u5171" + CookieJDs.length + "\u4E2A\u4EAC\u4E1C\u8D26\u53F7Cookie=========\n");
console.log("==================\u811A\u672C\u6267\u884C- \u5317\u4EAC\u65F6\u95F4(UTC+8)\uFF1A" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString() + "=====================\n");
for (var i = 0; i < CookieJDs.length; i++) {
    if (!CookieJDs[i].match(/pt_pin=(.+?);/) || !CookieJDs[i].match(/pt_key=(.+?);/))
        console.log("\n\u63D0\u793A:\u4EAC\u4E1Ccookie \u3010" + CookieJDs[i] + "\u3011\u586B\u5199\u4E0D\u89C4\u8303,\u53EF\u80FD\u4F1A\u5F71\u54CD\u90E8\u5206\u811A\u672C\u6B63\u5E38\u4F7F\u7528\u3002\u6B63\u786E\u683C\u5F0F\u4E3A: pt_key=xxx;pt_pin=xxx;\uFF08\u5206\u53F7;\u4E0D\u53EF\u5C11\uFF09\n");
    var index = (i + 1 === 1) ? '' : (i + 1);
    exports['CookieJD' + index] = CookieJDs[i].trim();
}
