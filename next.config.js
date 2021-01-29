const debug = process.env.NODE_ENV !== 'production';
module.exports = {
    //basePath: '/tw-dev-server',
    assetPrefix: !debug ? '/tw-dev-server/' : '',
};
