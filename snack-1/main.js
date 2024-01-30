const vips = [
  "Dwayne Johnson",
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];

const tavoloVip = vips.map((vip, index) => {
  return { table: "Vips", name: vip, seat: index + 1 };
});
console.log(tavoloVip);
