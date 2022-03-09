// Soal 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";
console.log(pertama.substr(0, 4) + ' ' + pertama.substr(12, 6) + ' ' + kedua.substr(0, 7) + ' ' + kedua.substr(8, 10).toUpperCase());

// Soal 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";
console.log((parseInt(kataPertama) - parseInt(kataKeempat)) * (parseInt(kataKedua) + parseInt(kataKetiga)));

// Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 15); 
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);