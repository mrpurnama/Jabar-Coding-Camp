// Soal 2
var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 

// Lanjutkan code untuk menjalankan function readBooksPromise 
let maxTime = 10000;

let bookIndex = 0

const cobaPromise = (time) => {
    if (bookIndex < books.length) {
        readBooksPromise(time, books[bookIndex])
            .then(cobaPromise)
            .catch(error => console.log(error))
    }
    bookIndex += 1;
}
cobaPromise(maxTime)
