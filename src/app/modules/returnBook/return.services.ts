import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const returnBook = async (borrowId: string) => {
  const borrowRecord = await prisma.borrowRecord.findUnique({ where: { borrowId } });

  if (!borrowRecord) {
    throw new Error("Invalid borrow ID");
  }

  if (borrowRecord.returnDate) {
    return {
      success: false,
      status: 400,
      message: "Book has already been returned",
      data: null,
    };
  }

  try {
    const updatedBorrowRecord = await prisma.$transaction([
      prisma.borrowRecord.update({
        where: { borrowId },
        data: { returnDate: new Date() },
      }),
      prisma.book.update({
        where: { bookId: borrowRecord.bookId },
        data: { availableCopies: { increment: 1 } },
      })
    ]);

    return {
      success: true,
      status: 200,
      message: "Book returned successfully",
      data: updatedBorrowRecord[0], 
    };
  } catch (error) {
    return {
      success: false,
      status: 500,
      message: "Error returning the book",
      data: null,
    };
  }
};

export const returnBookServices = {
  returnBook,
};
