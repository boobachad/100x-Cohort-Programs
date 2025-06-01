//this is was pasted from replit
// for loop to find sum of some numebrs
function sum(n){
  let ans=0;
  for(let i=0; i<n; ++i){
    ans+=i;
  }
  return ans;
}
// the above is a sync code executed line by line each operation wiats fro the before line to complete

console.log(sum(45));

const { error } = require("console");
// to read file
const fs = require("fs");

const data1 = fs.readFileSync("hello1.txt","utf-8");
console.log(data1)

const data2 = fs.readFileSync("hello2.txt","utf-8");
console.log(data2)

//read file async
fs.readFile("hello2.txt","utf-8", function(err,contents){
    console.log(contents)
});

fs.readFile("hello1.txt","utf-8", function(err,contents){
    console.log(contents)
});

//why async is good because in this we dont wait for previous operation everything run parallelly

// passing arguments in function

// passing function as a arguments --functional arguemnts

function subtract(a,b){
  return a-b;
}

function doOp(a,b,dubmbarg){
  return dubmbarg(a,b);
}

console.log(doOp(34,56,subtract))

//how to flush the callback queue
// or how to priotize the callback queue












// assignments  
// try to create a promisified version of settimeout, fetch ,fs.readfile
