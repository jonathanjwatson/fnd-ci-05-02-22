let students = [
  { name: "John Lennon", average: 90 },
  { name: "Ringo Starr", average: 58 },
  { name: "Paul McCartney", average: 82 },
];

// const passingStudents = [];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
//   if (students[i].average > 60) {
//     console.log("Passing!");
//     passingStudents.push(students[i]);
//   }
// }

// console.log(passingStudents);

const passingStudents = students.filter(function (student) {
  return student.average > 60;
});
console.log(passingStudents);

// let passingStudents = students.filter(function(student){
// 	return student.average > 60;
// });

// passingStudents === [
// 	{name: 'John Lennon', average: 90},
// 	{name: 'Paul McCartney', average: 82}
// ];

// const passingStudents = students.filter((student) => student.average > 60);
