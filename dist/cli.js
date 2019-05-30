#!/usr/bin/env node



parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ulVZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=e=>e.length>0||"Please enter the name",t=[{type:"input",name:"projectName",message:"Please Enter Your Project Name [ Required ] :  ",validate:e},{type:"input",name:"description",message:"Please Enter your project description : ",default:"Awesome Project !!"},{type:"input",name:"author",message:"Please Enter your project author : ",default:" "},{type:"rawlist",name:"stack",message:"Please Select Project Stack [ Required ] : ",choices:["MERN ==> MongoDB + Express + React + Node","TMEN ==> Typescript + MongoDB + Express + Node","MERNG ==> MongoDB + Express + React + Node + GraphQL (Not stable yet)"],validate:e,filter:e=>e.split("==>")[0].trim()},{type:"rawlist",name:"bundler",message:"Please Select Project bundler [ Required ] : ",choices:["Webpack","Parcel"],validate:e},{default:"0.0.1",message:"Please Enter Version : ",name:"version",type:"input"},{default:"",message:"Please Enter Your Scaffold Github Repo for package.json file : ",name:"githubRepo",type:"input"},{default:"",message:"Please Enter Your Scaffold license for package.json file :",name:"license",type:"input"}];exports.default=t;
},{}],"KCiF":[function(require,module,exports) {
"use strict";var e=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r.default=e,r};Object.defineProperty(exports,"__esModule",{value:!0});const r=e(require("lodash"));exports.createPkgJsonWithWebpack=((e,n)=>e=r.assign(e,n)),exports.createPkgJsonWithParcel=((e,n)=>{return e.scripts=r.assignIn(e.scripts,{"build:server":"parcel build --no-autoinstall  ./src/server/index.js --target node --out-dir ./bin --out-file server.js","build:client":"parcel build --no-autoinstall  ./src/client/index.js  --out-dir ./public/js/ --out-file app.bundle.js","watch:server":"parcel watch --no-autoinstall  ./src/server/index.js --target node --out-dir ./bin --out-file server.js","watch:client":"parcel watch --no-autoinstall  ./src/client/index.js  --out-dir ./public/js/ --out-file app.bundle.js",build:"npm run build:client && npm run build:server ",watch:"npm run watch:client && npm run watch:server "}),e.devDependencies=r.assignIn(e.devDependencies,{"parcel-bundler":"^1.12.3"}),e.devDependencies=r.omit(e.devDependencies,["webpack","webpack-cli","webpack-dev-server","webpack-node-externals"]),e=r.assign(e,n)});
},{}],"FXA6":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,s){function o(e){try{c(n.next(e))}catch(t){s(t)}}function a(e){try{c(n.throw(e))}catch(t){s(t)}}function c(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(o,a)}c((n=n.apply(e,t||[])).next())})},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(exports,"__esModule",{value:!0});const n=t(require("yeoman-generator")),i=t(require("./utils/questions")),s=r(require("path")),o=require("prettycli"),a=r(require("fs")),c=require("./utils/pkgjsonUtils"),u=r(require("cfonts"));class l extends n.default{constructor(e,t){super(e,t),u.say("Create|Web App",{font:"simple3d",align:"left",colors:["yellowBright"],background:"transparent",letterSpacing:1,lineHeight:1,space:!0,maxLength:"0"})}prompting(){return e(this,void 0,void 0,function*(){const t=this.async();return this.prompt(i.default).then(r=>{this.answers=r;const n={name:r.projectName,author:r.author,license:r.license,description:r.description,repo:r.githubRepo,keywords:[r.stack]};o.loading("CREATING","Cooking your project ! Please wait ..."),a.readFile(s.join(__dirname,`../generators/app/templates/${r.stack}/package.json`),{encoding:"utf-8"},(i,s)=>e(this,void 0,void 0,function*(){if(i)o.error("File Not Found, Internal Error.Please Report an issue");else{let e=JSON.parse(s);const{bundler:i}=r;e="Webpack"==i?c.createPkgJsonWithWebpack(e,n):"Parcel"==i?c.createPkgJsonWithParcel(e,n):e,this.pkgjson=Object.assign({},e),t()}}))})})}writing(){o.info("DONE","Copying your project....."),this.fs.copy(this.templatePath(s.join(__dirname,`../generators/app/templates/${this.answers.stack}`)),this.destinationPath(s.resolve(this.answers.projectName))),o.info("DONE","Writing your dependencies and scripts....."),this.fs.writeJSON(`${s.resolve(__dirname,this.answers.projectName)}/package.json`,this.pkgjson)}install(){this.installDependencies({npm:!0,bower:!1})}}exports.default=l;
},{"./utils/questions":"ulVZ","./utils/pkgjsonUtils":"KCiF"}],"7QCb":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const t=e(require("yeoman-environment")),r=e(require("./generators/app/index")),u=t.default.createEnv(),n="web-project-starter";u.registerStub(r.default,n),u.run(n);
},{"./generators/app/index":"FXA6"}]},{},["7QCb"], null)
//# sourceMappingURL=/cli.js.map