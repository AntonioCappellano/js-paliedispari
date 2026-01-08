// Chiedo all'utente di inserire una parola
const wordUser = prompt("Inserisci una parola");

// Funzione per capire se la parola è palindroma

function isWord(word) {
  // rendo tutte le parole inserire minuscole
  const lowerWord = word.toLowerCase();
  // inverto le parole inserite
  const reverseWord = lowerWord.split("").reverse().join("");
}
