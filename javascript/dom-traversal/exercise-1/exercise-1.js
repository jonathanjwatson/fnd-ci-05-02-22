console.log("Exercise 1");

// Get the header element
// const headerEl = document.querySelector("header");
// console.log(headerEl);
// Get all the section elements
// const sectionEls = document.querySelectorAll("section");
// console.log(sectionEls);
// Get the section element with class="current"
const currentSectionEl = document.querySelector("section.current");
// console.log(currentSectionEl);
// Get the section that comes after the current section
const afterCurrentSectionEl = currentSectionEl.nextElementSibling;
// console.log(afterCurrentSectionEl);
// Get the h2 node from the section before the 'current' section
const beforeCurrentSectionEl = currentSectionEl.previousElementSibling;
// console.log(beforeCurrentSectionEl);
const h2BeforeCurrentSectionEl = beforeCurrentSectionEl.children;
// console.log(h2BeforeCurrentSectionEl);
// Get the div that contains the section that has an h2 with a class of 'highlight'
const highlightedH2El = document.querySelector("h2.highlight");
console.log(highlightedH2El.parentNode.parentNode);
// Get all the sections that contain an H2 (using a single statement);

// const body = document.querySelector("body");
// console.log(body);