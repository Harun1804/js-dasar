function volumeKubus(sisi) {
    return sisi * sisi * sisi;
}

function jumlahVolume() {
    let hasil = 0;

    for (let i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    
    return hasil;
}

var nilaiSisiA = parseInt(prompt('Masukan Nilai Sisi Kubus A'));
var nilaiSisiB = parseInt(prompt('Masukan Nilai Sisi Kubus B'));

console.log(jumlahVolume(volumeKubus(nilaiSisiA),volumeKubus(nilaiSisiB)));