module.exports = {
  publicPath: process.env.DEPLOY_ENV === 'travis' ? '/wchat/' : '/',
  configureWebpack: config => {
    require('@vux/loader').merge(config, {
      plugins: ['vux-ui']
    })
  }
}
