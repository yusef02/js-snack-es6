const cars = [
  {
    color: "purple",
    type: "minivan",
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    capacity: 5,
  },
  {
    color: "blue",
    type: "pullman",
    capacity: 20,
  },
  {
    color: "black",
    type: "car",
    capacity: 5,
  },
  {
    color: "red",
    type: "car",
    capacity: 5,
  },
  {
    color: "gray",
    type: "camper",
    capacity: 4,
  },
  {
    color: "gray",
    type: "pullman",
    capacity: 40,
  },
  {
    color: "white",
    type: "camper",
    capacity: 6,
  },
  {
    color: "white",
    type: "pullman",
    capacity: 15,
  },
  {
    color: "black",
    type: "car",
    capacity: 7,
  },
];

const numPassenger = parseInt(prompt("inserisci il numero di passeggeri"));

const minCapacityCarsForShare = cars.filter(
  (car) => car.capacity >= numPassenger
);

let [{ capacity }] = minCapacityCarsForShare;
let idealCarForShare = {};

for (let car of minCapacityCarsForShare) {
  if (car.capacity <= capacity) {
    capacity = car.capacity;
    idealCarForShare = { ...car };
  }
}
console.log(idealCarForShare);
