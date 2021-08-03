
// 1. Menambah isi array
// var arr = [];
// arr[0] = "Harun";
// arr[1] = "Ar";
// arr[2] = "-";
// arr[3] = "Rasyid";
// console.log(arr);

// 2. Menghapus Isi Array
// var arr = ["Harun","Ar","-","Rasyid"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Moona","Pekora","Miko","Risu","Iofi"];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Array Method
var arr = ["Moona","Pekora","Miko","Risu","Iofi"];
var angka = [2,1,3,5,7,9];
// 1. Join = mengabungkan isi array
// console.log(arr.join());

// 2. Push & Pop
// arr.push("Anya"); menambah value array di belakang
// arr.pop(); menghilangkan 1 element terakhir pada akhir
// console.log(arr.join())

// 3. Unshift & shift
// arr.unshift('Anya'); Menambahkan ke yang paling pertama
// arr.shift(); Menghilangkan element pertama pada array
// console.log(arr.join())

// 4. slice & splice
// splice(indexAwal,mauDiHapusBerapa,ElementBaru);
// arr.splice(2,0,'Anya');
// slice(awal,akhir)
// var arr2 = arr.slice(2,5);
// console.log(arr2.join())

// 5. foreach & map
// arr.forEach(function (e,i) { tidak mengembalikan array
//     console.log("Favorit Ke - "+(i+1)+" Adalah "+e);
// });
// var arr2 = arr.map(function (e) { mengembalikan array
//     return e;
// });
// console.log(arr2.join());

// 6. Sort
// console.log(angka.sort(function(a,b){
//     return a-b;
// }));

// 7. Filter & Find
// Find = Mengembalikan 1 nilai
// Filter Mengembalikan Banyak Nilai

// var angka2 = angka.filter(function(x){
//     return x > 5;
// });
var angka2 = angka.find(function(x){
    return x > 5;
});

console.log(angka2);