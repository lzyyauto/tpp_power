const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      const MAINTENANCE_MODE = true; //手动维护

      if (MAINTENANCE_MODE) {
        devServer.app.get('*', (req, res) => {
          res.sendFile(path.resolve(__dirname, 'public', 'maintenance.html'));
        });
      }

      return middlewares;
    }
  }
});