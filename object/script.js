// Membuat Objeck
// Objeck Literal
var mahasiswa = {
    nama : 'Harun Ar - Rasyid',
    umur : 22,
    ip : [3.5,3.6,3.4,3.3,3.5,3.4,3.8,3.9],
    ipk : function(){
        var total = 0;
        var ips = this.ip;
        for (let i = 0; i < ips.length; i++) {
            total += ips[i];
        }
        return total/ips.length;
    }
}

// Function Declaration
function buatObjeckMahasiswa(nama,npm,email,jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.npm = npm;
    mhs.email = email;
    mhs.jurusan = jurusan;

    return mhs;
}

var mhs3 = buatObjeckMahasiswa("Fanny","1174070","fanny@gmail.com","D4TI");

// Constructer
function Mahasiswa(nama,npm,email,jurusan) {
    this.nama = nama;
    this.npm = npm;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa("Fanny","1174070","fanny@gmail.com","D4TI");