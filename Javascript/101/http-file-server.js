const http = require('http');

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'content-type': 'text/plain'});
    fs.createReadStream(process.argv[3]).pipe(res);
});
server.listen(Number(process.argv[2]));