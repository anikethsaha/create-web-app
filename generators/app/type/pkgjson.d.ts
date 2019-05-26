export interface IPkgJson {
  name : string,
  version? : string,
  description?  : string,
  author ?: string,
  license? : string,
  scripts? : object,
  repo? : string,
  devDependencies? : object,
  dependencies? : object,
  keywords : [string]
}



export interface IPkgJsonFromTemplate extends IPkgJson {}
