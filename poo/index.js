const cantidadMinima = 2

class Encuesta {
  constructor() {
    this.totalEncuestas = 0;
    this.encuestas = [];
  }

  agregarPregunta(pregunta, respuestas, opcionCorrecta, opcionUsuario) {
    this.encuestas.push({
      pregunta: pregunta,
      respuestas: respuestas,
      opcionCorrecta: opcionCorrecta,
      opcionUsuario: opcionUsuario
    });
    this.totalEncuestas++;
  }

  iniciar() {
    let preguntas;
    do {
      preguntas = this.obtenerPregunta();
      if (preguntas) {
        this.agregarPregunta(...preguntas);
      }
    } while (preguntas);
    this.mostrarEncuestas();
  }

  obtenerPregunta() {
    let pregunta = prompt(`Digite la pregunta ${this.totalEncuestas + 1} de ${cantidadMinima} para llenar la encuesta y presione el botón ACEPTAR\n\no presione el botón CANCELAR para salir del ingreso de la encuesta`);

    if (!pregunta) return null;

    let respuestas = [];
    for (let index = 0; index < 4; index++) {
      let respuesta = prompt(`Digite la alternativa (${index + 1}.) de la pregunta\n¿${pregunta}?\n\n1. ${respuestas[0]}\n2. ${respuestas[1]}\n3. ${respuestas[2]}\n4. ${respuestas[3]}\n\ny presione el botón ACEPTAR o presione el botón CANCELAR para ingresar la pregunta nuevamente`);
      if (!respuesta) return null;
      respuestas.push(respuesta);
    }

    let opcionCorrecta;
    do {
      let opcionCorrecta = parseInt(prompt(`Digite la alternativa correcta de la pregunta\n¿${pregunta}?\n\n1. ${respuestas[0]}\n2. ${respuestas[1]}\n3. ${respuestas[2]}\n4. ${respuestas[3]}\n\ny presione el botón ACEPTAR o presione el botón CANCELAR para ingresar la pregunta nuevamente`));
      if (!opcionCorrecta) return null;
    } while (opcionCorrecta < 1 || opcionCorrecta > 4);

    let opcionUsuario = 0;

    return [pregunta, respuestas, opcionCorrecta, opcionUsuario];
  }

  mostrarEncuestas() {
    console.log(`Total de preguntas ingresadas: ${this.totalEncuestas}`);
    for (let index = 0; index < this.totalEncuestas; index++) {
      console.log(this.encuestas[index]);
    }
  }
}

let encuesta = new Encuesta();
encuesta.iniciar();

while (encuesta.totalEncuestas < cantidadMinima){
    alertas = prompt(`ADVERTENCIA\nHa ingresado ${encuesta.totalEncuestas} de ${cantidadMinima} preguntas\n\n¿Está seguro que desea salir?\n\nDigite SI y presione ENTER o ACEPTAR para salir`);

    if (alertas === "SI"){
       break;
    }
  encuesta.iniciar();  
}

if (encuesta.totalEncuestas >= cantidadMinima) {
  for (let index = 0; index < encuesta.totalEncuestas; index++) {
      do {
        encuesta.opcionUsuario[index] = parseInt(prompt(`¿${encuesta.pregunta[index]}?\n\n1. ${encuesta.respuestas[index][0]}\n2. ${encuesta.respuestas[index][1]}\n3. ${encuesta.respuestas[index][2]}\n4. ${encuesta.respuestas[index][3]}\n\nIngrese la alternativa correcta y presione el botón ACEPTAR o presione el botón CANCELAR para salir`));
        if (!encuesta.opcionUsuario[index]){
          encuesta.opcionUsuario[index] = 0;
        }
      } while (encuesta.opcionUsuario[index] < 1 || encuesta.opcionUsuario[index] > 4);
    }
    };