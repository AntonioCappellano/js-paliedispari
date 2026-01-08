// chiedo all'utente di scegliere pari o dispari

const choiceUser = prompt("Scegli: pari o dispari");

// chiedo all'untente di inserire un numero da 1 a 5

const numUser = parseInt(prompt("inserisci un numero da 1 a 5"));

// genero un numero randomico da 1 a 5 con una funzione

function generateNumberRandom(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}
