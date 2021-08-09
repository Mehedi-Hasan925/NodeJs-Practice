// core modules(fs,path,http,https,os)

const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req.method, req.url, req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>First nodejs response</title></head>');
    res.write('<body><h1>This is my first nodejs server request</h1></body>');
    res.write('</html>');
    res.end();
    process.exit();
});

server.listen(3001);