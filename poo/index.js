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

    let opcionCorrecta = 0;

    do {
      opcionCorrecta = parseInt(prompt(`Digite la alternativa correcta de la pregunta\n¿${pregunta}?\n\n1. ${respuestas[0]}\n2. ${respuestas[1]}\n3. ${respuestas[2]}\n4. ${respuestas[3]}\n\ny presione el botón ACEPTAR o presione el botón CANCELAR para ingresar la pregunta nuevamente`));

      if (!opcionCorrecta) return null;

    } while (opcionCorrecta < 1 || opcionCorrecta > 4);

    let opcionUsuario = 0;

    return [pregunta, respuestas, opcionCorrecta, opcionUsuario];
  }

  obtenerOpcionUsuario(index) {
    do {
      this.encuestas.opcionUsuario [index] = parseInt(prompt(`Digite la alternativa correcta de la pregunta\n¿${this.pregunta}?\n\n1. ${this.respuestas[0]}\n2. ${this.respuestas[1]}\n3. ${this.respuestas[2]}\n4. ${this.respuestas[3]}\n\ny presione el botón ACEPTAR o presione el botón CANCELAR para ingresar la pregunta nuevamente`));
      if (!this.encuestas.opcionUsuario [index]) {
        this.encuestas.opcionUsuario [index] = 0; 
        return;
      };
    } while (this.encuestas.opcionUsuario [index] < 1 || this.encuestas.opcionUsuario [index] > 4);
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

if (encuesta.totalEncuestas >= cantidadMinima){
   for (let index = 0; index < encuesta.totalEncuestas; index++) {
       encuesta.obtenerOpcionUsuario (index);
}
}