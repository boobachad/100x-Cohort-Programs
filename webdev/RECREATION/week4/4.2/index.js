// const fs= require("fs");
// fs.readFile("a.txt", "utf-8",(err,data)=>{
//     console.log(data);

// })


import express from 'express'

const app = express()

let todos=[];

//route handles
app.get('/', (req, res) => {
//   retrunt he todos
})



app.post('/', (req, res) => {
//   create a random ind for the todo
// extract teh todo tile form the body
})



app.delete('/', (req, res) => {
//   extract the todo id
// remove the todo from here
})

app.listen(3002)