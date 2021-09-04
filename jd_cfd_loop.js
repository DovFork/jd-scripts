"use strict";
/**
 * 财富岛热气球挂后台
 * export CFD_LOOP_DELAY=20000  // 捡气球间隔时间，单位毫秒
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
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var dotenv = require("dotenv");
var crypto = require('crypto');
var fs = require('fs');
var notify = require('./sendNotify');
dotenv.config();
var cookie = '', res = '', balloon = 1;
process.env.CFD_LOOP_DELAY ? console.log('设置延迟:', parseInt(process.env.CFD_LOOP_DELAY)) : console.log('设置延迟:10000~25000随机');
var UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, filename, stream, fsHash, i, shell, _i, _a, s, j, e_1, t;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _b.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _b.sent();
                filename = __filename.split('/').pop();
                stream = fs.createReadStream(filename);
                fsHash = crypto.createHash('md5');
                stream.on('data', function (d) {
                    fsHash.update(d);
                });
                stream.on('end', function () {
                    var md5 = fsHash.digest('hex');
                    console.log(filename + "\u7684MD5\u662F:", md5);
                    if (filename.indexOf('JDHelloWorld_jd_scripts_') > -1) {
                        filename = filename.replace('JDHelloWorld_jd_scripts_', '');
                    }
                    axios_1["default"].get('https://api.sharecode.ga/api/md5?filename=' + filename, { timeout: 10000 })
                        .then(function (res) {
                        console.log('local: ', md5);
                        console.log('remote:', res.data);
                        if (md5 !== res.data) {
                            notify.sendNotify("Warning", filename + "\nMD5\u6821\u9A8C\u5931\u8D25\uFF01\u4F60\u7684\u811A\u672C\u7591\u4F3C\u88AB\u7BE1\u6539\uFF01");
                        }
                        else {
                            console.log('MD5校验通过！');
                        }
                    })["catch"](function () {
                    });
                });
                _b.label = 3;
            case 3:
                if (!1) return [3 /*break*/, 20];
                i = 0;
                _b.label = 4;
            case 4:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 18];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                _b.label = 5;
            case 5:
                _b.trys.push([5, 16, , 17]);
                if (!(balloon !== 500)) return [3 /*break*/, 7];
                return [4 /*yield*/, speedUp('_cfd_t,bizCode,dwEnv,ptag,source,strBuildIndex,strZone')];
            case 6:
                res = _b.sent();
                if (res.iRet !== 0) {
                    console.log('手动建造4个房子');
                    return [3 /*break*/, 17];
                }
                console.log('今日热气球:', res.dwTodaySpeedPeople);
                if (res.dwTodaySpeedPeople === 500) {
                    balloon = 500;
                }
                _b.label = 7;
            case 7: return [4 /*yield*/, speedUp('_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 8:
                shell = _b.sent();
                if (!shell.Data.hasOwnProperty('NormShell')) return [3 /*break*/, 15];
                _i = 0, _a = shell.Data.NormShell;
                _b.label = 9;
            case 9:
                if (!(_i < _a.length)) return [3 /*break*/, 15];
                s = _a[_i];
                j = 0;
                _b.label = 10;
            case 10:
                if (!(j < s.dwNum)) return [3 /*break*/, 14];
                return [4 /*yield*/, speedUp('_cfd_t,bizCode,dwEnv,dwType,ptag,source,strZone', s.dwType)];
            case 11:
                res = _b.sent();
                if (res.iRet !== 0) {
                    console.log(res);
                    return [3 /*break*/, 14];
                }
                console.log('捡贝壳:', res.Data.strFirstDesc);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(500)];
            case 12:
                _b.sent();
                _b.label = 13;
            case 13:
                j++;
                return [3 /*break*/, 10];
            case 14:
                _i++;
                return [3 /*break*/, 9];
            case 15: return [3 /*break*/, 17];
            case 16:
                e_1 = _b.sent();
                console.log(e_1);
                return [3 /*break*/, 17];
            case 17:
                i++;
                return [3 /*break*/, 4];
            case 18:
                t = process.env.CFD_LOOP_DELAY ? parseInt(process.env.CFD_LOOP_DELAY) : (0, TS_USER_AGENTS_1.getRandomNumberByRange)(1000 * 30, 1000 * 60);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t)];
            case 19:
                _b.sent();
                return [3 /*break*/, 3];
            case 20: return [2 /*return*/];
        }
    });
}); })();
function speedUp(stk, dwType) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var url, data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/jxbfd/user/SpeedUp?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&strBuildIndex=food&_ste=1&_=" + Date.now() + "&sceneval=2&_stk=" + encodeURIComponent(stk);
                    if (stk === '_cfd_t,bizCode,dwEnv,ptag,source,strZone')
                        url = "https://m.jingxi.com/jxbfd/story/queryshell?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&_stk=_cfd_t%2CbizCode%2CdwEnv%2Cptag%2Csource%2CstrZone&_ste=1&_=" + Date.now() + "&sceneval=2";
                    if (stk === '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strZone')
                        url = "https://m.jingxi.com/jxbfd/story/pickshell?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&dwType=" + dwType + "&_stk=_cfd_t%2CbizCode%2CdwEnv%2CdwType%2Cptag%2Csource%2CstrZone&_ste=1&_=" + Date.now() + "&sceneval=2";
                    url += '&h5st=' + (0, TS_USER_AGENTS_1.decrypt)(stk, url);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'Referer': 'https://st.jingxi.com/',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'Cookie': cookie
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    resolve(data);
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    reject(502);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
