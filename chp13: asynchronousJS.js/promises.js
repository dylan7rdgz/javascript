/* With the advent of Promises in the core JS language,
web browsers have begun to implement Promise-based APIs.*/

function getJSON(url) {
    // ! What if we throw an error 
    // ! ex: throw new Error('The internet connection breaks while getting the data from the server hosted on url.') 
    // ! PROBLEM* - A: the problem here is that the error is not CATCH-ABLE
}

getJSON(url) // A promise object is already created and is present in memory
    .then(jsonData => { // ? when the asynchronous computation completes normally, it passes its result to the first argument of then
                // The Asynchronous output is dealt with here

    // callback now moved here. It will be asynchronously 
    // invoked with the passed JSON value when it becomes available
    // This is how Promises are syntactically different from CallBack based methods

    // then() can be perceived as a "callback registration method"
    // then() is a method of the promise object
    
    // ! PROBLEM* - B - what if an error is thrown from here - something wrong happened when executing this code



    }, 
    handleProfileError // ! SOLUTION* - A: the promise based specification is more intelligent and can intercept/catch errors 
).then(() => {
    // each then is invoked only once
}).then(() => {

})

// ! SOLUTION* - B: A MORE IDIOMATIC APPROACH to solve problem B

get("https://fiddle.jshell.net/robots.txt")
    .then(displayedUserProfile)
    .catch(handleProfileError)
    

// Deeper understanding by breaking the chaining of then