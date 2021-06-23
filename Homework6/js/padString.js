function padString (str, numStr, symb, right = true) {
    if(typeof str !== 'string') {
        return 'вводи строку';
    }

    if (typeof numStr !== 'number') {
        return 'введите число';
    }

    if (str.length >= numStr) {
        return str.substr(0, numStr);
    }

    if (symb.length > 1) {
        return 'должен быть только один символ'
    }

    let symbol = numStr - str.length;
    let local = '';

    for (let i = 0; i < symbol; i++) {
        local += symb;
    }

    return right ? str + local : local + str;
}
 console.log(padString('hello', 6, '*'));