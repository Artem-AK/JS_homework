function smallestDivisior(num) {
    if (num <= 0) { 
        console.log(NaN);
    }

    for (let i = 2; i <= num; i++) {

        

        if (num % i == 0) {
            console.log("Наименший делитель: " + i);
            break;
        }
    }
}

smallestDivisior(8);
smallestDivisior(11);
smallestDivisior(21);
smallestDivisior(0);
smallestDivisior(-2);