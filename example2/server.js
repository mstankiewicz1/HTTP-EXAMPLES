const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.port || 3000;

const users = [
    { name: "Adam", id: 1},
    { name: "Ewa", id: 2 }
];

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    switch(req.url) {
        case '/':
            fs.readFile(path.join(__dirname, "index.html"), (err, page) => {
                if(err) res.end('<h1>Nie udało się pobrać pliku</h1>')
                else res.end(page);
            });
            break;
        case '/users':
            fs.readFile(path.join(__dirname, "users.html"), (err, page) => {
                if(err) res.end('<h1>Nie udało się pobrać pliku</h1>')
                else res.end(page);
            });
            break;
        case '/api/users':
            res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            const usersJSON = JSON.stringify(users);
            res.end(usersJSON);
            break;
        case '/code.js':
            res.writeHead(200, {'Content-Type': 'application/javascript; charset=utf-8'});
            fs.readFile(path.join(__dirname, "code.js"), (err, page) => {
                if(err) res.end('<h1>Nie udało się pobrać pliku</h1>')
                else res.end(page);
            });
            break;
        default:
            res.end("Strona nie istnieje");
    }
    // res.end("Strona");

}).listen(port, '127.0.0.1', () => {
    console.log(`Nasz serwer nasłuchuje na porcie ${port}`);
});