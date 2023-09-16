const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;//read || not read


}

function addBookToLibrary() {
    const newbook = new Book('theHobbit', 'J.R.R.', '295', 'not read');
    myLibrary.push(newbook)
}

console.log(myLibrary);


const modal = document.querySelector(".modal")
const submit = document.querySelector(".submit")
const addBook = document.querySelector(".addBook")

submit.addEventListener('click', (e) => {
    modal.style.display='none';
    e.preventDefault();
})
addBook.addEventListener('click', (e) => {
    modal.style.display='flex';
    e.preventDefault();
})


