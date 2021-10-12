const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res)=>{
    let path = './';
    switch(req.url){
        case '/':
            res.statusCode = 200;
            break;
        case '/blog':
            res.statusCode = 200;
            path+=''
    }
})

server.listen(8080, 'localhost', ()=>{
    console.log("Listening for requests on port 8080")
})