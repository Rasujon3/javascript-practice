// Multiselector
// document.getElementsByClassName()

let list = document.getElementsByClassName('sample-class');

list[0].style.background = 'red';
list[0].style.color = 'white';
list[0].style.padding = '10px';
list[0].textContent = 'Hello World';

// console.log(list[0]);

// document.getElementsByTagName()
list = document.getElementsByTagName('li');
list = document.querySelector('ol').getElementsByTagName('li');


let lis = Array.from(list);
lis.forEach(item => {
    // console.log(item);
});

// document.querySelectorAll()
// id -> #
// tag -> nothing

// list = document.querySelectorAll('.sample-class');
list = document.querySelectorAll('ol li');
lis.forEach(item => {
    console.log(item);
});

let liodd = document.querySelectorAll('li:nth-child(odd)');
let lieven = document.querySelectorAll('li:nth-child(even)');

liodd.forEach(item =>{
    item.style.background = 'grey';
    item.style.color = 'white';

});
lieven.forEach(item =>{
    item.style.background = 'red';
    item.style.color = 'white';

});

console.log(list);