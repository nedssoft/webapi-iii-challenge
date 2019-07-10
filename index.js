// code away!

const server = require('./server')
const port = 3000;
server.listen(port, () => {
  console.log(`server started at port ${port}`);
})
