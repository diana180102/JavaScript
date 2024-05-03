/* La conjetura dice lo siguiente:

    Empieza con cualquier número entero positivo.
    Si es par, divídelo entre 2, pero si es impar, multiplícalo por 3 y súmale 1.
    Repite el proceso con el resultado obtenido en el paso anterior.
    Eventualmente llegarás al número 1, independientemente del número inicial.

Implementa la función collatz que reciba un número y retorne el número de pasos necesarios para llegar a 1 según la conjetura de Collatz. 

*/

function collatz(numero) {
    // Implementación
     
    let steps = 0;

     while(numero!=1){

        if(numero % 2 == 0){
            numero = numero / 2;
        }else{
            numero = (numero * 3) + 1;
        }

        steps++;
    }
    
        console.log("Número de pasos necesarios " + steps);
     
        return numero;
  
    }
  
  console.log(collatz(6)); // 8 (6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1)