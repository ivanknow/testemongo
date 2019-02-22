const http = require('http');
const port = process.env.POSR || 3030;
const app = require("./app.js");
const server = http.createServer(app);

server.listen(port);

