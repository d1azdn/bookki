import bodyParser from 'body-parser';
import express from 'express';
import { bookRouter } from './routes/book-route.js';

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bookRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})