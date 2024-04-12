class Encuesta {
  constructor(pregunta, respuesta, opcionCorrecta) {
    this.pregunta = pregunta;
    this.respuesta = respuesta;
    this.opcionCorrecta = opcionCorrecta;
  }
}

let totalEncuestas = 0;
const encuestas = [];

do {
  preguntas = "";
  respuestas = ["","","",""];
  opcionCorrectas = 0;
  alerta = "";
  salida = false;
  
  preguntas = prompt(`Digite la PREGUNTA número ${totalEncuestas + 1} de la encuesta\n\npresione ENTER o el botón CANCELAR para TERMINAR\n`);

  if (preguntas !== null && preguntas !== ""){
    for (index = 0; index < 4; index++){
      respuestas [index] = prompt(`Digite la RESPUESTA para la opción [${index + 1}] a la pregunta:\n\n¿${preguntas}?\n\nopción 1 -> ${respuestas[0]}\nopción 2 -> ${respuestas[1]}\nopción 3 -> ${respuestas[2]}\nopción 4 -> ${respuestas[3]}\n\npresione ENTER o el botón CANCELAR\npara volver a la PREGUNTA de la encuesta\n`);
      if (respuestas [index] === null || respuestas [index] === ""){
        index = 4;
        salida = true;
      };
    }; 

    if (salida = false){  
      do {
        opcionCorrectas = parseInt(prompt(`Digite la OPCION donde se encuentra\nla RESPUESTA CORRECTA a la pregunta:\n\n¿${preguntas}?\n\nopción 1 -> ${respuestas[0]}\nopción 2 -> ${respuestas[1]}\nopción 3 -> ${respuestas[2]}\nopción 4 -> ${respuestas[3]}\n\npresione ENTER o el botón CANCELAR\npara volver a la PREGUNTA de la encuesta\n`));
      } while (opcionCorrectas < 1 || opcionCorrectas > 4);

      if (opcionCorrectas >= 1 && opcionCorrectas <= 4){
         encuestas.push (new Encuesta (preguntas, respuestas, opcionCorrectas));
         totalEncuestas++;
      };
    }
  } 
  
  if (preguntas !== null && preguntas !== ""){
     if (totalEncuestas < 8){
       alerta = prompt(`Debe ingresar al menos 8 preguntas para la encuesta\n\n¿Esta seguro que desea TERMINAR?\n\nDigite SI y presione ENTER o ACEPTAR para TERMINAR`);
       alerta = alerta.toUpperCase ();
      }
  }

} while (preguntas !== null && preguntas !== "" && alerta !== "SI")

for (index = 0; index < totalEncuestas; index++){
    console.log(encuestas[index]);
}
