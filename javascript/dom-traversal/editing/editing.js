// console.log("Editing the DOM");

// 1. Target the element

// const aEl = document.querySelector("a");
// console.log(aEl);

// 2. Use innerHTML to change the text on the screen.

// aEl.innerHTML = "New Link Text!!!";
// const aEl = document.querySelector("a");

//Get an attribute
// console.log(aEl.href); //"http://google.com"
// aEl.href = "http://www.bing.com";
// //Set an attribute
// a.name = 'new link name';

// //Add a new attribute
// aEl.target = "_blank";

//Remove the first list item
// document.querySelector('.first').remove();

// 1. Create a new element.
const welcomeHeader = document.createElement("h1");
// 2. Add content.
welcomeHeader.innerText = "Welcome to our Class!";
// 3. Append to an existing element.
document.querySelector("section").appendChild(welcomeHeader);
