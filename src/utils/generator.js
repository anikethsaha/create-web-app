"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yeoman_environment_1 = require("yeoman-environment");
const index_1 = require("../../generators/app/index");
const env = yeoman_environment_1.default.createEnv();
exports.projectName = "create-web-app";
env.registerStub(index_1.default, exports.projectName);
exports.default = env;
