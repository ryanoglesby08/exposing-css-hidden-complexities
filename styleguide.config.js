const { createConfig, babel, css } = require("webpack-blocks");

module.exports = {
  webpackConfig: createConfig([babel(), css.modules()])
};
