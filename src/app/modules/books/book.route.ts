import express from 'express';
import { bookController } from './book.controller';

const router = express.Router();

router.post('/books',bookController.createBook)
router.get('/books', bookController.getAllBook);
router.get('/books/:bookId', bookController.getAllBook);
router.put('/books/:bookId', bookController.updateBook);
router.delete('/books/:bookId', bookController.deleteBook);


export const bookRoute = router;