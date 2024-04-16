const cantidadMinima = 8;

function agregarPregunta(votacion, pregunta, respuestas, votoUsuario) {
  return {
    totalPreguntas: votacion.totalPreguntas + 1,
    totalVotaciones: votacion.totalVotaciones,
    preguntas: votacion.preguntas.concat({ pregunta, respuestas, votoUsuario })
  };
}

function obtenerPregunta(totalPreguntas) {
  let texto = "Ingrese la pregunta " + (totalPreguntas + 1) + " de " + cantidadMinima + " y presione ENTER o el botón ACEPTAR\n\no presione el botón CANCELAR para salir del ingreso de las preguntas";

  if (totalPreguntas + 1 >= cantidadMinima) {
    texto = "Ingrese la pregunta " + (totalPreguntas + 1) + " y presione ENTER o el botón ACEPTAR\n\no presione el botón CANCELAR para salir del ingreso de las preguntas";
  }
  let pregunta = prompt(texto);

  if (pregunta == null) return null;

  let respuestas = Array.from({ length: 4 }, (_, index) => {
    return prompt(`Ingrese la alternativa <${index + 1}> a la pregunta\n¿${pregunta}?\n\ny presione ENTER o el botón ACEPTAR\n\no presione el botón CANCELAR para volver a la pregunta nuevamente`);
  });

  let votoUsuario = [];

  return [pregunta, respuestas, votoUsuario];
}

function obtenerVotoUsuario(preguntas) {
  try {
    preguntas.forEach(element => {
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

  return 0;
}

function mostrarPreguntas(votacion) {
  console.log(`Total preguntas: ${votacion.totalPreguntas}`);
  console.log(`Total votos: ${votacion.totalVotaciones}`);
  votacion.preguntas.forEach(question => {
    console.log(question);
  });
}

function iniciarVotacion() {
  let votacion = {
    totalPreguntas: 0,
    totalVotaciones: 0,
    preguntas: []
  };

  alert("Comienza el ingreso de preguntas");

  let pregunta;
  do {
    pregunta = obtenerPregunta(votacion.totalPreguntas);

    if (pregunta !== null) {
      votacion = agregarPregunta(votacion, ...pregunta);
    }
  } while (pregunta !== null);

  while (votacion.totalPreguntas < cantidadMinima) {
    alertas = prompt(`ADVERTENCIA\nHa ingresado ${votacion.totalPreguntas} de ${cantidadMinima} preguntas\n\n¿Está seguro que desea salir?\n\nDigite SI y presione ENTER o presione el boton ACEPTAR para salir`);

    if (alertas === "SI") {
      alert("Ingreso de preguntas abortado, fin de la sesión");
      break;
    }
    pregunta = obtenerPregunta(votacion.totalPreguntas);
    if (pregunta !== null) {
      votacion = agregarPregunta(votacion, ...pregunta);
    }
  }

  mostrarPreguntas(votacion);

  if (votacion.totalPreguntas >= cantidadMinima) {
    alert("Ingreso de preguntas ha terminado exitosamente");

    let voto;
    do {
      alert("Comienza su votación");
      voto = obtenerVotoUsuario(votacion.preguntas);
    } while (voto == 0);

    alert("Votacion ha terminado exitosamente, vamos a ver los resultados");
  }

  mostrarPreguntas(votacion);

  votacion.preguntas.forEach(element => {
    let contador = {};
    element.votoUsuario.forEach(elementVoto => {
      if (!(elementVoto in contador)) {
        contador[elementVoto] = 0;
      }
      contador[elementVoto]++;
    });

    let texto0 = "A la pregunta\n\n¿" + element.pregunta + "?";
    let texto1 = "\n\nLa alternativa (1) " + element.respuestas[0] + " tiene " + (contador[1] || 0) + " votos";
    let texto2 = "\n\nLa alternativa (2) " + element.respuestas[1] + " tiene " + (contador[2] || 0) + " votos";
    let texto3 = "\n\nLa alternativa (3) " + element.respuestas[2] + " tiene " + (contador[3] || 0) + " votos";
    let texto4 = "\n\nLa alternativa (4) " + element.respuestas[3] + " tiene " + (contador[4] || 0) + " votos";

    alert(texto0 + texto1 + texto2 + texto3 + texto4);
  });
}

iniciarVotacion();
