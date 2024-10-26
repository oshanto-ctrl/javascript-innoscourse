/*
    Datatypes. 8 type of Datatypes in JS.
    String Number
    Bigint Boolean
    Undefined Null
    Symbol Object

    Object datatype can contain:
    An object An array
    A date
*/

// NUMBER

let length  = 16; let width = 7.5;
console.log(
    "Length Type ", typeof(length),
    "\nWidth Type ", typeof(width),
); // Type is number.

// STRING

const month = "November"; 
console.log("Month Variable Type ", typeof(month));


// BOOLEAN
let permissionToTravel = false;

if(permissionToTravel) {
    console.log("You can travel.\n");
    console.log(typeof(permissionToTravel)); // boolean
} else {
    console.log("Restricted to travel.\n");
    console.log(typeof(permissionToTravel)); // boolean
}

// OBJECT

const person = {
    name : "John",
    dob : "11/02/2000",
    location : "n/a",
    age : 24,
    games : ['cod', 'csgo', 'gta'],
    // Key : Value
    // Object property : Object value
}

console.log(person);
let personName = person['name'];
console.log(personName);

console.log("Age ", person.age);
console.log(
    person.games[2],
    person['games'][1]
)

// ARRAY

games = ['cod', 'csgo', 'gta', 'fifa', 10.0, 100];
console.log("My fav game: ", games[0]); // COD
console.log("Last Game is ", games[games.length]); // undefined



// DATE

const today = new Date();
console.log(today); // Sat Oct 26 2024 21:49:56 GMT+0600 (Bangladesh Standard Time)

console.log(
    "This Year = ", today.getFullYear(),
    "Timezone = ", today.getTime(), // seconds
);


// Left to Right Calculation.

// Number + String: Act as a string
// num + num + str (becomes)
// (num + num) + str
let numstr = 16 + 2 + " Valid age to vote.";
console.log(numstr, typeof(numstr));

// String + Number
// str + num + num (becomes)
// str + str + str
let numstr2 = "VOLVO" + 44 + 50;
console.log(numstr2, typeof(numstr2)); 
