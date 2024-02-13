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
    // Add a new row for the new book
    var row = libraryTableBody.insertRow();

    // Add book details to table
    var titleCell = row.insertCell();
    var pageCell = row.insertCell();
    var statusCell = row.insertCell();
    var actionCell = row.insertCell();
    titleCell.innerHTML = titleAndAuthor;
    pageCell.innerHTML = pageCount;
    statusCell.innerHTML = status;

    // Add a delete button with a listener to delete a book
    var deleteButton = document.createElement('button');
    actionCell.appendChild(deleteButton);
    deleteButton.innerHTML = 'delete';
    deleteButton.setAttribute('data-book-index', index);
    deleteButton.addEventListener('click', function(){deleteBook(index)})

    // Add a read button to toggle read status
    var readButton = document.createElement('button');
    actionCell.appendChild(readButton);
    readButton.innerHTML = 'read';
    readButton.setAttribute('data-book-index', index);
    readButton.addEventListener('click', function(){toggleStatus(index)})
}

// Delete a book by passing the data-book-index
function deleteBook(bookIndex){
    console.log("delete " + bookIndex)
    libraryArray.splice(bookIndex,1)
    console.table(libraryArray)
    addLibraryToTable()
}

// Toggles index by changing library and regenerating table
function toggleStatus(bookIndex){
    if (libraryArray[bookIndex].status.toUpperCase() == "READ" ) {
        libraryArray[bookIndex].status = "Not Read"
    } else {
        libraryArray[bookIndex].status = "Read"
    }
    addLibraryToTable();
    console.log(libraryArray[bookIndex])
}

// Adds all books to the HTML Table via addBookToTable funct.
function addLibraryToTable(library = libraryArray){
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
}

document.getElementById("test").addEventListener('click', addTestRows );

// library declaration and test book
let libraryArray = [];

// Test books
addLibraryToTable();
console.table(libraryArray);

//Adding a new book to table and library
function addNewBookOnPage(event) {
    event.preventDefault();
    const form = document.getElementById('bookForm')
    const newBook = new Book(form.titleAndAuthor.value, form.pageCount.value, form.haveRead.value)
    addBookToLibrary(newBook)
    addLibraryToTable()
    document.getElementById('formModal').close()
    console.table(libraryArray);
}

function cancelNewBook(event) {
    event.preventDefault();
    document.getElementById('formModal').close()
}

// Show modal form, enable adding new books
function showBookForm() {
    document.getElementById('formModal').showModal();
}

document.getElementById('newBook').addEventListener('click', showBookForm )
document.getElementById('submitNewBook').addEventListener('click', addNewBookOnPage )
document.getElementById('cancel').addEventListener('click', cancelNewBook )
