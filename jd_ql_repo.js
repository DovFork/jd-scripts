"use strict";
/**
 * 🐉 ql repo
 * cron: 30 2 * * *
 */
exports.__esModule = true;
var child_process_1 = require("child_process");
if (process.env.HOSTNAME === 'qinglong' || process.env.QL_DIR) {
    process.chdir('../../repo/JDHelloWorld_jd_scripts/');
    (0, child_process_1.execSync)('git fetch --all; git reset --hard origin/main; git pull');
    (0, child_process_1.execSync)('ql repo https://github.com/JDHelloWorld/jd_scripts.git "jd_|jx_" "backUp" "^jd[^_]|USER|^TS|utils"');
}
