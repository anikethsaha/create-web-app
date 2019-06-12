"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = require("inquirer");
exports.default = (name, message, choicesList) => inquirer_1.default
    .prompt({
    type: "list",
    name,
    message,
    choices: choicesList,
});
