
function getJSON(url) {
    const x = fetch(url).then(response => {
        const jsonObj = response.json();
        return jsonObj;
    })
    return x;
}

const url = "https://api.publicapis.org/entries?Category=1";
const jsonPromise = getJSON(url).then(value => {
        console.log(value)
});
console.log(jsonPromise)