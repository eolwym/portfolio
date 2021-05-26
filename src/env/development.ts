import path from 'path'

export default {
  dbUrl:
    'mongodb://localhost:27017/portfolio',
    cert: path.join(__dirname, '../../ssl/localhost.crt'),
    key: path.join(__dirname, '../../ssl/localhost.key'),
    portHttp: 3000,
    portHttps: 3001,
    
}