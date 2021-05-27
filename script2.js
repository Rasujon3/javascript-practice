// Remove Element
let listItem = document.querySelectorAll('li');
let list = document.querySelector('ul');

// listItem[0].remove();
// listItem[5].remove();

// list.removeChild(listItem[5]);

list.classList.add("test");
list.classList.add("test-new");

list.classList.remove("samole-class");

let val = list.hasAttribute('title');
list.setAttribute("title", "New-title");
list.removeAttribute("title");

console.log(val);

console.log(list);
console.log(listItem);