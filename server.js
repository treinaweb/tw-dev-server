const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static-server');
const cors = require('@koa/cors');
const api = require('./src/api');
const network = require('./src/network');
const cliDirectory = `${process.cwd()}/`;

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(api());
app.use(serve({rootDir: __dirname}));
app.listen(3002, () => {
    require('./src/terminal').printSignature();
    
    console.log(`\x1b[33mServing \x1b[36m${cliDirectory}`);
    console.log(`\x1b[33mServer running on:\nhttp://localhost:${network.port}\nhttp://${network.ip}:${network.port}`);
    console.log('\x1b[0mHit CTRL-C to stop the server\n');
    console.log(`\x1b[0mGUI: \x1b[33mhttps://treinaweb.github.io/tw-dev-server/\x1b[0m`);

    require('./src/version-manager').checkUpdates();
})
 

