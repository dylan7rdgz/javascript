let timestamp = Date.now();
console.log("The current time as a timestamp: ", timestamp);
let now = new Date();
console.log("The current time as a Date object: ", now);
let ms = now.getTime();
console.log("Convert to a millisecond timestamp: ", ms)
let iso = now.toISOString(); 
console.log("Convert to a string in standard format: ", iso);