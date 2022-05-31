function outer() {
  let a = "banana";
  let b = {
    class: true,
    sleepy: false,
  };
  console.log(a);
  console.log(b);

  function inner(a, b) {
    console.log(a);
    console.log(b);
    a = "apple";
    b = {
      year: 2005,
      make: "FORD",
      model: "Mustang",
    };

    b.model = "Fiesta";

    console.log(a);
    console.log(b);
  }

  inner(a, b);
  console.log(a);
  console.log(b);
}

outer();

// Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively. Log their values immediately.

// Log the values of a and b in the inner function.

// Update the inner function to take two parameters named a and b.

// Pass a and b in as arguments when you execute inner().

// Inside the inner function,
// assign new values to a and b
// and log them at the end of the function
// AND after the execution of inner(a,b).

// Inside the inner function, update a property of the b object.
