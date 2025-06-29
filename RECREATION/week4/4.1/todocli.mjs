import fs, { write } from "fs";
import chalk from "chalk";
import {Command} from "commander";
const program = new Command();

program
  .name('file related cli')
  .description('CLI to do file based tasks')
  .version('0.8.0');

const readTodos=(filePath)=>{
  if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath,"[]","utf8");
    if(filePath==="tasks.json"){
      console.log(chalk.grey("create new file in currnet dir"));
    }
  }
  const data=fs.readFileSync(filePath,"utf8");
   return JSON.parse(data||"[]");
};

const writeTodos=(todos,filePath)=>{
  fs.writeFileSync(filePath,JSON.stringify(todos,null,2));
}

  program.command('add <task> [file]')
  .description('add todos')
  .action((task,file="tasks.json") => {
        const todos=readTodos(file);
        const newTodo={task, done:false};
        todos.push(newTodo);
        todos.push(newTodo);
        writeTodos(todos,file);
        console.log(chalk.green("todo added"));
        console.log(newTodo);
      });

program.command("delete <index> [file]")
        .description("delete todo")
        .action((index,file="tasks.json")=>{
          const todos=readTodos(file);
          const idx=parseInt(index);
          if(idx>=1 && idx<=todos.length){
            const removed=todos.splice(idx-1,1);
            writeTodos(todos, file);
            console.log(chalk.red("todo deleted"));
            console.log(removed);
          } else console.log(chalk.yellow("invalid index"));
         });

program.command("done <index> [file]")
         .description("mark todo done")
         .action((index,file="tasks.json")=>{
          const todos=readTodos(file);
          const idx=parseInt(index);
          if(idx>=1 && idx<=todos.length){
            todos[idx-1].done=true;
            writeTodos(todos,file);
            console.log(chalk.blue("todo marked as done"));
            console.log(todos[idx-1]);
          } else console.log(chalk.yellow("invalid index"));
         });

program.command("list [file]")
         .description("list all todos")
         .action((file="tasks.json")=>{
          const todos=readTodos(file);
          if(todos.length===0)
            console.log(chalk.magentaBright("no tods found"))
          else{
            todos.forEach((todo,index)=>{
              const status=todo.done ? chalk.green("[Done]") : chalk.red("[Pending]");
              console.log(`${index+1}.${status} ${todo.task}`);
            });
          }
         });

program.parse();