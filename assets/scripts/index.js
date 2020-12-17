// change language
let languages = document.querySelectorAll('.language--change');

for (let i = 0; i < languages.length; i++) {
    
    languages[i].addEventListener('click', function(){
        var current = document.querySelectorAll(".active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
    
}

// videoplayer

let playVideo  = document.querySelector('#play');
let pauseVideo = document.querySelector('#pause');


playVideo.addEventListener('click', play);
pauseVideo.addEventListener('click', pause);

let video = document.querySelector('#video-player');
video.volume = 0;

playVideo.style.display = "none";

function play(){
    video.play();
    playVideo.style.display = "none";
    pauseVideo.style.display = "block";
    }
    
    
    
    function pause() { 
    video.pause();
    pauseVideo.style.display = "none";
    playVideo.style.display = "block";
    }