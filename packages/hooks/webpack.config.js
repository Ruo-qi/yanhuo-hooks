const merge = require('webpack-merge');
const common = require('../../webpack.common');
const path = require('path');

module.exports = merge(common, {
  entry: './es/index.js',
  output: {
    filename: 'yanhuoHooks.js',
    library: 'yanhuoHooks',
    path: path.resolve(__dirname, './dist'),
  },
});
