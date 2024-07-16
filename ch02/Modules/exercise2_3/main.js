// Σε ένα άλλο αρχείο main.js εισάγετε και χρησιμοποιήστε 
// την default συνάρτηση για να εμφανίσετε ένα “Hello World“.

import greetingsome from "../exercise1/greeting.js";

let hello = greetingsome();

document.getElementById('hello-text').textContent = hello;
console.log("Μήνυμα χαιρετισμού:  ", hello);
