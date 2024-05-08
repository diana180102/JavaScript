/* Implementa la función diasDelMes que recibe un número del 1 al 12 que representa un mes (enero es 1, febrero es 2, etc.) y un año. La función debe retornar la cantidad de días de ese mes, teniendo en cuenta si es un año bisiesto para febrero. (en los años bisiestos febrero tiene 29 días en lugar de 28). */


function diasDelMes(mes, año) {
  // completar

    let mounthdays1 = [1, 3, 5, 7, 8,10, 12]; // 31
    let mounthdays2 = [4, 6, 9, 11]; // 30

   for (let i = 0; i < mounthdays1.length; i++) {
    if (mounthdays1[i] === mes) {
        return 31;
    }
    
   }


   for (let i = 0; i < mounthdays2.length; i++) {
     if (mounthdays2[i] === mes) {
        return 30;
     }
    
   }

   if(año % 4 === 0 && año % 100 !== 0 ||  año % 400 == 0  && mes === 2){
       return 29;
   } else{
     return 28;
   }


  
}

console.log(diasDelMes(2, 2020)); // 29
console.log(diasDelMes(2, 2021)); // 28
console.log(diasDelMes(4, 2020)); // 30