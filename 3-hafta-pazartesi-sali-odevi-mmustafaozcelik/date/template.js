function domfunction() {
    let date = new Date();
    var fulyear = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
    var time = date.getHours() + ":" + date.getMinutes();
    var btn = document.getElementById("btn_id").className = "btn btn-warning";
    document.getElementById("btn_id").innerHTML = fulyear + "     " + time;

}