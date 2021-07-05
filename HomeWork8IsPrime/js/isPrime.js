function isPrime(num) {
    for (let i = 2; i  < num; i++) {
        if (num % i == 0) {
            return console.log(false);
        }

        return console.log(true);
    }
}

isPrime(7); // true
isPrime(10); // false
isPrime(8); // false
isPrime(21); // false