"use strict";
/*
 * 当脚本内更新cron时，面板不需要删除已有cron，就能同步更新
 * cron: 0 0-23/2 * * *
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
var fs_1 = require("fs");
var child_process_1 = require("child_process");
var server = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var auth, bearer, netstat, port, taskName, cron, task;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                auth = JSON.parse((0, fs_1.readFileSync)(process.env.QL_DIR + "/config/auth.json").toString());
                bearer = auth.token;
                netstat = (0, child_process_1.execSync)("netstat -tnlp").toString();
                port = netstat.match(/.*0\.0\.0\.0:(\d+).*nginx\.conf/)[1];
                server = "127.0.0.1:" + port;
                taskName = "jd_jxmc.ts", cron = '0 */8 * * *';
                return [4 /*yield*/, get(taskName, bearer)];
            case 1:
                task = _a.sent();
                if (!(task && task.schedule !== cron)) return [3 /*break*/, 3];
                console.log("\u5F00\u59CB\u66F4\u65B0" + task.name + "\u7684cron");
                console.log('旧', task.schedule);
                console.log('新', cron);
                return [4 /*yield*/, set(task, bearer, cron)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                console.log('cron相同，忽略更新');
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); })();
function set(task, bearer, cron) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].put("http://" + server + "/api/crons?t=" + Date.now(), JSON.stringify({
                        "name": task.name, "command": task.command, "schedule": cron, "_id": task._id
                    }), {
                        headers: {
                            'Authorization': "Bearer " + bearer,
                            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36',
                            'Content-Type': 'application/json;charset=UTF-8'
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    if (data.code === 200) {
                        console.log(task.name + "\u7684cron\u66F4\u65B0\u6210\u529F");
                    }
                    else {
                        console.log('更新失败：', data);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function get(name, bearer) {
    return __awaiter(this, void 0, void 0, function () {
        var data, _i, _a, task;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("http://" + server + "/api/crons?searchValue=&t=" + Date.now(), {
                        headers: {
                            'Authorization': "Bearer " + bearer,
                            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36',
                            'Content-Type': 'application/json;charset=UTF-8'
                        }
                    })];
                case 1:
                    data = (_b.sent()).data;
                    for (_i = 0, _a = data.data; _i < _a.length; _i++) {
                        task = _a[_i];
                        if (task.name === name) {
                            return [2 /*return*/, task];
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
