class Rectangle{
  constructor(width, height, color){
    this.width=width;
    this.height=height;
    this.color=color;
  }

  area(){
  const area= this.width*this.height;
  console.log(this)
  return area;
  }

  paint(){
  console.log(`painting with color ${this.color}`);
  }

}

const rect = new Rectangle(2,4, "blue");
const area=rect.area();
rect.paint();
console.log(area);

//js has some other classes
const now = new Date();
console.log(now);
console.log(now.getMonth());

//map class alter use to set key value pair alter to objects
const map = new Map();
map.set('name', 'Budds');
map.set('age',34);
console.log(map.get('name'));

//lets move to the hard stuff i.e. promises
//what is it?
//promise class gives u a promise, that says that i am promising that u i will return u something in the future
//eg setTimeout(fn_name,3000);

//defination: it is an object that represnts eventual compeltion(of failre) of an async opeation and its resulting value

function checking(){
console.log("3 secs have passed");
}

setTimeout(checking,3000); //this is a callback meaning after 3sec we are calling back the checking function

//lets do a promise based approach of same 
//setTimeoutPromisified(3000).then(callback);
//eg
function setTimeoutPromisified(ms){
  return new Promise(resolve=>setTimeout(resolve,ms));
}

setTimeoutPromisified(3000).then(checking);

//but why we need promises when we have callbacks
//for now know that this is to overcome callback hell

//eg
function waitFor3S(resolve){
  console.log(resolve)
  setTimeout(resolve,1000)
}

waitFor3S(checking);

//so how is this above executing
//waitfor3s expects arguement resolve then in line 2 it runs settimeout in which resolve is passed by the waitfor3s function
//note that we have studied before argument name doenst matter
//then waitfor3s comes up which passes cehcking as argument we know that checking is a function so after 1sec cehcking function gets resolved

//easy appraoch

let p = new Promise(randomSomething)
console.log(p);
//this will reslt in pending promise
//lets complete this then
function random(resolve){ //here resolve is also a function
  resolve();
}
let s=new Promise(random);
s.then(randomSomething);

function randomSomething(){
  console.log("promise status");
}

//if not understood : 
//promise takes function as input, that functions's first arguemnet is aslo a function (resolve) which will be called after resolving the promise
//if understood
//then create the promisifed version of fs.readfile and write file and clean file

//lets take some another eg 











