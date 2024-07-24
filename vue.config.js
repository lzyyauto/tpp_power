const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      const MAINTENANCE_MODE = process.env.VUE_APP_MAINTENANCE_MODE === 'true';

      if (MAINTENANCE_MODE) {
        devServer.app.get('*', (req, res) => {
          res.sendFile(path.resolve(__dirname, 'public', 'maintenance.html'));
        });
      }

      return middlewares;
    }
  }
});