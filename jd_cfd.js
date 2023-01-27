"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var h5st_3_1_1 = require("./utils/h5st_3.1");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var Cfd = /** @class */ (function (_super) {
    __extends(Cfd, _super);
    function Cfd() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        return _this;
    }
    Cfd.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(this)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Cfd.prototype.api = function (fn, obj) {
        if (obj === void 0) { obj = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, body, h5stBody, _i, _a, key, _b, _c, params, _d, _e, key, data;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        timestamp = Date.now();
                        body = {
                            'strZone': 'jxbfd',
                            'bizCode': 'jxbfd',
                            'source': 'jxbfd',
                            'strDeviceId': this.token.strPhoneID,
                            'dwEnv': '7',
                            '_cfd_t': timestamp.toString(),
                            'ptag': '',
                            '_ste': '1',
                            '_': timestamp.toString(),
                            'sceneval': '2',
                            'g_login_type': '1',
                            'callback': "jsonpCBK".concat(this.getRandomWord()),
                            'g_ty': 'ls',
                            'appCode': 'msd1188198'
                        };
                        Object.assign(body, obj);
                        this._ombfd ? body['_imbfd'] = this._ombfd : '';
                        if (body['_stk'].includes('_imbfd') && (!this._ombfd || !body['_imbfd'])) {
                            console.log('h5st body 缺少 _imbfd');
                            process.exit(0);
                        }
                        h5stBody = {};
                        for (_i = 0, _a = body['_stk'].split(',').sort(); _i < _a.length; _i++) {
                            key = _a[_i];
                            h5stBody[key] = body[key];
                        }
                        _b = body;
                        _c = 'h5st';
                        return [4 /*yield*/, this.h5stTool.__genH5st(h5stBody)];
                    case 1:
                        _b[_c] = _f.sent();
                        params = '';
                        for (_d = 0, _e = Object.keys(body); _d < _e.length; _d++) {
                            key = _e[_d];
                            params += "".concat(key, "=").concat(body[key], "&");
                        }
                        return [4 /*yield*/, this.get("https://m.jingxi.com/jxbfd/".concat(fn, "?").concat(params), {
                                'Host': 'm.jingxi.com',
                                'User-Agent': this.user.UserAgent,
                                'Referer': 'https://st.jingxi.com/',
                                'cookie': this.user.cookie
                            })];
                    case 2:
                        data = _f.sent();
                        data = JSON.parse(data.match(/jsonpCBK.?.?\(([\w\W]*)\)/)[1]);
                        this._ombfd = data._ombfd || '';
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Cfd.prototype.main = function (user) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var res, data, _i, _b, xb, _c, _d, t, _e, _f, pick, _g, _h, strBuildIndex;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        this.user = user;
                        this.user.cookie += '; cid=4;';
                        this.user.UserAgent = "jdpingou;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;");
                        this.token = (0, TS_USER_AGENTS_1.getJxToken)(this.user.cookie);
                        this.h5stTool = new h5st_3_1_1.H5ST('92a36', this.user.UserAgent, (_a = process.env.FP_92A36) !== null && _a !== void 0 ? _a : "", 'https://st.jingxi.com/fortune_island/index2.html', 'https://st.jingxi.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _j.sent();
                        return [4 /*yield*/, this.api('user/QueryUserInfo', {
                                _stk: '_cfd_t,bizCode,ddwTaskId,dwEnv,dwIsReJoin,ptag,source,strDeviceId,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strVersion,strZone',
                                'ddwTaskId': '',
                                'strShareId': '',
                                'strMarkList': 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task,cfd_has_show_selef_point,choose_goods_has_show,daily_task_win,new_user_task_win,guider_new_user_task,guider_daily_task_icon,guider_nn_task_icon,tool_layer,new_ask_friend_m',
                                'strPgtimestamp': this.token.strPgtimestamp,
                                'strPhoneID': this.token.strPhoneID,
                                'strPgUUNum': this.token.strPgUUNum,
                                'strVersion': '1.0.1',
                                'dwIsReJoin': '0'
                            })];
                    case 2:
                        res = _j.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 3:
                        _j.sent();
                        _i = 0, _b = res.XbStatus.XBDetail;
                        _j.label = 4;
                    case 4:
                        if (!(_i < _b.length)) return [3 /*break*/, 8];
                        xb = _b[_i];
                        if (!(xb.dwRemainCnt && Date.now() > xb.ddwColdEndTm * 1000)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.api('user/TreasureHunt', {
                                _stk: '_cfd_t,_imbfd,bizCode,dwEnv,ptag,source,strDeviceId,strIndex,strZone',
                                strIndex: xb.strIndex
                            })];
                    case 5:
                        data = _j.sent();
                        console.log('寻宝', xb.strIndex, data.AwardInfo.ddwValue);
                        return [4 /*yield*/, this.wait(5000)];
                    case 6:
                        _j.sent();
                        _j.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 4];
                    case 8: return [4 /*yield*/, this.api('story/querystorageroom', {
                            _stk: '_cfd_t,_imbfd,bizCode,dwEnv,ptag,source,strDeviceId,strZone'
                        })];
                    case 9:
                        // 背包
                        res = _j.sent();
                        _c = 0, _d = res.Data.Office;
                        _j.label = 10;
                    case 10:
                        if (!(_c < _d.length)) return [3 /*break*/, 14];
                        t = _d[_c];
                        return [4 /*yield*/, this.api('story/sellgoods', {
                                _stk: '_cfd_t,_imbfd,bizCode,dwEnv,dwSceneId,ptag,source,strDeviceId,strTypeCnt,strZone',
                                dwSceneId: '1',
                                strTypeCnt: "".concat(t.dwType, ":").concat(t.dwCount)
                            })];
                    case 11:
                        data = _j.sent();
                        console.log('卖贝壳', data.Data.ddwCoin);
                        return [4 /*yield*/, this.wait(2000)];
                    case 12:
                        _j.sent();
                        _j.label = 13;
                    case 13:
                        _c++;
                        return [3 /*break*/, 10];
                    case 14: return [4 /*yield*/, this.api('story/queryshell', {
                            _stk: '_cfd_t,_imbfd,bizCode,dwEnv,ptag,source,strDeviceId,strZone'
                        })];
                    case 15:
                        // 贝壳
                        res = _j.sent();
                        return [4 /*yield*/, this.wait(1000)];
                    case 16:
                        _j.sent();
                        _e = 0, _f = res.Data.NormShell;
                        _j.label = 17;
                    case 17:
                        if (!(_e < _f.length)) return [3 /*break*/, 23];
                        pick = _f[_e];
                        _j.label = 18;
                    case 18:
                        if (!pick.dwNum) return [3 /*break*/, 22];
                        return [4 /*yield*/, this.api('story/pickshell', {
                                _stk: '_cfd_t,_imbfd,bizCode,dwEnv,dwType,ptag,source,strDeviceId,strZone',
                                dwType: pick.dwType
                            })];
                    case 19:
                        data = _j.sent();
                        console.log(data.Data.strFirstDesc);
                        return [4 /*yield*/, this.wait(2000)];
                    case 20:
                        _j.sent();
                        _j.label = 21;
                    case 21:
                        pick.dwNum--;
                        return [3 /*break*/, 18];
                    case 22:
                        _e++;
                        return [3 /*break*/, 17];
                    case 23:
                        _g = 0, _h = ['fun', 'shop', 'sea', 'food'];
                        _j.label = 24;
                    case 24:
                        if (!(_g < _h.length)) return [3 /*break*/, 28];
                        strBuildIndex = _h[_g];
                        return [4 /*yield*/, this.api('user/CollectCoin', {
                                _stk: '_cfd_t,_imbfd,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strDeviceId,strZone',
                                dwType: '1',
                                strBuildIndex: strBuildIndex
                            })];
                    case 25:
                        data = _j.sent();
                        console.log("".concat(strBuildIndex, "\u6536\u91D1\u5E01:"), data.ddwCoin);
                        return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                    case 26:
                        _j.sent();
                        _j.label = 27;
                    case 27:
                        _g++;
                        return [3 /*break*/, 24];
                    case 28: return [2 /*return*/];
                }
            });
        });
    };
    return Cfd;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Cfd().init().then();
