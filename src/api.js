const db = require('./db');

module.exports = () => async function(ctx, next){
    if(ctx.url.startsWith('/api/')){
        let response = {novaResposta: 125};
        const collectionName = getCollectionName(ctx.url);
        const {query, body} = ctx.request;
        switch(ctx.method){
            case 'GET': response = await handleGet(collectionName, query); break;
            case 'POST': response = await handlePost(collectionName, body); break;
            case 'PUT': response = await handlePut(collectionName, query, body); break;
            case 'DELETE': response = await handleDelete(collectionName, query); break;
        }
        ctx.body = response;
    }else{
        await next();
    }
}

function getCollectionName(url){
    return url
        //.replace(/(\/api\/|\?.*)/gi, '')
        .replace(/(\?.*)/gi, '')
        .replace(/\/+$/, '')
        //.replace(/\//g, '-');
}

async function handleGet(collectionName, query){
    if(collectionName.startsWith('/api/!!/')){
        return handleInternalGet(collectionName);
    }
    if(query.id){
        return db.find(collectionName, query.id);
    }
    return db.list(collectionName);
}

async function handleInternalGet(collectionName){
    const informationName = collectionName.replace(/\/api\/\!{2}\//gi, '')
    let response = {};
    switch(informationName){
        case 'version': 
            response = await require('./version-manager').checkUpdates();
    }
    return response;
}

async function handlePost(collectionName, data){
    return db.create(collectionName, data);
}

async function handlePut(collectionName, query, data){
    return db.update(collectionName, query.id, data);
}

async function handleDelete(collectionName, query){
    if(query.id === 'all'){
        return db.removeAll(collectionName);
    }
    return db.remove(collectionName, query.id);
}