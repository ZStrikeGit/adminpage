const http = require('http')
const fs = require("fs")

const port = process.env.PORT || 80

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(fs.readFileSync("index.html"))
})

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})