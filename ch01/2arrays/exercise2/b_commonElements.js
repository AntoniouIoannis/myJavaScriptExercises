/* Γράψτε μια συνάρτηση που παίρνει δύο πίνακες και επιστρέφει έναν νέο πίνακα που
περιέχει στοιχεία που είναι κοινά και στους δύο πίνακες */

// function intersection(integers, positiveIntegers) {
//     return integers.filter(value => positiveIntegers.includes(value));
// }

// const integers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7];
// const positiveIntegers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const result = intersection(integers, positiveIntegers);
// console.log(" ")
// console.log(`Ο πρώτος πίνακας: [ ]` + integers + ` ]`)
// console.log(`Ο δεύτερος πίνακας :  [ ` + positiveIntegers + ` ]`)
// console.log(" ")
// console.log("Ο νέος πίνακας κατόπιν συνένωσης και εμφάνισης μόνο των κοινών στοιχείων: ")
// console.log(result); 
// console.log(" ")

let s1 = "Athens Uni of Econ and Bus"

// let subStrWhole = s1.substring(0)
// let subStr = s1.substring(0, 6)
// let sliced = s1.slice(0, 6)

// let alphaUpper = s1.charAt(0)
// let indexOfU = s1.indexOf("U")
// let lastIndexOfs = s1.lastIndexOf("s")

// let sUpdated = s1.replace("Uni", "University")
// let upperS = s1.toUpperCase()
// let lowerS = s1.toLowerCase()

let s2 = "Athens Uni of Econ and Bus"

if (s1.toUpperCase() === s2.toUpperCase()) {
    console.log("Strings are equal")
} else {
    console.log("Strings not equal")
}

