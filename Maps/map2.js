const { books } = require('../Arrays/arrays');
const shelves = new Map();

//Using map to add books on shelves
for (const book of books) {
    shelves.set(book.title, book.location); //key, value
}

const getBookLocation = title => {
    const shelf = shelves.get(title)
    if (!shelf)
        return 'Book not found on shelves'
    return shelf;
}

const location = getBookLocation('The Old Man And Sea')
console.log('Book: The Old Man And Sea')
console.log('Location: ', location)