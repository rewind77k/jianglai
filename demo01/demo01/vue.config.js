const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  devServer: {
    proxy:{
      '/api':{
        target:'http://127.0.0.1:8000',
        ws: true,
        changeOrigin: true,
        secure: false,
        pathRewrite:{
          '^/api':''
        }
      }
    }
}
};

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});