#!/usr/bin/env node







// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
// Save the require from previous bundle to this closure if any
var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
var nodeRequire = typeof require === 'function' && require;
function newRequire(name, jumped) {
if (!cache[name]) {
if (!modules[name]) {
// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
if (!jumped && currentRequire) {
return currentRequire(name, true);
}
// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if (previousRequire) {
return previousRequire(name, true);
}
// Try the node require function if it exists.
if (nodeRequire && typeof name === 'string') {
return nodeRequire(name);
}
var err = new Error('Cannot find module \'' + name + '\'');
err.code = 'MODULE_NOT_FOUND';
throw err;
}
localRequire.resolve = resolve;
localRequire.cache = {};
var module = cache[name] = new newRequire.Module(name);
modules[name][0].call(module.exports, localRequire, module, module.exports, this);
}
return cache[name].exports;
function localRequire(x){
return newRequire(localRequire.resolve(x));
}
function resolve(x){
return modules[name][1][x] || x;
}
}
function Module(moduleName) {
this.id = moduleName;
this.bundle = newRequire;
this.exports = {};
}
newRequire.isParcelRequire = true;
newRequire.Module = Module;
newRequire.modules = modules;
newRequire.cache = cache;
newRequire.parent = previousRequire;
newRequire.register = function (id, exports) {
modules[id] = [function (require, module) {
module.exports = exports;
}, {}];
};
var error;
for (var i = 0; i < entry.length; i++) {
try {
newRequire(entry[i]);
} catch (e) {
// Save first error but execute all entries
if (!error) {
error = e;
}
}
}
if (entry.length) {
// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var mainExports = newRequire(entry[entry.length - 1]);
// CommonJS
if (typeof exports === "object" && typeof module !== "undefined") {
module.exports = mainExports;
// RequireJS
} else if (typeof define === "function" && define.amd) {
define(function () {
return mainExports;
});
// <script>
} else if (globalName) {
this[globalName] = mainExports;
}
}
// Override the current require with this new one
parcelRequire = newRequire;
if (error) {
// throw error from earlier, _after updating parcelRequire_
throw error;
}
return newRequire;
})({"generators/app/utils/questions.ts":[function(require,module,exports) {
"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", {
value: true
});
const validate = val => val.length > 0 ? true : "Please enter the name";
const questions = [{
type: "input",
name: "projectName",
message: "Please Enter Your Project Name [ Required ] :  ",
validate
}, {
type: "input",
name: "description",
message: "Please Enter your project description : ",
default: "Awesome Project !!"
}, {
type: "input",
name: "author",
message: "Please Enter your project author : ",
default: " "
}, {
type: "rawlist",
name: "stack",
message: "Please Select Project Stack [ Required ] : ",
choices: ["MERN ==> MongoDB + Express + React + Node", "MEN  ==> MongoDB + Express + Node", "TMEN ==> Typescript + MongoDB + Express + Node", "MERNG ==> MongoDB + Express + React + Node + GraphQL (Not stable yet)"],
validate,
filter: val => val.split("==>")[0].trim()
}, {
type: "rawlist",
name: "bundler",
message: "Please Select Project bundler [ Required ] : ",
choices: ["Webpack", "Parcel"],
validate
}, {
default: "0.0.1",
message: "Please Enter Version : ",
name: "version",
type: "input"
}, {
default: "",
message: "Please Enter Your Scaffold Github Repo for package.json file : ",
name: "githubRepo",
type: "input"
}, {
default: "",
message: "Please Enter Your Scaffold license for package.json file :",
name: "license",
type: "input"
}];
exports.default = questions;
},{}],"generators/app/utils/pkgjsonUtils.ts":[function(require,module,exports) {
"use strict";
var __importStar = this && this.__importStar || function (mod) {
if (mod && mod.__esModule) return mod;
var result = {};
if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
result["default"] = mod;
return result;
};
Object.defineProperty(exports, "__esModule", {
value: true
});
const _ = __importStar(require("lodash"));
exports.createPkgJsonWithWebpack = (pkgjsonFromTemplate, pkgjson) => {
/*
The present template for any Stack is build with webpack only
Return the same package.json for now
Can update it later in order when removing the default webpack configs from the template
Will do it when adding more bundlers like I dont know
*/
pkgjsonFromTemplate = _.assign(pkgjsonFromTemplate, pkgjson);
return pkgjsonFromTemplate;
};
exports.createPkgJsonWithParcel = (pkgjsonFromTemplate, pkgjson) => {
const scripts = {
"build:server": "parcel build --no-autoinstall  ./src/server/index.js --target node --out-dir ./bin --out-file server.js",
"build:client": "parcel build --no-autoinstall  ./src/client/index.js  --out-dir ./public/js/ --out-file app.bundle.js",
"watch:server": "parcel watch --no-autoinstall  ./src/server/index.js --target node --out-dir ./bin --out-file server.js",
"watch:client": "parcel watch --no-autoinstall  ./src/client/index.js  --out-dir ./public/js/ --out-file app.bundle.js",
"build": "npm run build:client && npm run build:server ",
"watch": "npm run watch:client && npm run watch:server "
};
pkgjsonFromTemplate.scripts = _.assignIn(pkgjsonFromTemplate.scripts, scripts);
pkgjsonFromTemplate.devDependencies = _.assignIn(pkgjsonFromTemplate.devDependencies, {
"parcel-bundler": "^1.12.3"
});
/*
Need to remove the hard-coded devDependecies in the [] which we need to omit
_.omit(pkgjsonFromTemplate.devDependencies,Object.keys(JSON.parse(/webpack/g.exec(JSON.stringify(pkgjsonFromTemplate.devDependencies)))))
*/
pkgjsonFromTemplate.devDependencies = _.omit(pkgjsonFromTemplate.devDependencies, ["webpack", "webpack-cli", "webpack-dev-server", "webpack-node-externals"]);
pkgjsonFromTemplate = _.assign(pkgjsonFromTemplate, pkgjson);
return pkgjsonFromTemplate;
};
},{}],"generators/app/index.ts":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
return new (P || (P = Promise))(function (resolve, reject) {
function fulfilled(value) {
try {
step(generator.next(value));
} catch (e) {
reject(e);
}
}
function rejected(value) {
try {
step(generator["throw"](value));
} catch (e) {
reject(e);
}
}
function step(result) {
result.done ? resolve(result.value) : new P(function (resolve) {
resolve(result.value);
}).then(fulfilled, rejected);
}
step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};
var __importDefault = this && this.__importDefault || function (mod) {
return mod && mod.__esModule ? mod : {
"default": mod
};
};
var __importStar = this && this.__importStar || function (mod) {
if (mod && mod.__esModule) return mod;
var result = {};
if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
result["default"] = mod;
return result;
};
Object.defineProperty(exports, "__esModule", {
value: true
});
const yeoman_generator_1 = __importDefault(require("yeoman-generator"));
const questions_1 = __importDefault(require("./utils/questions"));
const path = __importStar(require("path"));
const prettycli_1 = require("prettycli");
const fs = __importStar(require("fs"));
const pkgjsonUtils_1 = require("./utils/pkgjsonUtils");
const CFonts = __importStar(require("cfonts"));
class StarterGenerator extends yeoman_generator_1.default {
constructor(args, opts) {
super(args, opts);
CFonts.say('Create|Web App', {
font: 'simple3d',
align: 'left',
colors: ['yellowBright'],
background: 'transparent',
letterSpacing: 1,
lineHeight: 1,
space: true,
maxLength: '0'
});
}
prompting() {
return __awaiter(this, void 0, void 0, function* () {
const done = this.async(); // Have Yeoman greet the user.
return this.prompt(questions_1.default).then(answer => {
this.answers = answer;
const tmppkgjsonFromAnswer = {
name: answer.projectName,
author: answer.author,
license: answer.license,
description: answer.description,
repo: answer.githubRepo,
keywords: [answer.stack]
};
prettycli_1.loading("CREATING", "Cooking your project ! Please wait ...");
fs.readFile(`./generators/app/templates/${answer.stack}/package.json`, {
encoding: 'utf-8'
}, (err, data) => __awaiter(this, void 0, void 0, function* () {
if (err) {
prettycli_1.error("File Not Found, Internal Error.Please Report an issue");
return;
} else {
let pkgjsonFromTemplate = JSON.parse(data);
const {
bundler
} = answer;
pkgjsonFromTemplate = bundler == "Webpack" ? pkgjsonUtils_1.createPkgJsonWithWebpack(pkgjsonFromTemplate, tmppkgjsonFromAnswer) : bundler == "Parcel" ? pkgjsonUtils_1.createPkgJsonWithParcel(pkgjsonFromTemplate, tmppkgjsonFromAnswer) : pkgjsonFromTemplate; // Now will use this this.pkjson to write to the package.json file after copying of the files
this.pkgjson = Object.assign({}, pkgjsonFromTemplate);
done();
}
}));
});
});
}
writing() {
prettycli_1.info("DONE", "Copying your project.....");
this.fs.copy(this.templatePath(`../generators/app/templates/${this.answers.stack}`), this.destinationPath(path.resolve(__dirname, this.answers.projectName)));
prettycli_1.info("DONE", "Writing your dependencies and scripts.....");
this.fs.writeJSON(`${path.resolve(__dirname, this.answers.projectName)}/package.json`, this.pkgjson);
}
install() {
this.installDependencies({
npm: true,
bower: false
});
}
}
exports.default = StarterGenerator;
},{"./utils/questions":"generators/app/utils/questions.ts","./utils/pkgjsonUtils":"generators/app/utils/pkgjsonUtils.ts"}],"index.ts":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function (mod) {
return mod && mod.__esModule ? mod : {
"default": mod
};
};
Object.defineProperty(exports, "__esModule", {
value: true
});
const yeoman_environment_1 = __importDefault(require("yeoman-environment"));
const index_1 = __importDefault(require("./generators/app/index"));
const env = yeoman_environment_1.default.createEnv();
const projectName = "web-project-starter";
env.registerStub(index_1.default, projectName);
env.run(projectName);
},{"./generators/app/index":"generators/app/index.ts"}]},{},["index.ts"], null)
//# sourceMappingURL=/cli.js.map