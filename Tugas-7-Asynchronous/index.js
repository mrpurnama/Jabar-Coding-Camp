// Soal 1
// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

// Tulis code untuk memanggil function readBooks di sini
let maxTime = 10000;

let bookIndex = 0

const cobaCallback = (time) => {
    if (bookIndex < books.length) {
        readBooks(time, books[bookIndex], cobaCallback)
    }
    bookIndex += 1;
}
cobaCallback(maxTime);