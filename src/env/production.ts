export default {
  dbUrl: `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.4ltlc.mongodb.net/portfolio`,
  cert: '/etc/letsencrypt/live/www.cedric-marurai.fr/fullchain.pem',
  key: '/etc/letsencrypt/live/www.cedric-marurai.fr/privkey.pem',
  portHttp: 80,
  portHttps: 443,

};