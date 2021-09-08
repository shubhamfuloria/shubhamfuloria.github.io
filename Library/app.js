const addBookEl = document.querySelector(".addBooks_button");
const addBookContainerEl = document.querySelector(".addBook__container")
const addBookPopupEl = document.querySelector(".addBook")
const containerEl = document.querySelector(".container");
const closeIconEl = document.querySelector("span");
const popupAddBookButtonEl = document.querySelector(".addBook__button1");
const titleInputEl = document.getElementById("titleInput");
const authorInputEl = document.getElementById("authorInput");
const pagesInputEl = document.getElementById("pagesInput");
const bookContainerEl = document.querySelector(".main__books_parent");
function Library(name, author, pages)
{
    this.name = name;
    this.author = author;
    this.pages = pages;
    
}

getFromLocalStorage();
let bookArray = new Array();


function closePopupEl() {
    addBookContainerEl.classList.remove('open');
}

function openPopupEl() {
    addBookContainerEl.classList.add('open');
}

function createBookElement(name, author, pages) {

    let mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'main__books_child');
    mainDiv.innerHTML = `
        <h3 class="book__title">${name}</h3>
        <h3 class="book__author">${author}</h3>
        <h3 class="book__pages">${pages} Pages</h3>

        <button id="read_button">Read</button>
        <button id="not_read_button">Not Read</button>
    `
    return mainDiv;
}

function storeInLocalStorage()
{
    for(let i = 0; i < bookArray.length; i++)
    {
        let currBookString = `${bookArray[i].name}&${bookArray[i].author}&${bookArray[i].pages}&`;
        localStorage.setItem(`${i}`, currBookString);
    }
}

function getFromLocalStorage()
{
    let curr = "";
    for(let i = 0; i < localStorage.length; i++)
    {
        let S = i[`${i}`].value;
        let name = "", author = "", pages ="";
        
        for(let c of S)
        {
            if(c != '&')
                curr += c;
            else
            {
                if(name == "")
                    name = curr;
                else if(author == "")
                    author = curr;
                else
                    pages = curr;
                
                curr = "";
            }
        }
        let newBook = new Library(name, author, pages);
        bookArray.push(newBook);
    }
}

function updateDOM() {

    bookContainerEl.innerHTML = "";
    for(el of bookArray)
    {
        let book = createBookElement(el.name, el.author, el.pages);
        bookContainerEl.appendChild(book);
    }
}

function addBookInObj() {

    let name = titleInputEl.value;
    let author = authorInputEl.value;
    let pages = pagesInputEl.value;

    let newBook = new Library(name, author, pages);
    bookArray.push(newBook);

    titleInputEl.value = "";
    authorInputEl.value = "";
    pagesInputEl.value = "";
    closePopupEl();
    updateDOM();
}




function main() {

    //open popup
    updateDOM();
    addBookEl.addEventListener('click', openPopupEl);
    closeIconEl.addEventListener('click', closePopupEl);

    popupAddBookButtonEl.addEventListener('click', addBookInObj);
    


}

main();

