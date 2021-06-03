let a = prompt("введите число: ");
let b = +prompt("Введите число: ");
// // task1
// if (a == 0) {
//     alert("task1 Верно");
// } else {
//     alert("task1 Неверно");
// }

// // task2
// if (a > 0) {
//     alert("task2 Верно");
// } else {
//     alert("task2 Неверно");
// }

// // task3
// if (a < 0) {
//     alert("task3 Верно");
// } else {
//     alert("task3 Неверно");
// }


// // task4
// if (a >= 0) {
//     alert("task4 Верно");
// } else {
//     alert("task4 Неверно");
// }

// // task5
// if (a <= 0) {
//     alert("task5 Верно");
// } else {
//     alert("task5 Неверно");
// }

// // task6
// if (a != 0) {
//     alert("task6 Верно");
// } else {
//     alert("task6 Неверно");
// }

// // task7
// if (a == 'test') {
//     alert("task7 Верно");
// } else {
//     alert("task7 Неверно");
// }

// // task8
// if (a === '1') {
//     alert("task8 Верно");
// } else {
//     alert("task8 Неверно");
// }

// // task9
// if (a > 0 && a < 5) {
//     alert("task9 Верно");
// } else {
//     alert("task9 Неверно");
// }

// // task10
// if (a == 0 || a == 2) {
//     alert(a = Number(a) + 7);
// } else {
//     alert(a = a / 10);
// }

// //task11
// if (a <= 1 || b >= 3) {
//     let result;
//     alert(result = Number(a) + Number(b));
// } else {
//     let result;
//     alert(result = a - b);
// }

// //task12
// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//     alert("task12 Верно");
// } else {
//     let result;
//     alert("task12 Неверно");
// }

let num = +prompt("Введите значение от 1 до 4: ");
let res;
let err;
switch (num) {
    case 1:
        res = "Зима";
        break;
    case 2:
        res = "Весна";
        break;
    case 3:
        res = "Лето";
        break;
    case 4:
        res = "Осень";
    default:
        if (num > 4){
           alert("максимальное значение 4!") 
        } else if (num < 1) {
           alert("Минимальное значение 1!");
        }
}

alert("Значению " + num + " соответсвует " + res);