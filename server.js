// core modules(fs,path,http,https,os)

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="send"></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk)
        })

        req.on('end',()=>{
            const bodyParse = Buffer.concat(body).toString();
            // console.log(bodyParse);
            const message = bodyParse.split('=')[1];
            fs.writeFileSync('input.txt',message);
        })

        
        res.statusCode = 302;
        res.setHeader('Location','/')
        return res.end();
    }
});

server.listen(3001);