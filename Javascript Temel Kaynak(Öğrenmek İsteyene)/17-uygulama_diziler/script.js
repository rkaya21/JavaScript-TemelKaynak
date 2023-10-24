// 1- "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.
let meyveler = ["Elma", "Armut", "Muz", "Çilek"];

// 2- Dizi kaç elemanlıdır?
console.log(meyveler.length);

// 3- Dizinin ilk ve son elemanı nedir?
console.log(meyveler[0]); // Elma
console.log(meyveler[meyveler.length - 1]); // Çilek

// 4- Elma dizinin bir elemanımıdır?
console.log(meyveler.includes("Elma"));
console.log(meyveler.indexOf("Elma"));

// 5- Kiraz meyvesini listenin sonuna ekleyiniz.
meyveler.push("Kiraz");

// 6- Dizinin son 2 elemanını siliniz.
meyveler.pop();
meyveler.pop();

// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
/*
    Öğrenci 1: Recep Bilgi 2010 (70,60,80)
    Öğrenci 2: Ali Bilgi 2012   (80,80,90)
    Öğrenci 3: Serkan  2009 (60,60,70)
*/
let ogr1 = ["Recep", "Bilgi", 2010, [70, 60, 80]];
let ogr2 = ["Ali", "Bilgi", 2012, [80, 80, 90]];
let ogr3 = ["Serkan", "Turan", 2009, [60, 60, 70]];

let ogrenciler = [ogr1, ogr2, ogr3];

let recep_yas = new Date().getFullYear() - ogrenciler[0][2];
let ali_yas = new Date().getFullYear() - ogrenciler[1][2];
let serkan_yas = new Date().getFullYear() - ogrenciler[2][2];

let recep_not =
  (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let ali_not =
  (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
let serkan_not =
  (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;

console.log(
  recep_yas,
  ali_yas,
  serkan_yas,
  recep_not.toFixed(1),
  ali_not.toFixed(1),
  serkan_not.toFixed(1)
);
