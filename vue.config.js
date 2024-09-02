const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  outputDir: "docs",
  publicPath: "/",
  transpileDependencies: true,
  devServer: {
    historyApiFallback: true,
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Yuka Yamada";
      return args;
    });
  },
});
