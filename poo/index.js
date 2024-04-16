const cantidadMinima = 2;

class Votacion {
  constructor() {
    this.totalPreguntas = 0;
    this.totalVotaciones = 0;
    this.preguntas = [];
  }

  agregarPregunta(pregunta, respuestas, votoUsuario) {
    this.preguntas.push({
      pregunta: pregunta,
      respuestas: respuestas,
      votoUsuario: votoUsuario
    });
    this.totalPreguntas++;
  }

  iniciar() {
    let pregunta;
    do {
      pregunta = this.obtenerPregunta();

      if (pregunta !== null) {
        this.agregarPregunta(...pregunta);
      }
    } while (pregunta !== null);
  }

  obtenerPregunta() {
    let texto = "Ingrese la pregunta " + (this.totalPreguntas + 1) + " de " + cantidadMinima + " y presione ENTER o el botón ACEPTAR\n\no presione el botón CANCELAR para salir del ingreso de las preguntas";

    if (this.totalPreguntas + 1 >= cantidadMinima) {
      texto = "Ingrese la pregunta " + (this.totalPreguntas + 1) + " y presione ENTER o el botón ACEPTAR\n\no presione el botón CANCELAR para salir del ingreso de las preguntas";
    }
    let pregunta = prompt(texto);

    if (pregunta == null) return null;

    let respuestas = [];

    for (let index = 0; index < 4; index++) {
      texto = "Ingrese la alternativa <" 
      + (index + 1)
      + "> a la pregunta\n¿" 
      + pregunta 
      + "?\n\n1. " 
      + (respuestas[0] || " ") 
      + "\n2. " 
      + (respuestas[1] || " ") 
      + "\n3. "
      + (respuestas[2] || " ")
      + "\n4. "
      + (respuestas[3] || " ") 
      + "\n\ny presione ENTER o el botón ACEPTARn\n\no presione el botón CANCELAR para volver a la pregunta nuevamente";

      let respuesta = prompt(texto);

      if (respuesta == null) return null;

      respuestas.push(respuesta);
    }

    let votoUsuario = [];

    return [pregunta, respuestas, votoUsuario];
  }

  obtenerVotoUsuario() {
    try {
      this.preguntas.forEach(element => {
        let opcion;
        do {
          opcion = parseInt(prompt("Seleccione la alternativa de su preferencia a la pregunta\n¿" + element.pregunta + "?\n\n1. " + element.respuestas[0] + "\n2. " + element.respuestas[1] + "\n3. " + element.respuestas[2] + "\n4. " + element.respuestas[3] + "\n\ny presione ENTER o presione el botón ACEPTAR\no presione CANCELAR para terminar las votaciones"));

          if (isNaN(opcion)) {
            throw new Error("");
          }

        } while (opcion < 1 || opcion > 4);

        element.votoUsuario.push(opcion);
      });
    } catch (e) {
      return -1;
    }

    this.totalVotaciones++;
    alert("Su votación ha terminado exitosamente, gracias por participar");
    return 0;
  }

  mostrarPreguntas() {
    console.log(`Total preguntas: ${this.totalPreguntas}`);
    console.log(`Total votos: ${this.totalVotaciones}`);
    for (let index = 0; index < this.totalPreguntas; index++) {
      console.log(this.preguntas[index]);
    }
  }
}

let votacion = new Votacion();

alert("Comienza el ingreso de preguntas");
votacion.iniciar();

while (votacion.totalPreguntas < cantidadMinima) {
  alertas = prompt(`ADVERTENCIA\nHa ingresado ${votacion.totalPreguntas} de ${cantidadMinima} preguntas\n\n¿Está seguro que desea salir?\n\nDigite SI y presione ENTER o presione el boton ACEPTAR para salir`);

  if (alertas === "SI") {
    alert("Ingreso de preguntas abortado, fin de la sesión");
    break;
  }
  votacion.iniciar();
}

votacion.mostrarPreguntas();

if (votacion.totalPreguntas >= cantidadMinima) {
  alert("Ingreso de preguntas ha terminado exitosamente");

  let voto;
  do {
    alert("Comienza su votación");
    voto = votacion.obtenerVotoUsuario();
  } while (voto == 0);

  alert("Votacion ha terminado exitosamente, vamos a ver los resultados");
}

votacion.mostrarPreguntas();

votacion.preguntas.forEach(element => {
  let contador = {};
  
  element.votoUsuario.forEach(elementVoto => {
    if (!(elementVoto in contador)) {
      contador[elementVoto] = 0;
    }

    contador[elementVoto]++;
  });

  let texto0 = "A la pregunta ¿" + element.pregunta + "?";
  let texto1 = "\nLa alternativa (1) " + element.respuestas[0] + " tiene " + (contador[1] || 0) + " votos";
  let texto2 = "\nLa alternativa (2) " + element.respuestas[1] + " tiene " + (contador[2] || 0) + " votos"; 
  let texto3 = "\nLa alternativa (3) " + element.respuestas[2] + " tiene " + (contador[3] || 0) + " votos";
  let texto4 = "\nLa alternativa (4) " + element.respuestas[3] + " tiene " + (contador[4] || 0) + " votos";

  alert(texto0 + texto1 + texto2 + texto3 + texto4);
});
