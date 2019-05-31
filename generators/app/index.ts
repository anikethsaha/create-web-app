import Generator from "yeoman-generator";
import promptQuestions from "./utils/questions";
import * as path from 'path';
const {
  error,
  loading,
  info
} = require("prettycli")
import * as fs from 'fs';
import {
  IAnswer
} from './type/answer'
import {
  IPkgJson,
  IPkgJsonFromTemplate
} from './type/pkgjson';
import {
  createPkgJsonWithParcel,
  createPkgJsonWithWebpack
} from './utils/pkgjsonUtils'
const CFonts = require('cfonts');


export default class StarterGenerator extends Generator {
  private answers: IAnswer
  private pkgjson: IPkgJson



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
      maxLength: '0',
    });

  }
  public async prompting() {
    const done: () => {} = this.async();
    // Have Yeoman greet the user.

    return this.prompt(promptQuestions)
      .then(
        (answer: IAnswer) : void | PromiseLike<void> => {
          this.answers = answer;
          const tmppkgjsonFromAnswer: IPkgJson = {
            name: answer.projectName,
            author: answer.author,
            license: answer.license,
            description: answer.description,
            repo: answer.githubRepo,
            keywords: [answer.stack]
          }
          loading("CREATING", "Cooking your project ! Please wait ...")
          fs.readFile(
            path.join(__dirname,`../generators/app/templates/${answer.stack}/package.json`), {
              encoding: 'utf-8'
            },
            async (err, data) => {
              if (err) {
                error("File Not Found, Internal Error.Please Report an issue")
                return
              } else {
                let pkgjsonFromTemplate: IPkgJsonFromTemplate = JSON.parse(data)
                const {
                  bundler
                } = answer
                pkgjsonFromTemplate = bundler == "Webpack" ? createPkgJsonWithWebpack(pkgjsonFromTemplate, tmppkgjsonFromAnswer) : bundler == "Parcel" ? createPkgJsonWithParcel(pkgjsonFromTemplate, tmppkgjsonFromAnswer) : pkgjsonFromTemplate

                // Now will use this this.pkjson to write to the package.json file after copying of the files
                this.pkgjson = {
                  ...pkgjsonFromTemplate
                }
                done()
              }
            });
        });
  }


  public writing() {
    info("DONE", "Copying your project.....")


    this.fs.copy(
      this.templatePath(path.join(__dirname,`../generators/app/templates/${this.answers.stack}`)),
      this.destinationPath(path.resolve(this.answers.projectName))
    );
    info("DONE", "Writing your dependencies and scripts.....")

    this.fs.writeJSON(`${path.resolve(__dirname,this.answers.projectName)}/package.json`, this.pkgjson)

  }


  public install() {
    this.installDependencies({
      npm: true,
      bower: false,
    });
  }

}
