var num = Math.floor(Math.random() * 10);
getData();

function getData() {
    var number = Number(prompt(" 1 ile 9 Arasında Sayı Giriniz: "));
    numberGame(number);
}

function numberGame(number) {
    if (num > number) {
        alert("Sayınız Küçük");
        getData();
    } else if (num < number) {
        alert("Sayınız Büyük");
        getData();
    } else {
        alert("Tebrikler Doğru Tahmin Ettiniz")
    }
}