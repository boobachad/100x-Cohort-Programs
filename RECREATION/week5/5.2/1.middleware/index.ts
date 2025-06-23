// middlware is moslty used for authentication

import { resolve } from "bun";

// to check if the request which is coming has certaina uthoruzation before it passes to server if not just break the chain
const express=require("express");
const app=express();
let reqCount=0;

// lets create a function instead of duplicating the requ count thing on both palces instead we call a this fucntion in each request calls

// now this below thing is  sort of middleware meaning any request which can be accessed between is known as middlware
// now the middleware also has the power to modify the request
// the below one currently do not have that enough power it does not have access to the req object
// there is a way we can pass the req and res in the request counter function

// middleware: it amy or may not hcange the request object
// it will either stop the req right there or
// froware the request to the real route handler

function requestCounter(){
    reqCount+=1;
    console.log(`total number of requests=${reqCount}`);
}

// app.get('/add/:a/:b', function(req:any, res:any){
    // requestCounter();//this is a simple function inside the request call currently sort of acts as a middleware
    // when i pass the function in the argument then it becomes a proper middlware meaning it 
    // the req first the passes the control to reqCount then it all depends on reqCount if it wnat to pass the control to the function main logic
    app.get('/add/:a/:b', function(req:any, res:any){
        requestCounter();
        // main logic
        const a=parseInt(req.params.a);
        const b=parseInt(req.params.b);
    
        res.json({
            ans: a+b
        });
    });

// u can see the req counter acts as middlware
// notice now here if u pstman this req it will pass the control to the middle function and until and unless it gets response to go ahead ur req call will not get executed
    app.get('/multiply/:a/:b',requestCounter, function(req:any, res:any){
    // main logic
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);

    res.json({
        ans: a*b
    });
});



// now after summing up our learning lets again write a clean route

// we passed reqCount in the argument now can we pass the main logic also i mean we create a function req res there only but can we make it more modular

function subHandler(req:any,res:any){
    // main logic
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);
    console.log(req.name);

    res.json({
        ans:a-b
    })
}

// here we can see the middleman is reqCount it has the power to stop from going ahead
// same here also ur req will not get executed until resposne comes from the middleware
// so the middlware need 3 argumetns first the req res object and then a next arguemtn to pass the control to the next function 
// lets modify it then 
function newRequestCounter(req:any,res:any,next:any){
    reqCount+=1;
    // lets make some changes also to the original req
    req.name="hello buddy";
    console.log(`total number of requests=${reqCount}`);
    // mostly the belwo next block is in if else  block like if the person has authorize then only call next else res.json some message
    next();//if i dont write here and the req has middleware the call will never get executed because its never passing the control to the next function
}
app.get('/sub/:a/:b',newRequestCounter, subHandler);

// now express has something if we want to pass some middleware in all the request calls anyones sent towards the server
// note this only works if u want all the req calls to first pass through middleware
// we can use
app.use(requestCounter);//sort of global thing this works but if i like decalre some req before this call they can work separetely 
// every requ called after this will have req counter has middleware as default

// this is a separete it should be apssed before the app.use req counter
app.get('/admin', function(req:any,res:any){
    res.json({
        message: "total number of request on the server is "+reqCount
    })
})

app.listen(3006);

console.log("Hello via Bun!");