/*eslint-disable no-console*/
const webpack =  require('webpack');
const webpackConfig = require('./webpack.production.config');

process.env.NODE_ENV = 'production';

webpack(webpackConfig).run((err) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }
    return 0;
});