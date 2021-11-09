const path = require('path')
module.exports = {
    // publicPath: './',
    // outputDir: 'dist',
    // assetsDir: 'assets', // 静态资源目录
    // lintOnSave: false,
    devServer: {
        host: '0.0.0.0',
        port: 8081,
        disableHostCheck: true,
    },
    css:{
        loaderOptions:{
            less:{
                javascriptEnabled:true,//允许链式调用的换行
            }
       }
    },
    chainWebpack: (config) => {
        config.module
            .rule('file')
            .test(/\.[pdf|docx?]$/)
            .use('file-loader')
            .loader('file-loader')
            .end()
        //一个规则里的 基础Loader
        // svg是个基础loader
        const svgRule = config.module.rule('svg')

        // 清除已有的所有 loader。
        // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        svgRule.uses.clear()

        // 添加要替换的 loader
        svgRule
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    }
}
