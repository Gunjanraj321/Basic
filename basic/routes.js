const fs=require('fs')

const reqHandler = (req,res)=>{
    const url=req.url;
    const method=req.method;

    if(url==='/' && method === 'GET'){

        return fs.readFile('./message.txt','utf-8',(err,data)=>{
            if(!err){
                    res.statusCode=200;
                    res.setHeader('Content-Type','text/html')
                    res.write('<html>');
                    res.write('<head><title>Message</title></head>');
                    res.write('<body>');
                    res.write(`<p>${data}</p>`);
                    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>')
                    res.write('</body></html>');
                    return res.end();
            }
        })
    }
    if(url === '/message' && method === 'POST'){
        const body = []
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk);
        })
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody)
            const message = parsedBody.split('=')[1]
            fs.writeFile('message.txt',message,err=>{
                res.statusCode=302;
                res.setHeader('Location','/')
                return res.end()
            })
        })
    }
    res.statusCode = 200;
    res.setHeader('content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>My first Page</title></head>')
    res.write('<body>hello welcome from node.js server</body></html>')
    res.end()
}

// module.exports = reqHandler;

// module.exports={
//     handler:reqHandler,
//     someText:'some text written'
// }

module.exports.handler = reqHandler;
module.exports.someText = 'Some text written';

// exports.handler = reqHandler;
// exports.someText = 'Some text written';