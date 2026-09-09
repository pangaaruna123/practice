const http = require('http')
const fs=require('fs');
const path = require('path')
const express= require('express')
const cors=require('cors')
const app = express();
app.use(express.json());
app.use(cors());
const { add, sub } = require('./math');
console.log('backend');
console.log(add(2,3));
console.log(sub(5,2));
const file=path.join("files", "message.txt");
console.log(file,'filepath')
fs.readFile(file,'utf-8',(err,data)=>{
    if(err){
        console.log(err,'file err')
    }
    console.log(data,'file data')
})
fs.writeFile('test.txt','checking fsModules',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('succussfully updated')
})
fs.readFile('test.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err,'err');
    }
    console.log(data,'data');
});
// this one is uisng with http moudles 
const server= http.createServer((req,res)=>{
res.writeHead(200);
res.end('checking https');
});
// this one is using with exprss.js
app.get('/', (req, res) => {
  res.send('checking dev ');
});

app.get('/api/users', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Rahul',
      age: 25
    },
    {
      id: 2,
      name: 'John',
      age: 30
    }
  ]);
});

app.listen(3000,()=>{
    console.log('conntecting https://localhost:3000');
})