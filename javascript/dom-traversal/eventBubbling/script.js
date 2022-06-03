console.log("test");

const numbersDiv = document.getElementById("numbers");

for (let i = 0; i < 10; i++) {
  const buttonEl = document.createElement("button");
  buttonEl.innerText = i;
  numbersDiv.append(buttonEl);
}

console.log(document.querySelectorAll("button"));

numbersDiv.addEventListener("click", (event) => {
  console.log("You clicked a button");
  console.log(event.target.innerText);
});
