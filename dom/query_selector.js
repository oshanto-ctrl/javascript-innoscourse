/* Query Selector */

// let container = document.querySelector('div');
// // console.log(container); // Does it output's the container

// let con = document.querySelectorAll('div');
// console.log(con);

let btn = document.querySelector('.my-btn');

let colors = ['orange', 'yellow', 'pink', 'purple'];

let i = 0;

btn.addEventListener('click', function() {
    let h1 = $('#my-h1');
    h1.innerHTML = 'This is New TWINKLE!';

  
    h1.style.background = colors[i];

    btn.style.cursor = 'pointer';
    

    if(i >= colors.length) {
        i = 0;
    } else {
        i++;
    }
});

// A Selector Function like JQuery
function $(selector) {
    return document.querySelector(selector);
}
