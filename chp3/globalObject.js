
// info: The JavaScript interpreter starts when the page reloads. At this time, a new global object is created

console.log("Global object in Nods.js: ", global); // global has a a property global. this is known as a self-referential property.
// TODO: learn the idea behind this.
console.log("Global object supported by 'modern' Browsers and Node.js: ", globalThis)

console.log("Global object supported by Browsers: ", Window);

// web worker threads have a different global object than the Window with which they are associated
// Code in a worker can refer to its global object as self.