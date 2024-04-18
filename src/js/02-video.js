import Player from "@vimeo/player";

const vid = document.querySelector('#vimeo-player');
console.log(vid);
const player = new Vimeo.Player(vid);

const onPlay = function (data) {
    console.log("play")
// Attach a "timeupdate" event to the video
    vid.addEventListener("timeupdate", getCurTime);
    console.log(vod.currentTime)

// Display the current playback position of the video in a p element with id="demo"
function getCurTime() { 
    document.getElementById("demo").innerHTML = "The current playback position is " + vid.currentTime + " seconds.";
    console.log("The current playback position is " + vid.currentTime + " seconds.")
} 

// Set the current playback position to 5 seconds
// function setCurTime() { 
//   vid.currentTime = 5;
// } 
};

player.on('play', onPlay);





