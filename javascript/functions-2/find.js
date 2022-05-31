let students = [
  { name: "John Lennon", average: 90 },
  { name: "Ringo Starr", average: 58 },
  { name: "Paul McCartney", average: 82 },
];

let passingStudent;

for (let i = 0; i < students.length; i++) {
  if (students[i].average > 50) {
    // passingStudents.push(students[i]);
    passingStudent = students[i];
    break;
  }
}

console.log(passingStudent);

// let passingStudents = students.find(function(student){
// 	return student.average > 50;
// });

const passingStudents = students.find(function (student) {
  return student.average > 50;
});

console.log(passingStudents);

// passingStudents === [
// 	{name: 'John Lennon', average: 90}
