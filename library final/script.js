// Sample JavaScript for adding books to the list
function addBook() {
    // Get form values
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;

    // Create a new book object
    var book = {
        title: title,
        author: author
    };

    // Add the book to the list
    var bookList = document.getElementById('bookList');
    var bookItem = document.createElement('div');
    bookItem.innerHTML = `<strong>${book.title}</strong> by ${book.author}`;
    bookList.appendChild(bookItem);

    // Clear the form
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
}
