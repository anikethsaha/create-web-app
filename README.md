# :rocket: Create Web App

[![Build Status](https://travis-ci.org/buildtip/create-web-app.svg?branch=master)](https://travis-ci.org/buildtip/create-web-app)
[![GitHub license](https://img.shields.io/github/license/buildtip/create-web-app.svg)](https://github.com/buildtip/create-web-app)
[![npm version](https://badge.fury.io/js/%40buildtip%2Fcreate-web-app.svg)](https://badge.fury.io/js/%40buildtip%2Fcreate-web-app)
[![NPM Downloads](https://img.shields.io/npm/dm/%40buildtip%2Fcreate-web-app.svg?style=flat)](https://www.npmjs.com/package/%40buildtip%2Fcreate-web-app)
[![Join the chat at https://gitter.im/create-web-app/community](https://badges.gitter.im/create-web-app/community.svg)](https://gitter.im/create-web-app/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-green.svg)](https://github.com/buildtip/create-web-app)


> ### Under Development :warning:




## Installation And Usage

```bash
# Recommended

$ npm i -g @buildtip/create-web-app
$ cwa

or
# If want to install and run it locally

$ npx @buildtip/create-web-app

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




## Status :newspaper:

This project is at very early stage and requires lots of testing, feedbacks, suggestion, refactors ,Features, and improvement.
**Feel free to Raise an issue and PR**


## Contribution Guide :wrench:

- Fork it
- Create a seperate branch
- Work on that, Work can be
  - **New Features**
  - **BugFix**
  - **Better Docs**
  - **Adding of Tests**
  - **Code Cleaning + Refactors**
  - **If any other kind of Contribution, Raise a issue for that and it can be discus there**
- Raise a PR


### Commit Guide
We are using [commitlint](https://commitlint.js.org/#/) for our commit conventions

Our commit conventions follow this pattern
```
type(scope?): subject
body?
footer?


# type can be

build
ci
chore
docs
feat
fix
perf
refactor
revert
style
test


# example => feat(blog): add comment section


```




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

- Docs
- Better CLI
- More Tests
- More Boilerplates
- Code refactor




 ## Test
 ```bash

npm test

```


