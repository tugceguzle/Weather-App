const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/proxy',
    createProxyMiddleware({
      target: 'https://originalApi.com/api/v1',
      changeOrigin: true,
      pathRewrite: {
        '/proxy': '/',
      },
    })
  );
};