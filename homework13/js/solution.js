let node = document.body;


let bodyChild = node.childNodes;
console.log(bodyChild);
let ul = bodyChild[1];
let li = ul.childNodes;
let i = 0;
let iLi = 0;

for (let nodes of bodyChild) {
    i += 1;
    console.log("All",nodes);
}
console.log("all", i);

if (ul) {
    for (let nodes of ul.children) {
      iLi += 1;
      console.log("ul > li", nodes);  
    }
    
}
console.log("ul > li",iLi);

let arr = Array.from(ul.children);
console.log(arr);

let filteredArr = arr.filter(
    
    function (item) {
        if (ul.children) {
           console.log(item.innerText);
        }
    }
    
)
