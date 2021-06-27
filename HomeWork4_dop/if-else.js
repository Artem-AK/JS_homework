let age = prompt("Введите ваш возраст: ");

// if (!parseInt(age)) {
//     alert("Вы ввели не число!");
// }

lastItem = age[age.length-1];

if (lastItem == 0 || lastItem == 1) {
    alert("Вам " + age + "  год.");
}

if (lastItem >= 2 && lastItem <= 4) {
    alert("Вам " + age + " года.");
}

if (lastItem >= 5 && lastItem <= 9) {
    alert("Вам " + age + " лет.");
}

console.log(age[age.length-1]);