/* Filename: ComplexApplication.js */

// This code represents a complex application that manages a library system.

// Constants
const NUM_BOOKSHELVES = 5;
const MAX_BOOKS_PER_SHELF = 20;

// Classes
class Book {
  constructor(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }
}

class Bookshelf {
  constructor(id) {
    this.id = id;
    this.books = [];
  }

  addBook(book) {
    if (this.books.length < MAX_BOOKS_PER_SHELF) {
      this.books.push(book);
      console.log(`Book "${book.title}" added to Bookshelf ${this.id}.`);
    } else {
      console.log(`Bookshelf ${this.id} is full. Cannot add "${book.title}".`);
    }
  }

  removeBook(bookTitle) {
    const bookIndex = this.books.findIndex(book => book.title === bookTitle);
    if (bookIndex !== -1) {
      const removedBook = this.books.splice(bookIndex, 1)[0];
      console.log(`Book "${removedBook.title}" removed from Bookshelf ${this.id}.`);
    } else {
      console.log(`Book "${bookTitle}" not found in Bookshelf ${this.id}.`);
    }
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.bookshelves = [];

    for (let i = 0; i < NUM_BOOKSHELVES; i++) {
      this.bookshelves.push(new Bookshelf(i + 1));
    }
  }

  addBook(book) {
    for (const bookshelf of this.bookshelves) {
      if (bookshelf.books.length < MAX_BOOKS_PER_SHELF) {
        bookshelf.addBook(book);
        return;
      }
    }

    console.log(`All bookshelves in ${this.name} are full. Cannot add "${book.title}".`);
  }

  removeBook(bookTitle) {
    for (const bookshelf of this.bookshelves) {
      if (bookshelf.books.some(book => book.title === bookTitle)) {
        bookshelf.removeBook(bookTitle);
        return;
      }
    }

    console.log(`Book "${bookTitle}" not found in ${this.name}.`);
  }
}

// Sample usage
const library = new Library("My Library");

const book1 = new Book("Design Patterns", "Gang of Four", 1994, "Computer Science");
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954, "Fantasy");
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.removeBook("The Lord of the Rings");
library.removeBook("Nonexistent Book");

/* Output:
Book "Design Patterns" added to Bookshelf 1.
Book "The Lord of the Rings" added to Bookshelf 2.
Book "To Kill a Mockingbird" added to Bookshelf 3.
Book "The Lord of the Rings" removed from Bookshelf 2.
Book "Nonexistent Book" not found in My Library. */
