// chiedo all'utente di scegliere pari o dispari

const choiceUser = prompt("Scegli: pari o dispari");

// chiedo all'untente di inserire un numero da 1 a 5

const numUser = parseInt(prompt("inserisci un numero da 1 a 5"));

// genero un numero randomico da 1 a 5 con una funzione

function generateNumberRandom(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}

// scrivo una funzione che mi dice se il numero dell'utente è pari

function isNumberEven(num) {
  const isEven = num % 2 === 0;
  return isEven;
}

// genero il numero scelto dal computer

const numPc = generateNumberRandom(1, 5);

// sommo i due numeri

const sum = numUser + numPc;

const result = isNumberEven(sum);

// dichiaro chi ha vinto

if (choiceUser === result) {
  console.log("Hai vinto");
} else {
  console.log("Hai perso");
}
