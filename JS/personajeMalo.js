import {Personaje} from './personaje.js';
export class PersonajeMalo extends Personaje{
  hablar(mensaje){
    document.getElementsByTagName('main')[0].innerHTML +=
      `<p class="personaje_hablar_malo">${this.nombre}: ${mensaje}</p>`;
  }
}
