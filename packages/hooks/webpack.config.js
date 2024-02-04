const merge = require('webpack-merge');
const common = require('../../webpack.common');
const path = require('path');

module.exports = merge(common, {
  entry: './es/index.js',
  output: {
    filename: 'yanHuoHooks.js',
    library: 'yanHuoHooks',
    path: path.resolve(__dirname, './dist'),
  },
});
