let url = "https://rkaya21.github.io/";
let kursAdi = "Komple Web Geliştirme Kursu";

// 1- url kaç karakterlidir?
let sonuc;

sonuc = url.length; // 29

// 2- kursAdi kaç kelimeden oluşmaktadır?
sonuc = kursAdi.split(" ").length; // 3

// 3- url https ile mi başlıyor?
sonuc = url.startsWith("https"); // true

if (sonuc) {
    console.log("evet başlıyor"); // "evet başlıyor"
}

// 4- kursAdi içerisinde Eğitimi kelimesi var mı?
if (kursAdi.indexOf("Eğitimi") > -1) {
    console.log("evet var"); // Bu durumda "evet var" yazdırır.
} else {
    console.log("hayır yok");
}

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.
kursAdi = kursAdi.toLowerCase(); // "komple web geliştirme kursu"
kursAdi = kursAdi.replaceAll(" ","-"); // "komple-web-geliştirme-kursu"
kursAdi = kursAdi.replace("ş","s").replace("ı","i"); // "komple-web-gelistirme-kursu"

sonuc = `${url}/${kursAdi}`; // "https://rkaya21.github.io/komple-web-gelistirme-kursu"

console.log(sonuc); // "https://rkaya21.github.io/komple-web-gelistirme-kursu"
