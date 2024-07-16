// Δεδομένου ενός πίνακα αριθμών, χρησιμοποιήστε τη συνάρτηση map 
// για να δημιουργήσετε έναν νέο πίνακα όπου κάθε αριθμός διπλασιάζεται

const randomNumber = [41, 5, 33, 2, 8, 11, 20, 70, 57, 8, 66, 82, 97, 0, 99, 42]

let doubledNumber = randomNumber.map(x => x * 2)
console.log(doubledNumber);

const originalArrayDiv = document.getElementById('originalArray');
originalArrayDiv.textContent = 'Αρχικός Πίνακας: ' + randomNumber.join(', ');

const resultDiv = document.getElementById('results1')
resultDiv.textContent = doubledNumber.join(', ')
