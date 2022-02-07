
const songs = ["./assets/audio/Coldplay - The Scientist.mp3", "./assets/audio/Imagine Dragons - Demons.mp3", "./assets/audio/Justin Bieber - Ghost.mp3"];
const poster = ["./assets/img/venezia-bg.jpg", "./assets/img/venezia-1-bg.jpg", "./assets/img/bridge-bg.jpg"];
const titles = ["Coldplay - The Scientist", "Imagine Dragons - Demons", "Justin Bieber - Ghost"]

const songTitle = document.getElementById("songTitle");
const fillBar = document.getElementById("fill");

const song = new Audio();
let currentSong = 0;
songTitle.textContent = titles[currentSong];

function playSong(){

   song.src = songs[currentSong];

   songTitle.textContent = titles[currentSong];

   song.play();
}
function playOrPauseSong(){
  if(song.paused){
     playSong();
      document.querySelector(".player-buttons-play img").setAttribute("src","./assets/img/free-icon-pause.png");
  } else{
      song.pause();
      document.querySelector(".player-buttons-play img").setAttribute("src","./assets/img/free-icon-play.png");
    }
  }

function next(){
  currentSong++;
  if(currentSong > songs.length - 1){
    currentSong = 0;
  }
  playSong();
  document.querySelector(".player-buttons-play img").setAttribute("src","./assets/img/free-icon-pause.png");
  document.querySelector(".content-image img").setAttribute("src", poster[currentSong]);
  document.querySelector(".background-image").setAttribute("src", poster[currentSong]);
}

function pre(){
    currentSong--;
  if(currentSong < 0){
    currentSong = songs.length - 1;
  }
    playSong();
    document.querySelector(".player-buttons-play img").setAttribute("src","./assets/img/free-icon-pause.png");
    document.querySelector(".content-image img").setAttribute("src",poster[currentSong]);
    document.querySelector(".background-image").setAttribute("src",poster[currentSong]);
}

const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("durationTime");


function progressValue() {
  progressBar.max = song.duration;
  progressBar.value = song.currentTime;
  currentTime.textContent = formatTime(song.currentTime);
  durationTime.textContent = formatTime(song.duration);
}

setInterval(progressValue, 500);

function formatTime(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec - minutes * 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

function changeProgressBar() {
  song.currentTime = progressBar.value;
}

progressBar.addEventListener("click", changeProgressBar);


progressBar.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #ffff00 0%, #ffff00 ${value}%, #fff ${value}%, #fff 0%)`
})


  
// document.getElementById("jcp-volume").mousemove(function(){
//     song.volume = parseFloat(this.value / 10);
//  });