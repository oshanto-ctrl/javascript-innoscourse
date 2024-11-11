/* Get Element by ID name */

// Select the h1 tag from container-jumbotron div
let h1 = document.getElementById('my-h1');

// Modify the inner html content of html
h1.innerHTML = "Rain Rain Go Away!";

/*  Select elements by tag name.
    All tags will be selected in the document
    with the passed parameter.
*/
let headers = document.getElementsByTagName('p');

/* Select elements by class name. All tags
with same class name will be selected. */

let paras = document.getElementsByClassName('my-p');


let btn = document.getElementById('my-btn');

/*
btn.addEventListener('click', function() {
    alert("Thanks for the click.");
});
*/

h1.addEventListener('click', function() {
    h1.innerText = "Twinkle Left The Chat!";
});

let colors = ['red', 'magenta', 'yellow', 'cyan', 'blue'];

let i = 0;

btn.addEventListener('click', function() {

    h1.innerHTML = "Twinkle Left Chat: Button Was Clicked.";

    h1.style.background = colors[i];

    if(i >= colors.length) {
        i = 0;
    } else {
        i++;
    }


});
