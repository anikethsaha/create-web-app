import yeoman from "yeoman-environment";
import generator from "../../generators/app/index";

const env = yeoman.createEnv();

export const projectName: any = "create-web-app";

env.registerStub(generator, projectName);

export default env;
