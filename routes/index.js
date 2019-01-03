


module.exports = server => {
  server.use(require('./search'));
  server.use((err,req,res,next) => {
       if(err) {
         return res.status(err.statusCode).send(err)
       }
  })
}
