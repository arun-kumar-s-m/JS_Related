let name; // Declaring variable
console.log(name);
name = 'Arun'; //Assigning value to the variable for first time
console.log(name);
name = 'Arun Kumar'; // Modifying the value for the variable
console.log(name);

/* Redeclaring variable using let keyword will throw an error 
let name = 'kumar';// will throw an error - SyntaxError: Identifier 'name' has already been declared
 
Whereas redeclaring a variable using var is possible but the usage of var keyword is deprecated in modern versions of JS */

//Copying value from one variable to another
// DEEP COPY
let var1 = 'value';
let var2 = var1;
console.log('value of var1 is : ',var1,' value of var2 is : ',var2); // O/P : value of var1 is :  value  value of var2 is :  value
//chaning the value of var1
var1 = 'value 2';
console.log('value of var1 is : ',var1,' value of var2 is : ',var2); // O/P : value of var1 is :  value 2  value of var2 is :  value
//Value of var2 is unaffected eventhough the value of var1 is changed
//Similarly
var2 = 'value 3';
console.log('value of var1 is : ',var1,' value of var2 is : ',var2); // O/P : value of var1 is :  value 2  value of var2 is :  value 3
//Value of var1 is unaffected eventhough the value of var2 is changed

// Whereas in the case of objects copying value from one object to another will affect the value of another object as well - SHALLOW COPY
let obj1 = {
    key1 : 'val1',
    key2 : 'val2'
};
let obj2 = obj1;
obj2.key1 = 'val3';
console.log('value of key1 in obj1 is',obj1.key1); // O/P : value of key1 in obj1 is val3
console.log('value of key1 in obj2 is',obj2.key1); // O/P : value of key1 in obj2 is val3
//Shallow copy is occurring since the reference to the memory location of obj1 is being saved in the value of obj2

//DEEP COPY in OBJECTS - Refer Object.js file for reference

//Constant in JS 
const a = 13;
a = 14; // throws error since constant variables cannot be modified TypeError: Assignment to constant variable.

