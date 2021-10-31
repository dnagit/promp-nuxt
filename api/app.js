const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.all('/getJSON', (req, res) => {
  res.json({ data: 'data' })
})
app.all('/test', (req, res) => {
    res.json({ data: 'test' })
  })

module.exports = app