let students = [
  { name: "Edwin", age: 10 },
  { name: "Kim", age: 11 },
  { name: "Skip", age: 9 },
];

// const studentNames = students.map((student) => {
//   return student.name;
// });
// Implict Return
const studentNames = students.map((student) => student.name);

console.log(studentNames);
