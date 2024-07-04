let sceltaUtente = prompt("Scegli pari o dispari:").toLowerCase();
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

function Computer() {
  return Math.floor(Math.random() * 5) + 1;
}

let numeroComputer = Computer();
