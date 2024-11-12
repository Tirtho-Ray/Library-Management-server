import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { memberRouter } from './app/modules/member/member.route';
import errorHandler from './middlewares/errorHandler';
import AppError from './app/utils/errors';
import { bookRoute } from './app/modules/books/book.route';
import { borrowRoute } from './app/modules/borrowBook/borrow.route';
import { returnRoute } from './app/modules/returnBook/return.route';

const app:Application = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/',(req:Request,res:Response)=>{
    res.send({
        message: 'Welcome to the RESTFUL API!'
    })
});


// use routers 
app.use('/api',memberRouter);
app.use('/api',bookRoute);
app.use('/api',borrowRoute)
app.use('/api',returnRoute)


app.use(errorHandler);

// Example route to test error handling
app.get('/error', (req, res, next) => {
    // Triggering a test error
    next(new AppError('Test Error', 400));
});


export default app;
