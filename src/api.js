const db = require('./db');

const ApiMiddleware = () => async function(ctx, next){
    if(ctx.url.startsWith('/api/')){
        let response = {};
        const collectionName = getCollectionName(ctx.url);
        const {query} = ctx.request;
        const body = await readBody(ctx);
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

function readBody(ctx){
    if(ctx.request && ctx.request.header && ctx.request.header['content-type'] && ctx.request.header['content-type'].includes('application/json')){
        return Promise.resolve(ctx.request.body)
    }

    return new Promise((resolve, reject) => {
        let body = '';
        ctx.req
            .on('data', chunk => body += chunk.toString())
            .on('end', () => {
                try{
                    resolve(JSON.parse(body));
                }catch(error){
                    resolve(ctx.request.body);
                }
            })
    })
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


function removeUrlEndSlash(url){
    return url.replace(/\W*$/, '');
}

module.exports = {
    ApiMiddleware,
    getUrlParams(url){
        url = url.replace(/.*\?/, '');
        try{
            JSON.parse('{"' + decodeURI(url.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}')
            return JSON.parse('{"' + decodeURI(url.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}');
        }catch(e){
            return {};
        }
    },
    removeArgs(url){
        const index = url.indexOf('?');
        if(index >= 0){
            url = url.substring(0, index);
        }
        return removeUrlEndSlash(url);
    }
}