*** Point for Debugging Effectively ***
    1. setting the initial property reflecting an HTML attribute
    (causes the browser to load and display a new image, for ex, for a <img> src attribute)

*** Use cases ***
    1. The HTMLAudioElement and HTMLVideoElement classes define methods like play() and pause() for controlling playback of audio and video files.
    2. The Client Side JS has access to OS info, the no. of CPU's available to the web browser i.e. using navigator.hardwareConcurrency

*** Browser Defaults ***
1. The Browser automatically submits a form when the onclick handler of a submit button is triggered.
This can be prevented using e.preventDefault(). This is better than making the handler return false. 
2. 

*** Common doubts ***
1. When an event of a particular type occurs, the browser invokes all the handlers in the order they were registered irrespective of whether addEventListener or onclick was used.

*** Design Patterns ***
1. Always register events on common ancestors. Event triggered by child will bubble up.
2. If 