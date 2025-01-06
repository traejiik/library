const myLibrary = [];
const page = document.querySelector(".container");
page.style.cssText = "display: flex; flex-direction: column; gap: 1rem";

const btnCtn = document.createElement('div');
btnCtn.classList.add('btn-ctn');
btnCtn.style.cssText = 'display: flex; gap: 1rem';

page.appendChild(btnCtn);

const addBtn = document.createElement("button");
addBtn.classList.add('add-lib');
addBtn.style.cssText = [
  "padding: 1rem 1.5rem; color: white; font-weight: bold; background-color: rgba(7, 59, 119, 0.7); border: 0px; border-radius: 2rem; width: 7rem; backdrop-filter: blur(20px)"
];
addBtn.textContent = "Add Book";

const revBtn = document.createElement("button");
revBtn.classList.add('remove-lib');
revBtn.style.cssText = [
  "padding: 1rem 1.5rem; color: white; font-weight: bold; border: 2px solid rgba(7, 59, 119, 0.7); background-color: rgba(7, 59, 119, 0.1); border-radius: 2rem; width: 10rem; backdrop-filter: blur(20px)"
];
revBtn.textContent = "Remove Book";

btnCtn.appendChild(addBtn);
btnCtn.appendChild(revBtn);

const subpage = document.createElement("div");
subpage.style.cssText = "display: flex; gap: 1rem";

page.appendChild(subpage);

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.cssText =
      "display: flex; flex-direction: column; gap: 1rem; border-radius: 1rem; background-color: lightblue; padding: 1rem; width: 13rem; border: 2px solid rgba(7, 59, 119, 0.7)";

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
  }
}

const book1 = new Book("Slated", "Teri Terry", 800);

addBookToLibrary(book1);
displayBooks();