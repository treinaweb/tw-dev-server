const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    //webpackFinal: async (config) => {
    //    config.resolve.modules.push(process.cwd() + '/src');
    //
    //    return config;
    //},
    webpackFinal: async (config) => {
        config.resolve.modules.push(process.cwd() + '/src');

        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        });

        config.resolve.alias['@emotion/core'] = toPath(
            'node_modules/@emotion/react'
        );
        config.resolve.alias['@emotion/styled'] = toPath(
            'node_modules/@emotion/styled'
        );
        config.resolve.alias['emotion-theming'] = toPath(
            'node_modules/@emotion/react'
        );
        return config;
    },
};
