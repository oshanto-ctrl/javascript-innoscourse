// Select Root id element
let root = document.querySelector('#root');

/** Creating DOM Elements **/

// create a div 'jumbotron' element
let jumbotronDiv = document.createElement("div");
// Define a classname
// jumbotronDiv.classList.push('jumbotron');
jumbotronDiv.className = 'jumbotron text-center';
jumbotronDiv.setAttribute('id', 'my-jumbo');


// make a new h1 element
let h1 = document.createElement('h1');
h1.className = 'display-2 text-center';

h1.innerHTML = '<strong>It is I, h1, who was created by DOM element!</strong>'

// Make jumbotronDiv child to root (APPEND)
root.appendChild(jumbotronDiv);

// Make h1 child to jumbotron
jumbotronDiv.appendChild(h1);



// Namefield works
let nameField = document.querySelector('#nameField');
let resultField = document.querySelector('#resultField');

nameField.addEventListener('keypress', function(event) {
    // console.log(event);
    if(event.keyCode === 13) {
        let name = event.target.value; // Get's the target of input box
        
        // Pass to create a result list and make it a result field's child
       // resultField.appendChild(createLi(name));
       createLi(resultField, name);

       // Empty the input box for next input
       event.target.value = '';
    }
});

// Create List function
function createLi(resultField, name) {
    // new li element and returns it.
    let li = document.createElement('li');
    li.className = 'resultList';
    li.innerHTML = name;

    // create and delete an list element
    let span = document.createElement('span');
    span.innerHTML = 'X';
    span.className = 'removeItem';
    
    span.style.color = 'red';
    span.style.paddingLeft = '25px';
    
    span.style.cursor = 'pointer';

    span.addEventListener('click', function() {
        resultField.removeChild(li); // Removes the child
    });

    li.appendChild(span); // Span is the child of li.

    resultField.appendChild(li);
    
}

