/**
 * Simple backend for generating survey results from JSON input
 */

const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()
const port = 3456
/**
 * Enable basic CORS for backend
 */
app.use(cors())

app.get('/survey', (req, res) => {
  try {
    res
      .status(200)
      .send(JSON.parse(fs.readFileSync('survey-sample.json', 'utf8')))
  } catch (error) {
    res.status(500).send({
      error: error.message
    })
  }
})

app.use(express.static('./src/main'))
app.listen(port)
