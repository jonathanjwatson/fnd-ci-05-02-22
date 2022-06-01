let players = [
  { firstName: "Cam", lastName: "Newton", position: "QB", touchdowns: 32 },
  { firstName: "Derek", lastName: "Anderson", position: "QB", touchdowns: 0 },
  {
    firstName: "Jonathan",
    lastName: "Stewart",
    position: "RB",
    touchdowns: 12,
  },
  { firstName: "Mike", lastName: "Tolbert", position: "RB", touchdowns: 8 },
  { firstName: "Fozzy", lastName: "Whittaker", position: "RB", touchdowns: 3 },
  { firstName: "Ted", lastName: "Ginn", position: "WR", touchdowns: 9 },
  { firstName: "Devin", lastName: "Funchess", position: "WR", touchdowns: 2 },
];

// Find a player with the name 'Mike'
const playerMike = players.find(function (player) {
  return player.firstName === "Mike";
});

console.log(playerMike);
// Get an array of all players with position 'RB'
const runningBacks = players.filter(function (player) {
  return player.position === "RB";
});
console.log(runningBacks);
// Get an array of all the players lastNames
const playerLastNames = players.map(function (player) {
  return player.lastName;
});
console.log(playerLastNames.join("\n"));
// Get an array of the full names of all the running backs with more than 5 touchdowns
// const runningBacksWithMoreThanFiveTouchdowns = players.filter(function (
//   player
// ) {
//   return player.position === "RB" && player.touchdowns > 5;
// });
// console.log(runningBacksWithMoreThanFiveTouchdowns);

// const fullNamesOfRunningBacksWithMoreThanFiveTouchdowns =
//   runningBacksWithMoreThanFiveTouchdowns.map(function (player) {
//     return player.firstName + " " + player.lastName;
//   });
//   console.log(fullNamesOfRunningBacksWithMoreThanFiveTouchdowns);
const runningBacksWithMoreThanFiveTouchdowns = players
  .filter(function (player) {
    return player.position === "RB" && player.touchdowns > 5;
  })
  .map(function (player) {
    return player.firstName + " " + player.lastName;
  });
console.log(runningBacksWithMoreThanFiveTouchdowns);

// Get the number of touchdowns scored by Running backs

// const totalNumberOfRunningBackTouchdowns = players
//   .filter(function (player) {
//     return player.position === "RB";
//   })
//   .reduce(function (sum, player) {
//     return sum + player.touchdowns;
//   }, 0);

const totalNumberOfRunningBackTouchdowns = players.reduce(function (
  sum,
  player
) {
  if (player.position === "RB") {
    return sum + player.touchdowns;
  } else {
    return sum;
  }
},
0);

console.log(totalNumberOfRunningBackTouchdowns);
