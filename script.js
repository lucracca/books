let modalDimmer = document.getElementsByClassName("modalDimmer")[0];
let closeBtn = document.getElementsByClassName("closeBtn")[0];
let plusBtn = document.getElementsByClassName("plusBtn")[0];
let editBtn = document.getElementsByClassName("editBtn")[0];
let delBtn = document.getElementsByClassName("delBtn")[0];
let body = document.getElementsByTagName("body")[0];
let configMode = false;

plusBtn.addEventListener("click", function(e) {
    modalDimmer.style.display = "block";
});

closeBtn.addEventListener("click", function(e) {
    modalDimmer.style.display = "none";
});
window.addEventListener("click", function(e) {
    if (e.target == modalDimmer) modalDimmer.style.display = "none";
});

editBtn.addEventListener("click", function(e) {
    configMode = toggleConfigMode(configMode);
    if (configMode) editMode();
    else turnOffConfig();
});

function editMode() {
    editBtn.style.background = "gray";
    body.style.cursor = "pointer";
}

function toggleConfigMode(configMode) {
    return !configMode;
}



function turnOffConfig() {
    body.style.cursor = "default";
    editBtn.style.background = "#6dc36d";
    //turn off hover
}


const mainContainer = document.getElementsByClassName("mainContainer")[0];
let myLibrary = [];

function Book(title, author, pages, didRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.didRead = didRead
    this.info = function() {
        return (title + " by " + author + ", " + pages + ", " + (didRead ? "already read it" : "not read yet"))
    }
}

function addBookToLibrary(bookObj) {
    myLibrary.push(bookObj);
}




b1 = new Book("A Game of Thrones", "George R.R. Martin", 453, false);
b2 = new Book("A Clash of Kings", "George R.R. Martin", 470, false);
b3 = new Book("A Storm of Swords", "George R.R. Martin", 505, false);
b4 = new Book("A Feast for Crows", "George R.R. Martin", 600, false);
b5 = new Book("A Dance with Dragons", "George R.R. Martin", 620, false);
b6 = new Book("The Winds of Winter ", "George R.R. Martin", 530, false);

function render(mainContainer) {
    myLibrary.forEach((book, i) => {
        let temp = document.createElement("div");
        temp.innerText = book.info();
        temp.dataset.bookIndex = i;

        // let editBtn = document.createElement("button");
        // let delBtn = document.createElement("button");

        // editBtn.innerText = "Edit";
        // delBtn.innerText = "Delete";

        // editBtn.classList = "editBtn";
        // delBtn.classList = "delBtn";

        // temp.appendChild(editBtn);
        // temp.appendChild(delBtn);

        mainContainer.appendChild(temp);

    });
}
addBookToLibrary(b1);
addBookToLibrary(b2);
addBookToLibrary(b3);
addBookToLibrary(b4);
addBookToLibrary(b5);
addBookToLibrary(b6);
render(mainContainer);