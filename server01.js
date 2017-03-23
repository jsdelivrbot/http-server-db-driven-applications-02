// require functions
const { createServer } = require('http');
const { createReadStream } = require('fs');

// google brought me here
// https://docs.nodejitsu.com/articles/advanced/streams/how-to-use-fs-create-read-stream/

// set up server
const server = createServer();

server.on('request', (req, res) => {
  console.log('Request received for: ', req.url)

  // read stream needs to be in the server request
  const readStream = createReadStream('index.html')

  // on request read the file stream and pipe it to
  // the response object
  readStream.on('open',(buff) => {
    readStream.pipe(res)
  })
})

server.listen(8080)
