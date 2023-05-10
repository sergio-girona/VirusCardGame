import {repartirCartes} from './main.js'
document.getElementById("començar").addEventListener("click", repartirCartes);
document.getElementById("començar").addEventListener("click", disableButton);
export function crearVistaCarta(carta, nom){
    const div = document.getElementById(`ma${nom}`);
    let img = document.createElement("img");
    let nouDiv = document.createElement("div");
    img.src= carta.imatge;
    nouDiv.classList.add("carta");
    nouDiv.appendChild(img);
    div.appendChild(nouDiv);
}

function disableButton(){
    document.getElementById("començar").disabled=true;
}