#!/usr/bin/env node


import yeoman from "yeoman-environment";
import generator from "./generators/app/index";
const env = yeoman.createEnv();

const projectName : any = "create-web-app";

env.registerStub(generator,projectName);

env.run(projectName);
