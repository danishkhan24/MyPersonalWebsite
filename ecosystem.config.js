module.exports = {
    apps: [
      {
        name: 'my-node-app',
        script: './src/app.js', // Entry point of your application
        instances: 'max', // Number of instances to run (use 'max' for auto scaling)
        exec_mode: 'cluster', // Run in cluster mode
        env: {
          NODE_ENV: 'development', // Environment variables for development
        },
        env_production: {
          NODE_ENV: 'production', // Environment variables for production
        },
      },
    ],
  };
  