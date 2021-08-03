function volumeKubus(sisi) {
    var volume = sisi * sisi * sisi;

    return volume;
}

function jumlahVolume(a,b) {
    return a + b;
}

var nilaiSisiA = parseInt(prompt('Masukan Nilai Sisi Kubus A'));
var nilaiSisiB = parseInt(prompt('Masukan Nilai Sisi Kubus B'));

console.log(jumlahVolume(volumeKubus(nilaiSisiA),volumeKubus(nilaiSisiB)));