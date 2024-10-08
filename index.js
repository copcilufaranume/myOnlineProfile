//volume change

const video = document.getElementById("bgVideo");
const volumeRange = document.getElementById("volumeRange");
const volumeInfo = document.getElementById("volumeInfo");

volumeRange.addEventListener("input", () => {
    if (video.muted == true && volumeRange.value > 0) {
        video.muted = false;
    }
    video.volume = volumeRange.value / 100;
    volumeInfo.textContent = `Volume: ${volumeRange.value}%`;
});

//mousehover effect

const name = document.getElementById("name");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`~1!2@3#4$5%6^7&8*9(0)-_=+";

name.onmouseover = (event) => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 78)];
            })
            .join("");

        if (iterations >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iterations += 1 / 3;
    }, 30);
};

//sound on profile picture click

const greetSound = new Audio("audio/hl-gordon-greetings.mp3");
const greetSound2 = new Audio("audio/hl-greetings.mp3");
const donutsSound = new Audio("audio/hl-donuts.mp3");
const scientistScream = new Audio("audio/hl-scientist-scream.mp3");
const bothered = new Audio("audio/hl-bothered.mp3");

const greetSounds = [greetSound, greetSound2, donutsSound, scientistScream, bothered];

function greet() {
    const soundIndex = Math.floor(Math.random() * 5);
    const selectedSound = greetSounds[soundIndex];

    if (!video.muted || !video.volume == 0) {
        video.muted = true;
        selectedSound.play();
        selectedSound.onended = () => {
            video.muted = false;
        };
    } else if (video.muted || video.volume == 0) {
        selectedSound.play();
    }
}

//use sound

function use() {
    const useSound = new Audio("audio/hl-use-key.mp3");
    useSound.volume = 0.5;
    useSound.play();
}

//change background video

let currentSong = 1;

function changeBg() {
    if (currentSong == 1) {
        video.src = "video/bg-video2.mp4";
        currentSong = 2;
    } else if (currentSong == 2) {
        video.src = "video/bg-video3.mp4";
        currentSong = 3;
    } else if (currentSong == 3) {
        video.src = "video/bg-video.mp4";
        currentSong = 1;
    }
    video.load();
    video.play();
}

//add custom video

const buttonChangeVid = document.getElementById("buttonChangeVid");
const customVid = document.getElementById("customVid");
const submit = document.getElementById("submit");

function validateVid() {
    const file = customVid.files[0];
    if (file) {
        video.src = URL.createObjectURL(file);
        video.load();
        video.play();
    } else {
        alert("No file chosen");
    }
}

//Romanian Time

function updateTime() {
    const now = new Date();

    const options = {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Bucharest",
        hour12: false,
    };
    const timeInRomania = now.toLocaleString("en-GB", options);
    document.getElementById("time").textContent = timeInRomania;
}

setInterval(updateTime, 30000);

updateTime();
