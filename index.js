const fs=require('fs');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const index=fs.readFileSync('index.html','utf-8');
const errorPage=fs.readFileSync('error.html','utf-8');

//make server with express
const express = require('express');
const server = express();



server.listen(8080,()=>{
    console.log("Server start....")
});


