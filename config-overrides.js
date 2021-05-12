const {
  override,
  addWebpackAlias
} = require('customize-cra')
const path = require('path')

module.exports = override(
  // 路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@c': path.resolve(__dirname, 'src/components'),
    '@views': path.resolve(__dirname, 'src/views'),
    '@utils': path.resolve('src/utils'),
    '@styles': path.resolve('src/styles'),
  })
)