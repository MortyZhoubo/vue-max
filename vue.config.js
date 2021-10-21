const path = require('path')
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'assets', // 静态资源目录
    lintOnSave: false,
    devServer: {
        host: '0.0.0.0',
        port: 8081,
        disableHostCheck: true,
        // proxy: {
        //     '/api': {
        //         // target: process.env.VUE_APP_BASEURL, //, // 'http://172.16.0.47/'
        //         target: 'http://124.70.74.235/',
        //         ws: true,
        //         changeOrigin: true,
        //         pathRewrite: { '^/api': '' }
        //     }
        // }
    },
    configureWebpack: (config) => {
        // webpack配置，值位对象时会合并配置，为方法时会改写配置
        config['externals'] = [{ config: 'config' }]
        // config.resolve.alias['@'] = resolve('src');
        // config.resolve.alias['@@'] = resolve('src/components');
        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, './src'),
                    '@@': path.resolve(__dirname, './src/views'),
                    vue$: 'vue/dist/vue.esm.js'
                }
            }
        })
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
