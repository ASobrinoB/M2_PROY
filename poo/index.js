class Encuesta {
  constructor(pregunta, respuesta, opcionCorrecta, opcionUsuario) {
    this.pregunta = pregunta;
    this.respuesta = respuesta;
    this.opcionCorrecta = opcionCorrecta;
    this.opcionUsuario = opcionUsuario;
  }
}

totalEncuestas = 0;
let encuestas = [];
let respuestas = [];

do {
  console.log("Ingreso de Encuestas");
  console.log("--------------------");
  console.log("\n");
  console.log(`Encuestas registradas: ${totalEncuestas}`);
  console.log("\n");

  preguntas = prompt(`Digite la PREGUNTA nro. ${totalEncuestas + 1} de la ENCUESTA\nsino presione\n<ENTER> para TERMINAR`);

  if (preguntas !== null && preguntas !== ""){
    index = 1;
    salida = false;

    do {
      respuestas [index - 1] = prompt(`Ingrese la RESPUESTA para la\nOPCION ${index}\na la PREGUNTA: ${preguntas}\nsino presione\n<ENTER> para volver a realizar la PREGUNTA`);
      
      if (respuestas [index - 1] === null || respuestas [index - 1] === ""){
         salida = true;
      } else {
        index++;
      }
    } while (index <= 4 && salida == false)

    if (salida == false) {  
      do {
        opcionCorrectas = parseInt(prompt(`Ingrese la opción correcta de la PREGUNTA: ${preguntas}\n1 -> ${respuestas[0]}\n2 -> ${respuestas[1]}\n3 -> ${respuestas[2]}\n4 -> ${respuestas[3]}\nsino presione\n<ENTER> para volver a realizar la PREGUNTA`));
      } while (opcionCorrectas < 1 || opcionCorrectas > 4);

      if (opcionCorrectas !== null && opcionCorrectas !== ""){
         encuestas.push (new Encuesta (preguntas, respuestas, opcionCorrectas, 0));
         totalEncuestas++;
      } 
    }
  }
} while (preguntas !== null && preguntas !== "");

