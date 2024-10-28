import express from 'express';
import { books } from '../books.js';
import { readAllBooks, createBooks, readOneBooks, editBooks, deleteBooks } from '../controller/book-controller.js';

const bookRouter = express.Router();

bookRouter.get('/', (req,res)=>{
    res.send('Silahkan lihat dokumentasi kak ^^')
})
bookRouter.post('/book/create', createBooks)
bookRouter.get('/book/all', readAllBooks)
bookRouter.get('/book/:id/read', readOneBooks)
bookRouter.put('/book/:id/edit', editBooks)
bookRouter.delete('/book/:id/delete', deleteBooks)

export { bookRouter };
