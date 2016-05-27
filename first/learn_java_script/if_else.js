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


var priceForStudy = prompt("Введите вашу оценку" , "");
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

}












