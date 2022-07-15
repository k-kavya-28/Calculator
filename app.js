function clearScreen() {
    document.getElementById("result").value = "";
}
 
function display(value) {
    document.getElementById("result").value += value;
}
 
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
//evaluates exp and returns the result

function back() {
    document.getElementById('⌫').value = document.getElementById('⌫').value.slice(0,-1);
}