const http = require('http');
const fs = require('fs');
const { on } = require('events');

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method=req.method;
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body></html>')
        return res.end()
    }
    if(url === '/message' && method === 'POST'){
        const body = [];  // array to store data
        req.on('data',(chunk)=>{  //we receive data using callback from webpage
            console.log(chunk);
            body.push(chunk); // here we push that data to body
        })
        return req.on('end',()=>{    //when request end , this end event is triggered , the data in body is concatenated and converted to a tring
           const parsedBody= Buffer.concat(body).toString(); 
           console.log(parsedBody);
           const message = parsedBody.split('=')[1];
           fs.writeFile('message.text',message,err=>{
            res.statusCode=302
            res.setHeader('Location','/')
            return res.end();
           });
        });
    }
    if(url === '/'){
        const mess= fs.readFileSync('./message.txt')
        
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
