#!/usr/bin/env node

import sade from "sade";
import notifier from "update-notifier";
import create from "./commands/create";
import list from "./commands/list";
import run from "./commands/run";
import { projectName } from "./utils/generator";

// tslint:disable-next-line: no-var-requires
const pkg = require("../package");
notifier({ pkg }).notify();

const prog = sade("cwa").version(pkg.version);

prog
  .command("list")
  .describe("List All The templates Available")
  .action(list);
prog
  .command("run [projectname]")
  .describe("[WIP] Gives the command to run the Project")
  .option("--src", "Please Mention the source if the default is changed","")
  .action(run);
prog
  .command("create")
  .describe("create a project passing the template and your project name")
  .action(create);

prog.parse(process.argv);
