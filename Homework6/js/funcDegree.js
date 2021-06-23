let num = +prompt("Введите число :");
let degree = +prompt("Введите значение степени: ");
let result;
function task1(num, degree = 1) {
    if (isNaN(num, degree)) {
        return alert("Вводите число!");
    }
    result = Math.pow(num, degree);
    return alert(result);
}
task1(num, degree);
