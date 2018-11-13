const http = require('http'),
    fs = require('fs'),
    path = require('path'),
    ip = getIPAddress(),
    args = listArgs(),
    dbFolder = './.db/',
    memoryDB = {},
    port = getArg(args, 'port', 3002),
    isTempData = getArg(args, 'temp', false);



/* Server
**********/

const server = http.createServer(async (req, res) => {
    const url = req.url;
    if(url !== '/favicon.ico'){
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin'  : '*',
            'Access-Control-Request-Method': '*',
            'Access-Control-Allow-Methods' : '*',
            'Access-Control-Allow-Headers' : '*',
            'Access-Control-Allow-Credentials': true
        });

        const urlObj = urlReader(req.url),
            method = req.method;
        let reqObj = {};

        if(req.method === 'POST' || req.method === 'PUT'){
            reqObj = await readReqObj(req);
        }
        const resObj = await handleRequisition(method, urlObj, reqObj);
        res.write(JSON.stringify(resObj));
    }
    res.end();
})

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port} or http://${ip}:${port}`);
    console.log('Press Ctrl + C to exit');
})


/* Requisition Handlers
*************************/
function urlReader(url){
    const [blank, course, className, id] = url.split('/');
    return {
        course,
        className,
        id
    };
}

function handleRequisition(method, urlObj, reqObj){
    return new Promise(async (resolve) => {
        let resObj = {};
        let func;
        switch(method){
            case 'GET': resObj = await execGet(urlObj); break;
            case 'POST': resObj = await execPost(urlObj, reqObj); break;
            case 'PUT': resObj = await execPut(urlObj, reqObj); break;
            case 'DELETE': resObj = await execDelete(urlObj); break;
        }
        resolve(resObj);
    })
}

function readReqObj(req){
    return new Promise(resolve => {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            resolve(JSON.parse(body));
        });
    })
}

async function execGet(urlObj){
    const list = await readFile(urlObj.course, `${urlObj.className}.json`);
    if(urlObj.id){
        return list.find(obj => obj.id === urlObj.id) || {};
    }
    return list;
}
async function execPost(urlObj, reqObj){
    mkDirByPathSync(pathCreator(urlObj.course));
    reqObj.id = (new Date()).getTime().toString();
    const list = await readFile(urlObj.course, `${urlObj.className}.json`);
    list.push(reqObj);
    await writeFile(list, urlObj.course, `${urlObj.className}.json`);
    return reqObj;
}
async function execPut(urlObj, reqObj){
    const list = await readFile(urlObj.course, `${urlObj.className}.json`),
        index = list.findIndex(obj => obj.id === urlObj.id);
    if(index >= 0){
        reqObj.id = urlObj.id;
        list[index] = reqObj;
    }
    await writeFile(list, urlObj.course, `${urlObj.className}.json`);
    return reqObj;
}
async function execDelete(urlObj){
    if(urlObj.className === 'all'){
        clearStorage(urlObj.course);
        return {};
    }else if(urlObj.id === 'all'){
        await clearFile(urlObj.course, `${urlObj.className}.json`);
        return {};
    }else{
        const list = await readFile(urlObj.course, `${urlObj.className}.json`),
            index = list.findIndex(obj => obj.id === urlObj.id);
        if(index >= 0){
            list.splice(index, 1);
        }

        await writeFile(list, urlObj.course, `${urlObj.className}.json`);
        return {};
    }
}

/* IP
*******/
function getIPAddress() {
    const interfaces = require('os').networkInterfaces();
    for (let devName in interfaces) {
        const iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            const alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
    return '0.0.0.0';
}

/* Files Manager
*****************/
function pathCreator(path, fileName = ''){
    return `${dbFolder}${path}/${fileName}`;
}

function readFile(path, fileName){
    const filePath = pathCreator(path, fileName);
    let content = readMemory(path, fileName);
    if(!isTempData){
        if(content){
            return Promise.resolve(content);
        }else{
            return new Promise(resolve => {
                fs.readFile(filePath, (err, buf) => {
                    if(err){
                        resolve([])
                    }else{
                        content = JSON.parse(buf.toString());
                        writeMemory(content, path, fileName);
                        resolve(content);
                    }
                });
            })
        }
    }else{
        return Promise.resolve(content || []);
    }
}

function writeFile(data, path, fileName){
    const filePath = pathCreator(path, fileName);
    let content = readMemory(path, fileName);
    if(!isTempData){
        if(content){
            writeMemory(data, path, fileName);
            fs.writeFile(filePath, JSON.stringify(data), () => {});
            return Promise.resolve(data);
        }else{
            return new Promise(resolve => {
                fs.writeFile(filePath, JSON.stringify(data), (err) => {
                    if (err) console.log(err);
                    writeMemory(data, path, fileName);
                    resolve(data);
                });
            })
        }
    }else{
        writeMemory(data, path, fileName);
        return Promise.resolve(data);
    }
}

function clearFile(path, fileName){
    writeMemory([], path, fileName);
    return writeFile([], path, fileName);
}

function clearStorage(path){
    path = pathCreator(path);
    clearMemory(path);
    if( fs.existsSync(path) ) {
        fs.readdirSync(path).forEach((file,index) => {
            const curPath = path + '/' + file;
            if(fs.lstatSync(curPath).isDirectory()) {
                clearStorage(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}


function mkDirByPathSync(targetDir, {isRelativeToScript = false} = {}) {
    const sep = path.sep;
    const initDir = path.isAbsolute(targetDir) ? sep : '';
    const baseDir = isRelativeToScript ? __dirname : '.';

    targetDir.split(sep).reduce((parentDir, childDir) => {
        const curDir = path.resolve(baseDir, parentDir, childDir);
        try {
            fs.mkdirSync(curDir);
        } catch (err) {
            if (err.code !== 'EEXIST') {
                throw err;
            }
        }
        return curDir;
    }, initDir);
}


/* Memory DB
*************/
function readMemory(path, fileName){
    if(memoryDB[path]){
        return memoryDB[path][fileName] || null;
    }
    return null;
}

function writeMemory(data, path, fileName){
    if(!memoryDB[path]){
        memoryDB[path] = {};
    }
    memoryDB[path][fileName] = data;
}
function clearMemory(path){
    delete memoryDB[path];
}

/* Terminal
*************/
function listArgs(){
    const pattern = (/^--[a-z]/),
        args = {};

    process.argv.forEach(val => {
        const [argName, value] = val.split('=');

        if(pattern.test(argName)){
            args[argName.replace('--', '')] = value;
        }
    });
    return args;
}

function getArg(args, argName, defaultValue){
    return args[argName] || defaultValue;
}