/** Γράψτε μια συνάρτηση που παίρνει έναν πίνακα και ένα μέγεθος υποπίνακα και
χωρίζει τον πίνακα σε υποπίνακες του καθορισμένου μεγέθους */

// πρεπει να γίνει με την splice.

let arrString = ["Athens", "University", "of", "Economic", "and", "Bussiness", "-", "Developer", "Training", "Sector"];
let arrNumber = [12, 25, 28, 55, 59, 78, 83, 35, 44, 66, 70, 40, 50, 8, 5, 19]
console.log(`Ο πίνακας συμβολοσειράς: [ ]` + arrString + ` ]`)
console.log(`Ο πίνακας αριθμών: [ ]` + arrNumber + ` ]`)

const segmentString = arrString.splice(0, 3)
const segmentNumber = arrNumber.splice(0, 5)

console.log(" ")
console.log("Υποπίνακες του πίνακα συμβολοσειράς:")
console.log(segmentString)
arrString.splice(3)
console.log(arrString)

const segmentString2 = arrString.splice(0, 3)

arrString.splice(3)
console.log(segmentString2)


console.log(" ")

console.log("Υποπίνακες του πίνακα αριθμών:")
console.log(segmentNumber)
arrNumber.splice(5)
console.log(arrNumber)
const segmentNumber2 = arrNumber.splice(0, 5)
arrNumber.splice(5)
console.log(segmentNumber2)


console.log(" ")
