import { Request, Response } from "express";
import { bookServices } from "./book.services";

const createBook = async (req:Request,res:Response) =>{

    const result  = await bookServices.createBookIntoDB(req.body)
    res.status(201).send({
        success: true,
         status: 201, 
         message: "Book created successfully",
          data: result
        });
};

const getAllBook = async (req:Request, res:Response) => {
    const result = await bookServices.getAllBooksIntoDB();
    res.status(200).send({
        success: true,
        status: 200,
        message: "Books retrieved successfully",
        data: result
    })
};

const getBookById = async (req:Request, res:Response) => {
    const result = await bookServices.getSingleBookIntoDB(req.params.bookId);
    if(result){
        res.status(200).send({
            success: true,
            status: 200,
            message: "Book retrieved successfully",
            data: result
        })
    }else{
        res.status(404).send({
            success: false,
            status: 404,
            message: "Book not found"
        })
    }
};

const updateBook = async (req:Request, res:Response) => {
    const result = await bookServices.updateBookIntoDB(req.params.bookId, req.body);
    if(result){
        res.status(200).send({
            success: true,
            status: 200,
            message: "Book updated successfully",
            data: result
        })
    }else{
        res.status(404).send({
            success: false,
            status: 404,
            message: "Book not found"
        })
    }
};

const deleteBook = async (req:Request, res:Response) => {
    const result = await bookServices.deleteBookIntoDB(req.params.bookId);
    if(result){
        res.status(200).send({
            success: true,
            status: 200,
            message: "Book deleted successfully"
        })
    }else{
        res.status(404).send({
            success: false,
            status: 404,
            message: "Book not found"
        })
    }
};

export const bookController = {
    createBook,
    getAllBook,
    getBookById,
    updateBook,
    deleteBook
};