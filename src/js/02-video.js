import Player from '@vimeo/player';

//identificare element video
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


//identificare data-secundele din derulare si logarea in localStorage
const onPlay = function(data) {
    console.log(data);
    const currentTimeVideo = data.seconds;
    console.log(currentTimeVideo);
    localStorage.setItem("videoplayer-current-time", currentTimeVideo);
};
player.on('timeupdate', onPlay);

//preluarea valoare secunde din localStorage 
const newStartTime = localStorage.getItem("videoplayer-current-time");
console.log(newStartTime); 


//reluarea redarii video de la secundele ramase
player.setCurrentTime(newStartTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            // some other error occurred
            break;
    }
});


