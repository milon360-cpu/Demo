const http = require('http');
const port = 3000;
const hostName = '127.0.0.1' ;

const myServer = http.createServer((req,res)=>
{
    res.end("hello");
})
myServer.listen(port,hostName,()=>
{
  console.log(`successfully host name${hostName},${port}`);
})