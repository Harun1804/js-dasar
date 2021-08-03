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

console.log(mahasiswa);