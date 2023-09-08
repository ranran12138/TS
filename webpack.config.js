const path = require('path')

// webpack 所有的配置信息
module.exports = {
  // 入口文件
  entry: './src/index.ts',
  // 指定打包文件的目录
  output: {
    // 目录
    path: path.resolve(__dirname, "dist"),
    // 文件
    filename: 'bundle.js'
  },
  // 指定webpack的打包模块
  module: {
    // 指定加载规则
    rules: [
      {
        // 所有.ts结尾的文件使用ts-loader
        test: /\.ts$/,
        use: 'ts-loader',
        // 排除
        exclude: /node_modules/
      }
    ]
  }
}