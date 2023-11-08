let play = document.getElementById('play-button');
let instruct = document.getElementById('Instruction-button');

play.onclick = ()=>{
    window.open("./index-2.html", "_self");
}

instruct.onclick = ()=>{
    window.open("./instructions.html", "_self");
}

let bgm = new Audio("./assets/audio.mp3");
bgm.play();
bgm.loop = true;