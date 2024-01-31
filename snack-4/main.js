const teams = [
  {
    name: "Team Turtle",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Frog",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Penguin",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Hippopotamus",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Seal",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Crocodile",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Dolphin",
    score: 0,
    foul: 0,
  },
];

teams.forEach((team) => {
  team.score = randomiseNum(50, 100);
  team.foul = randomiseNum(1, 20);
});

const classificationTeams = teams.map((team) => {
  const { name, foul } = team;
  return { name, foul };
});
console.table(classificationTeams);

function randomiseNum(min = 1, max = 100) {
  if (isNaN(max) || isNaN(min)) {
    console.error("i valori dei parametri non sono corretti");
    return;
  }
  if (min > max) {
    console.error(
      "il valore del limite minore e superiore a valore del limite massimo"
    );
    return;
  }
  let randNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randNum;
}
