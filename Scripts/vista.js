import {repartirCartes, tornarCartesMa, tornJoc} from './main.js'
document.getElementById("començar").addEventListener("click", disableButton);
document.getElementById("començar").addEventListener("click", cartesInicials);
document.getElementById("començar").addEventListener("click", tornJoc);
document.getElementById("torn").addEventListener("click", tornarCartesMa );

function cartesInicials(){
    repartirCartes();
    repartirCartes();
}
export function crearVistaCarta(carta, nom, pos){
    const div = document.getElementById(`ma${nom}`);
    let img = document.createElement("img");
    let nouDiv = document.createElement("div");
    img.src= carta.imatge;
    nouDiv.classList.add("carta");
    nouDiv.appendChild(img);
    nouDiv.dataset.position=pos;
    nouDiv.dataset.color=carta.color;
    nouDiv.dataset.tipus=carta.tipus;
    div.appendChild(nouDiv);
}
function disableButton(){
    document.getElementById("començar").disabled=true;
}

export function treureVistaNPC() {
    let divNPC = document.getElementById("divNPC");
    let divJUGADOR = document.getElementById("divJUGADOR");

    divNPC.style.display = "none";
    divJUGADOR.style.display = "block";
}

export function treureVistaJugador() {
    let divNPC = document.getElementById("divNPC");
    let divJUGADOR = document.getElementById("divJUGADOR");

    divNPC.style.display = "block";
    divJUGADOR.style.display = "none";
}
