module.exports = {
  apps : [{
    script: './build/bin/www.js',
    instances: 'max',
    watch: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'

    }
  }],

};
