// Example #1 - fs.readFile

const fs = require("fs"); // The "fs" module has filesystem-related APIs
let options = { // An object to hold options for our program
    // default options would go here
};
// Read a configuration file, then call the callback function
fs.readFile("config.json", "utf-8", (err, text) => {
    if (err) {
        // If there was an error, display a warning, but continue
        console.warn("Could not read config file:", err);
    } else {
        // Otherwise, parse the file contents and assign to the options object
        Object.assign(options, JSON.parse(text));
    }
    // In either case, we can now start running the program
    startProgram(options);
});

// Example #2 - event-based api's - two layers of asynchronous code handled with event listeners

// NOTE: Node uses an on() method to register event listeners instead of addEventListener()


const https = require("https");
// Read the text content of the URL and asynchronously pass it to the callback.
function getText(url, callback) {
    // Start an HTTP GET request for the URL
    request = https.get(url);
    // Register a function to handle the "response" event.
    request.on("response", response => {
        // The response event means that response headers have been received
        let httpStatus = response.statusCode;
        // The body of the HTTP response has not been received yet.
        // So we register more event handlers to to be called when it arrives.
        response.setEncoding("utf-8"); // We're expecting Unicode text
        let body = ""; // which we will accumulate here.
        // This event handler is called when a chunk of the body is ready
        response.on("data", chunk => { body += chunk; });
        // This event handler is called when the response is complete
        response.on("end", () => {
            if (httpStatus === 200) { // If the HTTP response was good
                callback(null, body); // Pass response body to the callback [WHICH WILL PROBABLY DO SOME POST PROCESSING...]
            } else { // Otherwise pass an error
                callback(httpStatus, null);
            }
        });
    });
    // We also register an event handler for lower-level network errors
    request.on("error", (err) => {
        callback(err, null);
    });
}