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

// function showLibrary() {
//   myLibrary.forEach((book) => {
//     console.log(book.title);
//   });
// }

let book1 = new Book("Капитанская дрочка", "А. Пушкин", 250, true);
let book2 = new Book(
  "Поступление в АКТ и наказание",
  "Ф. Достоевский",
  345,
  true,
);
let book3 = new Book("Убийство в восточном экспрессе", "А. Кристи", 198, false);

addToLibrary(book1);
addToLibrary(book2);
addToLibrary(book3);

console.log(myLibrary);

const catalog = document.querySelector(".catalog");
function ShowLibrary() {
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");

    card.classList.add("card");
    title.classList.add("card__title");
    author.classList.add("card__author");
    pages.classList.add("card__pages");

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = `${book.pages} стр.`;

    card.append(title, author, pages);

    catalog.appendChild(card);
  });
}

const add_btn = document.querySelector(".add__btn");
const dialog = document.querySelector(".newBook__dialog");
const form = document.querySelector(".newBook__form");
const cancelBtn = document.querySelector(".cancel__btn");

add_btn.addEventListener("click", () => {
  dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
  dialog.close();
});

ShowLibrary();
