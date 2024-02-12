document.addEventListener("DOMContentLoaded", function() {
function Book(titleAndAuthor, pageCount, status) {
    this.titleAndAuthor = titleAndAuthor;
    this.pageCount = pageCount;
    this.status = status;
    this.info = function() {
        return this.titleAndAuthor + ', '+ this.pageCount + ', ' + this.status;
    };
}

const libraryTableBody = document.getElementById("tableBody");

function addBookToLibrary(Book) {
    libraryArray.push(Book)
}

// Adds books to table using parameters passed as params
function addToTable(titleAndAuthor, pageCount, status){
    var row = libraryTableBody.insertRow();
    var titleCell = row.insertCell();
    var pageCell = row.insertCell();
    var statusCell = row.insertCell();
    titleCell.innerHTML = titleAndAuthor;
    pageCell.innerHTML = pageCount;
    statusCell.innerHTML = status;
}

// Adds all test books to the HTML Table via addToTable funct.
function addTestBooksToTable(library){
    for (let i = 0; i < library.length; i++) {
        let book = library[i];
        addToTable(book.titleAndAuthor, book.pageCount, book.status);
    }
}

// Add test rows to table with test button
function addTestRows() {
    addToTable('test','test','test');
}

document.getElementById("test").addEventListener('click', addTestRows );

// library declaration and test book
const theHobbit = new Book('The Hobbit by J.R.R. Tolkien', '295 pages', 'not read yet');
let libraryArray = [];
addBookToLibrary(theHobbit);
// console.log(theHobbit.info());

// Test books
//addBookToLibrary(theHobbit); //this is done as part of the library add
addTestBooksToTable(libraryArray);
console.table(libraryArray);

//Adding a new book to table and library
function addNewBookOnPage(event) {
    event.preventDefault();
    const form = document.getElementById('bookForm')
    console.log(form)
    new Book(form.titleAndAuthor.value, form.pageCount.value, form.haveRead.value)
    addToTable(form.titleAndAuthor.value, form.pageCount.value, form.haveRead.value)
    document.getElementById('formModal').close()
}

function showBookForm() {
    document.getElementById('formModal').showModal();
}

document.getElementById('newBook').addEventListener('click', showBookForm )
document.getElementById('submitNewBook').addEventListener('click', addNewBookOnPage )
});