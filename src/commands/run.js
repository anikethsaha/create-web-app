"use strict";
// tslint:disable
Object.defineProperty(exports, "__esModule", { value: true });
// import cp from "child_process";
const fs_1 = require("fs");
const prettycli_1 = require("prettycli");
const list_prompt_1 = require("../utils/list-prompt");
const chalk_1 = require("chalk");
exports.default = (projectName, argv) => {
    if (projectName === undefined) {
        prettycli_1.warn(`Please mention the project name \n `);
        prettycli_1.warn(`$ create-web-app run --help`);
        process.exit();
    }
    const { src } = argv;
    prettycli_1.info("FINDING", `Finding your project ${projectName} in ${src}`);
    try {
        const isSrcExist = fs_1.default.lstatSync(src).isDirectory();
    }
    catch (errors) {
        prettycli_1.error("[src] doesn't exist", {
            exit: false,
            silent: false
        });
        process.exit();
    }
    const templatePKG = require(process.cwd().trim() + `/${src}/${projectName}/package.json`);
    const { scripts } = templatePKG;
    list_prompt_1.default("scriptToRun", "List of scripts available to run ", Object.keys(scripts))
        .then((answer) => {
        const { scriptToRun } = answer;
        const command = `cd ${src}/${projectName}`;
        let options = ["npm", "run", scriptToRun];
        prettycli_1.info("COOKING", ` Commands For You`);
        process.stdout.write(`
      ${chalk_1.default.italic.bold("Run the following commands")} \n
      $ ${chalk_1.default.yellow(command)}
      and then
      $ ${chalk_1.default.yellow(options.join(" "))}
      `);
        process.exit();
        /*
        [WIP] : To run the commands from here which are currently showing
        const cdExec = cp.spawn(command,[],{
                stdio: "inherit",
                shell: true
              })
              cdExec.on("exit",(code) => {
                if(code == 1){
                  error("Error while chaning the directory", {
                    exit: false,
                    silent: false
                  });
                  info("Alternate","Please run the following command \n")
                  info("$",`${command} && npm[or yarn] ${options.join(" ")}`)
                  process.exit();
                }
                info("RUNNING", `Running ${scriptToRun}`);
                const runExec = cp.spawn("npm",options,{
                  stdio: "inherit",
                  shell: true
                })
              })
        */
    });
};
