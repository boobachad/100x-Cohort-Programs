const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('file related cli')
  .description('CLI to do file based tasks')
  .version('0.8.0');



program.command('count')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // spilit is altertnaitve to what we wrote in index.js
        const words = data.split(/\s+/).filter(word=>word.length>0).length; 
        console.log(`There are ${words} words in ${file}`);
      }
    });
  });

program.command("countSent")
       .description("count numebr of lines")
       .argument("<file>","file to count number of lines")
       .action((file)=>{
        fs.readFile(file,"utf-8", (err,data)=>{
          if(err){
            console.log(err);
            return;
          } else {
            const lines=data.split("\n").length;
            console.log(`There are total ${lines} in file ${file}.`);
          }
        });
       });

  program.command('addTodo')
  .description('add todos')
  .argument('<todo>', 'text to add')
  .action((todo) => {
    fs.readFile(todo, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // spilit is altertnaitve to what we wrote in index.js
        const lines = data.split(' ').length; 
        console.log(`There are ${lines} words in ${file}`);
      }
    });
  });

program.parse();