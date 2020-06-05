const dns = require('dns');

module.exports = {
    ip: getIPAddress(),
    get port(){
        return require('./arguments').get('port', 3002);
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
    }
}

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