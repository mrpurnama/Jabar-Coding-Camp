// Soal 1
var nilai;
 
nilai = Math.floor(Math.random() * 100) + 1;

if (nilai >= 85) {
    console.log(nilai + ' Indeksnya A')
} else if (nilai >= 75 && nilai < 85) {
    console.log(nilai + ' Indeksnya B')
} else if (nilai >= 65 && nilai < 75) {
    console.log(nilai + ' Indeksnya C')
} else if (nilai >= 55 && nilai < 65) {
    console.log(nilai + ' Indeksnya D')
} else {
    console.log(nilai + ' Indeksnya E')
}

// Soal 2
var tanggal = 08;
var bulan = 11;
var tahun = 1996;

switch(bulan) {
    case 1:   { console.log(tanggal + ' Januari ' + tahun); break; }
    case 2:   { console.log(tanggal + ' Februari ' + tahun); break; }
    case 3:   { console.log(tanggal + ' Maret ' + tahun); break; }
    case 4:   { console.log(tanggal + ' April ' + tahun); break; }
    case 5:   { console.log(tanggal + ' Mei ' + tahun); break; }
    case 6:   { console.log(tanggal + ' Juni ' + tahun); break; }
    case 7:   { console.log(tanggal + ' Juli ' + tahun); break; }
    case 8:   { console.log(tanggal + ' Agustus ' + tahun); break; }
    case 9:   { console.log(tanggal + ' September ' + tahun); break; }
    case 10:   { console.log(tanggal + ' Oktober ' + tahun); break; }
    case 11:   { console.log(tanggal + ' November ' + tahun); break; }
    case 12:   { console.log(tanggal + ' Desember ' + tahun); break; }
    default:  { console.log('Bulan tidak ditemukan, silahkan check kembali inputan anda'); }
}

// Soal 3
var n = 7;
var pager = '#'
for (var i = 0; i < n; i++) {
    console.log(pager);
    pager = pager + '#';
}

// Soal 4
var m = 7;
var divider = '#'
for (var x = 1; x <= m; x++) {
    if (x % 3 == 1) {
        console.log(x + '- I love programming')
    } else if (x % 3 == 2) {
        console.log(x + '- I love Javascript')
    } else {
        console.log(x + '- I love VueJS\n' + divider)
    }
    divider = divider + '#';
}