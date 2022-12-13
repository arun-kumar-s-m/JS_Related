// Data Types in JS
let str = 'Arun Kumar';
console.log(str.toUpperCase());

let nw = 1.5;
console.log(nw.toFixed(2));

// NUMBER WRAPPER CLASS
/* 
isNaN() or isFinite()
Number.isNaN() Number.isFinite()
Math.ceil() Math.floor() Math.trunc() Math.round() Math.random() Math.min(a,b,c,.....) Math.max(a,b,c,.....) Math.pow(no,power)
number.toFixed(3) round off to 3 digits or Math.round(number * 1000)/1000
parseInt('102cms') - 102 TO EXTRACT THE NUMBERS FROM TEXT
parseFloat('12.3.4.5.6) - 12.3 TO EXTRACT FLOAT POINT NUMBERS FROM TEXT
*/
let n = 5e2;
console.log(n); // 500
let hh = 5e-2;
console.log(hh); // 0.05
let ng = 1_000_000_000; // - 1 billion
console.log(ng); // 1000000000
console.log(ng == 1e9); // true

/*
1e-3 === 1 / 1000; // 0.001
1.23e-6 === 1.23 / 1000000; // 0.00000123
1234e-2 === 1234 / 100; 
*/

/*
Math.floor - bottom value of number 1.1 becomes 1 and -1.1 becomes -2
Math.ceil - upper value of number 1.1 becomes 2 and -1.1 becomes -1
Math.round - just rounding t he immmediately after dot so nos like 1.5 / 1.7 becomes 2 whereas 1.2 becomes 1
Math.trunc - cutting off the value after the dot so all nos like 1.5 / 1.2 / 1.7 becomes 1 only
no    Math.floor	Math.ceil	Math.round	Math.trunc
3.1	    3	         4	        3	        3
3.6	    3	         4	        4	        3
-1.1	-2	        -1	        -1	        -1
-1.6	-2	        -1	        -2	        -1
*/

//For rounding off 
// Sol 1 : using Math.round(n *ex)/ex for example
let num = 1.23456;
console.log( Math.round(num * 100) / 100 ); // 1.23
let num_1 = 12.34;
console.log( num_1.toFixed(1) ); // 12.3
let num_2 = 12.36;
console.log( num_2.toFixed(1) ); // 12.4
let num_3 = 12.34;
console.log(num_3.toFixed(5)); // 12.34000

// isNaN() - to find whether variable is string or not and isFinite() - to find whether a var is a number or not
// Number.isNaN() is same as isNaN()
// Number.isFinite() is same as isFininte()
let var_1 = 'Survey', var_2 = 'Arun' ** 4 ;
console.log(isNaN(var_2)); // true since var_2 is not a number
console.log(isNaN(156)); //false since 156 is a number
console.log('Infinity check : ',isNaN(NaN));
//isNaN() returns false for NUMBER, INFINITy, -INFINITY


let var_3 = "12.3456", var_4 = "63", var_5 = "arun223";
console.log(isFinite(var_3) && isFinite(var_4)); // true since both 12.3456 and 63 are valid numbers
console.log(isFinite(var_5)); // 'arun223' is not a number itself so returning false
/* Even for values like INFINITY, -INFINITY and NaN O/P will be false */

// Number.isNaN - returns true if the argument belongs to the number type and it is NaN. In any other case it returns false.
// Number.isFinite - returns true if the argument belongs to the number type and it is not NaN/Infinity/-Infinity. In any other case it returns false.

console.log(parseInt("12Rs.")); // 12
console.log(parseInt("100cms")); // 100
console.log(parseInt('a123')); // NaN

// STRINGS 
// str.length - for finding length of the string
// accessing element which are above or below the length of the string will give value as undefined
// using [] negative indexes cannot be accessed whereas using str.at(pos) can be used to access negative indexes
let var_6 = "Christmas",len = var_6.length;
console.log(var_6[4]) // 's'
console.log(var_6.at(4)) // 's'
console.log(var_6[-4]) // undefined
console.log(var_6.at(-4)) // 't'
console.log(var_6.at(-10)) // undefined
console.log(var_6.at(110)) // undefined
console.log(var_6[44]) // undefined

let var_7 = 'Survey Sparrow';
for(let i of var_7){
    console.log(i);
}
for(let i in var_7){
    console.log(var_7[i]);
}

console.log('Arun'.toUpperCase());
console.log('Arun'.toLowerCase());

//Arrays
let arr_1 = ['Apple',12,true,{
    name : 'jkl'
},function(){
    console.log('Function inside Array');
}];
console.log(arr_1[4]()); // O/P : 'Function inside Array' will be printed 
console.log(arr_1[3].name); // O/P : 'jkl' will be printed
// console.log(arr_1[-2]);  - O/P : undefined
console.log(arr_1.at(-2));

//MAP AND SET
// Using Map we can store key of different datatypes and we can access it the same way whereas in Objects the key should be in String format only and even while accessing other data types are internally converted to Strings
let map = new Map();
map.set(1,'One');
map.set(true,true);
map.set('two','TWO');
map.set(true,{name : 'Survey'});
console.log(map); // O / P : Map(3) { 1 => 'One', true => { name: 'Survey' }, 'two' => 'TWO' }
console.log(map.get(1)); // One
console.log(map.get(true)); // { name: 'Survey' }
console.log(map.get('two')); // TWO

let obj = {
    name : 'Google',
    1 : true
};
obj[2] = 'two';
obj.false = false;
console.log(obj); // O / P : { '1': true, '2': 'two', name: 'Google', false: false }

// Object as key in map
let thunivu = {
    actor : 'Ajith',
    director : 'H.Vinoth'
};
let varisu = {
    actor : 'Vijay',
    director : 'Vamsi'
}
let map_1 = new Map();
map_1.set(thunivu, {id : 1});
map_1.set(varisu, {id : 2});
console.log(map_1.get(thunivu)); // { id: 1 }
console.log(map_1.get(varisu)); // { id: 2 }

let obj_44 = {};
obj_44[thunivu] = 'Ajith'; 
obj_44[varisu] = 'Vijay';
console.log(obj_44); // O/P : { '[object Object]': 'Vijay' }

console.log(map_1.keys());
/*
[Map Iterator] {
  { actor: 'Ajith', director: 'H.Vinoth' },
  { actor: 'Vijay', director: 'Vamsi' }
}
 */
for(let i of map_1.keys()){
    console.log(i);
}
/*
{ actor: 'Ajith', director: 'H.Vinoth' }
{ actor: 'Vijay', director: 'Vamsi' }
*/

console.log(map_1.values());
/*
[Map Iterator] { { id: 1 }, { id: 2 } }
*/
for(let i of map_1.values()){
    console.log(i);
}
/* 
{ id: 1 }
{ id: 2 }
*/
console.log(map_1.entries());
/*
Map Entries] {
  [ { actor: 'Ajith', director: 'H.Vinoth' }, { id: 1 } ],
  [ { actor: 'Vijay', director: 'Vamsi' }, { id: 2 } ]
}
*/
for(let i of map_1.entries()){
    console.log(i);
}
/*
[ { actor: 'Ajith', director: 'H.Vinoth' }, { id: 1 } ]
[ { actor: 'Vijay', director: 'Vamsi' }, { id: 2 } ]
*/


//SET in JS
let set = new Set();
set.add('apple');
set.add('orange');
set.add('mango');
set.add('orange');
set.add('apple');
set.add('mango');
console.log(set); // Set(3) { 'apple', 'orange', 'mango' }
for(let i of set){
    console.log(i);
}
set.delete('mango'); // Set(2) { 'apple', 'orange' }
console.log(set); // Set(2) { 'apple', 'orange' }
console.log(set.has('apple')); // true
console.log(set.size); // 2
/*
apple
orange
mango
 */





