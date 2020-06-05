const network = require('./network');
const versionManager = require('./version-manager');

const terminal = {
    cliDirectory: `${process.cwd()}/`,
    printSignature(){
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
    },
    printServerRunningInfo(){
        console.log(`\x1b[33mServing \x1b[36m${terminal.cliDirectory}`);
        console.log(`\x1b[33mServer running on:\nhttp://localhost:${network.port}\nhttp://${network.ip}:${network.port}`);
        console.log('\x1b[0mHit CTRL-C to stop the server\n');
        console.log(`\x1b[0mGUI: \x1b[33mhttps://treinaweb.github.io/tw-dev-server/\x1b[0m`);
    },
    async printCurrentVersion(){
        const {local, latest} = await versionManager.checkUpdates();

        console.log(`\x1b[36m tw-dev-server`);
        console.log(`\x1b[33m Current Version: \x1b[0m${local}`);

        if(latest !== '0'){
            console.log(`\x1b[33m Last Version: \x1b[0m${latest}`);
            if(local === latest){
                console.log(' You are updated!');
            }else{
                console.log(' Update with " npm i -g @treinaweb/tw-dev-server "')
            }
        }
    }
}





module.exports = terminal;