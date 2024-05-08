function dropElements(arr, func) {
  
  let newArray = [];

  
  
  let long = arr.length;  // Tamaño cambia a medida que se va eliminando
  
  
 for (let i = 0; i < long; i++) {
    
    /*  SI el valor de la posición 0 es verdadera el FOR es verdadera la comprobación se detiene
        y imprime lo que queda del array.

        SI el valor de la posición 0, no cumple la condición el elemento es eliminado
        y vuelve hacer la comprobación hasta encontrar un valor
        que cumpla la condición de la función y pueda imprimir
        lo que reste del arreglo.
        
        */

    if(func(arr[0])){
      newArray = arr;
      break;
     }else{
       arr.shift();
      }
   }


    
    console.log(newArray);


  
  
  return newArray;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([0, 1, 0, 1], function(n) {return n === 1;});

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
dropElements([1, 2, 3, 4], function(n) {return n > 5;})
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});