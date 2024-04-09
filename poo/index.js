class Encuesta {
  constructor(pregunta, respuesta, opcionCorrecta) {
    this.pregunta = pregunta;
    this.respuesta = respuesta;
    this.opcionCorrecta = opcionCorrecta;
  }
}

totalEncuestas = 0;
let encuestas = [];
let respuestas = [];
let opcionCorrectas = 0;

do {
  preguntas = prompt(`Digite la PREGUNTA nro. ${totalEncuestas + 1} de la ENCUESTA\nsino presione\n<ENTER> para TERMINAR`);

  if (preguntas !== null && preguntas !== ""){

    salida = false
    for (index = 0; index < 4; index++){
      respuestas [index] = prompt(`Ingrese la RESPUESTA para la\nOPCION ${index + 1}\na la PREGUNTA: ${preguntas}\nsino presione\n<ENTER> para volver a realizar la PREGUNTA`);
      if (respuestas [index] === null || respuestas [index] === ""){
        index = 4;
        salida = true;
      }  
    }    

    if (!salida) {  
      do {
        opcionCorrectas = parseInt(prompt(`Ingrese la opción correcta de la PREGUNTA: ${preguntas}\n1 -> ${respuestas[0]}\n2 -> ${respuestas[1]}\n3 -> ${respuestas[2]}\n4 -> ${respuestas[3]}\nsino presione\n<ENTER> para volver a realizar la PREGUNTA`));
      } while (opcionCorrectas < 1 || opcionCorrectas > 4);

      if (opcionCorrectas >= 1 && opcionCorrectas <= 4){
         encuestas.push (new Encuesta (preguntas, respuestas, opcionCorrectas));
         totalEncuestas++;
      } 
    }
  }
} while (preguntas !== null && preguntas !== "");

encuestas.forEach((value) => console.log(value));

