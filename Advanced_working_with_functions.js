function createNode(val){
    return {value : val};
}
let head = createNode('node_1'),node_2 = createNode('node_2'), node_3 = createNode('node_3'),node_4 = createNode('node_4');
head.next = node_2;
node_2.next = node_3;
node_3.next = node_4;
node_4.next = null;
printList(head);
/*
    node_1
    node_2
    node_3
    node_4
*/
function printList(obj){
    while(obj != null){
        console.log(obj.value);
        obj = obj.next;
    }
}

// Rest params so that all the function calls of prod with different params will invoke this function irrespective of number of params being present in the function call
function prod(...params){
    let prod = 1;
    for(let ele of params){
        prod *= ele;
    }
    console.log('Product of array : ',params,' is : ',prod);
}
prod(1,2); // Product of array :  [ 1, 2 ]  is :  2
prod(1,2,3); // Product of array :  [ 1, 2, 3 ]  is :  6
prod(1,2,3,4); // Product of array :  [ 1, 2, 3, 4 ]  is :  24
prod(1,2,3,4,5); // Product of array :  [ 1, 2, 3, 4, 5 ]  is :  120

// Spread Array concept
let arr = [1,2,3,4,5];
console.log(Math.max(...arr)); // 5
console.log(Math.min(...arr)); // 1


// LEXICAL ENVIRONMENT AND NESTED FUNCTIONS
// Example 1
function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  console.log( counter() ); // 2
  // Value for count variable becomes 0 , 1, 2 since the lexical environment corresponding to makeCounter() is being hold by the variable counter()
  // Or else the variable as well as the memory occupied would have been removed from memory automatically
  
  // Example 2
    let value = "Surprise!";

    function f() {
        let value = "the closest value";

        function g() {
            // debugger; // in console: type alert(value); Surprise! 
            console.log(value);
        }

        return g;
    }

    let g = f();
    g();
// Here although the value of variable value is present in the LE of f() since it's unused it will be removed from memory automatically
// So the value of variable value = "Surprise!" is being taken into consideration while the nested function gets executed.


// new Function syntax
let sum = new Function('a','b', 'return a + b');
console.log(sum(7,8)); // O / P : 15
console.log(sum('arun',' kumar')); // O / P : arun kumar
console.log(sum(3.22,5.90)); // O / P : 9.120000000000001

let magic = new Function('a','b','return a+\' \'+b');
console.log(magic('abcd','efgh'));