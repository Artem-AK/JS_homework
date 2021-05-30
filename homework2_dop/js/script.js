// task_1
let user = {
    names: "John",
    surname: "Smith"
};
user.names = "Pete";
delete user.names;
console.log(user);

// task_2
const user1 = {

    name: "John"
  
};

user1.name = "Artem";

console.log(user1); //это будет работать.

// task_3
let salaries = {

    John: 100,
  
    Ann: 160,
  
    Pete: 130
  
};

let sum;

sum = salaries.John + salaries.Ann + salaries.Pete;

console.log(sum);

