import express, { Router } from 'express';
import { returnBookController } from './return.controller';


const router: Router = express.Router();

// Attach the controller to the route
router.post('/return',returnBookController.returnBook)

export const returnRoute = router;