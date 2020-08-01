import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.send('hello world1!')
})

app.listen(3333)
