document.addEventListener("DOMContentLoaded", function() {
function Book(titleAndAuthor, pageCount, status) {
    this.titleAndAuthor = titleAndAuthor;
    this.pageCount = pageCount;
    this.status = status;
    this.info = function() {
        return this.titleAndAuthor + ', '+ this.pageCount + ', ' + this.status;
    };
}

const libraryTable = document.getElementById("library");

function addBookToLibrary(Book) {
    library.push(Book)
}

function addToTable(titleAndAuthor, pageCount, status){
    var row = libraryTable.insertRow(0);
    var titleCell = row.insertCell(0);
    var pageCell = row.insertCell(1);
    var statusCell = row.insertCell(2);
    titleCell.innerHTML = titleAndAuthor;
    pageCell.innerHTML = pageCount;
    statusCell.innerHTML = status;
}

function addTestBooks(library){
    for (let i = 0; i < library.length; i++) {
        let book = library[i];
        addToTable(book[0], book[1], book[2]);
    }
}

let library = [];
const theHobbit = new Book('The Hobbit by J.R.R. Tolkien', '295 pages', 'not read yet');
// console.log(theHobbit.info());
addBookToLibrary(theHobbit);
console.table(library);


addTestBooks(library);
});