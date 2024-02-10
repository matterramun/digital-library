function Book(titleAndAuthor, pageCount, status) {
    this.titleAndAuthor = titleAndAuthor;
    this.pageCount = pageCount;
    this.status = status;
    this.info = function() {
        return this.titleAndAuthor + ', '+ this.pageCount + ', ' + this.status;
    };
}

const theHobbit = new Book('The Hobbit by J.R.R. Tolkien', '295 pages', 'not read yet');
console.log(theHobbit.info());
