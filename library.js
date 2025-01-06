const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const page = document.querySelector(".container");
page.style.cssText = "display: flex; flex-direction: column; gap: 1rem";

const subpage = document.createElement("div");
subpage.style.cssText = "display: flex; gap: 1rem";

page.appendChild(subpage);

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.cssText =
      "display: flex; flex-direction: column; gap: 1rem; border-radius: 1rem; background-color: lightblue; padding: 1rem; width: 13rem";

    subpage.appendChild(card);

    const ttle = document.createElement("h3");
    ttle.textContent = myLibrary[i].title;
    ttle.style.cssText = "color: black";
    const auth = document.createElement("p");
    auth.textContent = myLibrary[i].author;
    const bPages = document.createElement("p");
    bPages.textContent = myLibrary[i].pages;

    card.appendChild(ttle);
    card.appendChild(auth);
    card.appendChild(bPages);
  }
}

const addBtn = document.createElement("button");
addBtn.style.cssText = [
  "padding: 1rem 1.5rem; color: white; font-weight: bold; background-color: blue; border: 0px; border-radius: 2rem; width: 7rem"
];
addBtn.textContent = "Add Book";

page.appendChild(addBtn);

const book1 = new Book("Slated", "Teri Terry", 800);

addBookToLibrary(book1);
displayBooks();