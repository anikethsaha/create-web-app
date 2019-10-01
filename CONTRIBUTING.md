
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
