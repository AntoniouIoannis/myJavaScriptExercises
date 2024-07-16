/** Γράψτε μια συνάρτηση που παίρνει ως παράμετρο έναν πίνακα και επιστρέφει έναν
νέο πίνακα που περιέχει μόνο τις μοναδικές τιμές (χωρίς διπλότυπα) */

function elimNumber(arr) {
    return [...new Set(arr)];
}

function elimLetter(s) {
    return [...new Set(s)];
}

let arr = [1, 2, 0, 3, 1, 4, 5, 2, 0, 0, 6, 7, 8, 1]
let arrEliminate = elimNumber(arr)

const s = "asdfqwerasferqqq"
const strEliminate = elimLetter(s)

const str = [...s]


console.log(" ")
console.log(`Ο αριθμητικός πινακας :  [ ` + arr + ` ]`)
console.log(" ")
console.log(`Ο πίνακας συμβολοσειράς : [ ` + s + ` ]`)
console.log(`Ο πίνακας συμβολοσειράς με τον spread operation  [ ` + str + ` ]`)
console.log("Τα γράμματα του πίνακα συμβολοσειράς: ")

let horizontal = ""
for (const gramma of s) {
    horizontal += gramma
}
console.log(`letters ` + horizontal)


console.log(" ")
console.log(`Ο αριθμητικός πινακας χωρίς διπλότυπα:  [ ` + arrEliminate + ` ]`)
console.log(" ")
console.log(`Ο πίνακας συμβολοσειράς χωρίς διπλότυπα: [ ` + strEliminate + ` ]`)
console.log(" ")

