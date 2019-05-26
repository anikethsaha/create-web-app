# TASK

> This is the Minimal of the recommended Version of the boilerplate by Official Typescript Team

---
## Installation
- Clone the project
- Install the dependencies
- Run mongodb server ( If Not Running)
```bash
C:\Program Files\MongoDB\Server\<version>\bin\mongod.exe
```

```bash
$ npm install
$ npm i -g  nodemon   # install it globally if you don't have
```
- To run as a local dev environment

```bash
$ npm run watch-node     # in one terminal

# if you want to make any changes in any of the files ,  you need to run the typescript compiler

$ npm run watch-ts

```
- Open browser and go to url :  `http://localhost:8000/`




## API details
```bash
curl http://localhost:8000/charts/data

# it will response with the charts data from mongodb
```



