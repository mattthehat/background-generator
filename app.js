var _ = require('lodash');



var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));
const css = document.querySelector('h3');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const body = document.getElementById('gradient');

// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);

changeBG = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background;
}

color1.addEventListener("input", changeBG);
color2.addEventListener("input", changeBG);


