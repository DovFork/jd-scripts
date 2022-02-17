"use strict";
/**
 * Usage: jd_bean_change_diy [options]
 *
 * Options:
 *   -V, --version           output the version number
 *   -i, --index <index>     Cookie index (default: "1")
 *   -i0 --in <in>           今日收入 (default: "18")
 *   -i1 --yIn <yIn>         昨日收入 (default: "2")
 *   -o1 --yOut <yOut>       昨日支出 (default: "0")
 *   -b --balance <balance>  当前京豆 (default: "27793")
 *   -h, --help              display help for command
 *
 * ts-node jd_bean_change_diy.ts -i 1 -i0 50 -i1 85 -o1 0 -b 9527
 *
 * cron: 0 0 1 1 *
 */
exports.__esModule = true;
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var commander_1 = require("commander");
var sendNotify_1 = require("./sendNotify");
var program = new commander_1.Command();
program.version('0.0.1')
    .option('-i, --index <index>', 'Cookie index', '1')
    .option('-i0 --in <in>', '今日收入', (0, TS_USER_AGENTS_1.getRandomNumberByRange)(0, 50).toString())
    .option('-i1 --yIn <yIn>', '昨日收入', (0, TS_USER_AGENTS_1.getRandomNumberByRange)(0, 50).toString())
    .option('-o1 --yOut <yOut>', '昨日支出', '0')
    .option('-b --balance <balance>', '当前京豆', (0, TS_USER_AGENTS_1.getRandomNumberByRange)(3000, 30000).toString())
    .parse(process.argv);
var options = program.opts();
console.log(options);
var msg = "\u8D26\u53F7".concat(options.index, "\uFF1Ajd_").concat((0, TS_USER_AGENTS_1.randomWord)(10).toLowerCase(), "\n\u4ECA\u65E5\u6536\u5165\uFF1A").concat(options["in"], "\u4EAC\u8C46\n\u6628\u65E5\u6536\u5165\uFF1A").concat(options.yIn, "\u4EAC\u8C46\n\u6628\u65E5\u652F\u51FA\uFF1A").concat(options.yOut, "\u4EAC\u8C46\n\u5F53\u524D\u4EAC\u8C46\uFF1A").concat(options.balance, "(\u4ECA\u65E5\u8FC7\u671F0\u4EAC\u8C46)");
(0, sendNotify_1.sendNotify)('京东资产变动通知', msg).then();
