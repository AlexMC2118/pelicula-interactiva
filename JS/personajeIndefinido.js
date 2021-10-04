import {Personaje} from './personaje.js';
export class PersonajeIndefinido extends Personaje{
  hablar(mensaje){
    document.getElementsByTagName('main')[0].innerHTML +=
      `<p class="personaje_hablar_indefinido">${this.nombre}: ${mensaje}</p>`;
  }
}
