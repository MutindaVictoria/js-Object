//1. Create a function called getAvailableBooks that returns an array of all available
//books.
function getAvailableBooks(bookk){
 const result=[]
for( let i=0; i<bookk.length; i++){
    if(bookk[i].title>=5){
   result.push(bookk[i].title);
}
}
return result;

}
const bookk = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];
    console.log(getAvailableBooks(books));

    //2. Create a function getBooksByAuthor that takes an author's name as an argument and
///returns an array of all books by that author.
function getBooksByAuthor(authors){
    authorsname=[]
    for( let i=0;i<authors.length;i++);
    if(authors[i].author==0)
    authorsname.push(getBooksByAuthor[i].author)


}
const book = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];
    console.log(getBooksByAuthor(author));



    //Create a function addNewBook that takes a book object as an argument and adds it
//to the library, ensuring that the new book has all required properties (title, author,
//publicationYear, and isAvailable).
function addNewBook(book){
    for(i=0;i<book.length;i++){
        book.push(addNewBook[i].properties)
    }
    

}
console.log()