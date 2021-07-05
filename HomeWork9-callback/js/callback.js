let result;

function exponentiation(a, b) {
    result = Math.pow(a, b);
    console.log("Возведение в степень: " + result);
}
function multiplay(a, b) {
    result = a * b;
    console.log("Умножение: " + result);
}
function division(a, b) {
    result = a / b;
    console.log("Деление: " + result);
}
function modulo(a, b) {
    result = a % b;
    console.log("Остаток от деления: " + result);
}

function mainFunction(callback) {
    let a = +prompt();
    let b = +prompt();
    return callback(a, b);
}



mainFunction(exponentiation);
mainFunction(multiplay);
mainFunction(division);
mainFunction(modulo);
