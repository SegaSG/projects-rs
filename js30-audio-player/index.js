const song = document.querySelector('.wrapper-song');
const playerImg = document.querySelector('.player-img');
const playerBg = document.querySelector('.player-bg');
const songArtist = document.querySelector('.player-artist');
const songTitle = document.querySelector('.player-title');
const progressBar = document.querySelector('.player-progress');
const currentTime = document.querySelector('.player-current');
const durationTime = document.querySelector('.player-duration');

let play = document.querySelector('.player-play');
let pause = document.querySelector('.player-pause');
let next = document.querySelector('.player-next');
let back = document.querySelector('.player-back');
let songIndex = 0;

const songs = [
  './assets/audio/Coldplay - The Scientist.mp3',
  './assets/audio/Imagine Dragons - Demons.mp3',
  './assets/audio/Justin Bieber - Ghost.mp3'
];

const images = [
  './assets/img/venezia-bg.jpg',
  './assets/img/venezia-1-bg.jpg',
  './assets/img/bridge-bg.jpg'
];

const songArtists = ['Coldplay', 'Imagine Dragons', 'Justin Bieber'];
const songTitles = ['The Scientist', 'Demons', 'Ghost'];

let playing = true;

function pausePlay() {
  if (playing) {
    play.style.display = "none";
    pause.style.display = "block";
    playerBg.style.transform = "scale(1.25)";
    song.play();
    playing = false;
  } else {
    pause.style.display = "none";
    play.style.display = "block";
    playerBg.style.transform = "scale(1)";
    song.pause();
    playing = true;
  }
}

play.addEventListener("click", pausePlay);
pause.addEventListener("click", pausePlay);

song.addEventListener("ended", nextSong);

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  song.src = songs[songIndex];
  playerImg.src = images[songIndex];
  playerBg.src = images[songIndex];
  songArtist.textContent = songArtists[songIndex];
  songTitle.textContent = songTitles[songIndex];

  playing = true;
  pausePlay();
}

next.addEventListener("click", nextSong);

function backSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = song.length - 1;
  }
  song.src = songs[songIndex];
  playerImg.src = images[songIndex];
  playerBg.src = images[songIndex];
  songArtist.textContent = songArtists[songIndex];
  songTitle.textContent = songTitles[songIndex];
  playing = true;
  pausePlay();
}

back.addEventListener("click", backSong);

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
