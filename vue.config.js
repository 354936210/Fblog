module.exports = {
	publicPath: './',
    lintOnSave:false,
    devServer: {
        port: 4567,
        proxy: {
            '/': {
                target: 'http://localhost:8888/',
                ws: false,
                changeOrigin: true
            },

        }
    },


}
