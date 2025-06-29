console.log("----------top of the file----------")

function readTheFile(resolve){
  console.log("read the file called");
  setTimeout(function(){
    console.log("callback based settimeout completed");
    resolve();
    },3000);
}

function setTimeoutPromisified(fileName){
  console.log("setTimeoutpromisifed called")
  return new Promise(readTheFile);
}

const p = setTimeoutPromisified();

function callback(){
  console.log("call back has been called")
  console.log("timer is done");
}

p.then(callback)

console.log("---end of the file---")

//output
//
//----------top of the file----------
//setTimeoutpromisifed called
//read the file called
//---end of the file---
//callback based settimeout completed
//timer is done


//eg how are promise class look like

class Promise2{
  constructor(fn){
    function afterDone(){
      this.resolve();
    }
    fn(afterDone)
  }
  then(callback){
    this.resolve=callback;
  }
}

function setTimeoutPromisified2(){
  return new Promise2(readTheFile)
}

setTimeoutPromisified2().then(callback)



