function destroyer(arr, ...num) {

    //filtro el array y evaluo cada item,
    //evaluo si cada argumento es diferente a los items del array
   return arr.filter(item =>  !num.includes(item));
     
  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
