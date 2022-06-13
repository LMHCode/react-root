const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.baidu.com',
      changeOrigin: true,
      secure: false,      // 是否校验（或者说理会）对方https证书
      logLevel: 'debug',  // 日志等级，默认可以不配置用于调试时打印一些代理信息
      onProxyRes: function (proxyRes, req, res) { // 代理response事件
        console.log('res---->\n\n\n')
        console.log(proxyRes.headers, req, res)
      }
    })
  )
}