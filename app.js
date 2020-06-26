function ins(num) {
    document.getElementById("in").value += num;
}
function equal() {
    var sol = document.getElementById("in").value;
    if ((sol)) {
        document.getElementById("display").value = eval(sol);
    }
}
function back() {
    var b = document.getElementById("in").value;
    document.getElementById("in").value = String(b).slice(0,length-1);
}
function cl() {
    document.getElementById("in").value = "";
    document.getElementById("display").value = "";
}