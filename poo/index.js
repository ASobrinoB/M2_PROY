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
  console.log("");
  console.log(`Encuestas registradas: ${totalEncuestas}`);
  console.log("");

  preguntas = prompt(`Digite la pregunta de la encuesta o presione <T> para terminar de ingresar encuestas`);

  if (preguntas !== "T" && preguntas !== "t") {
  
    let index = 0;
    let salida = false;
  
    respuestas = [];

    do {
      i = index;
      index++;

      respuestas [i] = prompt(`Ingrese la respuesta para la opcion ${index} o presione <ENTER> para volver a realizar la pregunta`);
    
      if (respuestas [i] == null || respuestas [i] == " "){
        let salida = true;
      } 
    } while (index < 4 || salida == true)

    if (salida == false) {
  
      do {
        opcionCorrectas = parseInt(prompt(`Ingrese la opción correcta (1, 2, 3, 4) o presione <0> para volver a realizar la pregunta`));
      } while (opcionCorrectas < 0 || opcionCorrectas > 4);

      if (opcionCorrectas !== 0){
         totalEncuestas++;
         encuestas [totalEncuestas] = new Encuesta (preguntas, respuestas, opcionCorrectas, 0));
         console.log (encuestas[totalEncuestas]);
      } 
    }
  }
} while (preguntas !== "T" && preguntas !== "t");

