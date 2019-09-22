const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    if (req.url === '/') {
        fs.readFile('index.html', 'utf-8', (err, data) => {
            res.end(data);
        });
    } else if (req.url === '/login') {
        res.end('<h1>로그인 페이지 입니다.</h1>');
    } else {
        res.end('<h1>페이지를 찾을 수 없습니다.</h1>');
    }
}).listen(4000);
