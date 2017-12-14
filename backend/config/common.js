const path = require('path');

const commonLoaders = [
  {
    test: /^[a-z]*.json$/,
    loader: 'json-loader',
  },
];

const globalResolve = {
  extensions: ['.js'],
  alias: {
    Server: path.resolve('./src/server'),
  },
};

// This resolveLoader allows us to load custom loaders
const resolveLoader = {
  modules: ['node_modules', 'config/webpack/loaders'],
  extensions: ['.js', '.json'],
  mainFields: ['loader', 'main'],
};

exports.commonLoaders = commonLoaders;
exports.globalResolve = globalResolve;
exports.resolveLoader = resolveLoader;
