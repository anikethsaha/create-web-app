> # :mega: Re-written of this package in a new project is coming. so no development are going to happen in this repo and package. Please refer [**plan for this project**](https://github.com/buildtip/create-web-app/issues/56)

<p align="center">

  <img alt="logo" src="https://imgur.com/8SkRVHP.png" width="230px" />

</p>
<p align="center">
<h2 align="center">Create Web App</h2>
</p>

<p align="center">
 <a href="https://travis-ci.org/buildtip/create-web-app">
    <img alt="Build Status" src="https://travis-ci.org/buildtip/create-web-app.svg?branch=master" />
 </a>
<a href="https://github.com/buildtip/create-web-app">
    <img alt="Lic" src="https://img.shields.io/github/license/buildtip/create-web-app.svg" />
 </a>
<a href="https://badge.fury.io/js/%40buildtip%2Fcreate-web-app">
    <img alt="NPM Version" src="https://badge.fury.io/js/%40buildtip%2Fcreate-web-app.svg" />
 </a>

<a href="https://www.npmjs.com/package/%40buildtip%2Fcreate-web-app">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/%40buildtip%2Fcreate-web-app.svg?style=flat" />
 </a>
<a href="https://gitter.im/create-web-app/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
    <img alt="Join the chat at https://gitter.im/create-web-app/community" src="https://badges.gitter.im/create-web-app/community.svg" />
 </a>

<a href="https://github.com/buildtip/create-web-app">
    <img alt="Renovate enabled" src="https://img.shields.io/badge/renovate-enabled-green.svg" />
 </a>

<a href="#contributors">
    <img alt="All Contributors" src="https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square" />
 </a>


</p>

### Donation

<a href="https://www.buymeacoffee.com/eydPs6n" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>


## Installation

```bash
# Recommended

$ npm i -g @buildtip/create-web-app
$ cwa

or
# If want to install and run it locally

$ npx @buildtip/create-web-app

```

## Usage
```bash
$ cwa --help

  Usage
    $ cwa <command> [options]

  Available Commands
    list      List All The templates Available
    run       [WIP] Gives the command to run the Project
    create    create a project passing the template and your project name

  For more info, run any command with the `--help` flag
    $ cwa list --help
    $ cwa run --help

  Options
    -v, --version    Displays current version
    -h, --help       Displays this message

```
## About :books:

This package is a **simple** node cli tool based on `yeoman generator` which when run will **simply** ask you some **simple** question and then will generate a **simple** starter project to kickstart you development

This is currently having starter project based on
1. **MERN** stack : MongoDB +  ExpressJS + ReactJS + NodeJS
2. **MERNG** stack :  MongoDB +  ExpressJS + ReactJS + NodeJS + GraphQL
3. **TMEN** :stuck_out_tongue_winking_eye: (Sorry for this wierd word) stack : Typescript +  MongoDB +  ExpressJS + NodeJS

And Many More Coming Soon ...

This project is focused on helping developers increasing their starting speed. These Boilerplates are light weight and proven ones.
More boilerplates are required for this project with different stacks.

**Do Contribute with this boilerplates and new ones.**

## Commands
### ` $ cwa list `
It lists the available Templates present as a project starters
```bash
$ cwa list --help
  Description
    List All The templates Available

  Usage
    $ cwa list [options]

  Options
    -h, --help    Displays this message

```



### ` $ cwa run [project-name] [--src]`
It will give the accurates commands to run the projects and it will list the available commands present in the projects scripts
```bash
$ cwa run --help
  Description
    [WIP] Run the Project

  Usage
    $ cwa run [projectname] [options]

  Options
    --src         Please Mention the source if the default is changed  (default )
    -h, --help    Displays this message
```
**[WIP]:** To run the command instead to displaying the steps

### ` $ cwa create `
It will run the generator which is creating the project based on few questions
```bash
$ cwa create --help
  Description
    create a project passing the template and your project name

  Usage
    $ create-web-app create [options]

  Options
    -h, --help    Displays this message


```

## Status :newspaper:

This project is at very early stage and requires lots of testing, feedbacks, suggestion, refactors ,Features, and improvement.
**Feel free to Raise an issue and PR**


## Contribution Guide :wrench:
Please refer [`CONTRIBUTING.md`](/CONTRIBUTING.md)

## How to Install and Use Locally

1. Clone It
2. `$ npm install`
3.
```bash


$ npm run type:build   # To build the typescript compiled
$ npm run type:watch   # Typescript in watch mode
$ npm run build        # To run the bundler to build the distributed compatable
$ npm run watch        # To run the bundler in watch mode


  # to run the tool
$ node dist/cli


```


## TODOs :page_facing_up:

### For v1 release

- [ ] Docs
- [x] Better CLI
- [ ] More Tests
- [ ] More Boilerplates
- [x] Code refactor (Done Partially --> more to do)




 ## Test

```bash

npm test

```



## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="http://anikethsaha.github.io"><img src="https://avatars1.githubusercontent.com/u/26347874?v=4" width="100px;" alt="Anix"/><br /><sub><b>Anix</b></sub></a><br /><a href="#infra-anikethsaha" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/buildtip/create-web-app/commits?author=anikethsaha" title="Tests">⚠️</a> <a href="#ideas-anikethsaha" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-anikethsaha" title="Maintenance">🚧</a> <a href="#design-anikethsaha" title="Design">🎨</a> <a href="https://github.com/buildtip/create-web-app/commits?author=anikethsaha" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/LOLdevelopr"><img src="https://avatars2.githubusercontent.com/u/50070488?v=4" width="100px;" alt="LOLDeveloper"/><br /><sub><b>LOLDeveloper</b></sub></a><br /><a href="https://github.com/buildtip/create-web-app/commits?author=LOLdevelopr" title="Documentation">📖</a></td>
    <td align="center"><a href="https://chan4lk.github.io/"><img src="https://avatars2.githubusercontent.com/u/3949546?v=4" width="100px;" alt="Chandima Ranaweera"/><br /><sub><b>Chandima Ranaweera</b></sub></a><br /><a href="https://github.com/buildtip/create-web-app/issues?q=author%3Achan4lk" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
