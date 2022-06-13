var number = Number(prompt("sayı giriniz : "));
main(number);



function main(number) {
    if (controlOne(number)) {
        if (secretKey(number)) {
            var count = 0;
            var sum = 0;
            for (var i = 1; i <= number; i++) {
                if (controlSeven(i)) {
                    continue;
                } else {
                    if (controlRange(i)) {
                        count = count + 1;
                        sum = sum + i;
                    } else {
                        break;
                    }

                }
            }
            document.write("Girilen sayı : " + number + "<br>");
            document.write("Kaçtane sayı : " + count + "<br>");
            document.write("Toplamları : " + sum + "<br><br>");
            tekCift(number);
        } else {
            document.write("Secret Keyi Buldunuz <br>");
        }

    } else {
        var number = Number(prompt("sayı giriniz : "));
        document.write("Girilen sayı : " + number + "<br>");
    }
}

function tekCift(number) {
    var tekAdet = 0,
        tekToplam = 0,
        ciftAdet = 0,
        ciftToplam = 0,
        tekcount = -1,
        ciftcount = -2;
    for (var i = 1; i < number; i++) {
        if (controlSeven(i)) {
            continue;
        } else {
            if (controlRange(i)) {
                if (i % 2 == 1) {
                    tekAdet = tekAdet + 1;
                    tekToplam = tekToplam + i;
                } else {
                    ciftAdet = ciftAdet + 1;
                    ciftToplam = ciftToplam + i;
                }
            } else {
                break;
            }

        }
    }
    document.write("tek sayı adedi : " + tekAdet + "<br>");
    document.write("tek sayı toplam: " + tekToplam + "<br>");
    document.write("Tek sayılar");
    for (var i = 0; i < tekAdet + 1; i++) {
        if (controlSeven((tekcount + 2))) {
            tekcount = tekcount + 2;
            continue;
        } else {
            document.write("-" + (tekcount = tekcount + 2));
        }
    }
    document.write("<br><br>");

    document.write("Çift sayı adedi : " + ciftAdet + "<br>");
    document.write("Çift sayı toplam: " + ciftToplam + "<br>");
    document.write("Çift sayılar")
    for (var i = 0; i <= ciftAdet; i++) {
        document.write("-" + (ciftcount = ciftcount + 2));
    }
}

function controlSeven(number) {
    if (number === 7) {
        return true;
    } else {
        return false;
    }
}

function controlRange(number) {
    if (100 > number) {
        return true;
    } else {
        return false;
    }
}

function controlOne(number) {
    if (number < 1) {
        alert("sayı 1'den buyuk olmalıdır")
        return false;
    } else {
        return true;
    }
}


function secretKey(number) {
    if (number === 44) {
        return false;
    } else {
        return true;
    }
}


function stepOne(number) {
    var i = 0;

    for (i; i <= number; i++) {
        if (secretKey(number)) {
            break;
        } else if (controlRange(number)) {

        }
    }
}