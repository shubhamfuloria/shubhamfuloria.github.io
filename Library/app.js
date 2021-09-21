const addBooksButtonEl = document.querySelector(".addBooks_button");
const addBookContainerEl = document.querySelector(".addBook__container")
const crossButton = document.querySelector('span');
const actualAddBookButtonEl = document.querySelector('.addBook__button1')
const titleInputEl = document.getElementById('titleInput')
const authorInputEl = document.getElementById('authorInput')
const pagesInputEl = document.getElementById('pagesInput')
const mainBookContainer = document.querySelector('.main__books_parent')





//constructor for storing books in Object form
function Library(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}
let LibraryArray = new Array();
//code that will run at every beginning
getFromLocalStorage();
updateDOM();


function pushToLocalStorage() {

    let key = 0;
    for (let el of LibraryArray) {
        let s = "";
        s += el.title + "$";
        s += el.author + "$";
        s += el.pages;

        localStorage.setItem(key, s);
        key++;
        console.log("Pushed to local storage successfully.")
    }
}

function getFromLocalStorage() {

    for (let i = 0; i < localStorage.length; i++) {

        let bookContent = localStorage[i].split('$');
        let bookObj = new Library(bookContent[0], bookContent[1], bookContent[2]);
        LibraryArray.push(bookObj);
    }
}

function openAddBookPopup() {
    addBookContainerEl.classList.add("open")
}
function closeAddBookPopup() {
    addBookContainerEl.classList.remove("open");
}
function updateDOM() {

    mainBookContainer.innerHTML = "";
    for (let el of LibraryArray) {
        let element = document.createElement("div");
        element.classList.add("main__books_child");
        element.innerHTML = `
                    <h3 class="book__title">${el.title}</h3>
                    <h3 class="book__author">${el.author}</h3>
                    <h3 class="book__pages">${el.pages} Pages</h3>

                    <button id="read_button">Read</button>
                    <button id="not_read_button">Not Read</button>
        `
        mainBookContainer.appendChild(element);

    }
}
function storeBookInObj() {
    let title = titleInputEl.value;
    let author = authorInputEl.value;
    let pages = pagesInputEl.value;

    let newBook = new Library(title, author, pages);
    LibraryArray.push(newBook);
    pushToLocalStorage();
    updateDOM();
    closeAddBookPopup();
}













addBooksButtonEl.addEventListener('click', openAddBookPopup);
crossButton.addEventListener('click', closeAddBookPopup);
actualAddBookButtonEl.addEventListener('click', storeBookInObj)















