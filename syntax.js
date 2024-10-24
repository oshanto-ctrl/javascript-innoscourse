
var req = '1 liter of liquid color.'; // First variable
console.log(req);

var odd = 3; var even = 2;
console.log(odd + even); // Odd + Even = Odd

console.log(typeof even, ' ', typeof req);

// Concatanate two string
var foo = "Foo"; var bar = "Bar";
var fooBar = foo + ' ' + bar;
console.log(fooBar); // Foo Bar

/* 
    let keyword tells JS to create a variable.
    let petName = "RUFUS";
*/
let petName = "Rufus"; console.log('Pet Name = ', petName);

var myName = "Rozario";

console.log('I am ', myName, ' My pet\'\s name is ', petName, '. Isn\'\t she cute');

/*
    multi variable by let keyword.
    let x, y;
*/

let x, y;
x = 10; y = 20; console.log(x, y);
let a = 10, b = 50;
console.log(a, b);

/*
    const keyword for declaring constant values.
    We can't reassign any assigned constant variable's value.
*/

const VOTINGAGE = 18;
console.log("Legal voting age (in Years) = ", VOTINGAGE);

/* TypeError: Assignment to constant varibale */
// VOTINGAGE = 21;
// console.log("Legal voting age (Y.O) ", VOTINGAGE);

// Camel Case Naming
let iLoveDesert;

// Variable name with $ sign in js
let $PHP = "What Is This!!!";
console.log($PHP);
