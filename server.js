const express = require('express');
const { logger, errorHandler } = require('./middlewares')
const server = express();
const userRouter = require('./users/userRouter')
const { router: postRoutes } = require('./posts/postRouter')
//custom middleware

server.use(express.json())
server.use(logger)
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

server.use('/users', userRouter)
server.use('/posts', postRoutes)
server.use(errorHandler)
module.exports = server;
