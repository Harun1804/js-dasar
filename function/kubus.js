function volumeKubus(sisi) {
    var volume = sisi * sisi * sisi;

    return volume;
}

function jumlahVolume() {
    let hasil;

    for (let i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    
    return hasil;
}

var nilaiSisiA = parseInt(prompt('Masukan Nilai Sisi Kubus A'));
var nilaiSisiB = parseInt(prompt('Masukan Nilai Sisi Kubus B'));

console.log(jumlahVolume(volumeKubus(nilaiSisiA),volumeKubus(nilaiSisiB)));