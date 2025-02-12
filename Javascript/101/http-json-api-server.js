'use strict';
const http = require('http');
const url = require('url');
const port = process.argv[2];

const parseTime = (time) => {
    return{
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
};

function unixTime (time) {
    return {unixtime: time.getTime()};
}

const parseQuery = function (url) {
    switch (url.pathname) {
        case '/api/parsetime':
            return parseTime(new Date(url.query.iso));
        case '/api/unixtime':
            return unixTime(new Date(url.query.iso));
        default: return 'please enter a valid url';
    }
};
http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const passedUrl = url.parse(req.url, true);
        res.end(JSON.stringify(parseQuery(passedUrl)));
    } else{
        res.writeHead(405);
        res.end();
    }
}).listen(port, () => {
    console.log(`Server listening on port ${port}`);
});