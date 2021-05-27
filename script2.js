// Replacing Element
let newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode('h1 New Heading'));
newHeading.className = "sample-class";

let oldHeading = document.querySelector('h3');

let parent = document.querySelector('.container');
// parent = oldHeading.parentElement;

parent.replaceChild(newHeading, oldHeading);

console.log(newHeading);
console.log(oldHeading);
console.log(parent);