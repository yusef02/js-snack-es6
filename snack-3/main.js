const bikes = [
  {
    name: "Moutain bike",
    weight: 40,
  },
  {
    name: "Downhill",
    weight: 46,
  },
  {
    name: "Bmx",
    weight: 27,
  },
  {
    name: "Tandem",
    weight: 39,
  },
  {
    name: "Gravel bike",
    weight: 35,
  },
  {
    name: "Moutain bike",
    weight: 26,
  },
  {
    name: "Bmx",
    weight: 20,
  },
  {
    name: "Tandem",
    weight: 30,
  },
  {
    name: "Downhill",
    weight: 38,
  },
  {
    name: "Bmx",
    weight: 29,
  },
  {
    name: "Moutain bike",
    weight: 30,
  },
];

let minWeight = bikes[0].weight;
let lighterBikeName;
for (let bike of bikes) {
  const { name, weight } = bike;
  if (weight < minWeight) {
    lighterBikeName = name;
    minWeight = weight;
  }
}
console.log(
  `la bicicletta piu leggera è la ${lighterBikeName} con ${minWeight} kg di peso`
);
