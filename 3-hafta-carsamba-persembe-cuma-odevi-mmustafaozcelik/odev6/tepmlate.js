var dbUserEmail = "deneme@gmail.com";
var dbUserPassword = "root";
var count = 4;


function getData() {
    var email = prompt("Email Giriniz");
    var password = prompt("Şifre giriniz");
    dbCheck(email, password);
}

function dbCheck(email, password) {
    if (count == 0) {
        bloke();
    } else {
        if (dbUserEmail === email && dbUserPassword === password) {
            adminFunction();
        } else {
            count = count - 1;
            alert("Şifre veya Parolanız YAnlış! Kallan Denme Hakkınız: " + count);
            getData();
        }
    }
}

function adminFunction() {
    alert("Admin Sayfasına Hoş Geldiniz!");
}

function bloke() {
    alert("Bloke Oldunuz!:/");
}
getData();