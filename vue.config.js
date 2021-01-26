module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'static': '@/static',
        'components': '@/components',
        'views': '@/views'
      }
    },
  }
}