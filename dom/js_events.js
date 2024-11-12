// get button
let btn = document.querySelector('#mybtn');

// get div
let div = document.querySelector('#mydiv');

let isShown = false;


// Work with button
btn.addEventListener('click', function() {

    // If button clicked, set visibility = 'visible' else 'hidden'
    if(isShown) {

        div.style.visibility = 'hidden';
        isShown = false;
        btn.style.backgroundColor = 'green';
        btn.innerHTML = 'Watch';


    } else {

        div.style.visibility = 'visible';
        isShown = true;
        
        btn.style.backgroundColor = 'red';

        // div styling
        div.style.backgroundColor = 'salmon';
        div.style.margin = '15px';
        div.style.fontSize = 'medium';

        div.lastElementChild.style.padding = '10px'; // There have to be efficient way to access that. I am just trying.
        div.firstElementChild.style.textAlign = 'center'; 
        btn.innerHTML = 'Hide';

    }

});



