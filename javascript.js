

// var myAudio = document.getElementById("audio");
// var isPlaying = false;

// function togglePlay() {
//     isPlaying ? myAudio.pause() : myAudio.play();
// };

// myAudio.onplaying = function playpause() {
//     isPlaying = true;
// };
// myAudio.onpause = function skipbut() {
//     isPlaying = false;
// };
function playpause(){
    
    let audio = new Audio("dkj - Aces.mp3");
    audio.play();
    
}


let audio = document.getElementById('audio')
var count = 0;
function skipbut(){
    let audio = Audio("dkj - Aces.mp3");
    audio.pause();

}

play.addEventListener("click", playpause);

pause.addEventListener("click", skipbut);


