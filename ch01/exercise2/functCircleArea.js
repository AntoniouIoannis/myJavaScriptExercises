const PI = 3.14159265
let r = 0

function circleArea(PI , r){
    return PI * r**2;
}

// Συνάρτηση υπολογισμού εμβαδού κύκλου
function calculateArea(radius) {
    const pi = Math.PI;
    const area = pi * radius * radius;
    return area;
}

// Κλήση της συνάρτησης με ακτίνα 5
const radius = 5;
const area = calculateArea(radius);

// Εμφάνιση του αποτελέσματος στη σελίδα
document.getElementById('result').textContent = `Το εμβαδόν του κύκλου με ακτίνα ${radius} είναι ${area.toFixed(2)}`;
