var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.get('/books', function(req, res, next) {
  res.json([{
    title: "title1",
    author: "autho1"
  },
    {

          title: "title2"
      , author: "author 2"
    }])
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
