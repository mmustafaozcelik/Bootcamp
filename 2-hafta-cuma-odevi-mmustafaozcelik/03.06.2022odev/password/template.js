//Şifre Kontrolu
(function getData() {
    var password = prompt("Parolanızı giriniz: ");
    getPassword(password);
})();

function passwordControl(from, from2) {
    if (from === from2) {
        alert("Şifreniz Doğru");
    } else {
        alert("Şifreler uyuşmuyor")
        getPassword(from);
    }
}

function getPassword(from) {
    var password = prompt("Yeniden şifrenizi giriniz : ")
    passwordControl(from, password);
}