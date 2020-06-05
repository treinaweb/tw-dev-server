const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static-server');

const app = new Koa();

app.use(bodyParser());
app.use(serve({rootDir: __dirname}))
app.use(async (ctx) => {
    if(ctx.url.startsWith('/api/')){
        console.log(ctx.url, ctx.method, ctx.request.body, ctx.params)
        ctx.body = {novaResposta: 123}
    }
})
app.listen(3000)
 
console.log('listening on port 3000', __dirname)