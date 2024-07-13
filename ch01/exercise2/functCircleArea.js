function circleArea(radius) {
    const PI = 3.14159265;  
    return PI * radius * radius;  
}

let radius = 5;
let area = circleArea(radius);

console.log(" ")
console.log("---  Αρχή ----- ")
console.log(`Το εμβαδόν του κύκλου με ακτίνα ${radius} είναι:  ${area}`);

console.log(" ")
console.log(`Το εμβαδόν του κύκλου με ακτίνα ${radius} είναι:  ${area.toFixed(2)}`);
console.log("-----------------    Τέλος   -----")
console.log(" ")

