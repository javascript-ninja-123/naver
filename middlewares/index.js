

const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');


module.exports = server => {
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({extended:true}))
  server.use(helmet())
  server.use(morgan('dev'))
}
