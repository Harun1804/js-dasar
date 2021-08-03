var item = prompt("Masukan Nama Makanan / Minuman : \n (cth : nasi,daging, susu,hamburger, softdrink)");

switch (item) {
  case 'nasi':
  case 'daging':
  case 'susu':
    alert('Makanan / minman SEHAT!');
    break;
  case 'hamburger':
  case 'softdrink':
    alert('Makanan / minman SEHAT!');
    break;
  default:
    alert('Yang Anda Masukan Tidak Ada Dalam List');
    break;
}
