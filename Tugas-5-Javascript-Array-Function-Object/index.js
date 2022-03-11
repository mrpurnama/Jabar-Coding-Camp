// Soal 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
daftarHewan.sort().forEach(
    function(d) {
        console.log(d);
    }
)

// Soal 2
function introduce(data) {
    return 'Nama saya ' + data.name + ', umur saya ' + data.age + ' tahun, alamat saya di ' + data.address + ', dan saya punya hobby yaitu ' + data.hobby;
}
 
var data = {name : "John" , age : 30 , address : "Jalan Pelesiran" , hobby : "Gaming" }
 
var perkenalan = introduce(data)
console.log(perkenalan) 

// Soal 3
function hitung_huruf_vokal(input) {
    var vocal = 'aiueo'
    
    return input.split('').filter(function (i) {
        return vocal.includes(i.toLowerCase())
    }).length;
}

var hitung_1 = hitung_huruf_vokal("Muhammad")

var hitung_2 = hitung_huruf_vokal("Iqbal")

console.log(hitung_1 , hitung_2)


// Soal 4
function hitung(number) {
    return -2 + number * 2;
}


console.log( hitung(0) )
console.log( hitung(1) )
console.log( hitung(2) )
console.log( hitung(3) )
console.log( hitung(5) )