const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static-server');
const cors = require('@koa/cors');
const api = require('./src/api');

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(api());
app.use(serve({rootDir: __dirname}));
app.listen(3002)
 
console.log('listening on port 3002', __dirname);