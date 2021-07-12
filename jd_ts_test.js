"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
dotenv.config();
var CFD_HELP_HW = process.env.CFD_HELP_HW ? process.env.CFD_HELP_HW : false;
console.log('财富岛助力HelloWorld:', CFD_HELP_HW);
var CFD_HELP_POOL = process.env.CFD_HELP_POOL ? process.env.CFD_HELP_POOL : true;
console.log('财富岛帮助助力池:', CFD_HELP_POOL);
