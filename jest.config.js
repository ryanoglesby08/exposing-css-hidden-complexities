module.exports = {
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy"
  },
  setupFiles: [
    "./src/__mocks__/requestAnimationFrame.js",
    "./config/setupEnzyme.js"
  ],
  setupTestFrameworkScriptFile: "./node_modules/jest-enzyme/lib/index.js"
};
