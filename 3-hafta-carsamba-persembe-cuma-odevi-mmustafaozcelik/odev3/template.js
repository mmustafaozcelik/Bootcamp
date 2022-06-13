(function getData() {
    var data = Number(prompt("Sayı Giriniz ;"));
    if (data < 0) {
        alert(data + " Sayısı Negatiftir!")
    } else if (data > 0) {
        alert(data + " Sayısı Pozitiftir!")
    } else {
        alert("0 Sayısı Nötrdür!")
    }
})()