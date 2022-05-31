let teacher = {
  name: "Jonathan",
  // sayName: function() {
  // 	console.log(this.name);
  // }
  printThis: function () {
    console.log(this);
  },
  sayName: function () {
    console.log(this.name);
  },
};
// teacher.sayName(); //'Assaf'

console.log(teacher);

teacher.printThis();

teacher.sayName();
