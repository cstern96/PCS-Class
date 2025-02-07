const http = require('http');
let body = '';

http.get(process.argv[2], (res) =>{
    res.on('data', (chunk) => {
        body += chunk;
    });
    res.on('end', () => {
        console.log(body.length);
        console.log(body);
    });
});