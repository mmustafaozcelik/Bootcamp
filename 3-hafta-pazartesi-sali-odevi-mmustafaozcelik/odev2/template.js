(function getData() {
    var data = String(prompt("Veriyi giriniz : "));
    dataTransfer(data);
})()

function dataTransfer(from) {
    var data = String(from);
    var last = (data.length - 1);
    var newdata = data.charAt(0);
    for (var i = 1; i < last; i++) {
        newdata += "*"
    }
    newdata += data.charAt(last);
    alert("Girilen veri :" + newdata);
}