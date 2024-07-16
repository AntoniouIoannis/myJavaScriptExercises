// Δεδομένου ενός πίνακα αριθμών, χρησιμοποιήστε τη συνάρτηση filter 
// για να δημιουργήσετε έναν νέο πίνακα που περιλαμβάνει μόνο τους ζυγούς αριθμούς

const randomNumber = [41, 5, 33, 2, 8, 11, 20, 70, 57, 8, 66, 82, 97, 0, 99, 42]

let evenNumbers = randomNumber.filter(xnum => xnum % 2 === 0);  // οι ζυγοι αριθμοι εχουν ΠΑΝΤΑ υπολοιπο 0 ανοταν διαιρουνται με το 2!!!
console.log(evenNumbers);

const resultDiv = document.getElementById('results2');
resultDiv.textContent = 'Ζυγοί Αριθμοί: ' + evenNumbers.join(', ');

