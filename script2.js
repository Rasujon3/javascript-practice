// Adding Element to DOM
// Create Element

// let olItem = document.createElement('li');

// // Add Id and Class
// olItem.className = "a new another-class";
// olItem.id = "new-element";

// // Add Atrribute
// olItem.setAttribute('title', 'A title to new Element');

// olItem.appendChild(document.createTextNode('javascript'));
// document.querySelector('ol').appendChild(olItem);

// Add Element in unodered list

let ulItem = document.createElement('li');
let link = document.createElement('a');

link.appendChild(document.createTextNode('Instragram'));
link.setAttribute('href','http://www.instagram.com');

ulItem.appendChild(link);

document.querySelector('ul').appendChild(ulItem);


console.log(ulItem);
// console.log(link);