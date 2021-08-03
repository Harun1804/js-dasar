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

var nilaiSisi = parseInt(prompt('Masukan Nilai Sisi Kubus'));

console.log(jumlahVolume(volumeKubus(nilaiSisi),volumeKubus(nilaiSisi)));