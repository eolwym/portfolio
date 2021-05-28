module.exports = {
  apps : [{
    script: './build/bin/www.js',
    instances: '1',
    watch: true,
    autorestart: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

};

