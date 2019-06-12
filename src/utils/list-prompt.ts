import inquirer from "inquirer";

export default (name: string , message: string, choicesList: string[]) =>   inquirer
.prompt({
  type : "list",
  name,
  message,
  choices : choicesList,
});
