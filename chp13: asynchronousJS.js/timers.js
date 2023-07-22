// callback-based asynchronous programming

// 1. Timers
function checkForUpdates() {
    console.log("Executing checkForUpdates...");
    // call a website to get the latest value of the stock
}

setTimeout(checkForUpdates, 1000);

// Call checkForUpdates in one minute and then every minute after that
let updateIntervalId = setInterval(checkForUpdates, 1000);

// setInterval() returns a value that we can use to stop the repeated 
// invocations by calling clear interval(). (Similarly, setTimeout()
// returns a value that you can pass to clearTimeout())

function stopCheckingForUpdates() {
    clearInterval(updateIntervalId);
}

console.log("End of file reached.")