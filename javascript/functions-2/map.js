let students = [
  { firstName: "Cam", lastName: "Newton" },
  { firstName: "Ted", lastName: "Ginn" },
  { firstName: "Greg", lastName: "Olsen" },
];

// const fullNames = [];

// for (let i = 0; i < students.length; i++) {
//   fullNames.push(students[i].firstName + " " + students[i].lastName);
// }

// console.log(fullNames);

// let fullNames = students.map(function(student){
// 	return `${student.firstName} ${student.lastName}`;
// })

const fullNames = students.map(function (student) {
  //   return student.firstName + " " + student.lastName;
  return `${student.firstName} ${student.lastName}`;
});
console.log(fullNames);

// fullNames === ["Cam Newton", "Ted Ginn", "Greg Olsen"]
