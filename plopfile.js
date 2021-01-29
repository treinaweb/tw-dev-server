const pageGenerator = require('./plop/page/page-generator');
const partialGenerator = require('./plop/page/partial-generator');
const componentGenerator = require('./plop/component/component-generator');

module.exports = function (plop) {
    Object.keys(handlers).forEach((functionName) => {
        plop.setHelper(functionName, handlers[functionName]);
    });

    pageGenerator(plop, handlers);
    partialGenerator(plop, handlers);
    componentGenerator(plop, handlers);
};

const handlers = {
    getPath(folder, name) {
        let path = '';
        if (folder) {
            path += `${folder.toLowerCase()}/`;
        }
        path += `${name.toLowerCase()}`;
        return path;
    },
    createFilename(componentName) {
        return componentName
            .replace(/([A-Z])/g, ' $1')
            .trim()
            .toLowerCase()
            .split(' ')
            .join('-');
    },
};
