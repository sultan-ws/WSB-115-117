const http = require('http');
const obj = require('./support');

http.createServer((req, res)=>{

    console.log(req.method);
    console.log(req.url);
    

    if(req.url === '/greet'){
        res.end('hello test');
    }

    if(req.url === '/thanks' && req.method === 'GET'){
        res.end('welcome');
    }

    if(req.url === '/thanks' && req.method === 'POST'){
        res.end(JSON.stringify(obj));
    }
}).listen(4200);