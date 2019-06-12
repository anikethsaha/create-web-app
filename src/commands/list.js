"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const glob = require("glob-all");
const path = require("path");
exports.default = () => {
    // tslint:disable-next-line: no-console
    process.stdout.write(`\n${chalk_1.default.bgGreen.bold(`List of All Templates Available`)} \n`);
    const listTemplate = glob.sync(`${path.resolve(__dirname + "../../generators/app/templates").trim()}/*`)
        .map((p, i) => process.stdout.write(`${i} ${p.split("/").pop()} \n`));
};
