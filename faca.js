let x;
let y;
let imagem = document.getElementById("bladezinho");
let som = new Audio("boa.mp3");

function randomizarnumeros() {
    x = Math.floor(Math.random() * 1200) + 1;
    y = Math.floor(Math.random() * 580) + 1;
    imagem.style.top = y + "px"
    imagem.style.left = x + "px"
}
function abacaxi() {
    imagem.style.opacity = "100%";
    imagem.style.animation = "10s abacaxi";
    imagem.style.top = "50vh";
    imagem.style.left = "50vw";
    imagem.style.transform = "translate(-50, -50)";
    som.play();
}