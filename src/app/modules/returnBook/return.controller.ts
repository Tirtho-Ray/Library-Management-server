import { Request, Response } from 'express';
import { returnBookServices } from "./return.services";

const returnBook = async (req: Request, res: Response) => {
    const { borrowId } = req.body;
  
    
      const borrowRecord = await returnBookServices.returnBook(borrowId);
      res.status(201).send({
        success: true,
         status: 201, 
         message: "Book returned successfully",
          data: borrowRecord
        });

      }

  export const returnBookController ={
    returnBook
  }
  