// we can assume that the foll. function is used by checkForUpdates()

function getCurrentVersionNumber(versionCallback) { // Note callback argument
    // Make a scripted HTTP request to a backend version API
    let request = new XMLHttpRequest(); // In modern client-side JS fetch() is used instead.
    request.open("GET", "http://www.example.com/api/version");
    request.send();

    // request a callback function that will be invoked when the response arrives
    request.onload = function() { // ALT* - request.addEventListener('onload', function())
        // onload is a property of the request object
        if (request.status === 200) {
            // If HTTP status is good, get version number and callback.
            let currentVersion = parseFloat(request.responseText);
            versionCallback(null, currentVersion);
        } else {
            // Otherwise report an error to the callback
            versionCallback(this.response.statusText, null);
        }
    };
    // Register another callback that will be invoked for network errors
    request.onerror = request.ontimeout = function(e) {
        versionCallback(e.type, null);
    }

}

const versionCallback = function(arg1, arg2) {
    console.log("executing callback")
}

const returnValue = getCurrentVersionNumber(versionCallback);
console.log("return Value: ", returnValue); // will be undefined