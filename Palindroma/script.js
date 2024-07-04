let parola = prompt("Inserisci una parola");

function Palindroma(parola) {
  parola = parola.toLowerCase();
  return parola === parola.split("").reverse().join("");
}

if (Palindroma(parola)) {
  console.log(`'${parola}' è una parola palindroma`);
} else {
  console.log(`'${parola}' non è una parola palindroma`);
}
