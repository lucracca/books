let modalDimmer = document.getElementsByClassName("modalDimmer")[0];
let modalBody = document.getElementsByClassName("modalBody")[0];
let closeBtn = document.getElementsByClassName("closeBtn")[0];
let changeColorBtn = document.getElementsByClassName("changeColorBtn")[0];
let plusBtn = document.getElementsByClassName("plusBtn")[0];
let editBtn = document.getElementsByClassName("editBtn")[0];
let delBtn = document.getElementsByClassName("delBtn")[0];
let body = document.getElementsByTagName("body")[0];
let configMode = false;
let br = document.createElement("br");
let colors = ["rgb(60, 63, 67)",
    "rgb(92, 43, 41)",
    "rgb(97, 74, 25)",
    "rgb(99, 93, 25)",
    "rgb(52, 89, 32)",
    "rgb(22, 80, 75)",
    "rgb(45, 85, 94)",
    "rgb(30, 58, 95)",
    "rgb(66, 39, 94)",
    "rgb(91, 34, 69)",
    "rgb(68, 47, 25)",
    "rgb(60, 63, 67)"
];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

plusBtn.addEventListener("click", function(e) {
    openModal(e.target.dataset.bookIndex);
});

closeBtn.addEventListener("click", function(e) {
    modalDimmer.style.display = "none";
});
window.addEventListener("click", function(e) {
    if (e.target == modalDimmer) modalDimmer.style.display = "none";
});

editBtn.addEventListener("click", function(e) {});

function openModal(bookIndex) {
    modalBody.innerHTML = "";
    modalBody.append(document.getElementsByClassName("bookCard")[bookIndex].cloneNode(true));
    modalDimmer.style.display = "block";

}





const mainContainer = document.getElementsByClassName("mainContainer")[0];
let myLibrary = [];

function Book(title, author, pages, didRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.didRead = didRead;
    this.info = function() {
        return (title + " by " + author + ", " + pages + ", " + (didRead ? "already read it" : "not read yet"))
    };
}

function addBookToLibrary(bookObj) {
    myLibrary.push(bookObj);
}


function render(mainContainer) {
    myLibrary.forEach((book, i) => {
        let bookCard = document.createElement("div");
        bookCard.classList = "bookCard";
        bookCard.dataset.bookIndex = i;
        bookCard.addEventListener("click", e => openModal(e.target.dataset.bookIndex));


        let titleLbl = document.createElement("label");
        let authorLbl = document.createElement("label");
        let pagesLbl = document.createElement("label");
        let didReadLbl = document.createElement("label");

        titleLbl.classList = "titleLbl";
        authorLbl.classList = "authorLbl";
        pagesLbl.classList = "pagesLbl";
        didReadLbl.classList = "didReadLbl";

        titleLbl.innerText = book.title;
        authorLbl.innerText = "by " + book.author;
        pagesLbl.innerText = "pages: " + book.pages;
        didReadLbl.innerText = "status: " + (book.didRead ? "already read" : "not read yet");

        bookCard.style.background = colors[getRandomInt(colors.length - 1)];
        bookCard.append(titleLbl, document.createElement("br"), authorLbl, document.createElement("br"), pagesLbl, document.createElement("br"), didReadLbl);

        mainContainer.appendChild(bookCard);

    });
}

b1 = new Book("A Game of Thrones", "George R.R. Martin", 453, false);
b2 = new Book("A Clash of Kings", "George R.R. Martin", 470, false);
b3 = new Book("A Storm of Swords", "George R.R. Martin", 505, false);
b4 = new Book("A Feast for Crows", "George R.R. Martin", 600, false);
b5 = new Book("A Dance with Dragons", "George R.R. Martin", 620, false);
b6 = new Book("The Winds of Winter", "George R.R. Martin", 530, false);
b7 = new Book("A Dream of Spring ", "George R.R. Martin", 495, false);

addBookToLibrary(b1);
addBookToLibrary(b2);
addBookToLibrary(b3);
addBookToLibrary(b4);
addBookToLibrary(b5);
addBookToLibrary(b6);
addBookToLibrary(b7);


render(mainContainer);