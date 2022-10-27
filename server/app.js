const express = require('express')
const app = express()
require('module')
const port = 3000

app.use('/', express.static('./dist', {
  index: "index.html"
}))

app.listen(port, () => console.log(`Escuchando puerto ${port}!`))
