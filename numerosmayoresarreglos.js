function largestOfFour(arr) {

    let mayores = [];
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        max = arr[i][0];  //Asumimos que el primero elemento de cada fila es el número mayor
        for (let j = 0; j < arr.length; j++) {
    
            if (arr[i][j] > max) {
                max = arr[i][j];

            }
        }
        
        mayores[i] = max;

    }
    console.log(mayores);


    return mayores;
}

largestOfFour([
    [17, 23, 25, 12], 
    [25, 7, 34, 48], 
    [4, -10, 18, 21], 
    [-72, -3, -17, -10]])