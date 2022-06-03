// console.log("Let's get dangerous!");

const bodyEl = document.querySelector("body");
const darkModeButtonEl = document.getElementById("enableDarkMode");
const lightModeButtonEl = document.getElementById("enableLightMode");
const purpleModeButtonEl = document.getElementById("enablePurpleMode");
console.log(darkModeButtonEl);

darkModeButtonEl.addEventListener("click", () => {
  console.log("You clicked the dark mode button");
  bodyEl.className = "darkmode";
});

lightModeButtonEl.addEventListener("click", () => {
  bodyEl.className = "";
});

purpleModeButtonEl.addEventListener("click", () => {
  bodyEl.style.backgroundColor = "purple";
});
