#!/usr/bin/env node

const http = require('http'),
    https = require('https'),
    fs = require('fs'),
    path = require('path'),
    ip = getIPAddress(),
    args = listArgs(),
    dns = require('dns'),
    memoryDB = {},
    port = getArg(args, 'port', 3002),
    isTempData = getArg(args, 'temp', false),
    showVersion = getArg(args, 'version', false),
    visibleData = getArg(args, 'visible-data', false),
    dbFolder = visibleData ? './tw-db/' : './.tw-db/',
    cliDirectory = `${process.cwd()}/`;

let server;

printSignature();

if(showVersion){
    getCurrentVersion().then(version => {
        console.log(`              \x1b[36m  tw-dev-server
           \x1b[33m Current Version: \x1b[0m${version} `);
    })
}else{
    server = startServer();
}

/* Server
**********/

function startServer(){
    server = http.createServer(async (req, res) => {
        const url = removeArgs(removeUrlEndSlash(req.url));

        if(isAPI(url)){
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
        }else{
            try{
                const filePath = isFilePath(url) ? url : `${url}/index.html`;
                const content = fs.readFileSync(cliDirectory + filePath);
                res.writeHead(200);
                res.write(content);
            }catch(e){
                res.writeHead(404);
                res.write('Not Found');
            }
        }
        res.end();
    })

    server.listen(port, () => {
        console.log(`\x1b[33mServing \x1b[36m${cliDirectory}`);
        console.log(`\x1b[33mServer running on:\nhttp://localhost:${port}\nhttp://${ip}:${port}`);
        console.log('\x1b[0mHit CTRL-C to stop the server\n');
        checkUpdates();
    })
}


/* Requisition Handlers
*************************/
function urlReader(url){
    const urlParts = removeArgs(url).split('/');
    urlParts.splice(0, 1);
    if(urlParts[urlParts.length - 1] === ''){
        urlParts.splice(urlParts.length - 1, 1);
    }

    const className = urlParts.splice(urlParts.length - 1, 1)[0],
        course = urlParts.join('/'),
        urlParams = getUrlParams(url),
        id = urlParams.id || null,
        project = urlParams.project || null;

    return {
        course,
        className,
        id,
        project
    };
}

function removeUrlEndSlash(url){
    return url.replace(/\W*$/, '');
}

function getUrlParams(url){
    url = url.replace(/.*\?/, '');
    try{
        JSON.parse('{"' + decodeURI(url.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}')
        return JSON.parse('{"' + decodeURI(url.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}');
    }catch(e){
        return {};
    }
}

function removeArgs(url){
    const index = url.indexOf('?');
    if(index >= 0){
        url = url.substring(0, index);
    }
    return url;
}

function isAPI(url){
    return url.startsWith('/api/');
}

function isFilePath(url){
    const pattern = /(.*)\.\w*$/;
    return pattern.test(url);
}

function handleAPIResponse(){

}

function handleFileResponse(){

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
    if(urlObj.course === 'api/!!'){
        return await handleInternalGet(urlObj.className);
    }
    const list = await readFile(urlObj.course, `${urlObj.className}.json`);
    if(urlObj.id){
        return list.find(obj => obj.id === urlObj.id) || {};
    }
    return list;
}
async function handleInternalGet(requisition){
    let response = {};
    switch(requisition){
        case 'version':
            response = await checkUpdates();
            break;
        case 'files-tree':
            response = drawFilesTreeAsJson(walkSync(dbFolder));
            break;
    }
    return response;
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
    if(urlObj.project === 'all'){
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
    const sep = '/';
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



function walkSync (dir, filesList = []) {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(file => {
            const dirFile = path.join(dir, file);
            try {
                filesList = walkSync(dirFile, filesList);
            }
            catch (err) {
                if (err.code === 'ENOTDIR' || err.code === 'EBUSY') filesList = [...filesList, dirFile];
                else throw err;
            }
        });
        return filesList;
    }
    return filesList;
}

function drawFilesTreeAsJson(filesList = []){
    let fileTree = {};

    function mergePathsIntoFileTree(prevDir, currDir, i, filePath) {
        if (i === filePath.length - 1) {
            prevDir[currDir] = filePath.join('/');
        }
        if (!prevDir.hasOwnProperty(currDir)) {
            prevDir[currDir] = {};
        }

        return prevDir[currDir];
    }

    function parseFilePath(filePath) {
        let fileLocation = filePath.split('/');
        if (fileLocation.length === 1) {
            return (fileTree[fileLocation[0]] = filePath);
        }
        fileLocation.reduce(mergePathsIntoFileTree, fileTree);
    }

    filesList.forEach(parseFilePath);
    return fileTree;
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
            args[argName.replace('--', '')] = value || true;
        }
    });
    return args;
}

function getArg(args, argName, defaultValue){
    return args[argName] || defaultValue;
}

async function checkUpdates(){

    return Promise.all([getCurrentVersion(), getRepositoryVersion()])
        .then(([currentVersion, repositoryVersion]) => {
            printAvailableUpdate(currentVersion, repositoryVersion);
            return {"local":currentVersion,"latest":repositoryVersion}
        })
}

function printAvailableUpdate(currentVersion, newVersion){
    if(currentVersion < newVersion){
        console.log(`
 \x1b[33m╭───────────────────────────────────────-──-──-──-──-─╮
 \x1b[33m│                                                     │
 \x1b[33m│  \x1b[0m               Update available                   \x1b[33m │
 \x1b[33m│  \x1b[0m               ${currentVersion} → ${newVersion}                    \x1b[33m │
 \x1b[33m│  \x1b[0m Run \x1b[36mnpm i -g @treinaweb/tw-dev-server\x1b[0m to update  \x1b[33m │
 \x1b[33m│                                                     │
 \x1b[33m╰─────────────────────────────────────────-──-──-──-──╯\x1b[0m`);
    }
}

function hasInternetConnection(){
    return new Promise(resolve => {
        dns.lookupService('8.8.8.8', 53, function(err, hostname, service){
            if(err){
                resolve(false)
            }else{
                resolve(true);
            }
        });
    });
}

function getCurrentVersion(){
    let version = '0';
    return new Promise(resolve => {
        fs.readFile(__dirname + '/package.json', (err, buf) => {
            if(!err){
                const content = JSON.parse(buf.toString());
                version = content.version;
            }
            resolve(version);
        });
    });
}
async function getRepositoryVersion(){
    let version = '0';
    if(await hasInternetConnection()){
        return new Promise(resolve => {
            https.get(`https://raw.githubusercontent.com/treinaweb/tw-dev-server/master/package.json?${(new Date()).getTime()}`, (resp) => {
                let data = '';
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                resp.on('end', () => {
                    const content = JSON.parse(data);
                    version = content.version;
                    resolve(version);
                });
            })
        });
    }else{
        return Promise.resolve(version);
    }

}

function printSignature(){

    const twSignature = `
    \x1b[36m          ,*********************.
             #,./(((((((((((((((((((*
     \x1b[34m        %%#,               \x1b[36m./((*
     \x1b[34m        %%%/               \x1b[36m /((*
     \x1b[34m        %%%/               \x1b[36m /((*
     \x1b[34m        %%%%%%%%%%%%%%%(.  \x1b[36m /((*
     \x1b[34m        %%%(........*%%%%  \x1b[36m /((*
     \x1b[34m        %%%#////*    *%%%. \x1b[36m /((*
     \x1b[34m        %%%(,,,,,    *%%%. \x1b[36m /((*
     \x1b[34m        #%%%,.     ..#%%%  \x1b[36m /((*
     \x1b[34m        .(%%%%%%%%%%%%%#.  \x1b[36m /((*
     \x1b[34m                           \x1b[36m /((*
                                 /((*
           (((((((((((((((((((((((((*
           (((((((((((((((((((((((((*
\x1b[0m
  _______       _          __          __  _     
 |__   __|     (_)         \\ \\        / / | |    
    | |_ __ ___ _ _ __   __ \\ \\  /\\  / /__| |__  
    | | '__/ _ \\ | '_ \\ / _\` \\ \\/  \\/ / _ \\ '_ \\ 
    | | | |  __/ | | | | (_| |\\  /\\  /  __/ |_) |
    |_|_|  \\___|_|_| |_|\\__,_| \\/  \\/ \\___|_.__/ 
    \x1b[0m
            https://treinaweb.com.br`;
    console.log(twSignature);
}

