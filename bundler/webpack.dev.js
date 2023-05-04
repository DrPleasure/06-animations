const { merge } = require('webpack-merge');
const commonConfiguration = require('./webpack.common.js');
// After
import('internal-ip').then((ip) => {
    // Use the `ip` module here
  }).catch((err) => {
    // Handle the error here
  });
  const portFinderSync = require('portfinder-sync');

const infoColor = (_message) => {
  return `\u001b[1m\u001b[34m${_message}\u001b[39m\u001b[22m`;
};

module.exports = merge(commonConfiguration, {
    mode: 'development',
    devServer: {
      host: '0.0.0.0',
      port: portFinderSync.getPort(8080),
      open: true,
      https: false,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  });
  