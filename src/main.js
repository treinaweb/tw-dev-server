const terminal = require('./terminal'),
    arguments = require('./arguments'),
    directory = arguments.get('dir', terminal.cliDirectory),
    port = arguments.get('port', 3002),
    isTempData = arguments.get('temp', false),
    showVersion = arguments.get('version', false),
    visibleData = arguments.get('visible-data', false),
    isLive = arguments.get('live', false),
    isBrowserSync = arguments.get('sync', false);

const server = (isLive || isBrowserSync) ? require('./server-live') : require('./server');

server.start({
   directory,
   port,
   isTempData,
   showVersion,
   visibleData ,
   isLive,
   isBrowserSync
});