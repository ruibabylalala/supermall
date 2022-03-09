// vue2的别名配置
module.exports = {
  configureWebpack: {
    // resolve配置路径相关的东西
    resolve: {
      // extentions: []    // 配置文件的后缀名 .js .vue等，默认已经配置过
      alias: {
        'assets': '@/assets',   // @表示src
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
        // router,store这两个，在其他地方引用时可以通过this.$router,this.$store
        // 拿到这个两个对象，所以此处无需配置这两个
      }
    }
  }
} 

// vue3的别名配置
/* const path = require('path')    // 引入path模块
function resolve(dir) {
  return path.join(__dirname, dir)  //path.join() 设置绝对路径
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      // set 第一个参数：设置的别名，第二个参数：设置的路径
      .set('@', resolve('./src'))
      .set('assets', resolve('./src/assets'))
      .set('common', resolve('./src/common'))
      .set('components', resolve('./src/components'))
      .set('network', resolve('./src/network'))
      .set('views', resolve('./src/views'))
  }
} */