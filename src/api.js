const db = require('./db');

module.exports = () => async function(ctx, next){
    console.log(333)
    if(ctx.url.startsWith('/api/')){
        let response = {novaResposta: 125};
        //console.log(ctx.url, ctx.method, ctx.request.body, ctx.request.query)
        const collectionName = getCollectionName(ctx.url);
        const {query, body} = ctx.request;
        console.log(collectionName, query, body)
        switch(ctx.method){
            case 'GET': response = await handleGet(collectionName, query); break;
            case 'POST': response = await handlePost(collectionName, body); break;
            case 'PUT': response = await handlePut(collectionName, query, body); break;
            case 'DELETE': response = await handleDelete(collectionName, query); break;
        }
        ctx.body = response;
    }else{
        console.log(5555)
        await next();
    }
}

function getCollectionName(url){
    return url
        .replace(/(\/api\/|\?.*)/gi, '')
        .replace(/\/+$/, '')
        .replace(/\//g, '-');
}

async function handleGet(collectionName, query){
    console.log(99, collectionName, query)
    if(query.id){
        return db.find(collectionName, query.id);
    }
    return db.list(collectionName);
}

async function handlePost(collectionName, data){
    return db.create(collectionName, data);
}

async function handlePut(collectionName, query, data){
    return db.update(collectionName, query.id, data);
}

async function handleDelete(collectionName, query){
    return db.remove(collectionName, query.id);
}