function frankenSplice(arr1, arr2, n) {
    
    
     let arrNew = [];

     arrNew = arr2.slice(); 

    arrNew.splice(n, 0, ...arr1);

    console.log(arrNew);

  return arrNew;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice([1, 2, 3], [4, 5], 1)