const  express  = require('express');
require('dotenv').config()
const next = require('next');
const dev = process.env.NODE_DEV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const path = require('path')
const PORT = process.env.PORT || 8080;


app.prepare().then(() => {
   const server = express();
   require('../middlewares')(server);
   require('../routes')(server)

   server.get("/*", (req,res) => {
      handle(req,res)
   })
   server.listen(PORT, () => {
     console.log(`server is listening to  ${PORT}`)
   })
})
