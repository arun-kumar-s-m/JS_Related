function* numbergenerator(){
    for(let i = 0;i < 5;i++){
        yield 1;
    }
    for(let i = 0;i < 5;i++){
        yield 2;
    }
}
let genObj = numbergenerator();
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
/*  { value: 1, done: false }
    { value: 1, done: false }
    { value: 1, done: false }
    { value: 1, done: false }
    { value: 1, done: false }
    { value: 2, done: false }
    { value: 2, done: false }  */