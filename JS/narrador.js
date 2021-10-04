export class Narrador{
  hablar(mensaje){
    document.getElementsByTagName('main')[0].innerHTML +=
      `<p class="narrador_hablar">- ${mensaje} -</p>`;
  }
}
