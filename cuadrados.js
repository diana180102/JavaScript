const squareList = arr => {
    // Cambia solo el código debajo de esta línea
     let cuadrados = [] ;

     cuadrados = arr.filter(num => Number.isInteger(num) && num> 0 )
                    .reduce((accu, num) => { 
                       accu.push(Math.pow(num, 2));
                      return accu;
                    }, []);
                    


    
     return cuadrados;
    // Cambia solo el código encima de esta línea
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);