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

  preguntas = prompt(`Digite la pregunta de la encuesta\no presione\n<T> para terminar`);

  if (preguntas !== "T" && preguntas !== "t"){
    let index = 0;
    let salida = false;
    respuestas = [];

    do {
      i = index;
      index++;
      respuestas [i] = prompt(`Ingrese la respuesta para la\nopcion ${index}\no presione\n<ENTER> para volver a realizar la encuesta`);
      if (respuestas [i] == null || respuestas [i] == " "){
        let salida = true;
      } 
    } while (index < 4 || salida == true)

    if (salida == false) {  
      do {
        opcionCorrectas = parseInt(prompt(`Ingrese la opción correcta (1, 2, 3, 4)\no presione\n<0> para volver a realizar la encuesta`));
      } while (opcionCorrectas < 0 || opcionCorrectas > 4);

      if (opcionCorrectas !== 0){
         totalEncuestas++;
         encuestas.push (new Encuesta (preguntas, respuestas, opcionCorrectas, 0));
         console.log (encuestas [1]);
      } 
    }
  }
} while (preguntas !== "T" && preguntas !== "t");

