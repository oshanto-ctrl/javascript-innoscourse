/* Styling the document */

function $(selector) {
    return document.querySelector(selector);
}

let h1 = $('.myh1');
let p = $('.mypara');

// console.log(h1.style);
// change background color
// h1.style.background = 'salmon';
// h1.style.fontSize = '26px';
// h1.style.fontFamily = 'Arial';
// h1.style.padding = '20px';

// Create a style Object for h1 tag
let h1Styles = {
    background: 'salmon',
    fontSize: '30px',
    fontFamily: 'Arial',
    padding: '25px',
    color: '#222',
    textAlign: 'center',
};

// Object.assign(property: where to change, property: what to change to);
Object.assign(h1.style, h1Styles);


// Para (P tag) style Object
let paraStyles = {
    padding: '10px',
    fontSize: '18px',
    color: '#333333',
    lineHeight: '1.3rem',
    textAlign: 'right',
}

// Assign the styles to the element.
Object.assign(p.style, paraStyles);