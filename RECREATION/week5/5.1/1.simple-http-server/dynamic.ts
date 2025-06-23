const express=require("express");

const app=express();

// http://localhost:3005/add/13/14

// now these are not queries now these are paramters

app.get("/add/:a/:b", function(req:any, res:any){
    const a=parseInt(req.params.a);
    const b=parseInt(req.params.b);

    res.json({
        answer: a+b
    })
})

app.listen(3005);

// parse is used to convert ot object
// stringify is ised to onvert to string 