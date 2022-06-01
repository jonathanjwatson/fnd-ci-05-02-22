// setTimeout(function () {
//   //   alert("Timeout!");
//   console.log("Timeout!");
// }, 2000);

// console.log("now");

// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   alert("click");
// });

// getData('/my-api/data', function(data) {
// 	console.log('got data', data)
// });

// let teacher = {
//   name: "Shane",
//   speak: function () {
//     //Maybe you're fetching data from an API, or getting user input
//     const self = this;
//     setTimeout(function () {
//       console.log("later my name is " + self.name);
//     }, 1000);

//     //Runs immediately
//     console.log("Now my name is " + this.name);
//   },
// };

// teacher.speak();

// setTimeout(() => {
//   console.log("This is an arrow function!");
// }, 2000);

let teacher = {
  name: "Jonathan",
  speak: function () {
    setTimeout(() => {
      console.log("Later, my name is " + this.name);
    }, 2000);
    console.log("Now, my name is " + this.name);
  },
};

teacher.speak();
