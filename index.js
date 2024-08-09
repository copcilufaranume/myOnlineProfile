const video = document.getElementById("bgVideo");
video.volume = 0.5;

function muteOrUnmute() {
    if (event.key === "m" && video.muted == false) {
        video.muted = true;
    } else if (event.key === "m" && video.muted == true) {
        video.volume = 0.5;
        video.muted = false;
    }
}

function buttonMuteOrUnmute() {
    if (video.muted == false) {
        video.muted = true;
    } else if (video.muted == true) {
        video.volume = 0.5;
        video.muted = false;
    }
}
