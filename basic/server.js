const http = require('http');


const server = http.createServer((req,res)=>{
    console.log(req)
    res.statusCode = 200;
    res.setHeader('content-Type','text/plain')
    res.end('Gunjan Kumar')
})

server.listen(4000,()=>{
    console.log(`the server running on port 4000`)
})
