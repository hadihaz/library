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
    const isRead = document.getElementById('choice1').checked
    const Read = document.getElementById('choice2').checked
    console.log(title, author, pages, isRead, Read);
    form.reset()
}
exit.addEventListener('click',(e)=>{
    modal.style.display = 'none';   
    e.preventDefault();

})




