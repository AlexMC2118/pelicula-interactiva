import {Personaje} from './personaje.js';
import {PersonajeElegido} from './personajeElegido.js';
import {PersonajeMalo} from './personajeMalo.js';
import {PersonajeIndefinido} from './personajeIndefinido.js';
import {Narrador} from './narrador.js';
import {Pelicula} from './pelicula.js';

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
        this.titulo = "Cementerio de almas";
        this.alejandro = new Personaje('Alejandro');
        this.esperanza = new Personaje('Esperanza');
        this.julia = new Personaje('Julia');
        this.luis = new  Personaje('Luis');
        this.miguel = new  Personaje('Miguel');
        this.narrador = new Narrador();

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
        obj.iniciar(personajes, random, jugador, this.narrador, this.titulo);

        document.getElementsByTagName('footer')[0].innerHTML = ''; //reset del footer
    }
    //____________________________________________________________________________
}

new SeleccionPersonaje();
