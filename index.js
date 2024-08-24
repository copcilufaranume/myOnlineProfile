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

function greet() {
    greetSound.play();
}

//other sound

const useSound = new Audio("audio/hl-use-key.mp3");

function use() {
    useSound.play();
}
