import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createBookIntoDB = async (data:{title:string,genre:string,publishedYear:number,totalCopies:number,availableCopies:number}) =>{
    const result = await prisma.book.create({
        data
    })
    return result;
};

const getAllBooksIntoDB = async () =>{
    const result = await prisma.book.findMany({});
    return result;
};

const getSingleBookIntoDB = async (bookId:string) =>{
    const result = await prisma.book.findUnique({
        where:{
            bookId: bookId
        }
    })
    return result;
};

const updateBookIntoDB = async (bookId:string, updatedData:{title?:string, genre?:string, publishedYear?:number, totalCopies?:number, availableCopies?:number}) =>{
    const result = await prisma.book.update({
        where:{
            bookId: bookId
        },
        data: updatedData
    });
    return result;
}

const deleteBookIntoDB = async (bookId:string) =>{
    const result = await prisma.book.delete({
        where:{
            bookId: bookId
        }
    });
    return result;
}

export const bookServices ={
    createBookIntoDB,
    getAllBooksIntoDB,
    getSingleBookIntoDB,
    updateBookIntoDB,
    deleteBookIntoDB,
};