// document.getElementById() // single element niye kaj kore

let val;
// getting an Element
val = document.getElementById('document-title');
val = document.getElementById('document-title').id;
val = document.getElementById('document-title').className;

// Changing Style
document.getElementById('document-title').style.background='#333';
document.getElementById('document-title').style.color='#fff';
document.getElementById('document-title').style.padding='10px';
document.getElementById('document-title').style.display='block';

// Changing Content
document.getElementById('document-title').textContent='New title';
document.getElementById('document-title').innerText='AgainNew title';
document.getElementById('document-title').innerHTML='<i>Again Again New Title</i>';

val = document.getElementById('document-title');
val.innerText = "Ha ha ha";

// document.querySelector() // single element
val = document.querySelector('#document-title');//id
val = document.querySelector('.title-class');//class
val = document.querySelector('h3');
val = document.querySelector('ol');
val = document.querySelector('ol li');//id
val = document.querySelector('ol li');//id
val.style.background = 'red';
val.style.color = 'white';
val = document.querySelector('li:last-child');
val = document.querySelector('li:nth-child(even)').innerText = "Hello";
val = document.querySelector('li:nth-child(odd)').innerText = "Hello";

console.log(val);