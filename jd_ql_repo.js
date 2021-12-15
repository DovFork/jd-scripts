"use strict";
/**
 * ql repo JDHelloWorld
 * cron: 0 * * * *
 */
exports.__esModule = true;
var child_process_1 = require("child_process");
if (process.env.HOSTNAME === 'qinglong') {
    var exec = (0, child_process_1.execSync)('ql repo https://github.com/JDHelloWorld/jd_scripts.git "jd_|jx_" "backUp|update" "^jd[^_]|USER|^TS|utils"').toString();
    console.log(exec);
}
