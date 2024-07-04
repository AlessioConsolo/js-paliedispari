let parola = prompt("Inserisci una parola");

function Palindroma(parola) {
  parola = parola.toLowerCase();
  return parola === parola.split("").reverse().join("");
}
