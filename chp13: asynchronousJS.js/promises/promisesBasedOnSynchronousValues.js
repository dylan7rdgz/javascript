// * This is a function which is supposed to return a promise

function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }
  

function getJSON(url) {
    // ! If the url is malformed we can throw an error immediately
    if (!isValidUrl(url)) {
        throw Error('Malformed Url'); // ! Synchronously throw an error
    }
    const x = fetch(url).then(response => {
        const jsonObj = response.json();
        return jsonObj;
    })
    return x;
}


const malformedUrl = "httpsapi.publicapis.org/entries?Category=1";
//* CALLER
const jsonPromise = getJSON(malformedUrl).then(value => {
        console.log(value)
}).catch(e => {
    console.log(e);
});
console.log(jsonPromise)
