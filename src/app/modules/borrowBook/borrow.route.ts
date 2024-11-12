import express, { Router } from 'express';
import { borrowBookController } from './borrow.controller';

const router: Router = express.Router();

// Attach the controller to the route
router.post('/borrow',borrowBookController.borrowBook)

export const borrowRoute = router;