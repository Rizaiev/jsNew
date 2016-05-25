var x = +prompt("Введи число" , "");
var operator = prompt("Введи оператор" , "");
var y = +prompt("Введи число" , "");

if (operator == "+") {
    alert(x + y);
} else if (operator == "-") {
    alert (x - y);
} else if (operator == "/" && y != 0) {
    alert(x / y);
} else {
    alert("Не правильное выражение");
}