var string;
string = String(prompt("1. kelime giriniz"));
// kullanıcı tarafından girilen bir kelimenin
//S-1) Kaç karakterlidir ?
document.write("Stringin Karakter sayısı :" + string.length + "<br>");
//S-2) boşluklar alınarak Kaç karakterlidir ?
document.write("Stringin Boşluksuz Karakter sayısı :" + string.trim().length + "<br>");
//S-3) bütün kelimeyi küçük harfle göstermek ?
document.write("Stringin Küçük harf :" + string.toLowerCase() + "<br>");
//S-4) bütün kelimeyi büyük harfle göstermek ?
document.write("Stringin Büyük harf :" + string.toUpperCase() + "<br>");
//S-5) ilk harf nedir  ?
document.write("Stringin İlk harfi :" + string.charAt(0) + "<br>");
//S-6) girdiğiniz kelime java ile başlıyor mu  ?
document.write("Stringin İlk Kelimesi 'Java'mı :" + string.startsWith("java") + "<br>");
//S-7) girdiğiniz kelimenin sonuna "-ben js öğreniyorum"   ?
document.write("Stringin sonuna '-ben js öğreniyorum' ekle :" + string.concat(" -ben js öğreniyorum") + "<br>");
//S-8) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin   ?
document.write("Stringin 0 ile 4 arsındaki indexi :" + string.substring(0, 4) + "<br>");
//S-9) Kullanıcıdan alınan başka bir kelimeyle birinci olan kelimeyle yer değiştirmek ?
var string2;
string2 = String(prompt("2. kelime giriniz"));
document.write("Stringleri değiştir :" + string.replace(string, string2) + "<br>");