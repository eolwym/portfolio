import path from 'path'

export default {
  dbUrl: `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.4ltlc.mongodb.net/portfolio`,
  cert: path.join(__dirname, '../../ssl/localhost.crt'),
  key: path.join(__dirname, '../../ssl/localhost.key'),
  portHttp: 3000,
  portHttps: 3001,
    
}