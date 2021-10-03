'use strict';

class SeleccionPersonaje{
  constructor(){
    this.alejandro = new PersonajeIndefinido('Alejandro');
    this.esperanza = new PersonajeIndefinido('Esperanza');
    this.julia = new PersonajeIndefinido('Julia');
    this.luis = new  PersonajeIndefinido('Luis');
    this.miguel = new  PersonajeIndefinido('Miguel');

    this.seleccionarPersonaje();
  }

  seleccionarPersonaje(){
    document.getElementsByTagName('footer')[0].innerHTML =
      `<p class="narrador_hablar"> Elige tu personaje</p>` +
      `<input type="button" value="Alejandro" id="0" />` +
      `<input type="button" value="Esperanza" id="1" />` +
      `<input type="button" value="Miguel" id="2" />` +
      `<input type="button" value="Luis"  id="3" />` +
      `<input type="button" value="Julia"  id="4" />`;

    document.getElementById("0").addEventListener("click", function randomMalo(){
        let object = new SeleccionPersonaje();
        object.randomMalo(0);
      });
    document.getElementById("1").addEventListener("click", function randomMalo(){
        let object = new SeleccionPersonaje();
        object.randomMalo(1);
      });
    document.getElementById("2").addEventListener("click", function randomMalo(){
        let object = new SeleccionPersonaje();
        object.randomMalo(2);
      });
    document.getElementById("3").addEventListener("click", function randomMalo(){
        let object = new SeleccionPersonaje();
        object.randomMalo(3);
      });
    document.getElementById("4").addEventListener("click", function randomMalo(){
        let object = new SeleccionPersonaje();
        object.randomMalo(4);
      });
    }
    randomMalo(jugador){
        let personajes = [this.alejandro, this.esperanza, this.miguel, this.luis, this.julia];
        let random;
        do{
          random = Math.floor((Math.random() * 5));
        }while(random == jugador);
        personajes[random] = new PersonajeMalo(personajes[random].nombre);
        console.log(personajes[random]);
    }
}

class Pelicula{
  constructor(){
    this.titulo = "TITULO";
    this.narrador = new Narrador();
    let object = new SeleccionPersonaje();
    this.iniciar();
  }

  iniciar(){
    document.getElementsByTagName('main')[0].innerHTML +=
      `<h1>${this.titulo}</h1>`;
  }
}

class Personaje{
  constructor(nombre){
    this.nombre = nombre;
    this.vida = 100;
  }
  hablar(mensaje){
    document.getElementsByTagName('main')[0].innerHTML +=
      `<p class="personaje_hablar">${this.nombre}: ${mensaje}</p>`;
  }
}

class PersonajeIndefinido extends Personaje{
  hablar(mensaje){
    document.getElementsByTagName('main')[0].innerHTML +=
      `<p class="personaje_hablar personaje_hablar_indefinido">${this.nombre}: ${mensaje}</p>`;
  }
}

class PersonajeBueno extends Personaje{
  hablar(mensaje){
    document.getElementsByTagName('main')[0].innerHTML +=
      `<p class="personaje_hablar personaje_hablar_bueno">${this.nombre}: ${mensaje}</p>`;
  }
}

class PersonajeMalo extends Personaje{
  hablar(mensaje){
    document.getElementsByTagName('main')[0].innerHTML +=
      `<p class="personaje_hablar personaje_hablar_malo">${this.nombre}: ${mensaje}</p>`;
  }
}

class Narrador{
  hablar(mensaje){
    document.getElementsByTagName('main')[0].innerHTML +=
      `<p class="narrador_hablar">- ${mensaje} -</p>`;
  }
}

class Arma{
  constructor(){
  }
}

class Cuchillo extends Arma{   //Arma del enemigo
  constructor(){
    super();
  }
}

class Pala extends Arma{   //Arma de personaje bueno
  constructor(){
    super();
  }
}

new Pelicula();
