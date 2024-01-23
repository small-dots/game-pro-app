module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://49.232.128.232/api',
        changeOrigin: true
      }
    }
  }
}