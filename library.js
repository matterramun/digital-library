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
    library.push(Book)
}

function addToTable(titleAndAuthor, pageCount, status){
    var row = libraryTableBody.insertRow();
    var titleCell = row.insertCell();
    var pageCell = row.insertCell();
    var statusCell = row.insertCell();
    titleCell.innerHTML = titleAndAuthor;
    pageCell.innerHTML = pageCount;
    statusCell.innerHTML = status;
}

function addTestBooks(library){
    for (let i = 0; i < library.length; i++) {
        let book = library[i];
        addToTable(book.titleAndAuthor, book.pageCount, book.status);
    }
}

// HTML modifiers
document.getElementById("test").addEventListener("click",addToTable('test','test','test'));

// library declaration and test book
const theHobbit = new Book('The Hobbit by J.R.R. Tolkien', '295 pages', 'not read yet');
let library = [theHobbit];
// console.log(theHobbit.info());

// Test books
//addBookToLibrary(theHobbit);
console.table(library);
addTestBooks(library);
});