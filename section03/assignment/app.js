const http = require('http');

const routes = require('./routes');

// Starts server and accepts a function that handles the requests and responses
const server = http.createServer(routes.handler);

// Causes server to persist and wait for requests
server.listen(3000);