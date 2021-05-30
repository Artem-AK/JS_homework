// Task_1

//Boolean(Number('10')) + 1; Выведет 2.
//'sub' + Number(fasle); выдаст ERROR. 
//16 * `    19`; Выведет 304.
//true - 70; Неявное преобразование true можно представить как 1 - 70 = -69.
//Number(1 + String(1)) + 1; выведет 12.

// Task_2

let numHour = prompt('Введите кол-во часов: '); 
let result;

result = numHour * 60 * 60;

alert(result + " секунд");

// Task_3

var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num += 1;
num -= 1;
alert(num);