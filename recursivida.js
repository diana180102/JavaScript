
function sum(arr, n) {
  // Cambia solo el código debajo de esta línea
    if(n<=0){
      return 0;
    }else{
       return sum(arr, n-1) + arr[n-1];
    }
  // Cambia solo el código encima de esta línea
}

sum([2, 3, 4, 5], 3);

