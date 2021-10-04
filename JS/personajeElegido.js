import {Personaje} from './personaje.js';
export class PersonajeElegido extends Personaje{
  hablar(mensaje){
    document.getElementsByTagName('main')[0].innerHTML +=
      `<p class="personaje_hablar_elegido">${this.nombre}: ${mensaje}</p>`;
  }
}
