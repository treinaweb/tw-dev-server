const server = require('./server'),
    arguments = require('./arguments'),
    port = arguments.get('port', 3002),
    isTempData = arguments.get('temp', false),
    showVersion = arguments.get('version', false),
    visibleData = arguments.get('visible-data', false);

server.start({
   port,
   isTempData,
   showVersion,
   visibleData 
});