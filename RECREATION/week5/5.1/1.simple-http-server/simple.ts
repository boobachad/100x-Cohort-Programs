const express=require("express");


const app=express();

// current format
// http://localhost:3005/add?a=46&b=24

app.get("/add", function(req:any,res:any){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        answer: a+b
    });
});

app.get("/subtract", function(req:any,res:any){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        answer: a-b
    });
});

app.get("/divide", function(req:any,res:any){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        answer: a/b
    });
});

app.get("/multiply", function(req:any,res:any){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        answer: a*b
    });
});

app.listen(3005, function(){
    console.log("server is running on port 3005");
});

console.log("Hello via Bun!");


// now think about this dynamic thing
// http://localhost:3005/add/13/14