// Chiedo all'utente di inserire una parola
const wordUser = prompt("Inserisci una parola");

// Funzione per capire se la parola è palindroma

function isWord(word) {
  // rendo tutte le parole inserire minuscole
  const lowerWord = word.toLowerCase();
  // inverto le parole inserite
  const reverseWord = lowerWord.split("").reverse().join("");
  // confronto le parole
  return lowerWord === reverseWord;
}

// Controllo se la parola è palindroma
if (isWord(wordUser)) {
  alert(`${wordUser}: la parola è palindroma`);
} else {
  alert(`${wordUser}: la parola non è palindroma`);
}
