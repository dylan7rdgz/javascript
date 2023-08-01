
fetch("/api/user/profile")
// ~ This promise is FULFILLED when the HTTP response begins to arrive and the HTTP status and headers become available 
.then(response => {
    // When the promise resolves, we have status and headers
    if (response.ok && 
        response.headers.get("Content-Type") === "application/json") {
            // 
    }

    // ~ the response object also defines methods like text() and json()
    // ~ although the initial promise is fulfilled, the body of the response is STILL arriving

    // ~ i.e. first we try to asynchronous establish a connection whereby the headers are easily accessible
    // ~ .    then we are waiting for a promise to get fulfilled when the body data has been transmitted  

    // naive way of dealing with the promise. this nested way of dealing with it is beating the purpose of using promises and hence it beats the purpose
    // * NOTE: then only works on promises 
    response.json().then(profile => { // profile is the parsed json object
        displayUserProfile(profile);
    });
    
})

// ? preferred IDIOM:

fetch("/api/user/profile")
    .then(response => {
        return response.json(); // returned promise
    })
    .then(profile => {
        displayUserProfile();
    })