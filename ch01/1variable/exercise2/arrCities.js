let cities = ["Athens", "London", "Paris"]

console.log(" ")

console.log("Αρχικός πίνακας : " + cities)
cities.push("Berlin")

console.log("... μετά την εισαγωγή νέας πόλης : " + cities)
console.log(" ")
console.log(`ταξινομημένος.... ` + cities.sort())

console.log("Διάσχιση πίνακα με κάθετη εκτύπωση: ")
cities.forEach(el => console.log(el))
console.log("----   Τέλος -----")

