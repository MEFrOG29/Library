function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  const info = function () {
    console.log(`The ${title} by ${author}, ${pages} pages, ${isRead} `);
  };
}

const myLibrary = [];

function addToLibrary(book) {
  myLibrary.push(book);
}

function showLibrary() {
  myLibrary.forEach((book) => {
    console.log(book.title);
  });
}

let book1 = new Book("Капитанская дочка", "А. Пушкин", 250, true);
let book2 = new Book("Преступление и наказание", "Ф. Достоевский", 345, true);
let book3 = new Book("Убийство в восточном экспрессе", "А. Кристи", 198, false);

addToLibrary(book1);
addToLibrary(book2);
addToLibrary(book3);

console.log(myLibrary);

showLibrary();
