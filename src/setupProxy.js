require("dotenv").config();

const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/server", {
      target: `http://${SERVER_ADDRESS}`,
      pathRewrite: {
        "^/server": "",
      },
      changeOrigin: true,
    })
  );
};
