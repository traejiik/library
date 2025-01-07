const myLibrary = [];
const page = document.querySelector(".container");
const btnCtn = document.querySelector('.btn-ctn');
const subpage = document.querySelector(".disp-area");

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
};

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    subpage.appendChild(card);

    const ttle = document.createElement("h3");
    ttle.textContent = myLibrary[i].title;
    const auth = document.createElement("p");
    auth.textContent = `Authored by: ${myLibrary[i].author}`;
    const bPages = document.createElement("p");
    bPages.textContent = `Pages: ${myLibrary[i].pages}`;

    card.appendChild(ttle);
    card.appendChild(auth);
    card.appendChild(bPages);
  };
};

const addBtn = document.createElement("button");
addBtn.classList.add('add-lib');
addBtn.textContent = "Add Book";

const revBtn = document.createElement("button");
revBtn.classList.add('remove-lib');
revBtn.textContent = "Remove Book";

btnCtn.appendChild(addBtn);
btnCtn.appendChild(revBtn);

const book1 = new Book("Slated", "Teri Terry", 800);

addBookToLibrary(book1);
displayBooks();