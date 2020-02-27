const http = require('http')

const hostname = '127.0.0.1'
const port = process.env.PORT

const server = http.createserver((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('HelloWorld\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running on ${hostname}:${port}`)
})
