module.exports = {
  apps : [{
    script: './build/bin/www.js',
    instances: 'max',
    watch: false,
    autorestart: false,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

};

