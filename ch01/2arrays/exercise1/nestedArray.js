/* Γράψτε μια συνάρτηση που να παίρνει ως παράμετρο έναν nested πίνακα και
επιστρέφει έναν μονοδιάστατο πίνακα που να περιέχει όλα τα στοιχεία. */

const arr = ["Athens ", ["University of Economic "], ["and Bussiness "], ["- Developer Training"], "Segment"];

function getNested(arr) {
    const deepCopy = _.cloneDeep(arr);
    return deepCopy;
}

console.log("")
console.log(arr)
console.log(" ")
let deepCopy = getNested(arr);
console.log(" ")

console.log(deepCopy)

