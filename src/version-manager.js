const fs = require('fs'),
    dns = require('dns'),
    https = require('https');

const VersionManager = {
    async checkUpdates(){

        return Promise.all([VersionManager.getCurrentVersion(), VersionManager.getRepositoryVersion()])
            .then(([currentVersion, repositoryVersion]) => {
                VersionManager.printAvailableUpdate(currentVersion, repositoryVersion);
                return {"local":currentVersion,"latest":repositoryVersion}
            })
    },
    printAvailableUpdate(currentVersion, newVersion){
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
    },
    hasInternetConnection(){
        return new Promise(resolve => {
            dns.lookupService('8.8.8.8', 53, function(err, hostname, service){
                if(err){
                    resolve(false)
                }else{
                    resolve(true);
                }
            });
        });
    },
    getCurrentVersion(){
        let version = '0';
        return new Promise(resolve => {
            fs.readFile(__dirname + '../package.json', (err, buf) => {
                if(!err){
                    const content = JSON.parse(buf.toString());
                    version = content.version;
                }
                resolve(version);
            });
        });
    },
    async getRepositoryVersion(){
        let version = '0';
        if(await VersionManager.hasInternetConnection()){
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
}

module.exports = VersionManager;