const video = document.getElementById('media');
const playButton = document.getElementById('play');
const icon = playButton.querySelector('i');

const time = document.getElementById('time');
const duration = document.getElementById('duration');
const progressBar = document.getElementById('progress-bar');

const volume = document.getElementById('volume');

function initializeVideo() {
    progressBar.setAttribute('max', Math.round(video.duration));

    var minutes = Math.floor(video.duration / 60);
    var seconds = Math.floor(video.duration - minutes * 60);

    duration.innerText = minutes + ':' + ("0" + seconds).slice(-2);
}

function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        video.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
}

function updateProgress() {
    var minutes = Math.floor(video.currentTime / 60);
    var seconds = Math.floor(video.currentTime - minutes * 60);

    time.innerText = minutes + ':' + ("0" + seconds).slice(-2);
    progressBar.value = video.currentTime;
}

function skipProgress(event) {
    video.currentTime = event.target.value;
    progressBar.value = event.target.value;
}

function updateVolume() {
    video.volume = volume.value;
}

video.addEventListener('loadedmetadata', initializeVideo);
playButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

video.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('input', skipProgress);

volume.addEventListener('input', updateVolume);