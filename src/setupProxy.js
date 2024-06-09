const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://algoanalysesdeploym-production-2364.up.railway.app', // Replace with your API server URL
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove '/api' from the request URL
      },
    })
  );
};
