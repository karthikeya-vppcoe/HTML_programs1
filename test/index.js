// const { log } = require('console');
// const os=require('os');
// console.log(os.type());
// console.log(os.version());
// console.log(os.freemem());
// console.log(__dirname);
// console.log(__filename);
// console.log(os.cpus());

// const path = require('path');
// console.log(__dirname);
// console.log(__dirname);
// console.log(path.dirname(__dirname));
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// const fs = require('fs');
// fs.readFile('one.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })

// const fs=require('fs');
// fs.writeFile('two.txt','utf-8',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('File Created');
// })

// const fs=require('fs');
// console.log("This  is my statement");

// const result=fs.readFileSync("one.txt",'utf8');
// console.log(result);

// console.log("Thi is my last line");

const http=require('http');

const myServer=http.createServer((req,res)=>{    
    res.write("Hello World");
    res.end();
})
myServer.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
