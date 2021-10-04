'use strict';

export class Pelicula{
  iniciar(personajes, malo, jugador, narrador, titulo){
    document.getElementsByTagName('main')[0].innerHTML +=
      `<h1>${titulo}</h1>`;
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
        `<h1>${titulo}</h1>`;
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
        narrador.hablar(personajes[malo].nombre + ' les contó a los demás lo que se encontraron en el bosque.');
        narrador.hablar('Todos se asombraron.');
        personajesInd[1].hablar(personajes[jugador].nombre + ' llevame al cementerio ese.');
        personajes[jugador].hablar('Yo ahi no vuelvo');
        personajes[malo].hablar('Yo te llevo que '+ personajes[jugador].nombre +' tiene miedo');
        personajesInd[0].hablar('Os acompaño');
        personajes[jugador].hablar('¿Todavia no han vuelto los monitores?');
        personajesInd[2].hablar('No que yo sepa');
        narrador.hablar('Pasaron las horas y el dia se convirtio en noche.');
        narrador.hablar(personajesInd[2].nombre + ' dejó solo a ' + personajes[jugador].nombre + ' solo durante un rato.');
        narrador.hablar('La hoguera estaba prendida y todos se encontraban alrededor de ella con mascaras rituales.');
        narrador.hablar('Estas mascaras eran parte de un ritual de iniciacion que se inventaron para su grupo de amigos.');
        narrador.hablar('Lo crearon en base a un cuento que le contaban sus padres cuando se portaban mal.');
        narrador.hablar('Se trataba de un ritual en el que ofrecias diversos sacrificios a cambio de una vida del más allá.');
        narrador.hablar('Esto lo adaptaron a su grupo bailando y comiendo en frente de la hoguera; el iniciado debia servir a los demás.');
        narrador.hablar('Esta vez el iniciado era '+ personajesInd[2].nombre +'.');
        personajes[jugador].hablar('Es muy raro que los monitores no hayan vuelto, voy a ver si estan en la cabaña.');
        narrador.hablar(personajes[jugador].nombre + ' se acercó a la cabaña, donde un cierto olor a sangre se cernia en el ambiente.');
        narrador.hablar('Entró en la cabañá y encontró lo que eran los cuerpos de los monitores tendidos en el suelo, cubiertos de una capa de su sangre.');
        personajes[jugador].hablar('AAAAHHHHHHHHHHHHHHHH!!!!!');
        narrador.hablar(personajes[jugador].nombre + ' cayó tendido al suelo de tremendo susto.');
        narrador.hablar('Entró en la cabañá y encontró lo que eran los cuerpos de los monitores tendidos en el suelo, cubiertos de una capa de su sangre.');
        narrador.hablar('Ante tremendo grito, todos fueron a su auxilio, donde encontraron tal panorama.');
        personajesInd[2].hablar('¡¡¿¿Qué coj*n*s ha pasado aqui??!!');
        personajesInd[0].hablar('¡¡Están muertos j*d*r!!');
        personajesInd[0].hablar('No me creo que esto haya pasado...');
        personajesInd[1].hablar(personajes[jugador].nombre + ' está desmayado, quizas el sepa algo.');
        personajes[malo].hablar('Voy a ayudarle');
        narrador.hablar(personajes[jugador].nombre + ' se despertó bruscamente mientras seguia gritango.');
        personajes[jugador].hablar('AAAAHHHHHHhhhhhhh...hhhhh....');
        personajesInd[2].hablar('¡¡¿¿Qué coj*n*s ha pasado aqui??!!');
        personajes[jugador].hablar('...');
        //Resetear la pagina (cls)
        //____________________________________________________________________________
        document.getElementsByTagName('main')[0].innerHTML +=
          `<button id="continuar2">Continuar...</button>`;
        document.getElementById("continuar2").addEventListener("click", function continew2(){
          document.getElementsByTagName('main')[0].innerHTML =
            `<h1>${titulo}</h1>`;
            seguir2();
        });
        //____________________________________________________________________________
        function seguir2 (){
          personajes[malo].hablar('¡¡Calmate j*d*r!! ahora lo importante es estar juntos');
          personajesInd[0].hablar('Tienes razón, pero... ¿Quién los ha matado?');
          narrador.hablar('Todos quedaron perplejos de lo que era la pregunta más obvia.');
          personajesInd[2].hablar('¡¡¿¿Como coj*n*s me voy a calmar??!! seguro que has sido tú');
          narrador.hablar(personajesInd[2].nombre + ' apuntó directamente hacia ' + personajes[malo].nombre);

          //Se introducen los botones
          document.getElementsByTagName('footer')[0].innerHTML =
            `<p class="narrador_hablar"> Elige tu personaje</p>` +
            '<input type="button" value="Defender a '+personajes[malo].nombre+'" id="5" />' +
            '<input type="button" value="Culpar a '+personajes[malo].nombre+'" id="6" />';

          //Selección de rama
          document.getElementById("5").addEventListener("click", function decision(){
            document.getElementsByTagName('footer')[0].innerHTML = ''; //reset del footer
            defender();
          });
          document.getElementById("6").addEventListener("click", function decision(){
            document.getElementsByTagName('footer')[0].innerHTML = ''; //reset del footer
            culpar();
          });

          //Ramas, 2 vías
          function defender(){
            narrador.hablar(personajes[jugador].nombre + ' estaba a favor de ' + personajes[malo].nombre);
            personajes[jugador].hablar('Como va a ser él, chicos es nuestro amigo desde hace mucho tiempo');
            personajes[jugador].hablar('Realmente al que no conocemos es a ' + personajesInd[2].nombre);
            personajes[jugador].hablar('Pero ha estado todo el rato conmigo... o no... ¡se fué antes cuando os fuisteis al cementerio!');
            personajesInd[1].hablar('Pero ' + personajes[malo].nombre + ' tambien se fué cuando llegamos al cementerio.');
            personajes[malo].hablar('¡¡¿¿Quee??!! el que te fuiste eres tú');
            personajesInd[0].hablar('Yo no ví nada...');
            //Se introducen los botones
            document.getElementsByTagName('footer')[0].innerHTML =
              `<p class="narrador_hablar"> Elige tu personaje</p>` +
              '<input type="button" value="Culpar a '+personajes[malo].nombre+'" id="7" />' +
              '<input type="button" value="Culpar a '+personajesInd[0].nombre+'" id="8" />'+
              '<input type="button" value="Culpar a '+personajesInd[1].nombre+'" id="9" />'+
              '<input type="button" value="Culpar a '+personajesInd[2].nombre+'" id="10" />';

            //Selección de rama
            document.getElementById("7").addEventListener("click", function decision2(){
              document.getElementsByTagName('footer')[0].innerHTML = ''; //reset del footer
              vida();
            });
            document.getElementById("8").addEventListener("click", function decision2(){
              document.getElementsByTagName('footer')[0].innerHTML = ''; //reset del footer
              muerte();
            });
            document.getElementById("9").addEventListener("click", function decision2(){
              document.getElementsByTagName('footer')[0].innerHTML = ''; //reset del footer
              muerte();
            });
            document.getElementById("10").addEventListener("click", function decision2(){
              document.getElementsByTagName('footer')[0].innerHTML = ''; //reset del footer
              muerte();
            });

            //Ramas
            function vida(){
              narrador.hablar(personajes[jugador].nombre + ' finalmete culpó a '+ personajes[malo].nombre);
              personajes[malo].hablar('¡¡¿¿Quee??!! ¡eres un hijo de ****!');
              narrador.hablar(personajes[malo].nombre + ' sacó un cuchillo lleno de sangre.');
              narrador.hablar(personajes[malo].nombre + ' intentó atacar a '+ personajes[jugador].nombre +' pero '+personajesInd[0].nombre+' se puso entre medias.');
              narrador.hablar(personajesInd[0].nombre+' sangraba mucho.');
              personajes[jugador].hablar('¡Malditooo! estás muerto');
              narrador.hablar('Todos atacaron a '+personajes[malo].nombre+' y acabó muerto.');
              narrador.hablar('Nunca sabremos por que hizo lo que hizo.');
              narrador.hablar('Lo que si sabemos es que gracias a la ayuda de todos pudieron salvar a '+ personajesInd[0].nombre+ ' gracias a un torniquete.');
              narrador.hablar('Fin');
            }
            function muerte (){
              narrador.hablar(personajes[malo].nombre + ' sacó un cuchillo lleno de sangre.');
              narrador.hablar('Todos intentaron huir de '+personajes[malo].nombre+' pero poco a poco les fué dando caza hasta llegar a '+personajes[jugador].nombre+'.');
              personajes[malo].hablar('Vosotros matasteis a mi hermana.');
              personajes[jugador].hablar('¡¡¿¿Quee??!!');
              personajes[malo].hablar('Mi hermana era Susana Foster, ¿no la recuerdas..?');
              personajes[malo].hablar('No recuerdas cuando "accidentalmente", segun tu, murió por que estaba loca.');
              personajes[malo].hablar('¡No lo estaba! tú fuiste quien la mató, se suicido por que se enamoró de ti y tu la humillaste.');
              personajes[malo].hablar('¡Ahora moriras!');
              narrador.hablar('Todos murieron');
              narrador.hablar('Fin');
            }
          }
          function culpar(){
            narrador.hablar(personajes[jugador].nombre + ' culpó a '+ personajes[malo].nombre + ' junto a ' + personajesInd[2].nombre);
            narrador.hablar(personajes[malo].nombre + ' sacó un cuchillo lleno de sangre.');
            narrador.hablar('Todos intentaron huir de '+personajes[malo].nombre);
            personajes[malo].hablar('Vosotros matasteis a mi hermana.');
            personajes[jugador].hablar('¡¡¿¿Quee??!!');
            personajes[malo].hablar('Mi hermana era Susana Foster, ¿no la recuerdas..?');
            personajes[malo].hablar('No recuerdas cuando "accidentalmente", segun tu, murió por que estaba loca.');
            personajes[malo].hablar('¡No lo estaba! tú fuiste quien la mató, se suicido por que se enamoró de ti y tu la humillaste.');
            personajes[malo].hablar('¡Ahora morireis!');
            narrador.hablar(personajes[jugador].nombre+' saco una navaja y atacó a '+ personajes[malo].nombre);
            narrador.hablar('Gracias a la ayuda de todos consiguieron asestarle un golpe y '+personajes[malo].nombre+' murió.');
            narrador.hablar('Fin');
          }
        }
    }
  }
}
