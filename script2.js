// Events of Javascript
// event w3school
// Onclick

// Event listener

// function message() {
//     console.log("Mouse over button");
// }

let btn = document.getElementById('sample-btn').addEventListener('dblclick', message);

function message(params) {
    console.log("Button Clicked");
}

console.log(btn);