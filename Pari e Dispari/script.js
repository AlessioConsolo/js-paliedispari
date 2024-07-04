let sceltaUtente = prompt("Scegli pari o dispari:").toLowerCase();
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

function Computer() {
  return Math.floor(Math.random() * 5) + 1;
}

let numeroComputer = Computer();

console.log(`Il numero del computer è: ${numeroComputer}`);

function Pari(numero) {
  return numero % 2 === 0;
}

let somma = numeroUtente + numeroComputer;
console.log(`La somma dei due numeri è: ${somma}`);

let risultato;

if (Pari(somma)) {
  risultato = "pari";
} else {
  risultato = "dispari";
}

if (sceltaUtente === risultato) {
  console.log(`Hai vinto, La somma è ${risultato}.`);
} else {
  console.log(`Hai perso, La somma è ${risultato}.`);
}
