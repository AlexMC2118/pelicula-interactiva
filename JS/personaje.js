export class Personaje{
  constructor(nombre){
    this.nombre = nombre;
  }
  hablar(mensaje){
    document.getElementsByTagName('main')[0].innerHTML +=
      `<p class="personaje_hablar">${this.nombre}: ${mensaje}</p>`;
  }
}
