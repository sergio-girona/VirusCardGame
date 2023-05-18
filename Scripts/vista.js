import {repartirCartes} from './main.js'
document.getElementById("començar").addEventListener("click", repartirCartes);
document.getElementById("començar").addEventListener("click", disableButton);
//document.getElementById("començar").addEventListener("click", createUsersDivs);
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

export function createUsersDivs(){
    let div =document.querySelector(".jugadorsDiv");
    const nouDiv = div.cloneNode(true)
    let parentDiv = document.getElementById("partida");
    parentDiv.appendChild(nouDiv);

}

function disableButton(){
    document.getElementById("començar").disabled=true;
}