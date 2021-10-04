'use strict';

class Pelicula{
  constructor(){
    this.titulo = "Cementerio de almas";
    this.narrador = new Narrador();
  }
  iniciar(personajes, malo, jugador){
    document.getElementsByTagName('main')[0].innerHTML +=
      `<h1>${this.titulo}</h1>`;
    //personajes = [alejandro, esperanza, miguel, luis, julia];
    personajes[jugador].hablar('Hola soy el bueno');
    personajes[malo].hablar('Hola soy el malo');
    personajes[0].hablar('Hola soy alguien');

  }
}

class SeleccionPersonaje{
  constructor(){
    this.seleccionarPersonaje();
  }
  seleccionarPersonaje(){
    //Se introducen los botones
    document.getElementsByTagName('footer')[0].innerHTML =
      `<p class="narrador_hablar"> Elige tu personaje</p>` +
      `<input type="button" value="Alejandro" id="0" />` +
      `<input type="button" value="Esperanza" id="1" />` +
      `<input type="button" value="Miguel" id="2" />` +
      `<input type="button" value="Luis"  id="3" />` +
      `<input type="button" value="Julia"  id="4" />`;

      //Sirve para decidir que personaje jugar
 //____________________________________________________________________________
    document.getElementById("0").addEventListener("click", function randomMalo(){
        //event listener no actua dentro de la clase, por ello creamos un objeto para abrir la funcion
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
        this.alejandro = new Personaje('Alejandro');
        this.esperanza = new Personaje('Esperanza');
        this.julia = new Personaje('Julia');
        this.luis = new  Personaje('Luis');
        this.miguel = new  Personaje('Miguel');

        let personajes = [this.alejandro, this.esperanza, this.miguel, this.luis, this.julia];
        let random;
        do{
          random = Math.floor((Math.random() * 5));
        }while(random == jugador);

        //Asignacion de personajes
        personajes[random] = new PersonajeMalo(personajes[random].nombre);
        personajes[jugador] = new PersonajeElegido(personajes[jugador].nombre);
        for (let i=0;i<5;i++){
          if(personajes[random].nombre!=personajes[i].nombre && personajes[jugador].nombre!=personajes[i].nombre){
            personajes[i] = new PersonajeIndefinido(personajes[i].nombre);
            console.log(personajes[i]);
          }
        }
        console.log(personajes[random]);
        console.log(personajes[jugador]);

        let obj = new Pelicula();
        obj.iniciar(personajes, random, jugador);

        document.getElementsByTagName('footer')[0].innerHTML = ''; //reset del footer
    }
    //____________________________________________________________________________
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
      `<p class="personaje_hablar_indefinido">${this.nombre}: ${mensaje}</p>`;
  }
}

class PersonajeElegido extends Personaje{
  hablar(mensaje){
    document.getElementsByTagName('main')[0].innerHTML +=
      `<p class="personaje_hablar_elegido">${this.nombre}: ${mensaje}</p>`;
  }
}

class PersonajeMalo extends Personaje{
  hablar(mensaje){
    document.getElementsByTagName('main')[0].innerHTML +=
      `<p class="personaje_hablar_malo">${this.nombre}: ${mensaje}</p>`;
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

new SeleccionPersonaje();
