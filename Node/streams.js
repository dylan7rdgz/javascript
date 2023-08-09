const fs = require('fs')

// An asynchronous but nonstreaming (and therefore inefficient) function. 
function copyFile(sourceFilename, destinationFilename, callback) {
    fs.readFile(sourceFilename, (err, buffer) => {
        if (err) {
            callback(err)
        } else {
            fs.writeFile(destinationFilename, buffer, callback);
        }
    });
}