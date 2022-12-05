const http = require('http');
const data = require("./data.json");

const host = 'localhost';
const port = 8081;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify(data["api"]));
})

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}/api`);
})