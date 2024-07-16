// Δεδομένου ενός πίνακα αντικειμένων, χρησιμοποιήστε τη συνάρτηση filter για να
// δημιουργήσετε έναν νέο πίνακα που περιλαμβάνει μόνο χρήστες κάτω των 30 ετών

const driversF1 = [
    {
        firstname: 'Lewis',
        lastname: 'Hamilton',
        age: 38,
        nationality: 'British'
    },
    {
        firstname: 'Max',
        lastname: 'Verstappen',
        age: 26,
        nationality: 'Dutch'
    },
    {
        firstname: 'Charles',
        lastname: 'Leclerc',
        age: 26,
        nationality: 'Monégasque'
    },
    {
        firstname: 'Lando',
        lastname: 'Norris',
        age: 24,
        nationality: 'British'
    },
    {
        firstname: 'Carlos',
        lastname: 'Sainz',
        age: 29,
        nationality: 'Spanish'
    }
];

let ageDrivers = driversF1.filter(x => x.age <= 30)
console.log(ageDrivers)

const resultDiv = document.getElementById('results1');
resultDiv.innerHTML = ageDrivers.map(driver => 
    `Ονοματεπώνυμο: ${driver.firstname} ${driver.lastname}, Ηλικία: ${driver.age}, Εθνικότητα: ${driver.nationality}`
).join('<br>');
