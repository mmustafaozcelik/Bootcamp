(function getData() {
    var password = prompt("Parolanızı Giriniz Lütfen: ");
    var repassword = prompt("Parolanızı Tekrar Giriniz Lütfen: ")
    if (password === repassword) {
        alert("Parolanız Doğru")
    } else {
        alert("Parolanız Yanlış")
    }

})()