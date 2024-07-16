/** Γράψτε μια συνάρτηση που παίρνει ένα αντικείμενο και έναν
πίνακα από keys και επιστρέφει ένα νέο αντικείμενο με μόνο
τα ζεύγη key-value των οποίων τα keys βρίσκονται στον πίνακα */

function absorptionObjectByKeys(obj, keys) {
    
    return keys.reduce((absorptionObj, key) => {
        if (obj.hasOwnProperty(key)) {
            absorptionObj[key] = obj[key];
        }
        return absorptionObj;
    }, {});
}

const initialObject = {
    name: 'Giannis',
    age: 30,
    address: 'Plapouta 1',
    city: 'Athens',
    learning: 'Developer'
};

const keysToFilter = ['name', 'learning'];

const filteredObject = absorptionObjectByKeys(initialObject, keysToFilter);
console.log(" ")
console.log("Το νεο αντικείμενο είναι: ")
console.log(filteredObject)  
console.log(" ")
 

