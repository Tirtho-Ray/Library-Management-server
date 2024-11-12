# Library Management System API

## Project Overview

The Library Management System API is a backend application designed to manage books, authors, memberships, and borrowing activities in a library setting. This API provides essential endpoints to manage library resources with a consistent and organized data structure.

## Features

1. **CRUD Operations** for Books, Authors, and Members
2. **Borrowing and Returning** functionalities
3. **Overdue Tracking** for borrowed books (optional bonus)
4. **Structured Error Handling**

## Technology Stack

- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web framework for Node.js
- **TypeScript** - Type checking and improved development experience
- **Prisma ORM** - Object Relational Mapper for database interactions
- **PostgreSQL** - Database
- **UUID** - Unique identifiers for resources

## Database Schema

### Book Table
| Field           | Type   | Description                      |
|-----------------|--------|----------------------------------|
| bookId          | UUID   | Unique ID for each book         |
| title           | String | Title of the book               |
| genre           | String | Genre or category               |
| publishedYear   | Int    | Year the book was published     |
| totalCopies     | Int    | Total copies in the library     |
| availableCopies | Int    | Currently available copies      |

### Author Table
| Field       | Type   | Description                       |
|-------------|--------|-----------------------------------|
| authorId    | UUID   | Unique ID for each author        |
| name        | String | Name of the author               |
| bio         | Text   | Short biography of the author    |
| dateOfBirth | Date   | Birth date of the author         |

### Member Table
| Field          | Type   | Description                       |
|----------------|--------|-----------------------------------|
| memberId       | UUID   | Unique ID for each member        |
| name           | String | Name of the library member       |
| email          | String | Member’s email (unique)          |
| phone          | String | Member’s phone number            |
| membershipDate | Date   | Date the member joined           |

### BorrowRecord Table
| Field       | Type   | Description                       |
|-------------|--------|-----------------------------------|
| borrowId    | UUID   | Unique ID for each record        |
| borrowDate  | Date   | Date the book was borrowed       |
| returnDate  | Date   | Date the book was returned       |
| bookId      | UUID   | Foreign key referencing Book     |
| memberId    | UUID   | Foreign key referencing Member   |

## API Endpoints

### Book Endpoints

- **POST** `/api/books` - Add a new book
- **GET** `/api/books` - Get all books
- **GET** `/api/books/:bookId` - Get a single book by ID
- **PUT** `/api/books/:bookId` - Update a book by ID
- **DELETE** `/api/books/:bookId` - Remove a book by ID

### Member Endpoints

- **POST** `/api/members` - Add a new member
- **GET** `/api/members` - Get all members
- **GET** `/api/members/:memberId` - Get a member by ID
- **PUT** `/api/members/:memberId` - Update member details
- **DELETE** `/api/members/:memberId` - Remove a member

### Borrow & Return Endpoints

- **POST** `/api/borrow` - Record a book borrowing
- **POST** `/api/return` - Record a book return





## Setup Instructions

### Prerequisites

Ensure you have **Node.js** **Eapress** **ts-node-dev** **Typescript** and **PostgreSQL** installed.

Prisma satup 
```bash
npm init -y
npm install prisma typescript tsx @types/node --save-dev
npx tsc --init
npx prisma
npx prisma init

### Step 1: Clone the Repository

```bash
git clone (https://github.com/Tirtho-Ray/Library-Management-server)
cd library-management-system-server

```bash
yarn add
yarn dev
