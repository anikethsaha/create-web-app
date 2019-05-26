import {
  IPkgJson,
  IPkgJsonFromTemplate
} from '../type/pkgjson';
import * as _ from "lodash";




export const createPkgJsonWithWebpack = (pkgjsonFromTemplate: IPkgJsonFromTemplate, pkgjson: IPkgJson): IPkgJson | IPkgJsonFromTemplate => {
  /*
  The present template for any Stack is build with webpack only
   Return the same package.json for now
   Can update it later in order when removing the default webpack configs from the template
   Will do it when adding more bundlers like I dont know

  */
  pkgjsonFromTemplate = _.assign(pkgjsonFromTemplate,pkgjson)
  return pkgjsonFromTemplate;
}


export const createPkgJsonWithParcel = (pkgjsonFromTemplate: IPkgJsonFromTemplate, pkgjson: IPkgJson): IPkgJson | IPkgJsonFromTemplate => {
  const scripts = {
    "build:server": "parcel build --no-autoinstall  ./src/server/index.js --target node --out-dir ./bin --out-file server.js",
    "build:client": "parcel build --no-autoinstall  ./src/client/index.js  --out-dir ./public/js/ --out-file app.bundle.js",
    "watch:server": "parcel watch --no-autoinstall  ./src/server/index.js --target node --out-dir ./bin --out-file server.js",
    "watch:client": "parcel watch --no-autoinstall  ./src/client/index.js  --out-dir ./public/js/ --out-file app.bundle.js",
    "build": "npm run build:client && npm run build:server ",
    "watch": "npm run watch:client && npm run watch:server "
  }
  pkgjsonFromTemplate.scripts = _.assignIn(pkgjsonFromTemplate.scripts,scripts);
  pkgjsonFromTemplate.devDependencies = _.assignIn(pkgjsonFromTemplate.devDependencies, {
    "parcel-bundler": "^1.12.3"
  })

  /*

  Need to remove the hard-coded devDependecies in the [] which we need to omit

   _.omit(pkgjsonFromTemplate.devDependencies,Object.keys(JSON.parse(/webpack/g.exec(JSON.stringify(pkgjsonFromTemplate.devDependencies)))))

  */

  pkgjsonFromTemplate.devDependencies = _.omit(pkgjsonFromTemplate.devDependencies, [
    "webpack",
    "webpack-cli",
    "webpack-dev-server",
    "webpack-node-externals"
  ])



  pkgjsonFromTemplate = _.assign(pkgjsonFromTemplate,pkgjson)
  return pkgjsonFromTemplate
}
