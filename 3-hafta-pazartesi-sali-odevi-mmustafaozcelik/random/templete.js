(function userData() {
    var data = Number(prompt("Adet giriniz:"));
    createArray(data);
})()

function createArray(data) {
    var array = [];
    for (var i = 0; i < data; i++) {
        array.push(Math.floor(Math.random() * 10));
    }
    var last = (array.length - 1)
    document.write("<br>" + "ilk eleman : " + array[0]);
    document.write("<br>" + "Son elaman : " + array[last]);
    document.write("<hr>");
    document.write("<br>" + "küçükten büyüğe sıralama : " + array.sort());
    document.write("<hr>")
    document.write("<br>" + "büyükten küçüğe sıralama : " + array.sort().reverse());
    document.write("<hr>")
    var sum = 0;
    var tek = 0;
    var cift = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
        if (array[i] % 2 === 1) {
            tek = tek + array[i];
        } else {
            cift = cift + array[i];
        }
    }
    document.write("<br>" + "toplam : " + sum);
    document.write("<hr>");
    document.write("<br>" + "Çift toplam : " + cift);
    document.write("<hr>");
    document.write("<br>" + "Tek  toplam : " + tek);
    document.write("<hr>");
    var dizi2 = [];
    for (var i = 0; i < array.length; i++) {
        dizi2.push((array[i] + 1));
    }
    document.write("<br>" + "1 eklenmiş yeni dizi : " + dizi2);

}