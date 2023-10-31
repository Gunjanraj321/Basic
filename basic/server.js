const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method=req.method;
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><form action="/message" method="POST" name="message"><input type="text"><button type="submit">Send</button></form></body></html>')
        return res.end()
    }
    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.text','Dummy')
        res.statusCode=302
        res.setHeader('Location','/')
        return res.end();
    }
    if(url === '/home'){
        res.end('Welcome Home')
    }
    else if(url === '/about'){
        res.end('Welcome to about us page')
    }
    else if(url === '/node'){
       res.end('Welcome to my Node.js project');
    }

    res.statusCode = 200;
    res.setHeader('content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>My first Page</title></head>')
    res.write('<body>hello welcome from node.js server</body></html>')
    res.end()
})

server.listen(4000,()=>{
    console.log(`the server running on port 4000`)
})
