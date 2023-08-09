process.setUncaughtExceptionCaptureCallback(e => {
    console.error("Uncaught exception", e);
})

console.log(process);


process.on("unhandledRejection", (reason, promise) => {
    // reason is whatever value would have been passed to a .catch() function
    // promise is the promise object that got rejected
})

console.log(process);

