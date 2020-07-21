const browserSync = require("browser-sync").create();
const api = require('./api');
const terminal = require('./terminal');
const versionManager = require('./version-manager');

module.exports = {
    start(options){
        if(options.showVersion){
            terminal.printCurrentVersion();
        }else{
            const watchOptions = {
                cwd: terminal.cliDirectory,
                ignored: ['node_modules', '.tw-db']
            };
            
            browserSync.watch('**/**.html', watchOptions, browserSync.reload)
            browserSync.watch('**/**.js', watchOptions, browserSync.reload)

            browserSync.watch('**/*.css', watchOptions, function (event, file) {
                if (event === 'change') {
                    browserSync.reload(file);
                }
            });

            browserSync.init({
                ui: false,
                open: false,
                cors: true,
                notify: false,
                server: terminal.cliDirectory,
                watchEvents: ['change'],
                logLevel: "silent",
                port: options.port,
                reloadOnRestart: true,
                ghostMode: options.isBrowserSync,
                middleware: [
                    {
                        route: "/api",
                        handle: async function (req, res, next) {
                            const ctx = {
                                req, 
                                res, 
                                next,
                                url: `/api${api.removeArgs(req.url)}`,
                                method: req.method,
                                request: {query: api.getUrlParams(req.url)},
                                set body(value){
                                    res.write(JSON.stringify(value));
                                }
                            }
                            await api.ApiMiddleware()(ctx, next);
                            res.end();
                        }
                    },
                    
                ]
            }, () => {
                terminal.printSignature();
                terminal.printServerRunningInfo();
                versionManager.checkUpdates();
            });


        }
    },
    stop(){
        browserSync.exit();
        process.exit();
    }
}









