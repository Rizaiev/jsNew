//Проверка стандарта
/*var ecmass = prompt("Какая компания оснновала javascript?" , "");

 if (ecmass == "EcmaScript") {
 alert( "Верно!" );
 } else {
 alert( "Не знаете? EcmaScript" );
 }*/


//Проверка числа
/*var namber = prompt("Введите число!" , "");

 if (namber > 0) {
 alert(1);
 } else if (namber < 0) {
 alert("-1");
 } else {
 alert(0);
 }*/


//Проверка логина

/*var login = prompt("Введите свой логин" , "");

 if (login == "Админ" ) {
 var password_word = prompt("Пароль" , "");

 if (password_word == "Черный властелин") {
 alert("добро пожаловать!");
 } else if (password_word == null) {
 alert("Ввод отменен!");
 } else {
 alert("Пароль не верен!");
 }
 } else if (login == null) {
 alert("Ввод отменен!");
 } else {
 alert("Я вас не знаю!");
 }*/


//Конструкция switch заменяет собой сразу несколько if.


/*var a = +prompt("a?" , "");
 switch (a) {
 case 0:
 alert("0");
 break;
 case 1:
 alert("1");
 break;
 case 2:
 case 3:
 alert("2,3");
 break;

 }*/


// Калькулятор, пример на уроке.


/*var x = +prompt("Введи число", "");
 var operator = prompt("Введи оператор", "");
 var y = +prompt("Введи число", "");

 if (operator == "+" && y != null && x != null) {
 alert(x + y);
 } else if (operator == "-" && y != null && x != null) {
 alert(x - y);
 } else if (operator == "/" && y != 0 && y != null && x != null) {
 alert(x / y);

 } else if (operator == "^" && y != null && x != null) {
 var i = 1;
 var b = x;
 while (i < y) {

 b = b * x;
 i++;
 }
 alert(b);
 } else {
 alert("Не правильное выражение");
 }*/


//Оценки (100 - 51) (A B C D E )


/*var priceForStudy = +prompt("Введите вашу оценку" , "");
 if (isNaN( [priceForStudy] ) )
 {
 if (priceForStudy == "A") {
 alert("100 - 91");
 } else if (priceForStudy == "B") {
 alert("90 - 81");
 } else if (priceForStudy == "C") {
 alert("80 - 71");
 } else if (priceForStudy == "D") {
 alert("70 - 61");
 } else if (priceForStudy == "E") {
 alert("60 - 51");

 } else {
 alert("Не правильный ввод");
 }

 } else {
 if (priceForStudy <= 100 && priceForStudy >= 91) {
 alert("A");
 } else if (priceForStudy <= 90 && priceForStudy >= 81) {
 alert("B");
 } else if (priceForStudy <= 80 && priceForStudy >= 71) {
 alert("C");
 } else if (priceForStudy <= 70 && priceForStudy >= 61) {
 alert("D");
 } else if (priceForStudy <= 60 && priceForStudy >= 51) {
 alert("E");
 } else if (priceForStudy <= 50 && priceForStudy >= 0) {
 alert("Вы не сдали");
 } else {
 alert("Не правильный бал");
 }

 }*/

// калькулятор от Макса
/*var x = prompt("x"),
 op = prompt("operator"),
 y = prompt("y");

 if (!x || !y || !op) {
 console.log("asdasdasd");
 } else {
 x = +x;
 y = +y;
 if ( isNaN(x) || isNaN(y)) {
 console.log("is not number");
 } else {
 if (!(op == "+" || op == "-")) {
 console.log("you op is not ");
 } else {
 if (op == "+"){
 console.log("x+y", x+y);
 }
 if (op == "-") {
 console.log("x-y", x-y);
 }
 }
 }
 }*/


//------с помощью switch


/*var op = "+";

 if (op == "+") {
 console.log("ya -hu+");
 } else if (op == "-") {
 console.log("ya -hu-");
 } else if (op == "*") {
 console.log("ya -hu*");
 } else if (op == "/") {
 console.log("ya -hu/");
 } else {
 console.log("life is pain...");
 }*/

/* switch (op){
 case "+":
 console.log("ya -hu");
 break;
 case "-":
 console.log("ya -hu");
 break;
 case "*":
 console.log("ya -hu");
 break;
 case "/":
 console.log("ya -hu");
 break;
 default:
 console.log("life is pain...");

 }
 */

//----- объекты и массивы


/*
 var weekMap_obj = {
 1: "Monday",
 2: "Tuersday",
 3: "Wednesday",
 4: "Thursday",
 5: "Friday",
 6: "saturday",
 7: "Sunday"
 };

 var weekMap_arr = [
 "Monday",
 "Tuersday",
 "Wednesday",
 "Thursday",
 "Friday",
 "saturday",
 "Sunday"
 ];
 var input = +prompt("enter"),
 result_obj = weekMap_obj[input],
 result_arr = weekMap_arr[input-1];
 if (!result_obj){
 result_obj = "wrong index";

 }
 console.log(result_obj);
 console.log(result_arr);
 */


//цыклы for

/*for (var counter=0; counter<10; counter++) {
 console.log(counter);
 }*/

/*var list = {
 test: "123123",
 age: 31,
 cost: 31.2
 };
 for (var name in list){
 console.log(name);
 }*/

for (var i = 1000; i < 9999; i++) {
    var string = String(i);
    sum = 0;
    multi = 1;

    for (var j = 0; j < string.length; j++) {
        sum += +string[j];
        multi *= +string[j];
    }
    if (sum === multi) {
        console.log(i);
    }
}

