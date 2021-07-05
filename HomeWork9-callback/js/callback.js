
function exponentiation(a, b) {
    alert(Math.pow(a, b));
}
function multiplay(a, b) {
    alert(a * b);
}
function division(a, b) {
    alert(a / b);
}
function modulo(a, b) {
    alert(a % b);
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