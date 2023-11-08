let back = document.getElementById('navigation-bar');

back.onclick = () => {
    window.open("./index-1.html", "_self")
};

let bgm = new Audio("./assets/audio(1).mp3");
bgm.play();
bgm.loop = true;
bgm.volume = 0.2;