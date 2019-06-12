function numberGeneration(digitsQty) {
    do {
        var number = Math.random();
        var dig = Math.pow(10, digitsQty);
        number = parseInt(number * dig);
    } while (number.toString().length !== 4)
    return number;
}


//--------------------Угадай число------------------
var number = numberGeneration(4);

var attempt = 1;
var userNumber = +prompt("Угадайте 4-значное число. Для выхода из игры введите 0");


while (true) {
    if (userNumber == 0) {
        alert("Вы вышли из игры");
        break;
    }
    else if (userNumber == number) {
        alert("Поздравляем, Вы угадали! Число: " + number + ". " + "Попыток: " + attempt);
        break;
    }
    else if (userNumber < number) {
        userNumber = +prompt("Вы ввели меньшее число. Попробуйте еще раз");
        ++attempt
    }
    else if (userNumber > number) {
        userNumber = +prompt("Вы ввели большее число. Попробуйте еще раз");
        ++attempt
    }
}

//-----------Операции с A и B----------------