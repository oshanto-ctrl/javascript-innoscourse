/* 
    OPERATORS 

    + - * / ! % = == != > < >= <=
*/

let students = 5;
let apples = 2;

students = students * 2;
apples = apples * 10;

console.log("Sudents = ", students,
    " apples = ", apples, 
    " Each one gets = ", (apples/students)
);

let digit = 12345;
let lastDigit = digit % 10;
console.log(
    "Digit = ", digit,
    "Last digit = ", lastDigit,
);

// Recursive integer digit sum 

function sumOfDigits(number) {
    
    if(number == 0) {
        return 0;
    }
    return (number % 10 + sumOfDigits(Math.floor(number / 10)));

}

console.log(
    "Sum of digit ", digit , " is = ", sumOfDigits(digit)
);
