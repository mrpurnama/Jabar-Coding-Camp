// Soal 1 - Function Penghitung Jumlah Kata
var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok "
var kalimat_2 = " Saya Iqbal"
var kalimat_3 = " Saya Muhammad Iqbal Mubarok "

function jumlah_kata(kalimat) {
    console.log(kalimat.split(' ').filter(function (i) {
        return i != '';
    }).length);
}

jumlah_kata(kalimat_1)
jumlah_kata(kalimat_2)
jumlah_kata(kalimat_3)

// Soal 2 - Function Penghasil Tanggal Hari Esok

var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

function next_date(day, month, year) {
    var maxDay = 30;
    var oddDaysMonth = [0, 2, 4, 6, 7, 9, 11];
    var isLeapYear = year % 4 == 0;
    var nextDay = day + 1;
    if (month == 2) {
        if (isLeapYear) {
            maxDay = 29;
        } else {
            maxDay = 28;
        }
    } else if (oddDaysMonth.includes(month - 1)) {
        maxDay = 31;
    } else {
        maxDay = 30;
    }
    if (nextDay > maxDay) {
        nextDay -= maxDay;
        month += 1;
        if (month > 12) {
            month -= 12
            year += 1;
        }
    } 
    console.log(nextDay + ' ' + months[month - 1] + ' ' + year);
}


var tanggal = 29
var bulan = 2
var tahun = 2020

next_date(tanggal , bulan , tahun )

var tanggal = 28
var bulan = 2
var tahun = 2021

next_date(tanggal , bulan , tahun )

var tanggal = 31
var bulan = 12
var tahun = 2020

next_date(tanggal , bulan , tahun )
