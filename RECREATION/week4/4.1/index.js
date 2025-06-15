const fs= require("fs");

function main(fileName){
    console.log(process.argv)
    fs.readFile(fileName, "utf-8", function(err, data){
        let cnt=0;
        for(let i=0; i<data.length; i++){
            if(data[i]===" ") cnt++;
        }
        console.log(cnt+1);
    })
}
// main("filenamehere")
main(process.argv[2]);
// meaning take the 2nd argumetn 
//  node index.js /home/boobachad/projects/harkirat/webdev/RECREATION/week4/4.1/file.txt
// here node being 0th arg 1st being index.js 2nd being out file