let students = [
  { name: "Cam Newton", assignmentsCompleted: 6 },
  { name: "Ted Ginn", assignmentsCompleted: 10 },
  { name: "Greg Olsen", assignmentsCompleted: 8 },
];

// let total = 0;

// for (let i = 0; i < students.length; i++) {
//   total = total + students[i].assignmentsCompleted;
// }

// console.log(total);

// let totalAssignments = students.reduce(function (sum, currentStudent) {
//   return sum + currentStudent.assignmentsCompleted;
// }, 0);

const totalAssignments = students.reduce(function (sum, student) {
  return sum + student.assignmentsCompleted;
}, 0);

console.log(totalAssignments);
