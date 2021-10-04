'use strict';

class Pelicula{
  constructor(){
    this.titulo = "Cementerio de almas";
  }
  iniciar(personajes, malo, jugador, narrador){
    document.getElementsByTagName('main')[0].innerHTML +=
      `<h1>${this.titulo}</h1>`;
    //personajes = [alejandro, esperanza, miguel, luis, julia];
    //El sigiente codigo mete en un array distinto a los personajes indefinidos
    //____________________________________________________________________________
    let personajesInd = [0];
    let j = 0;
    for(let i=0;i<5;i++){
      if(personajes[malo].nombre!=personajes[i].nombre && personajes[jugador].nombre!=personajes[i].nombre){
        personajesInd[j]=personajes[i];
        j++;
      }
    }
    //____________________________________________________________________________

    //personajes[jugador].hablar('Hola soy el bueno');
    //personajes[malo].hablar('Hola soy el malo'); //El malo tendra el mismo color que el indefinido hasta pillarlo
    //personajesInd[0].hablar('Hola soy ' + personajesInd[0].nombre);
    //personajesInd[1].hablar('Hola soy ' + personajesInd[1].nombre);
    //personajesInd[2].hablar('Hola soy ' + personajesInd[2].nombre);

    narrador.hablar('En una fria tarde de verano, en la cual el cielo comenzaba a tornarse oscuro, se avistaba en la penumbra una leve sombra de lo que parecia ser un grupo de chicos.');
    narrador.hablar('Lentamente se acercaban a lo que parecia ser una cabaña; detras de estos se encontraban otras dos personas que parecian tener una mayor edad.');
    narrador.hablar('Minetras se acercaban comenzó una pequeña conversación');
    personajes[jugador].hablar('¡¡¡Monitoor!!! ¿cuándo llegamos? estoy cansado');
    personajesInd[0].hablar('Eso eso, llevamos horas caminando');
    personajes[malo].hablar('Sois unos quejicas, si solo han sido 12 kilometros');
    personajes[jugador].hablar('¡¿¡Solo 12 kilometros!?! ni que estuvieramos en el Camino de Santiago');
    narrador.hablar('Todos comenzaron a reirse');
    narrador.hablar(personajes[jugador].nombre + ' se percató de un movimiento entre la maleza.');
    personajes[jugador].hablar('¡¿¡Qué c**o ha sido eso!?!');
    personajes[malo].hablar('¡Que cagao!, será un cerbatillo, estamos en el bosque, ¿que va a haber?');
    personajesInd[1].hablar(personajes[malo].nombre + ' tiene razon, ni que fuera a haber un asesino AJAJAJ');
    narrador.hablar(personajesInd[2].nombre + ' dijo entre dientes.');
    personajesInd[2].hablar('Claro...');
    narrador.hablar('Siguieron caminando hasta llegar a la cabaña.');
    narrador.hablar('Al llegar a dicha cabaña los monitores se fuerón a realizar algunos preparativos.');
    personajes[malo].hablar('¿Puedo ir con vosotros?');
    narrador.hablar('Ante la pregunta de ' + personajes[malo].nombre + ' los monitores respondieron con una negativa, ellos tendrian que organizarse para encender el fuego.');
    narrador.hablar('Ante esto se pusieron manos a la obra.');
    personajes[jugador].hablar('Venga ' + personajes[malo].nombre + ' vamos a por leña alli atras.');
    narrador.hablar(personajes[malo].nombre + ' y ' + personajes[jugador].nombre + ' fueron a por leña a un pequeño claro que se avistaba a lo lejos.');
    narrador.hablar('Poco a poco se fueron acercando y creian ver lo que era un cementerio.');
    personajes[jugador].hablar('¿Eso es un cementerio?');
    personajes[malo].hablar('Parece que si, vamos a echar un vistazo');
    personajes[jugador].hablar('Yo ahi no entro ni loco');
    personajes[malo].hablar('Venga que no va a pasar nada');
    narrador.hablar(personajes[jugador].nombre + ' acepto finalmente entrar al cementerio.');
    narrador.hablar('Se pararon en diversas tumbas, pero una parecia sopesar en el ambiente.');
    personajes[jugador].hablar('¿Su- Su- -sa Susana Foster?');
    personajes[malo].hablar('Me suena de algo su apellido');
    personajes[jugador].hablar('A mi tambien, pero no se de que la verdad.');

    //Resetear la pagina (cls)
    //____________________________________________________________________________
    document.getElementsByTagName('main')[0].innerHTML +=
      `<button id="continuar">Continuar...</button>`;
    document.getElementById("continuar").addEventListener("click", function continew(){
      document.getElementsByTagName('main')[0].innerHTML =
        `<h1>${this.titulo}</h1>`;
        seguir();
    });
    //____________________________________________________________________________
    function seguir (){
        narrador.hablar('Ese apellido merodeaba en un lejano recuerdo del cual parecia que no se acordaban.');
        personajes[jugador].hablar('Bueno venga vamonos de aqui, que me da mal rollo');
        personajes[malo].hablar('Bueno venga, no vaya a ser que se te trague la tierra JAJAJ');
        narrador.hablar('Volvieron con la maleza al refugio, poco a poco escuchaban más y más ruidos de la cabaña.');
        narrador.hablar('Soltaron la madera y entraron rapidamente, no podrian creer lo que encontraron.');
        narrador.hablar('¡¡' + personajesInd[0].nombre + ' y ' + personajesInd[1].nombre + ' estaban acabando con todo el suministro de patatas!!');
    }
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
        obj.iniciar(personajes, random, jugador, this.narrador);

        document.getElementsByTagName('footer')[0].innerHTML = ''; //reset del footer
    }
    //____________________________________________________________________________
}

class Personaje{
  constructor(nombre){
    this.nombre = nombre;
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

new SeleccionPersonaje();
