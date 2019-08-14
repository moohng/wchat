module.exports = {
  configureWebpack: config => {
    require('@vux/loader').merge(config, {
      plugins: ['vux-ui']
    })
  }
}
