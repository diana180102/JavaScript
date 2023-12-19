// La variable global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Cambia el código debajo de esta línea
function add(bookName, newElement) {
    let newBook = bookName.slice();
    newBook.push(newElement);
    console.log(newBook);
    return newBook;

    // Cambia el código encima de esta línea
}

// Cambia el código debajo de esta línea
function remove(bookName, deleteBook) {

    let newBookD = [];


    newBookD = bookName.filter(book => book !== deleteBook);

    console.log(newBookD);
    return newBookD;

    // Cambia el código encima de esta línea

}

add(bookList, "A Brief History of Time");
remove(bookList, "On The Electrodynamics of Moving Bodies");