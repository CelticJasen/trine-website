const path = require('path');

resolve: {
    modules:['node_modules']
}

module.exports = {
    mode: "production",
    entry: './src/index.js',
    resolve: {
        modules:['node_modules']
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs'),
    },
};
