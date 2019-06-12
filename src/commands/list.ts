import chalk from "chalk";
import * as glob from "glob-all";
import * as path from "path"
export default (): void => {
// tslint:disable-next-line: no-console
  process.stdout.write(`\n${chalk.bgGreen.bold(`List of All Templates Available`)} \n`);
  const listTemplate = glob.sync(`${path.resolve(__dirname + "../../generators/app/templates").trim()}/*`)
	.map((p: string, i: number) => process.stdout.write(`${i} ${p.split("/").pop()} \n`));
};
