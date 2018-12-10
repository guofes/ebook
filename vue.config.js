const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  // baseUrl: `${process.env.VUE_APP_CDN}`,
  // outputDir: `${process.env.VUE_APP_DIST_DIR}`,
  // productionSourceMap: process.env.VUE_APP_SOURCE_MAP === 'yes',
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        // data: `@import "@/assets/scss/variables.scss";@import "@/assets/scss/mixins.scss";`
      }
    }
  },
  devServer: {
    disableHostCheck: true,
    inline: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://10.114.26.245',
    //     changeOrigin: true,
    //     logLevel: 'debug',
    //     pathRewrite: {},
    //     onProxyReq: function (proxyReq, req, res) {
    //       proxyReq.setHeader(
    //         'cookie',
    //         'token=e9f0b30abebec7f2de2275b52e27649262a86927c8b47929e138bf34f51c78d74a00cdf4839b1b25c8; path=/; domain=10.114.26.245;'
    //       )
    //     }
    //   }
    // }
  },
  configureWebpack: config => {
    let resolve_alias = config['resolve']['alias']
    resolve_alias['~'] = resolve('src/components')
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.performance ?
        (config.performance.hints = false) :
        (config.performance = {
          hints: false
        })
    } else {
      // 为开发环境修改配置...
    }
  },
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    // 移除 preload 插件
    config.plugins.delete('preload')
  }
}