let myLibrary = [];
let bookID = 1;

// function Book(title, author, pages, read, bookID) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;//read || not read
//     this.bookId = bookID;
// }
class Book {
    constructor(title, author, pages, read, bookID) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read; //read || not read
        this.bookId = bookID;
    }
}

function addBookToLibrary(title, author, pages, status) {
    const newbook = new Book(title, author, pages, status, bookID);
    bookID += 1;
    myLibrary.push(newbook)
}

const modal = document.querySelector(".modal")
const submit = document.querySelector(".submit")
const addBook = document.querySelector(".addBook")
const form = document.querySelector("#form")
const exit = document.querySelector(".exit")

addBook.addEventListener('click', (e) => {
    modal.style.display = 'flex';
    e.preventDefault();
})

form.onsubmit = (e) => {
    e.preventDefault()
    modal.style.display = 'none';
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const status = document.getElementById('choice1').checked
    addBookToLibrary(title, author, pages, status)
    updateUi(myLibrary[myLibrary.length - 1])
    form.reset()

}

exit.addEventListener('click', (e) => {
    modal.style.display = 'none';
    e.preventDefault();
})

function bookUi(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book');

    const title = document.createElement('h2');
    title.classList.add('title');
    title.innerHTML = `${book.title}`;
    bookCard.appendChild(title);

    const author = document.createElement('p');
    author.classList.add('author');
    author.innerHTML = `Author: ${book.author}`;
    bookCard.appendChild(author);

    const pages = document.createElement('p');
    pages.classList.add('pages');
    pages.innerHTML = `Pages: ${book.pages}`;
    bookCard.appendChild(pages);

    const statusCard = document.createElement('div');
    statusCard.classList.add('status');
    bookCard.appendChild(statusCard);

    const read = document.createElement('button');
    read.classList.add('Read');
    read.setAttribute('onclick', `readBook(event,${book.bookId})`);
    read.innerHTML = `read`;
    statusCard.appendChild(read);

    const notRead = document.createElement('button');
    notRead.classList.add('notRead');
    notRead.setAttribute('onclick', `notReadBook(event,${book.bookId})`);
    notRead.innerHTML = `NotRead`;
    statusCard.appendChild(notRead);

    if (book.read) {
        read.style.backgroundColor = 'rgb(90, 211, 90)';
    }
    else {
        notRead.style.backgroundColor = 'rgb(225, 62, 62)';
    }

    const remove = document.createElement('button');
    remove.classList.add('remove');
    remove.setAttribute('bookId', book.bookId);
    remove.setAttribute('onclick', `removeBtn(event,${book.bookId})`);

    remove.innerHTML = `remove`;
    bookCard.appendChild(remove);
    return bookCard
}

function updateUi(book) {
    const books = document.querySelector('.books')
    books.appendChild(bookUi(book))
}

function createUi() {
    const books = document.querySelector('.books')
    for (let book of myLibrary) {
        books.appendChild(bookUi(book))
    }
}
createUi()

function removeBtn(event, id) {
    event.target.parentNode.style.display = "none";
    myLibrary = myLibrary.filter(book => {
        return book.bookId != id
    })
}

function readBook(event, id) {
    event.target.style.backgroundColor = 'rgb(90, 211, 90)';
    event.target.nextSibling.style.backgroundColor = 'rgba(225, 62, 62, 0.2)';
    myLibrary.map(book => {
        if (book.bookId == id)
            book.read = true;
    })
}

function notReadBook(event, id) {
    event.target.style.backgroundColor = 'rgb(225, 62, 62)';
    event.target.previousSibling.style.backgroundColor = 'rgba(90, 211, 90, 0.2)';
    myLibrary.map(book => {
        if (book.bookId == id)
            book.read = false;
    })
}
