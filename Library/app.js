const addBooksButtonEl = document.querySelector(".addBooks_button");
const addBookContainerEl = document.querySelector(".addBook__container")
const crossButton = document.querySelector('span');
const actualAddBookButtonEl = document.querySelector('.addBook__button1')
const titleInputEl = document.getElementById('titleInput')
const authorInputEl = document.getElementById('authorInput')
const pagesInputEl = document.getElementById('pagesInput')
const mainBookContainer = document.querySelector('.main__books_parent');




//constructor for storing books in Object form
function Library(title, author, pages, read = false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read;
}
let LibraryArray = new Array();
//code that will run at every beginning
getFromLocalStorage();
updateDOM();


function pushToLocalStorage() {

    localStorage.clear();
    let key = 0;
    for (let el of LibraryArray) {
        let s = "";
        s += el.title + "$";
        s += el.author + "$";
        s += el.pages + "$"
        s += el.read;

        localStorage.setItem(key, s);
        key++;
        console.log("Pushed to local storage successfully.")
    }
}

function getFromLocalStorage() {

    for (let i = 0; i < localStorage.length; i++) {

        let bookContent = localStorage[i].split('$');
        let readStatus = eval(bookContent[3]);
        let bookObj = new Library(bookContent[0], bookContent[1], bookContent[2], readStatus);

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
                    <i class="fas fa-trash" title = "Delete"></i>
                    <h3 class="book__title">${el.title}</h3>
                    <h3 class="book__author">${el.author}</h3>
                    <h3 class="book__pages">${el.pages} Pages</h3>

                    <button class="read_button">Read</button>
                    <button class ="not_read_button">Not Read</button>
        `
        if (el.read)
            element.classList.add('read');

        mainBookContainer.appendChild(element);

    }
}
function storeBookInObj() {
    let title = titleInputEl.value;
    let author = authorInputEl.value;
    let pages = pagesInputEl.value;

    titleInputEl.value = "";
    authorInputEl.value = "";
    pagesInputEl.value = "";
    let newBook = new Library(title, author, pages);
    LibraryArray.push(newBook);
    pushToLocalStorage();
    updateDOM();
    closeAddBookPopup();
}

function updateReadStatus(bookName, readStatus) {

    for (el of LibraryArray) {
        if (el.title == bookName) {
            el.read = readStatus;
            break;
        }
    }
    pushToLocalStorage();
    updateDOM();
}

function deleteBook(bookName) {
    
    console.log("I am also running")
    for(el of LibraryArray) {

        if(el.title == bookName) {
            
            let index = LibraryArray.indexOf(el);
            LibraryArray.splice(index, 1);
            pushToLocalStorage();
            updateDOM();
            console.log("Delete Successfully")
            break;
        }
    }
}

mainBookContainer.addEventListener('click', function (e) {

    const target = e.target;
    if (target.classList.contains('read_button')) {
        let clickedBookName = target.previousElementSibling.previousElementSibling.previousElementSibling.textContent
        updateReadStatus(clickedBookName, true);
    }
    else if (target.classList.contains('not_read_button')) {
        let clickedBookName = target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        updateReadStatus(clickedBookName, false);
    }
    else if (target.classList.contains('fa-trash')) {

        let clickedBookName = target.nextElementSibling.nextElementSibling.textContent;
        deleteBook(clickedBookName);
        console.log("I am running :)")
    }
});











addBooksButtonEl.addEventListener('click', openAddBookPopup);
crossButton.addEventListener('click', closeAddBookPopup);
actualAddBookButtonEl.addEventListener('click', storeBookInObj)















