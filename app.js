const path = require('path');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const main = require('./routes/main');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const server = http.createServer(app);


// Routers
app.use('/', main);

server.listen(3000, () => {
    console.log('listening on port:3000');
});
