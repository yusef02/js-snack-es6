const students = [
  {
    id: 213,
    name: "Marco della Rovere",
    totScore: 78,
  },
  {
    id: 110,
    name: "Paola Cortellessa",
    totScore: 96,
  },
  {
    id: 250,
    name: "Andrea Mantegna",
    totScore: 48,
  },
  {
    id: 145,
    name: "Gaia Borromini",
    totScore: 74,
  },
  {
    id: 196,
    name: "Luigi Grimaldello",
    totScore: 68,
  },
  {
    id: 102,
    name: "Piero della Francesca",
    totScore: 50,
  },
  {
    id: 120,
    name: "Francesca da Polenta",
    totScore: 84,
  },
];

// Un array di stringhe contenente il loro nome tutto in maiuscolo. ES (Marco della Rovere => MARCO DELLA ROVERE);

const studentsNameUpCase = students.map((student) =>
  student.name.toUpperCase()
);
console.log(studentsNameUpCase);

// Un array di oggetti "studente" che hanno un totale di voti superiore a 70

const studentsScoreOver70 = students.filter((student) => student.totScore > 70);
console.log(studentsScoreOver70);

// Un array di oggetti "studente" che hanno un totale di voti superiore a 70 e id superiore a 120

const studentsScoreOver70IdOver120 = students.filter(
  (student) => student.totScore > 70 && student.id > 120
);
console.log(studentsScoreOver70IdOver120);
