const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  outputDir: "docs",
  publicPath: process.env.NODE_ENV === "production" ? "/test/" : "/",
  transpileDependencies: true,
});
module.exports = {
  devServer: {
    historyApiFallback: true,
  },
};
