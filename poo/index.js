class Encuesta {
  constructor(pregunta, respuesta, opcionCorrecta) {
    this.pregunta = pregunta;
    this.respuesta = respuesta;
    this.opcionCorrecta = opcionCorrecta;
  }
}

totalEncuestas = 0;
let encuestas = [];
let opcionCorrectas = 0;

do {
  preguntas = prompt(`Digite la pregunta número ${totalEncuestas + 1} de la encuesta\no presione <ENTER> para terminar`);
  if (preguntas !== null && preguntas !== ""){

    respuestas = [];
    salida = false
    for (index = 0; index < 4; index++){
      respuestas [index] = prompt(`Digite la respuesta para la opción ${index + 1}\na la pregunta:\n¿${preguntas}?\no presione <ENTER> para volver a la pregunta de la encuesta`);
      if (respuestas [index] === null || respuestas [index] === ""){
        index = 4;
        salida = true;
      }  
    }    

    if (!salida) {  
      do {
        opcionCorrectas = parseInt(prompt(`Digite la repuesta correcta de la pregunta:\n¿${preguntas}?\nopción 1 -> ${respuestas[0]}\nopción 2 -> ${respuestas[1]}\nopción 3 -> ${respuestas[2]}\nopción 4 -> ${respuestas[3]}\no presione <ENTER> para volver a la pregunta de la encuesta`));
      } while (opcionCorrectas < 1 || opcionCorrectas > 4);

      if (opcionCorrectas >= 1 && opcionCorrectas <= 4){
         encuestas.push (new Encuesta (preguntas, respuestas, opcionCorrectas));
         totalEncuestas++;
      } 
    }
  }
} while (preguntas !== null && preguntas !== "");

for (index = 0; index < totalEncuestas; index++){
    console.log(encuestas[index]);
}
