import greetingsome from "./greeting.js";

let greetingmsg = greetingsome();

document.getElementById('greeting-msg').textContent = greetingmsg;
console.log("Μήνυμα χαιρετισμού:  ", greetingmsg);
