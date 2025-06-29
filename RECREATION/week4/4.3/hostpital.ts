import { hasOnlyExpressionInitializer } from "typescript";

const express=require("express");
const app=express();

app.use(express.json());

/** Request methods
 * get: going for a consulation to get a checkup
 * post: going too get na new kidney inserted
 * put: going to get a kindeny replaced
 * delete: going to get a kidney deleted
 */

/**taks
 * get: users can check how many kidney that have and their health
 * post: users can add a new kidney
 * put: users can repalce a kidney, make it health,
 * delete: users can remoe a kindey
 */

interface Kidney{
    healthy:boolean;
}

interface User{
    name: string;
    kidneys: Kidney[];
}

const users: User[]=[{
    name:"John",
    kidneys:[{
        healthy:false
    },{
        healthy:true
    }]
}];

app.get("/", function(req:any, res:any){
    const JohnKidneys=users[0]?.kidneys ??[];/**users[0]?.kidneys ?? [] directly:
Safely accesses the first user with users[0]?
Gets the kidneys property with .kidneys
Falls back to an empty array [] if either users[0] is undefined or kidneys is undefined 
a fallaback is always good*/
console.log("kidneys array:", JohnKidneys)
    const numberOfKidneys=JohnKidneys.length;
    let cntHealthyKidneys=0;
    for(let i=0; i<JohnKidneys.length; ++i){
        if(JohnKidneys[i]!.healthy){ /* ! whats this it tell the ts to trust that yes this exists */
            cntHealthyKidneys+=1;
        }
    }
    const numOfUnhealthyKidneys=numberOfKidneys-cntHealthyKidneys;
    res.json({
        numberOfKidneys,
        cntHealthyKidneys,
        numOfUnhealthyKidneys
    })
})

app.post("/", function(req:any, res:any){
    const isHealthy=req.body.isHealthy;
    users[0]?.kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"done"
    })
})

app.put("/",function(req:any, res:any){
    console.log("Before PUT:", users[0]!.kidneys);
    for(let i=0; i<users[0]!.kidneys.length; ++i){
        users[0]!.kidneys[i]!.healthy=true;
    }
    console.log("After PUT:", users[0]!.kidneys); 
    res.json({msg:"done"})
})

app.delete("/", function(req:any, res:any){
    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys=[];
        for(let i=0; i<users[0]!.kidneys.length; ++i){
            const kidney=users[0]?.kidneys[i];
            if(kidney && kidney.healthy){
                newKidneys.push(kidney)
            }
        }
        users[0]!.kidneys=newKidneys;
        res.json({msg:"done"})
    } else {
        res.status(411).json({msg:"u dont have any unhealthy"})
    }
})

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney=false;
    for(let i=0; i<users[0]!.kidneys.length; ++i){
        if(!users[0]?.kidneys[i]?.healthy){
            atleastOneUnhealthyKidney=true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(3010,()=>{
    console.log("server is running on port 3010");
})
