/* eslint-disable */


const validate = (val : string): boolean | string => val.length > 0 ? true : "Please enter the name"


const questions : Array<Object> = [{
    type: "input",
    name: "projectName",
    message: "Please Enter Your Project Name [ Required ] :  ",
    validate
  },
  {
    type: "input",
    name: "description",
    message: "Please Enter your project description : ",
    default: "Awesome Project !!"
  },
  {
    type: "input",
    name: "author",
    message: "Please Enter your project author : ",
    default : " "
  },
  {
    type: "rawlist",
    name: "stack",
    message: "Please Select Project Stack [ Required ] : ",
    choices: [
      "MERN ==> MongoDB + Express + React + Node",
      "TMEN ==> Typescript + MongoDB + Express + Node",
      "MERNG ==> MongoDB + Express + React + Node + GraphQL (Not stable yet)"
    ],
    validate,
    filter : (val : string) : string => val.split("==>")[0].trim()
  },
  {
    type: "rawlist",
    name: "bundler",
    message: "Please Select Project bundler [ Required ] : ",
    choices: [
      "Webpack",
      "Parcel",
    ],
    validate
  },
  {
    default: "0.0.1",
    message: "Please Enter Version : ",
    name: "version",
    type: "input",
  },
  {
    default: "",
    message: "Please Enter Your Scaffold Github Repo for package.json file : ",
    name: "githubRepo",
    type: "input",
  },
  {
    default: "",
    message: "Please Enter Your Scaffold license for package.json file :",
    name: "license",
    type: "input",
  }

]


export default questions;
