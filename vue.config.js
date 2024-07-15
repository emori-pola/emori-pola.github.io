const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  outputDir: "docs",
  publicPath: "./",
  transpileDependencies: true,
});
module.exports = {
  devServer: {
    historyApiFallback: true,
  },
};
