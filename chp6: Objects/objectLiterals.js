for (let i = 0; i<3; i++) {
    const obj = {
        "main title": "JavaScript",
        "subtitle title": "The Definitive Guide",
        for: "all audiences", // for is a reserved keyword but no quotes
        author: {
            firstName: "David",
            surname: "Flanagan"
        }
    } // this object is evaluated 3 times within the body of this for loop and hence obj will be created three times
}