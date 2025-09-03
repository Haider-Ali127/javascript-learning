// task 20 last mini project
class book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }
}
class library {
    constructor() {
        this.books = []
    }
    addBook(book) {
        this.books.push(book)
    }
    removeBook(title) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title) {
                this.books.splice(i, 1)
                break
            }
        }
    }
    showBooks() {
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
        });
    }
}
const book1 = new book("Harry Potter", "J.K. Rowling", 1997);
const book2 = new book("The Hobbit", "J.R.R. Tolkien", 1937);
const book3 = new book("1984", "George Orwell", 1949);


const myLibrary = new library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
console.log("All books in the library:");
myLibrary.showBooks();
myLibrary.removeBook("The Hobbit");
console.log("\nBooks in the library after removing 'The Hobbit':");
myLibrary.showBooks();
