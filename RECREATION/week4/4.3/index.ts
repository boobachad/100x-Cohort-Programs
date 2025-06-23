const express=require("express");

const app=express();

function sum(req:any, res:any){
    // const n=parseInt(req.query.n);this will only respond to n=45
    const queryKeys=Object.keys(req.query);
    const n=parseInt(queryKeys[0] || ""); //if i dont write the fallback || "" ts will thorow erorr about n being possibly undefined
    let ans=0;
    for(let i =1; i<=n; ++i) {
        ans=ans+i;
    }
    res.send("so answer to ur query is "+ans);
}

/**
 * http://localhost:3010/?45
 * When you use ?45, Express treats 45 as a query parameter key with an empty value
Object.keys(req.query) returns ['45']
queryKeys[0] gives us '45'
parseInt('45') converts it to the number 45
 */

app.get("/", sum);

app.listen(3010, () => {
    console.log("Server is running on port 3010");
});