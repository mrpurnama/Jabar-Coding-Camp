// Soal 1
var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok "
var kalimat_2 = " Saya Iqbal"
var kalimat_3 = " Saya Muhammad Iqbal Mubarok "

function jumlah_kata (kalimat) {
    return kalimat.split(' ').filter(function (i) {
        return i != '';
    }).length;
}


console.log(jumlah_kata(kalimat_1))
console.log(jumlah_kata(kalimat_2))
console.log(jumlah_kata(kalimat_3))