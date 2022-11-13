let ciudades = [
    "Madrid",
    "Barcelona",
    "Sevilla",
    "Cordoba",
    "Valencia",
    "Granada",
    "Palma",
];
let palabra = ciudades[Math.floor(Math.random() * ciudades.length)];
palabra = palabra.toLowerCase();
let letras = palabra.split("");
let aciertos = 0;
let totalVidas = 10;
let spanLetras = document.getElementsByClassName("letter");

window.onload = () => {
    let divLetra = document.getElementById("choice");
    for (let i = 0; i < palabra.length; i++) {
        let span = document.createElement("span");
        span.className = "chosenLetter";
        span.innerHTML = "_";
        divLetra.appendChild(span);
    }

    for (let i = 0; i < spanLetras.length; i++) {
        spanLetras[i].addEventListener("click", (e) => {
            if(totalVidas > 0){
            let letra = e.target.innerHTML;
            let letraEncontrada = false;
            for (let j = 0; j < letras.length; j++) {
                if (letra == letras[j]) {
                let span = document.getElementsByClassName("chosenLetter")[j];
                span.innerHTML = letra;
                letraEncontrada = true;
                aciertos++;
                };
            }
            if(!letraEncontrada && !e.target.classList.contains("wrongLetter")){
                totalVidas--;
                document.getElementById("lifes").innerHTML = totalVidas;
                e.target.classList.add("wrongLetter");
                e.target.style.backgroundColor = "red";
                e.target.style.cursor = "default";
                console.log(e.target.style.opacity);
            }else{
                e.target.style.backgroundColor = "green";
            }
            if (totalVidas == 0){
                let mensajeVidas = document.getElementById("lifesMsg");
                mensajeVidas.innerHTML = "Lmao you lost";
                mensajeVidas.style.backgroundColor = "red";
            }
            if(aciertos == palabra.length){
                let mensajeVidas = document.getElementById("lifesMsg");
                mensajeVidas.innerHTML = "GG";
                mensajeVidas.style.backgroundColor = "green";
            }
        }
    })};
    restart = document.getElementById("restart");
    restart.addEventListener("click", () => {
        location.reload();
    });
}