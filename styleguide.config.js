const { createConfig, babel, css } = require("webpack-blocks");

module.exports = {
  components() {
    return [
      "./src/components/CssButton/CssButton.js",
      "./src/components/HoverButton/HoverButton.js",
      "./src/components/ResponsiveButton/ResponsiveButton.js",
      "./src/components/AnimatedButton/AnimatedButton.js"
    ];
  },
  webpackConfig: createConfig([babel(), css.modules()])
};
