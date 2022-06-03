// console.log("Exercise 2!");

// 1. Update the 'Coffee' item to say 'Fair Trade Coffee'
const listEl = document.getElementById("list");
const liEls = document.querySelectorAll("li");
const liArray = Array.from(liEls);

for (let i = 0; i < liArray.length; i++) {
  console.log(liArray[i].innerText);
  if (liArray[i].innerText === "Coffee") {
    console.log("This is the one I want to change!");
    liArray[i].innerText = "Fair Trade Coffee";
  }
}

// 2. Remove 'Twinkies' from the list
liEls[3].remove();
// 3. Add an item 'Cheese Whiz'
// Create a new element
const newLi = document.createElement("li");
// Add content
newLi.innerText = "Cheese Whiz";
// Append to existing element
listEl.append(newLi);
// 4. Clear the list and programmatically add items from the array ['protein powder', 'muscle milk', 'power bars']
listEl.innerHTML = "";
const newFood = ["protein powder", "muscle milk", "power bars"];

for (let i = 0; i < newFood.length; i++) {
  const newLi = document.createElement("li");
  newLi.innerText = newFood[i];
  if (newFood[i] === "muscle milk") {
    newLi.className = "important";
  }
  listEl.append(newLi);
}
// 5. Add the class 'important' to the muscle milk item.
