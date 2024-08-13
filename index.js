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
