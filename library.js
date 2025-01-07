const myLibrary = [];
const page = document.querySelector(".container");
const btnCtn = document.querySelector(".btn-ctn");
const subpage = document.querySelector(".disp-area");

const addBtn = document.createElement("button");
addBtn.classList.add("add-lib");
addBtn.textContent = "Add Book";

btnCtn.appendChild(addBtn);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read ? "Yes" : "No";
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  subpage.innerHTML = "";
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
    const readStat = document.createElement("p");
    readStat.textContent = `Read: ${myLibrary[i].read}`;

    const cbc = document.createElement("div");
    cbc.classList.add("card-btn-ctn");

    const revBtn = document.createElement("button");
    revBtn.classList.add("remove-lib");
    revBtn.textContent = "Remove Book";

    const togRead = document.createElement("button");
    togRead.classList.add("read-toggle");
    togRead.textContent = "Read/Unread";

    card.appendChild(ttle);
    card.appendChild(auth);
    card.appendChild(bPages);
    card.appendChild(readStat);
    card.appendChild(cbc);

    cbc.appendChild(togRead);
    cbc.appendChild(revBtn);
  }
}

// const book1 = new Book("Slated", "Teri Terry", 800);
const inBook = document.querySelector(".form-ctn");
const form = document.querySelector("#fancy-form");
const closerBtn = document.querySelector(".close-form");

addBtn.addEventListener("click", () => {
  inBook.classList.add("form-visible");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);

  displayBooks();
  form.reset();
  inBook.classList.remove("form-visible");
});

closerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  inBook.classList.remove("form-visible");
});
