module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/wchat/' : '/',
  configureWebpack: config => {
    require('@vux/loader').merge(config, {
      plugins: ['vux-ui']
    })
  }
}
