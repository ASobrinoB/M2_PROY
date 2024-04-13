class Encuesta {
    constructor(pregunta, respuesta, opcionCorrecta) {
      this.pregunta = pregunta;
      this.respuesta = respuesta;
      this.opcionCorrecta = opcionCorrecta;
    }
  }
  
  let totalEncuestas = 0;
  let encuestas = [];
  let preguntas = "";
  
  do {
    let alertas = "";
    let respuestas = ["", "", "", ""];
    let opcionCorrectas = 0;
    
    preguntas = prompt(`Digite la pregunta número ${totalEncuestas + 1} de la encuesta\n\no presione ENTER o el botón CANCELAR\npara salir del ingreso de las preguntas\n`);
  /*  alert (preguntas);*/
  
    if (preguntas !== null && preguntas !== ""){  
       respuestas = ["", "", "", ""];
            
       for (let index = 0; index < 4; index++){
           respuestas[index] = prompt(`Digite la respuesta para la alternativa [${index + 1}] de la\n\npregunta: ¿${preguntas}?\n\n1 -> ${respuestas[0]}\n2 -> ${respuestas[1]}\n3 -> ${respuestas[2]}\n4 -> ${respuestas[3]}\n\no presione ENTER o el botón CANCELAR\npara volver a ingresar la pregunta número ${totalEncuestas + 1} de la encuesta\n`);
  /*         alert (respuestas[index]);*/
               
           if (respuestas[index] === null || respuestas[index] === ""){
              break;
           }
       }
  
       if (respuestas[3] !== null && respuestas[3] !== ""){  
          do {
            opcionCorrectas = parseInt(prompt(`Digite la alternativa correcta de la\n\npregunta: ¿${preguntas}?\n\n1 -> ${respuestas[0]}\n2 -> ${respuestas[1]}\n3 -> ${respuestas[2]}\n4 -> ${respuestas[3]}\n\no presione ENTER o el botón CANCELAR\npara volver a ingresar la pregunta número ${totalEncuestas + 1} de la encuesta\n`));
          } while (opcionCorrectas < 1 || opcionCorrectas > 4)
  
  /*        alert (opcionCorrectas);*/
  
          if (opcionCorrectas >= 1 && opcionCorrectas <= 4){
             encuestas.push(new Encuesta(preguntas, respuestas, opcionCorrectas));
             totalEncuestas++;
  
  /*           alert (totalEncuestas)*/
           }
        }
     } else {
          if (totalEncuestas <= 8){
             alertas = prompt(`Advertencia: Debe ingresar al menos 8 preguntas a la encuesta\n\n¿Está seguro que desea salir?\n\nDigite SI y presione ENTER o ACEPTAR para salir`);
  /*           alert (alertas);*/
  
             if (alertas === null){
                preguntas = "volver al do-while";
  /*              alert (preguntas);*/
              } else {
                alertas = alertas.toUpperCase()
                if (alertas !== "SI"){
                  preguntas = "volver al do-while";
  /*                alert (preguntas);*/
                }
              }
             }           
     }
     
  /*   alert (preguntas)*/
  
  } while (preguntas !== null && preguntas !== "")
  
  for (let index = 0; index < totalEncuestas; index++){
      console.log(encuestas[index]);
  }
  