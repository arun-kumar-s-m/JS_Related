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

// Objects containing functions as parameters
// Way 1 : 
let emp = {
    name : 'Arun',
    work : function(){
        console.log('Working on the task provided');
    }
}
emp.work();

// Way 2 : inserting another function name as value to the parameter directly
function work2_add(a,b){
    return a + b;
}
emp.another_work = work2_add;
console.log(emp.another_work(2,3));

// Way 3 : Method shorthand - defining function inside the object directly
let emp_2 = {
    name : 'Arun 2',
    work3(){
        console.log("Work of employee 2");
    }
};
emp_2.work3();

// this keyword to refer the same object which we are using 
// Eg 1
emp_2.write = function(){
    return this.name;
}
console.log(emp_2.write());
// Eg 2
let example = {
    id : 'E01234',
    fn(){
        console.log(this.id);
    }
}
example.fn();

/* instead of this.id example.id can also be used but we have chances in future that when the example variable is referenced to null and another variable containing the shallow copy of example variable tries to access the function then error will be thrown
let example = {
    id : 'E01234',
    fn(){
        console.log(example.id);
    }
}
let ex_obj = example;
example = null;
ex_obj.fn(); // throws error - TypeError: Cannot read properties of null (reading 'id') */

// Two or many function parameters pointing to the same function 
let v1 = {id : 1},v2 = {id : 2};
function fn(){
    console.log(this.id);
}
v1.fn = fn;
v2.fn = fn;
v1.fn(); // O/P : 1 since this in fn() refers to object v1 here 
v2.fn(); // O/P : 2 since this in fn() refers to object v2 here

//Constructor for creating many Objects in JS 
function createEmployeee(name, native, id,team){
    this.name = name;
    this.native = native;
    this.id = id;
    this.team = team;
}
let emp_1 = new createEmployeee('Arun_1','Dindigul',1,'Engineering'), emp_22 = new createEmployeee('Arun_2','Madurai',2,'sales'),emp_3 = new createEmployeee('Arun_3','Trichy',3,'Marketing');
console.log('emp_1 : ',emp_1,'emp_2 : ',emp_22,'emp_3 : ',emp_3);
// It is advisable to use first letter of the function name as capital letter - CreateEmployee
// All functions except arrow functions can be used for creating new objects using new Constructor
// implicitly there will be this = {} at first line of the constructor and return this at the last line of the constructor using which an object is created and returned

// return statements are also possible in constructor in JS but they aren't commonly used - Refer https://javascript.info/constructor-new#return-from-constructors


// ?. ?.() 
// ?.
let temp_obj = {
    key1 : 'val 1',
    func(){
        console.log("Arun");
    }
};
// console.log(temp_obj.key2.val2); Error since key2 doesn't exist TypeError: Cannot read properties of undefined (reading 'val2')
 let y = temp_obj.key2?.val2; // It is proper way than temp_obj?.key2?.val2
 console.log(y);
//  let z = temp_obj.key2.val2;
//  console.log(z); Error thrown

// ?.() - For validating whether method exists or not
let temp2_obj = {};
console.log(temp2_obj.func?.());
temp_obj.func?.();

// ?.[]
console.log(temp_obj?.['key1']);
console.log(temp2_obj?.['key1']);

// Symbols
let id1 = Symbol("sample");
let id2 = Symbol("sample");
let objjj = {};
objjj[id1] = "sdsad";
objjj[id2] = "dsd";
console.log(objjj); // { [Symbol(sample)]: 'sdsad', [Symbol(sample)]: 'dsd' } But Symbol(sample) refers to different keys when used as Symbols in case of Strings they refer to the same name
for (const [key, value] of Object.entries(objjj)) {
  console.log(`${key}: ${value}`);
}

"use strict";

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// conversions demo:
console.log(user); // hint: string -> {name: "John"}
console.log(0-user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500

let users ={
    'emp1' : {
        id : 1,
        name : 'Arun_1'
    },
    'emp2' : {
        id : 2,
        name : 'Arun_2'
    },
    'emp3' : {
        id : 3,
        name : 'Arun_3'
    }
};
console.log(Object.keys(users)); // [ 'emp1', 'emp2', 'emp3' ]
console.log(Object.values(users));
/*
[
  { id: 1, name: 'Arun_1' },
  { id: 2, name: 'Arun_2' },
  { id: 3, name: 'Arun_3' }
]
 */
console.log(Object.entries(users));
/*
[
  [ 'emp1', { id: 1, name: 'Arun_1' } ],
  [ 'emp2', { id: 2, name: 'Arun_2' } ],
  [ 'emp3', { id: 3, name: 'Arun_3' } ]
]
 */


