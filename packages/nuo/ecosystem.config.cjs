module.exports = {
  apps: [
    {
      name: 'nuo',
      port: '3000',
      exec_mode: 'cluster',
      instances: 2,
      watch: false,
      max_memory_restart: '1G',
      max_restarts: 20,
      autorestart: true,
      script: './.output/server/index.mjs',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}
