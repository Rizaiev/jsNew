
//Цикл с прерыванием.

/*var sum = 0;

while (true) {

    var value = +prompt("Введите число", '');

    if (!value) break; // (*)

    sum += value;

}
alert( 'Сумма: ' + sum );*/

//Цикл с прерыванием если число >100.

/*while (true) {

    var value = prompt("Введи число больше 100" , "");

    if (value > 100 || !value) break;

}*/


//Цикл вывода только простых чисел:

/*nextPrime:
    for (var i = 2; i < 10; i++) {

        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        alert( i ); // простое
    }*/

