let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = ['js', 'css', 'jq'];
let arr = [];

//task1
// alert(arr.concat(arr1, arr2));

//task2
// alert(arr1.reverse());

//task3
// arr1.push(4, 5, 6);
// alert(arr1);

//task4
// arr1.unshift(4, 5, 6);
// alert(arr1);

//task5
// alert(arr3.shift()); // Выводит первый элемент и удаляет его.

//task6
// alert(arr3.pop()); // Выводит последний элемент и удаляет его.

//task7
// let arr7 = [1, 2, 3, 4, 5];
// let arr71 = arr7.slice(0, 3);
// console.log(arr71);

//task8
// let arr8 = [1, 2, 3, 4, 5];
// let arr81 = arr8.slice(3);
// console.log(arr81);

//task9
// let arr9 = [1, 2, 3, 4, 5];

// console.log(arr9.splice(1, 2));
// console.log(arr9);

// task10
// let arr10 = [1, 2, 3, 4, 5];
// let arr101 = arr10.slice(1, 4);
// console.log(arr101);

// task11 
// let arr11 = [1, 2, 3, 4, 5];
// arr11.splice(3, 0, 'a', 'b', 'c');
// console.log(arr11);

// task12
// let arr12 = [1, 2, 3, 4, 5];
//     console.log(arr12.splice(1, 0, 'a'));
//     console.log(arr12.splice(3, 0, 'b'));
//     console.log(arr12.splice(5, 0, 'c'));
//     console.log(arr12.splice(7, 0, 'd'));
//     console.log(arr12.splice(9, 0, 'e'));
// console.log(arr12);

// task13
// let arr13 = [3, 4, 1, 2, 7];
// arr13.sort();
// console.log(arr13);

// task14
// let arr14 = [5, 6, 7, 8, 9];
// let reslustSum = 0;
// arr14.forEach(function(item, index, arr14) {
//     reslustSum += arr14[index];
// });
// console.log(reslustSum);

// task15
// let arr15 = [5, 6, 7, 8, 9];
// arr15.map(function(item, index, arr15) {
//     console.log(arr15[index] * arr15[index]);
// });

// task16 
// let arr16 = [1,-3, 5, 6,-7, 8, 9,-11];
// console.log(arr16.filter(item => item < 0));


// task 17 
// let arr17 = [1,-3, 5, 6,-7, 8, 9,-11];
// console.log(arr17.filter(item => item % 2 == 0));


// task18 
// let arr18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// console.log(arr18.filter(item => item.length > 5));

// task19 
// let arr19 = [1, 2, [3, 4], 5, [6, 7]];
// console.log(arr19.filter(Array.isArray));

// task19
// let arr20 = [5,-3, 6,-5, 0,-7, 8, 9];

// console.log(arr20.filter(item => item < 0).length);
