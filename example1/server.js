const http = require('http');
const port = process.env.port || 3000;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    switch(req.url) {
        case '/':
            res.end("<h1>Strona główna</h1>");
            break;
        case '/users':
            res.end("Strona użytkowników");
            break;
        case '/api/users':
            res.end("API");
            break;
        default:
            res.end("Strona nie istnieje");
    }
    // res.end("Strona");

}).listen(port, '127.0.0.1', () => {
    console.log(`Nasz serwer nasłuchuje na porcie ${port}`);
});