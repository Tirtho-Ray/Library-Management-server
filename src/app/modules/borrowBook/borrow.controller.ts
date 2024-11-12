
import { Request, Response } from 'express';
import { borrowBookServices } from './borrow.services';

const borrowBook = async (req: Request, res: Response) => {
  const { bookId, memberId } = req.body;

    const borrowRecord = await borrowBookServices.borrowBookIntoDb(bookId, memberId);
    res.status(201).send({
      success: true,
         status: 201, 
         message: "Book borrowed successfully",
          data: borrowRecord
    })
};

export const borrowBookController = {
  borrowBook,
};
