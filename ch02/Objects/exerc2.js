// Στη συνέχεια χρησιμοποιήστε τη συνάρτηση map 
// για να δημιουργήσετε έναν νέο πίνακα που περιέχει μόνο τα ονόματα.

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

let nameDrivers = driversF1.map(x => x.firstname)
console.log(nameDrivers)

const resultDiv = document.getElementById('results2');
resultDiv.innerHTML = nameDrivers.map(driver => 
    `Ονοματεπώνυμο: ${driver.firstname}`
).join('<br>');
