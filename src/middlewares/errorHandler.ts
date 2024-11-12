
import { Request, Response, NextFunction } from 'express';
import AppError from '../app/utils/AppError';


const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {

  const statusCode = err.statusCode || 500;
  const message = err.message || 'An unexpected error occurred';

  
  console.error('Error:', err);


  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
  });
};

export default errorHandler;
