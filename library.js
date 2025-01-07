const myLibrary = [];
const page = document.querySelector(".container");
const btnCtn = document.querySelector('.btn-ctn');
const subpage = document.querySelector(".disp-area");

const addBtn = document.createElement("button");
addBtn.classList.add('add-lib');
addBtn.textContent = "Add Book";

const revBtn = document.createElement("button");
revBtn.classList.add('remove-lib');
revBtn.textContent = "Remove Book";

const togRead = document.createElement("button");
togRead.classList.add('read-toggle');
togRead.textContent = "Read/Unread"

btnCtn.appendChild(addBtn);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = function() {
    if (read === true) {
        return "Yes";     
    } else {
        return "No";
    };
  };
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
    auth.textContent = myLibrary[i].author;
    const bPages = document.createElement("p");
    bPages.textContent = `${myLibrary[i].pages} pages`;

    const cbc = document.createElement("div");
    cbc.classList.add("card-btn-ctn");

    card.appendChild(ttle);
    card.appendChild(auth);
    card.appendChild(bPages);
    card.appendChild(cbc);

    cbc.appendChild(revBtn);
    cbc.appendChild(togRead)
  };
};

const book1 = new Book("Slated", "Teri Terry", 800);
const inBook = document.querySelector('.form-ctn');
const frmBtn = document.querySelector('.form-btn');
const closerBtn = document.querySelector('.close-form');

addBtn.addEventListener('click', () => {
    inBook.classList.add('form-visible');
});

frmBtn.addEventListener('click', (e) => {
    e.preventDefault();
});

closerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    inBook.classList.remove('form-visible');
});

addBookToLibrary(book1);
displayBooks();