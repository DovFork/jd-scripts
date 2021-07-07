"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
fs_1.readFile('./validate.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
        if (err.message === "ENOENT: no such file or directory, open './validate.txt'") {
            console.log('找不到validate.txt');
        }
    }
    data = data.split('\n');
    data.pop();
    data.forEach(function (item, index) {
        console.log(++index, item);
    });
});
