'use strict';

const map = require('through2-map');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method != 'POST') {
        return res.end('send me a post');
    }
    req.pipe(map((chunk) => {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});
server.listen(Number(process.argv[2]));
