const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
// app.use(cors({
//     domains:["https://google.com","https://anything.com"]
// }));

let reqCount=0;

function oldRequestNote(req:any,res:any,next:any){
    reqCount+=1;
    const protocol=req.protocol;
    const host=req.get('host');
    const originalurl=req.originalUrl
    const method=req.method;


    const fullURL=`${protocol}/${host}${originalurl}`
    console.log(`request number: ${reqCount} | full url is ${fullURL} | method is ${method} | time: ${new Date().toISOString()}`);
    // or more simpler
    // console.log(`request number: ${reqCount} | full url is ${req.hostname}${req.url} | method is ${req.method} | time: ${new Date().toISOString()}`);
    next();
}

function divideHand(req:any,res:any){
    console.log("divide function was just called")
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    
    res.json({
        ans: a/b
    })
}

let requestLogs: any[]=[];

function newRequestNote(req:any, res:any,next:any){
    reqCount+=1;
    console.log(`request number ${reqCount}`);
    const protocol=req.protocol;
    const host=req.get('host');
    const originalurl=req.originalUrl
    const method=req.method;
    const timestamp=new Date().toISOString();

    // captuer who is calling the nedpoint
    const clientIP=req.ip||req.connection.remoteAddress||req.socket.remoteAddress;
    const userAgent=req.get('User-Agent');
    const referer=req.get('Referer');
    const origin=req.get('Origin');
    // const xForwardedFor=req.get('X-Forwarded-For')

    const fullURL=`${protocol}://${host}${originalurl}`
    const requestDetails={
        requestNumber: reqCount,
        fullURL:fullURL,
        method: method,
        timestamp: timestamp,
        calledBy:{
            clientIP: clientIP,
            userAgent: userAgent,
            referer: ReferenceError,
            origin: originalurl,
            // xForwardedFor: xForwardedFor
        }
    };
    requestLogs.push(requestDetails);
    next();
}

app.get('/admin', function(req:any, res:any){
    res.json({
        message: "logs for admin",
        totalRequests: reqCount,
        requestDetails: requestLogs
    })
})

// app.use(oldRequestNote);//evyer route defined after this will defaultt o tfirst req note note befoer this
app.use(newRequestNote);

app.get('/divide/:a/:b', divideHand);

app.use(express.json());

function something(req:any,res:any){
    console.log("something function was just called")
    // console.log(req.body);
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    
    res.json({
        ans: a%b
    })
}

app.post('/something', something);

// cors: cross origin resourece sharing
// ndoe js by default cors are blocked
// its a good thing

// if we still need to do it we need to use cors middleware

// and if still we need to do we can do something like
// now the file is hsoted on the same server and there is no need for cors
app.get("/", function(req:any,res:any){
    res.sendFile(__dirname+"./index.html")
})


app.listen(3007);

