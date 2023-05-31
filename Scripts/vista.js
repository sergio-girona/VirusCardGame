import {repartirCartes, tornarCartesMa, tornJoc} from './main.js';
document.getElementById('començar').addEventListener('click', disableButton);
document.getElementById('començar').addEventListener('click', cartesInicials);
document.getElementById('començar').addEventListener('click', tornJoc);
document.getElementById('torn').addEventListener('click', tornarCartesMa );

/**
 * Funció repartir cartes al principi
 */
function cartesInicials() {
  repartirCartes();
  repartirCartes();
}

// eslint-disable-next-line valid-jsdoc
/**
 * Funció per crear Cartes a l'HTML
 * @param{Virus,Organ,Medicina} carta
 * @param{String} nom
 * @param {number}pos
 */
export function crearVistaCarta(carta, nom, pos) {
  const div = document.getElementById(`ma${nom}`);
  const img = document.createElement('img');
  const nouDiv = document.createElement('div');
  img.src= carta.imatge;
  nouDiv.classList.add('carta');
  nouDiv.appendChild(img);
  nouDiv.dataset.position=pos;
  nouDiv.dataset.color=carta.color;
  nouDiv.dataset.tipus=carta.tipus;
  div.appendChild(nouDiv);
}

/**
 * Funció deshabilitar boto
 */
function disableButton() {
  document.getElementById('començar').disabled=true;
}
