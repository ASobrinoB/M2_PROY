class Encuesta {
  constructor(pregunta, respuesta, opcionCorrecta) {
    this.pregunta = pregunta;
    this.respuesta = respuesta;
    this.opcionCorrecta = opcionCorrecta;
  }
}

var totalEncuestas = 0;
var encuestas = [];

do {
  var preguntas = "";
  var alertas = "";
  var respuestas = ["", "", "", ""];
  var opcionCorrectas = 0;
  
  preguntas = prompt(`Digite la PREGUNTA número ${totalEncuestas + 1} de la encuesta\n\npresione ENTER o el botón CANCELAR para TERMINAR\n`);
  alert (preguntas);

  if (preguntas !== null && preguntas !== ""){  
     respuestas = ["", "", "", ""];
          
     for (let index = 0; index < 4; index++){
         respuestas[index] = prompt(`Digite la RESPUESTA para la opción [${index + 1}] a la pregunta:\n\n¿${preguntas}?\n\nopción 1 -> ${respuestas[0]}\nopción 2 -> ${respuestas[1]}\nopción 3 -> ${respuestas[2]}\nopción 4 -> ${respuestas[3]}\n\npresione ENTER o el botón CANCELAR\npara volver a la PREGUNTA de la encuesta\n`);
         alert (respuestas[index]);
             
         if (respuestas[index] === null || respuestas[index] === ""){
            break;
         }
     }

     if (respuestas[3] !== null && respuestas[3] !== ""){  
        do {
          opcionCorrectas = parseInt(prompt(`Digite la OPCION donde se encuentra\nla RESPUESTA CORRECTA a la pregunta:\n\n¿${preguntas}?\n\nopción 1 -> ${respuestas[0]}\nopción 2 -> ${respuestas[1]}\nopción 3 -> ${respuestas[2]}\nopción 4 -> ${respuestas[3]}\n\npresione ENTER o el botón CANCELAR\npara volver a la PREGUNTA de la encuesta\n`));
        } while (opcionCorrectas < 1 || opcionCorrectas > 4)

        alert (opcionCorrectas);

        if (opcionCorrectas >= 1 && opcionCorrectas <= 4){
           encuestas.push(new Encuesta(preguntas, respuestas, opcionCorrectas));
           totalEncuestas++;

           alert (totalEncuestas)
         }
      }
   } else {
        if (totalEncuestas <= 8){
           alertas = prompt(`Debe ingresar al menos 8 preguntas para la encuesta\n\n¿Está seguro que desea TERMINAR?\n\nDigite SI y presione ENTER o ACEPTAR para TERMINAR`);
           alert (alertas);

           if (alertas === null){
              preguntas = "volver al do-while";
              alert (preguntas);
            } else {
              alertas = alertas.toUpperCase()
              if (alertas !== "SI"){
                preguntas = "volver al do-while";
                alert (preguntas);
              }
            }
           }           
   }
   
   alert (preguntas);

} while (preguntas !== null && preguntas !== "")

for (let index = 0; index < totalEncuestas; index++){
    console.log(encuestas[index]);
}