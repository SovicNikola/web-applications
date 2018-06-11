const text = require('./text.js')
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const print = text.print();



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(print);
});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});