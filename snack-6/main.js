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

const products = [
  { title: "Mela", price: 2.3 },
  { title: "Banana", price: 1.5 },
  { title: "Mango", price: 2.0 },
  { title: "Pesca", price: 1.8 },
  { title: "Pera", price: 1.5 },
  { title: "Arancia", price: 2.2 },
  { title: "Frutto della passione", price: 3.5 },
  { title: "Ananas", price: 2.5 },
  { title: "Cocco", price: 2.0 },
  { title: "Kiwi", price: 1.0 },
  { title: "Fragola", price: 1.5 },
  { title: "Lampone", price: 2.5 },
  { title: "Limone", price: 1.5 },
];

const numFruits = parseInt(
  prompt("inserisci il numero di frutti da aggiungere alla macedonia")
);

let macedoniaFruits = [];
let macedoniaPrice = 0;
for (let i = 0; i < numFruits; i++) {
  const fruit = products[randomiseNum(0, products.length - 1)];
  const { title, price } = fruit;
  macedoniaFruits.push(title);
  macedoniaPrice += price;
}

// unica cosa che non ho avuto tempo da risolvere è controllare se il frutto era gia incluso nella macedonia in quanto comlicherei l'esercizio creando varibili fuori dallo scope per assegnare dentro in quello del while
console.log(
  `prego, è pronta la tua macedonia con ${[...macedoniaFruits].join(
    ", "
  )}. il prezzo della macedonia è di € ${macedoniaPrice.toFixed(2)}`
);

// {
// const fruits = products.map((fruit) => fruit.title);

// let choice;
// let macedonia = [];
// do {
//   choice = prompt(`inserisci un frutto da aggiungere alla macedonia:
//   (scegli tra ${[...fruits].join(", ")})
//   inserisci 'random' per inserire un frutto casuale
//   inserisci 'preparamela' per preparare la macedonia`);

//   if (choice !== "random" && choice !== "preparamela") {
//     while (choice === "" || !fruits.includes(choice)) {
//       choice =
//         prompt(`la tua scelta non è corretta prova a reinserire un frutto.
//       inserisci un frutto da aggiungere alla macedonia:
//       (scegli tra ${[...fruits].join(", ")})
//       inserisci 'random' per inserire un frutto casuale
//       inserisci 'preparamela' per preparare la macedonia`);
//     }
//   }
//   if (choice !== "preparamela") {
//     if (choice === "random") {
//       do {
//         macedonia.push(products[randomiseNum(0, products.length - 1)]);
//       } while (macedonia.includes(macedonia[macedonia.length - 1]));
//     }
//     while (macedonia.includes(choice)) {
//       prompt(`la tua scelta è gia inclusa nella macedonia prova a reinserire un frutto.
//       inserisci un frutto da aggiungere alla macedonia:
//       (scegli tra ${[...fruits].join(", ")})
//       inserisci 'random' per inserire un frutto casuale
//       inserisci 'preparamela' per preparare la macedonia`);

//       macedonia.push(products.filter((fruit) => fruit.title === choice));
//     }
//   }
// } while (choice != "preparamela");

// macedonia = macedonia.flat();

// console.log(macedonia);
// }
// avevo provato a complicarmi un attimo facendo scegliere all'utente ma c'erano abbastanza fattori da tenere in considerazione
