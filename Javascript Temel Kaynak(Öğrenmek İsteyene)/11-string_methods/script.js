let kursAdi = "Recep Kaya JavaScript Eğitim Serisi";

let sonuc;

sonuc = kursAdi.toLowerCase(); // "recep kaya javascript eğitim serisi"
sonuc = kursAdi.toUpperCase(); // "RECEP KAYA JAVASCRIPT EĞİTİM SERİSİ"
sonuc = kursAdi.length; // 34
sonuc = kursAdi[1]; // "e"
sonuc = kursAdi.slice(0, 6); // "Recep "
sonuc = kursAdi.slice(10); // "a JavaScript Eğitim Serisi"
sonuc = kursAdi.slice(-10); // "em Serisi"
sonuc = kursAdi.slice(-10, -5); // "Eğiti"

sonuc = kursAdi.substring(0, 6); // "Recep "
sonuc = kursAdi.substring(10); // "a JavaScript Eğitim Serisi"

sonuc = kursAdi.replace("Recep","Sitesi"); // "Sitesi Kaya JavaScript Eğitim Serisi"
sonuc = kursAdi.trim(); // "Recep Kaya JavaScript Eğitim Serisi"
sonuc = kursAdi.trimEnd(); // "Recep Kaya JavaScript Eğitim Serisi"
sonuc = kursAdi.trimStart(); // "Recep Kaya JavaScript Eğitim Serisi"

sonuc = kursAdi.indexOf("Kaya"); // 6
sonuc = kursAdi.split(" "); // ["Recep", "Kaya", "JavaScript", "Eğitim", "Serisi"]
sonuc = kursAdi.split(" ")[0]; // "Recep"
sonuc = kursAdi.split(" ")[3]; // "Eğitim"

console.log(sonuc); // "Eğitim"
