// Objects in Javascript

// Different ways of creating objects in Javascript

let a = new Object(); // using Object constructor 
let b = {}; // directly using Object literal 

console.log("Object a : ",a,"Object b : ",b);
console.log("Object b : ",b);

let employee = {
    name : 'Arun',
    team : 'Engineering',
    role : 'Product Developer'
}
console.log(employee);

// accessing individual data of an object using key 
console.log(employee.team);

// adding values after object creation
employee.floatValue = 13.245 // key containing decimal/float value which belong to number datatype in JS
employee.numValue = 12 // key containing numerical value which also belong to number datatype in JS
employee.booleanValue = true // key containing boolean value which refers to boolean datatype in JS
employee.address = { street : 'Raj Nagar 2nd Street' , areaName : 'PTC Quaters, Thoraipakkam', pincode : '600097'} // key containing another object as datatype which is also possible in JS

console.log(employee);
// accessing value of a object key inside object
console.log(employee.address.street);

//adding multi word property as key inside object
employee["office location"] = 'Chennai';

// accessing data inside multi word key in an object
//console.log(emoloyee.office location);  /*** SyntaxError: missing ) after argument list ***/

// using square brackets
// Case 1 : When multi word property names are used
console.log(employee["office location"]); // accessing like this since using dot . for accessing like emoloyee.office location will give an error
// Case 2 : By accessing data using a variable which contains another value 

let temp = 'office location';
console.log("Accessing data using temp variable stored inside ",temp,"data : ",employee[temp]);
//case 3 : accessing data inside a key by getting value from user which works in front end side 
// let temp2 = prompt("kindly enter the key name for which you would like to access the data");
// console.log("User input key ",temp2,"and its data",employee[temp2]);

//case 4 : for accessing property whose name is integer
let obj = {
    0: "test" 
}
// obj.0 will give error 
console.log(obj[0]," ",obj['0']); // since the value given inside [] brackets will be automatically converted to strings so obj[0] becomes obj['0'] while accessing value from object

// Similary while inserting obj.4 = 'four' will give error
obj[4] = 'four'; // for adding key to object
console.log(obj[4]+' '+obj['4']); // accessing value is similar to previous one


function createEmployee(name,id){
    return {
        name : name,
        id : id
    };
}
let emp1 = createEmployee("Arun_1",1),emp2 = createEmployee("Arun_2",2);
console.log("Employee 1 name : ",emp1.name,"Employee 2 name : ",emp2.name);

function cE(name1,id1){
    return {name1,id1};
}
let emp3 = cE("Arun_3",3),emp4 = cE("Arun_4",4);
console.log("Employee 3 name : ",emp3.name1,"Employee 4 name : ",emp4.name1);

// finding whether a key is present or not inside object
console.log('name' in employee); // returns true
console.log('id' in employee); // returns false

// Traversing through an object
for(let key in employee){
    console.log('KEY NAME : ',key,' VALUE : ',employee[key]);
}

//property names in string which are integers are sorted in ascending order
let nos = {
    "5" : 'five',
    "3" : 'three',
    "4" : 'four',
    "1" : 'one',
    '2' : 'two'
};
console.log(nos); // O/P : { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five' }

// to avoid ordering the following can be used
let no = {
    "+5" : 'five',
    "#3" : 'three',
    "-4" : 'four',
    "%1" : 'one',
    '*2' : 'two'
};
console.log(no); // O/P : { '+5': 'five', '#3': 'three', '-4': 'four', '%1': 'one', '*2': 'two' } 

let no1 = {
    "+5" : 'five',
    "#3" : 'three',
    "-4" : 'four',
    "%1" : 'one',
    '*2' : 'two'
};
console.log(no == no1); // O/P false Eventhough both the objects have same key value pairs the value of memory location being pointed by no and no1 differs so false is returned
console.log(no === no1); // O/P false since memory location differs 

let no3 = no;
console.log(no3 == no); // O/P : true since both the variable no3 and no refers to the same memory location
console.log(no3 === no); // O/P : true since value as well as type both are same


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

//DEEP COPY OF OBJECTS
//Solution 1 : 
// Copying key and values one by one
let no4 = {};
for(let key in no1){
    no4[key] = no1[key];
}
console.log(no4);
no1[+5] = 'FIVE';
console.log('no1[+5] = ',no1[+5],' no4[+5] :',no4['+5']); // O/P : no1[+5] =  FIVE  no4[+5] : five

//Solution 2 : 
let no2 = {50 : 'fifty'};
let no5 = {};
Object.assign(no5,no1,no2);
console.log(no5);
no2[50] = 'FIFTY';
console.log('no2[50] = ',no2[50],' no4[50] :',no5[50]); // O/P : no2[50] =  FIFTY  no4[50] : fifty

/* Other way of cloning using Object.assign
let no5 = Object.assign({},no1,no2);
 */
let no6 = Object.assign({},no1,no2);
console.log(no6); /* O/P : 
{
    '5': 'FIVE',
    '50': 'FIFTY',
    '+5': 'five',
    '#3': 'three',
    '-4': 'four',
    '%1': 'one',
    '*2': 'two'
} */

//While cloning when key already exists then its value gets overriden
let no7 = Object.assign({'50': 'SIXTY'},no6,{'50':'SEVENTY'});
console.log(no7[50]); // O/P : SEVENTY