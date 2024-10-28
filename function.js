/* FUNCTIONS */

console.log("____ LEARNING FUNCTIONS ____");

// Function is a block of code designed to perform a particular task.
// Executed when "Something" invokes it.

function dearMe() {
    return "Hello dear me.\n";
}

let msg = dearMe()// Invoking the function.
console.log(msg)

/* Function with parameters */

function bowlingCommentary(bowler, ball) {
    let bc = bowler + " bowled a " + ball + ".";
    return bc;
}

let bowlinCommentator = bowlingCommentary("Taskin Ahmed", "Very Wide Ball");
console.log(bowlinCommentator);

console.log(bowlingCommentary('Washim Akram', 'Splendid Outswinger.'));


// Same parameter different arguments.

function checkMyArg(myArg) {

    const argType = typeof(myArg);

    if(argType === "number") {
        console.log("Given ", myArg, " is a ", argType);
    } else if(argType === "boolean") {
        console.log("Given ", myArg, " is a ", argType);
    } else if(argType === "string") {
        console.log("Given ", myArg, " is a ", argType);
    }
}

// invoke checkMyArg() with string
checkMyArg(10);

// invoke checkMyArg() with number
checkMyArg('KITTY');

// invoke checkMyArg() with boolean
checkMyArg(false);


// Calculation in paramter
function greet(name) {
    return `Hello ${name}`;
}

function welcome(callback, username) {
    return callback(username);
}

console.log(welcome(greet, 'Alice'));


// Define a function inline when calling another function
console.log(

   welcome( 
    function(name){
        return `Hi, ${name}`;
    }, 'bob'
   )

); // Hi, bob

