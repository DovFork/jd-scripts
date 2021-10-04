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
/**
 * 用sendNotify推送通知
 * 主要用于自爆通知，及时推送给不常上tg的
 * cron: 0 0-23/1 * * *
 */
var sendNotify_1 = require("./sendNotify");
var dotenv = require("dotenv");
var fs_1 = require("fs");
dotenv.config();
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var env, lastMsg, latestMsg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                env = '';
                try {
                    (0, fs_1.accessSync)('.env');
                    env = (0, fs_1.readFileSync)('.env').toString();
                }
                catch (e) {
                    (0, fs_1.writeFileSync)('.env', '');
                }
                lastMsg = process.env.ImportantNotify || '';
                latestMsg = '2021-10-04  自爆了，重新提交';
                if (!(lastMsg !== latestMsg)) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, sendNotify_1.sendNotify)("@所有人", latestMsg)];
            case 1:
                _a.sent();
                if (env.indexOf('ImportantNotify') > -1)
                    env = env.replace(/ImportantNotify.*/, "ImportantNotify='" + latestMsg + "'");
                else
                    env += "ImportantNotify='" + latestMsg + "'\n";
                (0, fs_1.writeFileSync)('.env', env);
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); })();
/*
const config = {}
if (process.env.TG_PROXY_HOST && process.env.TG_PROXY_PORT) {
  config.httpsAgent = tunnel.httpsOverHttp({
    proxy: {
      host: '127.0.0.1',
      port: '1080',
    },
  });
}


axios.get("https://api.sharecode.ga/api/notify", {timeout: 10000})
  .then(async (res) => {
    let obj = res.data
    if (obj.time !== lastPush) {
      // 有新提醒
      await notify.sendNotify(`@所有人\n\n${obj.title}`, obj.content, '', '\n\n你好，世界！')
      fs.writeFileSync('./notify.log', obj.time + '', 'utf-8')
    }
  })
  .catch(() => {
    console.log('error')
  })
*/
