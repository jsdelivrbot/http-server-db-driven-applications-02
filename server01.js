const { createServer } = require('http');
const { createReadStream } = require('fs');

const server = createServer();

server.on('request', (req, res) => {
  console.log('Request received for: ', req.url)
  res.end('OK')


})

server.listen(8080)
