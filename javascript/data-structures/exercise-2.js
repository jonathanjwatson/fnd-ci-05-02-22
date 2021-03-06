let course = {
  name: "JavaScript Applications",
  awesome: true,
  teachers: ["Assaf", "Shane"],
  students: [
    {
      name: "Steve",
      computer: {
        OS: "Linux",
        type: "laptop",
      },
    },
    {
      name: "Katy",
      computer: {
        OS: "OSX",
        type: "macbook",
      },
    },
    {
      name: "Chuck",
      computer: {
        OS: "OSX",
        type: "macbook",
      },
    },
  ],
  preReqs: {
    skills: ["html", "css", "git"],
    equipment: {
      laptop: true,
      OSOptions: ["linux", "osx"],
    },
  },
};

// Name of the course ('JavaScript Applications')
console.log(course.name);
// // Name of the second teacher ('Shane')
console.log(course.teachers[1]);
// // Name of the first student ('Steve')
console.log(course.students[0].name);
// // Katy's computer type ('macbook')
console.log(course.students[1].computer.type);
// // The preReq equipment object
console.log(course.preReqs);
// // The second OSOption from equipment prereqs ('osx')
console.log(course.preReqs.equipment.OSOptions[1]);
// String listing the OSOptions separated by 'or' ('linux or osx')
console.log(course.preReqs.equipment.OSOptions.join(" or "));
// An array of all the students that are using osx
const studentsUsingOSX = [];

for (let i = 0; i < course.students.length; i++) {
  console.log(course.students[i].computer.OS);
  if (course.students[i].computer.OS === "OSX") {
    console.log("You're using OSX");
    studentsUsingOSX.push(course.students[i]);
  }
}

console.log(studentsUsingOSX);
