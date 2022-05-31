console.log("Scope!");

const variableOne = "apple";

function testFunction() {
  var variableOne = "banana";
  console.log("Inside the function: ", variableOne);
}

testFunction();

console.log(variableOne);
