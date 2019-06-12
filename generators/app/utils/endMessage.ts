


export const endMessage = (projectName : string , features : string) : void  => {
  console.log(`
  Your Project Consist of:
  ${features}

  Steps :

  $ cd ${projectName} \n
  $ npm install \n
  $ npm test
  `);
}
