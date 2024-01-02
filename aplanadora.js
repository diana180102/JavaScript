function steamrollArray(arr) {
    
    let newArray = [];
    

    function aplanar(arr) {
        
        for (let i = 0; i < arr.length; i++) {
            /* SI, la posición i es un arreglo,
             ENTONCES vuelve a iterar sobre la misma función APLANAR  hasta que la i deje de ser un arreglo y posteriormente guardar el valor en un nuevo arreglo.
             */
            if(Array.isArray(arr[i])){
                aplanar(arr[i]);
            }else{
                newArray.push(arr[i]);
            }
            
        }
    }

    aplanar(arr);

    console.log(newArray);
  
   
  
  return newArray;
}




steamrollArray([1, [2], [3, [[4]]]]);