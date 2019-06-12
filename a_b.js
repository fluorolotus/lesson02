function summ(a, b) {
    return a + b;
}

function difference(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    var number;
    switch (operation) {
        case 'sum':
            return number = summ(arg1, arg2)
            break;
        case 'dif':
            return number = difference(arg1, arg2)
            break;
        case 'mul':
            return number = multiply(arg1, arg2)
            break;
        case 'div':
            return number = division(arg1, arg2)
            break;
    }
}

function isPositiveInteger(number) {
    if (Number.isNaN(number)) {
        alert("Вы ввели не число");
        return number = NaN;
    } else if (isInteger(number) == false) {
        alert("Число дробное");
        return number = NaN;
    } else if (number > 100 || number < -100) {
        alert("Число больше 100 или меньше -100");
        return number = NaN;
    } else {
        return number;
    }
}

function isInteger(number) {
    return parseInt(number) === number
}

var a = +prompt("Введите первое целое число от -100 до 100")
while (true) {
    if (Number.isNaN(isPositiveInteger(a)) == false) {
        break;
    } else {
        var a = +prompt("Введенное значение не является числом или оно отрицательное и больше 100. Попробуйте еще раз")
    }
}

var b = +prompt("Введите второе целое число от -100 до 100")
while (true) {
    if (isNaN(isPositiveInteger(b)) == false) {
        break;
    } else {
        var b = +prompt("Введенное значение не является числом или оно отрицательное и больше 100. Попробуйте еще раз")
    }
}

if (a >= 0 && b >= 0) {
    var num = mathOperation(a, b, 'dif')
    alert("Оба числа положительные. Разность чисел: " + num)
} else if (a < 0 && b < 0) {
    var num = a * b
    alert("Оба числа отрицательные. Произведение чисел: " + num)
} else if (a * b < 0) {
    var num = a + b
    alert("Числа разных знаков. Сумма чисел: " + num)
}