body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 25vh 0;
    margin-bottom: 0;
    overflow: hidden;
}

:root {
    color-scheme: dark;
}

*::selection {
    background-color: #ffffff;
    color: #000000;
}

#bgVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
}

#container {
    background-color: #12121277;
    padding: 2.5vh 0;
    border: 1px solid #ffffff77;
    border-radius: 20px;
    margin: auto;
    min-width: max-content;
    width: 30%;
    text-align: center;
    z-index: 1;
    transition: 0.3s;
}

@keyframes float {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
    100% {
        transform: translateY(0);
    }
}

#profilePic {
    border-radius: 100%;
    transition: 0.3s;
}

#profilePic:hover {
    animation: float 2s infinite ease-in-out;
    color: #111111;
    background: #ffffff;
    box-shadow: 0 0 100px #ffffff;
    cursor: pointer;
}

#name {
    display: block;
    width: max-content;
    margin-inline: auto;
    font-weight: bold;
    font-size: 2em;
    text-shadow: #ffffff 0px 0px 10px;
    transform: translateY(-0.5em);
}

#name:hover {
    cursor: default;
}

#origin {
    font-size: 1.5em;
    transform: translateY(-1.25em);
}

#ro {
    color: yellow;
    font-size: 1em;
}

#ro::before {
    content: "Ro";
    color: blue;
}

#ro:after {
    content: "ia";
    color: red;
}

.socials {
    height: 50px;
    margin-right: 1vw;
    margin-bottom: 2vh;
    transition: 0.3s;
}

.socials:hover {
    transform: translateY(-10px);
}

.slider {
    display: block;
    margin-inline: auto;
    accent-color: #00bbff;
    width: 25%;
    outline: none;
    transition: 0.3s;
}

.slider::-webkit-slider-thumb {
    cursor: pointer;
}

#volumeInfo {
    text-align: center;
    font-size: 1.5em;
    transform: translateY(-0.5em);
}

#moreInfoContainer {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    background-color: #12121277;
    border: 1px solid #ffffff77;
    padding: 5px 15px;
    width: 30%;
    min-height: calc(100vh - 12px);
    max-height: calc(100vh - 12px);
    overflow-y: scroll;
    transition: 0.3s;
}

#aboutMeTitle {
    font-size: 1.75em;
    text-align: center;
}

.aboutMeText {
    font-size: 1.25em;
}

@media (max-width: 1400px) {
    .socials {
        height: 45px;
    }
    #moreInfoContainer {
        width: 28%;
    }
}

@media (max-width: 1000px) {
    body {
        margin-top: 5vh;
        margin-bottom: 5vh;
        overflow: scroll;
    }
    #moreInfoContainer {
        position: relative;
        display: block;
        margin-inline: auto;
        width: 70%;
        min-height: max-content;
        max-height: none;
        overflow: unset;
    }
}

@media (max-width: 525px) {
    .socials {
        height: 40px;
    }
    .slider {
        width: 45%;
    }
}

@media (max-width: 400px) {
    #profilePic {
        width: 125px;
    }

    #name {
        font-size: 1.5em;
    }

    #origin {
        font-size: 1.2em;
    }

    .socials {
        height: 30px;
        transform: translateY(-0.5em);
    }

    #moreInfoContainer {
        width: 85%;
    }
}

@media (max-width: 350px) {
    #container {
        background-color: #12121200;
        border-color: #ffffff00;
        width: 98%;
    }

    #profilePic {
        width: 100px;
    }

    #name {
        font-size: 1.25em;
    }

    #origin {
        font-size: 1em;
    }

    #volumeInfo {
        font-size: 1em;
    }

    #moreInfoContainer p {
        font-size: 1em;
    }

    #moreInfoContainer h2 {
        font-size: 1.25em;
    }
}

@media (max-width: 250px) {
    #profilePic {
        width: 75px;
    }

    #name {
        font-size: 1em;
    }

    #origin {
        font-size: 0.75em;
    }

    .socials {
        height: 19px;
    }

    #moreInfoContainer p {
        font-size: 0.75em;
    }

    #moreInfoContainer h2 {
        font-size: 1em;
    }
}

@media (max-height: 750px) {
    body {
        margin: 20vh 0;
        margin-bottom: 0;
    }
}

@media (max-height: 650px) {
    body {
        margin: 15vh 0;
        margin-bottom: 0;
    }
}

@media (max-height: 575px) {
    body {
        margin: 10vh 0;
        margin-bottom: 0;
    }
}

@media (max-height: 500px) {
    body {
        margin: 5vh 0;
        margin-bottom: 0;
    }
}
