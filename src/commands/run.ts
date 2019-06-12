// tslint:disable

// import cp from "child_process";

import fs from "fs";
import {
  error,
  info,
  warn,
} from "prettycli";
import listPrompt from "../utils/list-prompt";
import {
  runArgumentI
} from "../types/run";
import chalk from 'chalk';

export default (projectName: string, argv: runArgumentI): void => {
  if (projectName === undefined) {
    warn(`Please mention the project name \n `);
    warn(`$ create-web-app run --help`);
    process.exit();
  }
  const {
    src
  } = argv;
  info("FINDING", `Finding your project ${projectName} in ${src}`);
  try {
    const isSrcExist: boolean = fs.lstatSync(src).isDirectory();
  } catch (errors) {
    error("[src] doesn't exist", {
      exit: false,
      silent: false
    });
    process.exit();
  }
  const templatePKG = require(process.cwd().trim() + `/${src}/${projectName}/package.json`);
  const {
    scripts
  } = templatePKG;

  listPrompt("scriptToRun", "List of scripts available to run ", Object.keys(scripts))
    .then((answer: {
      scriptToRun: string
    }): void => {
      const {
        scriptToRun
      } = answer;
      const command = `cd ${src}/${projectName}`;
      let options = ["npm", "run", scriptToRun]
      info("COOKING", ` Commands For You`);
      process.stdout.write(
        `
      ${chalk.italic.bold("Run the following commands")} \n
      $ ${chalk.yellow(command)}
      and then
      $ ${chalk.yellow(options.join(" "))}
      `)

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
