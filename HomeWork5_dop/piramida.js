let num = +prompt("Введите число ярусов: ");; 
let star = "*";
let space = "";
let  result;

for (let i = 1; i <= num -1; i++) {
    space += " ";
    for ( i = 1; i < 2 * num; i++) {
        star += "*";
    }
} 
console.log(space + star);
