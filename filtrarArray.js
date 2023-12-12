function filteredArray(arr, elem) {
    let newArr = [];
    // Cambia solo el código debajo de esta línea
     arr.some(( elemento ) => {
          if(!elemento.includes(elem)){
             newArr.push(elemento);
          }
     } );
    // Cambia solo el código encima de esta línea
    return newArr;
  }
  
  console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));