import express from 'express';

const app = express();

app.get('/', (req,res)=> {
  return res.send('hello world2!')
})

app.listen(3333)