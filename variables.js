/*

    Vairables can be decalred in JS 4 ways.
    * Automatically
    * Using keyword var
    * Using keyword let
    * Using keyword const

*/

/*
    When to use what?

    * Always declare variables.
    * Always use const if the value shouldn't be changed.
    * Always use const if the type shouldn't be changed (Array, Objects).
    * Only use let if you can't use const.
    * Only use var if you MUST support old browsers.
*/

// Automtically.
autoVar = "The var that contains this message is automatically declared.";
console.log(autoVar);

// var
var n = 10.07;
console.log('Var n = ', n);

// let
let m = n + 3;
console.log('let m variable = ', m);


// const
let ownerOfCompany = "Casual Ahmed";
console.log('Owner = ', ownerOfCompany);


preschool = "ABC";
//const preschool = "XYZ"; // Reference Error.
console.log(preschool);
console.log("ABC");
