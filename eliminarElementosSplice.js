
/* splice(posicionDelElemento, cantidadElementorEliminar) */

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Cambia solo el código debajo de esta línea
let newA= arr.splice(1,4);
let sum = 0;
 
 for(let i = 0; i<newA.length-1; i++) {
    sum+= newA[i];
}


// Cambia solo el código encima de esta línea
console.log(arr);