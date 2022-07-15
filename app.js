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
    var bkspc = document.getElementById('⌫').value;
    // bkspc.text = bkspc.text.slice(-1);
    document.getElementById('⌫').value += value.slice(-1)
}