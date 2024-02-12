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
function addBookToTable(titleAndAuthor, pageCount, status, index){
    var row = libraryTableBody.insertRow();
    var titleCell = row.insertCell();
    var pageCell = row.insertCell();
    var statusCell = row.insertCell();
    var deleteButton = document.createElement('button');
    row.appendChild(deleteButton);
    titleCell.innerHTML = titleAndAuthor;
    pageCell.innerHTML = pageCount;
    statusCell.innerHTML = status;
    deleteButton.innerHTML = 'delete';
    deleteButton.setAttribute('data-book-index', index);
    deleteButton.addEventListener('click', function(){deleteBook(index)})
}

// Delete a book by passing the data-book-index
function deleteBook(bookIndex){
    console.log("delete " + bookIndex)
    libraryArray.splice(bookIndex,1)
    console.table(libraryArray)
    addLibraryToTable(libraryArray)
}

// Adds all test books to the HTML Table via addToTable funct.
function addLibraryToTable(library){
    while (libraryTableBody.lastChild !== null) {
        libraryTableBody.removeChild(libraryTableBody.lastChild)
    }

    if (libraryArray.length === 0){
        addBookToLibrary(new Book('Test Book 1', '200 pages', 'not read'));
        addBookToLibrary(new Book('Test Book 2', '250 pages', 'read'));
        addBookToLibrary(new Book('The Hobbit by J.R.R. Tolkien', '295 pages', 'not read yet'));
    } 

    for (let i = 0; i < library.length; i++) {
        let book = library[i];
        addBookToTable(book.titleAndAuthor, book.pageCount, book.status, i);
    }
}

// Add test rows to table with test button
function addTestRows() {
    addBookToTable('test','test','test');
    addBookToLibrary(new Book('test', 'test', 'test'))
    console.table(libraryArray)
}

document.getElementById("test").addEventListener('click', addTestRows );

// library declaration and test book
let libraryArray = [];
// console.log(theHobbit.info());

// Test books
addLibraryToTable(libraryArray);
console.table(libraryArray);

//Adding a new book to table and library
function addNewBookOnPage(event) {
    event.preventDefault();
    const form = document.getElementById('bookForm')
    console.log(form)
    new Book(form.titleAndAuthor.value, form.pageCount.value, form.haveRead.value)
    addBookToTable(form.titleAndAuthor.value, form.pageCount.value, form.haveRead.value)
    document.getElementById('formModal').close()
}

function showBookForm() {
    document.getElementById('formModal').showModal();
}

document.getElementById('newBook').addEventListener('click', showBookForm )
document.getElementById('submitNewBook').addEventListener('click', addNewBookOnPage )
});